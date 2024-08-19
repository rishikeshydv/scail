import { Button, Input } from "antd";
import { MoveRight, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import JumpingManImage from "@/assets/images/jumping-man.jpeg";

export const Footer = () => {
  return (
    <div className="min-h-[40vh] w-full bg-black text-white">
      <div className="w-full flex items-center justify-center font-semibold text-[50px] py-10 px-52">
        Scail
      </div>

      <div className="w-full flex border-t border-b border-[#FFFFFF26] py-3 items-center justify-evenly font-semibold text-lg">
        <div>About US</div>
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
        <div>Payment Policy</div>
        <div>Login & Register</div>
        <div>Secure Payment</div>
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
        <div className="flex-[0.5] flex">
          <div
            className="flex-[0.3] px-10 py-20 flex items-center flex-col"
            style={{ borderRadius: "50%" }}
          >
            <Image
              src={JumpingManImage}
              alt="jumping man image"
              style={{ borderRadius: "50%", height: 150, width: 150 }}
            />
            <Button
              type="primary"
              icon={<Phone />}
              shape="round"
              size="large"
              className="mt-[-10px]"
            >
              +44 00 000 000
            </Button>
          </div>
          <div className="flex-[0.7] text-[25px] font-semibold py-20">
            The message included <span className="text-[#0874DE]">details about a new</span> property that's just come
            on the market !
          </div>
        </div>
      </div>
    </div>
  );
};
