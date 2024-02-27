import GameCard from "@/components/game-card";
import Input from "@/components/input";
import { SearchGames } from "@/services/api/search-games";
import { GameProps } from "@/types/utils/game";
import { SlGameController } from "react-icons/sl";

export default async function InfoGames({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GameProps[] = await SearchGames(title);

  return (
    <>
      <Input />
      {!games && (
        <div className="w-full h-60 flex flex-col items-center justify-center">
          <span>
            <SlGameController size={90} />
          </span>
          <p className="font-semibold text-slate-600 mt-2 ">
            Nenhum Jogo foi encontrado!
          </p>
        </div>
      )}

      <section className="container mx-auto grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
        {games && games.map((game) => <GameCard key={game.id} data={game} />)}
      </section>
    </>
  );
}
