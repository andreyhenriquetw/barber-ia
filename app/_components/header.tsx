import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#294B63] px-6 py-7">
      <Image
        src="/LOGO-SILAS-NOVA.png"
        alt="lOGO SILAS"
        width={85}
        height={26.09}
      />
      <Button className="border-none bg-transparent text-white hover:bg-transparent">
        <MenuIcon className="size-6" strokeWidth={3} />
      </Button>
    </header>
  );
};

export default Header;
