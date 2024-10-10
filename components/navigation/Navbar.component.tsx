"use client";
import { Avatar, Badge} from "antd";
import {
  LogIn,
  User,
  Globe,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import logout from "@/firebase/auth/logout";
import logo from "@/public/logo/propfax-logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
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
    // console.log(user.email)
    }
    else{
      console.log("no user")
    }
  }, [user]);

  const handleOpenMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <div className="">
      <nav
        className={cn(
          "flex items-center justify-center w-full text-white font-semibold gap-5",
          className
        )}
      >
        {/* left section */}
        <div className="flex w-full gap-x-10 py-8 items-center justify-between px-8 md:px-16">
          <div className="text-[50px] font-semibold items-center cursor-pointer flex gap-x-4">
            <MenuIcon
              size={24}
              onClick={handleOpenMobileNav}
              className="xl:hidden block"
            />
            <Link href={"/"}>
              <Image src={logo} alt="Logo" className="w-[146px] h[38px]" />
            </Link>
            <div className="hidden xl:flex xl:gap-10 items-center font-light px-7">
              <Dropdown
                isOpen={isDropdownOpen}
                className="bg-[#262626] text-[#777777]"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <DropdownTrigger className="">
                  <Button
                    className="text-[18px] bg-transparent hover:bg-transparent font-light"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                  >
                    Homes for Sale
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    key="pre-owned"
                    className="text-[16px]"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/pre-owned");
                    }}
                  >
                    Pre-Owned Homes
                  </DropdownItem>
                  <DropdownItem
                    key="new-homes"
                    className="text-[16px]"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/new-homes");
                    }}
                  >
                    New Homes
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Link
                href={"/reports"}
                className="ml-1 text-[18px] hover:text-[17px] hover:text-[#777777]"
              >
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
              <Link
                href={"/contact"}
                className="ml-6 text-[18px] hover:text-[17px] hover:text-[#777777]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Corner */}
          {loggedIn ? (
            <div className="flex w-full items-center justify-center gap-x-5  flex-[0.2]">
              <Badge dot color="green">
                <Avatar
                
                  icon={<User />}
                  style={{ backgroundColor: "#f56a00" }}
                  size={40}
                />
              </Badge>
                <Button className="font-semibold hover:cursor-pointer bg-[#0874de] rounded-full p-3" onClick={()=>{
                  logout();
                  router.push("/")
                }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z" fill="white"/>
</svg>

                </Button>

            </div>
          ) : (
            <div className="flex flex-[0.5] lg:flex-[0.3] justify-end">
              <Globe className="text-[#0874DE] mt-2 hidden md:block" />
              <Select>
                <SelectTrigger className="w-[105px] bg-transparent border-none text-[18px] font-light hidden md:flex">
                  <SelectValue
                    placeholder="ENG 🇺🇸"
                    defaultValue={"eng"}
                    className="border-none bg-transparent"
                  />
                </SelectTrigger>
                <SelectContent className="bg-transparent">
                  <SelectItem value="eng" className="text-md text-white">
                    ENG 🇺🇸
                  </SelectItem>
                  <SelectItem value="esp" className="text-md text-white">
                    ESP 🇪🇸
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button
                className="text-sm md:text-[18px] py-4 font-light tracking-wide bg-[#0874DE] text-white rounded-3xl px-6"
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
        className={`absolute bg-[#262223] ${
          !isMobileNavOpen ? "hidden" : "flex"
        } xl:hidden flex-col items-start text-white gap-y-8 p-8 rounded-2xl`}
      >
        {/* <div className="flex gap-x-5 text-black">
          <Globe className="text-[#0874DE] mt-2 block md:hidden" />
          <Select>
            <SelectTrigger className="w-[100px]  border-none text-[18px] font-light flex md:hidden">
              <SelectValue
                placeholder="ENG 🇺🇸"
                defaultValue={"eng"}
                className="border-none "
              />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="eng" className="text-md ">
                ENG 🇺🇸
              </SelectItem>
              <SelectItem value="esp" className="text-md ">
                ESP 🇪🇸
              </SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        {/* <Link href={"/buy"}>Buy</Link> */}
        <Dropdown
                className="bg-[#262626] text-[#777777]"
              >
                <DropdownTrigger className="px-[-18px]">
                  <Button
                    className="text-[18px] bg-transparent hover:bg-transparent font-light"
                  >
                    Homes for Sale
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    key="pre-owned"
                    className="text-[16px]"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/pre-owned");
                    }}
                  >
                    Pre-Owned Homes
                  </DropdownItem>
                  <DropdownItem
                    key="new-homes"
                    className="text-[16px]"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/new-homes");
                    }}
                  >
                    New Homes
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
        <Link href={"/reports"} className="ml-1 text-lg">
          Reports
        </Link>
        {/* <Select>
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
        </Link> */}
        <Link href={"/contact"} className="text-lg">
          Contact
        </Link>
      </div>
    </div>
  );
};
