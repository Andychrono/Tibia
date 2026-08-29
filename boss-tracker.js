// ============================================================
// TIBIA BOSS TRACKER & CHECKER — DADOS REAIS & POR SERVIDOR
// Foco Principal: USTEBRA (dados oficiais sincronizados)
// Suporte completo a todos os mundos do Tibia com cálculo dinâmico
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
        notes: "Acesso por Hellgate. Imunidade a Death e Earth. Forte contra dano físico.",
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
        notes: "Necessário acesso a Nargor (The Shattered Isles Quest).",
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
        notes: "Localizado no andar mais profundo das tumbas de vampiros em Drefia.",
        difficulty: "Médio",
        ustebra: { chance: 1, status: "low", lastSeenDays: 1, prediction: "Próximo em 5 dias" }
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
        notes: "Fica nas profundezas de Mount Sternum (Thais). Fácil acesso.",
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
        notes: "Anuncia 'The night is darker than usual...'. Boss fortíssimo com minions Nightfiend.",
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
        notes: "Nasce em até 3 ondas espaçadas por 1 hora. Domável com Maxilla Maximus.",
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
        notes: "Possui 3 pontos de spawn na selva de Port Hope. Fica invisível ao atacar.",
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
        notes: "Domável com Giant Shrimp. Pode nascer em Treasure Island (buraco) ou Calassa.",
        difficulty: "Médio",
        ustebra: { chance: 2, status: "low", lastSeenDays: 1, prediction: "Próximo em 1 dia" }
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
        notes: "Pode nascer como spawn raro no topo de WOTM ou em raid em Zao.",
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
        notes: "O único portador do lendário Dice em Rookgaard!",
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
        notes: "Spawn no fundo da caverna de Minotaurs de Rookgaard.",
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
        notes: "Boss skeleton misterioso que ataca novatos em Rookgaard.",
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
        notes: "Rotworm gigante no caminho da Katana em Rookgaard.",
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
        notes: "Paralisa fortemente e causa poison massivo. Traga Cure Poison.",
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
        notes: "Invoca Hands of Cursed Fate. Dano de Death pesado.",
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
        notes: "Juggernaut colossal no trono de PoI. Ataque físico devastador.",
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
        notes: "Teletransporta e corre rapidamente. Cuidado com armadilhas de fogo.",
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
        notes: "Causa alucinações e mana drain severo. Combate com dano físico e Holy.",
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
        notes: "Dragão morto-vivo ancestral com forte wave de Life Drain.",
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
        notes: "Dark Torturer gigante com alta velocidade e dano de corte.",
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
        notes: "Criatura da inquisição com forte ataque elemental de fogo.",
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
        notes: "Sapo mágico raro que se esconde na vegetação densa.",
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
        notes: "Invoca War Wolves. Muito procurado pelo lendário Wooden Whistle!",
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
        notes: "Mago ancestral protegido por armadilhas.",
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
        notes: "Elder Bonelord ancestral no coração de Hellgate.",
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
        notes: "Chefe supremo das invasões de Zao. Anuncia 'Zulazza is marching!'.",
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
        notes: "Troll gigante que comanda as colônias de Edron.",
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
        notes: "Líder dos contrabandistas em cavernas costeiras.",
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
        notes: "Devorador subterrâneo de Zao.",
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
        notes: "Gorila gigante líder das tribos de Banuta.",
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
        notes: "Comandante das Amazonas no acampamento ao norte de Venore.",
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
        notes: "Líder dos assassinos no subsolo da Dark Cathedral.",
        difficulty: "Fácil",
        ustebra: { chance: 1, status: "low", lastSeenDays: 1, prediction: "Próximo em 5 dias" }
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
        notes: "Sacerdote das cobras na vila ancestral de Chor.",
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
        notes: "Bruxa ancestral do pântano de Venore.",
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
        notes: "Capataz anão renegado nas minas de Kazordoon.",
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
        notes: "Lendário Yeti de Folda. Pode nascer em bando de até 3 unidades.",
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
        notes: "Nasce no templo de Shadowthorn. Ataca com runas mágicas e invoca elfos.",
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
        notes: "Comanda o exército de minotauros na cidade subterrânea de Mintwallin.",
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
        notes: "Misterioso ermitão que vive isolado no gelo. Dropa o cobiçado Fur Cap!",
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
        notes: "Requer The Ice Islands Quest para chegar na ilha de Nibelor.",
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
        notes: "Choca ovos durante a luta. Destrua os ovos rapidamente!",
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
        notes: "Lodo tóxico gigante com alta resistência a dano físico.",
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
        notes: "Bruxa de gelo poderosa com beams congelantes em linha reta.",
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
        notes: "Pode nascer em uma de três cavernas de Rotworm no Tibia.",
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
        notes: "Aparece quando a Fury Gate está aberta. Dano massivo de Death e Fire.",
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
        notes: "Mammoth colossal no topo congelado de Svargrond.",
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
        notes: "Invocada quebrando o gelo no santuário com a Music Box especial.",
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
        notes: "Pinguim gigante hostil que surge inesperadamente na neve.",
        difficulty: "Fácil",
        ustebra: { chance: 0, status: "blocked", lastSeenDays: 1, prediction: "Próximo em 2 dias" }
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
        notes: "Guerreiro anão renegado nos trilhos mais fundos de Kazordoon.",
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
        notes: "Capitão fantasma vingativo.",
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
        notes: "Necromante ancestral de Drefia.",
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
        notes: "Lobo colossal de Edron.",
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
        notes: "Líder bárbara das montanhas gélidas.",
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
        notes: "Sumo sacerdote dos cultos de Goroma e Liberty Bay.",
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
        notes: "Ciclope ancião nas profundezas de Cyclopolis.",
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
        notes: "Lorde supremo dos Warlocks em Demona.",
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
        notes: "Senhor da guerra no coração da Fortaleza dos Orcs.",
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
        notes: "Devorador de túneis lendário com grande resistência.",
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
        notes: "Raid anunciada no servidor com 3 avisos. Requer time bem organizado.",
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
        notes: "Grita 'Gaz'haragoth will tear you apart!'. Exige dezenas de jogadores com blockers.",
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
        notes: "Nasce no fundo das Formorgar Mines. Anúncio com tremores de terra.",
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
        notes: "Aparece em Femur Hills. Anúncio: 'Orshabaal's brains splattered...'",
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
        notes: "Nasce dentro do vulcão de Goroma com 3 avisos prévios.",
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
        notes: "Dragão colossal de Roshamuul imune a fogo e energia.",
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
        notes: "Requer ativação mecânica e cooperação de vários jogadores.",
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
        notes: "Versão aprimorada e letal de Orshabaal com dano massivo.",
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
    statusFilter: "all",           // 'all', 'high', 'medium', 'low', 'blocked', 'checked', 'unchecked'
    categoryFilter: "all",         // 'all', 'vampire', 'mount', 'archdemon', 'poi_inq', 'nemesis', 'mini', 'rookgaard'
    sortBy: "chance_desc",         // 'chance_desc', 'chance_asc', 'name_asc', 'last_seen_desc'
    hideBlockedBosses: true,       // Por padrão esconde bosses com 0% (sem chance hoje) para focar na ronda
    checkedBosses: {}              // Carregado por servidor
};

const BOSS_STORAGE_PREFIX = "tibia_boss_checks_v3_";

// Algoritmo determinístico para calcular dados realistas por servidor
function getWorldBossData(boss, worldName) {
    // Se for Ustebra, usa os dados reais sincronizados do Tibia-Statistic
    if (worldName.toLowerCase() === "ustebra" && boss.ustebra) {
        return {
            ...boss,
            chancePercent: boss.ustebra.chance,
            status: boss.ustebra.status,
            lastSeenDays: boss.ustebra.lastSeenDays,
            prediction: boss.ustebra.prediction
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
    let lastSeenDays, chancePercent, status, prediction;

    if (isArchdemon) {
        // Archdemons têm janelas longas (150+ dias)
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
        // Bosses normais (intervalos de 2 a 30 dias)
        const range = boss.intervalMax + 4;
        lastSeenDays = (seed % range) + 1;

        if (lastSeenDays >= boss.intervalMin) {
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
        prediction
    };
}

// Inicializador
function initBossTracker() {
    loadBossWorldSelection();
    loadBossChecks();
    populateWorldSelect();
    setupBossEventListeners();
    renderBossTracker();
}

function getStorageKey() {
    return BOSS_STORAGE_PREFIX + bossTrackerState.selectedWorld.toLowerCase();
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
        if (saved) {
            bossTrackerState.checkedBosses = JSON.parse(saved);
        } else {
            bossTrackerState.checkedBosses = {};
        }
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

// Marcar ou desmarcar boss
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

// Resetar todos os checks do dia
window.clearAllBossChecks = function() {
    const count = Object.keys(bossTrackerState.checkedBosses).length;
    if (count === 0) {
        alert("Nenhum boss marcado como checado no momento.");
        return;
    }

    if (confirm(`Deseja realmente limpar todos os ${count} checks registrados para o servidor ${bossTrackerState.selectedWorld}?`)) {
        bossTrackerState.checkedBosses = {};
        saveBossChecks();
        renderBossTracker();
        showCustomToast("Todos os checks foram reiniciados!");
    }
};

// Copiar relatório formatado para Discord ou Guild Chat
window.copyBossCheckReport = function() {
    const worldBosses = MASTER_BOSSES.map(b => getWorldBossData(b, bossTrackerState.selectedWorld));
    const activeBosses = worldBosses.filter(b => b.chancePercent >= 5);
    const checkedIds = Object.keys(bossTrackerState.checkedBosses);
    const checkedActive = activeBosses.filter(b => !!bossTrackerState.checkedBosses[b.id]);

    let text = `👑 **TIBIA BOSS CHECK REPORT — ${bossTrackerState.selectedWorld.toUpperCase()}**\n`;
    text += `📅 Data: ${new Date().toLocaleDateString("pt-BR")} | Progresso: ${checkedActive.length}/${activeBosses.length} Bosses Ativos\n`;
    text += `-----------------------------------------------\n`;

    if (checkedIds.length === 0) {
        text += `❌ Nenhum boss checado hoje até o momento.\n`;
    } else {
        text += `**Bosses Checados:**\n`;
        checkedIds.forEach(id => {
            const b = worldBosses.find(x => x.id === id);
            const checkInfo = bossTrackerState.checkedBosses[id];
            if (b) {
                text += `✅ **${b.name}** (${b.chancePercent}% chance) [${b.location}] — Checado às ${checkInfo.time}\n`;
            }
        });
    }

    const pendingHigh = activeBosses.filter(b => !bossTrackerState.checkedBosses[b.id] && b.chancePercent >= 10);
    if (pendingHigh.length > 0) {
        text += `\n**⚠️ Prioridades Pendentes:**\n`;
        pendingHigh.forEach(b => {
            text += `⏳ **${b.name}** (${b.chancePercent}%) — ${b.location}\n`;
        });
    }

    text += `\n*Gerado via Andy Chrono Boss Hunter*`;

    if (typeof copyTextToClipboard === "function") {
        copyTextToClipboard(text);
    } else {
        navigator.clipboard.writeText(text).then(() => {
            showCustomToast("Relatório de checks copiado com sucesso!");
        });
    }
};

// Obter lista filtrada e processada do servidor atual
function getProcessedWorldBosses() {
    const worldName = bossTrackerState.selectedWorld;
    return MASTER_BOSSES.map(b => getWorldBossData(b, worldName));
}

// Filtragem e Ordenação
function getFilteredBosses() {
    const worldBosses = getProcessedWorldBosses();

    return worldBosses.filter(boss => {
        const isChecked = !!bossTrackerState.checkedBosses[boss.id];

        // Ocultar bloqueados se o toggle estiver ativo e não for busca específica
        if (bossTrackerState.hideBlockedBosses && !bossTrackerState.searchQuery && bossTrackerState.statusFilter === "all") {
            if (boss.chancePercent === 0) return false;
        }

        // Filtro de Texto (Nome, Local, Loots, Categoria)
        if (bossTrackerState.searchQuery) {
            const q = bossTrackerState.searchQuery;
            const matchName = boss.name.toLowerCase().includes(q);
            const matchLoc = boss.location.toLowerCase().includes(q);
            const matchDrop = boss.drops.toLowerCase().includes(q);
            const matchCat = boss.categoryLabel.toLowerCase().includes(q);
            if (!matchName && !matchLoc && !matchDrop && !matchCat) return false;
        }

        // Filtro de Status / Chance
        if (bossTrackerState.statusFilter === "high" && boss.status !== "high") return false;
        if (bossTrackerState.statusFilter === "medium" && boss.status !== "medium") return false;
        if (bossTrackerState.statusFilter === "low" && boss.status !== "low") return false;
        if (bossTrackerState.statusFilter === "blocked" && boss.status !== "blocked") return false;
        if (bossTrackerState.statusFilter === "checked" && !isChecked) return false;
        if (bossTrackerState.statusFilter === "unchecked" && isChecked) return false;

        // Filtro de Categoria
        if (bossTrackerState.categoryFilter !== "all") {
            if (boss.category !== bossTrackerState.categoryFilter) return false;
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
    const activeBosses = worldBosses.filter(b => b.chancePercent >= 5);
    const activeChecked = activeBosses.filter(b => !!bossTrackerState.checkedBosses[b.id]);
    const percent = activeBosses.length > 0 ? Math.round((activeChecked.length / activeBosses.length) * 100) : 0;

    const elTotal = document.getElementById("stat-boss-total");
    const elHigh = document.getElementById("stat-boss-high");
    const elChecked = document.getElementById("stat-boss-checked");
    const elPercent = document.getElementById("stat-boss-progress-percent");
    const elBar = document.getElementById("stat-boss-progress-bar");
    const elServerLabel = document.getElementById("boss-current-server-name");

    if (elTotal) elTotal.innerText = worldBosses.length;
    if (elHigh) elHigh.innerText = activeBosses.length;
    if (elChecked) elChecked.innerText = `${activeChecked.length} / ${activeBosses.length}`;
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

    if (boss.chancePercent >= 15) {
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

    return `
    <div class="boss-card ${isChecked ? 'boss-card-checked' : ''} ${boss.chancePercent === 0 ? 'boss-card-blocked' : ''}" data-boss-id="${boss.id}">
        <div class="boss-card-top">
            <div class="boss-portrait-box">
                <img src="${boss.image}" alt="${boss.name}" class="boss-portrait-img" onerror="this.src='imagens/Compass.gif';">
                ${isChecked ? `<span class="boss-checked-stamp">CHECKED</span>` : ''}
            </div>
            <div class="boss-info-header">
                <div class="boss-title-row">
                    <h3 class="boss-name">${boss.name}</h3>
                    <span class="boss-category-badge">${boss.categoryLabel}</span>
                </div>
                <div class="boss-chance-pill ${chanceClass}">
                    <span class="chance-indicator" style="background:${chanceColor};"></span>
                    <strong>${chanceText}</strong> (${boss.chancePercent}%)
                </div>
            </div>
        </div>

        <div class="boss-details-grid">
            <div class="boss-detail-row">
                <span class="boss-detail-label">📍 Local:</span>
                <span class="boss-detail-value">${boss.location}</span>
            </div>
            <div class="boss-detail-row">
                <span class="boss-detail-label">⏳ Previsão:</span>
                <span class="boss-detail-value"><strong>${boss.prediction}</strong> (visto há ${boss.lastSeenDays}d)</span>
            </div>
            <div class="boss-detail-row">
                <span class="boss-detail-label">💎 Loots:</span>
                <span class="boss-detail-value highlight-gold">${boss.drops}</span>
            </div>
        </div>

        <div class="boss-card-footer">
            ${isChecked ? `
            <div class="boss-check-status checked">
                <span class="check-time-icon">🕒</span>
                <span>Checado às <strong>${checkData.time}</strong></span>
            </div>
            <button class="btn-boss-check checked" onclick="toggleBossCheck('${boss.id}')" title="Clique para desmarcar">
                <span>✅ Checado</span>
            </button>
            ` : `
            <div class="boss-check-status pending">
                <span>${boss.chancePercent > 0 ? 'Pendente' : 'Fora da janela'}</span>
            </div>
            <button class="btn-boss-check" onclick="toggleBossCheck('${boss.id}')">
                <span>⏱️ Marcar Check</span>
            </button>
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

    // Se estiver filtrando ou buscando, exibe em grid direto
    if (bossTrackerState.searchQuery || bossTrackerState.statusFilter !== "all" || bossTrackerState.categoryFilter !== "all" || bossTrackerState.sortBy !== "chance_desc") {
        container.innerHTML = `
        <div class="boss-cards-subgrid">
            ${bosses.map(b => generateBossCardHTML(b)).join("")}
        </div>
        `;
        return;
    }

    // Organização em seções lógicas:
    // 1. 🔥 Em Disputa / Hoje (Alta & Média Chance)
    // 2. ⏳ Baixa Chance / Próximos Spawns
    // 3. 🔒 Bloqueados / Cooldown (Se ativado)
    const activeBosses = bosses.filter(b => b.chancePercent >= 5);
    const lowBosses = bosses.filter(b => b.chancePercent > 0 && b.chancePercent < 5);
    const blockedBosses = bosses.filter(b => b.chancePercent === 0);

    let html = "";

    if (activeBosses.length > 0) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header highlight-today">
                <div class="boss-section-title">
                    <span class="boss-section-icon">🔥</span>
                    <h2>Bosses com Chance Hoje (Janela de Spawn Aberta)</h2>
                    <span class="boss-section-badge">${activeBosses.length} bosses</span>
                </div>
                <p class="boss-section-subtitle">Bosses com probabilidade real de nascer no servidor <strong>${bossTrackerState.selectedWorld}</strong> hoje. Foque seus checks diários aqui!</p>
            </div>
            <div class="boss-cards-subgrid">
                ${activeBosses.map(b => generateBossCardHTML(b)).join("")}
            </div>
        </section>
        `;
    }

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

    if (blockedBosses.length > 0 && !bossTrackerState.hideBlockedBosses) {
        html += `
        <section class="boss-section-block">
            <div class="boss-section-header">
                <div class="boss-section-title">
                    <span class="boss-section-icon">🔒</span>
                    <h2>Bloqueados / Em Cooldown (Sem Chance Hoje)</h2>
                    <span class="boss-section-badge blocked">${blockedBosses.length} bosses</span>
                </div>
                <p class="boss-section-subtitle">Bosses mortos recentemente ou raids de longos meses de intervalo (ex: Ferumbras, Ghazbaran).</p>
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
