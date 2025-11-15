import Image from "next/image";
import Header from "./_components/header";
import Banner from "../public/agendebanner.png";

const Home = () => {
  return (
    <main>
      <div>
        <Header />

        {/* CONTAINER RELATIVO */}
        <div className="relative w-full">
          {/* IMAGEM */}
          <Image
            src={Banner}
            alt="Agende agora!"
            sizes="100vw"
            className="w-full object-cover object-top"
          />

          {/* BOTÃO NA ESQUERDA EMBAIXO */}
          <button className="absolute right-6 bottom-5 animate-bounce rounded-lg bg-blue-400 px-4 py-2 font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110 active:scale-95">
            AGENDAR AGORA
          </button>
        </div>

        <div className="px-5">
          <h2>Agendamentos</h2>
        </div>
      </div>
    </main>
  );
};

export default Home;
