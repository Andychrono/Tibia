// ============================================================
// RASHID TRACKER — Rastreamento Diário do Mercador Viajante
// Sincronizado com o Server Save do Tibia (10:00 CEST / 08:00 UTC)
// ============================================================

const RASHID_SCHEDULE = [
    {
        dayIndex: 0,
        dayName: "Domingo",
        city: "Carlin",
        location: "Taverna da Perac (acima do depot, +1)",
        coords: { x: 32328, y: 31782, z: 6 },
        note: "Ao norte do depot, no andar de cima da taverna."
    },
    {
        dayIndex: 1,
        dayName: "Segunda-feira",
        city: "Svargrond",
        location: "Taverna do Dankwart (ao sul)",
        coords: { x: 32210, y: 31154, z: 7 },
        note: "Ao sul da cidade, na taverna do Dankwart perto da arena."
    },
    {
        dayIndex: 2,
        dayName: "Terça-feira",
        city: "Liberty Bay",
        location: "Taverna de Lyonel (oeste)",
        coords: { x: 32316, y: 32825, z: 7 },
        note: "A sudoeste do depot, na taverna de Lyonel."
    },
    {
        dayIndex: 3,
        dayName: "Quarta-feira",
        city: "Port Hope",
        location: "Taverna de Clyde (ao norte)",
        coords: { x: 32626, y: 32740, z: 7 },
        note: "Ao norte do depot de Port Hope, na taverna de Clyde."
    },
    {
        dayIndex: 4,
        dayName: "Quinta-feira",
        city: "Ankrahmun",
        location: "Taverna do Arito (andar +1)",
        coords: { x: 33063, y: 32867, z: 6 },
        note: "Acima do bar do Arito, no primeiro andar."
    },
    {
        dayIndex: 5,
        dayName: "Sexta-feira",
        city: "Darashia",
        location: "Taverna da Miraia (ao oeste)",
        coords: { x: 33234, y: 32483, z: 7 },
        note: "Na taverna da Miraia, ao oeste da cidade."
    },
    {
        dayIndex: 6,
        dayName: "Sábado",
        city: "Edron",
        location: "Taverna de Mirabell (acima do depot, +1)",
        coords: { x: 33235, y: 31782, z: 6 },
        note: "No andar superior do castelo de Edron, acima do depot."
    }
];

// Retorna o dia do Tibia considerando o Server Save (08:00 UTC / 10:00 CEST / 05:00 BRT)
function getTibiaCurrentDay() {
    const now = new Date();
    // Se ainda não deu 08:00 UTC, o servidor Tibia ainda está no dia anterior
    if (now.getUTCHours() < 8) {
        const yesterday = new Date(now.getTime() - 86400000);
        return yesterday.getUTCDay();
    }
    return now.getUTCDay();
}

function getCurrentRashidInfo() {
    const day = getTibiaCurrentDay();
    return RASHID_SCHEDULE.find(s => s.dayIndex === day) || RASHID_SCHEDULE[1];
}

// Inicializar e Renderizar Widget do Rashid
function initRashidWidget() {
    const today = getCurrentRashidInfo();

    const elCity = document.getElementById("rashid-city-name");
    const elLoc = document.getElementById("rashid-location-text");
    const elDay = document.getElementById("rashid-day-badge");

    if (elCity) elCity.innerText = today.city;
    if (elLoc) elLoc.innerText = today.location;
    if (elDay) elDay.innerText = today.dayName;

    // Renderizar lista da agenda modal
    renderRashidScheduleList();

    // Limpar estado antigo de minimizado do localStorage para garantir o novo comportamento
    try {
        localStorage.removeItem("tibia_rashid_minimized");
    } catch (e) {}

    const widget = document.getElementById("rashid-widget");
    if (widget) {
        widget.classList.remove("minimized");
    }
}

// Clique no Widget do Rashid: abre a Agenda Completa
window.handleRashidWidgetClick = function(event) {
    if (event) {
        // Se o clique foi no botão de Ver no Mapa, a navegação já é feita por jumpToRashidOnMap
        if (event.target.closest && event.target.closest(".btn-rashid-map")) {
            return;
        }
        event.stopPropagation();
    }
    toggleRashidScheduleModal();
};

// Renderizar Agenda Semanal no Modal
function renderRashidScheduleList() {
    const container = document.getElementById("rashid-schedule-list");
    if (!container) return;

    const currentDay = getTibiaCurrentDay();

    container.innerHTML = RASHID_SCHEDULE.map(item => {
        const isToday = item.dayIndex === currentDay;
        return `
        <div class="rashid-schedule-item ${isToday ? 'active-today' : ''}">
            <div class="schedule-day-col">
                <span class="schedule-day-name">${item.dayName}</span>
                ${isToday ? '<span class="schedule-today-tag">HOJE</span>' : ''}
            </div>
            <div class="schedule-city-col">
                <strong>📍 ${item.city}</strong>
                <span class="schedule-loc-desc">${item.location}</span>
            </div>
            <div class="schedule-action-col">
                <button type="button" class="btn-schedule-jump" onclick="jumpToCityOnMap(${item.coords.x}, ${item.coords.y}, ${item.coords.z}, '${item.city}', '${item.location}')">
                    🗺️ Ver
                </button>
            </div>
        </div>
        `;
    }).join("");
}

// Pular para o Rashid de Hoje no Mapa Interativo
window.jumpToRashidOnMap = function(event) {
    if (event) event.stopPropagation();
    const today = getCurrentRashidInfo();
    window.jumpToCityOnMap(today.coords.x, today.coords.y, today.coords.z, today.city, today.location);
    closeRashidScheduleModal();
};

// Pular para qualquer cidade da agenda no Mapa
window.jumpToCityOnMap = function(x, y, z, city, location) {
    if (typeof window.switchTab === "function") {
        window.switchTab("tab-map");
    }

    const rashidData = {
        id: "npc_rashid",
        name: `Rashid (${city})`,
        image: "imagens/rashid.gif",
        categoryLabel: "NPC Mercador",
        location: location,
        drops: "Compra centenas de equipamentos raros e loots de criaturas por valor máximo!",
        status: "high",
        prediction: `Local de atendimento em ${city}!`
    };

    setTimeout(() => {
        if (typeof window.resizeTibiaMap === "function") window.resizeTibiaMap();
        if (typeof window.jumpToMapCoordinate === "function") {
            window.jumpToMapCoordinate(x, y, z, rashidData);
        }
        if (typeof window.centerMapOnScreen === "function") {
            setTimeout(window.centerMapOnScreen, 80);
        }
        if (typeof showCustomToast === "function") {
            showCustomToast(`📍 Rashid em ${city} marcado com ❌ no mapa!`);
        }
    }, 60);

    closeRashidScheduleModal();
};

// Toggle de Minimizar Widget
window.toggleMinimizeRashid = function(event) {
    if (event) event.stopPropagation();
    const widget = document.getElementById("rashid-widget");
    if (!widget) return;
    const isMin = widget.classList.toggle("minimized");
    try {
        localStorage.setItem("tibia_rashid_minimized", isMin ? "true" : "false");
    } catch (e) {}
};

// Modal de Agenda Semanal
window.toggleRashidScheduleModal = function(event) {
    if (event) event.stopPropagation();
    const modal = document.getElementById("rashid-schedule-modal");
    if (!modal) return;
    modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "flex" : "none";
};

window.closeRashidScheduleModal = function(event) {
    if (event && event.target && event.target !== event.currentTarget && !event.target.classList.contains("rashid-modal-close")) {
        return;
    }
    const modal = document.getElementById("rashid-schedule-modal");
    if (modal) modal.style.display = "none";
};

// Fechar com tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeRashidScheduleModal();
    }
});

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    initRashidWidget();
});
