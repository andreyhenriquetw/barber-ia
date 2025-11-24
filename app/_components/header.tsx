"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { LogInIcon, MenuIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Header = () => {
  const { data: session } = authClient.useSession();
  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <header className="flex items-center justify-between bg-[#000000] px-6 py-4">
      <Image
        src="/id-232-logo.jpg"
        alt="lOGO SILAS"
        width={67}
        height={26.09}
      />
      <div className="flex items-center gap-2">
        {session ? (
          <div>
            <h1 className="text-white">{session.user?.name}</h1>
            <Button
              className="border-none bg-transparent text-amber-400 hover:bg-transparent"
              onClick={() => authClient.signOut()}
            >
              <LogInIcon />
            </Button>
          </div>
        ) : (
          <Button
            className="border-none bg-transparent text-amber-400 hover:bg-transparent"
            onClick={handleLogin}
          >
            <LogInIcon />
          </Button>
        )}
        <Button className="border-none bg-transparent text-amber-400 hover:bg-transparent">
          <MenuIcon className="size-5" strokeWidth={3} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
