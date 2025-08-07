// src/js/api/gameService.js
import { fetchGameData } from "../api/rawgClient.js";

// Mapeo de los slugs de las plataformas a los iconos de Font Awesome
const platformIcons = {
  'pc': 'fab fa-windows',
  'playstation': 'fab fa-playstation',
  'xbox': 'fab fa-xbox',
  'nintendo': 'fas fa-tv'
};

// Función para mapear las plataformas de la API a los íconos
function mapPlatformsToIcons(platforms) {
  if (!platforms || platforms.length === 0) {
    return [];
  }

  const icons = platforms.map(p => {
    const platformSlug = p.platform.slug;

    if (platformSlug.includes('playstation')) {
      return 'fab fa-playstation';
    }
    if (platformSlug.includes('xbox')) {
      return 'fab fa-xbox';
    }
    if (platformSlug.includes('pc') || platformSlug.includes('macos')) {
      return 'fab fa-windows';
    }
    if (platformSlug.includes('nintendo')) {
      return 'fas fa-tv';
    }

    return null;
  });

  // Filtramos los valores nulos y eliminamos duplicados
  return [...new Set(icons.filter(icon => icon !== null))];
}

// Función para crear una tarjeta de juego
function createGameCard(game) {
  const platformIconsHtml = mapPlatformsToIcons(game.platforms).map(iconClass => `
        <span class="platform-icon"><i class="${iconClass}"></i></span>
    `).join('');

  const colDiv = document.createElement('div');
  colDiv.className = 'col-md-6 col-lg-4';
  colDiv.innerHTML = `
        <div class="card game-card h-100">
            <span class="accessibility-badge">Alta Accesibilidad</span>
            <img src="${game.background_image}" class="card-img-top" alt="${game.name}" />
            <div class="card-body">
                <h3 class="card-title h5">${game.name}</h3>
                <p class="card-text">Explora un vasto mundo abierto.</p>
                <div class="mb-3">
                    ${platformIconsHtml}
                </div>
                <a href="#" class="btn btn-outline-primary btn-primary">Ver detalles</a>
            </div>
        </div>
    `;

  return colDiv;
}

export const getGameDetails = async () => {
  // La API de RAWG devuelve una lista de juegos populares si el término de búsqueda es nulo
  const apiData = await fetchGameData(null);
  console.log("Datos de la API:", apiData);
  
  const gamesContainer = document.getElementById("games-container");

  gamesContainer.innerHTML = '';

  if (apiData) {
    apiData.forEach(game => {
      const card = createGameCard(game);
      gamesContainer.appendChild(card);
    });
  } else {
    gamesContainer.innerHTML = '<p>No se encontraron juegos.</p>';
  }
};