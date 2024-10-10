"use client";
import { USDollar } from "@/lib/price";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
interface PropertyCardBorderlessProps {
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: StaticImageData;
}

export const PropertyCardBorderless = ({address,price,beds,baths,sqft,image}:PropertyCardBorderlessProps) => {
  const router = useRouter();
  return (
    <div className="min-h-[420px] max-w-[400px] flex flex-col bg-[#F5F5F5] p-5 gap-[16px] hover:cursor-pointer"  onClick={()=>router.push("/new-homes/details/uuidv3")}>
      <div className="flex flex-[0.6] ">
        <div className="bg-white rounded-[30px] h-[250px] w-full">
          <Image src={image} alt="image" className="h-[120%] mt-[-50px]" />
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
          {address}
        </div>
        <div className="flex justify-between gap-x-4">
          <div className="text-[#0874DE] font-bold text-[18px] items-center">
            {USDollar.format(price)}
          </div>
          <div className="flex gap-x-3">
            <div className="bg-white border border-[#0000001A] px-2 py-1 rounded-[8px] text-[13px] font-semibold">
              {beds} Beds
            </div>
            <div className="bg-white border border-[#0000001A] px-2 py-1 rounded-[8px] text-[13px] font-semibold">
              {baths} Baths
            </div>
            <div className="bg-white border border-[#0000001A] px-2 py-1 rounded-[8px] text-[13px] font-semibold">
              {sqft} sqft
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
