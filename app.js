// ============================================================
// DADOS COMPLETOS DE TODOS OS IMBUEMENTS DO TIBIA
// Apenas Void, Vampirism e Strike suportam troca por Gold Token (NPC Yana)
// ============================================================
const IMBUEMENTS = {

    // ── OFENSIVOS PRINCIPAIS (suportam Gold Token via NPC Yana) ──────
    void: {
        name: "Void",
        subtitle: "Mana Leech (Armas & Elmos)",
        theme: "void",
        icon: "imagens/Void_(Roubo_de_Mana).gif",
        supportsGoldToken: true,
        items: [
            { id: "rope_belt", name: "Rope Belt", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2500 },
            { id: "silencer_claw", name: "Silencer Claw", qtyBasic: 0, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 3500 },
            { id: "some_grimeleech_wings", name: "Grimeleech Wing", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 12000 }
        ]
    },
    vampirism: {
        name: "Vampirism",
        subtitle: "Life Leech (Armas & Armaduras)",
        theme: "vamp",
        icon: "imagens/Vampirism_(Roubo_de_Vida).gif",
        supportsGoldToken: true,
        items: [
            { id: "vampire_teeth", name: "Vampire Teeth", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2000 },
            { id: "bloody_pincer", name: "Bloody Pincer", qtyBasic: 0, qtyIntricate: 15, qtyPowerful: 15, defaultPrice: 7000 },
            { id: "piece_of_dead_brain", name: "Piece of Dead Brain", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 15000 }
        ]
    },
    strike: {
        name: "Strike",
        subtitle: "Critical Hit (Armas)",
        theme: "strike",
        icon: "imagens/Strike_(Dano_Crítico).gif",
        supportsGoldToken: true,
        items: [
            { id: "protective_charm", name: "Protective Charm", qtyBasic: 20, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 2500 },
            { id: "sabretooth", name: "Sabretooth", qtyBasic: 0, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 4000 },
            { id: "vexclaw_talon", name: "Vexclaw Talon", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 8000 }
        ]
    },

    // ── ELEMENTAL OFENSIVOS (SEM Gold Token) ──────────────────────────
    scorch: {
        name: "Scorch",
        subtitle: "Dano de Fogo (Armas)",
        theme: "fire",
        icon: "imagens/Scorch_(Dano_de_Fogo).gif",
        supportsGoldToken: false,
        items: [
            { id: "fiery_heart", name: "Fiery Heart", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 3000 },
            { id: "green_dragon_scale", name: "Green Dragon Scale", qtyBasic: 0, qtyIntricate: 5, qtyPowerful: 5, defaultPrice: 2000 },
            { id: "demon_horn", name: "Demon Horn", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 20000 }
        ]
    },
    venom: {
        name: "Venom",
        subtitle: "Dano de Terra (Armas)",
        theme: "earth",
        icon: "imagens/Venom_(Dano_de_Terra).gif",
        supportsGoldToken: false,
        items: [
            { id: "swamp_grass", name: "Swamp Grass", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 1000 },
            { id: "poisonous_slime", name: "Poisonous Slime", qtyBasic: 0, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 2000 },
            { id: "slime_heart", name: "Slime Heart", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 2, defaultPrice: 40000 }
        ]
    },
    frost: {
        name: "Frost",
        subtitle: "Dano de Gelo (Armas)",
        theme: "ice",
        icon: "imagens/Frost_(Dano_de_Gelo).gif",
        supportsGoldToken: false,
        items: [
            { id: "frosty_heart", name: "Frosty Heart", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2500 },
            { id: "seacrest_hair", name: "Seacrest Hair", qtyBasic: 0, qtyIntricate: 10, qtyPowerful: 10, defaultPrice: 5000 },
            { id: "polar_bear_paw", name: "Polar Bear Paw", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 8000 }
        ]
    },
    electrify: {
        name: "Electrify",
        subtitle: "Dano de Energia (Armas)",
        theme: "energy",
        icon: "imagens/Electrify_(Dano_de_Energia).gif",
        supportsGoldToken: false,
        items: [
            { id: "rorc_feather", name: "Rorc Feather", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2000 },
            { id: "peacock_feather_fan", name: "Peacock Feather Fan", qtyBasic: 0, qtyIntricate: 5, qtyPowerful: 5, defaultPrice: 8000 },
            { id: "energy_vein", name: "Energy Vein", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 1, defaultPrice: 60000 }
        ]
    },
    reap: {
        name: "Reap",
        subtitle: "Dano de Morte (Armas)",
        theme: "death",
        icon: "imagens/Reap_(Dano_de_Morte).gif",
        supportsGoldToken: false,
        items: [
            { id: "pile_of_grave_earth", name: "Pile of Grave Earth", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 1500 },
            { id: "demonic_skeletal_hand", name: "Demonic Skeletal Hand", qtyBasic: 0, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 3000 },
            { id: "petrified_scream", name: "Petrified Scream", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 15000 }
        ]
    },

    // ── DEFENSIVOS (SEM Gold Token) ──────────────────────────────────
    lich_shroud: {
        name: "Lich Shroud",
        subtitle: "Proteção Morte (Armaduras)",
        theme: "death",
        icon: "imagens/Lich_Shroud_(Proteção_de_Morte).gif",
        supportsGoldToken: false,
        items: [
            { id: "flask_of_embalming_fluid", name: "Flask of Embalming Fluid", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2000 },
            { id: "gloom_wolf_fur", name: "Gloom Wolf Fur", qtyBasic: 0, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 4000 },
            { id: "mystical_hourglass", name: "Mystical Hourglass", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 25000 }
        ]
    },
    snake_skin: {
        name: "Snake Skin",
        subtitle: "Proteção Terra (Armaduras)",
        theme: "earth",
        icon: "imagens/Snake_Skin_(Proteção_de_Terra).gif",
        supportsGoldToken: false,
        items: [
            { id: "piece_of_swampling_wood", name: "Piece of Swampling Wood", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 1500 },
            { id: "snake_skin_item", name: "Snake Skin", qtyBasic: 0, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 3000 },
            { id: "brimstone_fang", name: "Brimstone Fang", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 10, defaultPrice: 8000 }
        ]
    },
    dragon_hide: {
        name: "Dragon Hide",
        subtitle: "Proteção Fogo (Armaduras)",
        theme: "fire",
        icon: "imagens/Dragon_Hide_(Proteção_de_Fogo).gif",
        supportsGoldToken: false,
        items: [
            { id: "green_dragon_leather", name: "Green Dragon Leather", qtyBasic: 20, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 2000 },
            { id: "blazing_bone", name: "Blazing Bone", qtyBasic: 0, qtyIntricate: 10, qtyPowerful: 10, defaultPrice: 5000 },
            { id: "draken_sulphur", name: "Draken Sulphur", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 20000 }
        ]
    },
    quara_scale: {
        name: "Quara Scale",
        subtitle: "Proteção Gelo (Armaduras)",
        theme: "ice",
        icon: "imagens/Quara_Scale_(Proteção_de_Gelo).gif",
        supportsGoldToken: false,
        items: [
            { id: "winter_wolf_fur", name: "Winter Wolf Fur", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2000 },
            { id: "thick_fur", name: "Thick Fur", qtyBasic: 0, qtyIntricate: 15, qtyPowerful: 15, defaultPrice: 4000 },
            { id: "deepling_wart", name: "Deepling Wart", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 10, defaultPrice: 6000 }
        ]
    },
    cloud_fabric: {
        name: "Cloud Fabric",
        subtitle: "Proteção Energia (Armaduras)",
        theme: "energy",
        icon: "imagens/Cloud_Fabric_(Proteção_de_Energia).gif",
        supportsGoldToken: false,
        items: [
            { id: "wyvern_talisman", name: "Wyvern Talisman", qtyBasic: 20, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 2500 },
            { id: "crawler_head_plating", name: "Crawler Head Plating", qtyBasic: 0, qtyIntricate: 15, qtyPowerful: 15, defaultPrice: 4000 },
            { id: "wyrm_scale", name: "Wyrm Scale", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 10, defaultPrice: 8000 }
        ]
    },
    demon_presence: {
        name: "Demon Presence",
        subtitle: "Proteção Santo (Armaduras)",
        theme: "holy",
        icon: "imagens/Demon_Presence_(Proteção_de_Sagrado).gif",
        supportsGoldToken: false,
        items: [
            { id: "cultish_robe", name: "Cultish Robe", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2000 },
            { id: "cultish_mask", name: "Cultish Mask", qtyBasic: 0, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2500 },
            { id: "hellspawn_tail", name: "Hellspawn Tail", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 20, defaultPrice: 5000 }
        ]
    },
    vibrancy: {
        name: "Vibrancy",
        subtitle: "Remove Paralisia (Botas)",
        theme: "prot",
        icon: "imagens/Vibrancy_(Remoção_de_Paralisia).gif",
        supportsGoldToken: false,
        items: [
            { id: "wereboar_hoof", name: "Wereboar Hoof", qtyBasic: 20, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 3000 },
            { id: "crystallized_anger", name: "Crystallized Anger", qtyBasic: 0, qtyIntricate: 15, qtyPowerful: 15, defaultPrice: 6000 },
            { id: "quill", name: "Quill", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 20000 }
        ]
    },

    // ── HABILIDADES (SEM Gold Token) ─────────────────────────────────
    epiphany: {
        name: "Epiphany",
        subtitle: "Magic Level (Magia)",
        theme: "skill",
        icon: "imagens/Epiphany_(Skillboost_de_Nível_Mágico).gif",
        supportsGoldToken: false,
        items: [
            { id: "elvish_talisman", name: "Elvish Talisman", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 800 },
            { id: "broken_shamanic_staff", name: "Broken Shamanic Staff", qtyBasic: 0, qtyIntricate: 15, qtyPowerful: 15, defaultPrice: 3000 },
            { id: "strand_of_medusa_hair", name: "Strand of Medusa Hair", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 15, defaultPrice: 5000 }
        ]
    },
    slash: {
        name: "Slash",
        subtitle: "Sword Fighting (Espadas)",
        theme: "skill",
        icon: "imagens/Slash_(Skillboost_de_Espada).gif",
        supportsGoldToken: false,
        items: [
            { id: "lions_mane", name: "Lion's Mane", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2000 },
            { id: "moohtah_shell", name: "Mooh'tah Shell", qtyBasic: 0, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 3000 },
            { id: "war_crystal", name: "War Crystal", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 5, defaultPrice: 15000 }
        ]
    },
    chop: {
        name: "Chop",
        subtitle: "Axe Fighting (Machados)",
        theme: "skill",
        icon: "imagens/Chop_(Skillboost_de_Machado).gif",
        supportsGoldToken: false,
        items: [
            { id: "orc_tooth", name: "Orc Tooth", qtyBasic: 20, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 1500 },
            { id: "battle_stone", name: "Battle Stone", qtyBasic: 0, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2500 },
            { id: "moohtant_horn", name: "Moohtant Horn", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 20, defaultPrice: 5000 }
        ]
    },
    bash: {
        name: "Bash",
        subtitle: "Club Fighting (Clavas)",
        theme: "skill",
        icon: "imagens/Bash_(Skillboost_de_Clava).gif",
        supportsGoldToken: false,
        items: [
            { id: "cyclops_toe", name: "Cyclops Toe", qtyBasic: 20, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 2000 },
            { id: "ogre_nose_ring", name: "Ogre Nose Ring", qtyBasic: 0, qtyIntricate: 15, qtyPowerful: 15, defaultPrice: 4000 },
            { id: "warmasters_wristguards", name: "Warmaster's Wristguards", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 10, defaultPrice: 10000 }
        ]
    },
    precision: {
        name: "Precision",
        subtitle: "Distance Fighting (Arco)",
        theme: "skill",
        icon: "imagens/Precision_(Skillboost_de_Distância).gif",
        supportsGoldToken: false,
        items: [
            { id: "elven_scouting_glass", name: "Elven Scouting Glass", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 2000 },
            { id: "elven_hoof", name: "Elven Hoof", qtyBasic: 0, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 3500 },
            { id: "metal_spike", name: "Metal Spike", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 10, defaultPrice: 8000 }
        ]
    },
    blockade: {
        name: "Blockade",
        subtitle: "Shielding (Escudos)",
        theme: "skill",
        icon: "imagens/Blockade_(Skillboost_de_Escudo).gif",
        supportsGoldToken: false,
        items: [
            { id: "piece_of_scarab_shell", name: "Piece of Scarab Shell", qtyBasic: 20, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 1500 },
            { id: "brimstone_shell", name: "Brimstone Shell", qtyBasic: 0, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 3000 },
            { id: "frazzle_skin", name: "Frazzle Skin", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 25, defaultPrice: 4000 }
        ]
    },
    featherweight: {
        name: "Featherweight",
        subtitle: "Capacidade de Carga (Armaduras)",
        theme: "prot",
        icon: "imagens/Featherweight_(Aumento_de_Capacidade).gif",
        supportsGoldToken: false,
        items: [
            { id: "deepling_wart2", name: "Deepling Wart", qtyBasic: 25, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 6000 },
            { id: "demon_dust", name: "Demon Dust", qtyBasic: 0, qtyIntricate: 25, qtyPowerful: 25, defaultPrice: 8000 },
            { id: "flask_of_embalming_fluid2", name: "Flask of Embalming Fluid", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 15, defaultPrice: 2000 }
        ]
    },
    swiftness: {
        name: "Swiftness",
        subtitle: "Velocidade (Botas)",
        theme: "prot",
        icon: "imagens/Swiftness_(Skillboost_de_Velocidade).gif",
        supportsGoldToken: false,
        items: [
            { id: "guardian_tassels", name: "Guardian Tassels", qtyBasic: 20, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 3000 },
            { id: "wyvern_talisman2", name: "Wyvern Talisman", qtyBasic: 0, qtyIntricate: 20, qtyPowerful: 20, defaultPrice: 2500 },
            { id: "red_piece_of_cloth", name: "Red Piece of Cloth", qtyBasic: 0, qtyIntricate: 0, qtyPowerful: 10, defaultPrice: 5000 }
        ]
    }
};

// ============================================================
// ESTADO GLOBAL
// ============================================================
let state = {
    prices: { gold_token: 40000 },
    activeTiers: {}
};

Object.keys(IMBUEMENTS).forEach(k => { state.activeTiers[k] = "powerful"; });

// ============================================================
// LOCALSTORAGE
// ============================================================
const STORAGE_KEY = "tibia_imbui_v7";

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.prices)      state.prices      = { ...state.prices,      ...parsed.prices };
            if (parsed.activeTiers) state.activeTiers = { ...state.activeTiers, ...parsed.activeTiers };
        }
    } catch (e) {
        console.warn("[ICA] Não foi possível carregar os dados salvos:", e);
    }
}

function initDefaultPrices() {
    if (state.prices.gold_token === undefined) state.prices.gold_token = 40000;
    Object.values(IMBUEMENTS).forEach(imbu => {
        imbu.items.forEach(item => {
            if (state.prices[item.id] === undefined)
                state.prices[item.id] = item.defaultPrice;
        });
    });
}

let saveTimer = null;
function saveToLocalStorage() {
    // Debounce: aguarda 400ms sem alterações antes de salvar
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                prices: state.prices,
                activeTiers: state.activeTiers
            }));
            showSaveIndicator();
        } catch (e) {
            console.warn("[ICA] Não foi possível salvar os dados:", e);
        }
    }, 400);
}

function showSaveIndicator() {
    let toast = document.getElementById("save-toast");
    if (!toast) return;
    toast.classList.add("visible");
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove("visible"), 2000);
}

// ============================================================
// CÁLCULOS
// ============================================================
function formatGP(value) {
    return value.toLocaleString('pt-BR') + ' gp';
}

function calculateOptions(imbuKey, tier) {
    const imbu = IMBUEMENTS[imbuKey];
    const gtPrice = state.prices.gold_token;
    const p1 = state.prices[imbu.items[0].id] || 0;
    const p2 = state.prices[imbu.items[1].id] || 0;
    const p3 = state.prices[imbu.items[2].id] || 0;

    let q1 = 0, q2 = 0, q3 = 0;
    if (tier === "basic") {
        q1 = imbu.items[0].qtyBasic;
    } else if (tier === "intricate") {
        q1 = imbu.items[0].qtyIntricate;
        q2 = imbu.items[1].qtyIntricate;
    } else if (tier === "powerful") {
        q1 = imbu.items[0].qtyPowerful;
        q2 = imbu.items[1].qtyPowerful;
        q3 = imbu.items[2].qtyPowerful;
    }

    const options = [];
    const useGT = imbu.supportsGoldToken;

    if (tier === "basic") {
        options.push({ id: "market", title: "Apenas Market", desc: `${q1}x ${imbu.items[0].name}`, cost: q1 * p1 });
        if (useGT) {
            options.push({ id: "gt", title: "2 Gold Tokens", desc: "Troca completa na NPC Yana", cost: 2 * gtPrice });
        }
    } else if (tier === "intricate") {
        options.push({ id: "market", title: "Apenas Market", desc: `${q1}x ${imbu.items[0].name} + ${q2}x ${imbu.items[1].name}`, cost: (q1 * p1) + (q2 * p2) });
        if (useGT) {
            options.push({ id: "gt", title: "4 Gold Tokens", desc: "Troca completa na NPC Yana", cost: 4 * gtPrice });
            options.push({ id: "mixed", title: "Misto (2 GT + Market)", desc: `2 GT (Item 1) + ${q2}x ${imbu.items[1].name} (Market)`, cost: (2 * gtPrice) + (q2 * p2) });
        }
    } else if (tier === "powerful") {
        options.push({ id: "market", title: "Apenas Market", desc: `${q1}x ${imbu.items[0].name} + ${q2}x ${imbu.items[1].name} + ${q3}x ${imbu.items[2].name}`, cost: (q1 * p1) + (q2 * p2) + (q3 * p3) });
        if (useGT) {
            options.push({ id: "gt", title: "6 Gold Tokens", desc: "Troca completa na NPC Yana", cost: 6 * gtPrice });
            options.push({ id: "mixed_basic", title: "Misto (2 GT + Market)", desc: `2 GT (Item 1) + ${q2}x ${imbu.items[1].name} + ${q3}x ${imbu.items[2].name} (Market)`, cost: (2 * gtPrice) + (q2 * p2) + (q3 * p3) });
            options.push({ id: "mixed_intr", title: "Misto (4 GT + Market)", desc: `4 GT (Itens 1 e 2) + ${q3}x ${imbu.items[2].name} (Market)`, cost: (4 * gtPrice) + (q3 * p3) });
        }
    }

    options.sort((a, b) => a.cost - b.cost);
    options.forEach((opt, i) => { opt.isBest = i === 0; });
    return options;
}

// ============================================================
// RENDERIZAÇÃO
// ============================================================
function renderResultsCard(imbuKey) {
    const cardEl = document.getElementById(`card-${imbuKey}`);
    if (!cardEl) return;

    const activeTier = state.activeTiers[imbuKey];
    const options = calculateOptions(imbuKey, activeTier);

    cardEl.querySelectorAll('.tier-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tier === activeTier);
    });

    const optionsContainer = cardEl.querySelector('.options-list');
    optionsContainer.innerHTML = "";
    options.forEach(opt => {
        const row = document.createElement('div');
        row.className = `option-row ${opt.isBest ? 'best-option' : ''}`;
        row.innerHTML = `
            ${opt.isBest ? '<span class="option-badge">Melhor Opção</span>' : ''}
            <div class="option-info">
                <span class="option-title">${opt.title}</span>
                <span class="option-desc">${opt.desc}</span>
            </div>
            <span class="option-price">${formatGP(opt.cost)}</span>
        `;
        optionsContainer.appendChild(row);
    });

    const savingsContainer = cardEl.querySelector('.savings-container');
    const diff = Math.max(...options.map(o => o.cost)) - options[0].cost;
    if (diff > 0) {
        savingsContainer.style.display = 'block';
        savingsContainer.innerHTML = `<div class="savings-card"><span class="savings-label">Economia Máxima:</span><span class="savings-value">-${formatGP(diff)}</span></div>`;
    } else {
        savingsContainer.style.display = 'none';
    }
}

// ============================================================
// SINCRONIZAR INPUTS
// ============================================================
function syncInputsFromState() {
    const gtInput = document.getElementById("gold-token-price");
    if (gtInput && state.prices.gold_token !== undefined) gtInput.value = state.prices.gold_token;

    Object.entries(state.prices).forEach(([itemId, price]) => {
        if (itemId !== "gold_token") {
            const input = document.getElementById(`input-${itemId}`);
            if (input) input.value = price;
        }
    });
}

function recalculateAll() {
    Object.keys(IMBUEMENTS).forEach(key => renderResultsCard(key));
    saveToLocalStorage(); // Salva automaticamente após cada alteração
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function setupEventListeners() {
    const gtInput = document.getElementById("gold-token-price");
    if (gtInput) {
        gtInput.addEventListener("input", e => {
            state.prices.gold_token = parseInt(e.target.value) || 0;
            recalculateAll();
        });
    }

    Object.values(IMBUEMENTS).forEach(imbu => {
        imbu.items.forEach(item => {
            const input = document.getElementById(`input-${item.id}`);
            if (input) {
                // 'input' dispara enquanto digita, 'change' garante salvamento ao sair do campo
                const handler = e => {
                    state.prices[item.id] = parseInt(e.target.value) || 0;
                    recalculateAll();
                };
                input.addEventListener("input",  handler);
                input.addEventListener("change", handler);
            }
        });
    });

    document.querySelectorAll('.tier-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const imbuKey = e.target.dataset.imbu;
            const tier = e.target.dataset.tier;
            if (imbuKey && tier) {
                state.activeTiers[imbuKey] = tier;
                renderResultsCard(imbuKey);
                saveToLocalStorage();
            }
        });
    });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    loadFromLocalStorage();
    initDefaultPrices();
    syncInputsFromState();
    recalculateAll();
    setupEventListeners();
    
    // Inicializações do Loot Splitter
    initTabsNav();
    initLootSplitter();
});

// ============================================================
// SISTEMA DE NAVEGAÇÃO POR ABAS (SPA TABS)
// ============================================================
window.switchTab = function(targetTab) {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const heroLogo = document.getElementById("hero-logo-img");
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const heroSection = document.querySelector(".hero");

    tabButtons.forEach(b => {
        if (b.dataset.tab === targetTab) {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });

    tabContents.forEach(content => {
        if (content.id === targetTab) {
            content.classList.add("active");
            content.style.display = "block";
        } else {
            content.classList.remove("active");
            content.style.display = "none";
        }
    });

    // Alterar dinamicamente os textos e a imagem do cabeçalho Hero
    if (targetTab === "tab-imbui") {
        if (heroLogo) {
            heroLogo.src = "imagens/Imbuing_Shrine.gif";
            heroLogo.alt = "Imbuing Shrine";
        }
        if (heroTitle) heroTitle.innerText = "Imbui Calculator";
        if (heroSubtitle) heroSubtitle.innerText = "Compare os custos de mercado dos creature products contra o valor dos Gold Tokens e descubra a melhor combinação econômica para seus imbuements.";
        if (heroSection) {
            heroSection.style.backgroundImage = "linear-gradient(180deg, rgba(13, 17, 23, 0.7) 0%, rgba(13, 17, 23, 0.9) 100%), url('imagens/hero_bg.jpg')";
        }
    } else if (targetTab === "tab-loot") {
        if (heroLogo) {
            heroLogo.src = "imagens/Gold_Coin.gif";
            heroLogo.alt = "Loot Splitting";
        }
        if (heroTitle) heroTitle.innerText = "Party Loot Splitter";
        if (heroSubtitle) heroSubtitle.innerText = "Calcule a divisão de loot da party, descontando as despesas e gerando os comandos bancários automaticamente.";
        if (heroSection) {
            heroSection.style.backgroundImage = "linear-gradient(180deg, rgba(13, 17, 23, 0.7) 0%, rgba(13, 17, 23, 0.9) 100%), url('imagens/loot_bg.jpg')";
        }
    }
};

function initTabsNav() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const button = e.target.closest(".tab-btn") || btn;
            const targetTab = button.dataset.tab;
            if (targetTab && typeof window.switchTab === "function") {
                window.switchTab(targetTab);
            }
        });
    });
}

// ============================================================
// LÓGICA E PARSER DO PARTY LOOT SPLITTER
// ============================================================
let lootState = {
    history: []
};

function initLootSplitter() {
    loadLootHistory();
    renderLootHistory();

    const btnCalculate = document.getElementById("btn-calculate-loot");
    const btnClear = document.getElementById("btn-clear-loot");
    const btnClearHistory = document.getElementById("btn-clear-history");

    if (btnCalculate) {
        btnCalculate.addEventListener("click", () => {
            const rawText = document.getElementById("loot-log-input").value;
            if (!rawText.trim()) return;
            
            const data = parseTibiaLog(rawText);
            if (data.players.length === 0) {
                alert("Nenhum jogador encontrado no log. Verifique se copiou o log completo do Party Hunt Analyser.");
                return;
            }

            calculateLootSplit(data);
        });
    }

    if (btnClear) {
        btnClear.addEventListener("click", () => {
            document.getElementById("loot-log-input").value = "";
            document.getElementById("loot-results-panel").style.display = "none";
            document.getElementById("loot-details-panel").style.display = "none";
            document.getElementById("loot-initial-banner").style.display = "block";
            
            // Resetar stats
            document.getElementById("stat-total-loot").innerText = "0 gp";
            document.getElementById("stat-total-supplies").innerText = "0 gp";
            document.getElementById("stat-total-balance").innerText = "0 gp";
            document.getElementById("stat-player-share").innerText = "0 gp";
        });
    }

    if (btnClearHistory) {
        btnClearHistory.addEventListener("click", () => {
            if (confirm("Tem certeza que deseja apagar todo o histórico de hunts?")) {
                lootState.history = [];
                saveLootHistory();
                renderLootHistory();
            }
        });
    }
}

// Limpa strings numéricas como "1,500,000" ou "1.500.000" para inteiros
function cleanNumber(str) {
    return parseInt(str.replace(/[^0-9-]/g, '')) || 0;
}

// Parser do log do Party Hunt Analyser
function parseTibiaLog(text) {
    let totalLoot = 0;
    let totalSupplies = 0;
    let totalBalance = 0;
    let players = [];
    let duration = "";

    if (!text || !text.trim()) {
        return { totalLoot, totalSupplies, totalBalance, players, duration };
    }

    const cleanNum = str => parseInt(str.replace(/[^0-9-]/g, '')) || 0;

    // Duração da sessão
    const sessionMatch = text.match(/Session:\s*([0-9]+:[0-9]+h?)/i);
    if (sessionMatch) {
        duration = sessionMatch[1].trim();
    }

    // Tentar parsing linha a linha (ideal para logs com quebra de linha)
    const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    let inPlayerSection = false;
    let currentPlayer = null;

    for (let i = 0; i < rawLines.length; i++) {
        const line = rawLines[i];
        const lower = line.toLowerCase();

        if (lower.startsWith('session data:') || lower.startsWith('session:') || lower.startsWith('loot type:')) {
            continue;
        }

        if (!inPlayerSection) {
            if (lower.startsWith('loot:') || lower.startsWith('looting:')) {
                totalLoot = cleanNum(line.split(':')[1] || '0');
            } else if (lower.startsWith('supplies:') || lower.startsWith('gastos:') || lower.startsWith('suprimentos:')) {
                totalSupplies = cleanNum(line.split(':')[1] || '0');
            } else if (lower.startsWith('balance:') || lower.startsWith('saldo:') || lower.startsWith('balanço:')) {
                totalBalance = cleanNum(line.split(':')[1] || '0');
                inPlayerSection = true;
            }
        } else {
            const isLoot = lower.startsWith('loot:') || lower.startsWith('looting:');
            const isSupplies = lower.startsWith('supplies:') || lower.startsWith('gastos:') || lower.startsWith('suprimentos:');
            const isBalance = lower.startsWith('balance:') || lower.startsWith('saldo:') || lower.startsWith('balanço:');
            const isDamage = lower.startsWith('damage:') || lower.startsWith('dano:');
            const isHealing = lower.startsWith('healing:') || lower.startsWith('cura:');

            if (isLoot || isSupplies || isBalance || isDamage || isHealing) {
                if (currentPlayer) {
                    const val = cleanNum(line.split(':')[1] || '0');
                    if (isLoot) currentPlayer.loot = val;
                    else if (isSupplies) currentPlayer.supplies = val;
                    else if (isBalance) currentPlayer.balance = val;
                    else if (isDamage) currentPlayer.damage = val;
                    else if (isHealing) currentPlayer.healing = val;
                }
            } else {
                let playerName = line.replace(/\s*\(Leader\)$/i, '').replace(/\s*\(.*\)$/i, '').trim();
                if (playerName && isNaN(playerName)) {
                    currentPlayer = {
                        name: playerName,
                        loot: 0,
                        supplies: 0,
                        balance: 0,
                        damage: 0,
                        healing: 0
                    };
                    players.push(currentPlayer);
                }
            }
        }
    }

    // Se o log veio colado em uma única linha (sem \n), faz o fallback inserindo quebras antes das palavras-chave
    if (players.length === 0) {
        const formattedText = text
            .replace(/\r/g, '')
            .replace(/\t/g, '\n')
            .replace(/(Session data:|Session:|Loot Type:|Loot:|Looting:|Supplies:|Gastos:|Suministros:|Suprimentos:|Balance:|Saldo:|Balanço:|Damage:|Dano:|Healing:|Cura:)/gi, '\n$1');

        const formattedLines = formattedText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        let headerBalanceFound = false;
        currentPlayer = null;

        for (let i = 0; i < formattedLines.length; i++) {
            const line = formattedLines[i];
            const lower = line.toLowerCase();

            if (lower.startsWith('session data:') || lower.startsWith('session:') || lower.startsWith('loot type:')) {
                continue;
            }

            const isLoot = lower.startsWith('loot:') || lower.startsWith('looting:');
            const isSupplies = lower.startsWith('supplies:') || lower.startsWith('gastos:') || lower.startsWith('suprimentos:');
            const isBalance = lower.startsWith('balance:') || lower.startsWith('saldo:') || lower.startsWith('balanço:');
            const isDamage = lower.startsWith('damage:') || lower.startsWith('dano:');
            const isHealing = lower.startsWith('healing:') || lower.startsWith('cura:');

            if (!headerBalanceFound) {
                if (isLoot) totalLoot = cleanNum(line.split(':')[1] || '0');
                else if (isSupplies) totalSupplies = cleanNum(line.split(':')[1] || '0');
                else if (isBalance) {
                    totalBalance = cleanNum(line.split(':')[1] || '0');
                    headerBalanceFound = true;
                }
            } else {
                if (isLoot || isSupplies || isBalance || isDamage || isHealing) {
                    if (currentPlayer) {
                        const val = cleanNum(line.split(':')[1] || '0');
                        if (isLoot) currentPlayer.loot = val;
                        else if (isSupplies) currentPlayer.supplies = val;
                        else if (isBalance) currentPlayer.balance = val;
                        else if (isDamage) currentPlayer.damage = val;
                        else if (isHealing) currentPlayer.healing = val;
                    }
                } else {
                    let playerName = line.replace(/\s*\(Leader\)$/i, '').replace(/\s*\(.*\)$/i, '').trim();
                    if (playerName && isNaN(playerName)) {
                        currentPlayer = {
                            name: playerName,
                            loot: 0,
                            supplies: 0,
                            balance: 0,
                            damage: 0,
                            healing: 0
                        };
                        players.push(currentPlayer);
                    }
                }
            }
        }
    }

    // Fallbacks para totais gerais
    if (totalLoot === 0 && players.length > 0) {
        totalLoot = players.reduce((acc, p) => acc + p.loot, 0);
    }
    if (totalSupplies === 0 && players.length > 0) {
        totalSupplies = players.reduce((acc, p) => acc + p.supplies, 0);
    }
    totalBalance = totalLoot - totalSupplies;

    return {
        totalLoot,
        totalSupplies,
        totalBalance,
        players,
        duration
    };
}

// Formato resumido tipo 1.23kk ou 615k
function formatShortGP(val) {
    const absVal = Math.abs(val);
    if (absVal >= 1000000) {
        return (val / 1000000).toFixed(2).replace(/\.00$/, '') + 'kk';
    } else if (absVal >= 1000) {
        return Math.round(val / 1000) + 'k';
    }
    return val + ' gp';
}

// Executa os cálculos e gera as transferências bancárias
function calculateLootSplit(data, saveToHistory = true) {
    const totalLoot = data.totalLoot;
    const totalSupplies = data.totalSupplies;
    const totalBalance = data.totalBalance;
    const playersCount = data.players.length;
    const duration = data.duration;
    
    // Divisão igual do balanço líquido
    const sharePerPlayer = Math.floor(totalBalance / playersCount);
    
    // Atualiza Stats no DOM
    document.getElementById("stat-total-loot").innerText = formatGP(totalLoot);
    document.getElementById("stat-total-supplies").innerText = formatGP(totalSupplies);
    
    const balEl = document.getElementById("stat-total-balance");
    balEl.innerText = formatGP(totalBalance);
    balEl.className = `stat-value ${totalBalance >= 0 ? 'text-green' : 'text-red'}`;

    const shareEl = document.getElementById("stat-player-share");
    shareEl.innerText = formatGP(sharePerPlayer);
    shareEl.className = `stat-value ${sharePerPlayer >= 0 ? 'text-green' : 'text-red'}`;

    // Painel Detalhado de Jogadores
    const tbody = document.getElementById("players-table-body");
    tbody.innerHTML = "";
    
    // Determinar quem deve receber e quem deve pagar
    let debtors = []; // Quem deve pagar (tem saldo positivo acima do esperado)
    let creditors = []; // Quem deve receber (tem saldo menor que o esperado)
    
    data.players.forEach(p => {
        const currentBalance = p.loot - p.supplies;
        // Payout esperado: despesa do player + lucro/prejuízo compartilhado
        const expectedPayout = p.supplies + sharePerPlayer;
        const diff = p.loot - expectedPayout;
        
        // Adiciona à tabela
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="player-name-cell">${p.name}</td>
            <td>${formatGP(p.loot)}</td>
            <td class="text-red">${formatGP(p.supplies)}</td>
            <td class="${currentBalance >= 0 ? 'text-green' : 'text-red'}">${formatGP(currentBalance)}</td>
            <td class="${diff >= 0 ? 'text-red' : 'text-green'}">
                ${diff > 0 ? `Deve Pagar: ${formatGP(diff)}` : diff < 0 ? `Deve Receber: ${formatGP(Math.abs(diff))}` : 'Quite'}
            </td>
        `;
        tbody.appendChild(row);
        
        if (diff > 0) {
            debtors.push({ name: p.name, amount: diff });
        } else if (diff < 0) {
            creditors.push({ name: p.name, amount: Math.abs(diff) });
        }
    });

    // Algoritmo de Transferências Bancárias otimizado
    let transfers = [];
    let dIdx = 0;
    let cIdx = 0;
    
    while (dIdx < debtors.length && cIdx < creditors.length) {
        let debtor = debtors[dIdx];
        let creditor = creditors[cIdx];
        
        let amountToTransfer = Math.min(debtor.amount, creditor.amount);
        
        if (amountToTransfer > 0) {
            transfers.push({
                from: debtor.name,
                to: creditor.name,
                amount: amountToTransfer
            });
            
            debtor.amount -= amountToTransfer;
            creditor.amount -= amountToTransfer;
        }
        
        if (debtor.amount === 0) dIdx++;
        if (creditor.amount === 0) cIdx++;
    }

    // Gerar Resumo de Análise Textual (Loot Split em Português)
    const summaryEl = document.getElementById("loot-analysis-summary");
    if (summaryEl) {
        let summaryHTML = "";
        
        // Lucro total e por jogador
        summaryHTML += `<p><strong>Lucro Total da Hunt:</strong> ${formatGP(totalBalance)} (aprox. <strong>${formatGP(sharePerPlayer)}</strong> para cada jogador)</p>`;
        
        // Duração da sessão e lucro por hora
        if (duration) {
            const dMatch = duration.match(/([0-9]+):([0-9]+)/);
            if (dMatch) {
                const hrs = parseInt(dMatch[1]) + (parseInt(dMatch[2]) || 0) / 60;
                if (hrs > 0) {
                    const sharePerHour = Math.round(sharePerPlayer / hrs);
                    summaryHTML += `<p><strong>Duração da Hunt:</strong> ${duration} (aprox. <strong>${formatGP(sharePerHour)}</strong> por hora para cada)</p>`;
                }
            }
        }
        
        // Divisão de Dano
        const totalDamage = data.players.reduce((sum, p) => sum + (p.damage || 0), 0);
        if (totalDamage > 0) {
            const damageSorted = [...data.players].sort((a, b) => (b.damage || 0) - (a.damage || 0));
            const dmgParts = damageSorted.map(p => {
                const pct = (((p.damage || 0) / totalDamage) * 100).toFixed(1);
                return `${p.name}: ${pct}%`;
            });
            summaryHTML += `<p><strong>Divisão de Dano:</strong> ${dmgParts.join(' | ')}</p>`;
        }
        
        summaryEl.innerHTML = summaryHTML;
    }

    // Exibe comandos de transferência
    const commandsContainer = document.getElementById("bank-commands-container");
    commandsContainer.innerHTML = "";
    
    if (transfers.length === 0) {
        commandsContainer.innerHTML = `<p class="empty-history-text">Tudo resolvido! Nenhuma transferência é necessária.</p>`;
    } else {
        transfers.forEach(t => {
            const commandText = `transfer ${t.amount} to ${t.to}`;
            const box = document.createElement("div");
            box.className = "bank-command-box";
            box.innerHTML = `
                <div class="command-info">
                    <span style="color:var(--text-primary); font-size:0.95rem; font-weight: 600; display:block;">
                        <strong>${t.from}</strong> deve transferir <strong>${formatGP(t.amount)}</strong> para <strong>${t.to}</strong>
                    </span>
                    <div class="command-text" style="margin-top: 4px; font-weight: 700; color: var(--gold);">${commandText}</div>
                </div>
                <button class="btn-copy-command" onclick="copyTextToClipboard('${commandText}')">Copiar</button>
            `;
            commandsContainer.appendChild(box);
        });
    }

    // Altera visibilidade dos painéis
    document.getElementById("loot-results-panel").style.display = "block";
    document.getElementById("loot-details-panel").style.display = "block";
    document.getElementById("loot-initial-banner").style.display = "none";

    // Adicionar ao histórico de hunts
    if (saveToHistory) {
        saveHuntToHistory(data);
    }
}

// Copiar comando bancário com feedback visual (Toast)
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showCustomToast("Comando copiado para a área de transferência!");
    }).catch(err => {
        console.error("Não foi possível copiar o texto: ", err);
    });
}

// Exibe um toast temporário personalizado
function showCustomToast(message) {
    let toast = document.getElementById("save-toast");
    if (toast) {
        toast.querySelector("span:not(.save-toast-icon)").innerText = message;
        toast.classList.add("visible");
        clearTimeout(toast._hideTimer);
        toast._hideTimer = setTimeout(() => {
            toast.classList.remove("visible");
            // Restaura texto original
            setTimeout(() => {
                toast.querySelector("span:not(.save-toast-icon)").innerText = "Preços salvos!";
            }, 300);
        }, 2500);
    }
}

// ============================================================
// PERSISTÊNCIA E EXIBIÇÃO DE HISTÓRICO DE HUNTS
// ============================================================
const HISTORY_STORAGE_KEY = "tibia_hunts_history_v1";

function saveHuntToHistory(data) {
    const timestamp = new Date();
    const formattedDate = timestamp.toLocaleDateString("pt-BR") + " " + timestamp.toLocaleTimeString("pt-BR", {hour: '2-digit', minute:'2-digit'});
    
    const newHunt = {
        id: "hunt_" + Date.now(),
        date: formattedDate,
        loot: data.totalLoot,
        supplies: data.totalSupplies,
        balance: data.totalBalance,
        playersCount: data.players.length,
        duration: data.duration || "",
        players: data.players.map(p => ({
            name: p.name,
            loot: p.loot,
            supplies: p.supplies,
            balance: p.loot - p.supplies,
            damage: p.damage || 0,
            healing: p.healing || 0
        })),
        rawText: data.rawText || ""
    };

    lootState.history.unshift(newHunt); // Adiciona no início da lista
    saveLootHistory();
    renderLootHistory();
}

function loadLootHistory() {
    try {
        const saved = localStorage.getItem(HISTORY_STORAGE_KEY);
        if (saved) {
            lootState.history = JSON.parse(saved);
        }
    } catch (e) {
        console.warn("[ICA] Erro ao carregar histórico de hunts:", e);
    }
}

function saveLootHistory() {
    try {
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(lootState.history));
    } catch (e) {
        console.warn("[ICA] Erro ao salvar histórico de hunts:", e);
    }
}

window.toggleHistoryDetails = function(id) {
    const details = document.getElementById("details-hunt-" + id);
    if (!details) return;
    const isExpanded = details.style.display === "block";
    
    // Collapse all other history item details
    document.querySelectorAll(".history-item-details").forEach(el => {
        if (el.id !== "details-hunt-" + id) {
            el.style.display = "none";
            el.closest(".history-item").classList.remove("active-history-item");
        }
    });

    // Toggle this one
    if (isExpanded) {
        details.style.display = "none";
        details.closest(".history-item").classList.remove("active-history-item");
    } else {
        details.style.display = "block";
        details.closest(".history-item").classList.add("active-history-item");
    }
};

window.loadHuntFromHistory = function(id) {
    const hunt = lootState.history.find(h => h.id === id);
    if (!hunt) return;

    // Restore text to input field
    const inputArea = document.getElementById("loot-log-input");
    if (inputArea) {
        inputArea.value = hunt.rawText || "";
    }

    // Call calculateLootSplit with this saved hunt's structure (but tell it not to save to history)
    calculateLootSplit({
        totalLoot: hunt.loot,
        totalSupplies: hunt.supplies,
        totalBalance: hunt.balance,
        players: hunt.players,
        duration: hunt.duration || ""
    }, false);

    // Visual indicators
    document.querySelectorAll(".history-item").forEach(item => {
        item.classList.remove("active-history-item");
    });
    const clickedItem = document.querySelector(`.history-item[data-id="${id}"]`);
    if (clickedItem) {
        clickedItem.classList.add("active-history-item");
    }

    showCustomToast("Hunt carregada na calculadora!");
};

function renderLootHistory() {
    const container = document.getElementById("hunt-history-list");
    if (!container) return;

    container.innerHTML = "";

    if (lootState.history.length === 0) {
        container.innerHTML = `<p class="empty-history-text">Nenhuma hunt salva ainda.</p>`;
        return;
    }

    lootState.history.forEach(hunt => {
        const item = document.createElement("div");
        item.className = "history-item";
        item.setAttribute("data-id", hunt.id);
        
        // Define click handler to toggle details inline
        item.onclick = (e) => {
            // Check if user clicked a button or interactive element inside the item
            if (e.target.closest("button") || e.target.closest("a")) return;
            toggleHistoryDetails(hunt.id);
        };

        item.innerHTML = `
            <div class="history-item-summary">
                <div class="history-item-left">
                    <span class="history-item-title">Hunt (${hunt.playersCount} players)</span>
                    <span class="history-item-date">${hunt.date}</span>
                </div>
                <div class="history-item-right">
                    <span class="history-item-profit ${hunt.balance >= 0 ? 'text-green' : 'text-red'}">
                        ${hunt.balance >= 0 ? '+' : ''}${formatGP(hunt.balance)}
                    </span>
                    <button class="btn-delete-history-item" onclick="event.stopPropagation(); deleteHistoryItem('${hunt.id}')" title="Excluir">×</button>
                </div>
            </div>
            
            <div class="history-item-details" id="details-hunt-${hunt.id}" style="display: none;">
                <div class="history-details-grid">
                    <div class="hd-stat"><strong>Loot Total:</strong> <span>${formatGP(hunt.loot)}</span></div>
                    <div class="hd-stat"><strong>Gastos:</strong> <span class="text-red">${formatGP(hunt.supplies)}</span></div>
                    <div class="hd-stat"><strong>Saldo Líquido:</strong> <span class="${hunt.balance >= 0 ? 'text-green' : 'text-red'}">${formatGP(hunt.balance)}</span></div>
                    <div class="hd-stat"><strong>Duração:</strong> <span>${hunt.duration || "N/A"}</span></div>
                </div>
                
                <div class="history-details-section-title">👥 Detalhes por Jogador</div>
                <div class="history-details-players">
                    ${(hunt.players || []).map(p => {
                        const playerBal = p.loot - p.supplies;
                        const sharePerPlayer = Math.floor(hunt.balance / hunt.playersCount);
                        const expectedPayout = p.supplies + sharePerPlayer;
                        const diff = p.loot - expectedPayout;
                        let resultText = "";
                        if (diff > 0) resultText = `<span class="text-red">Deve pagar ${formatGP(diff)}</span>`;
                        else if (diff < 0) resultText = `<span class="text-green">Deve receber ${formatGP(Math.abs(diff))}</span>`;
                        else resultText = `<span class="text-muted">Quite</span>`;
                        
                        return `
                        <div class="hd-player-row">
                            <span class="hd-player-name">${p.name}</span>
                            <span class="hd-player-info">
                                Loot: ${formatGP(p.loot)} | Gastos: ${formatGP(p.supplies)} | Saldo: <span class="${playerBal >= 0 ? 'text-green' : 'text-red'}">${formatGP(playerBal)}</span>
                            </span>
                            <span class="hd-player-info" style="font-weight:600; margin-top:2px;">
                                ${resultText}
                            </span>
                        </div>`;
                    }).join('')}
                </div>

                <button class="btn-restore-hunt" onclick="event.stopPropagation(); loadHuntFromHistory('${hunt.id}')">
                    🔄 Carregar na Calculadora
                </button>
            </div>
        `;
        container.appendChild(item);
    });
}

function deleteHistoryItem(id) {
    lootState.history = lootState.history.filter(h => h.id !== id);
    saveLootHistory();
    renderLootHistory();
}
