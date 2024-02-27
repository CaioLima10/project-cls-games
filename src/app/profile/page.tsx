import Container from "@/components/container";
import FavoritesCards from "./components/favorites";
import Image from "next/image";
import ImgPerfil from "../../assets/caio-perfil.jpeg";

export default function Profile() {
  return (
    <Container>
      <section className="container flex my-10 px-10 flex-col">
        <div className="w-full relative">
          <div
            className="w-full md:w-3/4 p-3 mt-10 md:mt-0 flex flex-col md:flex-row 
                          items-center gap-4 font-medium ring-2 ring-green-500"
          >
            <div className="flex flex-col">
              <Image
                src={ImgPerfil}
                alt="FOTO-PERFIL"
                width={150}
                height={150}
                className="rounded-full"
              />
              <span className="w-36 flex items-center mt-2 justify-center font-bold">
                Caio lima
              </span>
            </div>
            <p>
              Sempre fui apaixonado por jogos desde o Super Nintendo.
              Atualmente, meu jogo favorito é God of War. Criei este mini site
              de jogos para aumentar meu conhecimento em Next. Fico feliz em
              estar aqui.
            </p>
          </div>

          <div className="absolute right-0 top-0">
            <span className="bg-green-500 text-slate-100 p-2">
              Configurações
            </span>
          </div>
        </div>
        <div
          className="container mx-auto my-5 flex items-center justify-center 
                    gap-4 flex-col md:flex-row"
        >
          <div className="flex-col w-full md:flex-grow flex-wrap">
            <FavoritesCards />
          </div>
          <div className="flex-col w-full md:flex-grow flex-wrap">
            <FavoritesCards />
          </div>
          <div className="flex-col w-full md:flex-grow flex-wrap">
            <FavoritesCards />
          </div>
        </div>
      </section>
    </Container>
  );
}
