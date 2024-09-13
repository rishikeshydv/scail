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
import { FaAngleRight } from "react-icons/fa6";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user] = useAuthState(auth);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    if (user && user.email) {
      setLoggedIn(true);
    }
  }, [user]);

  const handleOpenMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <div className="">
      <nav
        className={cn(
          "flex px-10 items-center w-full text-white font-semibold gap-5",
          className
        )}
      >
        {/* left section */}
        <div className="flex w-full gap-x-20 py-8 items-center justify-around">
          <div className="text-[50px] font-semibold flex-[0.5] lg:flex-[0.3] justify-start cursor-pointer items-center flex gap-x-4">
            <MenuIcon size={24} onClick={handleOpenMobileNav} className="xl:hidden block" />
            <Link href={"/"}>
              <Image
                src={"/logo/propfax-logo.png"}
                alt="Logo"
                width={150}
                height={250}
              />
            </Link>
          </div>

          <div className="hidden xl:flex xl:gap-6 justify-center items-center font-light">
                <Dropdown isOpen={isDropdownOpen} className="bg-[#262626] text-[#777777]" onMouseLeave={()=>setIsDropdownOpen(false)}>
              <DropdownTrigger className="" >
                <Button className="text-[18px] bg-transparent hover:bg-transparent font-light" onMouseEnter={()=>setIsDropdownOpen(true)}>
                Homes for Sell
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="pre-owned" className="" onClick={()=>setIsDropdownOpen(false)}><Link href={"/pre-owned"} className="text-[16px]">Pre-Owned Homes</Link></DropdownItem>
                <DropdownItem key="new-homes" onClick={()=>setIsDropdownOpen(false)}><Link href={"/new-homes"} className="text-[16px]">New Homes</Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Link href={"/reports"} className="ml-1 text-[18px]">
              Reports
            </Link>
            {/* <Select onValueChange={(value)=>router.push("/contractors")}>
              <SelectTrigger className="w-[149px] border-none bg-transparent text-[18px] ml-5">
                <SelectValue placeholder="Renovations" />
              </SelectTrigger>
              <SelectContent className="bg-transparent">
                <SelectItem
                  value="pre-owned"
                  className="text-[18px] text-white hover:bg-transparent"
                  onClick={() => router.push("/contractors")}
                >
                  Plumbing
                </SelectItem>
                <SelectItem
                  value="new"
                  className="text-[18px] text-white hover:bg-transparent"
                  onClick={() => router.push("/contractors")}
                >
                  Electrician
                </SelectItem>
                <SelectItem
                  value="new"
                  className="text-[18px] text-white hover:bg-transparent"
                  onClick={() => router.push("/contractors")}
                >
                  HVAC
                </SelectItem>
              </SelectContent>
            </Select>
            <Link href={"/home-values"} className="text-[18px]">
              Home Values
            </Link> */}
            <Link href={"/contact"} className="ml-6 text-[18px]">
              Contact
            </Link>
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
            <div className="flex flex-[0.5] lg:flex-[0.2] justify-end">
              <Globe className="text-[#0874DE] mt-2" />
              <Select>
                <SelectTrigger className="w-[100px] bg-transparent border-none text-[18px] font-light">
                  <SelectValue
                    placeholder="ENG 🇺🇸"
                    defaultValue={"eng"}
                    className="border-none bg-transparent"
                  />
                </SelectTrigger>
                <SelectContent className="bg-transparent">
                  <SelectItem value="eng" className="text-[18px] text-white">
                    ENG 🇺🇸
                  </SelectItem>
                  <SelectItem value="esp" className="text-[18px] text-white">
                    ESP 🇪🇸
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button
                className="text-[18px] py-4 font-light tracking-wide bg-[#0874DE] text-white rounded-3xl px-6"
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
      <div
        className={`h-screen w-full bg-[#262223] ${
          !isMobileNavOpen ? "hidden" : "flex"
        } xl:hidden flex-col w-full items-start text-white gap-y-8 px-10 pt-5`}
      >
          {/* <Link href={"/buy"}>Buy</Link> */}
          <Select>
            <SelectTrigger className="w-[170px] border-none bg-transparent text-lg text-left px-[-18px]">
              <SelectValue placeholder="Homes for Sell" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem
                value="pre-owned"
                className="text-md  hover:bg-transparent"
                onClick={() => router.push("/pre-owned")}
              >
                Pre-Owned Homes
              </SelectItem>
              <SelectItem
                value="new"
                className="text-md  hover:bg-transparent"
                onClick={() => router.push("/new-homes")}
              >
                New Homes
              </SelectItem>
            </SelectContent>
          </Select>
          <Link href={"/reports"} className="ml-1">
            Reports
          </Link>
          <Select>
            <SelectTrigger className="w-[149px] border-none bg-transparent text-left text-lg  px-[-18px]">
              <SelectValue placeholder="Renovations" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem
                value="pre-owned"
                className="text-md  hover:bg-transparent"
                onClick={() => router.push("/contractors")}
              >
                Plumbing
              </SelectItem>
              <SelectItem
                value="new"
                className="text-md  hover:bg-transparent"
                onClick={() => router.push("/contractors")}
              >
                Electrician
              </SelectItem>
              <SelectItem
                value="new"
                className="text-md  hover:bg-transparent"
                onClick={() => router.push("/contractors")}
              >
                HVAC
              </SelectItem>
            </SelectContent>
          </Select>
          <Link href={"/home-values"} className="">
            Home Values
          </Link>
          <Link href={"/contact"} className="">
            Contact
          </Link>
        </div>
    </div>
  );
};
