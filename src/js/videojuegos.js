import { getGameDetails } from "./api/gameService.js";

document.addEventListener("DOMContentLoaded", () => {
  // Llama a la función para cargar los juegos automáticamente al cargar la página
  getGameDetails('');
});