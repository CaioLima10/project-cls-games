import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";
import Container from "./container";

export default function Header() {
  return (
    <Container>
      <div className="container h-16 bg-green-500 mx-auto flex items-center justify-between px-10 rounded-br-2xl rounded-bl-2xl">
        <nav className="flex items-center gap-4 md:gap-4">
          <Link href={"/"}>
            <h1 className="text-black font-bold text-xl">
              CLS <span className="text-slate-50">Games</span>
            </h1>
          </Link>
          <Link href={"/"} className="font-semibold">
            {" "}
            Games
          </Link>
          <Link href={"/profile"} className="font-semibold">
            {" "}
            Perfil
          </Link>
        </nav>
        <div>
          <Link href={"/"} className="flex">
            <LiaGamepadSolid size={30} className="text-slate-50" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
