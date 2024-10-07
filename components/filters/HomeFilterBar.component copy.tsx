"use client";
import React from "react";
import { HouseIcon, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

interface FilterBarProps {
  className?: string;
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
}
export const HomeFilterBar = ({
  className,
  searched,
  setSearched,
}: FilterBarProps) => {
  return (
    <div className={`${className}`}>
  <div
    className="bg-[#0874DE] w-full md:w-[180px] p-[15px] flex items-center justify-center text-white text-[18px] gap-x-2 font-semibold"
    style={{
      borderRadius: "20px 20px 0px 0px",
    }}
  >
    <HouseIcon size={18} />
    <span>Find Property</span>
  </div>
  <div
    style={{
      borderRadius: "0px 0px 20px 20px",
    }}
    className="bg-white shadow-md flex flex-col md:flex-row items-center justify-between border min-h-[120px] px-[20px] md:px-[35px] py-[10px] md:py-[8px] flex-wrap gap-y-5"
  >
    <div className="flex flex-col gap-y-[10px] w-full md:w-auto">
      <div className="text-[16px] md:text-[20px] font-semibold">Price</div>
      <div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] rounded-3xl">
            <SelectValue placeholder="Select a Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="p1" className="">$0 - $300,000</SelectItem>
            <SelectItem value="p2">$300,000 - $500,000</SelectItem>
            <SelectItem value="p3">$500,000 - $800,00</SelectItem>
            <SelectItem value="p4">$800,000 - More</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className="flex gap-y-[10px] md:gap-x-5 w-full md:w-auto md:space-x-0 space-x-6">
    <div className="flex flex-col gap-y-[10px] w-full md:w-auto">
      <div className="text-[16px] md:text-[20px] font-semibold">Bed</div>
      <Select>
        <SelectTrigger className="w-full md:w-[120px] rounded-3xl">
          <SelectValue placeholder="0" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bed0">0</SelectItem>
          <SelectItem value="bed1">1</SelectItem>
          <SelectItem value="bed2">2</SelectItem>
          <SelectItem value="bed3">3</SelectItem>
          <SelectItem value="bed4">4</SelectItem>
          <SelectItem value="bed+">5+</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="flex flex-col gap-y-[10px] w-full md:w-auto">
      <div className="text-[16px] md:text-[20px] font-semibold">Baths</div>
      <Select>
        <SelectTrigger className="w-full md:w-[120px] rounded-3xl">
          <SelectValue placeholder="1" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bed1">1</SelectItem>
          <SelectItem value="bed2">2</SelectItem>
          <SelectItem value="bed3">3</SelectItem>
          <SelectItem value="bed4">4</SelectItem>
          <SelectItem value="bed5">5</SelectItem>
          <SelectItem value="bed+">6+</SelectItem>
        </SelectContent>
      </Select>
    </div>
    </div>
    <div className="flex flex-col gap-y-[10px] w-full md:w-auto">
      <div className="text-[16px] md:text-[20px] font-semibold">Home Type</div>
      <Select>
        <SelectTrigger className="w-full md:w-[180px] rounded-3xl">
          <SelectValue placeholder="Select a Home Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="house">Houses</SelectItem>
          <SelectItem value="townhomes">Townhomes</SelectItem>
          <SelectItem value="multi">Multi-family</SelectItem>
          <SelectItem value="condos">Condos</SelectItem>
          <SelectItem value="land">Land</SelectItem>
          <SelectItem value="apartments">Apartments</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="flex flex-col gap-y-[10px] w-full md:w-auto">
      <div className="text-[16px] md:text-[20px] font-semibold">Square feet</div>
      <div className="flex gap-y-3 md:flex-row gap-x-5">
        <Select>
          <SelectTrigger className="w-full md:w-[120px] rounded-3xl">
            <SelectValue placeholder="Min. Sqft" />
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="min0">0</SelectItem>
            <SelectItem value="min1">500</SelectItem>
            <SelectItem value="min2">1000</SelectItem>
            <SelectItem value="min3">2000</SelectItem>
            <SelectItem value="min4">5000</SelectItem>
            <SelectItem value="min-over">5000+</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[120px] rounded-3xl">
            <SelectValue placeholder="Max. Sqft" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="max1">500</SelectItem>
            <SelectItem value="max2">1000</SelectItem>
            <SelectItem value="max3">2000</SelectItem>
            <SelectItem value="max4">5000</SelectItem>
            <SelectItem value="max-over">5000+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className="flex flex-col gap-y-[10px] w-full md:w-auto">
      <div className="text-[16px] md:text-[20px] font-semibold">Search Type</div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] rounded-3xl">
            <SelectValue placeholder="Search Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">New Homes</SelectItem>
            <SelectItem value="dark">Pre-Homes</SelectItem>
          </SelectContent>
        </Select>
    </div>
    <div className="flex flex-col gap-y-[40px] w-full md:w-auto">
      <div></div>
      <div className="py-2">
        <Button
          onClick={() => setSearched(true)}
          className="w-full md:w-auto bg-[#0874DE] rounded-3xl text-[14px]"
        >
          Search&nbsp;<Search width={15} />
        </Button>
      </div>
    </div>
  </div>
</div>

  );
};
