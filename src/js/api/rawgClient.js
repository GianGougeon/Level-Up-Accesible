const API_KEY = "3ddd6c1ccecd464faddb23b17082471f"; // ¡Obtén una en https://rawg.io/apidocs!

export const fetchGameData = async (gameName) => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?search=${encodeURIComponent(gameName)}&key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      console.warn(`No se encontraron resultados para: ${gameName}`);
      return null;
    }
    
    return data.results[0];
  } catch (error) {
    console.error(`Error al obtener datos para ${gameName}:`, error);
    return null;
  }
};