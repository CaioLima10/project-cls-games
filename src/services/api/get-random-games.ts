import axios from "axios";

export async function getRandomGames() {
  try {
    const response = await axios(`${process.env.NEXT_API_URL}/?api=game_day`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("erro ao buscar os jogos!");
  }
}
