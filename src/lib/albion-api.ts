/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MarketPrice } from '../types';
import { POPULAR_ITEMS } from '../data/items';

const BASE_URL = 'https://www.albion-online-data.com/api/v2/stats/prices';

export function getEnchantedId(baseId: string, level: number): string {
  if (level === 0 || baseId.startsWith('T3_')) return baseId;
  
  const isResource = /_(METALBAR|CLOTH|LEATHER|ORE|FIBER|HIDE|PLANKS|WOOD|ROCK|STONE|CLOTH|PLANKS)$/.test(baseId);
  
  if (isResource) {
    return `${baseId}_LEVEL${level}@${level}`;
  }
  
  return `${baseId}@${level}`;
}

export function getItemName(itemId: string): string {
  // Remove @ and LEVEL suffix for lookup
  const baseId = itemId.split('@')[0].split('_LEVEL')[0];
  const item = POPULAR_ITEMS.find(i => i.id === baseId);
  
  const enchantment = itemId.includes('@') ? itemId.split('@')[1] : '';
  const enchantmentSuffix = enchantment ? `.${enchantment}` : '';

  if (item) {
    return `${item.localizedName}${enchantmentSuffix}`;
  }
  
  // Fallback to cleaner ID if not found
  // Example: T4_HIDE_LEVEL2 -> T4 HIDE
  const cleanId = itemId.split('@')[0].split('_LEVEL')[0];
  return cleanId.split('_').join(' ') + enchantmentSuffix;
}

export async function getPrices(items: string[], cities?: string[], qualities?: number[]): Promise<MarketPrice[]> {
  const itemStr = items.join(',');
  const cityStr = cities ? cities.join(',') : '';
  const qualityStr = qualities ? qualities.join(',') : '';
  
  let url = `${BASE_URL}/${itemStr}`;
  const params = new URLSearchParams();
  if (cityStr) params.append('locations', cityStr);
  if (qualityStr) params.append('qualities', qualityStr);
  
  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch prices');
    const data: MarketPrice[] = await response.json();
    
    // Filter unrealistic prices (799,999, 999,999 are common placeholder outliers)
    // Also filter prices that are too high compared to others if possible, 
    // but simple value filtering is a good start.
    return data.map(p => ({
      ...p,
      sell_price_min: (p.sell_price_min === 799999 || p.sell_price_min === 999999) ? 0 : p.sell_price_min,
      buy_price_max: (p.buy_price_max === 799999 || p.buy_price_max === 999999) ? 0 : p.buy_price_max,
    }));
  } catch (error) {
    console.error('Error fetching Albion prices:', error);
    return [];
  }
}

// Helper to get item icon URL
export function getItemIconUrl(itemId: string, quality: number = 1): string {
  return `https://render.albiononline.com/v1/item/${itemId}.png?quality=${quality}`;
}
