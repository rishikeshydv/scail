import { Avatar, Badge, Button, Input } from "antd";
import { MoveRight, Search, LogIn, MapPinHouse, User } from "lucide-react";

import Link from "next/link";
import React from "react";
import ProfaxLogo from "@/assets/logo/profax-logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex px-10 items-center w-full text-white font-semibold gap-5",
        className
      )}
    >
      {/* left section */}
      <div className="flex w-full mx-20  gap-x-20 py-8 items-center justify-around">
        <Link href={"/"} className="text-[50px] font-semibold flex-[0.2]">
          <Image src={ProfaxLogo} alt="Logo" width={150} />
        </Link>

<<<<<<< HEAD
        <div className="flex items-center gap-x-10 text-md">
          <Link href={"/"}>Buy</Link>
          <Link href={"/pre-own"}>Rent</Link>
          <Link href={"/new-home"}>Renovations</Link>
          <Link href={"/reports"}>Reports</Link>
          <Link href={"/home-center"}>Analytics</Link>
          <Link href={"#"}>Contact</Link>
=======
        <div className="flex w-full items-center gap-x-10 text-md flex-[0.6]">
          <Link href={"/"}>Homes for sell</Link>
          <Link href={"/pre-own"}>Pre-own homes</Link>
          <Link href={"/new-home"}>New homes</Link>
          <Link href={"/reports"}>Reports</Link>
          <Link href={"/home-center"}>Home Centers</Link>
          <Link href={"/contact"}>Contact</Link>
>>>>>>> e96b6e32454dfdeec2b9b42c465c51472010d369
        </div>

        <div className="flex w-full items-center justify-center gap-x-5  flex-[0.2]">
          <Badge dot color="green">
            <Avatar icon={<User />} style={{ backgroundColor: "#f56a00" }} size={"large"} />
          </Badge>
          <Link href={"/auth"}>
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<LogIn width={20} />}
              className="font-semibold"
            ></Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
