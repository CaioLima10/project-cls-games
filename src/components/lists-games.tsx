import { getGamesData } from "@/services/api/get-games-data";
import { GameProps } from "@/types/utils/game";
import GameCard from "./game-card";

export default async function ListsGames() {
  const dataGames: GameProps[] = await getGamesData();

  return (
    <section className="container mx-auto grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
      {dataGames.map((game) => (
        <GameCard key={game.id} data={game} />
      ))}
    </section>
  );
}
