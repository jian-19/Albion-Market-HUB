/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MarketPrice {
  item_id: string;
  city: string;
  quality: number;
  sell_price_min: number;
  sell_price_min_date: string;
  sell_price_max: number;
  sell_price_max_date: string;
  buy_price_min: number;
  buy_price_min_date: string;
  buy_price_max: number;
  buy_price_max_date: string;
}

export interface AlbionItem {
  id: string;
  name: string;
  localizedName: string;
  tier: number;
}

export const CITIES = [
  "Caerleon",
  "Thetford",
  "Fort Sterling",
  "Lymhurst",
  "Bridgewatch",
  "Martlock",
  "Brecilien",
  "Black Market"
];

export const QUALITIES = [
  { id: 1, name: "Normal" },
  { id: 2, name: "Bom" },
  { id: 3, name: "Excepcional" },
  { id: 4, name: "Excelente" },
  { id: 5, name: "Obra-prima" }
];

export const ENCHANTMENTS = [
  { id: 0, name: ".0" },
  { id: 1, name: ".1" },
  { id: 2, name: ".2" },
  { id: 3, name: ".3" },
  { id: 4, name: ".4" }
];
