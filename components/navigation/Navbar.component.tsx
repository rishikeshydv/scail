"use client"
import { Avatar, Badge, Button, Input } from "antd";
import { MoveRight, Search, LogIn, MapPinHouse, User, Globe} from "lucide-react";
import Link from "next/link";
import React, { useState , useEffect} from "react";
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
} from "@/components/ui/select"

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
        <Link href={"/"} className="text-[50px] font-semibold flex-[0.2]">
          <Image src={"/logo/propfax-logo.png"} alt="Logo" width={150} height={250}/>
        </Link>

        <div className="flex items-center gap-x-10 text-md">
          <Link href={"/buy"}>Buy</Link>
          <Link href={"/rent"}>Rent</Link>
          <Link href={"/new-home"}>Renovations</Link>
          <Link href={"/reports"}>Reports</Link>
          <Link href={"/home-center"}>Analytics</Link>
          <Link href={"#"}>Contact</Link>
        </div>

      {/* Right Corner */}
      {
        loggedIn ? (
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
              onClick={logout}
            ></Button>
          </Link>
        </div>
        ):(
          <div className="flex">
            <Globe className="text-[#0874DE] mt-2"/>
            <Select>
          <SelectTrigger className="w-[100px] bg-transparent border-none">
            <SelectValue placeholder="ENG 🇺🇸" defaultValue={"eng"}/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eng">ENG 🇺🇸</SelectItem>
            <SelectItem value="esp">ESP 🇪🇸</SelectItem>
          </SelectContent>
        </Select>

            <Button
            type="primary"
            shape="round"
            icon={<User width={20} />}
            iconPosition="start"
            className="text-md py-4 font-semibold tracking-wide"
            onClick={() => {
             router.push("/auth/login")
            }}
            >
              LOGIN
              </Button>
          </div>
        )
      }
      </div>
    </nav>
  );
};
