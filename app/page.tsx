import Header from "./_components/header";
import Image from "next/image";
import banner from "@/public/logolpofc.jpg";

import BookingItem from "./_components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

import {
  PageBotaoAgendar,
  PageBotaoAgendarHorarioAgora,
  PageContainer,
  PageImageBanner,
  PageSectionTitle,
} from "./_components/ui/page";

const Home = async () => {
  const barbershops = await prisma.barbershop.findMany();
  return (
    <main>
      <div>
        {/* HEADER */}
        <Header />
        {/* CONTAINER RELATIVO */}
        <PageContainer>
          {/* IMAGE BANNER*/}
          <PageImageBanner>
            <Image
              src={banner}
              alt="Agende agora!"
              sizes="100vw"
              className="h-auto w-full"
            />
          </PageImageBanner>

          {/* BOTÃO DE AGENDAR */}
          <PageBotaoAgendar
            href={
              barbershops[0]?.id
                ? `/barbershops/${barbershops[0].id}`
                : "/barbershops"
            }
          >
            AGENDAR AGORA
          </PageBotaoAgendar>
        </PageContainer>
        <div className="mt-6 px-5">
          {/* AGENDAMENTO */}
          <PageSectionTitle>Agendamentos</PageSectionTitle>

          {/* Booking Agendamento */}
          <BookingItem
            serviceName="Corte de cabelo"
            barbershopName="LP Barbearia"
            barbershopImageUrl="https://app.xgain.com.br/sistema/img/id-232-logo.jpg"
            status="agendado"
            date={new Date()}
          />

          {/* SEÇÃO DE SERVIÇOS */}
          <div className="relative right-1/2 left-1/2 mt-5 -mr-[50vw] -ml-[50vw] w-screen bg-[#000000] px-6 py-4 text-center shadow-sm md:px-10">
            <h2 className="mb-4 text-4xl font-bold text-[#FFD700]">Serviços</h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white md:text-lg">
              Conheça nossa variedade de tratamentos, garantindo qualidade,
              profissionalismo e compromisso.
            </p>

            {/* BANCOS DE DADOS BarberShop */}
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}

            {/* DIV DO BOTAO */}
            <div className="mt-6 flex justify-center">
              {/* BOTÃO AGENDAR MEU HORARIO AGORA */}
              <PageBotaoAgendarHorarioAgora
                href={
                  barbershops[0]?.id
                    ? `/barbershops/${barbershops[0].id}`
                    : "/barbershops"
                }
              >
                AGENDAR MEU HORÁRIO AGORA
              </PageBotaoAgendarHorarioAgora>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
