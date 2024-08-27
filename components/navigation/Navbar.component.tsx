import { Button, Input } from "antd";
import { MoveRight, Search, LogIn, MapPinHouse } from "lucide-react";

import Link from "next/link";
import React from "react";
import ProfaxLogo from "@/assets/logo/profax-logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn("flex px-10 items-center w-full text-white font-semibold gap-5", className)}>
      {/* left section */}
      <div className="flex flex-[0.7] gap-x-20 py-8 items-center">
        <Link href={"/"} className="text-[50px] font-semibold">
          <Image src={ProfaxLogo} alt="Logo" width={150} />
        </Link>

        <div className="flex items-center gap-x-10 text-md">
          <Link href={"/"}>Homes for sell</Link>
          <Link href={"/pre-own"}>Pre-own homes</Link>
          <Link href={"/new-home"}>New homes</Link>
          <Link href={"/reports"}>Reports</Link>
          <Link href={"/home-center"}>Home Centers</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>

      {/* right section */}
      <div className="flex flex-[0.4] gap-x-3">
        <Input
          className="rounded-[100px] border-none px-6"
          placeholder="Search Zip Code"
          suffix={<Search size={24} />}
        />
        <Button
          shape="round"
          size="large"
          icon={<MapPinHouse width={20} />}
          className="bg-[#262626] border-none text-white font-semibold"
        >
         Buy Property
        </Button>
        <Link href={"/auth"}>
          <Button type="primary" shape="round" size="large" icon={<LogIn width={20}/>} className="font-semibold">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};
