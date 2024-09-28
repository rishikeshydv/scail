import React from "react";
import logo from "@/public/logo/propfax-logo.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

export default function Aggregation() {
  return (
    <main>
      <section className="bg-[#0f0f0f] h-[100px] relative w-full flex items-center">
        <Link href={"/"} className="absolute left-1/2 transform -translate-x-1/2 justify-center">
          <Image src={logo} alt="Logo" className="w-[146px] h[38px]" />
        </Link>
        <div className="absolute right-10 flex space-x-4">
        <Button className="px-[30px] py-[18px] bg-[#0874de] text-[16px] rounded-[50px]">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.21158 6.85435L12.4583 1.3086C12.775 1.11865 13.1707 1.11872 13.4873 1.30878L22.726 6.85433C22.8766 6.9447 22.9688 7.10743 22.9688 7.28303V20C22.9688 20.5523 22.521 21 21.9688 21H3.96875C3.41647 21 2.96875 20.5523 2.96875 20V7.28315C2.96875 7.10748 3.06093 6.94471 3.21158 6.85435ZM4.96875 8.13261V19H20.9688V8.13214L12.9725 3.33237L4.96875 8.13261ZM13.0285 13.6983L18.3244 9.23532L19.6131 10.7647L13.0428 16.3017L6.33276 10.7717L7.60474 9.2283L13.0285 13.6983Z"
              fill="white"
            />
          </svg>
          &nbsp; EMAIL
        </Button>
        <Button className="px-[30px] py-[18px] bg-[#0874de] text-[16px] rounded-[50px]">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9688 2C18.521 2 18.9688 2.44772 18.9688 3V7H21.9688C22.521 7 22.9688 7.44772 22.9688 8V18C22.9688 18.5523 22.521 19 21.9688 19H18.9688V21C18.9688 21.5523 18.521 22 17.9688 22H7.96875C7.41647 22 6.96875 21.5523 6.96875 21V19H3.96875C3.41647 19 2.96875 18.5523 2.96875 18V8C2.96875 7.44772 3.41647 7 3.96875 7H6.96875V3C6.96875 2.44772 7.41647 2 7.96875 2H17.9688ZM16.9688 17H8.96875V20H16.9688V17ZM20.9688 9H4.96875V17H6.96875V16C6.96875 15.4477 7.41647 15 7.96875 15H17.9688C18.521 15 18.9688 15.4477 18.9688 16V17H20.9688V9ZM8.96875 10V12H5.96875V10H8.96875ZM16.9688 4H8.96875V7H16.9688V4Z"
              fill="white"
            />
          </svg>
          &nbsp; PRINT
        </Button>
        </div>
      </section>
      <section>
        {/* Left Section */}
        <div>
            <div className="">
            <div className="border-b-1">
                <p className="text-[18px]">This report is provided free of charge by:</p>
                <p className="text-[25px] font-semibold text-[#0874de]">ABC Realty</p>
                <p className="text-[22px]">4960E US Highway 377</p>
                <p className="text-[22px]">Granbury, TX 76049</p>
                <p className="text-[22px] font-semibold">817-579-1504</p>
            </div>
            <div>
            <p className="text-[18px] flex gap-2 text-[#808080]"><Star className="text-[#0874de]" fill="#0874de"/>3.8 <span className="text-[#0874de] font-semibold underline">46 Verified Reviews</span>
            <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z" fill="#0874DE"/>
            </svg>
            </p>
            <p className="text-[18px] flex gap-2 text-[#808080]"><Heart className="text-[#0874de]" fill="#0874de"/>538 <span className="text-[#0874de] font-semibold underline">Customer Favorites</span>
            </p>
            </div>
            </div>
        </div>
        {/* Right Section */}
        <div></div>
      </section>
    </main>
  );
}
