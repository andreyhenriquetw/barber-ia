import Image from "next/image";
import { Barbershop } from "../generated/prisma/client";

import banner from "@/public/bannerlp2.jpg";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <div className="relative mt-5 h-[500px] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10">
      <Image src={banner} alt={barbershop.name} fill />

      {/* BLOCO DO TÍTULO + LISTA DE PREÇOS SOBRE A IMAGEM */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 py-10 text-white md:px-16"
        style={{
          backgroundImage: `url('/background-azul.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.92, // igual visual da imagem real
        }}
      >
        {/* TÍTULO */}
        <h2
          className="mb-9 text-center text-2xl font-extrabold tracking-wide md:text-4xl"
          style={{ fontFamily: '"Cinzel", serif' }}
        >
          QUAL SERÁ O PEDIDO PARA HOJE?
        </h2>

        {/* LISTA DE PREÇOS */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 text-lg font-semibold md:grid-cols-2">
          {/* COLUNA ESQUERDA */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/40 pb-2">
              <span>CORTE</span>
              <span>R$ 45,00</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/40 pb-2">
              <span>BARBA</span>
              <span>R$ 45,00</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/40 pb-2">
              <span>SOBRANCELHA</span>
              <span>R$ 15,00</span>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/40 pb-2">
              <span>PIGMENTAÇÃO</span>
              <span>R$ 40,00</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/40 pb-2">
              <span>HIDRATAÇÃO</span>
              <span>R$ 25,00</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/40 pb-2">
              <span>SELAGEM A PARTIR</span>
              <span>R$ 80,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarbershopItem;
