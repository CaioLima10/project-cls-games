import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className="w-full h-14 flex bg-slate-100 text-black px-2 ">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="flex items-center gap-6 md:gap-4">
          <Link href={"/"}>
            <h1 className="text-black font-bold text-xl">
              CLS <span className="text-green-500">Games</span>
            </h1>
          </Link>
          <Link href={"/"}> Games</Link>
          <Link href={"/Profile"}> Perfil</Link>
        </nav>
        <div>
          <Link href={"/"} className="flex">
            <LiaGamepadSolid size={30} />
          </Link>
        </div>
      </div>
    </header>
  );
}
