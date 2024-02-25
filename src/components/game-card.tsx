import { GameProps } from "@/types/utils/game";
import Image from "next/image";
import Container from "./container";
import { BsArrowBarRight } from "react-icons/bs";

interface props {
  data: GameProps;
}

export default function GameCard({ data }: props) {
  return (
    <div className="flex flex-col mb-6 p-2">
      <div className="relative w-full h-56">
        <Image
          className="object-cover hover:scale-105 duration-300 z-10"
          src={data.image_url}
          alt="IMAGENS-DOS-JOGOS"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
        />
      </div>
      <div className="flex items-center justify-between bg-zinc-500/20 rounded-br-2xl relative">
        <p className="max-w-60 overflow-hidden whitespace-nowrap text-ellipsis font-bold text-sm my-3">
          {data.title}
        </p>
        <BsArrowBarRight
          size={28}
          className="bg-green-500 text-zinc-50 h-full rounded-br-2xl"
        />
      </div>
    </div>
  );
}
