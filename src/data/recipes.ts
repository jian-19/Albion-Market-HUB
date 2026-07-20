/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RecipeMaterial {
  id: string;
  count: number;
}

export interface CraftRecipe {
  id: string;
  name: string;
  materials: RecipeMaterial[];
  category?: string;
  bonusCity?: string;
  bestSellCity?: string;
}

export const CRAFT_RECIPES: CraftRecipe[] = [
  // BAGS
  { id: "T4_BAG", name: "Bolsa (T4)", materials: [{ id: "T4_LEATHER", count: 8 }, { id: "T4_CLOTH", count: 8 }], category: "Accessories", bonusCity: "Todas as Cidades", bestSellCity: "Caerleon" },
  { id: "T5_BAG", name: "Bolsa (T5)", materials: [{ id: "T5_LEATHER", count: 8 }, { id: "T5_CLOTH", count: 8 }], category: "Accessories", bonusCity: "Todas as Cidades", bestSellCity: "Caerleon" },
  { id: "T6_BAG", name: "Bolsa (T6)", materials: [{ id: "T6_LEATHER", count: 8 }, { id: "T6_CLOTH", count: 8 }], category: "Accessories", bonusCity: "Todas as Cidades", bestSellCity: "Caerleon" },
  { id: "T7_BAG", name: "Bolsa (T7)", materials: [{ id: "T7_LEATHER", count: 8 }, { id: "T7_CLOTH", count: 8 }], category: "Accessories", bonusCity: "Todas as Cidades", bestSellCity: "Caerleon" },
  { id: "T8_BAG", name: "Bolsa (T8)", materials: [{ id: "T8_LEATHER", count: 8 }, { id: "T8_CLOTH", count: 8 }], category: "Accessories", bonusCity: "Todas as Cidades", bestSellCity: "Caerleon" },
  
  // SWORDS
  { id: "T4_MAIN_SWORD", name: "Espada Larga (T4)", materials: [{ id: "T4_METALBAR", count: 16 }, { id: "T4_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_MAIN_SWORD", name: "Espada Larga (T5)", materials: [{ id: "T5_METALBAR", count: 16 }, { id: "T5_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_MAIN_SWORD", name: "Espada Larga (T6)", materials: [{ id: "T6_METALBAR", count: 16 }, { id: "T6_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_MAIN_SWORD", name: "Espada Larga (T7)", materials: [{ id: "T7_METALBAR", count: 16 }, { id: "T7_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_MAIN_SWORD", name: "Espada Larga (T8)", materials: [{ id: "T8_METALBAR", count: 16 }, { id: "T8_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  // ADDITIONAL SWORDS
  { id: "T4_2H_CLAYMORE", name: "Claymore (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_DUALSWORD", name: "Espadas Duplas (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_SCIMITAR_MORGANA", name: "Clarent Blade (T4)", materials: [{ id: "T4_METALBAR", count: 16 }, { id: "T4_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_MAIN_SCIMITAR_MORGANA", name: "Clarent Blade (T5)", materials: [{ id: "T5_METALBAR", count: 16 }, { id: "T5_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_MAIN_SCIMITAR_MORGANA", name: "Clarent Blade (T6)", materials: [{ id: "T6_METALBAR", count: 16 }, { id: "T6_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_MAIN_SCIMITAR_MORGANA", name: "Clarent Blade (T7)", materials: [{ id: "T7_METALBAR", count: 16 }, { id: "T7_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_MAIN_SCIMITAR_MORGANA", name: "Clarent Blade (T8)", materials: [{ id: "T8_METALBAR", count: 16 }, { id: "T8_LEATHER", count: 8 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_CLEAVER_HELL", name: "Espada de Talho (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_DUALSCIMITAR_UNDEAD", name: "Lâmina Alada (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_CLAYMORE_AVALON", name: "Espada do Rei (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Swords", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  // AXES
  { id: "T4_MAIN_AXE", name: "Machado de Batalha (T4)", materials: [{ id: "T4_METALBAR", count: 16 }, { id: "T4_PLANKS", count: 8 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_MAIN_AXE", name: "Machado de Batalha (T5)", materials: [{ id: "T5_METALBAR", count: 16 }, { id: "T5_PLANKS", count: 8 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_MAIN_AXE", name: "Machado de Batalha (T6)", materials: [{ id: "T6_METALBAR", count: 16 }, { id: "T6_PLANKS", count: 8 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_MAIN_AXE", name: "Machado de Batalha (T7)", materials: [{ id: "T7_METALBAR", count: 16 }, { id: "T7_PLANKS", count: 8 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_MAIN_AXE", name: "Machado de Batalha (T8)", materials: [{ id: "T8_METALBAR", count: 16 }, { id: "T8_PLANKS", count: 8 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_AXE", name: "Grande Machado (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_HALBERD", name: "Alabarda (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_HALBERD_MORGANA", name: "Carrioncaller (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_SCYTHE_HELL", name: "Segadeira do Inferno (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_2H_SCYTHE_HELL", name: "Segadeira do Inferno (T5)", materials: [{ id: "T5_METALBAR", count: 20 }, { id: "T5_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_2H_SCYTHE_HELL", name: "Segadeira do Inferno (T6)", materials: [{ id: "T6_METALBAR", count: 20 }, { id: "T6_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_2H_SCYTHE_HELL", name: "Segadeira do Inferno (T7)", materials: [{ id: "T7_METALBAR", count: 20 }, { id: "T7_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_2H_SCYTHE_HELL", name: "Segadeira do Inferno (T8)", materials: [{ id: "T8_METALBAR", count: 20 }, { id: "T8_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_DUALAXE_KEEPER", name: "Pata de Urso (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_2H_AXE_AVALON", name: "Realmbreaker (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Axes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  // MACES
  { id: "T4_MAIN_MACE", name: "Maça (T4)", materials: [{ id: "T4_METALBAR", count: 16 }, { id: "T4_CLOTH", count: 8 }], category: "Maces", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_MACE", name: "Maça Pesada (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_CLOTH", count: 12 }], category: "Maces", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_ROCKMACE_KEEPER", name: "Maça de Bedrock (T4)", materials: [{ id: "T4_METALBAR", count: 16 }, { id: "T4_CLOTH", count: 8 }], category: "Maces", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_MACE_MORGANA", name: "Camlann Mace (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_CLOTH", count: 12 }], category: "Maces", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_DUALMACE_AVALON", name: "Oathkeepers (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_CLOTH", count: 12 }], category: "Maces", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },

  // HAMMERS
  { id: "T4_MAIN_HAMMER", name: "Martelo (T4)", materials: [{ id: "T4_METALBAR", count: 16 }, { id: "T4_PLANKS", count: 8 }], category: "Hammers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_HAMMER", name: "Grande Martelo (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Hammers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_POLEHAMMER", name: "Polehammer (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Hammers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_HAMMER_UNDEAD", name: "Tombbreaker (T4)", materials: [{ id: "T4_METALBAR", count: 16 }, { id: "T4_PLANKS", count: 8 }], category: "Hammers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_HAMMER_AVALON", name: "Hand of Justice (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Hammers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_RAM_KEEPER", name: "Grovekeeper (T4)", materials: [{ id: "T4_METALBAR", count: 20 }, { id: "T4_PLANKS", count: 12 }], category: "Hammers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },

  // CROSSBOWS
  { id: "T4_2H_CROSSBOW", name: "Besta (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Crossbows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_CROSSBOW_LIGHT", name: "Light Crossbow (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Crossbows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_DUALCROSSBOW_HELL", name: "Boltcasters (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Crossbows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_CROSSBOW_CANNON_AVALON", name: "Energy Shaper (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Crossbows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },

  // BOWS
  { id: "T4_2H_BOW", name: "Arco (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_WARBOW", name: "Arco de Guerra (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_BOW_KEEPER", name: "Whispering Bow (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_BOW_HELL", name: "Wailing Bow (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_BOW_UNDEAD", name: "Bow of Badon (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_BOW_AVALON", name: "Mistpiercer (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T5_2H_BOW_AVALON", name: "Mistpiercer (T5)", materials: [{ id: "T5_PLANKS", count: 20 }, { id: "T5_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T6_2H_BOW_AVALON", name: "Mistpiercer (T6)", materials: [{ id: "T6_PLANKS", count: 20 }, { id: "T6_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T7_2H_BOW_AVALON", name: "Mistpiercer (T7)", materials: [{ id: "T7_PLANKS", count: 20 }, { id: "T7_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T8_2H_BOW_AVALON", name: "Mistpiercer (T8)", materials: [{ id: "T8_PLANKS", count: 20 }, { id: "T8_LEATHER", count: 12 }], category: "Bows", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },

  // SPEARS
  { id: "T4_MAIN_SPEAR", name: "Lança (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Spears", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_PIKE", name: "Pike (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Spears", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_GLAIVE", name: "Glaive (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Spears", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_SPEAR_KEEPER", name: "Heron Spear (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Spears", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_SPEAR_MORGANA", name: "Spirithunter (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Spears", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_TRIDENT_UNDEAD", name: "Trinity Spear (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Spears", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_SPEAR_AVALON", name: "Daybreaker (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Spears", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },

  // DAGGERS
  { id: "T4_MAIN_DAGGER", name: "Adaga (T4)", materials: [{ id: "T4_LEATHER", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_DAGGERPAIR", name: "Adagas Duplas (T4)", materials: [{ id: "T4_LEATHER", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_CLAW", name: "Garras (T4)", materials: [{ id: "T4_LEATHER", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_DAGGER_KEEPER", name: "Bloodletter (T4)", materials: [{ id: "T4_LEATHER", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T5_MAIN_DAGGER_KEEPER", name: "Bloodletter (T5)", materials: [{ id: "T5_LEATHER", count: 16 }, { id: "T5_METALBAR", count: 8 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T6_MAIN_DAGGER_KEEPER", name: "Bloodletter (T6)", materials: [{ id: "T6_LEATHER", count: 16 }, { id: "T6_METALBAR", count: 8 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T7_MAIN_DAGGER_KEEPER", name: "Bloodletter (T7)", materials: [{ id: "T7_LEATHER", count: 16 }, { id: "T7_METALBAR", count: 8 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T8_MAIN_DAGGER_KEEPER", name: "Bloodletter (T8)", materials: [{ id: "T8_LEATHER", count: 16 }, { id: "T8_METALBAR", count: 8 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_DAGGER_HELL", name: "Demonfang (T4)", materials: [{ id: "T4_LEATHER", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_DUALDAGGER_MORGANA", name: "Bridled Fury (T4)", materials: [{ id: "T4_LEATHER", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_2H_DAGGER_AVALON", name: "Deathgivers (T4)", materials: [{ id: "T4_LEATHER", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Daggers", bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },

  // QUARTERSTAFFS
  { id: "T4_2H_QUARTERSTAFF", name: "Bordão (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Quarterstaffs", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_2H_IRONCLADSTAFF", name: "Iron-clad Staff (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Quarterstaffs", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_2H_DOUBLEBLADEDSTAFF", name: "Double Bladed Staff (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Quarterstaffs", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_2H_COMBATSTAFF_MORGANA", name: "Black Monk Stave (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Quarterstaffs", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_2H_TWINAXE_KEEPER", name: "Soulscythe (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Quarterstaffs", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_2H_ROCKSTAFF_HELL", name: "Grailseeker (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Quarterstaffs", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_2H_QUARTERSTAFF_AVALON", name: "Sentinel (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_LEATHER", count: 12 }], category: "Quarterstaffs", bonusCity: "Martlock", bestSellCity: "Caerleon" },

  // STAVES
  { id: "T4_MAIN_FIRESTAFF", name: "Cajado de Fogo (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Fire Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T5_MAIN_FIRESTAFF", name: "Cajado de Fogo (T5)", materials: [{ id: "T5_PLANKS", count: 16 }, { id: "T5_METALBAR", count: 8 }], category: "Fire Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T6_MAIN_FIRESTAFF", name: "Cajado de Fogo (T6)", materials: [{ id: "T6_PLANKS", count: 16 }, { id: "T6_METALBAR", count: 8 }], category: "Fire Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T7_MAIN_FIRESTAFF", name: "Cajado de Fogo (T7)", materials: [{ id: "T7_PLANKS", count: 16 }, { id: "T7_METALBAR", count: 8 }], category: "Fire Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T8_MAIN_FIRESTAFF", name: "Cajado de Fogo (T8)", materials: [{ id: "T8_PLANKS", count: 16 }, { id: "T8_METALBAR", count: 8 }], category: "Fire Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_FIRESTAFF", name: "Grande Cajado de Fogo (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Fire Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_FROSTSTAFF", name: "Cajado de Gelo (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Frost Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_FROSTSTAFF", name: "Grande Cajado de Gelo (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Frost Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_HOLYSTAFF", name: "Cajado Sagrado (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Holy Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T5_MAIN_HOLYSTAFF", name: "Cajado Sagrado (T5)", materials: [{ id: "T5_PLANKS", count: 16 }, { id: "T5_METALBAR", count: 8 }], category: "Holy Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T6_MAIN_HOLYSTAFF", name: "Cajado Sagrado (T6)", materials: [{ id: "T6_PLANKS", count: 16 }, { id: "T6_METALBAR", count: 8 }], category: "Holy Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T7_MAIN_HOLYSTAFF", name: "Cajado Sagrado (T7)", materials: [{ id: "T7_PLANKS", count: 16 }, { id: "T7_METALBAR", count: 8 }], category: "Holy Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T8_MAIN_HOLYSTAFF", name: "Cajado Sagrado (T8)", materials: [{ id: "T8_PLANKS", count: 16 }, { id: "T8_METALBAR", count: 8 }], category: "Holy Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_HOLYSTAFF", name: "Grande Cajado Sagrado (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Holy Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_NATURESTAFF", name: "Cajado Natural (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Nature Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_NATURESTAFF", name: "Grande Cajado Natural (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Nature Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_MAIN_CURSEDSTAFF_AVALON", name: "Shadowcaller (T4)", materials: [{ id: "T4_PLANKS", count: 16 }, { id: "T4_METALBAR", count: 8 }], category: "Cursed Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T5_MAIN_CURSEDSTAFF_AVALON", name: "Shadowcaller (T5)", materials: [{ id: "T5_PLANKS", count: 16 }, { id: "T5_METALBAR", count: 8 }], category: "Cursed Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T6_MAIN_CURSEDSTAFF_AVALON", name: "Shadowcaller (T6)", materials: [{ id: "T6_PLANKS", count: 16 }, { id: "T6_METALBAR", count: 8 }], category: "Cursed Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T7_MAIN_CURSEDSTAFF_AVALON", name: "Shadowcaller (T7)", materials: [{ id: "T7_PLANKS", count: 16 }, { id: "T7_METALBAR", count: 8 }], category: "Cursed Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T8_MAIN_CURSEDSTAFF_AVALON", name: "Shadowcaller (T8)", materials: [{ id: "T8_PLANKS", count: 16 }, { id: "T8_METALBAR", count: 8 }], category: "Cursed Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_2H_CURSEDSTAFF", name: "Grande Cajado Amaldiçoado (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Cursed Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },

  // SHAPESHIFTER
  { id: "T4_2H_SHAPESHIFTER_PANTHER", name: "Prowler Staff (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T5_2H_SHAPESHIFTER_PANTHER", name: "Prowler Staff (T5)", materials: [{ id: "T5_PLANKS", count: 20 }, { id: "T5_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T6_2H_SHAPESHIFTER_PANTHER", name: "Prowler Staff (T6)", materials: [{ id: "T6_PLANKS", count: 20 }, { id: "T6_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T7_2H_SHAPESHIFTER_PANTHER", name: "Prowler Staff (T7)", materials: [{ id: "T7_PLANKS", count: 20 }, { id: "T7_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T8_2H_SHAPESHIFTER_PANTHER", name: "Prowler Staff (T8)", materials: [{ id: "T8_PLANKS", count: 20 }, { id: "T8_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },

  { id: "T4_2H_SHAPESHIFTER_GOLEM", name: "Primal Staff (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T5_2H_SHAPESHIFTER_GOLEM", name: "Primal Staff (T5)", materials: [{ id: "T5_PLANKS", count: 20 }, { id: "T5_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T6_2H_SHAPESHIFTER_GOLEM", name: "Primal Staff (T6)", materials: [{ id: "T6_PLANKS", count: 20 }, { id: "T6_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T7_2H_SHAPESHIFTER_GOLEM", name: "Primal Staff (T7)", materials: [{ id: "T7_PLANKS", count: 20 }, { id: "T7_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T8_2H_SHAPESHIFTER_GOLEM", name: "Primal Staff (T8)", materials: [{ id: "T8_PLANKS", count: 20 }, { id: "T8_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },

  { id: "T4_2H_SHAPESHIFTER_BIRD", name: "Stormbird Staff (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T5_2H_SHAPESHIFTER_BIRD", name: "Stormbird Staff (T5)", materials: [{ id: "T5_PLANKS", count: 20 }, { id: "T5_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T6_2H_SHAPESHIFTER_BIRD", name: "Stormbird Staff (T6)", materials: [{ id: "T6_PLANKS", count: 20 }, { id: "T6_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T7_2H_SHAPESHIFTER_BIRD", name: "Stormbird Staff (T7)", materials: [{ id: "T7_PLANKS", count: 20 }, { id: "T7_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T8_2H_SHAPESHIFTER_BIRD", name: "Stormbird Staff (T8)", materials: [{ id: "T8_PLANKS", count: 20 }, { id: "T8_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },

  { id: "T4_2H_SHAPESHIFTER_WEREWOLF", name: "Bloodmoon Staff (T4)", materials: [{ id: "T4_PLANKS", count: 20 }, { id: "T4_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T5_2H_SHAPESHIFTER_WEREWOLF", name: "Bloodmoon Staff (T5)", materials: [{ id: "T5_PLANKS", count: 20 }, { id: "T5_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T6_2H_SHAPESHIFTER_WEREWOLF", name: "Bloodmoon Staff (T6)", materials: [{ id: "T6_PLANKS", count: 20 }, { id: "T6_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T7_2H_SHAPESHIFTER_WEREWOLF", name: "Bloodmoon Staff (T7)", materials: [{ id: "T7_PLANKS", count: 20 }, { id: "T7_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T8_2H_SHAPESHIFTER_WEREWOLF", name: "Bloodmoon Staff (T8)", materials: [{ id: "T8_PLANKS", count: 20 }, { id: "T8_METALBAR", count: 12 }], category: "Shapeshifter Staves", bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },

  // ROBES
  { id: "T4_ARMOR_CLOTH_SET1", name: "Robe de Erudito (T4)", materials: [{ id: "T4_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_CLOTH_SET1", name: "Robe de Erudito (T5)", materials: [{ id: "T5_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_CLOTH_SET1", name: "Robe de Erudito (T6)", materials: [{ id: "T6_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_CLOTH_SET1", name: "Robe de Erudito (T7)", materials: [{ id: "T7_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_CLOTH_SET1", name: "Robe de Erudito (T8)", materials: [{ id: "T8_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  
  { id: "T4_ARMOR_CLOTH_SET2", name: "Robe de Clérigo (T4)", materials: [{ id: "T4_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_CLOTH_SET2", name: "Robe de Clérigo (T5)", materials: [{ id: "T5_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_CLOTH_SET2", name: "Robe de Clérigo (T6)", materials: [{ id: "T6_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_CLOTH_SET2", name: "Robe de Clérigo (T7)", materials: [{ id: "T7_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_CLOTH_SET2", name: "Robe de Clérigo (T8)", materials: [{ id: "T8_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  { id: "T4_ARMOR_CLOTH_SET3", name: "Robe de Mago (T4)", materials: [{ id: "T4_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_CLOTH_SET3", name: "Robe de Mago (T5)", materials: [{ id: "T5_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_CLOTH_SET3", name: "Robe de Mago (T6)", materials: [{ id: "T6_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_CLOTH_SET3", name: "Robe de Mago (T7)", materials: [{ id: "T7_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_CLOTH_SET3", name: "Robe de Mago (T8)", materials: [{ id: "T8_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  // CASACOS (Leather)
  { id: "T4_ARMOR_LEATHER_SET1", name: "Casaco de Mercenário (T4)", materials: [{ id: "T4_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_LEATHER_SET1", name: "Casaco de Mercenário (T5)", materials: [{ id: "T5_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_LEATHER_SET1", name: "Casaco de Mercenário (T6)", materials: [{ id: "T6_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_LEATHER_SET1", name: "Casaco de Mercenário (T7)", materials: [{ id: "T7_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_LEATHER_SET1", name: "Casaco de Mercenário (T8)", materials: [{ id: "T8_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },

  { id: "T4_ARMOR_LEATHER_SET2", name: "Casaco de Caçador (T4)", materials: [{ id: "T4_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_LEATHER_SET2", name: "Casaco de Caçador (T5)", materials: [{ id: "T5_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_LEATHER_SET2", name: "Casaco de Caçador (T6)", materials: [{ id: "T6_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_LEATHER_SET2", name: "Casaco de Caçador (T7)", materials: [{ id: "T7_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_LEATHER_SET2", name: "Casaco de Caçador (T8)", materials: [{ id: "T8_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },

  { id: "T4_ARMOR_LEATHER_SET3", name: "Casaco de Assassino (T4)", materials: [{ id: "T4_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_LEATHER_SET3", name: "Casaco de Assassino (T5)", materials: [{ id: "T5_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_LEATHER_SET3", name: "Casaco de Assassino (T6)", materials: [{ id: "T6_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_LEATHER_SET3", name: "Casaco de Assassino (T7)", materials: [{ id: "T7_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_LEATHER_SET3", name: "Casaco de Assassino (T8)", materials: [{ id: "T8_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },

  // PLATE ARMORS
  { id: "T4_ARMOR_PLATE_SET1", name: "Armadura de Cavaleiro (T4)", materials: [{ id: "T4_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_PLATE_SET1", name: "Armadura de Cavaleiro (T5)", materials: [{ id: "T5_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_PLATE_SET1", name: "Armadura de Cavaleiro (T6)", materials: [{ id: "T6_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_PLATE_SET1", name: "Armadura de Cavaleiro (T7)", materials: [{ id: "T7_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_PLATE_SET1", name: "Armadura de Cavaleiro (T8)", materials: [{ id: "T8_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },

  { id: "T4_ARMOR_PLATE_SET2", name: "Armadura de Guardião (T4)", materials: [{ id: "T4_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_PLATE_SET2", name: "Armadura de Guardião (T5)", materials: [{ id: "T5_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_PLATE_SET2", name: "Armadura de Guardião (T6)", materials: [{ id: "T6_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_PLATE_SET2", name: "Armadura de Guardião (T7)", materials: [{ id: "T7_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_PLATE_SET2", name: "Armadura de Guardião (T8)", materials: [{ id: "T8_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },

  { id: "T4_ARMOR_PLATE_SET3", name: "Armadura de Soldado (T4)", materials: [{ id: "T4_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_PLATE_SET3", name: "Armadura de Soldado (T5)", materials: [{ id: "T5_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_PLATE_SET3", name: "Armadura de Soldado (T6)", materials: [{ id: "T6_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_PLATE_SET3", name: "Armadura de Soldado (T7)", materials: [{ id: "T7_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_PLATE_SET3", name: "Armadura de Soldado (T8)", materials: [{ id: "T8_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },

  // ARTEFACT ROBES
  { id: "T4_ARMOR_CLOTH_KEEPER", name: "Robe Druídico (T4)", materials: [{ id: "T4_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_CLOTH_KEEPER", name: "Robe Druídico (T5)", materials: [{ id: "T5_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_CLOTH_KEEPER", name: "Robe Druídico (T6)", materials: [{ id: "T6_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_ARMOR_CLOTH_HELL", name: "Robe Satânico (T4)", materials: [{ id: "T4_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_CLOTH_HELL", name: "Robe Satânico (T5)", materials: [{ id: "T5_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_CLOTH_HELL", name: "Robe Satânico (T6)", materials: [{ id: "T6_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_ARMOR_CLOTH_MORGANA", name: "Robe de Cultista (T4)", materials: [{ id: "T4_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_CLOTH_MORGANA", name: "Robe de Cultista (T5)", materials: [{ id: "T5_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_CLOTH_MORGANA", name: "Robe de Cultista (T6)", materials: [{ id: "T6_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  // ARTEFACT JACKETS
  { id: "T4_ARMOR_LEATHER_MORGANA", name: "Casaco Espreitador (T4)", materials: [{ id: "T4_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_LEATHER_MORGANA", name: "Casaco Espreitador (T5)", materials: [{ id: "T5_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_LEATHER_MORGANA", name: "Casaco Espreitador (T6)", materials: [{ id: "T6_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T4_ARMOR_LEATHER_HELL", name: "Casaco do Inferno (T4)", materials: [{ id: "T4_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_LEATHER_HELL", name: "Casaco do Inferno (T5)", materials: [{ id: "T5_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_LEATHER_HELL", name: "Casaco do Inferno (T6)", materials: [{ id: "T6_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T4_ARMOR_LEATHER_UNDEAD", name: "Casaco do Espectro (T4)", materials: [{ id: "T4_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_LEATHER_UNDEAD", name: "Casaco do Espectro (T5)", materials: [{ id: "T5_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_LEATHER_UNDEAD", name: "Casaco do Espectro (T6)", materials: [{ id: "T6_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },

  // ARTEFACT PLATE
  { id: "T4_ARMOR_PLATE_UNDEAD", name: "Armadura do Guardião do Túmulo (T4)", materials: [{ id: "T4_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_PLATE_UNDEAD", name: "Armadura do Guardião do Túmulo (T5)", materials: [{ id: "T5_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_PLATE_UNDEAD", name: "Armadura do Guardião do Túmulo (T6)", materials: [{ id: "T6_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_ARMOR_PLATE_HELL", name: "Armadura Demoníaca (T4)", materials: [{ id: "T4_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_PLATE_HELL", name: "Armadura Demoníaca (T5)", materials: [{ id: "T5_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_PLATE_HELL", name: "Armadura Demoníaca (T6)", materials: [{ id: "T6_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_ARMOR_PLATE_KEEPER", name: "Armadura do Justiceiro (T4)", materials: [{ id: "T4_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_PLATE_KEEPER", name: "Armadura do Justiceiro (T5)", materials: [{ id: "T5_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_PLATE_KEEPER", name: "Armadura do Justiceiro (T6)", materials: [{ id: "T6_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },

  { id: "T4_ARMOR_CLOTH_ROYAL", name: "Robe Real (T4)", materials: [{ id: "T4_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_CLOTH_ROYAL", name: "Robe Real (T5)", materials: [{ id: "T5_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_CLOTH_ROYAL", name: "Robe Real (T6)", materials: [{ id: "T6_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_ARMOR_CLOTH_ROYAL", name: "Robe Real (T7)", materials: [{ id: "T7_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_ARMOR_CLOTH_ROYAL", name: "Robe Real (T8)", materials: [{ id: "T8_CLOTH", count: 16 }], category: "Cloth Armor", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  // HELMETS (Cloth)
  { id: "T4_HEAD_CLOTH_SET1", name: "Hábito de Erudito (T4)", materials: [{ id: "T4_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_HEAD_CLOTH_SET1", name: "Hábito de Erudito (T5)", materials: [{ id: "T5_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_HEAD_CLOTH_SET1", name: "Hábito de Erudito (T6)", materials: [{ id: "T6_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_HEAD_CLOTH_SET1", name: "Hábito de Erudito (T7)", materials: [{ id: "T7_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_HEAD_CLOTH_SET1", name: "Hábito de Erudito (T8)", materials: [{ id: "T8_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_HEAD_CLOTH_SET2", name: "Hábito de Clérigo (T4)", materials: [{ id: "T4_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_HEAD_CLOTH_SET2", name: "Hábito de Clérigo (T5)", materials: [{ id: "T5_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_HEAD_CLOTH_SET3", name: "Hábito de Mago (T4)", materials: [{ id: "T4_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_HEAD_CLOTH_SET3", name: "Hábito de Mago (T5)", materials: [{ id: "T5_CLOTH", count: 8 }], category: "Cloth Helmet", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  // SHOES (Cloth)
  { id: "T4_SHOES_CLOTH_SET1", name: "Sandálias de Erudito (T4)", materials: [{ id: "T4_CLOTH", count: 8 }], category: "Cloth Shoes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_SHOES_CLOTH_SET1", name: "Sandálias de Erudito (T5)", materials: [{ id: "T5_CLOTH", count: 8 }], category: "Cloth Shoes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_SHOES_CLOTH_SET1", name: "Sandálias de Erudito (T6)", materials: [{ id: "T6_CLOTH", count: 8 }], category: "Cloth Shoes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_SHOES_CLOTH_SET2", name: "Sandálias de Clérigo (T4)", materials: [{ id: "T4_CLOTH", count: 8 }], category: "Cloth Shoes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_SHOES_CLOTH_SET2", name: "Sandálias de Clérigo (T5)", materials: [{ id: "T5_CLOTH", count: 8 }], category: "Cloth Shoes", bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  { id: "T4_ARMOR_LEATHER_ROYAL", name: "Casaco Real (T4)", materials: [{ id: "T4_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_LEATHER_ROYAL", name: "Casaco Real (T5)", materials: [{ id: "T5_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_LEATHER_ROYAL", name: "Casaco Real (T6)", materials: [{ id: "T6_LEATHER", count: 16 }], category: "Leather Armor", bonusCity: "Thetford", bestSellCity: "Caerleon" },

  // HELMETS (Leather)
  { id: "T4_HEAD_LEATHER_SET1", name: "Capuz de Mercenário (T4)", materials: [{ id: "T4_LEATHER", count: 8 }], category: "Leather Helmet", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_HEAD_LEATHER_SET1", name: "Capuz de Mercenário (T5)", materials: [{ id: "T5_LEATHER", count: 8 }], category: "Leather Helmet", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T4_HEAD_LEATHER_SET2", name: "Capuz de Caçador (T4)", materials: [{ id: "T4_LEATHER", count: 8 }], category: "Leather Helmet", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_HEAD_LEATHER_SET2", name: "Capuz de Caçador (T5)", materials: [{ id: "T5_LEATHER", count: 8 }], category: "Leather Helmet", bonusCity: "Thetford", bestSellCity: "Caerleon" },

  // SHOES (Leather)
  { id: "T4_SHOES_LEATHER_SET1", name: "Botas de Mercenário (T4)", materials: [{ id: "T4_LEATHER", count: 8 }], category: "Leather Shoes", bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_SHOES_LEATHER_SET1", name: "Botas de Mercenário (T5)", materials: [{ id: "T5_LEATHER", count: 8 }], category: "Leather Shoes", bonusCity: "Thetford", bestSellCity: "Caerleon" },

  { id: "T4_ARMOR_PLATE_ROYAL", name: "Armadura Real (T4)", materials: [{ id: "T4_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_ARMOR_PLATE_ROYAL", name: "Armadura Real (T5)", materials: [{ id: "T5_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T6_ARMOR_PLATE_ROYAL", name: "Armadura Real (T6)", materials: [{ id: "T6_METALBAR", count: 16 }], category: "Plate Armor", bonusCity: "Martlock", bestSellCity: "Caerleon" },

  // HELMETS (Plate)
  { id: "T4_HEAD_PLATE_SET1", name: "Elmo de Cavaleiro (T4)", materials: [{ id: "T4_METALBAR", count: 8 }], category: "Plate Helmet", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_HEAD_PLATE_SET1", name: "Elmo de Cavaleiro (T5)", materials: [{ id: "T5_METALBAR", count: 8 }], category: "Plate Helmet", bonusCity: "Martlock", bestSellCity: "Caerleon" },

  // SHOES (Plate)
  { id: "T4_SHOES_PLATE_SET1", name: "Botas de Cavaleiro (T4)", materials: [{ id: "T4_METALBAR", count: 8 }], category: "Plate Shoes", bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_SHOES_PLATE_SET1", name: "Botas de Cavaleiro (T5)", materials: [{ id: "T5_METALBAR", count: 8 }], category: "Plate Shoes", bonusCity: "Martlock", bestSellCity: "Caerleon" }
];

export const REFINE_RECIPES = [
  // REFINED RESOURCES - METAL (Barra)
  { id: "T2_METALBAR", name: "Barra de Cobre (T2)", materials: [{ id: "T2_ORE", count: 1 }], bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T3_METALBAR", name: "Barra de Bronze (T3)", materials: [{ id: "T3_ORE", count: 2 }, { id: "T2_METALBAR", count: 1 }], bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T4_METALBAR", name: "Barra de Aço (T4)", materials: [{ id: "T4_ORE", count: 2 }, { id: "T3_METALBAR", count: 1 }], bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T5_METALBAR", name: "Barra de Titânio (T5)", materials: [{ id: "T5_ORE", count: 3 }, { id: "T4_METALBAR", count: 1 }], bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T6_METALBAR", name: "Barra de Runas (T6)", materials: [{ id: "T6_ORE", count: 4 }, { id: "T5_METALBAR", count: 1 }], bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T7_METALBAR", name: "Barra de Meteorito (T7)", materials: [{ id: "T7_ORE", count: 5 }, { id: "T6_METALBAR", count: 1 }], bonusCity: "Thetford", bestSellCity: "Caerleon" },
  { id: "T8_METALBAR", name: "Barra de Adamantio (T8)", materials: [{ id: "T8_ORE", count: 5 }, { id: "T7_METALBAR", count: 1 }], bonusCity: "Thetford", bestSellCity: "Caerleon" },
  
  // REFINED RESOURCES - LEATHER (Couro)
  { id: "T2_LEATHER", name: "Couro Rígido (T2)", materials: [{ id: "T2_HIDE", count: 1 }], bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T3_LEATHER", name: "Couro Grosso (T3)", materials: [{ id: "T3_HIDE", count: 2 }, { id: "T2_LEATHER", count: 1 }], bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T4_LEATHER", name: "Couro Trabalhado (T4)", materials: [{ id: "T4_HIDE", count: 2 }, { id: "T3_LEATHER", count: 1 }], bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T5_LEATHER", name: "Couro Curado (T5)", materials: [{ id: "T5_HIDE", count: 3 }, { id: "T4_LEATHER", count: 1 }], bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T6_LEATHER", name: "Couro Reforçado (T6)", materials: [{ id: "T6_HIDE", count: 4 }, { id: "T5_LEATHER", count: 1 }], bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T7_LEATHER", name: "Couro Endurecido (T7)", materials: [{ id: "T7_HIDE", count: 5 }, { id: "T6_LEATHER", count: 1 }], bonusCity: "Martlock", bestSellCity: "Caerleon" },
  { id: "T8_LEATHER", name: "Couro Primoroso (T8)", materials: [{ id: "T8_HIDE", count: 5 }, { id: "T7_LEATHER", count: 1 }], bonusCity: "Martlock", bestSellCity: "Caerleon" },

  // REFINED RESOURCES - CLOTH (Tecido)
  { id: "T2_CLOTH", name: "Pano Simples (T2)", materials: [{ id: "T2_FIBER", count: 1 }], bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T3_CLOTH", name: "Tecido (T3)", materials: [{ id: "T3_FIBER", count: 2 }, { id: "T2_CLOTH", count: 1 }], bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T4_CLOTH", name: "Tecido Limpo (T4)", materials: [{ id: "T4_FIBER", count: 2 }, { id: "T3_CLOTH", count: 1 }], bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T5_CLOTH", name: "Tecido Fino (T5)", materials: [{ id: "T5_FIBER", count: 3 }, { id: "T4_CLOTH", count: 1 }], bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T6_CLOTH", name: "Tecido Primoroso (T6)", materials: [{ id: "T6_FIBER", count: 4 }, { id: "T5_CLOTH", count: 1 }], bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T7_CLOTH", name: "Tecido Magnífico (T7)", materials: [{ id: "T7_FIBER", count: 5 }, { id: "T6_CLOTH", count: 1 }], bonusCity: "Lymhurst", bestSellCity: "Caerleon" },
  { id: "T8_CLOTH", name: "Tecido Divino (T8)", materials: [{ id: "T8_FIBER", count: 5 }, { id: "T7_CLOTH", count: 1 }], bonusCity: "Lymhurst", bestSellCity: "Caerleon" },

  // REFINED RESOURCES - PLANKS (Tábua)
  { id: "T2_PLANKS", name: "Tábua de Bétula (T2)", materials: [{ id: "T2_WOOD", count: 1 }], bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T3_PLANKS", name: "Tábua de Castanheira (T3)", materials: [{ id: "T3_WOOD", count: 2 }, { id: "T2_PLANKS", count: 1 }], bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T4_PLANKS", name: "Tábua de Carvalho (T4)", materials: [{ id: "T4_WOOD", count: 2 }, { id: "T3_PLANKS", count: 1 }], bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T5_PLANKS", name: "Tábua de Cedro (T5)", materials: [{ id: "T5_WOOD", count: 3 }, { id: "T4_PLANKS", count: 1 }], bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T6_PLANKS", name: "Tábua de Bloqueio (T6)", materials: [{ id: "T6_WOOD", count: 4 }, { id: "T5_PLANKS", count: 1 }], bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T7_PLANKS", name: "Tábua de Tronco de Carvalho (T7)", materials: [{ id: "T7_WOOD", count: 5 }, { id: "T6_PLANKS", count: 1 }], bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },
  { id: "T8_PLANKS", name: "Tábua de Tronco de Cedro (T8)", materials: [{ id: "T8_WOOD", count: 5 }, { id: "T7_PLANKS", count: 1 }], bonusCity: "Fort Sterling", bestSellCity: "Caerleon" },

  // REFINED RESOURCES - STONE BLOCKS (Bloco de Pedra)
  { id: "T2_STONEBLOCK", name: "Bloco de Calcário (T2)", materials: [{ id: "T2_ROCK", count: 1 }], bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T3_STONEBLOCK", name: "Bloco de Arenito (T3)", materials: [{ id: "T3_ROCK", count: 2 }, { id: "T2_STONEBLOCK", count: 1 }], bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T4_STONEBLOCK", name: "Bloco de Travertino (T4)", materials: [{ id: "T4_ROCK", count: 2 }, { id: "T3_STONEBLOCK", count: 1 }], bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T5_STONEBLOCK", name: "Bloco de Granito (T5)", materials: [{ id: "T5_ROCK", count: 3 }, { id: "T4_STONEBLOCK", count: 1 }], bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T6_STONEBLOCK", name: "Bloco de Xisto (T6)", materials: [{ id: "T6_ROCK", count: 4 }, { id: "T5_STONEBLOCK", count: 1 }], bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T7_STONEBLOCK", name: "Bloco de Basalto (T7)", materials: [{ id: "T7_ROCK", count: 5 }, { id: "T6_STONEBLOCK", count: 1 }], bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
  { id: "T8_STONEBLOCK", name: "Bloco de Mármore (T8)", materials: [{ id: "T8_ROCK", count: 5 }, { id: "T7_STONEBLOCK", count: 1 }], bonusCity: "Bridgewatch", bestSellCity: "Caerleon" },
];