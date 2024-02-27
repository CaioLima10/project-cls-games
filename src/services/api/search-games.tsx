import axios from "axios";

export async function SearchGames(title: string) {
  try {
    const decodeTitle = decodeURI(title);

    const response = await axios.get(
      `${process.env.NEXT_API_URL}/?api=game&title=${decodeTitle}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
