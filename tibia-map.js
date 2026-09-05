// ============================================================
// TIBIA MAPA INTERATIVO — ENGINE CANVAS & TIBIAMAPS.IO
// Suporte a todos os 16 andares (0 a 15), zoom fluido, arrastar,
// coordenadas X/Y/Z em tempo real, marcadores de bosses e customizados.
// ============================================================

(function() {
    "use strict";

    // CDN Oficial do TibiaMaps.io (GitHub Pages)
    const TILE_CDN_BASE = "https://tibiamaps.github.io/tibia-map-data/mapper/";

    // Limites de coordenadas do mundo do Tibia (World Bounds)
    const WORLD_MIN_X = 31744;
    const WORLD_MAX_X = 34304;
    const WORLD_MIN_Y = 30976;
    const WORLD_MAX_Y = 33024;
    const TILE_SIZE = 256;

    // Níveis de Zoom (Escalas de pixel por unidade de coordenada Tibia)
    const ZOOM_LEVELS = [0.25, 0.5, 1.0, 2.0, 4.0, 8.0, 16.0];
    const DEFAULT_ZOOM_INDEX = 2; // 1.0x (1 pixel do mapa = 1 SQM)

    // Cidades e Depots Oficiais (Coordenadas Verificadas via TibiaMaps.io)
    const TIBIA_POIS = [
        { name: "Thais (Depot)", x: 32347, y: 32226, z: 7, category: "city" },
        { name: "Carlin (Depot)", x: 32336, y: 31784, z: 7, category: "city" },
        { name: "Venore (Depot)", x: 32954, y: 32098, z: 6, category: "city" },
        { name: "Kazordoon (Depot)", x: 32657, y: 31910, z: 8, category: "city" },
        { name: "Ab'Dendriel (Depot)", x: 32682, y: 31685, z: 7, category: "city" },
        { name: "Edron (Depot)", x: 33169, y: 31812, z: 7, category: "city" },
        { name: "Darashia (Depot)", x: 33214, y: 32455, z: 7, category: "city" },
        { name: "Ankrahmun (Depot)", x: 33127, y: 32843, z: 7, category: "city" },
        { name: "Port Hope (Depot)", x: 32623, y: 32746, z: 7, category: "city" },
        { name: "Liberty Bay (Depot)", x: 32327, y: 32835, z: 7, category: "city" },
        { name: "Svargrond (Depot)", x: 32263, y: 31140, z: 7, category: "city" },
        { name: "Yalahar (Depot)", x: 32793, y: 31248, z: 7, category: "city" },
        { name: "Farmine (Depot)", x: 33019, y: 31458, z: 10, category: "city" },
        { name: "Rathleton (Depot)", x: 33626, y: 31894, z: 6, category: "city" },
        { name: "Roshamuul (Depot)", x: 33553, y: 32389, z: 7, category: "city" },
        { name: "Issavi (Depot)", x: 33920, y: 31480, z: 7, category: "city" },
        { name: "Krailos (Depot)", x: 33776, y: 32840, z: 7, category: "city" },
        { name: "Gray Beach (Depot)", x: 33447, y: 31320, z: 7, category: "city" },
        { name: "Dawnport (Depot)", x: 31946, y: 31902, z: 7, category: "city" },
        { name: "Rookgaard (Temple)", x: 32097, y: 32219, z: 7, category: "city" },
        { name: "Pits of Inferno (Nexus)", x: 32836, y: 32274, z: 15, category: "hunting" },
        { name: "Inquisition (The Vats)", x: 33098, y: 31101, z: 14, category: "hunting" },
        { name: "Hellgate (Entrance)", x: 33020, y: 31540, z: 9, category: "hunting" },
        { name: "Demona (Entrance)", x: 32740, y: 31630, z: 14, category: "hunting" }
    ];

    // Banco de Coordenadas Oficiais dos 66 Bosses (Base TibiaMaps.io & TibiaWiki)
    const BOSS_COORDINATES = {
        "zevelon_duskbringer": { x: 32766, y: 31578, z: 11, locName: "Hellgate (Vampire Crypt)" },
        "diblis_the_fair": { x: 32010, y: 32798, z: 10, locName: "Nargor (Vampire Crypt)" },
        "arachir_the_ancient_one": { x: 32965, y: 32404, z: 12, locName: "Drefia (Vampire Crypt)" },
        "sir_valorcrest": { x: 33263, y: 31768, z: 10, locName: "Edron (Crypt)" },
        "the_pale_count": { x: 33001, y: 32432, z: 12, locName: "Drefia (Vampire Area)" },
        "undead_cavebear": { x: 31913, y: 32561, z: 10, locName: "Lich Hell (Goroma)" },
        "midnight_panther": { x: 32847, y: 32697, z: 7, locName: "Tiquanda Jungle" },
        "crustacea_gigantica": { x: 32182, y: 32935, z: 9, locName: "Treasure Island / Calassa" },
        "draptor": { x: 33188, y: 31239, z: 7, locName: "Muggy Plains (Dragonblaze)" },
        "munster": { x: 32098, y: 32216, z: 9, locName: "Rookgaard (Rat Caves -2)" },
        "apprentice_sheng": { x: 32130, y: 32059, z: 12, locName: "Rookgaard (Minotaur Hell)" },
        "teleskor": { x: 31977, y: 32228, z: 9, locName: "Rookgaard (Cemetery)" },
        "rottie_the_rotworm": { x: 32195, y: 32130, z: 9, locName: "Rookgaard (Katana Cave)" },
        "the_plasmother": { x: 32836, y: 32332, z: 15, locName: "Defiler Seal (PoI)" },
        "the_handmaiden": { x: 32785, y: 32283, z: 15, locName: "Hand of Cursed Fate Seal (PoI)" },
        "massacre": { x: 32875, y: 32266, z: 15, locName: "Juggernaut Seal (PoI)" },
        "the_imperor": { x: 32906, y: 32217, z: 15, locName: "Diabolic Imp Seal (PoI)" },
        "countess_sorrow": { x: 32794, y: 32364, z: 15, locName: "Phantasm Seal (PoI)" },
        "dracola": { x: 32835, y: 32309, z: 15, locName: "Undead Dragon Seal (PoI)" },
        "mr_punish": { x: 32762, y: 32242, z: 15, locName: "Dark Torturer Seal (PoI)" },
        "hatebreeder": { x: 33098, y: 31101, z: 14, locName: "The Vats (Inquisition)" },
        "the_frog_prince": { x: 32382, y: 32129, z: 7, locName: "Green Claw Swamp" },
        "fernfang": { x: 32903, y: 32330, z: 6, locName: "Isle of the Mists (PoH)" },
        "tzumrah_the_dazzler": { x: 33326, y: 32650, z: 11, locName: "Forbidden Temple" },
        "the_evil_eye": { x: 32809, y: 31611, z: 14, locName: "Hellgate (Beholder Chamber)" },
        "zulazza_the_corruptor": { x: 33180, y: 31380, z: 5, locName: "Zzaion (South Tower)" },
        "big_boss_trolliver": { x: 33134, y: 31723, z: 10, locName: "Edron Troll Caves" },
        "smuggler_baron_silvertoe": { x: 32541, y: 32649, z: 10, locName: "Port Hope Smuggler Cave" },
        "dreadmaw": { x: 33272, y: 31165, z: 5, locName: "Muggy Plains" },
        "hairman_the_huge": { x: 32846, y: 32509, z: 8, locName: "Banuta (Ape City)" },
        "xenia": { x: 32891, y: 31888, z: 8, locName: "Amazon Camp (Venore)" },
        "rukor_zad": { x: 32603, y: 32386, z: 10, locName: "Dark Cathedral" },
        "high_templar_cobrass": { x: 32957, y: 32841, z: 8, locName: "Chor (Tiquanda)" },
        "yaga_the_crone": { x: 32712, y: 32011, z: 11, locName: "Green Claw Swamp (Witch Hill)" },
        "foreman_kneebiter": { x: 32550, y: 31876, z: 15, locName: "Kazordoon Mines" },
        "yeti": { x: 32076, y: 31029, z: 3, locName: "Folda Mountain" },
        "dharalion": { x: 33034, y: 32175, z: 9, locName: "Shadowthorn (Elf Village)" },
        "general_murius": { x: 32418, y: 32121, z: 15, locName: "Mintwallin (Minotaur City)" },
        "man_in_the_cave": { x: 32131, y: 31147, z: 3, locName: "Svargrond (Hidden Cave)" },
        "ocyakao": { x: 32352, y: 31050, z: 7, locName: "Nibelor (Svargrond)" },
        "the_welter": { x: 33021, y: 32662, z: 5, locName: "Hydra Mountain (Tiquanda)" },
        "shlorg": { x: 33169, y: 31729, z: 9, locName: "Terra Tunnels (Edron)" },
        "zushuka": { x: 31943, y: 31386, z: 9, locName: "Ice Witch Temple" },
        "white_pale": { x: 33130, y: 32431, z: 9, locName: "Darashia Rotworm Caves" },
        "furyosa": { x: 32264, y: 32164, z: 7, locName: "Fury Gate" },
        "hirintror": { x: 32366, y: 31052, z: 8, locName: "Formorgar Mines" },
        "yakchal": { x: 32204, y: 31006, z: 14, locName: "Formorgar Glacier Shrine" },
        "dire_penguin": { x: 32116, y: 31114, z: 2, locName: "Chyllfroest" },
        "groam": { x: 32625, y: 32026, z: 10, locName: "Kazordoon Mines" },
        "captain_jones": { x: 33322, y: 32183, z: 7, locName: "Ghostship" },
        "gravelord_oshuran": { x: 32974, y: 32396, z: 12, locName: "Drefia Tombs" },
        "the_big_bad_one": { x: 33171, y: 31681, z: 7, locName: "Edron Woods" },
        "barbaria": { x: 32006, y: 31417, z: 7, locName: "Barbarian Camp" },
        "grandfather_tridian": { x: 32412, y: 32778, z: 11, locName: "Liberty Bay Cults" },
        "the_old_whopper": { x: 33314, y: 31666, z: 11, locName: "Cyclopolis (Edron)" },
        "zarabustor": { x: 32509, y: 31595, z: 14, locName: "Demona" },
        "warlord_ruzad": { x: 32969, y: 31725, z: 5, locName: "Orc Fortress" },
        "rotrender": { x: 33885, y: 32293, z: 8, locName: "Rotworm Caves (Issavi)" },
        "ferumbras": { x: 32024, y: 32734, z: 1, locName: "Kharos (Citadel Tower)" },
        "gazharagoth": { x: 33630, y: 32371, z: 5, locName: "Upper Roshamuul" },
        "ghazbaran": { x: 32227, y: 31156, z: 15, locName: "Formorgar Mines (Ghazbaran Room)" },
        "orshabaal": { x: 33118, y: 31701, z: 7, locName: "Plains of Havoc" },
        "morgaroth": { x: 32168, y: 32663, z: 14, locName: "Goroma (Volcano Hellgorge)" },
        "omrafir": { x: 33591, y: 32380, z: 12, locName: "Roshamuul Prison (-5)" },
        "the_abomination": { x: 32740, y: 32435, z: 9, locName: "Thais Tunnels" },
        "morshabaal": { x: 33118, y: 31701, z: 7, locName: "Plains of Havoc" }
    };

    // Estado do Mapa (Inicia limpo, padrão TibiaMaps.io)
    let mapState = {
        centerX: 32347,           // Posição central em coordenadas Tibia (Thais Depot oficial)
        centerY: 32226,
        floor: 7,                 // Andar atual (0 = topo, 7 = superfície, 15 = subterrâneo profundo)
        zoomIndex: DEFAULT_ZOOM_INDEX,
        showGrid: false,
        showBossMarkers: false,   // Padrão limpo: sem poluir o mapa com dezenas de marcadores
        showCustomMarkers: true,  // Apenas marcadores que o próprio usuário criar
        showPOIs: false,          // Padrão limpo: ativa sob demanda nos filtros
        onlyActiveBosses: true,   // Ao ativar bosses, foca nos bosses com chance hoje
        isDragging: false,
        dragStartX: 0,
        dragStartY: 0,
        mapStartX: 0,
        mapStartY: 0,
        cursorX: 32347,
        cursorY: 32226,
        customMarkers: [],        // Salvos em localStorage
        highlightedBossId: null,  // Boss focado vindo do Boss Tracker
        highlightPulse: 0,
        pulseAnimId: null
    };

    const tileCache = new Map();
    let knownAvailableTiles = null;
    let canvas, ctx, container;

    // Carregar lista de tiles conhecidos da CDN
    async function initTileManifest() {
        try {
            const resp = await fetch(TILE_CDN_BASE + "tiles.json");
            if (resp.ok) {
                const list = await resp.json();
                knownAvailableTiles = new Set(list);
                renderMap();
            }
        } catch (err) {
            console.warn("[TibiaMap] Não foi possível carregar tiles.json, operando em modo livre:", err);
        }
    }

    // Obter imagem de tile com cache
    function getTileImage(x, y, z) {
        const key = `${x}_${y}_${z}`;
        if (knownAvailableTiles && !knownAvailableTiles.has(key)) {
            return null; // Tile não existe no Tibia
        }

        let img = tileCache.get(key);
        if (!img) {
            img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => renderMap();
            img.onerror = () => {
                tileCache.set(key, "ERROR");
            };
            img.src = `${TILE_CDN_BASE}Minimap_Color_${key}.png`;
            tileCache.set(key, img);
        }

        if (img === "ERROR") return null;
        return img.complete && img.naturalWidth > 0 ? img : null;
    }

    // Obter escala de zoom atual
    function getScale() {
        return ZOOM_LEVELS[mapState.zoomIndex];
    }

    // Conversão de Coordenadas do Mundo (Tibia) para Pixels do Canvas
    function worldToScreen(wx, wy) {
        const scale = getScale();
        const screenX = Math.round((wx - mapState.centerX) * scale + canvas.width / 2);
        const screenY = Math.round((wy - mapState.centerY) * scale + canvas.height / 2);
        return { x: screenX, y: screenY };
    }

    // Conversão de Pixels do Canvas para Coordenadas do Mundo (Tibia)
    function screenToWorld(sx, sy) {
        const scale = getScale();
        const wx = Math.round(mapState.centerX + (sx - canvas.width / 2) / scale);
        const wy = Math.round(mapState.centerY + (sy - canvas.height / 2) / scale);
        return { x: wx, y: wy };
    }

    // Renderização Principal do Mapa
    function renderMap() {
        if (!canvas || !ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        const scale = getScale();
        const floor = mapState.floor;

        // Limpar tela (fundo preto clássico do Tibia)
        ctx.fillStyle = "#0a0c10";
        ctx.fillRect(0, 0, width, height);

        // Desativar suavização para manter a arte pixelada clássica em zoom alto
        ctx.imageSmoothingEnabled = scale < 2;

        // Calcular quais blocos de 256x256 estão visíveis na viewport
        const topLeft = screenToWorld(0, 0);
        const bottomRight = screenToWorld(width, height);

        const startTileX = Math.floor(Math.max(WORLD_MIN_X, topLeft.x) / TILE_SIZE) * TILE_SIZE;
        const endTileX = Math.floor(Math.min(WORLD_MAX_X, bottomRight.x) / TILE_SIZE) * TILE_SIZE;
        const startTileY = Math.floor(Math.max(WORLD_MIN_Y, topLeft.y) / TILE_SIZE) * TILE_SIZE;
        const endTileY = Math.floor(Math.min(WORLD_MAX_Y, bottomRight.y) / TILE_SIZE) * TILE_SIZE;

        // 1. Renderizar Tiles do Mapa
        for (let tx = startTileX; tx <= endTileX; tx += TILE_SIZE) {
            for (let ty = startTileY; ty <= endTileY; ty += TILE_SIZE) {
                const img = getTileImage(tx, ty, floor);
                if (img) {
                    const pos = worldToScreen(tx, ty);
                    const drawSize = Math.ceil(TILE_SIZE * scale);
                    ctx.drawImage(img, pos.x, pos.y, drawSize, drawSize);
                }
            }
        }

        // 2. Renderizar Grade 256x256 (Se ativada)
        if (mapState.showGrid) {
            ctx.strokeStyle = "rgba(218, 165, 32, 0.25)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let tx = startTileX; tx <= endTileX + TILE_SIZE; tx += TILE_SIZE) {
                const pos = worldToScreen(tx, startTileY);
                ctx.moveTo(pos.x, 0);
                ctx.lineTo(pos.x, height);
            }
            for (let ty = startTileY; ty <= endTileY + TILE_SIZE; ty += TILE_SIZE) {
                const pos = worldToScreen(startTileX, ty);
                ctx.moveTo(0, pos.y);
                ctx.lineTo(width, pos.y);
            }
            ctx.stroke();
        }

        // 3. Renderizar POIs / Cidades (Se no andar correspondente)
        if (mapState.showPOIs) {
            TIBIA_POIS.forEach(poi => {
                if (poi.z === floor) {
                    drawPOIMarker(poi);
                }
            });
        }

        // 4. Renderizar Marcadores de Bosses (Se no andar correspondente)
        if (typeof MASTER_BOSSES !== "undefined") {
            const activeBossIds = typeof getProcessedWorldBosses === "function" 
                ? getProcessedWorldBosses().filter(b => b.chancePercent >= 5 && !b.isKilledToday).map(b => b.id)
                : [];

            MASTER_BOSSES.forEach(boss => {
                const coords = BOSS_COORDINATES[boss.id];
                if (coords && coords.z === floor) {
                    const isFocused = mapState.highlightedBossId === boss.id;
                    if (!mapState.showBossMarkers && !isFocused) {
                        return; // Ocultar se camada de bosses estiver desligada e não for o focado
                    }
                    if (mapState.showBossMarkers && mapState.onlyActiveBosses && !activeBossIds.includes(boss.id) && !isFocused) {
                        return; // Ocultar se não tiver chance hoje
                    }
                    drawBossMarker(boss, coords, activeBossIds.includes(boss.id));
                }
            });
        }

        // 5. Renderizar Marcadores Personalizados do Usuário
        if (mapState.showCustomMarkers && mapState.customMarkers) {
            mapState.customMarkers.forEach(m => {
                if (m.z === floor) {
                    drawCustomMarker(m);
                }
            });
        }

        // 6. Desenhar Anel de Destaque Animado (Highlight) se houver boss focado
        if (mapState.highlightedBossId) {
            const coords = BOSS_COORDINATES[mapState.highlightedBossId];
            if (coords && coords.z === floor) {
                drawHighlightRing(coords.x, coords.y);
            }
        }

        // 7. Cruz de Mira / Cursor central sutil
        drawCrosshair();

        updateHUD();
    }

    // Desenhar Marcador de POI / Cidade
    function drawPOIMarker(poi) {
        const pos = worldToScreen(poi.x, poi.y);
        ctx.fillStyle = "rgba(0, 191, 255, 0.85)";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Rótulo de texto com sombra
        if (getScale() >= 1.0) {
            ctx.font = "bold 11px Outfit, sans-serif";
            ctx.fillStyle = "#ffffff";
            ctx.shadowColor = "#000000";
            ctx.shadowBlur = 4;
            ctx.fillText(poi.name, pos.x + 8, pos.y + 4);
            ctx.shadowBlur = 0;
        }
    }

    // Desenhar Marcador de Boss
    function drawBossMarker(boss, coords, isHighChance) {
        const pos = worldToScreen(coords.x, coords.y);
        const radius = isHighChance ? 9 : 7;

        // Fundo do círculo
        ctx.fillStyle = isHighChance ? "#e74c3c" : "hsl(42, 95%, 50%)";
        ctx.strokeStyle = isHighChance ? "#ffffff" : "#000000";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Ícone interno (caveira para bosses)
        ctx.font = `${isHighChance ? 11 : 9}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(isHighChance ? "🔥" : "💀", pos.x, pos.y);

        // Nome do Boss
        if (getScale() >= 0.5) {
            ctx.font = "bold 11px Outfit, sans-serif";
            ctx.fillStyle = isHighChance ? "#ff7675" : "var(--gold-light, #ffd700)";
            ctx.shadowColor = "#000000";
            ctx.shadowBlur = 5;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillText(boss.name, pos.x + radius + 4, pos.y);
            ctx.shadowBlur = 0;
        }
    }

    // Desenhar Marcador Customizado
    function drawCustomMarker(m) {
        const pos = worldToScreen(m.x, m.y);
        ctx.fillStyle = m.color || "#2ecc71";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = "bold 11px Outfit, sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 4;
        ctx.fillText(m.title, pos.x + 8, pos.y + 4);
        ctx.shadowBlur = 0;
    }

    // Desenhar Anel de Destaque Animado
    function drawHighlightRing(wx, wy) {
        const pos = worldToScreen(wx, wy);
        const pulse = (Math.sin(mapState.highlightPulse) + 1) / 2; // 0..1
        const r1 = 12 + pulse * 14;

        ctx.strokeStyle = `rgba(255, 215, 0, ${0.9 - pulse * 0.5})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r1, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(46, 204, 113, ${0.8 - pulse * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r1 + 8, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Mira central do mapa
    function drawCrosshair() {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(cx - 8, cy);
        ctx.lineTo(cx + 8, cy);
        ctx.moveTo(cx, cy - 8);
        ctx.lineTo(cx, cy + 8);
        ctx.stroke();
    }

    // Formato de Andar Relativo padrão TibiaMaps.io (0 = Térreo, +1..+7 Acima, -1..-8 Abaixo)
    function formatFloorDisplay(floor) {
        if (floor === 7) return "0";
        if (floor < 7) return "+" + (7 - floor);
        return "-" + (floor - 7);
    }

    // Atualizar HUD e textos de coordenadas
    function updateHUD() {
        const coordsEl = document.getElementById("map-cursor-coords");
        const coordsFloatEl = document.getElementById("map-cursor-coords-float");
        const floorLabel = document.getElementById("map-current-floor-label");
        const floorFloatLabel = document.getElementById("map-floor-float-label");
        const zoomLabel = document.getElementById("map-zoom-label");

        const z = mapState.floor;
        const relFloor = formatFloorDisplay(z);

        const cursorText = `X: ${mapState.cursorX} | Y: ${mapState.cursorY} | Z: ${z} (${relFloor})`;
        if (coordsEl) coordsEl.innerText = cursorText;
        if (coordsFloatEl) coordsFloatEl.innerText = `${mapState.cursorX}, ${mapState.cursorY}, ${z}`;

        let floorName = `Andar ${z}`;
        if (z === 7) floorName = "Superfície (Térreo - 0)";
        else if (z < 7) floorName = `Andar Superior ${relFloor} (Floor ${z})`;
        else floorName = `Subsolo ${relFloor} (Floor ${z})`;
        if (floorLabel) floorLabel.innerText = floorName;

        if (floorFloatLabel) {
            floorFloatLabel.innerText = relFloor;
            floorFloatLabel.title = `Andar atual: ${floorName}. Clique para voltar ao Térreo (0).`;
        }

        if (zoomLabel) {
            zoomLabel.innerText = `${ZOOM_LEVELS[mapState.zoomIndex]}x`;
        }
    }

    // Mudar de Andar
    window.setMapFloor = function(newFloor) {
        newFloor = Math.max(0, Math.min(15, parseInt(newFloor, 10)));
        if (mapState.floor !== newFloor) {
            mapState.floor = newFloor;
            // Fechar tooltips ao trocar de andar
            const bTip = document.getElementById("map-boss-tooltip");
            if (bTip) bTip.style.display = "none";
            const cTip = document.getElementById("map-custom-marker-tooltip");
            if (cTip) cTip.style.display = "none";
            renderMap();
        }
    };

    window.mapFloorUp = function() {
        // Subir andar: no Tibia andar 7 -> 6 -> 5... (vai para cima, relFloor: 0 -> +1 -> +2)
        if (mapState.floor > 0) {
            setMapFloor(mapState.floor - 1);
        }
    };

    window.mapFloorDown = function() {
        // Descer andar: no Tibia andar 7 -> 8 -> 9... (vai para baixo no subsolo, relFloor: 0 -> -1 -> -2)
        if (mapState.floor < 15) {
            setMapFloor(mapState.floor + 1);
        }
    };

    // Zoom Controls
    window.mapZoomIn = function() {
        if (mapState.zoomIndex < ZOOM_LEVELS.length - 1) {
            mapState.zoomIndex++;
            renderMap();
        }
    };

    window.mapZoomOut = function() {
        if (mapState.zoomIndex > 0) {
            mapState.zoomIndex--;
            renderMap();
        }
    };

    // Pular / Centralizar em Coordenadas Específicas
    window.jumpToMapCoordinate = function(x, y, z, bossData = null) {
        mapState.centerX = Math.max(WORLD_MIN_X, Math.min(WORLD_MAX_X, parseInt(x, 10)));
        mapState.centerY = Math.max(WORLD_MIN_Y, Math.min(WORLD_MAX_Y, parseInt(y, 10)));
        if (z !== undefined && z !== null) {
            mapState.floor = Math.max(0, Math.min(15, parseInt(z, 10)));
        }

        if (bossData && bossData.id) {
            mapState.highlightedBossId = bossData.id;
            mapState.zoomIndex = Math.max(2, mapState.zoomIndex); // Garante zoom adequado
            startHighlightAnimation();
            showBossMapTooltip(bossData, mapState.centerX, mapState.centerY);
        } else {
            mapState.highlightedBossId = null;
        }

        renderMap();
    };

    // Animação de pulso para boss selecionado
    function startHighlightAnimation() {
        if (mapState.pulseAnimId) cancelAnimationFrame(mapState.pulseAnimId);
        let count = 0;
        function animate() {
            mapState.highlightPulse += 0.12;
            count++;
            renderMap();
            if (count < 120) { // Anima por ~2 segundos
                mapState.pulseAnimId = requestAnimationFrame(animate);
            } else {
                mapState.highlightedBossId = null;
                renderMap();
            }
        }
        mapState.pulseAnimId = requestAnimationFrame(animate);
    }

    // Exibir Tooltip de Boss no Mapa
    function showBossMapTooltip(boss, wx, wy) {
        const tooltip = document.getElementById("map-boss-tooltip");
        if (!tooltip) return;

        const screenPos = worldToScreen(wx, wy);
        tooltip.style.left = `${screenPos.x}px`;
        tooltip.style.top = `${screenPos.y - 15}px`;
        tooltip.style.display = "block";

        const imgEl = tooltip.querySelector(".map-tooltip-img");
        const nameEl = tooltip.querySelector(".map-tooltip-name");
        const catEl = tooltip.querySelector(".map-tooltip-cat");
        const coordsEl = tooltip.querySelector(".map-tooltip-coords");

        if (imgEl) imgEl.src = boss.image || "imagens/Compass.gif";
        if (nameEl) nameEl.innerText = boss.name;
        if (catEl) catEl.innerText = `${boss.categoryLabel || 'Boss'} (${boss.chancePercent !== undefined ? boss.chancePercent + '%' : ''})`;
        if (coordsEl) coordsEl.innerText = `X: ${wx} | Y: ${wy} | Z: ${mapState.floor} (${formatFloorDisplay(mapState.floor)})`;
    }

    // Exibir Tooltip de Marcador Personalizado
    function showCustomMarkerTooltip(marker) {
        const tooltip = document.getElementById("map-custom-marker-tooltip");
        if (!tooltip) return;

        const screenPos = worldToScreen(marker.x, marker.y);
        tooltip.style.left = `${screenPos.x}px`;
        tooltip.style.top = `${screenPos.y - 15}px`;
        tooltip.style.display = "block";

        const nameEl = document.getElementById("custom-marker-name");
        const coordsEl = document.getElementById("custom-marker-coords");
        const delBtn = document.getElementById("btn-delete-custom-marker");

        if (nameEl) nameEl.innerText = marker.title;
        if (coordsEl) coordsEl.innerText = `X: ${marker.x} | Y: ${marker.y} | Z: ${marker.z} (${formatFloorDisplay(marker.z)})`;
        if (delBtn) {
            delBtn.onclick = () => {
                removeCustomMarker(marker.id);
                tooltip.style.display = "none";
            };
        }
    }

    // Eventos de Mouse e Toque (Arrastar, Scroll, Clique)
    function setupCanvasEvents() {
        if (!canvas) return;

        let dragDistance = 0;

        // Mouse Down (Início do Arraste)
        canvas.addEventListener("mousedown", (e) => {
            if (e.button === 0) { // Botão esquerdo
                dragDistance = 0;
                mapState.isDragging = true;
                mapState.dragStartX = e.clientX;
                mapState.dragStartY = e.clientY;
                mapState.mapStartX = mapState.centerX;
                mapState.mapStartY = mapState.centerY;
                canvas.style.cursor = "grabbing";
            }
        });

        // Mouse Move (Arrastar e Leitura de Coordenadas)
        window.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            const sx = e.clientX - rect.left;
            const sy = e.clientY - rect.top;

            if (sx >= 0 && sx <= rect.width && sy >= 0 && sy <= rect.height) {
                const worldPos = screenToWorld(sx, sy);
                mapState.cursorX = worldPos.x;
                mapState.cursorY = worldPos.y;
                updateHUD();
            }

            if (mapState.isDragging) {
                dragDistance += Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0);
                const scale = getScale();
                const dx = (e.clientX - mapState.dragStartX) / scale;
                const dy = (e.clientY - mapState.dragStartY) / scale;

                mapState.centerX = Math.round(mapState.mapStartX - dx);
                mapState.centerY = Math.round(mapState.mapStartY - dy);

                // Manter dentro dos limites
                mapState.centerX = Math.max(WORLD_MIN_X, Math.min(WORLD_MAX_X, mapState.centerX));
                mapState.centerY = Math.max(WORLD_MIN_Y, Math.min(WORLD_MAX_Y, mapState.centerY));

                renderMap();
            }
        });

        // Mouse Up (Fim do Arraste)
        window.addEventListener("mouseup", () => {
            if (mapState.isDragging) {
                mapState.isDragging = false;
                if (canvas) canvas.style.cursor = "crosshair";
            }
        });

        // Clique simples no canvas: abrir detalhes de marcador ou boss
        canvas.addEventListener("click", (e) => {
            if (dragDistance > 6) return; // foi um arrasto de mapa, ignora
            const rect = canvas.getBoundingClientRect();
            const sx = e.clientX - rect.left;
            const sy = e.clientY - rect.top;

            // 1. Checar se clicou em um marcador personalizado
            const clickedCustom = mapState.customMarkers.find(m => {
                if (m.z !== mapState.floor) return false;
                const sp = worldToScreen(m.x, m.y);
                return Math.hypot(sx - sp.x, sy - sp.y) <= 15;
            });
            if (clickedCustom) {
                showCustomMarkerTooltip(clickedCustom);
                return;
            }

            // 2. Checar se clicou em um boss
            if (mapState.showBossMarkers && typeof MASTER_BOSSES !== "undefined") {
                const clickedBoss = MASTER_BOSSES.find(b => {
                    const coords = BOSS_COORDINATES[b.id];
                    if (!coords || coords.z !== mapState.floor) return false;
                    const sp = worldToScreen(coords.x, coords.y);
                    return Math.hypot(sx - sp.x, sy - sp.y) <= 15;
                });
                if (clickedBoss) {
                    const coords = BOSS_COORDINATES[clickedBoss.id];
                    showBossMapTooltip(clickedBoss, coords.x, coords.y);
                    return;
                }
            }

            // Se clicou no chão vazio, fecha tooltips
            const bTip = document.getElementById("map-boss-tooltip");
            if (bTip) bTip.style.display = "none";
            const cTip = document.getElementById("map-custom-marker-tooltip");
            if (cTip) cTip.style.display = "none";
        });

        // Botão direito (contextmenu): Atalho para deletar marcador customizado
        canvas.addEventListener("contextmenu", (e) => {
            const rect = canvas.getBoundingClientRect();
            const sx = e.clientX - rect.left;
            const sy = e.clientY - rect.top;
            const clickedCustom = mapState.customMarkers.find(m => {
                if (m.z !== mapState.floor) return false;
                const sp = worldToScreen(m.x, m.y);
                return Math.hypot(sx - sp.x, sy - sp.y) <= 18;
            });
            if (clickedCustom) {
                e.preventDefault();
                if (confirm(`Deseja excluir o marcador personalizado "${clickedCustom.title}"?`)) {
                    removeCustomMarker(clickedCustom.id);
                }
            }
        });

        // Zoom com a roda do mouse (Scroll Wheel)
        canvas.addEventListener("wheel", (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                mapZoomIn();
            } else if (e.deltaY > 0) {
                mapZoomOut();
            }
        }, { passive: false });

        // Duplo clique para criar marcador personalizado
        canvas.addEventListener("dblclick", (e) => {
            const rect = canvas.getBoundingClientRect();
            const sx = e.clientX - rect.left;
            const sy = e.clientY - rect.top;
            const worldPos = screenToWorld(sx, sy);

            const title = prompt("Adicionar marcador neste local:\nDigite um nome/descrição:", "Ponto de Interesse");
            if (title && title.trim()) {
                addCustomMarker(worldPos.x, worldPos.y, mapState.floor, title.trim());
            }
        });

        // Suporte a Touch em Mobile
        let touchStartDist = 0;
        canvas.addEventListener("touchstart", (e) => {
            if (e.touches.length === 1) {
                mapState.isDragging = true;
                mapState.dragStartX = e.touches[0].clientX;
                mapState.dragStartY = e.touches[0].clientY;
                mapState.mapStartX = mapState.centerX;
                mapState.mapStartY = mapState.centerY;
            } else if (e.touches.length === 2) {
                touchStartDist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
            }
        }, { passive: true });

        canvas.addEventListener("touchmove", (e) => {
            if (e.touches.length === 1 && mapState.isDragging) {
                const scale = getScale();
                const dx = (e.touches[0].clientX - mapState.dragStartX) / scale;
                const dy = (e.touches[0].clientY - mapState.dragStartY) / scale;
                mapState.centerX = Math.round(mapState.mapStartX - dx);
                mapState.centerY = Math.round(mapState.mapStartY - dy);
                renderMap();
            } else if (e.touches.length === 2) {
                const dist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                if (Math.abs(dist - touchStartDist) > 40) {
                    if (dist > touchStartDist) mapZoomIn();
                    else mapZoomOut();
                    touchStartDist = dist;
                }
            }
        }, { passive: true });

        canvas.addEventListener("touchend", () => {
            mapState.isDragging = false;
        });
    }

    // Atalhos de Teclado
    function setupKeyboardEvents() {
        window.addEventListener("keydown", (e) => {
            const activeTab = document.querySelector(".tab-content.active");
            if (!activeTab || activeTab.id !== "tab-map") return;

            // Ignorar se estiver digitando em inputs
            if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

            const panStep = Math.round(50 / getScale());
            switch (e.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    mapState.centerY -= panStep;
                    renderMap();
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    mapState.centerY += panStep;
                    renderMap();
                    break;
                case "ArrowLeft":
                case "a":
                case "A":
                    mapState.centerX -= panStep;
                    renderMap();
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    mapState.centerX += panStep;
                    renderMap();
                    break;
                case "+":
                case "=":
                    mapZoomIn();
                    break;
                case "-":
                case "_":
                    mapZoomOut();
                    break;
                case "PageUp":
                case "k":
                case "K":
                    mapFloorUp();
                    break;
                case "PageDown":
                case "j":
                case "J":
                    mapFloorDown();
                    break;
                case "Home":
                case "7":
                case "l":
                case "L":
                    setMapFloor(7);
                    break;
                case "g":
                case "G":
                    toggleMapGrid();
                    break;
            }
        });
    }

    // Gerenciador de Marcadores Customizados (localStorage)
    function loadCustomMarkers() {
        try {
            const saved = localStorage.getItem("tibia_custom_map_markers");
            mapState.customMarkers = saved ? JSON.parse(saved) : [];
        } catch (e) {
            mapState.customMarkers = [];
        }
    }

    function saveCustomMarkers() {
        try {
            localStorage.setItem("tibia_custom_map_markers", JSON.stringify(mapState.customMarkers));
        } catch (e) {}
    }

    function addCustomMarker(x, y, z, title, color = "#2ecc71") {
        const marker = { id: "m_" + Date.now(), x, y, z, title, color };
        mapState.customMarkers.push(marker);
        saveCustomMarkers();
        renderMap();
        if (typeof showCustomToast === "function") {
            showCustomToast(`Marcador "${title}" adicionado em (${x}, ${y}, ${z})`);
        }
    }

    window.removeCustomMarker = function(id) {
        const found = mapState.customMarkers.find(m => m.id === id);
        mapState.customMarkers = mapState.customMarkers.filter(m => m.id !== id);
        saveCustomMarkers();
        const cTip = document.getElementById("map-custom-marker-tooltip");
        if (cTip) cTip.style.display = "none";
        renderMap();
        if (typeof showCustomToast === "function") {
            showCustomToast(`Marcador "${found ? found.title : ''}" excluído com sucesso!`);
        }
    };

    window.clearAllCustomMarkers = function() {
        if (!mapState.customMarkers || mapState.customMarkers.length === 0) {
            alert("Nenhum marcador personalizado para remover.");
            return;
        }
        if (confirm(`Tem certeza que deseja excluir todos os ${mapState.customMarkers.length} marcadores personalizados?`)) {
            mapState.customMarkers = [];
            saveCustomMarkers();
            const cTip = document.getElementById("map-custom-marker-tooltip");
            if (cTip) cTip.style.display = "none";
            renderMap();
            if (typeof showCustomToast === "function") {
                showCustomToast("Todos os marcadores personalizados foram excluídos!");
            }
        }
    };

    // Toggle para mostrar/esconder o painel de ferramentas e busca de coordenadas
    window.toggleMapAdvancedTools = function() {
        const panel = document.getElementById("map-controls-panel");
        const chevron = document.getElementById("map-tools-chevron");
        if (!panel) return;
        const isHidden = panel.style.display === "none" || panel.style.display === "";
        if (isHidden) {
            panel.style.display = "block";
            if (chevron) chevron.innerText = "▲";
        } else {
            panel.style.display = "none";
            if (chevron) chevron.innerText = "▼";
        }
    };

    // Toggles de visualização
    window.toggleMapGrid = function() {
        mapState.showGrid = !mapState.showGrid;
        const btn = document.getElementById("btn-toggle-grid");
        if (btn) btn.classList.toggle("active", mapState.showGrid);
        renderMap();
    };

    window.toggleMapBosses = function() {
        mapState.showBossMarkers = !mapState.showBossMarkers;
        const btn1 = document.getElementById("btn-toggle-boss-markers");
        const btn2 = document.getElementById("btn-quick-toggle-bosses");
        if (btn1) btn1.classList.toggle("active", mapState.showBossMarkers);
        if (btn2) btn2.classList.toggle("active", mapState.showBossMarkers);
        renderMap();
        if (typeof showCustomToast === "function") {
            showCustomToast(mapState.showBossMarkers ? "💀 Marcadores de Bosses ATIVADOS" : "💀 Marcadores de Bosses OCULTADOS");
        }
    };

    window.toggleMapPOIs = function() {
        mapState.showPOIs = !mapState.showPOIs;
        const btn1 = document.getElementById("btn-toggle-pois");
        const btn2 = document.getElementById("btn-quick-toggle-pois");
        if (btn1) btn1.classList.toggle("active", mapState.showPOIs);
        if (btn2) btn2.classList.toggle("active", mapState.showPOIs);
        renderMap();
        if (typeof showCustomToast === "function") {
            showCustomToast(mapState.showPOIs ? "🏛️ Depots / Cidades ATIVADOS" : "🏛️ Depots / Cidades OCULTADOS");
        }
    };

    window.toggleMapActiveBossesOnly = function(checkbox) {
        mapState.onlyActiveBosses = checkbox.checked;
        renderMap();
    };

    window.toggleMapFullscreen = function() {
        const mapWrapper = document.getElementById("tibia-map-wrapper");
        if (!mapWrapper) return;

        if (!document.fullscreenElement) {
            mapWrapper.requestFullscreen().catch(err => {
                console.warn("Fullscreen não suportado ou negado:", err);
            });
        } else {
            document.exitFullscreen();
        }
    };

    // Redimensionamento Dinâmico do Canvas
    window.resizeTibiaMap = function() {
        if (!canvas || !container) return;
        const rect = container.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            canvas.width = rect.width;
            canvas.height = rect.height;
            renderMap();
        }
    };

    // Centraliza o mapa verticalmente na viewport do usuário
    window.centerMapOnScreen = function() {
        const mapWrapper = document.getElementById("tibia-map-wrapper");
        if (!mapWrapper) return;
        const rect = mapWrapper.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const margin = Math.max(15, (window.innerHeight - rect.height) / 2);
        const targetScroll = Math.max(0, Math.round(scrollTop + rect.top - margin));
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
    };

    // Inicialização do Módulo de Mapa
    function initTibiaMap() {
        container = document.getElementById("tibia-map-container");
        canvas = document.getElementById("tibia-map-canvas");
        if (!canvas || !container) return;

        ctx = canvas.getContext("2d");
        loadCustomMarkers();
        initTileManifest();
        setupCanvasEvents();
        setupKeyboardEvents();

        // Ajustar tamanho inicial
        window.resizeTibiaMap();
        window.addEventListener("resize", window.resizeTibiaMap);
    }

    // Inicializar quando o DOM estiver pronto
    document.addEventListener("DOMContentLoaded", () => {
        initTibiaMap();
    });

})();
