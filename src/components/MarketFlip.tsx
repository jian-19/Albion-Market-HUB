/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';
import { getPrices, getItemIconUrl, getEnchantedId } from '../lib/albion-api';
import { MarketPrice, CITIES } from '../types';
import { POPULAR_ITEMS } from '../data/items';

export function MarketFlip() {
  const [searchTerm, setSearchTerm] = useState('');
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedEnchantment, setSelectedEnchantment] = useState<number>(0);

  const selectedItemData = useMemo(() => 
    POPULAR_ITEMS.find(item => item.id === selectedItem),
    [selectedItem]
  );

  const filteredItems = useMemo(() => {
    if (!searchTerm) return [];
    const searchLower = searchTerm.toLowerCase();
    return POPULAR_ITEMS.filter(i => {
      const nameMatch = i.localizedName.toLowerCase().includes(searchLower);
      const idMatch = i.id.toLowerCase().includes(searchLower);
      // Logic from Black Market Scanner for better matching
      return nameMatch || idMatch;
    }).sort((a, b) => {
      const aStarts = a.localizedName.toLowerCase().startsWith(searchLower);
      const bStarts = b.localizedName.toLowerCase().startsWith(searchLower);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return 0;
    });
  }, [searchTerm]);

  const analyzeFlip = async (itemId: string, enchantment: number) => {
    setLoading(true);
    setSelectedItem(itemId);
    const enchantedId = getEnchantedId(itemId, enchantment);
    const data = await getPrices([enchantedId], CITIES);
    setPrices(data.filter(p => p.sell_price_min > 0));
    setLoading(false);
  };

  useEffect(() => {
    if (selectedItem) {
      analyzeFlip(selectedItem, selectedEnchantment);
    }
  }, [selectedEnchantment]);

  const getBestFlip = () => {
    if (prices.length < 2) return null;
    
    let bestBuy = prices[0];
    let bestSell = prices[0];

    prices.forEach(p => {
      if (p.sell_price_min < bestBuy.sell_price_min) bestBuy = p;
      if (p.sell_price_min > bestSell.sell_price_min) bestSell = p;
    });

    const profit = bestSell.sell_price_min - bestBuy.sell_price_min;
    const margin = (profit / bestBuy.sell_price_min) * 100;
    const tax = bestSell.sell_price_min * 0.08; // 8% tax approximation

    return {
      buy: bestBuy,
      sell: bestSell,
      profit: profit - tax,
      margin: ((profit - tax) / bestBuy.sell_price_min) * 100
    };
  };

  const flip = getBestFlip();

  return (
    <div className="space-y-8">
      <div className="bg-[#1a1614] border border-[#2d2824] rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 italic">Análise de Flip entre Cidades</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Pesquisar item para flip..."
              className="w-full bg-[#0d0b0a] border border-[#2d2824] rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            {searchTerm && filteredItems.length > 0 && (
              <div className="absolute z-30 w-full mt-2 bg-[#1a1614] border border-[#2d2824] rounded-xl shadow-2xl max-h-[500px] overflow-y-auto overflow-x-hidden backdrop-blur-xl scrollbar-thin scrollbar-thumb-amber-500/20">
                {filteredItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      analyzeFlip(item.id, selectedEnchantment);
                      setSearchTerm('');
                    }}
                    className="w-full flex items-center gap-4 px-4 py-3 hover:bg-[#2d2824] text-left border-b border-[#2d2824]/50 last:border-0 transition-colors group"
                  >
                    <div className="bg-[#0d0b0a] p-1 rounded border border-[#2d2824] group-hover:border-amber-500/50 transition-colors">
                      <img 
                        src={getItemIconUrl(item.id)} 
                        alt="" 
                        className="w-10 h-10 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block leading-tight">{item.localizedName}</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Tier {item.tier}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 bg-[#0d0b0a] border border-[#2d2824] rounded-lg px-4 py-2 shrink-0">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Encanto:</span>
            <select 
              value={selectedEnchantment}
              onChange={(e) => setSelectedEnchantment(Number(e.target.value))}
              className="bg-transparent text-amber-500 font-bold text-xs focus:outline-none cursor-pointer"
            >
              {[0, 1, 2, 3, 4].map(e => (
                <option key={e} value={e} className="bg-[#1a1614]">.{e}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          </div>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Analisando Mercado...</p>
        </div>
      ) : flip ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* ITEM INFO */}
            <div className="bg-[#1a1614] border border-[#2d2824] rounded-xl p-6 flex items-center gap-6">
              <div className="bg-[#0d0b0a] p-2 rounded-xl border border-[#2d2824]">
                <img 
                  src={getItemIconUrl(getEnchantedId(selectedItem!, selectedEnchantment))} 
                  alt="" 
                  className="w-16 h-16 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase italic leading-tight">
                  {selectedItemData?.localizedName}{selectedEnchantment > 0 ? ` .${selectedEnchantment}` : ''}
                </h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
                  Tier {selectedItemData?.tier}
                </p>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-xs font-bold text-emerald-500 uppercase mb-2">Compre em</p>
                <h3 className="text-2xl font-black text-white uppercase italic">{flip.buy.city}</h3>
                <p className="text-3xl font-black text-white mt-2">{flip.buy.sell_price_min.toLocaleString()}</p>
              </div>

              <div className="bg-emerald-500/20 p-4 rounded-full">
                <ArrowRight size={32} className="text-emerald-500" />
              </div>

              <div className="text-center md:text-right">
                <p className="text-xs font-bold text-amber-500 uppercase mb-2">Venda em</p>
                <h3 className="text-2xl font-black text-white uppercase italic">{flip.sell.city}</h3>
                <p className="text-3xl font-black text-white mt-2">{flip.sell.sell_price_min.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prices.map(p => (
                <div key={p.city} className="bg-[#1a1614] border border-[#2d2824] p-4 rounded-xl flex justify-between items-center">
                  <span className="font-bold uppercase text-xs text-gray-500">{p.city}</span>
                  <span className="font-bold text-white">{p.sell_price_min.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#1a1614] to-[#0d0b0a] border border-amber-500/30 rounded-xl p-8 flex flex-col justify-center text-center">
            <TrendingUp size={48} className="text-amber-500 mx-auto mb-6" />
            <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">Lucro Estimado</p>
            <h4 className="text-4xl font-black text-white mb-2">
              {Math.floor(flip.profit).toLocaleString()}
              <span className="text-sm ml-2 text-amber-500/50">Silver</span>
            </h4>
            <p className="text-lg font-bold text-emerald-500">+{flip.margin.toFixed(2)}% ROI</p>
            <p className="text-[10px] text-gray-600 mt-6 uppercase font-bold">* Considerado 8% de taxa de mercado</p>
          </div>
        </div>
      ) : selectedItem && (
        <div className="py-20 text-center text-gray-500 italic">Dados insuficientes para este item nas cidades monitoradas.</div>
      )}
    </div>
  );
}
