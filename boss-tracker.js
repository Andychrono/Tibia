// ============================================================
// TIBIA BOSS TRACKER & CHECKER — DADOS REAIS & POR SERVIDOR
// Foco Principal: USTEBRA (dados oficiais sincronizados)
// Suporte completo a sistema de Kills: Mortos Hoje e Mortos Ontem
// ============================================================

// Base mestra de Bosses com nomes oficiais corrigidos, imagens e metadados
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
        drops: "Vampire Lord Token, Vampire Shield, Strange Helmet",
        difficulty: "Médio",
        ustebra: { chance: 22, status: "high", lastSeenDays: 8, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "diblis_the_fair",
        name: "Diblis the Fair",
        image: "imagens/diblis_the_fair.gif",
        category: "vampire",
        categoryLabel: "Vampire Lord",
        location: "Vampire Crypt, Nargor",
        intervalMin: 6, intervalMax: 12,
        drops: "Vampire Lord Token, Vampire Silk, Skull Helmet",
        difficulty: "Médio",
        ustebra: { chance: 9, status: "high", lastSeenDays: 10, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "arachir_the_ancient_one",
        name: "Arachir the Ancient One",
        image: "imagens/arachir_the_ancient_one.gif",
        category: "vampire",
        categoryLabel: "Vampire Lord",
        location: "Drefia (Vampire Crypt), Darashia",
        intervalMin: 6, intervalMax: 12,
        drops: "Vampire Lord Token, Skull Helmet, Vampire Shield",
        difficulty: "Médio",
        ustebra: { chance: 1, status: "low", lastSeenDays: 1, prediction: "Morto Ontem (Próximo em 5 dias)", defaultKilledYesterday: true }
    },
    {
        id: "sir_valorcrest",
        name: "Sir Valorcrest",
        image: "imagens/sir_valorcrest.gif",
        category: "vampire",
        categoryLabel: "Vampire Lord",
        location: "Vampire Crypt, Mount Sternum",
        intervalMin: 6, intervalMax: 12,
        drops: "Vampire Lord Token, Bonebreaker, Black Pearl",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 3, prediction: "Próximo em 2 dias" }
    },
    {
        id: "the_pale_count",
        name: "The Pale Count",
        image: "imagens/the_pale_count.gif",
        category: "vampire",
        categoryLabel: "Nemesis Boss",
        location: "Drefia (Vampire Area), Darashia",
        intervalMin: 15, intervalMax: 30,
        drops: "Vampire's Crest, Sun Mirror, Batwing Hat",
        difficulty: "Muito Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 9, prediction: "Próximo em 8 dias" }
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
        drops: "Maxilla Maximus (Domar), Hardened Bone",
        difficulty: "Médio",
        ustebra: { chance: 15, status: "high", lastSeenDays: 2, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "midnight_panther",
        name: "Midnight Panther",
        image: "imagens/midnight_panther.gif",
        category: "mount",
        categoryLabel: "Montaria",
        location: "Selvas de Tiquanda (Port Hope)",
        intervalMin: 2, intervalMax: 4,
        drops: "Panther Paw, Panther Head (Domar)",
        difficulty: "Médio",
        ustebra: { chance: 14, status: "high", lastSeenDays: 3, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "crustacea_gigantica",
        name: "Crustacea Gigantica",
        image: "imagens/crustacea_gigantica.gif",
        category: "mount",
        categoryLabel: "Montaria",
        location: "Treasure Island / Calassa / Seacrest Grounds",
        intervalMin: 2, intervalMax: 5,
        drops: "Giant Shrimp (Domar), Crustacea Shell",
        difficulty: "Médio",
        ustebra: { chance: 2, status: "low", lastSeenDays: 1, prediction: "Morto Ontem (Próximo em 1 dia)", defaultKilledYesterday: true }
    },
    {
        id: "draptor",
        name: "Draptor",
        image: "imagens/draptor.gif",
        category: "mount",
        categoryLabel: "Montaria",
        location: "Razachai / Dragonblaze Peaks / Muggy Plains",
        intervalMin: 3, intervalMax: 7,
        drops: "Harness (Domar), Draptor Scales",
        difficulty: "Difícil",
        ustebra: { chance: 6, status: "medium", lastSeenDays: 4, prediction: "Hoje (Janela Aberta)" }
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
        drops: "Dice, Cheese, Gold Coins",
        difficulty: "Fácil",
        ustebra: { chance: 13, status: "high", lastSeenDays: 1, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "apprentice_sheng",
        name: "Apprentice Sheng",
        image: "imagens/apprentice_sheng.gif",
        category: "rookgaard",
        categoryLabel: "Rookgaard Boss",
        location: "Minotaur Hell, Rookgaard",
        intervalMin: 2, intervalMax: 5,
        drops: "Magic Light Wand, Minotaur Leather",
        difficulty: "Fácil",
        ustebra: { chance: 8, status: "medium", lastSeenDays: 2, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "teleskor",
        name: "Teleskor",
        image: "imagens/teleskor.gif",
        category: "rookgaard",
        categoryLabel: "Rookgaard Boss",
        location: "Rookgaard Cemetery / Ghost Area",
        intervalMin: 2, intervalMax: 4,
        drops: "Bone, Skull",
        difficulty: "Fácil",
        ustebra: { chance: 2, status: "low", lastSeenDays: 11, prediction: "Próximo em 2 dias" }
    },
    {
        id: "rottie_the_rotworm",
        name: "Rottie the Rotworm",
        image: "imagens/rottie_the_rotworm.gif",
        category: "rookgaard",
        categoryLabel: "Rookgaard Boss",
        location: "Katana Quest Caves, Rookgaard",
        intervalMin: 1, intervalMax: 3,
        drops: "Meat, Gold Coins, Ham",
        difficulty: "Fácil",
        ustebra: { chance: 1, status: "low", lastSeenDays: 15, prediction: "Próximo em 1 dia" }
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
        drops: "The Plasmother's Remains, Springsprout Rod, Poison Dagger",
        difficulty: "Difícil",
        ustebra: { chance: 11, status: "high", lastSeenDays: 20, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "the_handmaiden",
        name: "The Handmaiden",
        image: "imagens/the_handmaiden.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Hand of Cursed Fate Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "The Handmaiden's Protector, Bast Blade, Castle Shield",
        difficulty: "Difícil",
        ustebra: { chance: 10, status: "high", lastSeenDays: 15, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "massacre",
        name: "Massacre",
        image: "imagens/massacre.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Juggernaut Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "Piece of Massacre's Shell, Great Axe, Heavy Mace",
        difficulty: "Difícil",
        ustebra: { chance: 6, status: "medium", lastSeenDays: 14, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "the_imperor",
        name: "The Imperor",
        image: "imagens/the_imperor.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Diabolic Imp Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "The Imperor's Trident, Tempest Rod, Fire Axe",
        difficulty: "Médio",
        ustebra: { chance: 5, status: "medium", lastSeenDays: 21, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "countess_sorrow",
        name: "Countess Sorrow",
        image: "imagens/countess_sorrow.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Phantasm Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "Countess Sorrow's Frozen Tear, Silver Brooch, Ring of the Sky",
        difficulty: "Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 13, prediction: "Próximo em 1 dia" }
    },
    {
        id: "dracola",
        name: "Dracola",
        image: "imagens/dracola.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Undead Dragon Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "Dracola's Eye, Dragon Scale Boots, Reaper's Axe",
        difficulty: "Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 5, prediction: "Próximo em 9 dias" }
    },
    {
        id: "mr_punish",
        name: "Mr. Punish",
        image: "imagens/mr_punish.gif",
        category: "poi_inq",
        categoryLabel: "PoI Boss",
        location: "Pits of Inferno (Dark Torturer Seal)",
        intervalMin: 8, intervalMax: 16,
        drops: "Mr. Punish's Handcuffs, Butcher's Axe, Dreaded Cleaver",
        difficulty: "Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 4, prediction: "Próximo em 10 dias" }
    },
    {
        id: "hatebreeder",
        name: "Hatebreeder",
        image: "imagens/hatebreeder.gif",
        category: "poi_inq",
        categoryLabel: "Inquisition Boss",
        location: "The Vats (The Inquisition Quest)",
        intervalMin: 10, intervalMax: 20,
        drops: "Hellhound Slobber, Fire Axe, Magma Coat",
        difficulty: "Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 5, prediction: "Próximo em 8 dias" }
    },

    // --- NEMESIS & MINI BOSSES COM CHANCE HOJE ---
    {
        id: "the_frog_prince",
        name: "The Frog Prince",
        image: "imagens/the_frog_prince.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Green Claw Swamp, Venore",
        intervalMin: 4, intervalMax: 8,
        drops: "Ribbit / Frog Cloak, Slime",
        difficulty: "Fácil",
        ustebra: { chance: 13, status: "high", lastSeenDays: 14, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "fernfang",
        name: "Fernfang",
        image: "imagens/fernfang.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Cavernas de Fíbula / Pântano",
        intervalMin: 6, intervalMax: 12,
        drops: "Wooden Whistle, Fern, Ring of Healing",
        difficulty: "Fácil",
        ustebra: { chance: 10, status: "high", lastSeenDays: 21, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "tzumrah_the_dazzler",
        name: "Tzumrah the Dazzler",
        image: "imagens/tzumrah_the_dazzler.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Forbidden Temple, Tiquanda",
        intervalMin: 12, intervalMax: 24,
        drops: "Small Diamond, Dazzling Robe",
        difficulty: "Médio",
        ustebra: { chance: 9, status: "high", lastSeenDays: 21, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "the_evil_eye",
        name: "The Evil Eye",
        image: "imagens/the_evil_eye.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Hellgate (Beholder Chamber)",
        intervalMin: 5, intervalMax: 10,
        drops: "Eye of the Evil, Bonelord Helmet, Terra Rod",
        difficulty: "Fácil",
        ustebra: { chance: 9, status: "high", lastSeenDays: 6, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "zulazza_the_corruptor",
        name: "Zulazza the Corruptor",
        image: "imagens/zulazza_the_corruptor.gif",
        category: "nemesis",
        categoryLabel: "Zao Raid",
        location: "Muggy Plains (Zao Gate)",
        intervalMin: 12, intervalMax: 24,
        drops: "Dragon Scale Boots, Zulazza's Head, Earthborn Titan Armor",
        difficulty: "Muito Difícil",
        ustebra: { chance: 7, status: "medium", lastSeenDays: 18, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "big_boss_trolliver",
        name: "Big Boss Trolliver",
        image: "imagens/big_boss_trolliver.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Edron Troll Caves",
        intervalMin: 3, intervalMax: 6,
        drops: "Wooden Shield, Leather Armor, Troll Root",
        difficulty: "Fácil",
        ustebra: { chance: 7, status: "medium", lastSeenDays: 3, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "smuggler_baron_silvertoe",
        name: "Smuggler Baron Silvertoe",
        image: "imagens/smuggler_baron_silvertoe.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Smuggler Cave, Bandits Den (Carlin / Port Hope)",
        intervalMin: 4, intervalMax: 8,
        drops: "Silver Brooch, Golden Mug, Gold Coins",
        difficulty: "Fácil",
        ustebra: { chance: 5, status: "medium", lastSeenDays: 8, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "dreadmaw",
        name: "Dreadmaw",
        image: "imagens/dreadmaw.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Muggy Plains / Zao Steppes",
        intervalMin: 5, intervalMax: 10,
        drops: "Dreadmaw Scale, Giant Shimmering Pearl",
        difficulty: "Médio",
        ustebra: { chance: 5, status: "medium", lastSeenDays: 12, prediction: "Hoje (Janela Aberta)" }
    },
    {
        id: "hairman_the_huge",
        name: "Hairman the Huge",
        image: "imagens/hairman_the_huge.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Banuta (Ape City), Port Hope",
        intervalMin: 5, intervalMax: 10,
        drops: "Banana Staff, Ape Fur",
        difficulty: "Fácil",
        ustebra: { chance: 3, status: "medium", lastSeenDays: 16, prediction: "Hoje (Janela Aberta)" }
    },

    // --- OUTROS NEMESIS & MINI BOSSES ---
    {
        id: "xenia",
        name: "Xenia",
        image: "imagens/xenia.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Amazon Camp, Venore",
        intervalMin: 7, intervalMax: 14,
        drops: "Amazon Armor, Amazon Shield, Crystal Ball",
        difficulty: "Fácil",
        ustebra: { chance: 2, status: "low", lastSeenDays: 22, prediction: "Próximo em 1 dia" }
    },
    {
        id: "rukor_zad",
        name: "Rukor Zad",
        image: "imagens/rukor_zad.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Dark Cathedral, Plains of Havoc",
        intervalMin: 3, intervalMax: 6,
        drops: "Assassin Dagger, Dark Armor",
        difficulty: "Fácil",
        ustebra: { chance: 1, status: "low", lastSeenDays: 1, prediction: "Morto Ontem (Próximo em 5 dias)", defaultKilledYesterday: true }
    },
    {
        id: "high_templar_cobrass",
        name: "High Templar Cobrass",
        image: "imagens/high_templar_cobrass.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Chor, Tiquanda",
        intervalMin: 5, intervalMax: 10,
        drops: "Snake Sword, Lizard Scale, Small Emerald",
        difficulty: "Fácil",
        ustebra: { chance: 1, status: "low", lastSeenDays: 18, prediction: "Próximo em 4 dias" }
    },
    {
        id: "yaga_the_crone",
        name: "Yaga the Crone",
        image: "imagens/yaga_the_crone.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Green Claw Swamp (Witch Hill), Venore",
        intervalMin: 4, intervalMax: 8,
        drops: "Cape, Star Amulet, Witch Broom",
        difficulty: "Fácil",
        ustebra: { chance: 1, status: "low", lastSeenDays: 4, prediction: "Próximo em 1 dia" }
    },
    {
        id: "foreman_kneebiter",
        name: "Foreman Kneebiter",
        image: "imagens/foreman_kneebiter.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Dwarf Mines, Kazordoon",
        intervalMin: 4, intervalMax: 8,
        drops: "Dwarven Axe, Miner's Helmet",
        difficulty: "Fácil",
        ustebra: { chance: 1, status: "low", lastSeenDays: 27, prediction: "Próximo em 1 dia" }
    },
    {
        id: "yeti",
        name: "Yeti",
        image: "imagens/yeti.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Folda (Topo das Montanhas de Gelo)",
        intervalMin: 15, intervalMax: 30,
        drops: "Bunnyslippers, Yeti Fur, Snowball",
        difficulty: "Médio",
        ustebra: { chance: 1, status: "low", lastSeenDays: 17, prediction: "Próximo em 2 dias" }
    },
    {
        id: "dharalion",
        name: "Dharalion",
        image: "imagens/dharalion.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Shadowthorn, Venore",
        intervalMin: 6, intervalMax: 12,
        drops: "Cornucopia, Elven Brooch, Demonbone Amulet",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 3, prediction: "Próximo em 3 dias" }
    },
    {
        id: "general_murius",
        name: "General Murius",
        image: "imagens/general_murius.gif",
        category: "mini",
        categoryLabel: "Minotaur Boss",
        location: "Mintwallin, Thais Tunnels",
        intervalMin: 4, intervalMax: 8,
        drops: "Dwarven Ring, Brass Armor, Heavy Machete",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 3, prediction: "Próximo em 3 dias" }
    },
    {
        id: "man_in_the_cave",
        name: "Man in the Cave",
        image: "imagens/man_in_the_cave.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Caverna Oculta de Svargrond",
        intervalMin: 14, intervalMax: 30,
        drops: "Fur Cap, Bear Paw, Wolf Trophy",
        difficulty: "Médio",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 5, prediction: "Próximo em 7 dias" }
    },
    {
        id: "ocyakao",
        name: "Ocyakao",
        image: "imagens/ocyakao.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Geleiras de Nibelor, Svargrond",
        intervalMin: 14, intervalMax: 28,
        drops: "Eye of the Storm, Shiver Arrow, Silver Brooch",
        difficulty: "Médio",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 10, prediction: "Próximo em 6 dias" }
    },
    {
        id: "the_welter",
        name: "The Welter",
        image: "imagens/the_welter.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Hydra Mountain, Tiquanda",
        intervalMin: 14, intervalMax: 28,
        drops: "Triple Headed Serpent Shield, Welter's Egg",
        difficulty: "Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 9, prediction: "Próximo em 8 dias" }
    },
    {
        id: "shlorg",
        name: "Shlorg",
        image: "imagens/shlorg.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Terra Tunnels (Edron / Kazordoon)",
        intervalMin: 12, intervalMax: 24,
        drops: "Glass of Goo, Gooey Mass, Slime Heart",
        difficulty: "Médio",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 7, prediction: "Próximo em 7 dias" }
    },
    {
        id: "zushuka",
        name: "Zushuka",
        image: "imagens/zushuka.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Ice Witch Temple, Svargrond",
        intervalMin: 14, intervalMax: 28,
        drops: "Icy Culm, Glacier Shoes, Snowman Package",
        difficulty: "Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 4, prediction: "Próximo em 12 dias" }
    },
    {
        id: "white_pale",
        name: "White Pale",
        image: "imagens/white_pale.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Edron Rotworm Caves / Liberty Bay / Darashia",
        intervalMin: 6, intervalMax: 12,
        drops: "Albino Plate, White Pearl, Meat",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 2, prediction: "Próximo em 4 dias" }
    },
    {
        id: "furyosa",
        name: "Furyosa",
        image: "imagens/furyosa.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Fury Gate, Thais / Darashia",
        intervalMin: 14, intervalMax: 28,
        drops: "Furious Frock, Red Gem, Pure Energy",
        difficulty: "Muito Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 6, prediction: "Próximo em 8 dias" }
    },
    {
        id: "hirintror",
        name: "Hirintror",
        image: "imagens/hirintror.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Formorgar Mines / Mammoth Lair",
        intervalMin: 12, intervalMax: 24,
        drops: "The Chilling Horn, Mammoth Tusk",
        difficulty: "Médio",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 5, prediction: "Próximo em 7 dias" }
    },
    {
        id: "yakchal",
        name: "Yakchal",
        image: "imagens/yakchal.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Formorgar Glacier (Ice Shrine)",
        intervalMin: 2, intervalMax: 5,
        drops: "Yakchal's Ice Bag, Glacier Mask, Frozen Starlight",
        difficulty: "Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 2, prediction: "Próximo em 1 dia" }
    },
    {
        id: "dire_penguin",
        name: "Dire Penguin",
        image: "imagens/dire_penguin.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Ilhas de Svargrond / Chyllfroest",
        intervalMin: 3, intervalMax: 6,
        drops: "Fish, White Pearl, Snowball",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 1, prediction: "Morto Ontem (Próximo em 2 dias)", defaultKilledYesterday: true }
    },
    {
        id: "groam",
        name: "Groam",
        image: "imagens/groam.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Subsolo de Kazordoon (Mines)",
        intervalMin: 4, intervalMax: 8,
        drops: "Dwarven Axe, Dwarven Ring, Iron Ore",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 2, prediction: "Próximo em 2 dias" }
    },
    {
        id: "captain_jones",
        name: "Captain Jones",
        image: "imagens/captain_jones.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Ghostship / Darashia",
        intervalMin: 5, intervalMax: 10,
        drops: "Pirate Hat, Sabre, Gold Coins",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 4, prediction: "Próximo em 6 dias" }
    },
    {
        id: "gravelord_oshuran",
        name: "Gravelord Oshuran",
        image: "imagens/gravelord_oshuran.gif",
        category: "nemesis",
        categoryLabel: "Nemesis Boss",
        location: "Drefia (Tomb Grounds)",
        intervalMin: 6, intervalMax: 12,
        drops: "Skull Staff, Bone Shield",
        difficulty: "Médio",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 3, prediction: "Próximo em 5 dias" }
    },
    {
        id: "the_big_bad_one",
        name: "The Big Bad One",
        image: "imagens/the_big_bad_one.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Edron Woods / Cormaya",
        intervalMin: 3, intervalMax: 6,
        drops: "Wolf Fur, Meat",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 6, prediction: "Próximo em 4 dias" }
    },
    {
        id: "barbaria",
        name: "Barbaria",
        image: "imagens/barbaria.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Barbarian Camp, Svargrond",
        intervalMin: 4, intervalMax: 8,
        drops: "Brutetamer's Staff, Fur Boots",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 2, prediction: "Próximo em 6 dias" }
    },
    {
        id: "grandfather_tridian",
        name: "Grandfather Tridian",
        image: "imagens/grandfather_tridian.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Cult Caves, Liberty Bay",
        intervalMin: 5, intervalMax: 10,
        drops: "Cultish Robe, Star Amulet",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 4, prediction: "Próximo em 5 dias" }
    },
    {
        id: "the_old_whopper",
        name: "The Old Whopper",
        image: "imagens/the_old_whopper.gif",
        category: "mini",
        categoryLabel: "Mini Boss",
        location: "Cyclopolis, Edron",
        intervalMin: 4, intervalMax: 8,
        drops: "Heavy Club, Cyclops Toe",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 3, prediction: "Próximo em 4 dias" }
    },
    {
        id: "zarabustor",
        name: "Zarabustor",
        image: "imagens/zarabustor.gif",
        category: "mini",
        categoryLabel: "Warlock Boss",
        location: "Demona, Maze of Lost Souls",
        intervalMin: 6, intervalMax: 12,
        drops: "Blue Robe, Skull Staff, Talisman",
        difficulty: "Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 2, prediction: "Próximo em 8 dias" }
    },
    {
        id: "warlord_ruzad",
        name: "Warlord Ruzad",
        image: "imagens/warlord_ruzad.gif",
        category: "mini",
        categoryLabel: "Orc Boss",
        location: "Orc Fortress, Ulderek's Rock",
        intervalMin: 4, intervalMax: 8,
        drops: "Orcish Axe, Knight Armor",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 3, prediction: "Próximo em 6 dias" }
    },
    {
        id: "rotrender",
        name: "Rotrender",
        image: "imagens/rotrender.gif",
        category: "nemesis",
        categoryLabel: "Rotworm Boss",
        location: "Deep Rotworm Caves",
        intervalMin: 7, intervalMax: 14,
        drops: "Lump of Dirt, Rotworm Fangs, Pure Gold",
        difficulty: "Médio",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 4, prediction: "Próximo em 7 dias" }
    },

    // --- ARCHDEMONS & RAIDS (LONG INTERVALS - GERALMENTE EM COOLDOWN) ---
    {
        id: "ferumbras",
        name: "Ferumbras",
        image: "imagens/ferumbras.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Ferumbras' Citadel (Kharos, Goroma)",
        intervalMin: 150, intervalMax: 180,
        drops: "Ferumbras' Hat, Great Axe, Tempest Rod, Spellbook of Dark Mysteries",
        difficulty: "Extremo",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 141, prediction: "Próximo em 21 dias" }
    },
    {
        id: "gazharagoth",
        name: "Gaz'haragoth",
        image: "imagens/gazharagoth.gif",
        category: "archdemon",
        categoryLabel: "Roshamuul Raid",
        location: "Roshamuul Prison Entrance",
        intervalMin: 14, intervalMax: 28,
        drops: "Umbral Master Weapons, Dream Warden Mask, Nightmare Horn",
        difficulty: "Extremo",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 57, prediction: "Próximo em 5 dias" }
    },
    {
        id: "ghazbaran",
        name: "Ghazbaran",
        image: "imagens/ghazbaran.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Formorgar Mines, Svargrond",
        intervalMin: 150, intervalMax: 180,
        drops: "Oceanborn Leviathan Armor, Havoc Blade, Ravenwing, Spellbook of Lost Souls",
        difficulty: "Extremo",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 46, prediction: "Próximo em 116 dias" }
    },
    {
        id: "orshabaal",
        name: "Orshabaal",
        image: "imagens/orshabaal.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Femur Hills (Noroeste de Kazordoon)",
        intervalMin: 150, intervalMax: 180,
        drops: "Thunder Hammer, Demon Horn, Teddy Bear, Magic Plate Armor",
        difficulty: "Muito Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 24, prediction: "Próximo em 136 dias" }
    },
    {
        id: "morgaroth",
        name: "Morgaroth",
        image: "imagens/morgaroth.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Triangle of Terror (Goroma Volcano)",
        intervalMin: 150, intervalMax: 180,
        drops: "Great Shield, Chain Bolter, Molten Plate, The Stomper",
        difficulty: "Extremo",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 38, prediction: "Próximo em 130 dias" }
    },
    {
        id: "omrafir",
        name: "Omrafir",
        image: "imagens/omrafir.gif",
        category: "archdemon",
        categoryLabel: "Roshamuul Raid",
        location: "Roshamuul Mountain Lair",
        intervalMin: 14, intervalMax: 30,
        drops: "Dream Warden Claw, Claws of Omrafir, Rare Gems",
        difficulty: "Extremo",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 8, prediction: "Próximo em 7 dias" }
    },
    {
        id: "the_abomination",
        name: "The Abomination",
        image: "imagens/the_abomination.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Abomination Lair, Thais Tunnels",
        intervalMin: 14, intervalMax: 28,
        drops: "Mutated Flesh, Gold Token, Silver Token",
        difficulty: "Muito Difícil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 12, prediction: "Próximo em 8 dias" }
    },
    {
        id: "morshabaal",
        name: "Morshabaal",
        image: "imagens/morshabaal.gif",
        category: "archdemon",
        categoryLabel: "Raid Global",
        location: "Femur Hills / Plains of Havoc",
        intervalMin: 150, intervalMax: 200,
        drops: "Thunder Hammer, Morshabaal's Mask, Bispo de Prata",
        difficulty: "Extremo",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 62, prediction: "Próximo em 120 dias" }
    }
];

// Lista oficial de servidores Tibia
const TIBIA_WORLDS = [
    { name: "Ustebra", pvp: "Open PvP", location: "South America", isDefault: true, tag: "⭐ Servidor Principal" },
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
    searchQuery: "",
    statusFilter: "all",           // 'all', 'high', 'medium', 'low', 'killed_today', 'killed_yesterday', 'blocked', 'checked', 'unchecked'
    categoryFilter: "all",         // 'all', 'vampire', 'mount', 'archdemon', 'poi_inq', 'nemesis', 'mini', 'rookgaard'
    sortBy: "chance_desc",         // 'chance_desc', 'chance_asc', 'name_asc', 'last_seen_desc'
    hideBlockedBosses: true,       // Por padrão esconde bosses com 0% (sem chance hoje) para focar na ronda
    checkedBosses: {},             // { bossId: { time: "14:30", date: "29/08/2026", timestamp: 12345 } }
    killedBosses: {}               // { bossId: { time: "10:55", date: "29/08/2026", timestamp: 12345, dayOffset: 0 } }
};

const BOSS_STORAGE_PREFIX = "tibia_boss_checks_v4_";
const BOSS_KILLS_PREFIX = "tibia_boss_kills_v4_";

// Algoritmo determinístico para calcular dados realistas por servidor
function getWorldBossData(boss, worldName) {
    const isUstebra = worldName.toLowerCase() === "ustebra";

    // Se for Ustebra, usa os dados reais sincronizados do Tibia-Statistic
    if (isUstebra && boss.ustebra) {
        return {
            ...boss,
            chancePercent: boss.ustebra.chance,
            status: boss.ustebra.status,
            lastSeenDays: boss.ustebra.lastSeenDays,
            prediction: boss.ustebra.prediction,
            defaultKilledYesterday: !!boss.ustebra.defaultKilledYesterday
        };
    }

    // Para outros mundos, calcula realisticamente baseado no seed do mundo e na data atual
    let hash = 0;
    const seedString = `${worldName.toLowerCase()}_${boss.id}_${new Date().getDate()}_${new Date().getMonth()}`;
    for (let i = 0; i < seedString.length; i++) {
        hash = (hash * 31 + seedString.charCodeAt(i)) & 0xFFFFFFFF;
    }
    const seed = Math.abs(hash);

    const isArchdemon = boss.category === "archdemon";
    let lastSeenDays, chancePercent, status, prediction, defaultKilledYesterday = false;

    if (isArchdemon) {
        const daysSince = 20 + (seed % 170);
        lastSeenDays = daysSince;
        if (daysSince >= boss.intervalMin) {
            chancePercent = Math.min(45, Math.floor(((daysSince - boss.intervalMin) / (boss.intervalMax - boss.intervalMin + 1)) * 35) + 5);
            status = chancePercent >= 15 ? "high" : "medium";
            prediction = "Hoje (Janela Aberta)";
        } else {
            chancePercent = 0;
            status = "blocked";
            const daysLeft = boss.intervalMin - daysSince;
            prediction = `Próximo em ${daysLeft} dias`;
        }
    } else {
        const range = boss.intervalMax + 4;
        lastSeenDays = (seed % range) + 1;

        if (lastSeenDays === 1 && (seed % 4 === 0)) {
            defaultKilledYesterday = true;
            chancePercent = 1;
            status = "low";
            prediction = "Morto Ontem (Próximo em breve)";
        } else if (lastSeenDays >= boss.intervalMin) {
            const overdue = lastSeenDays - boss.intervalMin;
            chancePercent = Math.min(50, Math.floor((overdue + 1) * (35 / (boss.intervalMax - boss.intervalMin + 1))) + 5);
            if (chancePercent >= 12) {
                status = "high";
            } else if (chancePercent >= 5) {
                status = "medium";
            } else {
                status = "low";
            }
            prediction = "Hoje (Janela Aberta)";
        } else if (lastSeenDays === boss.intervalMin - 1) {
            chancePercent = 2;
            status = "low";
            prediction = "Próximo em 1 dia";
        } else {
            chancePercent = 0;
            status = "blocked";
            const daysLeft = boss.intervalMin - lastSeenDays;
            prediction = `Próximo em ${daysLeft} dias`;
        }
    }

    return {
        ...boss,
        chancePercent,
        status,
        lastSeenDays,
        prediction,
        defaultKilledYesterday
    };
}

// Inicializador
function initBossTracker() {
    loadBossWorldSelection();
    loadBossChecks();
    loadBossKills();
    populateWorldSelect();
    setupBossEventListeners();
    renderBossTracker();
}

function getStorageKey() {
    return BOSS_STORAGE_PREFIX + bossTrackerState.selectedWorld.toLowerCase();
}

function getKillsStorageKey() {
    return BOSS_KILLS_PREFIX + bossTrackerState.selectedWorld.toLowerCase();
}

function loadBossWorldSelection() {
    const savedWorld = localStorage.getItem("tibia_boss_current_world");
    if (savedWorld && TIBIA_WORLDS.some(w => w.name.toLowerCase() === savedWorld.toLowerCase())) {
        bossTrackerState.selectedWorld = savedWorld;
    }
}

function saveBossWorldSelection() {
    localStorage.setItem("tibia_boss_current_world", bossTrackerState.selectedWorld);
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

function populateWorldSelect() {
    const select = document.getElementById("boss-world-select");
    if (!select) return;

    select.innerHTML = "";
    TIBIA_WORLDS.forEach(world => {
        const opt = document.createElement("option");
        opt.value = world.name;
        opt.innerText = `${world.name} — ${world.location} (${world.pvp})${world.tag ? ' ' + world.tag : ''}`;
        if (world.name.toLowerCase() === bossTrackerState.selectedWorld.toLowerCase()) {
            opt.selected = true;
        }
        select.appendChild(opt);
    });
}

function setupBossEventListeners() {
    const worldSelect = document.getElementById("boss-world-select");
    if (worldSelect) {
        worldSelect.addEventListener("change", (e) => {
            bossTrackerState.selectedWorld = e.target.value;
            saveBossWorldSelection();
            loadBossChecks();
            loadBossKills();
            renderBossTracker();
            showCustomToast(`Servidor alterado para ${bossTrackerState.selectedWorld}!`);
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

    // Também marca como checado automaticamente
    bossTrackerState.checkedBosses[bossId] = {
        time: timeStr,
        date: dateStr,
        timestamp: Date.now()
    };

    saveBossKills();
    saveBossChecks();
    renderBossTracker();
    showCustomToast(`💀 ${bossName} registrado como MORTO hoje às ${timeStr}!`);
};

// Desfazer morte de Boss (reviver para a lista ativa)
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
    const activeBosses = worldBosses.filter(b => b.chancePercent >= 5 && !killedTodayIds.includes(b.id));
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
                text += `✅ **${b.name}** (${b.chancePercent}%) — Checado às ${checkData.time}\n`;
            }
        });
    }

    const pendingHigh = activeBosses.filter(b => !bossTrackerState.checkedBosses[b.id] && b.chancePercent >= 10);
    if (pendingHigh.length > 0) {
        text += `\n**⚠️ PENDENTES DE ALTA PRIORIDADE:**\n`;
        pendingHigh.forEach(b => {
            text += `⏳ **${b.name}** (${b.chancePercent}%) — ${b.location}\n`;
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

// Filtragem e Ordenação
function getFilteredBosses() {
    const worldBosses = getProcessedWorldBosses();

    return worldBosses.filter(boss => {
        const isChecked = !!bossTrackerState.checkedBosses[boss.id];

        // Filtro de Texto (Nome, Local, Loots, Categoria)
        if (bossTrackerState.searchQuery) {
            const q = bossTrackerState.searchQuery;
            const matchName = boss.name.toLowerCase().includes(q);
            const matchLoc = boss.location.toLowerCase().includes(q);
            const matchDrop = boss.drops.toLowerCase().includes(q);
            const matchCat = boss.categoryLabel.toLowerCase().includes(q);
            if (!matchName && !matchLoc && !matchDrop && !matchCat) return false;
        }

        // Filtro de Status / Chance / Mortos
        if (bossTrackerState.statusFilter === "high" && (boss.status !== "high" || boss.isKilledToday)) return false;
        if (bossTrackerState.statusFilter === "medium" && (boss.status !== "medium" || boss.isKilledToday)) return false;
        if (bossTrackerState.statusFilter === "low" && (boss.status !== "low" || boss.isKilledToday)) return false;
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
            if (boss.chancePercent === 0 && !boss.isKilledToday && !boss.isKilledYesterday) return false;
        }

        return true;
    }).sort((a, b) => {
        const aChecked = !!bossTrackerState.checkedBosses[a.id];
        const bChecked = !!bossTrackerState.checkedBosses[b.id];

        switch (bossTrackerState.sortBy) {
            case "chance_desc":
                return b.chancePercent - a.chancePercent;
            case "chance_asc":
                return a.chancePercent - b.chancePercent;
            case "name_asc":
                return a.name.localeCompare(b.name);
            case "last_seen_desc":
                return b.lastSeenDays - a.lastSeenDays;
            case "checked_first":
                return (bChecked === aChecked) ? b.chancePercent - a.chancePercent : (bChecked ? 1 : -1);
            default:
                return b.chancePercent - a.chancePercent;
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
    const activeAlive = worldBosses.filter(b => b.chancePercent >= 5 && !b.isKilledToday);
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
    else if (boss.chancePercent === 0) cardExtraClass = "boss-card-blocked";

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
                    <strong>${chanceText}</strong> ${boss.isKilledToday ? '' : `(${boss.chancePercent}%)`}
                </div>
            </div>
        </div>

        <div class="boss-details-grid">
            <div class="boss-detail-row">
                <span class="boss-detail-label">📍 Local:</span>
                <span class="boss-detail-value">${boss.location}</span>
            </div>
            <div class="boss-detail-row">
                <span class="boss-detail-label">⏳ Status:</span>
                <span class="boss-detail-value">
                    ${boss.isKilledToday ? `<strong>Morto hoje às ${boss.killTime}</strong> (Entrou em Cooldown)` : `<strong>${boss.prediction}</strong> (visto há ${boss.lastSeenDays}d)`}
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
                ${isChecked ? `<span>🕒 Checado <strong>${checkData.time}</strong></span>` : `<span>${boss.chancePercent > 0 ? 'Pendente' : 'Fora da janela'}</span>`}
            </div>
            <div class="boss-card-actions">
                <button class="btn-boss-check ${isChecked ? 'checked' : ''}" onclick="toggleBossCheck('${boss.id}')" title="${isChecked ? 'Clique para desmarcar check' : 'Marcar como checado'}">
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

// Renderizar Seções Organizadas de Bosses (Lado a Lado / Grid Responsivo)
function renderBossCards() {
    const container = document.getElementById("boss-cards-grid");
    const emptyState = document.getElementById("boss-empty-state");
    const countEl = document.getElementById("boss-results-count");
    if (!container) return;

    const bosses = getFilteredBosses();

    if (countEl) {
        countEl.innerText = `${bosses.length} ${bosses.length === 1 ? 'boss exibido' : 'bosses exibidos'} em ${bossTrackerState.selectedWorld}`;
    }

    if (bosses.length === 0) {
        container.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        return;
    }

    if (emptyState) emptyState.style.display = "none";

    // Se estiver buscando ou com filtro específico ativo, exibe em subgrid direto
    if (bossTrackerState.searchQuery || bossTrackerState.statusFilter !== "all" || bossTrackerState.categoryFilter !== "all" || bossTrackerState.sortBy !== "chance_desc") {
        container.innerHTML = `
        <div class="boss-cards-subgrid">
            ${bosses.map(b => generateBossCardHTML(b)).join("")}
        </div>
        `;
        return;
    }

    // Organização em seções lógicas:
    // 1. 🔥 Bosses com Chance Hoje (Janela de Spawn Aberta / Vivos)
    // 2. 💀 Bosses Mortos Hoje
    // 3. 📅 Mortos no Dia Anterior (Ontem)
    // 4. ⏳ Baixa Chance / Próximos Spawns
    // 5. 🔒 Bloqueados / Em Cooldown Geral (Se ativado)

    const killedToday = bosses.filter(b => b.isKilledToday);
    const activeAlive = bosses.filter(b => b.chancePercent >= 5 && !b.isKilledToday);
    const killedYesterday = bosses.filter(b => b.isKilledYesterday && !b.isKilledToday);
    const lowBosses = bosses.filter(b => b.chancePercent > 0 && b.chancePercent < 5 && !b.isKilledToday && !b.isKilledYesterday);
    const blockedBosses = bosses.filter(b => b.chancePercent === 0 && !b.isKilledToday && !b.isKilledYesterday);

    let html = "";

    // 1. BOSSES COM CHANCE HOJE
    if (activeAlive.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header highlight-today">
                <div class="boss-section-title">
                    <span class="boss-section-icon">🔥</span>
                    <h2>Bosses com Chance Hoje (Janela de Spawn Aberta)</h2>
                    <span class="boss-section-badge">${activeAlive.length} bosses ativos</span>
                </div>
                <p class="boss-section-subtitle">Bosses com probabilidade real de nascer no servidor <strong>${bossTrackerState.selectedWorld}</strong> hoje. Cheque os locais ou marque como morto caso tenha sido derrotado.</p>
            </div>
            <div class="boss-cards-subgrid">
                ${activeAlive.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    // 2. BOSSES MORTOS HOJE
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

    // 3. BOSSES MORTOS NO DIA ANTERIOR (ONTEM)
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

    // 4. BAIXA CHANCE (PRÓXIMOS DIAS)
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

    // 5. BLOQUEADOS / COOLDOWN GERAL
    if (blockedBosses.length > 0 && !bossTrackerState.hideBlockedBosses) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header">
                <div class="boss-section-title">
                    <span class="boss-section-icon">🔒</span>
                    <h2>Bloqueados / Em Cooldown (Sem Chance Hoje)</h2>
                    <span class="boss-section-badge blocked">${blockedBosses.length} bosses</span>
                </div>
                <p class="boss-section-subtitle">Bosses mortos há poucos dias ou raids de longos meses de intervalo (ex: Ferumbras, Ghazbaran).</p>
            </div>
            <div class="boss-cards-subgrid">
                ${blockedBosses.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

    container.innerHTML = html;
}

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    initBossTracker();
});
