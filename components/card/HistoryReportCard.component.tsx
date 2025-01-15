"use client"
import Image, { StaticImageData } from "next/image";
import React from "react";

interface HistoryReportCardProps {
  position: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export const HistoryReportCard = ({
  position,
  title,
  description,
  image,
}: HistoryReportCardProps) => {
  return (
    <div className="rounded-[40px] bg-[#F5F5F5] px-[40px] py-[15px] flex border border-[#0000000D]">
      <div className="flex-[0.7]">
        <div className="rounded-[50px] py-[13px] px-[26px] border border-[#0000001A] bg-white w-[120px] font-bold text-[14px] flex items-center justify-center">
          STEP: {position}
        </div>

        <div className="font-bold text-[25px] pt-4">{title}</div>

        <div className="font-normal text-[20px] text-[#808080] py-4">
          {description}
        </div>

      </div>
      <div className="flex-[0.3]">
        <Image src={image} alt="mobile phone image" />
      </div>
    </div>
  );
};
