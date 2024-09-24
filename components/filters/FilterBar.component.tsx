"use client";
import React from "react";
import { Row, Col } from "antd";
import { HouseIcon, MoveRight, Search } from "lucide-react";
import { ClassNameValue } from "tailwind-merge";
import { set } from "firebase/database";
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
export const FilterBar = ({
  className,
  searched,
  setSearched,
}: FilterBarProps) => {
  return (
    <div className={`${className}`}>
      <div
        className="bg-[#0874DE] w-[180px] p-[15px] flex items-center justify-center text-white text-[18px] gap-x-2 font-semibold"
        style={{
          borderRadius: "20px 20px 0px 0px",
        }}
      >
        <HouseIcon size={18} />
        <span>Find Property</span>
      </div>
      <div
        style={{
          borderRadius: "0px 20px 20px 20px",
        }}
        className="bg-white shadow-md flex items-center justify-between border min-h-[120px] px-[35px] py-[8px] flex-wrap"
      >
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Price</div>
          <div className="">
            <Select>
              <SelectTrigger className="w-full md:w-[180px] rounded-3xl ">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Bed</div>
          <div className="custom-select-container">
            <Select>
              <SelectTrigger className="w-[100px] rounded-3xl ">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Baths</div>
          <div className="custom-select-container">
            <Select>
              <SelectTrigger className="w-[100px]  rounded-3xl ">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Home Type</div>
          <div className="custom-select-container">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]  rounded-3xl ">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Square feet</div>
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-5  custom-select-container">
            <Select>
              <SelectTrigger className="w-full md:w-[150px] rounded-3xl ">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full md:w-[150px] rounded-3xl ">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Year built</div>
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-5 custom-select-container">
            <Select>
              <SelectTrigger className="w-full md:w-[150px] rounded-3xl ">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[150px] rounded-3xl ">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-y-[40px]">
          <div></div>
          <div className="py-2">
            <Button
              onClick={() => setSearched(true)}
              className="bg-[#0874DE] rounded-3xl text-[14px]"
            >
              Search&nbsp;<Search width={15} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
