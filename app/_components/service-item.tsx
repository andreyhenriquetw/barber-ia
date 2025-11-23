import Image from "next/image";
import { BarbershopService } from "../generated/prisma/client";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card className="border border-[#333] bg-[#1a1a1a] py-3">
      <CardContent className="flex items-center gap-3 px-3">
        {/* IMAGEM DO SERVIÇO */}
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px]">
          <Image
            alt={service.name}
            src={service.imageUrl}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* INFORMAÇÕES DO SERVIÇO */}
        <div className="space-y-2">
          {/* Nome */}
          <h3 className="text-sm font-semibold text-white">{service.name}</h3>

          {/* Descrição */}
          <p className="text-sm text-gray-400">{service.description}</p>

          {/* Preço + Botão */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-amber-400">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              }).format(Number(service.priceIncents) / 100)}
            </p>

            <Button className="border border-[#333] bg-[#2e2e2e]" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
