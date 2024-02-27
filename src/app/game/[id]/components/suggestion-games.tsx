import { getRandomGames } from "@/services/api/get-random-games";
import { GameProps } from "@/types/utils/game";
import Image from "next/image";
import Link from "next/link";

export default async function SuggestionGames() {
  const getRandom: GameProps = await getRandomGames();

  return (
    <Link
      href={`/game/${getRandom.id}`}
      className="h-full cursor-pointer relative "
    >
      <Image
        className="object-cover mt-10 md:mt-0 w-full md:max-w-60 min-h-56  md:min-h-96
                  transition-all duration-300 "
        src={getRandom.image_url}
        alt={getRandom.title}
        priority
        quality={100}
        width={250}
        height={600}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
      />
    </Link>
  );
}
