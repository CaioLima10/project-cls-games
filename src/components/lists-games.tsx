import { getGamesData } from "@/shared/get-games-data";
import { GameProps } from "@/types/utils/game";
import GameCard from "./game-card";
import Container from "./container";

export default async function ListsGames() {
  const dataGames: GameProps[] = await getGamesData();

  return (
    <section className="container mx-auto grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dataGames.map((game) => (
        <GameCard key={game.id} data={game} />
      ))}
    </section>
  );
}
