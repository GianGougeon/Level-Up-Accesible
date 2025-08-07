const API_KEY = "3ddd6c1ccecd464faddb23b17082471f"; // ¡Obtén una en https://rawg.io/apidocs!

export const fetchGameData = async (gameName) => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data.results

  }
  catch (error) {
    console.error("Error al obtener los datos del juego:", error);
    return null; // O maneja el error de otra manera
  }
}