/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { Search, Hammer, ArrowDown, MapPin, ChevronDown, Info } from 'lucide-react';
import { getPrices, getItemIconUrl, getItemName, getEnchantedId } from '../lib/albion-api';
import { MarketPrice, ENCHANTMENTS, CITIES } from '../types';
import { CRAFT_RECIPES, CraftRecipe } from '../data/recipes';

export function CraftScanner() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEnchantment, setSelectedEnchantment] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [allCityPrices, setAllCityPrices] = useState<MarketPrice[]>([]);
  const [sellCity, setSellCity] = useState('Caerleon');
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<CraftRecipe | null>(null);
  const [isPremium, setIsPremium] = useState(true);
  const [useFocus, setUseFocus] = useState(false);

  const filteredRecipes = useMemo(() => {
    if (!searchTerm) return [];
    const lowerSearch = searchTerm.toLowerCase();
    return CRAFT_RECIPES.filter(r => 
      r.name.toLowerCase().includes(lowerSearch) ||
      r.id.toLowerCase().includes(lowerSearch)
    ).sort((a, b) => {
      const aStarts = a.name.toLowerCase().startsWith(lowerSearch);
      const bStarts = b.name.toLowerCase().startsWith(lowerSearch);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return 0;
    });
  }, [searchTerm]);

  const analyzeCraft = async (recipe: CraftRecipe) => {
    setLoading(true);
    setSelectedRecipe(recipe);
    
    const productId = getEnchantedId(recipe.id, selectedEnchantment);
    const materialIds = recipe.materials.map(m => getEnchantedId(m.id, selectedEnchantment));
    const itemIds = [productId, ...materialIds];
    
    const data = await getPrices(itemIds, CITIES);
    setAllCityPrices(data.filter(p => p.item_id === productId));
    
    const priceMap: Record<string, number> = {};
    let bestCity = sellCity;
    let maxPrice = 0;

    data.forEach(p => {
      // For materials, we take the cheapest across all cities
      if (materialIds.includes(p.item_id) && p.sell_price_min > 0) {
        if (!priceMap[p.item_id] || p.sell_price_min < priceMap[p.item_id]) {
          priceMap[p.item_id] = p.sell_price_min;
        }
      }
      
      // For the product, track the best city
      if (p.item_id === productId && p.sell_price_min > maxPrice) {
        maxPrice = p.sell_price_min;
        bestCity = p.city;
      }
    });
    
    // Set product price for the current sellCity
    const currentCityPrice = data.find(p => p.item_id === productId && p.city === sellCity);
    if (currentCityPrice) {
      priceMap[productId] = currentCityPrice.sell_price_min;
    } else {
      // Fallback if no price in selected city
      priceMap[productId] = maxPrice;
    }
    
    setPrices(priceMap);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedRecipe) {
      analyzeCraft(selectedRecipe);
    }
  }, [selectedEnchantment, sellCity]);

  const sortedCities = useMemo(() => {
    if (!selectedRecipe) return [];
    const productId = getEnchantedId(selectedRecipe.id, selectedEnchantment);
    
    // Group by city and take best price for each
    const uniqueMap: Record<string, MarketPrice> = {};
    allCityPrices.forEach(p => {
      if (p.item_id === productId && p.sell_price_min > 0) {
        if (!uniqueMap[p.city] || p.sell_price_min < uniqueMap[p.city].sell_price_min) {
          uniqueMap[p.city] = p;
        }
      }
    });

    return Object.values(uniqueMap)
      .sort((a, b) => b.sell_price_min - a.sell_price_min);
  }, [allCityPrices, selectedRecipe, selectedEnchantment]);

  const calculateProfit = () => {
    if (!selectedRecipe) return null;
    
    const productId = getEnchantedId(selectedRecipe.id, selectedEnchantment);
    const productPrice = prices[productId] || 0;
    
    // RRR standard: 15.2% base, 24.8% with city bonus, 47.9% focus
    // Some items like bags/capes might have 0% in some cities
    let rrr = 15.2;
    if (selectedRecipe.bonusCity === "Any" || selectedRecipe.bonusCity === "Todas as Cidades" || selectedRecipe.bonusCity === "Toda Cidade") {
        rrr = 24.8;
    } else if (selectedRecipe.bonusCity) {
        // Simple logic: if there is a bonus city defined, assume we craft there
        rrr = 24.8;
    }
    
    if (useFocus) rrr = 47.9;
    
    let rawCost = 0;
    selectedRecipe.materials.forEach(m => {
      const materialId = getEnchantedId(m.id, selectedEnchantment);
      rawCost += (prices[materialId] || 0) * m.count;
    });

    const effectiveCost = rawCost * (1 - rrr / 100);
    const taxRate = isPremium ? 0.04 : 0.08;
    const tax = productPrice * taxRate;
    const profit = productPrice - effectiveCost - tax;
    const margin = effectiveCost > 0 ? (profit / effectiveCost) * 100 : 0;

    return { 
      productPrice, 
      rawCost, 
      effectiveCost, 
      profit, 
      margin, 
      rrr, 
      tax,
      totalCost: effectiveCost * quantity,
      totalProfit: profit * quantity,
      totalRevenue: productPrice * quantity
    };
  };

  const result = calculateProfit();

  return (
    <div className="space-y-8">
      <div className="bg-[#1a1614] border border-[#2d2824] rounded-xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <h2 className="text-xl font-bold text-white italic flex items-center gap-2">
            <Hammer className="text-amber-500" />
            Calculadora de Lucro de Craft
          </h2>
          
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-[#0d0b0a] border border-[#2d2824] rounded-lg px-3 py-1">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Quantidade:</span>
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-16 bg-transparent text-white font-bold text-xs focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 bg-[#0d0b0a] border border-[#2d2824] rounded-lg px-3 py-1">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Venda em:</span>
              <select 
                value={sellCity}
                onChange={(e) => setSellCity(e.target.value)}
                className="bg-transparent text-amber-500 font-bold text-xs focus:outline-none cursor-pointer"
              >
                {CITIES.map(city => (
                  <option key={city} value={city} className="bg-[#1a1614]">{city === "Black Market" ? "Caerleon (BM)" : city}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 bg-[#0d0b0a] border border-[#2d2824] rounded-lg px-3 py-1">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Encanto:</span>
              <select 
                value={selectedEnchantment}
                onChange={(e) => setSelectedEnchantment(Number(e.target.value))}
                className="bg-transparent text-amber-500 font-bold text-xs focus:outline-none cursor-pointer"
              >
                {ENCHANTMENTS.map(e => (
                  <option key={e.id} value={e.id}>{e.name}</option>
                ))}
              </select>
            </div>
            <button 
              onClick={() => setIsPremium(!isPremium)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs transition-all ${isPremium ? 'bg-amber-500 text-black' : 'bg-[#0d0b0a] text-gray-500 border border-[#2d2824]'}`}
            >
              PREMIUM {isPremium ? 'ON' : 'OFF'}
            </button>
            <button 
              onClick={() => setUseFocus(!useFocus)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs transition-all ${useFocus ? 'bg-emerald-500 text-black' : 'bg-[#0d0b0a] text-gray-500 border border-[#2d2824]'}`}
            >
              FOCO {useFocus ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Pesquisar item para craftar (ex: Robe, Casaco, Bolsa...)"
            className="w-full bg-[#0d0b0a] border border-[#2d2824] rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm && filteredRecipes.length > 0 && (
          <div className="absolute z-20 w-full mt-2 bg-[#1a1614] border border-[#2d2824] rounded-xl shadow-2xl max-h-[500px] overflow-y-auto overflow-x-hidden backdrop-blur-xl scrollbar-thin scrollbar-thumb-amber-500/20">
            {filteredRecipes.map(recipe => (
              <button
                key={recipe.id}
                onClick={() => {
                  analyzeCraft(recipe);
                  setSearchTerm('');
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#2d2824] text-left border-b border-[#2d2824] last:border-0"
              >
                <img src={getItemIconUrl(getEnchantedId(recipe.id, selectedEnchantment))} alt="" className="w-8 h-8" />
                <span className="text-sm font-bold text-white uppercase italic">{recipe.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <div className="py-20 text-center text-amber-500 animate-pulse font-bold uppercase tracking-widest">
          Calculando margem em {sellCity}...
        </div>
      ) : result && selectedRecipe ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-[#1a1614] border border-[#2d2824] rounded-xl p-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase mb-6 flex items-center gap-2">
                <Info size={14} /> Detalhes do Craft ({getItemName(getEnchantedId(selectedRecipe.id, selectedEnchantment))})
              </h3>
              <div className="space-y-4">
                {selectedRecipe.materials.map(m => {
                  const materialId = getEnchantedId(m.id, selectedEnchantment);
                  return (
                    <div key={m.id} className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-3">
                        <img src={getItemIconUrl(materialId)} alt="" className="w-10 h-10" />
                        <div>
                          <p className="text-white font-bold text-[11px] uppercase tracking-tight">{getItemName(materialId)}</p>
                          <p className="text-gray-500 font-bold text-[8px] uppercase tracking-tighter">Qtd: {m.count * quantity}</p>
                        </div>
                      </div>
                      <span className="text-white font-bold">{(prices[materialId] || 0).toLocaleString()}</span>
                    </div>
                  );
                })}
                <div className="pt-4 border-t border-[#2d2824] flex justify-between font-bold">
                  <span className="text-amber-500 uppercase text-[10px]">Custo Inicial (Unitário)</span>
                  <span className="text-white">{result.rawCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-emerald-500 uppercase text-[10px]">Custo Efetivo ({result.rrr}% RRR)</span>
                  <span className="text-white">{Math.floor(result.effectiveCost).toLocaleString()}</span>
                </div>
                <div className="pt-4 border-t border-[#2d2824] flex justify-between font-bold text-lg">
                  <span className="text-gray-500 uppercase text-xs">Custo Total ({quantity} un)</span>
                  <span className="text-white">{Math.floor(result.totalCost).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(selectedRecipe.bonusCity && selectedRecipe.bonusCity !== "Any") && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3">
                  <MapPin className="text-emerald-500" size={20} />
                  <div>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Melhor Local para Craftar</p>
                    <p className="text-sm font-bold text-white uppercase italic">{selectedRecipe.bonusCity}</p>
                  </div>
                </div>
              )}
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-500" size={20} />
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Melhores Locais para Vender</p>
                </div>
                <div className="space-y-1">
                  {sortedCities.slice(0, 3).map((cityPrice, idx) => (
                    <div key={cityPrice.city} className="flex justify-between items-center text-xs">
                      <span className={`font-bold ${cityPrice.city === sellCity ? 'text-amber-500' : 'text-gray-400'}`}>
                        {idx + 1}. {cityPrice.city === "Black Market" ? "Caerleon (BM)" : cityPrice.city}
                      </span>
                      <span className="text-white font-bold">{cityPrice.sell_price_min.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#1a1614] to-[#0d0b0a] border border-[#2d2824] rounded-2xl p-8 flex flex-col justify-center text-center h-fit">
            <img src={getItemIconUrl(getEnchantedId(selectedRecipe.id, selectedEnchantment))} alt="" className="w-24 h-24 mx-auto mb-6" />
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Lucro Total ({quantity} un)</p>
            <h4 className="text-5xl font-black text-white tracking-tighter mb-2">
              {Math.floor(result.totalProfit).toLocaleString()}
              <span className="text-sm ml-2 text-amber-500/50 uppercase font-bold italic">Silver</span>
            </h4>
            <p className={`text-2xl font-black ${result.profit > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
              {result.margin.toFixed(1)}% Retorno
            </p>
            <div className="mt-8 grid grid-cols-2 gap-2 text-[9px] font-bold uppercase text-gray-600">
              <div className="bg-[#0d0b0a] border border-[#2d2824] p-3 rounded-lg">
                <p className="opacity-50 mb-1">Custo Total</p>
                <p className="text-white text-xs">{Math.floor(result.totalCost).toLocaleString()}</p>
              </div>
              <div className="bg-[#0d0b0a] border border-[#2d2824] p-3 rounded-lg">
                <p className="opacity-50 mb-1">Faturamento</p>
                <p className="text-white text-xs">{Math.floor(result.totalRevenue).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-20 text-center text-gray-500 italic">Selecione um item para calcular a margem de lucro.</div>
      )}
    </div>
  );
}
