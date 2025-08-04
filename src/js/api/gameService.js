// src/js/api/gameService.js
import { fetchGameData } from "../api/rawgClient.js";

// Datos manuales de accesibilidad (ejemplo)
const accessibilityDatabase = {
  "The Last of Us Part II": {
    badges: ["Alta Accesibilidad"],
    features: [
      "Navegación asistida",
      "Texto a voz",
      "Ajustes de combate"
    ],
    platforms: ["playstation"]
  },
  "Forza Horizon 5": {
    badges: ["Modo Un Solo Brazo"],
    features: [
      "Controles reasignables",
      "Asistencia de conducción"
    ],
    platforms: ["xbox", "pc"]
  },
  "Marvels Spider-Man2" : {

    badges: ["Alta Accesibilidad"],
    features: [
      "Navegación pidididi",
      "Texto a voz no haty",
      "Ajustes de combate  no se "
    ],
    platforms: ["playstation", "family"]

  }


};

export const getGameDetails = async (gameName) => {
  const apiData = await fetchGameData(gameName);
  const localData = accessibilityDatabase[gameName] || {};

  return {
    name: apiData?.name || gameName,
    image: apiData?.background_image || "./assets/images/placeholder.jpg",
    year: apiData?.released?.split("-")[0] || "N/A",
    ...localData
  };
};