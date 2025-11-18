"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#294B63] px-5 py-5">
      <Image
        src="/LOGO-SILAS-NOVA.png"
        alt="lOGO SILAS"
        width={75}
        height={26.09}
      />
      <Button className="border-none bg-transparent text-white hover:bg-transparent">
        <MenuIcon className="size-6" strokeWidth={3} />
      </Button>
    </header>
  );
};

export default Header;
