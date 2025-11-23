import { Button } from "@/app/_components/ui/button";
import { prisma } from "@/lib/prisma";
import { ChevronLeftIcon, MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BarbershopPage = async (props: PageProps<"/barbershops/[id]">) => {
  const { id } = await props.params;

  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id,
    },
  });

  if (!barbershop) {
    notFound();
  }

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[297px] w-full">
        <Image
          alt={barbershop.name}
          src="/img.jpg"
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 left-4 overflow-clip rounded-full"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
      </div>

      <div className="backgound border-b border-[#333] p-5">
        {/* Imagem na frente e nome depois */}
        <div className="mb-3 flex items-center gap-3">
          <div className="relative size-[35px] shrink-0 overflow-hidden rounded-full">
            <Image
              src={barbershop.imageUrl}
              alt={barbershop.name}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="font-plus-jakarta text-ts font-bold text-white">
            {barbershop.name}
          </h1>
        </div>

        {/* Endereço */}
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-amber-400" size={18} />
          <p className="font-plus-jakarta text-sm text-gray-400">
            {barbershop?.address}
          </p>
        </div>

        {/* Avaliações */}
        <div className="flex items-center gap-2">
          <StarIcon className="fill-amber-400 text-amber-400" size={18} />
          <p className="font-plus-jakarta text-sm text-gray-400">
            4,9 (avaliações)
          </p>
        </div>
      </div>

      {/* OFERTAS */}
      <div className="p-5"></div>
    </div>
  );
};

export default BarbershopPage;
