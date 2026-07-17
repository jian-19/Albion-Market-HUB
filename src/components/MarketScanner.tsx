/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { Search, Info, RefreshCcw } from 'lucide-react';
import { getPrices, getItemIconUrl } from '../lib/albion-api';
import { MarketPrice, QUALITIES, ENCHANTMENTS } from '../types';
import { POPULAR_ITEMS } from '../data/items';

export function MarketScanner() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuality, setSelectedQuality] = useState(1);
  const [selectedEnchantment, setSelectedEnchantment] = useState(0);
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

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
      return nameMatch || idMatch;
    }).sort((a, b) => {
      const aStarts = a.localizedName.toLowerCase().startsWith(searchLower);
      const bStarts = b.localizedName.toLowerCase().startsWith(searchLower);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return 0;
    });
  }, [searchTerm]);

  const fetchItemPrices = async (itemId: string) => {
    setLoading(true);
    setSelectedItem(itemId);
    
    // Remove existing enchantment if present in the base ID (safety)
    const baseId = itemId.split('@')[0];
    const finalId = selectedEnchantment > 0 ? `${baseId}@${selectedEnchantment}` : baseId;

    const data = await getPrices([finalId], undefined, [selectedQuality]);
    setPrices(data);
    setLastUpdate(new Date());
    setLoading(false);
  };

  useEffect(() => {
    if (searchTerm === '' && POPULAR_ITEMS.length > 0) {
      // Load first item as default demo
      fetchItemPrices(POPULAR_ITEMS[0].id);
    }
  }, []);

  useEffect(() => {
    if (selectedItem) {
      fetchItemPrices(selectedItem);
    }
  }, [selectedQuality, selectedEnchantment]);

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="bg-[#1a1614] border border-[#2d2824] rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Descreva o nome do item aqui!
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Ex: sapatos, espada larga, bolsa, arco..."
                className="w-full bg-[#0d0b0a] border border-[#2d2824] rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {searchTerm && filteredItems.length > 0 && (
              <div className="absolute z-20 w-full mt-2 bg-[#1a1614] border border-[#2d2824] rounded-xl shadow-2xl max-h-[500px] overflow-y-auto overflow-x-hidden backdrop-blur-xl scrollbar-thin scrollbar-thumb-amber-500/20">
                {filteredItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      fetchItemPrices(item.id);
                      setSearchTerm('');
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#2d2824] text-left transition-colors border-b border-[#2d2824] last:border-0"
                  >
                    <img src={getItemIconUrl(item.id)} alt="" className="w-8 h-8" />
                    <div>
                      <p className="text-sm font-bold text-white">{item.localizedName}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Qualidade
            </label>
            <select
              className="w-full bg-[#0d0b0a] border border-[#2d2824] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-500 appearance-none cursor-pointer"
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(Number(e.target.value))}
            >
              {QUALITIES.map(q => (
                <option key={q.id} value={q.id}>{q.id} - {q.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Encantamento
            </label>
            <select
              className="w-full bg-[#0d0b0a] border border-[#2d2824] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-500 appearance-none cursor-pointer"
              value={selectedEnchantment}
              onChange={(e) => setSelectedEnchantment(Number(e.target.value))}
            >
              {ENCHANTMENTS.map(e => (
                <option key={e.id} value={e.id}>{e.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-amber-500" />
            <h2 className="text-lg font-bold text-white uppercase tracking-tight">Preços nas Cidades</h2>
          </div>
          {lastUpdate && (
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-500 uppercase font-bold">
                Última atualização: {lastUpdate.toLocaleTimeString()}
              </span>
              <button 
                onClick={() => prices.length > 0 && fetchItemPrices(prices[0].item_id)}
                disabled={loading}
                className="p-2 hover:bg-[#1a1614] rounded-full text-amber-500 transition-colors disabled:opacity-50"
              >
                <RefreshCcw size={16} className={loading ? 'animate-spin' : ''} />
              </button>
            </div>
          )}
        </div>

        {/* Selected Item Info Card */}
        {selectedItemData && !loading && (
          <div className="bg-[#1a1614] border border-[#2d2824] rounded-xl p-6 flex items-center gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-[#0d0b0a] p-2 rounded-xl border border-[#2d2824]">
              <img 
                src={getItemIconUrl(selectedEnchantment > 0 ? `${selectedItemData.id}@${selectedEnchantment}` : selectedItemData.id)} 
                alt="" 
                className="w-16 h-16 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white uppercase italic leading-tight">
                {selectedItemData.localizedName}{selectedEnchantment > 0 ? ` .${selectedEnchantment}` : ''}
              </h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
                Tier {selectedItemData.tier} • {QUALITIES.find(q => q.id === selectedQuality)?.name}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-40 bg-[#1a1614] rounded-xl animate-pulse border border-[#2d2824]" />
            ))
          ) : prices.length > 0 ? (
            prices.map((price, idx) => (
              <div key={`${price.city}-${idx}`} className="bg-[#1a1614] border border-[#2d2824] rounded-xl p-5 hover:border-amber-500/50 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-amber-500 uppercase tracking-wider text-sm">{price.city}</h3>
                  <div className="text-[10px] bg-[#0d0b0a] px-2 py-0.5 rounded text-gray-500 font-bold">
                    Q: {price.quality}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Venda Direta (Min)</p>
                    <p className="text-xl font-black text-white">
                      {price.sell_price_min > 0 ? price.sell_price_min.toLocaleString() : 'N/A'}
                      <span className="text-[10px] ml-1 text-amber-500/50 italic font-medium">Silver</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#2d2824]">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Preço Compra (Max)</p>
                    </div>
                    <p className="text-sm font-bold text-gray-400">
                      {price.buy_price_max > 0 ? price.buy_price_max.toLocaleString() : '---'}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[9px] text-gray-600 font-medium">
                   <div className={`w-1 h-1 rounded-full ${price.sell_price_min > 0 ? 'bg-emerald-500' : 'bg-red-500'}`} />
                   {price.sell_price_min_date && !price.sell_price_min_date.startsWith('0001') 
                     ? new Date(price.sell_price_min_date).toLocaleString('pt-BR') 
                     : 'Sem atualização enviada'}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4">
              <div className="w-16 h-16 bg-[#1a1614] rounded-full flex items-center justify-center mx-auto text-gray-600">
                <Search size={32} />
              </div>
              <p className="text-gray-500 font-medium">Pesquise um item para ver os preços em tempo real.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
