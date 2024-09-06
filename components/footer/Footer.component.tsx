import { Button } from "antd";
import { MoveRight, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import JumpingManImage from "@/assets/images/jumping-man.jpeg";
import ProfaxLogo from "@/assets/logo/profax-logo.png";

export const Footer = () => {
  return (
    <div className="min-h-[40vh] w-full bg-black text-white">
      <div className="w-full flex items-center justify-start font-semibold text-[50px] py-14 px-40">
        <Image src={ProfaxLogo} alt="Logo" width={150} />
      </div>

<<<<<<< HEAD
      <div className="w-full flex border-t border-b border-[#FFFFFF26] py-3 items-center justify-evenly font-semibold text-lg">
        <div>About Us</div>
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
        <div>Payment Policy</div>
        <div>Login & Register</div>
        <div>Secure Payment</div>
=======
      <div className="w-full flex border-t border-b border-[#FFFFFF26]  items-center gap-x-5 px-40 font-semibold text-lg">
        <div className="footer-link">About US</div>
        <div className="footer-link">Privacy Policy</div>
        <div className="footer-link">Terms & Conditions</div>
        <div className="footer-link">Payment Policy</div>
        <div className="footer-link">Login & Register</div>
        <div className="footer-link">Secure Payment</div>
>>>>>>> e96b6e32454dfdeec2b9b42c465c51472010d369
      </div>

      <div className="flex mx-40">
        <div className="flex-[0.5] border-r border-[#FFFFFF26] my-20 flex gap-y-8 flex-col">
          <div className="font-bold text-[30px]">
            Subscribe <span className="text-[#0874DE]">Newsletter</span>
          </div>
          <div className="w-3/4 font-medium text-[18px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page distribution of letters, as opposed.
          </div>
          <div>
            <input
              className="h-[40px] bg-[#262626] text-[#808080] px-8 py-3 border-none outline-none"
              type="email"
              placeholder="Enter your email"
              style={{
                borderRadius: "50px 0px 0px 50px",
              }}
            />
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<MoveRight width={15} />}
              iconPosition="end"
              style={{
                borderRadius: "0px 50px 50px 0px",
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex-[0.5] flex items-center px-10 justify-around">
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
        </div>
      </div>

      <div className="font-medium text-[#808080] text-[18px] pb-10 flex items-center justify-center">
        &copy; 2024 is Proudly Powered by Propfax
      </div>


    </div>
  );
};
