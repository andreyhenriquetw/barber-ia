"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#000000] px-6 py-4">
      <Image
        src="/id-232-logo.jpg"
        alt="lOGO SILAS"
        width={67}
        height={26.09}
      />
      <Button className="border-none bg-transparent text-amber-400 hover:bg-transparent">
        <MenuIcon className="size-5" strokeWidth={3} />
      </Button>
    </header>
  );
};

export default Header;
