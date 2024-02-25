import axios from "axios";

export async function getGamesData() {
  try {
    const response = await axios.get(`${process.env.NEXT_API_URL}/?api=games`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("erro ao listar todos os jogos");
  }
}
