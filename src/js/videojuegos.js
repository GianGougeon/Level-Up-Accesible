// JavaScript // src/js/pages/videoJuegos.js
import { getGameDetails } from "../js/api/gameService.js";

const gamesToFetch = [
  "The Last of Us Part II",
  "Forza Horizon 5",
  "God of War Ragnarök",
  "Marvels Spider-Man2",
"Star Wars Jedi: Survivor",
  "Hogwarts Legacy",
  "Dead Space Remake",
  "Resident Evil 4 Remake",
  "Diablo IV",
  "Street Fighter 6",
  "Minecraft"
];

const renderGames = async () => {
  const container = document.getElementById("games-container");
  
  for (const gameName of gamesToFetch) {
    const game = await getGameDetails(gameName);
    
    const platformIcons = {
      playstation: '<i class="fab fa-playstation"></i>',
      xbox: '<i class="fab fa-xbox"></i>',
      pc: '<i class="fab fa-steam"></i>'
    };

    const cardHTML = `
      <div class="col-md-6 col-lg-4">
        <div class="card game-card h-100">
          ${game.badges?.map(badge => `
            <span class="accessibility-badge">${badge}</span>
          `).join("")}
          <img src="${game.image}" class="card-img-top" alt="${game.name}">
          <div class="card-body">
            <h3 class="card-title h5">${game.name}</h3>
            <p class="card-text">${game.features?.join(", ") || "Accesibilidad no especificada"}.</p>
            <div class="mb-3">
              ${game.platforms?.map(plat => platformIcons[plat]).join("")}
            </div>
            <a href="#" class="btn btn-outline-primary">Ver detalles</a>
          </div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  }
};

document.addEventListener("DOMContentLoaded", renderGames);