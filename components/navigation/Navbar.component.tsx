import { Button, Input } from "antd";
import { MoveRight, Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProfaxLogo from "@/assets/logo/profax-logo.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex px-10 items-center w-full text-white">
      {/* left section */}
      <div className="flex flex-[0.6] gap-x-20 py-8 items-center">
        <Link href={"/"} className="text-[50px] font-semibold">
          <Image src={ProfaxLogo} alt="Logo" width={150} />
        </Link>

        <div className="flex items-center gap-x-10 text-md">
          <Link href={"/"}>Homes for sell</Link>
          <Link href={"/pre-own"}>Pre-own homes</Link>
          <Link href={"/new-home"}>New homes</Link>
          <Link href={"/reports"}>Reports</Link>
          <Link href={"/home-center"}>Home Centers</Link>
          <Link href={"#"}>Contact</Link>
        </div>
      </div>

      {/* right section */}
      <div className="flex flex-[0.4] gap-x-3">
        <Input
          className="rounded-[100px] bg-[#262626] text-white border-none placeholder:text-white"
          placeholder="Find house"
          suffix={<Search size={24} />}
        />
        <Button
          shape="round"
          size="large"
          icon={<MoveRight width={15} />}
          iconPosition="end"
          className="bg-[#262626] border-none text-white"
        >
          BUY PROPERTY
        </Button>
        <Link href={"/auth"}>
          <Button type="primary" shape="round" size="large" icon={<User />}>
            LOGIN & SIGNUP
          </Button>
        </Link>
      </div>
    </nav>
  );
};
