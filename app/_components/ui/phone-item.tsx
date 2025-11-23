"use client";

import { SmartphoneIcon } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = async (phone: string) => {
    try {
      await navigator.clipboard.writeText(phone);
      console.log("Copiado!");
    } catch {
      // Fallback para navegadores que bloqueiam clipboard
      const textarea = document.createElement("textarea");
      textarea.value = phone;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      toast.success("Telefone copiado com sucesso");
    }
  };

  return (
    <div className="flex justify-between text-white">
      {/* ESQUERDA */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>

      {/* DIREITA */}
      <Button
        className="border border-[#333] bg-[#000000]"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  );
};

export default PhoneItem;
