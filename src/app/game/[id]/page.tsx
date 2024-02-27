import Container from "@/components/container";
import { GameProps } from "@/types/utils/game";
import Image from "next/image";
import SuggestionGames from "./components/suggestion-games";
import Label from "../components/label";
import { getInfoGame } from "@/services/api/get-info-game";
import { Metadata } from "next";
import axios from "axios";

interface PropsParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PropsParams): Promise<Metadata> {
  try {
    const response = await axios
      .get(`${process.env.NEXT_API_URL}/?api=game&id=${params.id}`)
      .then((res) => res.data)
      .catch(() => {
        return {
          title: "CLS Games - Descubra jogos incriveis para se divertir.",
        };
      });
    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
    };
  } catch (err) {
    return {
      title: "CLS Games - Descubra jogos incriveis para se divertir.",
    };
  }
}

export default async function InfoGame({
  params: { id },
}: {
  params: { id: string };
}) {
  const infoGame: GameProps = await getInfoGame(id);

  return (
    <main className="container mx-auto  px-3 flex flex-col ">
      <p className="w-full items-center justify-center text-xl font-semibold text-black my-5">
        {infoGame.title}
      </p>
      <div className="w-full mx-auto bg-black items-center justify-center">
        <div className="w-full max-h-96 h-96 relative">
          <Container>
            <Image
              className="max-h-96 object-cover 
                        transition-all duration-300"
              src={infoGame.image_url}
              alt={infoGame.title}
              priority
              quality={100}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            ></Image>
          </Container>
        </div>
      </div>

      <div className="flex-col md:flex-row md:flex mt-10 gap-0 md:gap-5">
        <div className="flex flex-1 flex-col ring-2 p-14 ring-green-500">
          <p className="text-black text-lg font-medium flex flex-col">
            <span className="text-xl text-green-500 font-semibold mb-3">
              Descrição do Game
            </span>
            {infoGame.description}
          </p>
          <div className="my-4">
            <span className="text-base text-black font-semibold">
              Plataforma:
            </span>
            <div className="flex gap-3">
              {infoGame.platforms.map((item) => (
                <Label key={item} name={item} />
              ))}
            </div>
          </div>
          <div className="my-4">
            <span className="text-base text-black font-semibold">
              Categoria:
            </span>
            <div className="flex gap-3">
              {infoGame.categories.map((item) => (
                <Label key={item} name={item} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <span className="text-base text-black font-semibold">
              Data de lançamento:
            </span>
            <p className="text-black text-end hover:text-green-500">
              {infoGame.release}
            </p>
          </div>
        </div>
        <SuggestionGames />
      </div>
      <div className="w-full flex items-center justify-end mb-10">
        <p className="text-center p-1 bg-green-500 font-semibold w-full md:w-60">
          Sugestão de jogos
        </p>
      </div>
    </main>
  );
}
