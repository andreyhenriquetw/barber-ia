import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BookingItemProps {
  serviceName: string;
  barbershopName: string;
  barbershopImageUrl: string;
  status: string;
  date: Date;
}

const BookingItem = ({
  serviceName,
  barbershopName,
  barbershopImageUrl,
  date,
}: BookingItemProps) => {
  return (
    <Card
      className="flex w-full min-w-full flex-row items-center justify-between p-0"
      style={{
        backgroundColor: "#1A1A1A", // cinza premium
        border: "1px solid #333", // borda cinza leve moderna
      }}
    >
      {/* ESQUERDA */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Badge>Confirmado</Badge>

        <div className="flex flex-col gap-2">
          {/* NOME DO SERVIÇO (DOURADO) */}
          <p className="font-bold" style={{ color: "#FFFFFF" }}>
            {serviceName}
          </p>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={barbershopImageUrl} />
            </Avatar>

            {/* NOME DA BARBEARIA (DOURADO) */}
            <p className="text-sm" style={{ color: "#C0C0C0" }}>
              {barbershopName}
            </p>
          </div>
        </div>
      </div>

      {/* DIREITA - DATA (TUDO DOURADO) */}
      <div
        className="flex h-full flex-col items-center justify-center border-l p-4 py-3"
        style={{ color: "#FFD700" }}
      >
        <p className="text-xs capitalize">
          {date.toLocaleDateString("pt-BR", { month: "long" })}
        </p>

        <p>{date.toLocaleDateString("pt-BR", { day: "2-digit" })}</p>

        <p className="text-xs capitalize">
          {date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </Card>
  );
};

export default BookingItem;
