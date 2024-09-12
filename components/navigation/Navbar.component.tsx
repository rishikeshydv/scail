"use client";
import { Avatar, Badge, Input } from "antd";
import {
  MoveRight,
  Search,
  LogIn,
  MapPinHouse,
  User,
  Globe,
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
        <Link href={"/"} className="text-[50px] font-semibold flex-[0.4]">
          <Image
            src={"/logo/propfax-logo.png"}
            alt="Logo"
            width={150}
            height={250}
          />
        </Link>

        <div className="flex items-center text-lg font-light">
          {/* <Link href={"/buy"}>Buy</Link> */}
          <Select>
            <SelectTrigger className="w-[170px] border-none bg-transparent text-lg">
              <SelectValue placeholder="Homes for Sell" />
            </SelectTrigger>
            <SelectContent className="bg-transparent">
              <SelectItem value="pre-owned" className="text-md text-white hover:bg-transparent" onClick={()=>router.push("/pre-owned")}>Pre-Owned Homes</SelectItem>
              <SelectItem value="new" className="text-md text-white hover:bg-transparent" onClick={()=>router.push("/new-homes")}>New Homes</SelectItem>
            </SelectContent>
          </Select>
          <Link href={"/rent"} className="ml-1">Reports</Link>
          <Select>
            <SelectTrigger className="w-[149px] border-none bg-transparent text-lg ml-5">
              <SelectValue placeholder="Renovations" />
            </SelectTrigger>
            <SelectContent className="bg-transparent">
              <SelectItem value="pre-owned" className="text-md text-white hover:bg-transparent" onClick={()=>router.push("/contractors")}>Plumbing</SelectItem>
              <SelectItem value="new" className="text-md text-white hover:bg-transparent" onClick={()=>router.push("/contractors")}>Electrician</SelectItem>
              <SelectItem value="new" className="text-md text-white hover:bg-transparent" onClick={()=>router.push("/contractors")}>HVAC</SelectItem>
            </SelectContent>
          </Select>
          <Link href={"/home-values"} className="">Home Values</Link>
          <Link href={"/contact"} className="ml-6">Contact</Link>
        </div>

        {/* Right Corner */}
        {loggedIn ? (
          <div className="flex w-full items-center justify-center gap-x-5  flex-[0.2]">
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
          <div className="flex">
            <Globe className="text-[#0874DE] mt-2" />
            <Select>
              <SelectTrigger className="w-[100px] bg-transparent border-none text-md font-light">
                <SelectValue placeholder="ENG 🇺🇸" defaultValue={"eng"} className="border-none bg-transparent"/>
              </SelectTrigger>
              <SelectContent className="bg-transparent">
                <SelectItem value="eng" className="text-sm text-white">
                  ENG 🇺🇸
                </SelectItem>
                <SelectItem value="esp" className="text-sm text-white">
                  ESP 🇪🇸
                </SelectItem>
              </SelectContent>
            </Select>

            <Button
              className="text-md py-4 font-light tracking-wide bg-[#0874DE] text-white rounded-3xl px-6"
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
