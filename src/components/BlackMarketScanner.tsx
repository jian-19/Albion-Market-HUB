/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Search, AlertCircle, TrendingUp } from 'lucide-react';
import { getPrices, getItemIconUrl, getEnchantedId } from '../lib/albion-api';
import { MarketPrice, CITIES, ENCHANTMENTS } from '../types';
import { POPULAR_ITEMS } from '../data/items';

export function BlackMarketScanner() {
  const [searchTerm, setSearchTerm] = useState('');
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [selectedEnchantment, setSelectedEnchantment] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const analyzeBlackMarket = async (itemId: string, enchantment?: number) => {
    setLoading(true);
    const enc = enchantment !== undefined ? enchantment : selectedEnchantment;
    const enchantedId = getEnchantedId(itemId, enc);
    setSelectedItem(itemId);
    const data = await getPrices([enchantedId], CITIES);
    // Deduplicate by city to prevent React duplicate key errors if API returns multiple records
    const uniqueData = Array.from(new Map(data.map(p => [p.city, p])).values());
    setPrices(uniqueData);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedItem) {
      analyzeBlackMarket(selectedItem);
    }
  }, [selectedEnchantment]);

  const getOpportunities = () => {
    const blackMarketPrice = prices.find(p => p.city === "Black Market");
    if (!blackMarketPrice || (blackMarketPrice.buy_price_max === 0 && blackMarketPrice.sell_price_min === 0)) return [];

    const BM_TAX_INSTANT = 0.025; // 2.5% approx
    const BM_TAX_ORDER = 0.04;   // 4% approx setup + tax

    return prices
      .filter(p => p.city !== "Black Market" && p.sell_price_min > 0)
      .map(p => {
        // Immediate Sale: Buy in city (sell_price_min) -> Sell to BM Buy Order (buy_price_max)
        const instantPrice = blackMarketPrice.buy_price_max;
        const instantProfit = instantPrice > 0 ? (instantPrice * (1 - BM_TAX_INSTANT)) - p.sell_price_min : -p.sell_price_min;
        const instantMargin = (instantProfit / p.sell_price_min) * 100;

        // Sell Order: Buy in city (sell_price_min) -> List in BM (sell_price_min)
        // If BM sell_price_min is 0, we can't project easily, but usually it's higher than buy_price_max
        const orderPrice = blackMarketPrice.sell_price_min || (blackMarketPrice.buy_price_max * 1.2); 
        const orderProfit = (orderPrice * (1 - BM_TAX_ORDER)) - p.sell_price_min;
        const orderMargin = (orderProfit / p.sell_price_min) * 100;

        return {
          city: p.city,
          buyPrice: p.sell_price_min,
          bmBuyOrder: blackMarketPrice.buy_price_max,
          bmSellPrice: blackMarketPrice.sell_price_min,
          instantProfit,
          instantMargin,
          orderProfit,
          orderMargin
        };
      })
      .sort((a, b) => b.orderProfit - a.orderProfit);
  };

  const opportunities = getOpportunities();

  return (
    <div className="space-y-8">
      <div className="bg-[#1a1614] border border-[#2d2824] rounded-xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <h2 className="text-xl font-bold text-white italic flex items-center gap-2">
            <AlertCircle className="text-amber-500" />
            Scanner do Mercado Negro (Caerleon)
          </h2>
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
        </div>
        
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 mb-6">
          <p className="text-xs text-amber-500 font-medium leading-relaxed">
            <span className="font-bold">Dica:</span> O lucro imediato (Venda Direta) costuma ser negativo porque bots capturam essas ofertas rápido. 
            O lucro real do Mercado Negro vem de colocar <span className="font-bold underline">Ordens de Venda</span> e esperar o sistema comprar seu item.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Pesquisar item para o Mercado Negro..."
            className="w-full bg-[#0d0b0a] border border-[#2d2824] rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm && (
          <div className="absolute z-20 w-full mt-2 bg-[#1a1614] border border-[#2d2824] rounded-xl shadow-2xl max-h-[500px] overflow-y-auto overflow-x-hidden backdrop-blur-xl scrollbar-thin scrollbar-thumb-amber-500/20">
            {POPULAR_ITEMS.filter(i => {
              const searchLower = searchTerm.toLowerCase();
              const nameMatch = i.localizedName.toLowerCase().includes(searchLower);
              const idMatch = i.id.toLowerCase().includes(searchLower);
              const enchantmentMatch = ENCHANTMENTS.some(e => 
                searchLower.includes(e.name.toLowerCase()) && 
                i.localizedName.toLowerCase().includes(searchLower.split(e.name.toLowerCase())[0].trim())
              );
              return nameMatch || idMatch || enchantmentMatch;
            }).sort((a, b) => {
              const searchLower = searchTerm.toLowerCase();
              const aStarts = a.localizedName.toLowerCase().startsWith(searchLower);
              const bStarts = b.localizedName.toLowerCase().startsWith(searchLower);
              if (aStarts && !bStarts) return -1;
              if (!aStarts && bStarts) return 1;
              return 0;
            }).map(item => (
              <button
                key={item.id}
                onClick={() => {
                  const searchLower = searchTerm.toLowerCase();
                  const foundEnc = ENCHANTMENTS.find(e => searchLower.includes(e.name.toLowerCase()));
                  if (foundEnc) {
                    setSelectedEnchantment(foundEnc.id);
                    analyzeBlackMarket(item.id, foundEnc.id);
                  } else {
                    analyzeBlackMarket(item.id);
                  }
                  setSearchTerm('');
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#2d2824] text-left border-b border-[#2d2824] last:border-0"
              >
                <img src={getItemIconUrl(getEnchantedId(item.id, selectedEnchantment))} alt="" className="w-8 h-8" />
                <span className="text-sm font-bold text-white">{item.localizedName}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <div className="py-20 text-center text-amber-500 animate-pulse font-bold">ESCANEANDO MERCADO NEGRO...</div>
      ) : opportunities.length > 0 ? (
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-[#1a1614] border border-[#2d2824] p-4 rounded-xl">
            <img src={getItemIconUrl(getEnchantedId(selectedItem!, selectedEnchantment))} alt="" className="w-16 h-16" />
            <div>
              <h3 className="text-xl font-bold text-white uppercase italic">{POPULAR_ITEMS.find(i => i.id === selectedItem)?.localizedName}</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Preços atualizados via Albion Data Project</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {opportunities.map((opp) => (
            <div key={opp.city} className="bg-[#1a1614] border border-[#2d2824] rounded-xl overflow-hidden hover:border-amber-500 transition-colors">
              <div className="bg-[#2d2824] px-5 py-3 flex justify-between items-center">
                <h3 className="font-bold text-white uppercase italic">{opp.city}</h3>
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-tighter">Origem de Compra</span>
              </div>
              
              <div className="p-5 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-bold uppercase">Preço na {opp.city}</span>
                  <span className="text-lg font-black text-white">{opp.buyPrice.toLocaleString()} <span className="text-[10px] text-gray-600">silver</span></span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0d0b0a] border border-[#2d2824] p-3 rounded-lg">
                    <p className="text-[9px] text-gray-500 font-black uppercase mb-1">Venda Imediata</p>
                    <p className={`text-sm font-black ${opp.instantProfit > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                      {opp.instantProfit > 0 ? '+' : ''}{Math.round(opp.instantProfit).toLocaleString()}
                    </p>
                    <p className="text-[10px] text-gray-600 font-bold">{opp.instantMargin.toFixed(1)}%</p>
                  </div>
                  
                  <div className="bg-[#0d0b0a] border border-amber-500/30 p-3 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 bg-amber-500 text-[8px] font-black px-1.5 rounded text-black">RECOMENDADO</div>
                    <p className="text-[9px] text-amber-500 font-black uppercase mb-1">Ordem de Venda</p>
                    <p className={`text-sm font-black ${opp.orderProfit > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                      {opp.orderProfit > 0 ? '+' : ''}{Math.round(opp.orderProfit).toLocaleString()}
                    </p>
                    <p className="text-[10px] text-gray-600 font-bold">{opp.orderMargin.toFixed(1)}%</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#2d2824]">
                  <div>
                    <p className="text-[9px] text-gray-600 font-bold uppercase">Melhor Preço BM</p>
                    <p className="text-sm font-bold text-white">{(opp.bmSellPrice || opp.bmBuyOrder).toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-600 font-bold uppercase">Taxas Estimadas</p>
                    <p className="text-sm font-bold text-red-500/70">~4.0%</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      ) : selectedItem && (
        <div className="py-20 text-center text-gray-500 italic">
          O Mercado Negro não possui pedidos de compra ativos para este item no momento.
        </div>
      )}
    </div>
  );
}
