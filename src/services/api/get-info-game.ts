import axios from "axios";

export async function getInfoGame(id: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_API_URL}/?api=game&id=${id}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("error ao localizar os dados!");
  }
}
