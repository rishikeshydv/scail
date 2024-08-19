import { Button, Input } from "antd";
import { MoveRight, Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex px-10 items-center w-full text-white">
      {/* left section */}
      <div className="flex flex-[0.6] gap-x-20">
        <div className="text-[50px] font-semibold">Scail</div>

        <div className="flex items-center gap-x-10 text-md">
          <Link href={"#"}>Homes for sell</Link>
          <Link href={"#"}>Reports</Link>
          <Link href={"#"}>Improvements</Link>
          <Link href={"#"}>Home Values</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Contact</Link>
        </div>
      </div>

      {/* right section */}
      <div className="flex flex-[0.4] gap-x-3">
        <Input
          className="rounded-[100px] bg-[#262626] text-white border-none placeholder:text-white"
          placeholder="Find house"
          suffix={<Search size={24}  />}
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
        <Button type="primary" shape="round" size="large" icon={<User />} >
          LOGIN & SIGNUP
        </Button>
      </div>
    </nav>
  );
};
