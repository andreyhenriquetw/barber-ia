import Header from "./_components/header";
import Image from "next/image";
import banner from "@/public/logolpofc.jpg";

import BookingItem from "./_components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const barbershops = await prisma.barbershop.findMany();
  return (
    <main>
      <div>
        {/* HEADER */}
        <Header />

        {/* CONTAINER RELATIVO */}
        <div className="rounde relative w-full">
          {/* VIDEO */}
          <div className="h-[500px] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10">
            <Image
              src={banner}
              alt="Agende agora!"
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>

          {/* BOTÃO DE AGENDAR */}
          <button
            className="btn-entrando shine-button"
            style={{
              position: "absolute",
              right: "14px",
              bottom: "33px",
              padding: "12px 20px",
              borderRadius: "12px",
              color: "#FFD700", // cor do texto dourado
              fontSize: "14px",
              fontWeight: 600,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
              border: "1.5px solid #FFD700", // borda moderna dourada
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: "#000000", // fundo preto moderno
              overflow: "hidden",
            }}
          >
            AGENDAR AGORA
          </button>
        </div>

        <div className="mt-5 px-5">
          {/* AGENDAMENTO */}
          <h2 className="mb-3 text-xs font-semibold text-white uppercase">
            Agendamentos
          </h2>
          <BookingItem
            serviceName="Corte de cabelo"
            barbershopName="LP Barbearia"
            barbershopImageUrl="https://app.xgain.com.br/sistema/img/id-232-logo.jpg"
            status="agendado"
            date={new Date()}
          />

          {/* SEÇÃO DE SERVIÇOS */}
          <div className="relative right-1/2 left-1/2 mt-5 -mr-[50vw] -ml-[50vw] w-screen bg-[#000000] px-6 py-6 text-center shadow-sm md:px-10">
            <h2 className="mb-4 text-4xl font-bold text-[#FFD700]">Serviços</h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white md:text-lg">
              Conheça nossa variedade de tratamentos, garantindo qualidade,
              profissionalismo e compromisso.
            </p>

            {/* BANCOS DE DADOS BarberShop */}
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}

            {/* BOTÃO CENTRALIZADO */}
            <div className="mt-6 flex justify-center">
              <button
                className="btn-entrando shine-button"
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  color: "#FFD700",
                  fontSize: "14px",
                  fontWeight: 600,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
                  border: "1.5px solid #FFD700",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: "#000000",
                  overflow: "hidden",
                }}
              >
                AGENDAR MEU HORÁRIO AGORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
