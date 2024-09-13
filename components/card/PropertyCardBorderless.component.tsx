import { USDollar } from "@/lib/price";
import React from "react";
import HomeImage from "@/assets/images/hero-house.png";
import Image from "next/image";

export const PropertyCardBorderless = () => {
  return (
    <div className="min-h-[420px] max-w-[400px] flex flex-col bg-[#F5F5F5] p-5">
      <div className="flex flex-[0.6] ">
        <div className="bg-white rounded-[30px] h-[250px] w-full">
          <Image src={HomeImage} alt="image" className="h-[120%] mt-[-50px]" />
        </div>
      </div>
      <div className="flex flex-[0.4] flex-col gap-y-3">
        <div
          className={
            "rounded-[50px]  text-white text-sm bg-[#ffa800] h-[35px] w-[90px] flex items-center justify-center"
          }
        >
          Pre Own
        </div>
        <div className="font-semibold text-[18px]">
          419 Toledo St. Lot 145, Conway, SC 29526
        </div>
        <div className="flex justify-between gap-x-4">
          <div className="text-[#0874DE] font-bold text-[18px] items-center">
            {USDollar.format(800000)}
          </div>
          <div className="flex gap-x-3">
            <div className="bg-white border border-[#0000001A] px-2 py-1 rounded-[8px] text-[13px] font-semibold">
              2 Beds
            </div>
            <div className="bg-white border border-[#0000001A] px-2 py-1 rounded-[8px] text-[13px] font-semibold">
              2 Baths
            </div>
            <div className="bg-white border border-[#0000001A] px-2 py-1 rounded-[8px] text-[13px] font-semibold">
              955 sqft
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
