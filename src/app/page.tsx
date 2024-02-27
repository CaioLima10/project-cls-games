import Container from "@/components/container";
import Input from "@/components/input";
import ListsGames from "@/components/lists-games";
import { getRandomGames } from "@/services/api/get-random-games";
import { GameProps } from "@/types/utils/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

export default async function Home() {
  const randomGames: GameProps = await getRandomGames();

  return (
    <main className="w-full">
      <div className="flex flex-col w-full">
        <h1 className="sm:text-1xl text-lg text-center font-bold my-5">
          Separando um jogo <span className="text-green-500">exclusivo</span>{" "}
          pra vocês
        </h1>

        <Link href={`/game/${randomGames.id}`}>
          <div className="w-full bg-black flex items-center justify-center ">
            <div className="w-full max-h-96 h-96 relative">
              <div className="absolute left-4 bottom-4 opacity-100 shadow-2xl z-50 text-zinc-800 bg-slate-100 p-1 text-2xl font-bold flex items-center gap-3">
                <p>{randomGames.title}</p>
                <BsArrowRightSquare />
              </div>
              <Container>
                <Image
                  className="max-h-96 object-cover opacity-50 hover:opacity-100 transition-all duration-300"
                  src={randomGames.image_url}
                  alt={randomGames.title}
                  priority
                  quality={100}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                ></Image>
              </Container>
            </div>
          </div>
        </Link>
      </div>
      <Input />

      <ListsGames />
    </main>
  );
}
