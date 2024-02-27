import Image from "next/image";
import ImgFooterRpg from "../assets/game-mmorpg.jpg";

export default function Footer() {
  return (
    <div>
      <div className="border-t-8 border-green-500" />
      <footer
        className="w-full h-54 sm:h-64 flex items-center justify-center bg-black text-slate-50
                  bottom-0 table-fixed"
      >
        <Image
          className="max-h-full w-full object-cover opacity-5  transition-all duration-300"
          src={ImgFooterRpg}
          alt=""
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        ></Image>
        <p className="absolute text-lg font-semibold">
          © Feito por <span className="text-green-500">Caio lima</span>
        </p>
      </footer>
    </div>
  );
}
