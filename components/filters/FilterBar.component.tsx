"use client";
import React from "react";
import { Row, Col, Select, Button } from "antd";
import { HouseIcon, MoveRight, Search } from "lucide-react";
import { ClassNameValue } from "tailwind-merge";
import { set } from "firebase/database";

const { Option } = Select;

interface FilterBarProps {
  className?: string;
  searched:boolean
  setSearched:React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterBar = ({ className,searched,setSearched }: FilterBarProps) => {
  return (
    <div className={className}>
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
        className="bg-white shadow-md flex items-center justify-between border min-h-[120px] px-[35px] py-[20px] flex-wrap"
      >
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Price</div>
          <div className="custom-select-container">
            <Select placeholder="Select price" className="w-[180px]"  />
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Bed</div>
          <div className="custom-select-container">
            <Select placeholder="Select price" className="w-[100px]" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Baths</div>
          <div className="custom-select-container">
            <Select placeholder="Select price" className="w-[100px]" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Home Type</div>
          <div className="custom-select-container">
            <Select placeholder="Select price" className="w-[180px]" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Square feet</div>
          <div className="flex gap-x-5 custom-select-container">
            <Select placeholder="Min" className="w-[150px]" />
            <Select placeholder="Max" className="w-[150px]" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="text-[20px] font-semibold">Year built</div>
          <div className="flex gap-x-5 custom-select-container">
            <Select placeholder="Min" className="w-[150px]" />
            <Select placeholder="Max" className="w-[150px]"  />
          </div>
        </div>
        <div className="flex flex-col gap-y-[30px]">
          <div></div>
          <div className="">
            <Button
              type="primary"
              shape="round"
              size="middle"
              icon={<Search width={15} />}
              iconPosition="end"
              onClick={()=>setSearched(true)}
            >
           Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
