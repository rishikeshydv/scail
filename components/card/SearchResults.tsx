import { USDollar } from "@/lib/price";
import { Button } from "antd";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import BedroomIcon from "@/assets/icons/hotel-bed.svg";
import DirectionIcon from "@/assets/icons/direction.svg";
import CloudIcon from "@/assets/icons/cloud.svg";

interface PropertyCardProps {
  name: string;
  adddress: string;
  price: number;
  isNew: boolean;
  image: string;
}

export const SearchResults = ({
  image,
  name,
  adddress,
  price,
  isNew,
}: PropertyCardProps) => {
  const badgeColor = isNew ? "#0874DE" : "#FFA800";
  return (
    <div className="rounded-[40px] md:h-[580px] md:w-[450px] bg-[#F5F5F5] flex flex-col">
      <div
        className="flex-[0.5] bg-green-700 relative"
        style={{ borderRadius: "40px 40px 0px 0px" }}
      >
        <Image
          src={image}
          alt="House card image"
          style={{ borderRadius: "40px 40px 0px 0px" }}
          className="h-full w-auto"
          height={0}
          width={0}
          sizes="100vw"
        />

        <div
          className={
            "absolute rounded-[50px] top-5 left-5  text-white text-sm px-5 py-1"
          }
          style={{ backgroundColor: badgeColor }}
        >
          {isNew ? "New" : "Pre Own"}
        </div>
      </div>
      <div className="flex-[0.5] px-[20px] py-[15px]">
        <div className="font-semibold text-xl">{name}</div>
        <div className="text-[#808080] font-normal text-lg pt-2">
          {adddress}
        </div>

        <div className="flex justify-between gap-x-3 pt-5">
          <div className="flex flex-col items-center justify-evenly bg-white rounded-[10px] p-[10px] w-full">
            <Image height={30} width={30} src={BedroomIcon} alt="icon" />
            <div className="font-semibold text-[13px]">Bedrooms</div>
          </div>
          <div className="flex flex-col items-center justify-evenly bg-white rounded-[10px] p-[10px] w-full">
            <Image height={30} width={30} src={CloudIcon} alt="icon" />
            <div className="font-semibold text-[13px]">Bathrooms</div>
          </div>
          <div className="flex flex-col items-center justify-evenly bg-white rounded-[10px] p-[10px] w-full">
            <Image height={30} width={30} src={DirectionIcon} alt="icon" />
            <div className="font-semibold text-[13px]">Living area</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8">
          <Button
            type="primary"
            shape="round"
            size="middle"
            icon={<MoveRight width={15} />}
            iconPosition="end"
          >
            View Details
          </Button>
          <div className="text-xl font-semibold">{USDollar.format(price)}</div>
        </div>
      </div>
    </div>
  );
};
