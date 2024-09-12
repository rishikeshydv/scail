"use client";
import { Avatar, Badge, Input } from "antd";
import {
  MoveRight,
  Search,
  LogIn,
  MapPinHouse,
  User,
  Globe,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ProfaxLogo from "@/assets/logo/profax-logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import logout from "@/firebase/auth/logout";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user && user.email) {
      setLoggedIn(true);
    }
  }, [user]);
  return (
    <nav
      className={cn(
        "flex px-10 items-center w-full text-white font-semibold gap-5",
        className
      )}
    >
      {/* left section */}
      <div className="flex w-full gap-x-20 py-8 items-center justify-around">
        <div className="text-[50px] font-semibold flex-[0.5] lg:flex-[0.3] flex gap-x-5 items-center justify-start cursor-pointer border">
          <MenuIcon size={24} className="flex lg:hidden" />
          <Link href={"/"}>
            <Image
              src={"/logo/propfax-logo.png"}
              alt="Logo"
              width={150}
              height={250}
            />
          </Link>
        </div>

        <div className="items-center gap-x-10 text-sm xl:text-lg hidden lg:flex flex-[0.4]">
          <Link href={"/buy"}>Buy</Link>
          <Link href={"/rent"}>Rent</Link>
          <Link href={"/contractors"}>Renovations</Link>
          <Link href={"/reports"}>Reports</Link>
          <Link href={"/home-center"}>Analytics</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>

        {/* Right Corner */}
        {loggedIn ? (
          <div className="flex w-full items-center justify-center gap-x-5  flex-[0.5] lg:flex-[0.2]">
            <Badge dot color="green">
              <Avatar
                icon={<User />}
                style={{ backgroundColor: "#f56a00" }}
                size={"large"}
              />
            </Badge>
            <Link href={"/auth"}>
              <Button className="font-semibold" onClick={logout}>
                <LogIn width={20} />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex  flex-[0.5] lg:flex-[0.3] justify-end border">
            <Globe className="text-[#0874DE] mt-2" />
            <Select>
              <SelectTrigger className="w-[100px] bg-transparent border-none text-sm lg:text-lg">
                <SelectValue placeholder="ENG 🇺🇸" defaultValue={"eng"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eng" className="text-sm lg:text-lg">
                  ENG 🇺🇸
                </SelectItem>
                <SelectItem value="esp" className="text-sm lg:text-lg">
                  ESP 🇪🇸
                </SelectItem>
              </SelectContent>
            </Select>

            <Button
              className="text-sm lg:text-lg py-4 font-semibold tracking-wide bg-[#0874DE] text-white rounded-3xl px-6"
              onClick={() => {
                router.push("/auth/login");
              }}
            >
              LOGIN&nbsp;&nbsp;
              <User width={18} />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
