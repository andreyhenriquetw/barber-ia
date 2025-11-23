//Page Container

import React from "react";
import { Button } from "./button";
import Link from "next/link";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative w-full">{children}</div>;
};

//  SectionTile Agendamentos

export const PageSectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="mb-3 text-xs font-semibold text-white uppercase">
      {children}
    </h2>
  );
};
// Image Banner 1
export const PageImageBanner = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-b-lg shadow-lg ring-1 ring-black/10">
      {children}
    </div>
  );
};

// BOTAO DE AGENDAR

export const PageBotaoAgendar = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <Button
        className="btn-entrando shine-button"
        style={{
          position: "absolute",
          right: "14px",
          bottom: "33px",
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
        {children}
      </Button>
    </Link>
  );
};

// SEÇÃO SERVIÇOS ??????

//BOTAO AGENDAR HORARIO AGORA

export const PageBotaoAgendarHorarioAgora = ({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <Button
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
        {children}
      </Button>
    </Link>
  );
};
