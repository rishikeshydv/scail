"use client";
import {MailCheck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import AddEmails from "@/queries/newsletters/addEmails";
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { CiYoutube } from "react-icons/ci";
import Link from "next/link";
import { Button } from "../ui/button";
export const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [textColor, setTextColor] = useState("text-red-400");
  return (
    <div className="min-h-[40vh] w-[100vw] overflow-clip bg-[#0F0F0F] text-white">
      <div className="w-full flex items-start justify-start font-semibold text-[50px] py-10 px-10 md:px-20">
        <Image src={"/logo/propfax-logo.png"} alt="Logo" width={150} height={250} />
      </div>
      {/* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(8, 116, 222, 0.15) 100%); */}

      <div className="w-full grid grid-cols-2 border-t border-b border-[#FFFFFF26] font-semibold text-lg text-white md:grid-cols-6">
  <Link href={"/contact"} className="text-center py-2 hover:bg-custom-gradient">About Us</Link>
  <Link href={"/policies"} className="text-center py-2 hover:bg-custom-gradient">Privacy Policy</Link>
  <Link href={"/policies"} className="text-center py-2 hover:bg-custom-gradient">Terms & Conditions</Link>
  <Link href={"/payment"} className="text-center py-2 hover:bg-custom-gradient">Payment Policy</Link>
  <Link href={"/auth/login"} className="text-center py-2 hover:bg-custom-gradient">Login & Register</Link>
  <Link href={"/payment"} className="text-center py-2 hover:bg-custom-gradient">Secure Payment</Link>
</div>




      <div className="flex xl:flex-row flex-col">
        <div className="flex-[0.5] xl:border-r border-[#FFFFFF26] my-20 flex gap-y-8 flex-col">
          <div className="font-bold text-[30px] mx-10 lg:mx-20">
            Subscribe <span className="text-[#0874DE]">Newsletter</span>
          </div>
          <div className="w-3/4 font-medium text-[18px] mx-10 lg:mx-20">
          Stay Informed: Subscribe to Our Newsletter for the Latest Updates and Insights!
          </div>
          <div className="flex mx-auto lg:mx-20">
            <input
              className="h-[40px] bg-[#262626] text-[#808080] px-8 py-3 border-none outline-none"
              type="email"
              placeholder="Enter your email"
              style={{
                borderRadius: "50px 0px 0px 50px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              onClick={async () => {
                if (email) {
                  //check if the email is valid
                  if (!email.includes("@") || !email.includes(".")) {
                    setErrorMsg("Please enter a valid email");
                    return;
                  }
                  const res = await AddEmails(email);
                  if (res === 1) {
                    setTextColor("text-red-400");
                    setErrorMsg("Email already exists");
                  } else {
                    setTextColor("text-green-400");
                    setErrorMsg("Subscribed successfully");
                    setEmail("");
                  }
                } else {
                  setTextColor("text-red-400");
                  setErrorMsg("Please enter your email");
                }
              }}
              className="bg-[#0874de] rounded-l-none rounded-r-3xl"
              style={{
                borderRadius: "0px 50px 50px 0px",
              }}
            >
              Subscribe&nbsp;&nbsp;<MailCheck width={18} />
            </Button>
          </div>
        </div>
        <div className="flex-[0.5] flex flex-wrap items-center justify-between xl:justify-around gap-4 mx-6 lg:mx-20 md:ml-10">
          <div className="flex flex-col gap-y-3">
            <div className="font-semibold text-[24px]">Products</div>
            <div className="font-medium text-[18px] text-[#808080]">
              Used House For Sale
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              House Value
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              House Reports
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              Sell My House
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
             Dealer Support
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="font-semibold text-[24px]">Resources</div>
            <div className="font-medium text-[18px] text-[#808080]">
              Used House For Sale
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              House Value
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              House Reports
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              Sell My House
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
             Dealer Support
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="font-semibold text-[24px]">Learn More</div>
            <div className="font-medium text-[18px] text-[#808080]">
              Used House For Sale
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              House Value
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              House Reports
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
              Sell My House
            </div>
            <div className="font-medium text-[18px] text-[#808080]">
             Dealer Support
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="font-medium text-[18px] rounded-lg bg-[#0874DE] p-2">
             <FaFacebookF className="text-[#ffffff]"/>
            </div>
            <div className="font-medium text-[18px] text-[#ffffff] rounded-lg bg-[#0874DE] p-2">
              <FaInstagram className="text-[#ffffff]"/>
            </div>
            <div className="font-medium text-[18px] text-[#ffffff] rounded-lg bg-[#0874DE] p-2">
              <FaXTwitter className="text-[#ffffff]"/>
            </div>
            <div className="font-medium text-[18px] text-[#ffffff] rounded-lg bg-[#0874DE] p-2">
              <GrLinkedinOption className="text-[#ffffff]"/>
            </div>
            <div className="font-medium text-[18px] text-[#ffffff] rounded-lg bg-[#0874DE] p-2">
              <CiYoutube className="text-[#ffffff]"/>
            </div>
          </div>
        </div>
      </div>

      <div className="font-medium text-[#808080] text-[18px] pb-10 items-center justify-center flex flex-col">
        <p className={`font-semibold ${textColor}`}>{errorMsg}</p>
{/* 
        <div className='flex items-center justify-center gap-2 md:gap-4 p-2 '>
    <img alt="" src={"/images/app-store-badge.svg"} className="w-[130px]"/>
          <img alt="" src={"/images/google-play-badge.svg"} className="w-[145px]"/>
  </div> */}

        <p className="">&copy; 2024 Propfax</p>
      </div>


    </div>
  );
};
