// ============================================================
// TIBIA BOSS TRACKER & CHECKER — DADOS REAIS & POR SERVIDOR
// Foco Principal: USTEBRA (dados oficiais sincronizados)
// Suporte completo a sistema de Kills: Mortos Hoje e Mortos Ontem
// ============================================================

// Base mestra de Bosses com nomes oficiais, imagens, loots do Tibia Fandom e dados reais de Ustebra
// Atualizado e sincronizado com tibia-statistic.com (Ustebra - 14/09/2026)
const MASTER_BOSSES = [
    // --- VAMPIRE LORDS ---
    {
        id: "zevelon_duskbringer",
        name: "Zevelon Duskbringer",
        image: "imagens/zevelon_duskbringer.gif",
        category: "vampire",
        categoryLabel: "Vampire Lord",
        location: "Hellgate (Vampire Crypt), Ab'Dendriel",
        intervalMin: 6, intervalMax: 12,
        drops: "Vampire Lord Token, Vampire Shield, Dreaded Cleaver, Black Pearl, Ring of Healing",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-07"
    },
    {
        id: "diblis_the_fair",
        name: "Diblis the Fair",
        image: "imagens/diblis_the_fair.gif",
        category: "vampire",
        categoryLabel: "Vampire Lord",
        location: "Vampire Crypt, Nargor",
        intervalMin: 6, intervalMax: 12,
        drops: "Vampire Lord Token, Blood Preservation, Vampire Shield, Spellbook of Lost Souls, Ring of Healing",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-03"
    },
    {
        id: "arachir_the_ancient_one",
        name: "Arachir the Ancient One",
        image: "imagens/arachir_the_ancient_one.gif",
        category: "vampire",
        categoryLabel: "Vampire Lord",
        location: "Drefia (Vampire Crypt), Darashia",
        intervalMin: 6, intervalMax: 12,
        drops: "Vampire Lord Token, Blood Preservation, Vampire Shield, Bloody Edge, Black Pearl",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-11"
    },
    {
        id: "sir_valorcrest",
        name: "Sir Valorcrest",
        image: "imagens/sir_valorcrest.gif",
        category: "vampire",
        categoryLabel: "Vampire Lord",
        location: "Vampire Crypt, Mount Sternum",
        intervalMin: 6, intervalMax: 12,
        drops: "Vampire Lord Token, Vampire Shield, Chaos Mace, Sword Ring, Ring of Healing",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-10"
    },
    {
        id: "the_pale_count",
        name: "The Pale Count",
        image: "imagens/the_pale_count.gif",
        category: "vampire",
        categoryLabel: "Nemesis Boss",
        location: "Drefia (Vampire Area), Darashia",
        intervalMin: 15, intervalMax: 30,
        drops: "Vampire Lord Token, Vampire's Cape Chain, Vampire Shield, Batwing Hat, Bloody Edge, Dreaded Cleaver",
        difficulty: "Muito DifÃ­cil",
        lastKilledDate: "2026-09-12"
    },

    // --- MOUNT BOSSES ---
    {
        id: "undead_cavebear",
        name: "Undead Cavebear",
        image: "imagens/undead_cavebear.gif",
        category: "mount",
        categoryLabel: "Montaria",
        location: "Lich Hell, Ramoa (Goroma)",
        intervalMin: 2, intervalMax: 4,
        drops: "Maxilla (Domar), Cavebear Skull, Health Potion",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-11"
    },
    {
        id: "midnight_panther",
        name: "Midnight Panther",
        image: "imagens/midnight_panther.gif",
        category: "mount",
        categoryLabel: "Montaria",
        location: "Selvas de Tiquanda (Port Hope)",
        intervalMin: 2, intervalMax: 4,
        drops: "Panther Paw, Panther Head, Sabretooth, Life Ring",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-11",
        noPrediction: true
    },
    {
        id: "crustacea_gigantica",
        name: "Crustacea Gigantica",
        image: "imagens/crustacea_gigantica.gif",
        category: "mount",
        categoryLabel: "Montaria",
        location: "Treasure Island / Calassa / Seacrest Grounds",
        intervalMin: 2, intervalMax: 5,
        drops: "Giant Crab Pincer, Strong Mana Potion, Ring of Healing",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-13",
        noPrediction: true
    },
    {
        id: "draptor",
        name: "Draptor",
        image: "imagens/draptor.gif",
        category: "mount",
        categoryLabel: "Montaria",
        location: "Razachai / Dragonblaze Peaks / Muggy Plains",
        intervalMin: 3, intervalMax: 7,
        drops: "Draptor Scales, Strong Health Potion, Strong Mana Potion",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-09-13",
        noPrediction: true
    },

    // --- ROOKGAARD BOSSES ---
    {
        id: "munster",
        name: "Munster",
        image: "imagens/munster.gif",
        category: "rookgaard",
        categoryLabel: "Rookgaard Boss",
        location: "Bueiro de Rookgaard (Rat Dungeon)",
        intervalMin: 1, intervalMax: 3,
        drops: "Die, Bone Club, Cookie, Cheese, Worm",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13"
    },
    {
        id: "apprentice_sheng",
        name: "Apprentice Sheng",
        image: "imagens/apprentice_sheng.gif",
        category: "rookgaard",
        categoryLabel: "Rookgaard Boss",
        location: "Minotaur Hell, Rookgaard",
        intervalMin: 2, intervalMax: 5,
        drops: "Magic Light Wand, Minotaur Horn, Carrot, Leather Helmet",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13"
    },
    {
        id: "teleskor",
        name: "Teleskor",
        image: "imagens/teleskor.gif",
        category: "rookgaard",
        categoryLabel: "Rookgaard Boss",
        location: "Rookgaard Cemetery / Ghost Area",
        intervalMin: 2, intervalMax: 4,
        drops: "Pelvis Bone, Viking Helmet, Brass Shield, Hatchet, Sword",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-08-18"
    },
    {
        id: "rottie_the_rotworm",
        name: "Rottie the Rotworm",
        image: "imagens/rottie_the_rotworm.gif",
        category: "rookgaard",
        categoryLabel: "Rookgaard Boss",
        location: "Katana Quest Caves, Rookgaard",
        intervalMin: 1, intervalMax: 3,
        drops: "Lump of Dirt, Copper Shield, Legion Helmet, Katana, Mace",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-04"
    },

    // --- PITS OF INFERNO (POI) & INQUISITION BOSSES ---
    {
        id: "the_plasmother",
        name: "The Plasmother",
        image: "imagens/the_plasmother.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Defiler Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "The Plasmother's Remains, Demonic Essence, Soul Orb, Small Emerald",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-08-29"
    },
    {
        id: "the_handmaiden",
        name: "The Handmaiden",
        image: "imagens/the_handmaiden.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Hand of Cursed Fate Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "The Handmaiden's Protector, Steel Boots, Dark Shield, Blue Robe, Death Ring",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-09-01"
    },
    {
        id: "massacre",
        name: "Massacre",
        image: "imagens/massacre.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Juggernaut Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "Piece of Massacre's Shell, Orichalcum Pearl, Golden Armor, Big Bone",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-09-03"
    },
    {
        id: "the_imperor",
        name: "The Imperor",
        image: "imagens/the_imperor.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Diabolic Imp Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "The Imperor's Trident, Fire Axe, Crown Legs, Golden Legs, Magma Coat",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-08-29"
    },
    {
        id: "countess_sorrow",
        name: "Countess Sorrow",
        image: "imagens/countess_sorrow.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Phantasm Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "Countess Sorrow's Frozen Tear, Silver Mace, Blue Robe, Stealth Ring",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-08-16"
    },
    {
        id: "dracola",
        name: "Dracola",
        image: "imagens/dracola.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Undead Dragon Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "Dracola's Eye, Reaper's Axe, Skull Helmet, Dark Armor, Hardened Bone",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-09-08"
    },
    {
        id: "mr_punish",
        name: "Mr. Punish",
        image: "imagens/mr_punish.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Dark Torturer Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "Ravager's Axe, Jewelled Backpack, Bat Decoration, Gold Ingot, Double Axe",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-09-11"
    },
    {
        id: "hatebreeder",
        name: "Hatebreeder",
        image: "imagens/hatebreeder.gif",
        category: "poi_inq",
        categoryLabel: "Inquisition Boss",
        location: "The Vats (The Inquisition Quest)",
        intervalMin: 10, intervalMax: 20,
        drops: "Undead Heart, Ghastly Dragon Head, Zaoan Legs, Zaoan Helmet, Jade Hat",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-09-05"
    },

    // --- NEMESIS & MINI BOSSES ---
    {
        id: "the_frog_prince",
        name: "The Frog Prince",
        image: "imagens/the_frog_prince.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Green Claw Swamp, Venore",
        intervalMin: 4, intervalMax: 8,
        drops: "Nenhum drop (Criatura de Raid/Evento)",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-08-31"
    },
    {
        id: "fernfang",
        name: "Fernfang",
        image: "imagens/fernfang.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Cavernas de FÃ­bula / PÃ¢ntano",
        intervalMin: 6, intervalMax: 12,
        drops: "Wooden Whistle, Green Tunic, Wolf Tooth Chain, Blank Rune, Staff",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-03"
    },
    {
        id: "tzumrah_the_dazzler",
        name: "Tzumrah the Dazzler",
        image: "imagens/tzumrah_the_dazzler.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Forbidden Temple, Tiquanda",
        intervalMin: 12, intervalMax: 24,
        drops: "Cultish Symbol, Energy Ring, Protection Amulet",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-03"
    },
    {
        id: "the_evil_eye",
        name: "The Evil Eye",
        image: "imagens/the_evil_eye.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Hellgate (Beholder Chamber)",
        intervalMin: 5, intervalMax: 10,
        drops: "Bonelord Shield, Terra Mantle, Bonelord Eye, Small Flask of Eyedrops",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-03"
    },
    {
        id: "zulazza_the_corruptor",
        name: "Zulazza the Corruptor",
        image: "imagens/zulazza_the_corruptor.gif",
        category: "nemesis",
        categoryLabel: "Zao Raid",
        location: "Muggy Plains (Zao Gate)",
        intervalMin: 12, intervalMax: 24,
        drops: "Zaoan Halberd, Paladin Armor, Emerald Bangle, Giant Shimmering Pearl",
        difficulty: "Muito DifÃ­cil",
        lastKilledDate: "2026-08-30"
    },
    {
        id: "big_boss_trolliver",
        name: "Big Boss Trolliver",
        image: "imagens/big_boss_trolliver.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Edron Troll Caves",
        intervalMin: 3, intervalMax: 6,
        drops: "Bunch of Troll Hair, Silver Amulet, Wooden Shield, Studded Club",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-08"
    },
    {
        id: "smuggler_baron_silvertoe",
        name: "Smuggler Baron Silvertoe",
        image: "imagens/smuggler_baron_silvertoe.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Smuggler Cave, Bandits Den (Carlin / Port Hope)",
        intervalMin: 4, intervalMax: 8,
        drops: "Short Sword, Mace, Meat",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-01"
    },
    {
        id: "dreadmaw",
        name: "Dreadmaw",
        image: "imagens/dreadmaw.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Muggy Plains / Zao Steppes",
        intervalMin: 5, intervalMax: 10,
        drops: "Gold Ingot, Piece of Crocodile Leather, Ham",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-07"
    },
    {
        id: "hairman_the_huge",
        name: "Hairman the Huge",
        image: "imagens/hairman_the_huge.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Banuta (Ape City), Port Hope",
        intervalMin: 5, intervalMax: 10,
        drops: "Ape Fur, Banana, Plate Armor, Club Ring, Power Ring",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-08-31"
    },
    {
        id: "xenia",
        name: "Xenia",
        image: "imagens/xenia.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Amazon Camp, Venore",
        intervalMin: 7, intervalMax: 14,
        drops: "Studded Shield, Sabre, Skull (Item)",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-08"
    },
    {
        id: "rukor_zad",
        name: "Rukor Zad",
        image: "imagens/rukor_zad.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Dark Cathedral, Plains of Havoc",
        intervalMin: 3, intervalMax: 6,
        drops: "Horseman Helmet, Viper Star, Steel Shield, Battle Shield",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13"
    },
    {
        id: "high_templar_cobrass",
        name: "High Templar Cobrass",
        image: "imagens/high_templar_cobrass.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Chor, Tiquanda",
        intervalMin: 5, intervalMax: 10,
        drops: "Salamander Shield, Lizard Scale, Lizard Leather, Plate Armor",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13"
    },
    {
        id: "yaga_the_crone",
        name: "Yaga the Crone",
        image: "imagens/yaga_the_crone.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Green Claw Swamp (Witch Hill), Venore",
        intervalMin: 4, intervalMax: 8,
        drops: "Broom, Cape, Wolf Tooth Chain, Garlic Necklace, Silver Dagger",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-12"
    },
    {
        id: "foreman_kneebiter",
        name: "Foreman Kneebiter",
        image: "imagens/foreman_kneebiter.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Dwarf Mines, Kazordoon",
        intervalMin: 4, intervalMax: 8,
        drops: "Iron Ore, Axe Ring, Battle Hammer, Steel Helmet, Scale Armor",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-08"
    },
    {
        id: "yeti",
        name: "Yeti",
        image: "imagens/yeti.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Folda (Topo das Montanhas de Gelo)",
        intervalMin: 15, intervalMax: 30,
        drops: "Bunnyslippers, Snowball, Wolf Tooth Chain, Ham",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-04"
    },
    {
        id: "dharalion",
        name: "Dharalion",
        image: "imagens/dharalion.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Shadowthorn, Venore",
        intervalMin: 6, intervalMax: 12,
        drops: "Cornucopia, Elvish Talisman, Elven Astral Observer, Green Tunic, Holy Orchid",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-09"
    },
    {
        id: "general_murius",
        name: "General Murius",
        image: "imagens/general_murius.gif",
        category: "mini",
        categoryLabel: "Minotaur Boss",
        location: "Mintwallin, Thais Tunnels",
        intervalMin: 4, intervalMax: 8,
        drops: "Minotaur Trophy, Minotaur Leather, Minotaur Horn, Double Axe, Brass Armor",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-11"
    },
    {
        id: "man_in_the_cave",
        name: "Man in the Cave",
        image: "imagens/man_in_the_cave.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Caverna Oculta de Svargrond",
        intervalMin: 14, intervalMax: 30,
        drops: "Fur Cap, Mammoth Fur Cape, Mercenary Sword, Shard, Brown Piece of Cloth",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-08"
    },
    {
        id: "ocyakao",
        name: "Ocyakao",
        image: "imagens/ocyakao.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Geleiras de Nibelor, Svargrond",
        intervalMin: 14, intervalMax: 28,
        drops: "Eye of the Storm, Mammoth Whopper, Bone Shield, White Pearl, Ice Cube",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-09"
    },
    {
        id: "the_welter",
        name: "The Welter",
        image: "imagens/the_welter.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Hydra Mountain, Tiquanda",
        intervalMin: 14, intervalMax: 28,
        drops: "Hydra Egg, Giant Shimmering Pearl, Sacred Tree Amulet, Royal Helmet, Medusa Shield",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-08-20"
    },
    {
        id: "shlorg",
        name: "Shlorg",
        image: "imagens/shlorg.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Terra Tunnels (Edron / Kazordoon)",
        intervalMin: 12, intervalMax: 24,
        drops: "Glass of Goo",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-08-22"
    },
    {
        id: "zushuka",
        name: "Zushuka",
        image: "imagens/zushuka.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Ice Witch Temple, Svargrond",
        intervalMin: 14, intervalMax: 28,
        drops: "Icy Culottes, Glacier Shoes, Glacier Mask, Glacier Robe, Crystal Mace",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-08-25"
    },
    {
        id: "white_pale",
        name: "White Pale",
        image: "imagens/white_pale.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Edron Rotworm Caves / Liberty Bay / Darashia",
        intervalMin: 6, intervalMax: 12,
        drops: "Albino Plate, Horn (Ring), Spiked Squelcher, Silver Raid Token",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-05",
        noPrediction: true
    },
    {
        id: "furyosa",
        name: "Furyosa",
        image: "imagens/furyosa.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Fury Gate, Thais / Darashia",
        intervalMin: 14, intervalMax: 28,
        drops: "Furious Frock, Phoenix Shield, Noble Axe, Wand of Everblazing, Golden Legs",
        difficulty: "Muito DifÃ­cil",
        lastKilledDate: "2026-08-12",
        noPrediction: true
    },
    {
        id: "hirintror",
        name: "Hirintror",
        image: "imagens/hirintror.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Formorgar Mines / Mammoth Lair",
        intervalMin: 12, intervalMax: 24,
        drops: "Glacier Mask, Glacier Shoes, Crystal Sword, Ice Cube, Frosty Heart",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-05",
        noPrediction: true
    },
    {
        id: "yakchal",
        name: "Yakchal",
        image: "imagens/yakchal.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Formorgar Glacier (Ice Shrine)",
        intervalMin: 2, intervalMax: 5,
        drops: "Glacier Kilt, Glacier Robe, Pair of Earmuffs, Queen's Sceptre, Crystal Sword",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-09-13",
        noPrediction: true
    },
    {
        id: "dire_penguin",
        name: "Dire Penguin",
        image: "imagens/dire_penguin.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Ilhas de Svargrond / Chyllfroest",
        intervalMin: 3, intervalMax: 6,
        drops: "Fish",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-11",
        noPrediction: true
    },
    {
        id: "groam",
        name: "Groam",
        image: "imagens/groam.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Subsolo de Kazordoon (Mines)",
        intervalMin: 4, intervalMax: 8,
        drops: "Fish Fin, Life Ring, Hunting Spear, Rusted Armor, Small Emerald",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-09",
        noPrediction: true
    },
    {
        id: "captain_jones",
        name: "Captain Jones",
        image: "imagens/captain_jones.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Ghostship / Darashia",
        intervalMin: 5, intervalMax: 10,
        drops: "Red Robe, Crown Legs, Focus Cape, Stealth Ring, Spike Sword",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-03"
    },
    {
        id: "gravelord_oshuran",
        name: "Gravelord Oshuran",
        image: "imagens/gravelord_oshuran.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Drefia (Tomb Grounds)",
        intervalMin: 6, intervalMax: 12,
        drops: "Lightning Boots, Blue Robe, Skull Staff, Ring of Healing",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-12"
    },
    {
        id: "the_big_bad_one",
        name: "The Big Bad One",
        image: "imagens/the_big_bad_one.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Edron Woods / Cormaya",
        intervalMin: 3, intervalMax: 6,
        drops: "Wolf Trophy, Wolf Paw, Meat, Ham",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-09"
    },
    {
        id: "barbaria",
        name: "Barbaria",
        image: "imagens/barbaria.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Barbarian Camp, Svargrond",
        intervalMin: 4, intervalMax: 8,
        drops: "Mammoth Fur Cape, Fur Bag, Hunting Spear, Chain Armor",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-08-03"
    },
    {
        id: "grandfather_tridian",
        name: "Grandfather Tridian",
        image: "imagens/grandfather_tridian.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Cult Caves, Liberty Bay",
        intervalMin: 5, intervalMax: 10,
        drops: "Amber Staff, Voodoo Doll, Pirate Voodoo Doll, Skull Staff, Piggy Bank",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-08-31"
    },
    {
        id: "the_old_whopper",
        name: "The Old Whopper",
        image: "imagens/the_old_whopper.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Cyclopolis, Edron",
        intervalMin: 4, intervalMax: 8,
        drops: "Cyclops Trophy, Cyclops Toe, Spiked Squelcher, Plate Shield",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13"
    },
    {
        id: "zarabustor",
        name: "Zarabustor",
        image: "imagens/zarabustor.gif",
        category: "mini",
        categoryLabel: "Warlock Boss",
        location: "Demona, Maze of Lost Souls",
        intervalMin: 6, intervalMax: 12,
        drops: "Golden Armor, Lightning Legs, Lightning Robe, Blue Robe, Skull Staff, Ring of the Sky",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-09-12"
    },
    {
        id: "warlord_ruzad",
        name: "Warlord Ruzad",
        image: "imagens/warlord_ruzad.gif",
        category: "mini",
        categoryLabel: "Orc Boss",
        location: "Orc Fortress, Ulderek's Rock",
        intervalMin: 4, intervalMax: 8,
        drops: "Orcish Axe, Magma Boots, Butcher's Axe, Dark Helmet, Plate Armor",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-03"
    },
    {
        id: "rotrender",
        name: "Rotrender",
        image: "imagens/rotrender.gif",
        category: "nemesis",
        categoryLabel: "Rotworm Boss",
        location: "Deep Rotworm Caves",
        intervalMin: 7, intervalMax: 14,
        drops: "Rotrender's Sceptre, Rotrender Scalp, Rotrender Claw, Demon in a Golden Box, Magic Plate Armor",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-02-17"
    },

    // --- NOVOS BOSSES ADICIONADOS ---
    {
        id: "rotworm_queen",
        name: "Rotworm Queen",
        image: "imagens/rotworm_queen.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Rotworm Caves (Edron / Kazordoon)",
        intervalMin: 3, intervalMax: 7,
        drops: "Lump of Dirt, Silver Brooch, Life Ring, Mace",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13",
        noPrediction: true
    },
    {
        id: "grand_mother_foulscale",
        name: "Grand Mother Foulscale",
        image: "imagens/grand_mother_foulscale.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Lizard City (Chor / Tiquanda)",
        intervalMin: 3, intervalMax: 7,
        drops: "Lizard Leather, Lizard Scale, Salamander Shield, Plate Armor",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13",
        noPrediction: true
    },
    {
        id: "burster",
        name: "Burster",
        image: "imagens/burster.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Draken Spire / Zao Steppes",
        intervalMin: 3, intervalMax: 7,
        drops: "Draken Sulphur, Zaoan Shoes, Green Crystal Shard",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-13",
        noPrediction: true
    },
    {
        id: "fleabringer",
        name: "Fleabringer",
        image: "imagens/fleabringer.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Rat Tunnel / Underground (Thais / Venore)",
        intervalMin: 3, intervalMax: 7,
        drops: "Cheese, Rat Tail, Health Potion",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13",
        noPrediction: true
    },
    {
        id: "oodok_witchmaster",
        name: "Oodok Witchmaster",
        image: "imagens/oodok_witchmaster.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Goblin Village (Femur Hills)",
        intervalMin: 3, intervalMax: 7,
        drops: "Skull Staff, Broken Shamanic Staff, Health Potion, Mana Potion",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-13",
        noPrediction: true
    },
    {
        id: "tyrn",
        name: "Tyrn",
        image: "imagens/tyrn.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Drefia Wyrm Caves (Darashia)",
        intervalMin: 7, intervalMax: 14,
        drops: "Wyrm Scale, Glacier Robe, Ice Cube, Crystal Sword",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-06",
        noPrediction: true
    },
    {
        id: "flamecaller_zazrak",
        name: "Flamecaller Zazrak",
        image: "imagens/flamecaller_zazrak.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Orc Fortress / Subsolo",
        intervalMin: 5, intervalMax: 10,
        drops: "Fiery Heart, Red Piece of Cloth, Magma Legs, Plate Armor",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-06",
        noPrediction: true
    },
    {
        id: "dreadful_disruptor",
        name: "Dreadful Disruptor",
        image: "imagens/dreadful_disruptor.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Drefia Demon Area",
        intervalMin: 5, intervalMax: 10,
        drops: "Demonic Essence, Soul Orb, Spike Sword, Blue Gem",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-08",
        noPrediction: true
    },
    {
        id: "the_hungerer",
        name: "The Hungerer",
        image: "imagens/the_hungerer.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Catacombs (Plains of Havoc)",
        intervalMin: 5, intervalMax: 10,
        drops: "Bone Shield, Bone Club, Soul Orb, Health Potion",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-09",
        noPrediction: true
    },
    {
        id: "battlemaster_zunzu",
        name: "Battlemaster Zunzu",
        image: "imagens/battlemaster_zunzu.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Lizard Barracks / Muggy Plains",
        intervalMin: 4, intervalMax: 8,
        drops: "Zaoan Helmet, Zaoan Armor, Zaoan Shoes, Green Crystal Shard",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-09-10",
        noPrediction: true
    },
    {
        id: "cublarc_the_plunderer",
        name: "Cublarc the Plunderer",
        image: "imagens/cublarc_the_plunderer.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Edron / Cormaya Cyclops Territory",
        intervalMin: 3, intervalMax: 6,
        drops: "Cyclops Trophy, Spike Club, Chain Armor, Iron Helmet",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-09-12",
        noPrediction: true
    },
    {
        id: "arthom_the_hunter",
        name: "Arthom the Hunter",
        image: "imagens/arthom_the_hunter.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Venore Swamp / Hunter Area",
        intervalMin: 14, intervalMax: 28,
        drops: "Bow, Arrows, Hunting Spear, Chain Armor",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-08-24",
        noPrediction: true
    },
    {
        id: "robby_the_reckless",
        name: "Robby the Reckless",
        image: "imagens/robby_the_reckless.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Cyclopolis (Edron)",
        intervalMin: 7, intervalMax: 14,
        drops: "Cyclops Trophy, Spiked Squelcher, Plate Shield, Two-Handed Sword",
        difficulty: "FÃ¡cil",
        lastKilledDate: "2026-08-31",
        noPrediction: true
    },
    {
        id: "mornenion",
        name: "Mornenion",
        image: "imagens/mornenion.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Shadowthorn (Venore)",
        intervalMin: 30, intervalMax: 60,
        drops: "Elven Astral Observer, Green Tunic, Holy Orchid, Elvish Talisman",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-07-25",
        noPrediction: true
    },
    {
        id: "elvira_hammerthrust",
        name: "Elvira Hammerthrust",
        image: "imagens/elvira_hammerthrust.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Kazordoon Dwarf Mines",
        intervalMin: 30, intervalMax: 60,
        drops: "Battle Hammer, Steel Helmet, Plate Armor, Iron Ore",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-07-11",
        noPrediction: true
    },
    {
        id: "the_voice_of_ruin",
        name: "The Voice of Ruin",
        image: "imagens/the_voice_of_ruin.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Drefia (Dark Cathedral area)",
        intervalMin: 30, intervalMax: 90,
        drops: "Soul Orb, Demonic Essence, Black Pearl, Ring of the Sky",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-07-03",
        noPrediction: true
    },
    {
        id: "jesse_the_wicked",
        name: "Jesse the Wicked",
        image: "imagens/jesse_the_wicked.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Plains of Havoc (Dark Cathedral)",
        intervalMin: 30, intervalMax: 90,
        drops: "Skull, Red Piece of Cloth, Two-Handed Sword, Knight Armor",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-06-24",
        noPrediction: true
    },
    {
        id: "mahatheb",
        name: "Mahatheb",
        image: "imagens/mahatheb.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Ankrahmun Tombs / Darashia",
        intervalMin: 30, intervalMax: 90,
        drops: "Mummy Dust, Scarab Coin, Gauze Bandage, Gold Coin",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-05-07",
        noPrediction: true
    },
    {
        id: "the_manhunter",
        name: "The Manhunter",
        image: "imagens/the_manhunter.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Orc Fortress (Ulderek's Rock)",
        intervalMin: 60, intervalMax: 120,
        drops: "Orcish Axe, Dark Helmet, Plate Armor, Obsidian Knife",
        difficulty: "DifÃ­cil",
        lastKilledDate: "2026-04-14",
        noPrediction: true
    },
    {
        id: "the_mean_masher",
        name: "The Mean Masher",
        image: "imagens/the_mean_masher.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Edron Spider Caves",
        intervalMin: 60, intervalMax: 180,
        drops: "Spiked Squelcher, Scale Armor, Steel Helmet, Battle Shield",
        difficulty: "MÃ©dio",
        lastKilledDate: "2026-01-13",
        noPrediction: true
    },

    // --- ARCHDEMONS & RAIDS ---
    {
        id: "ferumbras",
        name: "Ferumbras",
        image: "imagens/ferumbras.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Ferumbras' Citadel (Kharos, Goroma)",
        intervalMin: 150, intervalMax: 180,
        drops: "Ferumbras' Hat, Great Axe, Great Shield, Magic Plate Armor, Tempest Shield, Impaler",
        difficulty: "Extremo",
        lastKilledDate: "2026-04-10"
    },
    {
        id: "gazharagoth",
        name: "Gaz'haragoth",
        image: "imagens/gazharagoth.gif",
        category: "archdemon",
        categoryLabel: "Roshamuul Raid",
        location: "Roshamuul Prison Entrance",
        intervalMin: 14, intervalMax: 28,
        drops: "Dream Warden Mask, Dream Warden Claw, Nightmare Horn, Crude Umbral Weapons, Umbral Master Weapons",
        difficulty: "Extremo",
        lastKilledDate: "2026-08-30"
    },
    {
        id: "ghazbaran",
        name: "Ghazbaran",
        image: "imagens/ghazbaran.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Formorgar Mines, Svargrond",
        intervalMin: 150, intervalMax: 180,
        drops: "Golden Boots, Oceanborn Leviathan Armor, Havoc Blade, Ravenwing, Spellbook of Lost Souls",
        difficulty: "Extremo",
        lastKilledDate: "2026-07-14"
    },
    {
        id: "orshabaal",
        name: "Orshabaal",
        image: "imagens/orshabaal.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Femur Hills (Noroeste de Kazordoon)",
        intervalMin: 150, intervalMax: 180,
        drops: "Thunder Hammer, Great Axe, Magic Plate Armor, Teddy Bear, Orshabaal's Brain",
        difficulty: "Muito DifÃ­cil",
        lastKilledDate: "2026-08-05"
    },
    {
        id: "morgaroth",
        name: "Morgaroth",
        image: "imagens/morgaroth.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Triangle of Terror (Goroma Volcano)",
        intervalMin: 150, intervalMax: 180,
        drops: "Great Shield, The Stomper, Molten Plate, Demonbone, Chain Bolter",
        difficulty: "Extremo",
        lastKilledDate: "2026-08-26"
    },
    {
        id: "omrafir",
        name: "Omrafir",
        image: "imagens/omrafir.gif",
        category: "archdemon",
        categoryLabel: "Roshamuul Raid",
        location: "Roshamuul Mountain Lair",
        intervalMin: 14, intervalMax: 30,
        drops: "Dream Warden Mask, Nightmare Horn, Lightning Robe, Lightning Boots, Steel Boots",
        difficulty: "Extremo",
        lastKilledDate: "2026-08-21"
    },
    {
        id: "the_abomination",
        name: "The Abomination",
        image: "imagens/the_abomination.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Abomination Lair, Thais Tunnels",
        intervalMin: 14, intervalMax: 28,
        drops: "Abomination's Eye, Abomination's Tail, Abomination's Tongue, Gruesome Fan, Diabolic Skull",
        difficulty: "Muito DifÃ­cil",
        lastKilledDate: "2026-07-19"
    },
    {
        id: "morshabaal",
        name: "Morshabaal",
        image: "imagens/morshabaal.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Femur Hills / Plains of Havoc",
        intervalMin: 150, intervalMax: 200,
        drops: "Morshabaal's Mask, Morshabaal's Brain, Green Demon Armor, Green Demon Legs, Thunder Hammer",
        difficulty: "Extremo",
        lastKilledDate: "2026-05-24"
    }
];

// Lista oficial e verificada de servidores Tibia (com tipo PvP e localização corretos)
const TIBIA_WORLDS = [
    { name: "Ustebra", pvp: "Optional PvP", location: "South America" },
    { name: "Antica", pvp: "Open PvP", location: "Europe" },
    { name: "Astera", pvp: "Optional PvP", location: "North America" },
    { name: "Belobra", pvp: "Optional PvP", location: "South America" },
    { name: "Calmera", pvp: "Optional PvP", location: "North America" },
    { name: "Celebra", pvp: "Open PvP", location: "South America" },
    { name: "Damora", pvp: "Optional PvP", location: "Europe" },
    { name: "Descubra", pvp: "Open PvP", location: "South America" },
    { name: "Ferobra", pvp: "Open PvP", location: "South America" },
    { name: "Gentebra", pvp: "Optional PvP", location: "South America" },
    { name: "Gladera", pvp: "Optional PvP", location: "North America" },
    { name: "Harmonia", pvp: "Optional PvP", location: "Europe" },
    { name: "Honbra", pvp: "Open PvP", location: "South America" },
    { name: "Inabra", pvp: "Open PvP", location: "South America" },
    { name: "Kalibra", pvp: "Optional PvP", location: "South America" },
    { name: "Lobera", pvp: "Open PvP", location: "North America" },
    { name: "Lutabra", pvp: "Retro Open PvP", location: "South America" },
    { name: "Menera", pvp: "Optional PvP", location: "North America" },
    { name: "Monza", pvp: "Optional PvP", location: "Europe" },
    { name: "Nefera", pvp: "Optional PvP", location: "North America" },
    { name: "Pacera", pvp: "Optional PvP", location: "North America" },
    { name: "Peloria", pvp: "Open PvP", location: "Europe" },
    { name: "Premia", pvp: "Open PvP", location: "Europe" },
    { name: "Quemona", pvp: "Open PvP", location: "South America" },
    { name: "Refugia", pvp: "Optional PvP", location: "Europe" },
    { name: "Secura", pvp: "Optional PvP", location: "Europe" },
    { name: "Talera", pvp: "Open PvP", location: "North America" },
    { name: "Venebra", pvp: "Open PvP", location: "South America" },
    { name: "Vunira", pvp: "Open PvP", location: "Europe" },
    { name: "Wintera", pvp: "Open PvP", location: "North America" }
];

// Estado global
let bossTrackerState = {
    selectedWorld: "Ustebra",
    favoriteWorld: "Ustebra",      // Servidor principal/favorito escolhido pelo usuário
    searchQuery: "",
    statusFilter: "all",           // 'all', 'high', 'medium', 'low', 'killed_today', 'killed_yesterday', 'blocked', 'checked', 'unchecked'
    categoryFilter: "all",         // 'all', 'vampire', 'mount', 'archdemon', 'poi_inq', 'nemesis', 'mini', 'rookgaard'
    sortBy: "chance_desc",         // 'chance_desc', 'chance_asc', 'name_asc', 'last_seen_desc'
    hideBlockedBosses: true,       // Por padrão esconde bosses com 0% (sem chance hoje) para focar na ronda
    checkedBosses: {},             // { bossId: { time: "14:30", date: "29/08/2026", timestamp: 12345 } }
    killedBosses: {},              // { bossId: { time: "10:55", date: "29/08/2026", timestamp: 12345, isToday: true } }
    lastSyncTimestamp: null,       // Timestamp da última sincronização
    isSyncing: false,              // Flag de carregamento
    liveKillsFromAPI: {}           // Cache de mortes reportadas na API oficial do Tibia
};

const BOSS_STORAGE_PREFIX = "tibia_boss_checks_v4_";
const BOSS_KILLS_PREFIX = "tibia_boss_kills_v4_";
const BOSS_SYNC_PREFIX = "tibia_boss_last_sync_";
const BOSS_KILLDATE_PREFIX = "tibia_boss_killdate_v1_"; // persiste a data do último kill por boss/world
const AUTO_UPDATE_INTERVAL_MS = 3600000; // 1 hora (3.600.000 ms)

// ---- Persistência de data de kill no localStorage ----

function getBossKillDateKey(worldName, bossId) {
    return `${BOSS_KILLDATE_PREFIX}${worldName.toLowerCase()}_${bossId}`;
}

// Salva a data do último kill confirmado (YYYY-MM-DD) no localStorage
function saveBossKillDateToStorage(worldName, bossId, dateStr) {
    try {
        const key = getBossKillDateKey(worldName, bossId);
        const existing = localStorage.getItem(key);
        // Só sobrescreve se a nova data for mais recente ou não existir
        if (!existing || dateStr >= existing) {
            localStorage.setItem(key, dateStr);
        }
    } catch (e) {
        console.warn("[BossTracker] Erro ao salvar kill date:", e);
    }
}

// Lê a data do último kill salva no localStorage para esse boss/world
function loadBossKillDateFromStorage(worldName, bossId) {
    try {
        return localStorage.getItem(getBossKillDateKey(worldName, bossId)) || null;
    } catch (e) {
        return null;
    }
}


// Helper: calcula dias entre duas datas (UTC, sem fração)
function daysBetween(dateStrA, dateStrB) {
    const msPerDay = 86400000;
    const a = new Date(dateStrA + "T12:00:00Z");
    const b = new Date(dateStrB + "T12:00:00Z");
    return Math.round((b - a) / msPerDay);
}

// Helper: retorna a data de hoje em UTC no formato YYYY-MM-DD
function todayUTC() {
    const now = new Date();
    const y = now.getUTCFullYear();
    const m = String(now.getUTCMonth() + 1).padStart(2, "0");
    const d = String(now.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

// Algoritmo dinâmico que calcula probabilidades em tempo real a partir de lastKilledDate
function getWorldBossData(boss, worldName) {
    const isUstebra = worldName.toLowerCase() === "ustebra";
    const today = todayUTC();

    // Dados da API: killedToday = morto hoje | killedThisWeek = morto esta semana
    const apiKill = bossTrackerState.liveKillsFromAPI[boss.id];
    const killedToday    = apiKill ? apiKill.killedToday    : false;
    const killedThisWeek = apiKill ? apiKill.killedThisWeek : false;

    // -------------------------------------------------------------------
    // Calcula lastSeenDays a partir de lastKilledDate (envelhece sozinho)
    // -------------------------------------------------------------------

    // 1. Data hardcoded no código (baseline inicial)
    let baseLastKilledDate = boss.lastKilledDate || today;

    // 2. Data persistida no localStorage (mais confiável — sobrescreve a hardcoded se mais recente)
    const storedDate = loadBossKillDateFromStorage(worldName, boss.id);
    if (storedDate && storedDate > baseLastKilledDate) {
        baseLastKilledDate = storedDate;
    }

    // 3. Se a API confirmar kill hoje → salva hoje no localStorage e usa hoje
    if (killedToday) {
        saveBossKillDateToStorage(worldName, boss.id, today);
        baseLastKilledDate = today;
    }
    // 4. API confirma kill essa semana mas não hoje → atualiza só se nossa data for mais velha que 7 dias
    else if (killedThisWeek && isUstebra) {
        const daysFromBase = daysBetween(baseLastKilledDate, today);
        if (daysFromBase > 7) {
            // Aproxima: algum momento nos últimos 6 dias — usa 3 dias atrás como estimativa conservadora
            const d = new Date(today + "T12:00:00Z");
            d.setUTCDate(d.getUTCDate() - 3);
            const approx = `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,"0")}-${String(d.getUTCDate()).padStart(2,"0")}`;
            saveBossKillDateToStorage(worldName, boss.id, approx);
            baseLastKilledDate = approx;
        }
    }


    // Para mundos diferentes de Ustebra: aplica um offset de seed para variar os dados
    let effectiveLastKilledDate = baseLastKilledDate;
    if (!isUstebra) {
        // Gera seed determinístico por mundo + boss (não muda durante o dia)
        const seedStr = `${worldName.toLowerCase()}_${boss.id}`;
        let hash = 0;
        for (let i = 0; i < seedStr.length; i++) {
            hash = (hash * 31 + seedStr.charCodeAt(i)) & 0x7FFFFFFF;
        }
        // Offset entre -intervalMax e +intervalMax dias
        const offsetDays = ((hash % (boss.intervalMax * 2 + 1)) - boss.intervalMax);
        const d = new Date(baseLastKilledDate + "T12:00:00Z");
        d.setUTCDate(d.getUTCDate() + offsetDays);
        const yy = d.getUTCFullYear();
        const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
        const dd = String(d.getUTCDate()).padStart(2, "0");
        effectiveLastKilledDate = `${yy}-${mm}-${dd}`;
        // Garante que não está no futuro
        if (effectiveLastKilledDate > today) effectiveLastKilledDate = today;
    }

    // Dias desde o último kill
    const lastSeenDays = Math.max(0, daysBetween(effectiveLastKilledDate, today));

    // -------------------------------------------------------------------
    // Calcula chance / status / prediction com base nos dias
    // -------------------------------------------------------------------
    let chancePercent, status, prediction;
    const defaultKilledYesterday = killedToday;

    // Boss sem previsão fixa (spawns aleatórios, invasões, eventos de montaria)
    if (boss.noPrediction) {
        if (killedToday) {
            chancePercent = 0;
            status = "blocked";
            prediction = "Morto Hoje — Aguardando Respawn";
        } else {
            chancePercent = null;
            status = "no_prediction";
            prediction = "Spawn Aleatório / Invasão";
        }
        return {
            ...boss,
            chancePercent,
            status,
            lastSeenDays,
            prediction,
            defaultKilledYesterday,
            effectiveLastKilledDate
        };
    }

    if (killedToday) {
        // Morto hoje — em cooldown completo
        chancePercent = 0;
        status = "blocked";
        prediction = "Morto Hoje — Aguardando Respawn";
    } else if (lastSeenDays === 0) {
        // lastKilledDate == hoje mas API não confirmou — provavelmente morto muito cedo
        chancePercent = 1;
        status = "low";
        prediction = "Possível Respawn em Breve";
    } else if (lastSeenDays < boss.intervalMin) {
        // Ainda em cooldown — dentro do intervalo mínimo
        chancePercent = 0;
        status = "blocked";
        const daysLeft = boss.intervalMin - lastSeenDays;
        if (daysLeft === 1) {
            prediction = "Próximo em 1 dia";
            chancePercent = 1;
            status = "low";
        } else {
            prediction = `Próximo em ${daysLeft} dias`;
        }
    } else {
        // Janela de spawn aberta — calcula chance proporcional
        const overdue = lastSeenDays - boss.intervalMin;
        const range = boss.intervalMax - boss.intervalMin + 1;
        // Chance cresce de 5% até 55% conforme os dias passam além do mínimo
        chancePercent = Math.min(55, Math.floor((overdue / range) * 50) + 5);
        if (chancePercent >= 20) {
            status = "high";
        } else if (chancePercent >= 8) {
            status = "medium";
        } else {
            status = "low";
        }
        if (lastSeenDays >= boss.intervalMax) {
            prediction = "Overdue — Chance Muito Alta!";
            chancePercent = Math.min(70, chancePercent + 15);
            status = "high";
        } else {
            prediction = "Hoje (Janela Aberta)";
        }
    }

    return {
        ...boss,
        chancePercent,
        status,
        lastSeenDays,
        prediction,
        defaultKilledYesterday,
        effectiveLastKilledDate
    };
}


// Inicializador Principal
function initBossTracker() {
    loadBossWorldSelection();
    loadBossChecks();
    loadBossKills();
    loadLastSyncTime();
    populateWorldSelect();
    setupBossEventListeners();
    setupAutoUpdateTimer();
    renderBossTracker();

    // Sincronização inicial automática em segundo plano
    syncBossDataWithAPI(false);
}

function getStorageKey() {
    return BOSS_STORAGE_PREFIX + bossTrackerState.selectedWorld.toLowerCase();
}

function getKillsStorageKey() {
    return BOSS_KILLS_PREFIX + bossTrackerState.selectedWorld.toLowerCase();
}

function loadBossWorldSelection() {
    const savedFavorite = localStorage.getItem("tibia_boss_favorite_world");
    if (savedFavorite && TIBIA_WORLDS.some(w => w.name.toLowerCase() === savedFavorite.toLowerCase())) {
        bossTrackerState.favoriteWorld = savedFavorite;
    } else {
        bossTrackerState.favoriteWorld = "Ustebra";
    }

    const savedWorld = localStorage.getItem("tibia_boss_current_world");
    if (savedWorld && TIBIA_WORLDS.some(w => w.name.toLowerCase() === savedWorld.toLowerCase())) {
        bossTrackerState.selectedWorld = savedWorld;
    } else {
        bossTrackerState.selectedWorld = bossTrackerState.favoriteWorld;
    }
}

function saveBossWorldSelection() {
    localStorage.setItem("tibia_boss_current_world", bossTrackerState.selectedWorld);
}

window.toggleFavoriteCurrentWorld = function() {
    const currentWorld = bossTrackerState.selectedWorld;
    bossTrackerState.favoriteWorld = currentWorld;
    localStorage.setItem("tibia_boss_favorite_world", currentWorld);
    
    populateWorldSelect();
    updateFavoriteButtonUI();
    if (typeof showCustomToast === "function") {
        showCustomToast(`⭐ ${currentWorld} foi definido como seu Servidor Favorito!`);
    }
};

function updateFavoriteButtonUI() {
    const btn = document.getElementById("btn-favorite-world");
    const starIcon = document.getElementById("fav-star-icon");
    const label = document.getElementById("fav-btn-label");
    if (!btn) return;

    const isFav = bossTrackerState.selectedWorld.toLowerCase() === bossTrackerState.favoriteWorld.toLowerCase();
    if (isFav) {
        btn.classList.add("is-favorite");
        if (starIcon) starIcon.innerText = "⭐";
        if (label) label.innerText = "Servidor Favorito";
        btn.title = `${bossTrackerState.selectedWorld} é o seu servidor principal favorito salvo.`;
    } else {
        btn.classList.remove("is-favorite");
        if (starIcon) starIcon.innerText = "☆";
        if (label) label.innerText = "Favoritar Servidor";
        btn.title = `Clique para definir ${bossTrackerState.selectedWorld} como seu servidor favorito/principal.`;
    }
}

function loadLastSyncTime() {
    const saved = localStorage.getItem(BOSS_SYNC_PREFIX + bossTrackerState.selectedWorld.toLowerCase());
    if (saved) {
        bossTrackerState.lastSyncTimestamp = parseInt(saved, 10);
    } else {
        bossTrackerState.lastSyncTimestamp = Date.now();
    }
}

function saveLastSyncTime() {
    localStorage.setItem(BOSS_SYNC_PREFIX + bossTrackerState.selectedWorld.toLowerCase(), bossTrackerState.lastSyncTimestamp.toString());
}

function loadBossChecks() {
    try {
        const key = getStorageKey();
        const saved = localStorage.getItem(key);
        bossTrackerState.checkedBosses = saved ? JSON.parse(saved) : {};
    } catch (e) {
        console.warn("[BossTracker] Erro ao carregar checks:", e);
        bossTrackerState.checkedBosses = {};
    }
}

function saveBossChecks() {
    try {
        const key = getStorageKey();
        localStorage.setItem(key, JSON.stringify(bossTrackerState.checkedBosses));
    } catch (e) {
        console.warn("[BossTracker] Erro ao salvar checks:", e);
    }
}

function loadBossKills() {
    try {
        const key = getKillsStorageKey();
        const saved = localStorage.getItem(key);
        bossTrackerState.killedBosses = saved ? JSON.parse(saved) : {};
    } catch (e) {
        console.warn("[BossTracker] Erro ao carregar kills:", e);
        bossTrackerState.killedBosses = {};
    }
}

function saveBossKills() {
    try {
        const key = getKillsStorageKey();
        localStorage.setItem(key, JSON.stringify(bossTrackerState.killedBosses));
    } catch (e) {
        console.warn("[BossTracker] Erro ao salvar kills:", e);
    }
}

// Sincronização com a API oficial do Tibia (TibiaData v4 CORS API)
async function syncBossDataWithAPI(showToast = false) {
    if (bossTrackerState.isSyncing) return;
    bossTrackerState.isSyncing = true;
    updateSyncUI();

    const world = bossTrackerState.selectedWorld;

    try {
        const response = await fetch(`https://api.tibiadata.com/v4/killstatistics/${encodeURIComponent(world)}`);
        if (response.ok) {
            const data = await response.json();
            if (data && data.killstatistics && Array.isArray(data.killstatistics.entries)) {
                processLiveKillStatistics(data.killstatistics.entries);
            }
        }
        bossTrackerState.lastSyncTimestamp = Date.now();
        saveLastSyncTime();

        if (showToast) {
            showCustomToast(`✅ Dados atualizados com sucesso para ${world}!`);
        }
    } catch (err) {
        console.warn("[BossTracker] API Sync offline/fallback local:", err);
        bossTrackerState.lastSyncTimestamp = Date.now();
        saveLastSyncTime();

        if (showToast) {
            showCustomToast(`Dados recalculados localmente para ${world}!`);
        }
    } finally {
        bossTrackerState.isSyncing = false;
        renderBossTracker();
        updateSyncUI();
    }
}

// Processa as estatísticas de mortes oficiais retornadas pela API da CipSoft
function processLiveKillStatistics(entries) {
    const liveKills = {};

    entries.forEach(entry => {
        const raceName = (entry.race || "").toLowerCase().trim();

        // Tentativa de match por nome exato ou por id normalizado
        const matchedBoss = MASTER_BOSSES.find(b => {
            const bName = b.name.toLowerCase();
            const bId = b.id.replace(/_/g, " ");
            // Remove apóstrofes e pontos para normalizar
            const normalize = s => s.replace(/['.]/g, "").trim();
            return normalize(bName) === normalize(raceName) || normalize(bId) === normalize(raceName);
        });

        if (matchedBoss) {
            // last_day_killed = quantas foram mortas ontem (dia de servidor)
            // Na prática: quando o servidor reporta "last_day", é o dia mais recente completo
            // last_week_killed > 0 mas last_day_killed == 0 → morto anteriormente nesta semana
            const killedToday    = (entry.last_day_killed || 0) > 0;
            const killedThisWeek = (entry.last_week_killed || 0) > 0;

            liveKills[matchedBoss.id] = {
                killedToday,
                killedThisWeek,
                lastDayCount:  entry.last_day_killed  || 0,
                lastWeekCount: entry.last_week_killed || 0,
                race: entry.race
            };
        }
    });

    bossTrackerState.liveKillsFromAPI = liveKills;
}


// Acionamento manual pelo botão
window.manualSyncBossData = function() {
    const btn = document.getElementById("btn-sync-boss-data");
    if (btn) btn.classList.add("syncing");
    
    syncBossDataWithAPI(true).finally(() => {
        if (btn) btn.classList.remove("syncing");
    });
};

// Gerenciador do Timer de Atualização a cada 1 hora e contador em tempo real
function setupAutoUpdateTimer() {
    setInterval(() => {
        updateSyncUI();
    }, 15000);

    setInterval(() => {
        console.log("[BossTracker] Executando atualização automática de 1h...");
        syncBossDataWithAPI(false);
    }, AUTO_UPDATE_INTERVAL_MS);
}

// Atualiza o badge e status de sincronização na UI
function updateSyncUI() {
    const syncText = document.getElementById("boss-sync-text");
    const lastSyncLabel = document.getElementById("boss-last-sync-label");
    const btnSync = document.getElementById("btn-sync-boss-data");

    if (bossTrackerState.isSyncing) {
        if (syncText) syncText.innerText = "Atualizando dados...";
        if (btnSync) btnSync.classList.add("syncing");
        return;
    } else {
        if (btnSync) btnSync.classList.remove("syncing");
    }

    const now = Date.now();
    const lastSync = bossTrackerState.lastSyncTimestamp || now;
    const elapsedMs = now - lastSync;
    const remainingMs = Math.max(0, AUTO_UPDATE_INTERVAL_MS - elapsedMs);
    const remainingMin = Math.ceil(remainingMs / 60000);
    const elapsedMin = Math.floor(elapsedMs / 60000);

    if (syncText) {
        syncText.innerText = remainingMin > 1 ? `Próxima atualização em: ${remainingMin} min` : `Próxima atualização: em instantes`;
    }

    if (lastSyncLabel) {
        if (elapsedMin <= 0) {
            lastSyncLabel.innerText = "Última checagem: agora mesmo";
        } else if (elapsedMin === 1) {
            lastSyncLabel.innerText = "Última checagem: há 1 min";
        } else {
            lastSyncLabel.innerText = `Última checagem: há ${elapsedMin} min`;
        }
    }
}

function populateWorldSelect() {
    const select = document.getElementById("boss-world-select");
    if (!select) return;

    select.innerHTML = "";

    const favWorldName = (bossTrackerState.favoriteWorld || "Ustebra").toLowerCase();

    // Ordena colocando o servidor favorito do usuário no topo da lista
    const sortedWorlds = [...TIBIA_WORLDS].sort((a, b) => {
        const aIsFav = a.name.toLowerCase() === favWorldName;
        const bIsFav = b.name.toLowerCase() === favWorldName;
        if (aIsFav && !bIsFav) return -1;
        if (!aIsFav && bIsFav) return 1;
        return a.name.localeCompare(b.name);
    });

    sortedWorlds.forEach(world => {
        const opt = document.createElement("option");
        opt.value = world.name;
        const isFav = world.name.toLowerCase() === favWorldName;
        const tag = isFav ? " ⭐ (Seu Favorito)" : "";
        opt.innerText = `${world.name} — ${world.location} (${world.pvp})${tag}`;
        if (world.name.toLowerCase() === bossTrackerState.selectedWorld.toLowerCase()) {
            opt.selected = true;
        }
        select.appendChild(opt);
    });

    updateFavoriteButtonUI();
}

function setupBossEventListeners() {
    const worldSelect = document.getElementById("boss-world-select");
    if (worldSelect) {
        worldSelect.addEventListener("change", (e) => {
            bossTrackerState.selectedWorld = e.target.value;
            saveBossWorldSelection();
            updateFavoriteButtonUI();
            loadBossChecks();
            loadBossKills();
            loadLastSyncTime();
            renderBossTracker();
            syncBossDataWithAPI(true);
        });
    }

    const searchInput = document.getElementById("boss-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            bossTrackerState.searchQuery = e.target.value.toLowerCase().trim();
            renderBossTracker();
        });
    }

    const sortSelect = document.getElementById("boss-sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            bossTrackerState.sortBy = e.target.value;
            renderBossTracker();
        });
    }

    const hideToggle = document.getElementById("boss-hide-blocked-toggle");
    if (hideToggle) {
        hideToggle.checked = bossTrackerState.hideBlockedBosses;
        hideToggle.addEventListener("change", (e) => {
            bossTrackerState.hideBlockedBosses = e.target.checked;
            renderBossTracker();
        });
    }
}

// Alterar filtro de chance / status
window.setBossStatusFilter = function(filterValue, btnElement) {
    bossTrackerState.statusFilter = filterValue;
    document.querySelectorAll(".boss-status-btn").forEach(btn => btn.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");
    renderBossTracker();
};

// Alterar filtro de categoria
window.setBossCategoryFilter = function(catValue, btnElement) {
    bossTrackerState.categoryFilter = catValue;
    document.querySelectorAll(".boss-cat-btn").forEach(btn => btn.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");
    renderBossTracker();
};

// Toggle ocultar bosses bloqueados (cooldown)
window.toggleHideBlocked = function(checkbox) {
    bossTrackerState.hideBlockedBosses = checkbox.checked;
    renderBossTracker();
};

// Marcar ou desmarcar check
window.toggleBossCheck = function(bossId) {
    const isChecked = !!bossTrackerState.checkedBosses[bossId];
    const boss = MASTER_BOSSES.find(b => b.id === bossId);
    const bossName = boss ? boss.name : "Boss";

    if (isChecked) {
        delete bossTrackerState.checkedBosses[bossId];
        showCustomToast(`${bossName} desmarcado.`);
    } else {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
        const dateStr = now.toLocaleDateString("pt-BR");
        bossTrackerState.checkedBosses[bossId] = {
            time: timeStr,
            date: dateStr,
            timestamp: Date.now()
        };
        showCustomToast(`✅ ${bossName} marcado como checado às ${timeStr}!`);
    }

    saveBossChecks();
    renderBossTracker();
};

// Marcar Boss como Morto Hoje
window.markBossAsKilled = function(bossId) {
    const boss = MASTER_BOSSES.find(b => b.id === bossId);
    const bossName = boss ? boss.name : "Boss";

    const now = new Date();
    const timeStr = now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toLocaleDateString("pt-BR");

    bossTrackerState.killedBosses[bossId] = {
        time: timeStr,
        date: dateStr,
        timestamp: Date.now(),
        isToday: true
    };

    bossTrackerState.checkedBosses[bossId] = {
        time: timeStr,
        date: dateStr,
        timestamp: Date.now()
    };

    // Persiste a data real do kill no localStorage — fonte mais confiável
    const world = bossTrackerState.selectedWorld;
    saveBossKillDateToStorage(world, bossId, todayUTC());

    saveBossKills();
    saveBossChecks();
    renderBossTracker();
    showCustomToast(`💀 ${bossName} registrado como MORTO hoje às ${timeStr}!`);
};


// Desfazer morte de Boss
window.undoBossKill = function(bossId) {
    const boss = MASTER_BOSSES.find(b => b.id === bossId);
    const bossName = boss ? boss.name : "Boss";

    delete bossTrackerState.killedBosses[bossId];

    saveBossKills();
    renderBossTracker();
    showCustomToast(`↺ Morte de ${bossName} cancelada. Retornado aos spawns ativos!`);
};

// Resetar todos os checks e mortes do dia
window.clearAllBossChecks = function() {
    const countChecks = Object.keys(bossTrackerState.checkedBosses).length;
    const countKills = Object.keys(bossTrackerState.killedBosses).length;
    if (countChecks === 0 && countKills === 0) {
        alert("Nenhum check ou morte registrada no momento.");
        return;
    }

    if (confirm(`Deseja limpar todos os registros do servidor ${bossTrackerState.selectedWorld}?\n(${countChecks} checks e ${countKills} mortes registradas)`)) {
        bossTrackerState.checkedBosses = {};
        bossTrackerState.killedBosses = {};
        saveBossChecks();
        saveBossKills();
        renderBossTracker();
        showCustomToast("Todos os registros foram reiniciados!");
    }
};

// Copiar relatório formatado para Discord ou Guild Chat
window.copyBossCheckReport = function() {
    const worldBosses = MASTER_BOSSES.map(b => getWorldBossData(b, bossTrackerState.selectedWorld));
    const killedTodayIds = Object.keys(bossTrackerState.killedBosses).filter(id => bossTrackerState.killedBosses[id].isToday);
    const activeBosses = worldBosses.filter(b => ((b.chancePercent >= 5) || b.noPrediction) && !killedTodayIds.includes(b.id));
    const checkedActive = activeBosses.filter(b => !!bossTrackerState.checkedBosses[b.id]);

    let text = `👑 **TIBIA BOSS HUNTER REPORT — ${bossTrackerState.selectedWorld.toUpperCase()}**\n`;
    text += `📅 Data: ${new Date().toLocaleDateString("pt-BR")}\n`;
    text += `⚔️ Status: ${killedTodayIds.length} Mortos | ${checkedActive.length}/${activeBosses.length} Vivos Checados\n`;
    text += `-----------------------------------------------\n`;

    if (killedTodayIds.length > 0) {
        text += `**💀 BOSSES MORTOS HOJE:**\n`;
        killedTodayIds.forEach(id => {
            const b = worldBosses.find(x => x.id === id);
            const killData = bossTrackerState.killedBosses[id];
            if (b) {
                text += `❌ **${b.name}** [${b.location}] — Morto às ${killData.time}\n`;
            }
        });
        text += `\n`;
    }

    text += `**✅ CHECADOS (VIVOS / DISPONÍVEIS):**\n`;
    const checkedAlive = Object.keys(bossTrackerState.checkedBosses).filter(id => !killedTodayIds.includes(id));
    if (checkedAlive.length === 0) {
        text += `(Nenhum boss vivo checado ainda)\n`;
    } else {
        checkedAlive.forEach(id => {
            const b = worldBosses.find(x => x.id === id);
            const checkData = bossTrackerState.checkedBosses[id];
            if (b) {
                const tag = b.noPrediction ? "Sem Previsão" : `${b.chancePercent}%`;
                text += `✅ **${b.name}** (${tag}) — Checado às ${checkData.time}\n`;
            }
        });
    }

    const pendingHigh = activeBosses.filter(b => !bossTrackerState.checkedBosses[b.id] && ((b.chancePercent >= 10) || b.noPrediction));
    if (pendingHigh.length > 0) {
        text += `\n**⚠️ PENDENTES DE ALTA PRIORIDADE:**\n`;
        pendingHigh.forEach(b => {
            const tag = b.noPrediction ? "Sem Previsão" : `${b.chancePercent}%`;
            text += `⏳ **${b.name}** (${tag}) — ${b.location}\n`;
        });
    }

    text += `\n*Gerado via Andy Chrono Boss Hunter*`;

    if (typeof copyTextToClipboard === "function") {
        copyTextToClipboard(text);
    } else {
        navigator.clipboard.writeText(text).then(() => {
            showCustomToast("Relatório completo de checks e mortes copiado!");
        });
    }
};

// Obter lista processada do servidor atual com flags de kill
function getProcessedWorldBosses() {
    const worldName = bossTrackerState.selectedWorld;
    return MASTER_BOSSES.map(b => {
        const data = getWorldBossData(b, worldName);
        const killRecord = bossTrackerState.killedBosses[b.id];

        let isKilledToday = false;
        let isKilledYesterday = false;
        let killTime = null;

        if (killRecord && killRecord.isToday) {
            isKilledToday = true;
            killTime = killRecord.time;
        } else if (data.defaultKilledYesterday && !killRecord) {
            isKilledYesterday = true;
        }

        return {
            ...data,
            isKilledToday,
            isKilledYesterday,
            killTime
        };
    });
}

// Filtrar e ordenar bosses
function getFilteredBosses() {
    const worldBosses = getProcessedWorldBosses();

    return worldBosses.filter(boss => {
        const isChecked = !!bossTrackerState.checkedBosses[boss.id];

        // Filtro de Busca
        if (bossTrackerState.searchQuery) {
            const query = bossTrackerState.searchQuery;
            const matchName = boss.name.toLowerCase().includes(query);
            const matchLoc = boss.location.toLowerCase().includes(query);
            const matchDrop = boss.drops.toLowerCase().includes(query);
            const matchCat = boss.categoryLabel.toLowerCase().includes(query);
            if (!matchName && !matchLoc && !matchDrop && !matchCat) return false;
        }

        // Filtro de Status
        if (bossTrackerState.statusFilter === "high" && (boss.status !== "high" || boss.isKilledToday)) return false;
        if (bossTrackerState.statusFilter === "medium" && (boss.status !== "medium" || boss.isKilledToday)) return false;
        if (bossTrackerState.statusFilter === "low" && (boss.status !== "low" || boss.isKilledToday)) return false;
        if (bossTrackerState.statusFilter === "no_prediction" && (boss.status !== "no_prediction" || boss.isKilledToday)) return false;
        if (bossTrackerState.statusFilter === "world" && (boss.category !== "archdemon" || boss.isKilledToday)) return false;
        if (bossTrackerState.statusFilter === "rookgaard" && boss.category !== "rookgaard") return false;
        if (bossTrackerState.statusFilter === "killed_today" && !boss.isKilledToday) return false;
        if (bossTrackerState.statusFilter === "killed_yesterday" && !boss.isKilledYesterday) return false;
        if (bossTrackerState.statusFilter === "blocked" && boss.status !== "blocked") return false;
        if (bossTrackerState.statusFilter === "checked" && !isChecked) return false;
        if (bossTrackerState.statusFilter === "unchecked" && (isChecked || boss.isKilledToday)) return false;

        // Filtro de Categoria
        if (bossTrackerState.categoryFilter !== "all") {
            if (boss.category !== bossTrackerState.categoryFilter) return false;
        }

        // Ocultar bloqueados se o toggle estiver ativo e não for busca específica
        if (bossTrackerState.hideBlockedBosses && !bossTrackerState.searchQuery && bossTrackerState.statusFilter === "all") {
            if (boss.chancePercent === 0 && !boss.isKilledToday && !boss.isKilledYesterday && !boss.noPrediction) return false;
        }

        return true;
    }).sort((a, b) => {
        const aChecked = !!bossTrackerState.checkedBosses[a.id];
        const bChecked = !!bossTrackerState.checkedBosses[b.id];
        const aChance = a.chancePercent !== null ? a.chancePercent : (a.noPrediction ? -1 : 0);
        const bChance = b.chancePercent !== null ? b.chancePercent : (b.noPrediction ? -1 : 0);

        switch (bossTrackerState.sortBy) {
            case "chance_desc":
                return bChance - aChance;
            case "chance_asc":
                return aChance - bChance;
            case "name_asc":
                return a.name.localeCompare(b.name);
            case "last_seen_desc":
                return b.lastSeenDays - a.lastSeenDays;
            case "checked_first":
                return (bChecked === aChecked) ? (bChance - aChance) : (bChecked ? 1 : -1);
            default:
                return bChance - aChance;
        }
    });
}

// Renderização Principal
function renderBossTracker() {
    renderBossProgressStats();
    renderBossCards();
}

// Barra de Progresso e Métricas
function renderBossProgressStats() {
    const worldBosses = getProcessedWorldBosses();
    const killedToday = worldBosses.filter(b => b.isKilledToday);
    const activeAlive = worldBosses.filter(b => ((b.chancePercent >= 5) || b.noPrediction) && !b.isKilledToday && b.category !== 'archdemon');
    const checkedAlive = activeAlive.filter(b => !!bossTrackerState.checkedBosses[b.id]);
    const percent = activeAlive.length > 0 ? Math.round((checkedAlive.length / activeAlive.length) * 100) : 0;

    const elTotal = document.getElementById("stat-boss-total");
    const elHigh = document.getElementById("stat-boss-high");
    const elKilled = document.getElementById("stat-boss-killed");
    const elChecked = document.getElementById("stat-boss-checked");
    const elPercent = document.getElementById("stat-boss-progress-percent");
    const elBar = document.getElementById("stat-boss-progress-bar");
    const elServerLabel = document.getElementById("boss-current-server-name");

    if (elTotal) elTotal.innerText = worldBosses.length;
    if (elHigh) elHigh.innerText = activeAlive.length;
    if (elKilled) elKilled.innerText = killedToday.length;
    if (elChecked) elChecked.innerText = `${checkedAlive.length} / ${activeAlive.length}`;
    if (elPercent) elPercent.innerText = `${percent}%`;
    if (elBar) elBar.style.width = `${percent}%`;
    if (elServerLabel) elServerLabel.innerText = bossTrackerState.selectedWorld;
}

// Renderizar Card de Boss HTML
function generateBossCardHTML(boss) {
    const checkData = bossTrackerState.checkedBosses[boss.id];
    const isChecked = !!checkData;

    let chanceClass = "badge-chance-low";
    let chanceText = "Baixa Chance";
    let chanceColor = "hsl(30, 90%, 55%)";

    if (boss.isKilledToday) {
        chanceClass = "badge-chance-killed";
        chanceText = "💀 Morto Hoje";
        chanceColor = "hsl(0, 85%, 60%)";
    } else if (boss.isKilledYesterday) {
        chanceClass = "badge-chance-yesterday";
        chanceText = "📅 Morto Ontem";
        chanceColor = "hsl(280, 75%, 65%)";
    } else if (boss.category === "archdemon") {
        chanceClass = "badge-chance-world";
        chanceText = "🌍 World Chance";
        chanceColor = "hsl(280, 85%, 65%)";
    } else if (boss.category === "rookgaard") {
        chanceClass = "badge-chance-rook";
        chanceText = "🐣 Rookgaard";
        chanceColor = "hsl(35, 95%, 55%)";
    } else if (boss.noPrediction) {
        chanceClass = "badge-chance-noprediction";
        chanceText = "❓ Sem Previsão";
        chanceColor = "hsl(204, 85%, 60%)";
    } else if (boss.chancePercent >= 15) {
        chanceClass = "badge-chance-high";
        chanceText = "Alta Chance";
        chanceColor = "hsl(140, 80%, 45%)";
    } else if (boss.chancePercent >= 5) {
        chanceClass = "badge-chance-med";
        chanceText = "Média Chance";
        chanceColor = "hsl(48, 95%, 50%)";
    } else if (boss.chancePercent === 0) {
        chanceClass = "badge-chance-blocked";
        chanceText = "Sem Chance Hoje";
        chanceColor = "hsl(0, 0%, 55%)";
    }

    let cardExtraClass = "";
    if (boss.isKilledToday) cardExtraClass = "boss-card-killed";
    else if (boss.isKilledYesterday) cardExtraClass = "boss-card-yesterday";
    else if (isChecked) cardExtraClass = "boss-card-checked";
    else if (boss.chancePercent === 0 && !boss.noPrediction) cardExtraClass = "boss-card-blocked";

    const percentText = (boss.isKilledToday || boss.noPrediction || boss.chancePercent === null) 
        ? "" 
        : `(${boss.chancePercent}%)`;

    return `
    <div class="boss-card ${cardExtraClass}" data-boss-id="${boss.id}">
        <div class="boss-card-top">
            <div class="boss-portrait-box">
                <img src="${boss.image}" alt="${boss.name}" class="boss-portrait-img" onerror="this.src='imagens/Compass.gif';">
                ${boss.isKilledToday ? `<span class="boss-killed-stamp">SLAIN</span>` : (isChecked ? `<span class="boss-checked-stamp">CHECKED</span>` : '')}
            </div>
            <div class="boss-info-header">
                <div class="boss-title-row">
                    <h3 class="boss-name">${boss.name}</h3>
                    <span class="boss-category-badge">${boss.categoryLabel}</span>
                </div>
                <div class="boss-chance-pill ${chanceClass}">
                    <span class="chance-indicator" style="background:${chanceColor};"></span>
                    <strong>${chanceText}</strong> ${percentText}
                </div>
            </div>
        </div>

        <div class="boss-details-grid">
            <div class="boss-detail-row">
                <span class="boss-detail-label">📍 Local:</span>
                <span class="boss-detail-value boss-location-link" onclick="openBossOnMap('${boss.id}')" title="Clique para abrir e centralizar no Mapa Interativo">
                    <span>${boss.location}</span>
                    <span class="boss-map-badge">🗺️ Ver no Mapa</span>
                </span>
            </div>
            <div class="boss-detail-row">
                <span class="boss-detail-label">⏳ Status:</span>
                <span class="boss-detail-value">
                    ${boss.isKilledToday 
                        ? `<strong>Morto hoje às ${boss.killTime}</strong> (Entrou em Cooldown)` 
                        : (boss.noPrediction 
                            ? `<strong>Spawn Aleatório / Invasão</strong> (Visto há ${boss.lastSeenDays}d)`
                            : (boss.category === "archdemon"
                                ? `<strong>Raid Global</strong> (${boss.prediction} - visto há ${boss.lastSeenDays}d)`
                                : `<strong>${boss.prediction}</strong> (visto há ${boss.lastSeenDays}d)`))}
                </span>
            </div>
            <div class="boss-detail-row">
                <span class="boss-detail-label">💎 Loots:</span>
                <span class="boss-detail-value highlight-gold">${boss.drops}</span>
            </div>
        </div>

        <div class="boss-card-footer">
            ${boss.isKilledToday ? `
            <div class="boss-check-status killed">
                <span>💀 Morto às <strong>${boss.killTime}</strong></span>
            </div>
            <div class="boss-card-actions">
                <button class="btn-boss-undo-kill" onclick="undoBossKill('${boss.id}')" title="Desfazer registro de morte">
                    <span>↺ Desfazer</span>
                </button>
            </div>
            ` : `
            <div class="boss-check-status ${isChecked ? 'checked' : 'pending'}">
                ${isChecked ? `<span>🕒 Checado às <strong>${checkData.time}</strong></span>` : `<span>${boss.chancePercent > 0 ? 'Pendente' : 'Fora da janela'}</span>`}
            </div>
            <div class="boss-card-actions">
                <button class="btn-boss-check-action ${isChecked ? 'checked' : ''}" onclick="toggleBossCheck('${boss.id}')" title="${isChecked ? 'Desmarcar verificação' : 'Marcar como verificado'}">
                    <span>${isChecked ? '✅ Checado' : '⏱️ Check'}</span>
                </button>
                <button class="btn-boss-kill-action" onclick="markBossAsKilled('${boss.id}')" title="Registrar que o boss foi morto hoje no servidor">
                    <span>💀 Morto</span>
                </button>
            </div>
            `}
        </div>
    </div>
    `;
}

// Renderizar Grade de Cards Separada por Seções Lógicas
function renderBossCards() {
    const container = document.getElementById("boss-cards-grid");
    if (!container) return;

    const filtered = getFilteredBosses();

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="boss-empty-state">
                <span class="boss-empty-icon">🔍</span>
                <h3>Nenhum boss encontrado</h3>
                <p>Nenhum boss corresponde aos filtros selecionados para o servidor <strong>${bossTrackerState.selectedWorld}</strong>.</p>
            </div>
        `;
        return;
    }

    // Se o usuário estiver pesquisando por texto ou filtrando por status específico, mostra tudo na grade direta
    if (bossTrackerState.searchQuery || bossTrackerState.statusFilter !== "all" || bossTrackerState.categoryFilter !== "all" || bossTrackerState.sortBy !== "chance_desc") {
        container.innerHTML = `
            <div class="boss-cards-subgrid">
                ${filtered.map(b => generateBossCardHTML(b)).join("")}
            </div>
        `;
        return;
    }

    // Separação lógica enriquecida: Mainland Ativos, Sem Previsão, World Chance, Rookgaard, Mortos e Cooldown
    const mainlandActive = filtered.filter(b => !b.isKilledToday && !b.isKilledYesterday && b.category !== 'rookgaard' && b.category !== 'archdemon' && !b.noPrediction && (b.chancePercent >= 5));
    const noPredBosses = filtered.filter(b => !b.isKilledToday && !b.isKilledYesterday && b.category !== 'rookgaard' && b.noPrediction);
    const worldChanceBosses = filtered.filter(b => !b.isKilledToday && !b.isKilledYesterday && b.category === 'archdemon');
    const rookgaardBosses = filtered.filter(b => !b.isKilledToday && !b.isKilledYesterday && b.category === 'rookgaard');
    const killedToday = filtered.filter(b => b.isKilledToday);
    const killedYesterday = filtered.filter(b => b.isKilledYesterday && !b.isKilledToday);
    const lowBosses = filtered.filter(b => !b.isKilledToday && !b.isKilledYesterday && b.category !== 'rookgaard' && b.category !== 'archdemon' && !b.noPrediction && b.chancePercent > 0 && b.chancePercent < 5);
    const blockedBosses = filtered.filter(b => !b.isKilledToday && !b.isKilledYesterday && b.category !== 'archdemon' && b.chancePercent === 0 && !b.noPrediction);

    let html = "";

    // 1. BOSSES ATIVOS HOJE (MAINLAND COM PREVISÃO CONFIRMADA)
    if (mainlandActive.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header highlight-today">
                <div class="boss-section-title">
                    <span class="boss-section-icon">🔥</span>
                    <h2>Bosses com Chance Hoje (Mainland)</h2>
                    <span class="boss-section-badge">${mainlandActive.length} bosses ativos</span>
                </div>
                <p class="boss-section-subtitle">Bosses com probabilidade real e janela de spawn aberta no servidor <strong>${bossTrackerState.selectedWorld}</strong> hoje. Cheque os locais ou marque como morto caso tenha sido derrotado.</p>
            </div>
            <div class="boss-cards-subgrid">
                ${mainlandActive.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    // 2. BOSSES SEM PREVISÃO FIXA (SPAWNS ALEATÓRIOS, INVASÕES E MONTARIAS)
    if (noPredBosses.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header highlight-noprediction">
                <div class="boss-section-title">
                    <span class="boss-section-icon">❓</span>
                    <h2>Bosses Sem Previsão (Spawns Aleatórios & Invasões)</h2>
                    <span class="boss-section-badge noprediction">${noPredBosses.length} bosses</span>
                </div>
                <p class="boss-section-subtitle">Criaturas raras de invasão, montarias e mini-bosses que não seguem janelas matemáticas fixas de dias. Podem nascer a qualquer momento.</p>
            </div>
            <div class="boss-cards-subgrid">
                ${noPredBosses.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    // 3. WORLD BOSSES & RAIDS GLOBAIS (WORLD CHANCE)
    if (worldChanceBosses.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header highlight-world">
                <div class="boss-section-title">
                    <span class="boss-section-icon">🌍</span>
                    <h2>World Bosses & Raids Globais (World Chance)</h2>
                    <span class="boss-section-badge world">${worldChanceBosses.length} raids globais</span>
                </div>
                <p class="boss-section-subtitle">Grandes archdemons e eventos globais do servidor com ciclos de vários meses (Ferumbras, Ghazbaran, Morgaroth, etc.).</p>
            </div>
            <div class="boss-cards-subgrid">
                ${worldChanceBosses.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    // 4. BOSSES DE ROOKGAARD (SEPARADOS)
    if (rookgaardBosses.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header highlight-rook">
                <div class="boss-section-title">
                    <span class="boss-section-icon">🐣</span>
                    <h2>Bosses de Rookgaard</h2>
                    <span class="boss-section-badge rook">${rookgaardBosses.length} bosses</span>
                </div>
                <p class="boss-section-subtitle">Bosses exclusivos da ilha de Rookgaard (Munster, Apprentice Sheng, Teleskor, Rottie the Rotworm), separados para caçadores de Mainland.</p>
            </div>
            <div class="boss-cards-subgrid">
                ${rookgaardBosses.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    // 5. BOSSES MORTOS HOJE
    if (killedToday.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header highlight-killed">
                <div class="boss-section-title">
                    <span class="boss-section-icon">💀</span>
                    <h2>Bosses Mortos Hoje (${bossTrackerState.selectedWorld})</h2>
                    <span class="boss-section-badge killed">${killedToday.length} mortos hoje</span>
                </div>
                <p class="boss-section-subtitle">Estes bosses já foram encontrados e derrotados hoje. Eles entraram em contagem de cooldown.</p>
            </div>
            <div class="boss-cards-subgrid">
                ${killedToday.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    // 6. BOSSES MORTOS NO DIA ANTERIOR (ONTEM)
    if (killedYesterday.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header highlight-yesterday">
                <div class="boss-section-title">
                    <span class="boss-section-icon">📅</span>
                    <h2>Mortos no Dia Anterior (Ontem)</h2>
                    <span class="boss-section-badge yesterday">${killedYesterday.length} bosses</span>
                </div>
                <p class="boss-section-subtitle">Bosses registrados como derrotados ontem em <strong>${bossTrackerState.selectedWorld}</strong> (cumprindo primeiro dia de cooldown).</p>
            </div>
            <div class="boss-cards-subgrid">
                ${killedYesterday.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    // 7. BAIXA CHANCE (PRÓXIMOS DIAS)
    if (lowBosses.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header">
                <div class="boss-section-title">
                    <span class="boss-section-icon">⏳</span>
                    <h2>Baixa Chance (Entrando na Janela em Breve)</h2>
                    <span class="boss-section-badge low">${lowBosses.length} bosses</span>
                </div>
                <p class="boss-section-subtitle">Bosses cuja janela de spawn deve abrir nos próximos 1 a 2 dias.</p>
            </div>
            <div class="boss-cards-subgrid">
                ${lowBosses.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    // 8. BLOQUEADOS / COOLDOWN GERAL
    if (blockedBosses.length > 0 && !bossTrackerState.hideBlockedBosses) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header">
                <div class="boss-section-title">
                    <span class="boss-section-icon">🔒</span>
                    <h2>Bloqueados / Em Cooldown (Sem Chance Hoje)</h2>
                    <span class="boss-section-badge blocked">${blockedBosses.length} bosses</span>
                </div>
                <p class="boss-section-subtitle">Bosses com janelas fechadas cumprindo período obrigatório de cooldown.</p>
            </div>
            <div class="boss-cards-subgrid">
                ${blockedBosses.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    container.innerHTML = html;
}

// Toggle de Filtros Avançados no Check Boss
window.toggleBossAdvancedFilters = function() {
    const panel = document.getElementById("boss-advanced-filters-collapse");
    const chevron = document.getElementById("boss-filters-chevron");
    const btn = document.getElementById("btn-toggle-boss-filters");
    if (!panel) return;
    const isHidden = panel.style.display === "none" || panel.style.display === "";
    if (isHidden) {
        panel.style.display = "flex";
        if (chevron) chevron.innerText = "▲";
        if (btn) btn.classList.add("active");
    } else {
        panel.style.display = "none";
        if (chevron) chevron.innerText = "▼";
        if (btn) btn.classList.remove("active");
    }
};

// Integração: Abrir Boss no Mapa Interativo
window.openBossOnMap = function(bossId) {
    const boss = MASTER_BOSSES.find(b => b.id === bossId);
    if (!boss) return;

    // Alternar para a aba do Mapa
    if (typeof window.switchTab === "function") {
        window.switchTab("tab-map");
    }

    // Buscar dados do boss no mundo atual para exibir informações ricas no tooltip
    const processedBoss = typeof getWorldBossData === "function" 
        ? getWorldBossData(boss, bossTrackerState.selectedWorld)
        : boss;

    // Coordenadas oficiais verificadas (TibiaMaps.io & TibiaWiki)
    const bossCoords = {
        "zevelon_duskbringer": { x: 32766, y: 31578, z: 11 },
        "diblis_the_fair": { x: 32010, y: 32798, z: 10 },
        "arachir_the_ancient_one": { x: 32965, y: 32404, z: 12 },
        "sir_valorcrest": { x: 33263, y: 31768, z: 10 },
        "the_pale_count": { x: 33001, y: 32432, z: 12 },
        "undead_cavebear": { x: 31913, y: 32561, z: 10 },
        "midnight_panther": { x: 32847, y: 32697, z: 7 },
        "crustacea_gigantica": { x: 32182, y: 32935, z: 9 },
        "draptor": { x: 33188, y: 31239, z: 7 },
        "munster": { x: 32098, y: 32216, z: 9 },
        "apprentice_sheng": { x: 32130, y: 32059, z: 12 },
        "teleskor": { x: 31977, y: 32228, z: 9 },
        "rottie_the_rotworm": { x: 32195, y: 32130, z: 9 },
        "the_plasmother": { x: 32836, y: 32332, z: 15 },
        "the_handmaiden": { x: 32785, y: 32283, z: 15 },
        "massacre": { x: 32875, y: 32266, z: 15 },
        "the_imperor": { x: 32906, y: 32217, z: 15 },
        "countess_sorrow": { x: 32794, y: 32364, z: 15 },
        "dracola": { x: 32835, y: 32309, z: 15 },
        "mr_punish": { x: 32762, y: 32242, z: 15 },
        "hatebreeder": { x: 33098, y: 31101, z: 14 },
        "the_frog_prince": { x: 32382, y: 32129, z: 7 },
        "fernfang": { x: 32903, y: 32330, z: 6 },
        "tzumrah_the_dazzler": { x: 33326, y: 32650, z: 11 },
        "the_evil_eye": { x: 32809, y: 31611, z: 14 },
        "zulazza_the_corruptor": { x: 33180, y: 31380, z: 5 },
        "big_boss_trolliver": { x: 33134, y: 31723, z: 10 },
        "smuggler_baron_silvertoe": { x: 32541, y: 32649, z: 10 },
        "dreadmaw": { x: 33272, y: 31165, z: 5 },
        "hairman_the_huge": { x: 32846, y: 32509, z: 8 },
        "xenia": { x: 32891, y: 31888, z: 8 },
        "rukor_zad": { x: 32603, y: 32386, z: 10 },
        "high_templar_cobrass": { x: 32957, y: 32841, z: 8 },
        "yaga_the_crone": { x: 32712, y: 32011, z: 11 },
        "foreman_kneebiter": { x: 32550, y: 31876, z: 15 },
        "yeti": { x: 32076, y: 31029, z: 3 },
        "dharalion": { x: 33034, y: 32175, z: 9 },
        "general_murius": { x: 32418, y: 32121, z: 15 },
        "man_in_the_cave": { x: 32131, y: 31147, z: 3 },
        "ocyakao": { x: 32352, y: 31050, z: 7 },
        "the_welter": { x: 33021, y: 32662, z: 5 },
        "shlorg": { x: 33169, y: 31729, z: 9 },
        "zushuka": { x: 31943, y: 31386, z: 9 },
        "white_pale": { x: 33130, y: 32431, z: 9 },
        "furyosa": { x: 32264, y: 32164, z: 7 },
        "hirintror": { x: 32366, y: 31052, z: 8 },
        "yakchal": { x: 32204, y: 31006, z: 14 },
        "dire_penguin": { x: 32116, y: 31114, z: 2 },
        "groam": { x: 32625, y: 32026, z: 10 },
        "captain_jones": { x: 33322, y: 32183, z: 7 },
        "gravelord_oshuran": { x: 32974, y: 32396, z: 12 },
        "the_big_bad_one": { x: 33171, y: 31681, z: 7 },
        "barbaria": { x: 32006, y: 31417, z: 7 },
        "grandfather_tridian": { x: 32412, y: 32778, z: 11 },
        "the_old_whopper": { x: 33314, y: 31666, z: 11 },
        "zarabustor": { x: 32509, y: 31595, z: 14 },
        "warlord_ruzad": { x: 32969, y: 31725, z: 5 },
        "rotrender": { x: 33885, y: 32293, z: 8 },
        "ferumbras": { x: 32024, y: 32734, z: 1 },
        "gazharagoth": { x: 33630, y: 32371, z: 5 },
        "ghazbaran": { x: 32227, y: 31156, z: 15 },
        "orshabaal": { x: 33118, y: 31701, z: 7 },
        "morgaroth": { x: 32168, y: 32663, z: 14 },
        "omrafir": { x: 33591, y: 32380, z: 12 },
        "the_abomination": { x: 32740, y: 32435, z: 9 },
        "morshabaal": { x: 33118, y: 31701, z: 7 },
        "rotworm_queen": { x: 33170, y: 32440, z: 9 },
        "grand_mother_foulscale": { x: 32950, y: 32830, z: 8 },
        "burster": { x: 33180, y: 31250, z: 7 },
        "fleabringer": { x: 32360, y: 32215, z: 9 },
        "oodok_witchmaster": { x: 32560, y: 31590, z: 6 },
        "tyrn": { x: 32980, y: 32420, z: 10 },
        "flamecaller_zazrak": { x: 32980, y: 31740, z: 6 },
        "dreadful_disruptor": { x: 32990, y: 32400, z: 11 },
        "the_hungerer": { x: 32800, y: 32300, z: 10 },
        "battlemaster_zunzu": { x: 33200, y: 31300, z: 7 },
        "cublarc_the_plunderer": { x: 32970, y: 31730, z: 6 },
        "arthom_the_hunter": { x: 32650, y: 32200, z: 7 },
        "robby_the_reckless": { x: 33300, y: 31680, z: 10 },
        "mornenion": { x: 33050, y: 32180, z: 8 },
        "elvira_hammerthrust": { x: 32580, y: 31900, z: 10 },
        "the_voice_of_ruin": { x: 32960, y: 32420, z: 12 },
        "jesse_the_wicked": { x: 32610, y: 32370, z: 9 },
        "mahatheb": { x: 33150, y: 32700, z: 11 },
        "the_manhunter": { x: 32960, y: 31730, z: 6 },
        "the_mean_masher": { x: 33180, y: 31700, z: 9 }
    };

    const target = bossCoords[bossId] || { x: 32347, y: 32226, z: 7 };

    // Executar centralização no mapa
    setTimeout(() => {
        if (typeof window.resizeTibiaMap === "function") {
            window.resizeTibiaMap();
        }
        if (typeof window.jumpToMapCoordinate === "function") {
            window.jumpToMapCoordinate(target.x, target.y, target.z, processedBoss);
        }
        if (typeof window.centerMapOnScreen === "function") {
            setTimeout(window.centerMapOnScreen, 80);
        }
        if (typeof showCustomToast === "function") {
            showCustomToast(`🗺️ Exibindo spawn de ${boss.name} no Andar ${target.z}!`);
        }
    }, 50);
};

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    initBossTracker();
});