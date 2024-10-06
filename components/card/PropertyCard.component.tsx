import { USDollar } from "@/lib/price";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import BedroomIcon from "@/assets/icons/hotel-bed.svg";
import DirectionIcon from "@/assets/icons/direction.svg";
import CloudIcon from "@/assets/icons/cloud.svg";
import { Button } from "../ui/button";

interface PropertyCardProps {
  name: string;
  adddress: string;
  price: number;
  isNew: boolean;
  image: string;
}

export const PropertyCard = ({
  image,
  name,
  adddress,
  price,
  isNew,
}: PropertyCardProps) => {
  const badgeColor = isNew ? "#0874DE" : "#FFA800";
  return (
<div className="rounded-2xl h-[550px] w-[400px] bg-gray-100 flex flex-col">
  <div className="flex-[0.5] bg-green-700 relative rounded-t-2xl overflow-hidden">
    {/* Wrapping the image in a container to limit overflow */}
    <div className="relative w-full h-full">
      <img
        src={image}
        alt="House card image"
        className="object-cover w-full h-full rounded-t-2xl"
      />
    </div>

    <div
      className={`absolute rounded-full top-5 left-5 text-white text-sm px-5 py-1`}
      style={{ backgroundColor: badgeColor }}
    >
      {isNew ? "New" : "Pre Owned"}
    </div>
  </div>
  <div className="flex-[0.5] px-5 py-4">
    <div className="font-semibold text-xl">{name}</div>
    <div className="text-gray-500 font-normal text-lg pt-2">{adddress}</div>

    <div className="flex justify-between gap-3 pt-5">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg p-3 w-full">
        <Image height={30} width={30} src={BedroomIcon} alt="Bedroom icon" />
        <div className="font-semibold text-sm">Bedrooms</div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-lg p-3 w-full">
        <Image height={30} width={30} src={CloudIcon} alt="Bathroom icon" />
        <div className="font-semibold text-sm">Bathrooms</div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-lg p-3 w-full">
        <Image height={30} width={30} src={DirectionIcon} alt="Living area icon" />
        <div className="font-semibold text-sm">Living Area</div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-8">
      <Button className="bg-[#0874de] rounded-[50px]">
        View Details&nbsp;<MoveRight width={15} />
      </Button>
      <div className="text-xl font-semibold">{USDollar.format(price)}</div>
    </div>
  </div>
</div>


  );
};
