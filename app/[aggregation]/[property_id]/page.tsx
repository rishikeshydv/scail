"use client";
import React from "react";
import logo from "@/public/logo/propfax-logo.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/progress";
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export default function Aggregation() {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#0874de",
    },
  } satisfies ChartConfig;
  return (
    <main className="overflow-hidden">
      <section className="bg-[#0f0f0f] md:h-[100px] md:relative w-full flex flex-col py-[20px] md:py-0 gap-[21px] md:gap-0 md:flex-row items-center">
        <Link
          href={"/"}
          className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:justify-center"
        >
          <Image src={logo} alt="Logo" className="w-[146px] h[38px]" />
        </Link>
        <div className="md:absolute md:right-10 flex space-x-4">
          <Button className="px-[30px] py-[18px] bg-[#0874de] text-[16px] rounded-[50px]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.21158 6.85435L12.4583 1.3086C12.775 1.11865 13.1707 1.11872 13.4873 1.30878L22.726 6.85433C22.8766 6.9447 22.9688 7.10743 22.9688 7.28303V20C22.9688 20.5523 22.521 21 21.9688 21H3.96875C3.41647 21 2.96875 20.5523 2.96875 20V7.28315C2.96875 7.10748 3.06093 6.94471 3.21158 6.85435ZM4.96875 8.13261V19H20.9688V8.13214L12.9725 3.33237L4.96875 8.13261ZM13.0285 13.6983L18.3244 9.23532L19.6131 10.7647L13.0428 16.3017L6.33276 10.7717L7.60474 9.2283L13.0285 13.6983Z"
                fill="white"
              />
            </svg>
            &nbsp; EMAIL
          </Button>
          <Button className="px-[30px] py-[18px] bg-[#0874de] text-[16px] rounded-[50px]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9688 2C18.521 2 18.9688 2.44772 18.9688 3V7H21.9688C22.521 7 22.9688 7.44772 22.9688 8V18C22.9688 18.5523 22.521 19 21.9688 19H18.9688V21C18.9688 21.5523 18.521 22 17.9688 22H7.96875C7.41647 22 6.96875 21.5523 6.96875 21V19H3.96875C3.41647 19 2.96875 18.5523 2.96875 18V8C2.96875 7.44772 3.41647 7 3.96875 7H6.96875V3C6.96875 2.44772 7.41647 2 7.96875 2H17.9688ZM16.9688 17H8.96875V20H16.9688V17ZM20.9688 9H4.96875V17H6.96875V16C6.96875 15.4477 7.41647 15 7.96875 15H17.9688C18.521 15 18.9688 15.4477 18.9688 16V17H20.9688V9ZM8.96875 10V12H5.96875V10H8.96875ZM16.9688 4H8.96875V7H16.9688V4Z"
                fill="white"
              />
            </svg>
            &nbsp; PRINT
          </Button>
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:h-screen">
        {/* Left Section */}
        <div className=" p-[10px] md:p-[30px] md:min-w-[440px] md:sticky md:top-0">
          <div className="border-1">
            <div className="p-[20px] md:p-[60px] ">
              <div className="border-b-1">
                <p className="text-[18px]">This report is provided by:</p>
                <p className="text-[25px] font-semibold text-[#0874de]">
                  ABC Realty
                </p>
                <p className="text-[22px]">4960E US Highway 377</p>
                <p className="text-[22px]">Granbury, TX 76049</p>
                <p className="text-[22px] font-semibold">817-579-1504</p>
              </div>
              <div>
                <p className="text-[18px] flex gap-2 text-[#808080]">
                  <Star className="text-[#0874de]" fill="#0874de" />
                  3.8{" "}
                  <span className="text-[#0874de] font-semibold underline">
                    46 Verified Reviews
                  </span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z"
                      fill="#0874DE"
                    />
                  </svg>
                </p>
                <p className="text-[18px] flex gap-2 text-[#808080]">
                  <Heart className="text-[#0874de]" fill="#0874de" />
                  538{" "}
                  <span className="text-[#0874de] font-semibold underline">
                    Customer Favorites
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full border-l-1 md:h-screen md:overflow-y-auto">
          {/* Header */}
          <div className="h-[80px] text-center md:text-left bg-[#0874de] py-[20px] text-[30px] text-white font-semibold md:px-[30px]">
            Property History
          </div>
          {/* First Section */}
          <div className="flex md:flex-row flex-col border-b-1">
            {/* First Left Section */}
            <div className="flex md:flex-[0.35] flex-col gap-[30px] md:gap-[60px] p-[20px] md:p-[40px]">
              <div className="text-[22px]">
                <p className="font-semibold">1000 TESTING DR</p>
                <p>Arlington, TX, 76016</p>
              </div>
              <div>
                <p className="text-[18px]">
                  This report is provided free of charge by:
                </p>
                <p className="text-[25px] font-semibold text-[#0874de]">
                  ABC Realty
                </p>
                <p className="text-[18px] flex gap-2 text-[#808080]">
                  <Star className="text-[#0874de]" fill="#0874de" />
                  3.8{" "}
                  <span className="text-[#0874de] font-semibold underline">
                    46 Verified Reviews
                  </span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z"
                      fill="#0874DE"
                    />
                  </svg>
                </p>
                <p className="text-[18px] flex gap-2 text-[#808080]">
                  <Heart className="text-[#0874de]" fill="#0874de" />
                  538{" "}
                  <span className="text-[#0874de] font-semibold underline">
                    Customer Favorites
                  </span>
                </p>
              </div>
            </div>
            {/* Right Section */}
            <div className="md:flex-[0.7] text-[16px] md:text-[22px] w-full">
              <p className="flex gap-2 px-[30px] h-[70px] bg-gray-100 items-center border-1">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z"
                    fill="#0874DE"
                  />
                </svg>
                Built in <span className="font-semibold">1985</span>
              </p>
              <p className="flex gap-2 px-[30px] h-[70px] items-center border-1">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z"
                    fill="#0874DE"
                  />
                </svg>
                Property Type: Single Family Home
              </p>
              <p className="flex gap-2 px-[30px] h-[70px] bg-gray-100 items-center border-1">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z"
                    fill="#0874DE"
                  />
                </svg>
                Number of Bedrooms: <span className="font-semibold">3</span>{" "}
                Bedroooms
              </p>
              <p className="flex gap-2 px-[30px] h-[70px] items-center  border-1">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z"
                    fill="#0874DE"
                  />
                </svg>
                Number of Bathrooms: <span className="font-semibold">2</span>{" "}
                Bathrooms
              </p>
              <p className="flex gap-2 px-[30px] h-[70px] bg-gray-100 items-center  border-1 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z"
                    fill="#0874DE"
                  />
                </svg>
                Total Living Area of{" "}
                <span className="font-semibold">2,000</span> square feets
              </p>
            </div>
          </div>
          {/* Second Section */}
          <div className="py-[30px] border-1  overflow-scroll">
            {/* Table 1 */}
            <table className="w-full border-collapse">
              <thead className="bg-blue-100">
                <tr className="border-t">
                  <td className="p-4 border-[#00000010] border-r-1">
                    <h2 className="text-[30px] font-bold text-[#0874de]">
                      Maintenance History
                    </h2>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1 text-[20px] font-semibold">
                    <div className="flex justify-center items-center space-x-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 23 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z"
                          fill="#0874DE"
                        />
                      </svg>

                      <span>Owner 1</span>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1 text-[20px] font-semibold">
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 23 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z"
                          fill="#0874DE"
                        />
                      </svg>
                      <span>Owner 2</span>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1 text-[20px] font-semibold">
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 23 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z"
                          fill="#0874DE"
                        />
                      </svg>
                      <span>Owner 3</span>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-[#00000010]">
                  <td className="p-4 border-[#00000010] border-r-1 flex items-center space-x-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.9223 7.16005C17.9476 6.95338 17.8249 6.75605 17.6276 6.68938C17.4303 6.62271 17.2129 6.70405 17.1076 6.88405C15.3676 9.86671 12.0263 15.5947 10.8956 17.5334C10.8169 17.6694 10.8156 17.8374 10.8943 17.9734C10.9716 18.1094 11.1169 18.1934 11.2743 18.1934H14.8969C14.8969 18.1934 14.3916 22.244 14.0663 24.84C14.0409 25.0467 14.1636 25.244 14.3609 25.3107C14.5583 25.3774 14.7756 25.296 14.8809 25.116C16.6209 22.1334 19.9623 16.4054 21.0929 14.4667C21.1716 14.3307 21.1729 14.1627 21.0943 14.0267C21.0169 13.8907 20.8716 13.8067 20.7143 13.8067C19.4569 13.8067 17.0916 13.8067 17.0916 13.8067C17.0916 13.8067 17.5969 9.75605 17.9223 7.16005Z"
                        fill="#0874DE"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9974 1.66669C23.9081 1.66669 30.3307 8.08935 30.3307 16C30.3307 23.9107 23.9081 30.3334 15.9974 30.3334C8.08673 30.3334 1.66406 23.9107 1.66406 16C1.66406 8.08935 8.08673 1.66669 15.9974 1.66669ZM15.9974 3.66669C9.19073 3.66669 3.66406 9.19335 3.66406 16C3.66406 22.8067 9.19073 28.3334 15.9974 28.3334C22.8041 28.3334 28.3307 22.8067 28.3307 16C28.3307 9.19335 22.8041 3.66669 15.9974 3.66669Z"
                        fill="#0874DE"
                      />
                    </svg>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[20px] font-semibold">
                          Electrical
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9974 23.8333C7.01431 23.8333 2.16406 18.983 2.16406 13C2.16406 7.01687 7.01431 2.16663 12.9974 2.16663C18.9804 2.16663 23.8307 7.01687 23.8307 13C23.8307 18.983 18.9804 23.8333 12.9974 23.8333ZM12.9974 21.6666C17.7839 21.6666 21.6641 17.7865 21.6641 13C21.6641 8.21349 17.7839 4.33329 12.9974 4.33329C8.21093 4.33329 4.33073 8.21349 4.33073 13C4.33073 17.7865 8.21093 21.6666 12.9974 21.6666ZM11.9141 7.58329H14.0807V9.74996H11.9141V7.58329ZM11.9141 11.9166H14.0807V18.4166H11.9141V11.9166Z"
                            fill="#0874DE"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No issues reported to PROPFAX
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 border-[#00000010] border-r-1 flex items-center space-x-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1294_2023)">
                        <mask
                          id="mask0_1294_2023"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="32"
                          height="32"
                        >
                          <path
                            d="M31 31V1H1V31H31Z"
                            fill="white"
                            stroke="white"
                            stroke-width="2"
                          />
                        </mask>
                        <g mask="url(#mask0_1294_2023)">
                          <path
                            d="M9.57812 4.8125V20.5625C9.57812 22.2214 10.9363 23.5625 12.5922 23.5625C14.2401 23.5625 15.5922 22.2104 15.5922 20.5625V10.0625C15.5922 5.78975 19.0694 2.3125 23.3421 2.3125H26.7484"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="22.926"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M26.7484 9.8125H23.3421C23.2092 9.8125 23.0921 9.92956 23.0921 10.0625V20.5625C23.0921 26.3501 18.3797 31.0625 12.5921 31.0625C6.79606 31.0625 2.07812 26.361 2.07812 20.5625V5.0625"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="22.926"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.07812 15.5488C2.70312 15.3405 3.29431 14.9238 3.95312 14.9238C4.61194 14.9238 5.16931 15.5488 5.82812 15.5488C6.48694 15.5488 7.04431 14.9238 7.70312 14.9238C8.36194 14.9238 8.95312 15.3405 9.57812 15.5488"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="22.926"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.5938 18.9205H23.0938"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="22.926"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M30.8437 2.3125V9.81262C30.8437 10.3282 30.4218 10.7501 29.9062 10.7501H28.0312C27.5156 10.7501 27.0938 10.3282 27.0938 9.81262V2.3125C27.0938 1.79687 27.5156 1.375 28.0312 1.375H29.9062C30.4218 1.375 30.8437 1.79687 30.8437 2.3125Z"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="22.926"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.59387 4.6875H2.09375C1.57812 4.6875 1.15625 4.26562 1.15625 3.75V1.875C1.15625 1.35938 1.57812 0.9375 2.09375 0.9375H9.59387C10.1095 0.9375 10.5314 1.35938 10.5314 1.875V3.75C10.5314 4.26562 10.1095 4.6875 9.59387 4.6875Z"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="22.926"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1294_2023">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[20px] font-semibold">
                          Plumbing
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9974 23.8333C7.01431 23.8333 2.16406 18.983 2.16406 13C2.16406 7.01687 7.01431 2.16663 12.9974 2.16663C18.9804 2.16663 23.8307 7.01687 23.8307 13C23.8307 18.983 18.9804 23.8333 12.9974 23.8333ZM12.9974 21.6666C17.7839 21.6666 21.6641 17.7865 21.6641 13C21.6641 8.21349 17.7839 4.33329 12.9974 4.33329C8.21093 4.33329 4.33073 8.21349 4.33073 13C4.33073 17.7865 8.21093 21.6666 12.9974 21.6666ZM11.9141 7.58329H14.0807V9.74996H11.9141V7.58329ZM11.9141 11.9166H14.0807V18.4166H11.9141V11.9166Z"
                            fill="#0874DE"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No reported crimes associated with the property.
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                </tr>
                <tr className="border-t bg-[#00000010]">
                  <td className="p-4 border-[#00000010] border-r-1 flex items-center space-x-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1294_2073)">
                        <mask
                          id="mask0_1294_2073"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="32"
                          height="32"
                        >
                          <path
                            d="M31 31V1H1V31H31Z"
                            fill="white"
                            stroke="white"
                            stroke-width="2"
                          />
                        </mask>
                        <g mask="url(#mask0_1294_2073)">
                          <path
                            d="M19.75 29.1875C19.75 29.1875 18.0711 27.3125 16 27.3125C13.9289 27.3125 12.25 29.1875 12.25 29.1875V2.8125C12.25 2.8125 13.9289 0.937502 16 0.937502C18.0711 0.937502 19.75 2.8125 19.75 2.8125V29.1875Z"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.75 16C19.75 16 18.0711 14.125 16 14.125C13.9289 14.125 12.25 16 12.25 16"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 16C8.5 16 6.82106 14.125 4.75 14.125C2.67894 14.125 0.9375 16 0.9375 16"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M31.0625 16C31.0625 16 29.3211 14.125 27.25 14.125C25.1789 14.125 23.5 16 23.5 16"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M31.0625 29.125C31.0625 29.125 29.3211 27.3125 27.25 27.3125C25.1789 27.3125 23.5 29.1875 23.5 29.1875V2.8125C23.5 2.8125 25.1789 0.937502 27.25 0.937502C29.3211 0.937502 31.0625 2.8125 31.0625 2.8125V29.125Z"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 29.1875C8.5 29.1875 6.82106 27.3125 4.75 27.3125C2.67894 27.3125 0.9375 29.1875 0.9375 29.1875V2.8125C0.9375 2.8125 2.67894 0.937502 4.75 0.937502C6.82106 0.937502 8.5 2.8125 8.5 2.8125V29.1875Z"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.75 29.1875C19.75 29.1875 19.9877 31.0625 21.625 31.0625C23.2623 31.0625 23.5 29.1875 23.5 29.1875"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.75 2.8125C19.75 2.8125 19.9877 4.6875 21.625 4.6875C23.2623 4.6875 23.5 2.8125 23.5 2.8125"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.75 16C19.75 16 19.9877 17.875 21.625 17.875C23.2623 17.875 23.5 16 23.5 16"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 16C8.5 16 8.73769 17.875 10.375 17.875C12.0123 17.875 12.25 16 12.25 16"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 2.8125C8.5 2.8125 8.73769 4.6875 10.375 4.6875C12.0123 4.6875 12.25 2.8125 12.25 2.8125"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 29.1875C8.5 29.1875 8.73769 31.0625 10.375 31.0625C12.0123 31.0625 12.25 29.1875 12.25 29.1875"
                            stroke="#0874DE"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1294_2073">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[20px] font-semibold">
                          Roofing
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9974 23.8333C7.01431 23.8333 2.16406 18.983 2.16406 13C2.16406 7.01687 7.01431 2.16663 12.9974 2.16663C18.9804 2.16663 23.8307 7.01687 23.8307 13C23.8307 18.983 18.9804 23.8333 12.9974 23.8333ZM12.9974 21.6666C17.7839 21.6666 21.6641 17.7865 21.6641 13C21.6641 8.21349 17.7839 4.33329 12.9974 4.33329C8.21093 4.33329 4.33073 8.21349 4.33073 13C4.33073 17.7865 8.21093 21.6666 12.9974 21.6666ZM11.9141 7.58329H14.0807V9.74996H11.9141V7.58329ZM11.9141 11.9166H14.0807V18.4166H11.9141V11.9166Z"
                            fill="#0874DE"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No issues reported to PROPFAX
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 border-[#00000010] border-r-1 flex items-center space-x-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1294_2104"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      >
                        <path
                          d="M30.75 30.75V1.25H1.25V30.75H30.75Z"
                          fill="white"
                          stroke="white"
                          stroke-width="2.5"
                        />
                      </mask>
                      <g mask="url(#mask0_1294_2104)">
                        <path
                          d="M29.1875 16.9375H2.8125C1.777 16.9375 0.9375 16.098 0.9375 15.0625V5.6875C0.9375 4.652 1.777 3.8125 2.8125 3.8125H29.1875C30.223 3.8125 31.0625 4.652 31.0625 5.6875V15.0625C31.0625 16.098 30.223 16.9375 29.1875 16.9375Z"
                          stroke="#0874DE"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.6875 13.1875H27.3125"
                          stroke="#0874DE"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.5625 9.125C23.3899 9.125 23.25 9.26489 23.25 9.4375C23.25 9.6101 23.3899 9.75 23.5625 9.75C23.7351 9.75 23.875 9.6101 23.875 9.4375C23.875 9.26489 23.7351 9.125 23.5625 9.125Z"
                          fill="#0874DE"
                          stroke="#0874DE"
                          stroke-width="2.5"
                        />
                        <path
                          d="M27.3125 9.125C27.1399 9.125 27 9.26489 27 9.4375C27 9.6101 27.1399 9.75 27.3125 9.75C27.4851 9.75 27.625 9.6101 27.625 9.4375C27.625 9.26489 27.4851 9.125 27.3125 9.125Z"
                          fill="#0874DE"
                          stroke="#0874DE"
                          stroke-width="2.5"
                        />
                        <path
                          d="M4.75 28.1875C7.04819 27.0384 8.5 24.6894 8.5 22.1199V20.6875"
                          stroke="#0874DE"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.5 20.6875V22.1199C23.5 24.6894 24.9518 27.0384 27.25 28.1875"
                          stroke="#0874DE"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 20.6875V28.1875"
                          stroke="#0874DE"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.75 20.6875V28.1875"
                          stroke="#0874DE"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.25 20.6875V28.1875"
                          stroke="#0874DE"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[20px] font-semibold">HVAC</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9974 23.8333C7.01431 23.8333 2.16406 18.983 2.16406 13C2.16406 7.01687 7.01431 2.16663 12.9974 2.16663C18.9804 2.16663 23.8307 7.01687 23.8307 13C23.8307 18.983 18.9804 23.8333 12.9974 23.8333ZM12.9974 21.6666C17.7839 21.6666 21.6641 17.7865 21.6641 13C21.6641 8.21349 17.7839 4.33329 12.9974 4.33329C8.21093 4.33329 4.33073 8.21349 4.33073 13C4.33073 17.7865 8.21093 21.6666 12.9974 21.6666ZM11.9141 7.58329H14.0807V9.74996H11.9141V7.58329ZM11.9141 11.9166H14.0807V18.4166H11.9141V11.9166Z"
                            fill="#0874DE"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No issues reported to PROPFAX
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Table 2 */}
            <table className="w-full border-collapse">
              <thead className="bg-blue-100">
                <tr className="border-t">
                  <td className="p-4">
                    <h2 className="text-[30px] font-bold text-[#0874de]">
                      Maintenance History
                    </h2>
                  </td>
                  <td className="p-4 text-[20px] font-semibold">
                    <div className="flex justify-center items-center space-x-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 23 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z"
                          fill="#0874DE"
                        />
                      </svg>

                      <span>Owner 1</span>
                    </div>
                  </td>
                  <td className="p-4 text-[20px] font-semibold">
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 23 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z"
                          fill="#0874DE"
                        />
                      </svg>
                      <span>Owner 2</span>
                    </div>
                  </td>
                  <td className="p-4 text-[20px] font-semibold">
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 23 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z"
                          fill="#0874DE"
                        />
                      </svg>
                      <span>Owner 3</span>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-[#00000010]">
                  <td className="p-4 flex items-center space-x-4 border-[#00000010] border-r-1">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6.66012C4 5.19097 5.19016 4 6.66012 4H25.3399C26.8091 4 28 5.19016 28 6.66012V25.3399C28 26.8091 26.8099 28 25.3399 28H6.66012C5.19097 28 4 26.8099 4 25.3399V6.66012ZM6.66667 6.66667V25.3333H25.3333V6.66667H6.66667ZM10.6295 24.2411C9.80463 23.8839 9.02292 23.4457 8.29444 22.9365C9.95697 20.3671 12.848 18.6667 16.1363 18.6667C19.3353 18.6667 22.1585 20.2761 23.8401 22.7296C23.1251 23.2581 22.3552 23.7169 21.5407 24.0957C20.3296 22.4221 18.36 21.3333 16.1363 21.3333C13.8487 21.3333 11.8303 22.4855 10.6295 24.2411ZM16 17.3333C13.4227 17.3333 11.3333 15.244 11.3333 12.6667C11.3333 10.0893 13.4227 8 16 8C18.5773 8 20.6667 10.0893 20.6667 12.6667C20.6667 15.244 18.5773 17.3333 16 17.3333ZM16 14.6667C17.1045 14.6667 18 13.7712 18 12.6667C18 11.5621 17.1045 10.6667 16 10.6667C14.8955 10.6667 14 11.5621 14 12.6667C14 13.7712 14.8955 14.6667 16 14.6667Z"
                        fill="#0874DE"
                      />
                    </svg>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[20px] font-semibold">
                          Owner Count
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9974 23.8333C7.01431 23.8333 2.16406 18.983 2.16406 13C2.16406 7.01687 7.01431 2.16663 12.9974 2.16663C18.9804 2.16663 23.8307 7.01687 23.8307 13C23.8307 18.983 18.9804 23.8333 12.9974 23.8333ZM12.9974 21.6666C17.7839 21.6666 21.6641 17.7865 21.6641 13C21.6641 8.21349 17.7839 4.33329 12.9974 4.33329C8.21093 4.33329 4.33073 8.21349 4.33073 13C4.33073 17.7865 8.21093 21.6666 12.9974 21.6666ZM11.9141 7.58329H14.0807V9.74996H11.9141V7.58329ZM11.9141 11.9166H14.0807V18.4166H11.9141V11.9166Z"
                            fill="#0874DE"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        2 Previous Owner
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 flex items-center space-x-4 border-[#00000010] border-r-1">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.6717 26.6731C19.7935 28.7788 18.1085 30.464 16.0026 31.3421C13.8967 30.464 12.2117 28.7788 11.3335 26.6731H14.3459C14.781 27.3245 15.3427 27.8895 16.0026 28.3307C16.6625 27.8895 17.2242 27.3245 17.6593 26.6731H20.6717ZM24.0026 19.746L26.6693 22.7703V25.3397H5.33594V22.7703L8.0026 19.746V12.0064C8.0026 7.36204 11.3418 3.41096 16.0026 1.94666C20.6634 3.41096 24.0026 7.36204 24.0026 12.0064V19.746ZM23.0282 22.6731L21.3359 20.7537V12.0064C21.3359 8.91592 19.2415 6.09908 16.0026 4.77846C12.7636 6.09908 10.6693 8.91592 10.6693 12.0064V20.7537L8.97695 22.6731H23.0282ZM16.0026 14.6731C14.5298 14.6731 13.3359 13.4791 13.3359 12.0064C13.3359 10.5336 14.5298 9.33971 16.0026 9.33971C17.4754 9.33971 18.6693 10.5336 18.6693 12.0064C18.6693 13.4791 17.4754 14.6731 16.0026 14.6731Z"
                        fill="#0874DE"
                      />
                    </svg>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[20px] font-semibold">
                          Crime Reports
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9974 23.8333C7.01431 23.8333 2.16406 18.983 2.16406 13C2.16406 7.01687 7.01431 2.16663 12.9974 2.16663C18.9804 2.16663 23.8307 7.01687 23.8307 13C23.8307 18.983 18.9804 23.8333 12.9974 23.8333ZM12.9974 21.6666C17.7839 21.6666 21.6641 17.7865 21.6641 13C21.6641 8.21349 17.7839 4.33329 12.9974 4.33329C8.21093 4.33329 4.33073 8.21349 4.33073 13C4.33073 17.7865 8.21093 21.6666 12.9974 21.6666ZM11.9141 7.58329H14.0807V9.74996H11.9141V7.58329ZM11.9141 11.9166H14.0807V18.4166H11.9141V11.9166Z"
                            fill="#0874DE"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No reported crimes associated with the property.
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                </tr>
                <tr className="border-t bg-[#00000010]">
                  <td className="p-4 flex items-center space-x-4 border-[#00000010] border-r-1">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.883 4L16.5497 6.66667H27.9974C28.7338 6.66667 29.3307 7.26363 29.3307 8V26.6667C29.3307 27.4031 28.7338 28 27.9974 28H3.9974C3.26102 28 2.66406 27.4031 2.66406 26.6667V5.33333C2.66406 4.59696 3.26102 4 3.9974 4H13.883ZM12.7784 6.66667H5.33073V25.3333H26.6641V9.33333H15.4451L12.7784 6.66667ZM17.3307 12V17.3333H21.3307V20H14.6641V12H17.3307Z"
                        fill="#0874DE"
                      />
                    </svg>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[20px] font-semibold">
                          Fire Records
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9974 23.8333C7.01431 23.8333 2.16406 18.983 2.16406 13C2.16406 7.01687 7.01431 2.16663 12.9974 2.16663C18.9804 2.16663 23.8307 7.01687 23.8307 13C23.8307 18.983 18.9804 23.8333 12.9974 23.8333ZM12.9974 21.6666C17.7839 21.6666 21.6641 17.7865 21.6641 13C21.6641 8.21349 17.7839 4.33329 12.9974 4.33329C8.21093 4.33329 4.33073 8.21349 4.33073 13C4.33073 17.7865 8.21093 21.6666 12.9974 21.6666ZM11.9141 7.58329H14.0807V9.74996H11.9141V7.58329ZM11.9141 11.9166H14.0807V18.4166H11.9141V11.9166Z"
                            fill="#0874DE"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No issues reported to PROPFAX
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 flex items-center space-x-4 border-[#00000010] border-r-1">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.9974 2.66675C23.3611 2.66675 29.3307 8.63628 29.3307 16.0001C29.3307 23.3638 23.3611 29.3334 15.9974 29.3334C8.6336 29.3334 2.66406 23.3638 2.66406 16.0001H5.33073C5.33073 21.8911 10.1064 26.6667 15.9974 26.6667C21.8885 26.6667 26.6641 21.8911 26.6641 16.0001C26.6641 10.109 21.8885 5.33341 15.9974 5.33341C12.331 5.33341 9.09669 7.1832 7.17674 10.0004L10.6641 10.0001V12.6667H2.66406V4.66675H5.33073L5.33058 7.99899C7.76318 4.76108 11.6357 2.66675 15.9974 2.66675ZM17.3307 9.33341L17.3305 15.4467L21.6542 19.7713L19.7686 21.6569L14.6638 16.5507L14.6641 9.33341H17.3307Z"
                        fill="#0874DE"
                      />
                    </svg>

                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[20px] font-semibold">
                          Flood Records
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9974 23.8333C7.01431 23.8333 2.16406 18.983 2.16406 13C2.16406 7.01687 7.01431 2.16663 12.9974 2.16663C18.9804 2.16663 23.8307 7.01687 23.8307 13C23.8307 18.983 18.9804 23.8333 12.9974 23.8333ZM12.9974 21.6666C17.7839 21.6666 21.6641 17.7865 21.6641 13C21.6641 8.21349 17.7839 4.33329 12.9974 4.33329C8.21093 4.33329 4.33073 8.21349 4.33073 13C4.33073 17.7865 8.21093 21.6666 12.9974 21.6666ZM11.9141 7.58329H14.0807V9.74996H11.9141V7.58329ZM11.9141 11.9166H14.0807V18.4166H11.9141V11.9166Z"
                            fill="#0874DE"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        No issues reported to PROPFAX
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                  <td className="p-4 border-[#00000010] border-r-1">
                    <div className="flex justify-center">
                      <svg
                        className="flex"
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="8" fill="#009E3D" />
                        <path
                          d="M17.9968 23.1709L27.1892 13.9785L28.6034 15.3927L17.9968 25.9993L11.6328 19.6354L13.047 18.2212L17.9968 23.1709Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-center py-2">
                      No Issues Reported
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Third Section */}
          <div className=" overflow-scroll">
            <div className="border-t bg-blue-100">
              <div className="p-4">
                <h2 className="text-[30px] font-bold text-[#0874de]">
                  Ownership History
                </h2>
              </div>
            </div>
            <div className="">
              <div className="mx-auto p-6">
                <div className="bg-white rounded-lg p-4 border-1">
                  <div className="bg-[#0874de] text-[20px] text-white px-3 py-2 rounded-[10px] font-semibold">
                    Current Owner
                  </div>
                  <div className="py-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[18px]">
                        Owner Name(s)
                      </span>
                      <span>Jane D</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[18px]">
                        Mailing Address
                      </span>
                      <span>1000 Testing Dr, Arlington, TX 76016</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[18px]">Vesting</span>
                      <span>Individual(S) / Joint Tenant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[18px]">
                        Occupancy
                      </span>
                      <span>Absentee Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mx-auto p-6">
                <div className="bg-white rounded-lg p-4 border-1">
                  <div className="bg-[#0874de] text-[20px] text-white px-3 py-2 rounded-[10px] font-semibold">
                    Owner 1
                  </div>
                  <div className="overflow-x-auto mt-6">
                    <table className="min-w-full bg-white border">
                      <thead className="bg-[#00000010]">
                        <tr>
                          <th className="px-6 py-3 text-center text-[20px] font-medium border-b  border-[#00000010] border-r-1">
                            Date
                          </th>
                          <th className="px-6 py-3 text-center text-[20px] font-medium border-b border-[#00000010] border-r-1">
                            Details
                          </th>
                          <th className="px-6 py-3 text-center text-[20px] font-medium border-b border-[#00000010] border-r-1">
                            Information
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            09/26/2024
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Purchase Date
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            <div>Purchased property</div>
                            <div className="text-sm text-gray-500 mt-2">
                              Source{" "}
                              <span className="text-green-600">
                                County Property Records
                              </span>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center text-sm text-gray-500">
                                <Star
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">3.8</span>
                                <span className="ml-2 text-[#0874de]">
                                  46 Verified Reviews
                                </span>
                                <ShieldCheckIcon className="w-4 h-4 ml-1 text-[#0874de]" />
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Heart
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">
                                  538 Customer Favorites
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1" />
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Type of Ownership
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Personal
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1" />
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Length of Ownership
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            7 years
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1" />
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Purchase Price
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            $180,000
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1" />
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Sale Price
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            $220,000
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            09/26/2024
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Modifications/Improvements
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            <div>Repainted entire exterior</div>
                            <div className="text-sm text-gray-500 mt-2">
                              Source{" "}
                              <span className="text-green-600">
                                Home Inspection Report
                              </span>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center text-sm text-gray-500">
                                <Star
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">3.8</span>
                                <span className="ml-2 text-[#0874de]">
                                  46 Verified Reviews
                                </span>
                                <ShieldCheckIcon className="w-4 h-4 ml-1 text-[#0874de]" />
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Heart
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">
                                  538 Customer Favorites
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            09/26/2024
                          </td>
                          <td className="px-6 py-4 border-b text-[#0874de] border-[#00000010] border-r-1">
                            Police Report Filed
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            <div>Attempted Robbery</div>
                            <div className="text-sm text-gray-500 mt-2">
                              Source{" "}
                              <span className="text-green-600">
                                Arlington Police Department
                              </span>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center text-sm text-gray-500">
                                <Star
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">3.8</span>
                                <span className="ml-2 text-[#0874de]">
                                  46 Verified Reviews
                                </span>
                                <ShieldCheckIcon className="w-4 h-4 ml-1 text-[#0874de]" />
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Heart
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">
                                  538 Customer Favorites
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            09/26/2024
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Modifications/Improvements
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            <div>Upgraded kitchen appliances</div>
                            <div className="text-sm text-gray-500 mt-2">
                              Source{" "}
                              <span className="text-green-600">
                                Home Inspection Report
                              </span>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center text-sm text-gray-500">
                                <Star
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">3.8</span>
                                <span className="ml-2 text-[#0874de]">
                                  46 Verified Reviews
                                </span>
                                <ShieldCheckIcon className="w-4 h-4 ml-1 text-[#0874de]" />
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Heart
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">
                                  538 Customer Favorites
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            09/26/2024
                          </td>
                          <td className="px-6 py-4 border-b text-[#0874de] border-[#00000010] border-r-1">
                            Fire Report Filed
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            <div>Minor Fire</div>
                            <div className="text-sm text-gray-500 mt-2">
                              Source{" "}
                              <span className="text-green-600">
                                Arlington Fire Department
                              </span>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center text-sm text-gray-500">
                                <Star
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">3.8</span>
                                <span className="ml-2 text-[#0874de]">
                                  46 Verified Reviews
                                </span>
                                <ShieldCheckIcon className="w-4 h-4 ml-1 text-[#0874de]" />
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Heart
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">
                                  538 Customer Favorites
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            09/26/2024
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            Issues Reported
                          </td>
                          <td className="px-6 py-4 border-b border-[#00000010] border-r-1">
                            <div>Minor water damage in basement, repaired</div>
                            <div className="text-sm text-gray-500 mt-2">
                              Source{" "}
                              <span className="text-green-600">
                                County Property Records
                              </span>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center text-sm text-gray-500">
                                <Star
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">3.8</span>
                                <span className="ml-2 text-[#0874de]">
                                  46 Verified Reviews
                                </span>
                                <ShieldCheckIcon className="w-4 h-4 ml-1 text-[#0874de]" />
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Heart
                                  className="text-[#0874de] w-[16px] h-[16px]"
                                  fill="#0874de"
                                />
                                <span className="ml-1">
                                  538 Customer Favorites
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 border-[#00000010] border-r-1">
                            09/26/2024
                          </td>
                          <td className="px-6 py-4 border-[#00000010] border-r-1">
                            Listed for Sale
                          </td>
                          <td className="px-6 py-4 border-[#00000010] border-r-1">
                            <div>Relocated due to new job</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Market Trend */}
          <div>
            <div className="border-t bg-blue-100">
              <div className="p-4">
                <h2 className="text-[30px] font-bold text-[#0874de]">
                  Market Trends
                </h2>
              </div>
            </div>

            {/* Last 30 Days */}
            {/*  Graph Part */}
            <div className=" mx-auto p-4 space-y-6">
            <div className="bg-[#0874de] text-[20px] text-white px-3 py-2 rounded-[10px] font-semibold">
                City, State Snapshot (Last 30 Days)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="flex flex-col items-center justify-center gap-[10px] py-[60px] px-[122px]">
                  <CardTitle className="text-center">New Listings</CardTitle>
                  <div className="text-[80px] font-bold text-[#0874de]">15</div>
                  <p className="text-green-600">
                    ▲ <span className="text-[#808080]">22%</span>
                  </p>
                </Card>
                <Card className="flex flex-col items-center justify-center gap-[10px] py-[60px] px-[122px]">
                  <CardTitle className="text-center">Closed Sales</CardTitle>
                  <div className="text-[80px] font-bold text-[#0874de]">5</div>
                  <p className="text-green-600">
                    ▲ <span className="text-[#808080]">33%</span>
                  </p>
                </Card>
              </div>
              <div className="flex justify-between">
                <p className="md:text-[29px]">Total Sales</p>
                <div className="text-[#748194] flex gap-[20px]">
                  <p className="flex items-center gap-2 md:text-[25px]"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.945312" y="0.649414" width="20" height="20" rx="10" fill="#2C7BE5"/>
</svg>
Median List Price</p>
<p className="flex items-center gap-2 md:text-[25px]"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.945312" y="0.649414" width="20" height="20" rx="10" fill="#F5803E"/>
</svg>

Median List Price</p>
                </div>
              </div>
              <ChartContainer config={chartConfig}>

                    <LineChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                      />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
                  </ChartContainer>
            </div>

            {/* Non Graph Part */}
            <div className="mx-auto p-4 space-y-6">
              <div className="bg-[#0874de] text-[20px] text-white px-3 py-2 rounded-[10px] font-semibold">
                City, State Snapshot (Last 30 Days)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="flex flex-col items-center justify-center gap-[10px] py-[60px]  md:px-[122px]">
                  <CardTitle className="text-center">Homes Sold</CardTitle>
                  <div className="text-[60px] md:text-[80px] font-bold text-[#0874de]">31</div>
                  <p className="text-green-600">
                    ▲ <span className="text-[#808080]">1,450%</span>
                  </p>
                </Card>
                <Card className="flex flex-col items-center justify-center gap-[10px] py-[60px] md:px-[122px]">
                  <CardTitle className="text-center">Avg. Sale Price</CardTitle>
                  <div className="text-[60px] md:text-[80px] font-bold text-[#0874de]">
                    $620,000
                  </div>
                  <p className="text-green-600">
                    ▲ <span className="text-[#808080]">61%</span>
                  </p>
                </Card>
                <Card className="flex flex-col items-center justify-center gap-[10px] py-[60px] md:px-[122px]">
                  <CardTitle className="text-center">
                    Avg. Sale Price / Sq. Ft.
                  </CardTitle>
                  <div className="text-[60px] md:text-[80px] font-bold text-[#0874de]">
                    $290,000
                  </div>
                  <p className="text-red-600">
                    ▼ <span className="text-[#808080]">14%</span>
                  </p>
                </Card>
                <Card className="flex flex-col items-center justify-center gap-[10px] py-[60px] md:px-[122px]">
                  <CardTitle className="text-center">Avg. Age</CardTitle>
                  <div className="text-[60px] md:text-[80px] font-bold text-[#0874de]">35</div>
                  <p className="text-red-600">
                    ▼ <span className="text-[#808080]">29</span>
                  </p>
                </Card>
              </div>
              <p className="text-muted-foreground text-[20px]">
                These sales statistics provide a snapshot of sales trends for
                Durham, NH (3824). In the last 6 months there were 31 homes sold
                and the average sale price was $620K. This 1450% increase in
                sales suggests that there is a relative increase in demand in
                the market.
              </p>
              <div className="bg-[#0874de] text-[20px] text-white px-3 py-2 rounded-[10px] font-semibold">
                Neighbourhood
              </div>
              <div className="space-y-4">
                <h3 className="text-[22px] font-semibold">Demographics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="flex flex-row gap-[30px] items-center justify-center p-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1391_469)">
                        <path
                          d="M2.41058 46.8749H3.75V57.1874C3.75081 57.9331 4.04739 58.648 4.57466 59.1753C5.10193 59.7025 5.81683 59.9991 6.5625 59.9999H7.5C8.19285 59.9997 8.86097 59.7424 9.375 59.2778C9.88903 59.7424 10.5572 59.9997 11.25 59.9999H12.1875C12.9332 59.9991 13.6481 59.7025 14.1753 59.1753C14.7026 58.648 14.9992 57.9331 15 57.1874V46.8749H16.3394C16.9775 46.8753 17.5896 46.6225 18.0415 46.1721C18.4934 45.7217 18.7482 45.1104 18.75 44.4724V34.1585C18.7443 32.8788 18.3328 31.6339 17.5749 30.6028C16.8169 29.5718 15.7514 28.8077 14.5317 28.4204C14.0333 29.0536 13.4232 29.5902 12.7316 30.0037C13.8286 30.016 14.8771 30.458 15.6518 31.2349C16.4265 32.0117 16.8657 33.0614 16.875 34.1585V44.4724C16.8738 44.6133 16.8167 44.748 16.7163 44.8469C16.6159 44.9458 16.4803 45.0008 16.3394 44.9999H15V37.0312C15 36.7825 14.9012 36.5441 14.7254 36.3683C14.5496 36.1924 14.3111 36.0937 14.0625 36.0937C13.8139 36.0937 13.5754 36.1924 13.3996 36.3683C13.2238 36.5441 13.125 36.7825 13.125 37.0312V44.9999H5.625V37.0312C5.625 36.7825 5.52623 36.5441 5.35041 36.3683C5.1746 36.1924 4.93614 36.0937 4.6875 36.0937C4.43886 36.0937 4.2004 36.1924 4.02459 36.3683C3.84877 36.5441 3.75 36.7825 3.75 37.0312V44.9999H2.41058C2.26965 45.0008 2.13413 44.9458 2.03372 44.8469C1.93332 44.748 1.87624 44.6133 1.875 44.4724V34.1585C1.8843 33.0614 2.32347 32.0117 3.09819 31.2349C3.8729 30.458 4.92137 30.016 6.01842 30.0037C5.32679 29.5902 4.71669 29.0536 4.21828 28.4204C2.99858 28.8077 1.93313 29.5718 1.17515 30.6028C0.417171 31.6339 0.00573027 32.8788 0 34.1585L0 44.4724C0.00176271 45.1104 0.256555 45.7217 0.708476 46.1721C1.1604 46.6225 1.77253 46.8753 2.41058 46.8749ZM13.125 46.8749V57.1874C13.1247 57.436 13.0259 57.6743 12.8501 57.85C12.6743 58.0258 12.4361 58.1246 12.1875 58.1249H11.25C11.0014 58.1246 10.7632 58.0258 10.5874 57.85C10.4116 57.6743 10.3128 57.436 10.3125 57.1874V46.9106C10.3125 46.8984 10.3094 46.887 10.3089 46.8749H13.125ZM5.625 46.8749H8.4411C8.44064 46.887 8.4375 46.8984 8.4375 46.9106V57.1874C8.43722 57.436 8.33835 57.6743 8.1626 57.85C7.98685 58.0258 7.74855 58.1246 7.5 58.1249H6.5625C6.31395 58.1246 6.07565 58.0258 5.8999 57.85C5.72415 57.6743 5.62528 57.436 5.625 57.1874V46.8749Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M9.375 29.0625C10.6178 29.0611 11.8092 28.5668 12.688 27.688C13.5668 26.8092 14.0611 25.6178 14.0625 24.375V20.625C14.0625 19.3818 13.5686 18.1895 12.6896 17.3104C11.8105 16.4314 10.6182 15.9375 9.375 15.9375C8.1318 15.9375 6.93951 16.4314 6.06044 17.3104C5.18136 18.1895 4.6875 19.3818 4.6875 20.625V24.375C4.68892 25.6178 5.18324 26.8092 6.06201 27.688C6.94078 28.5668 8.13223 29.0611 9.375 29.0625ZM6.5625 20.625C6.5625 19.8791 6.85882 19.1637 7.38626 18.6363C7.91371 18.1088 8.62908 17.8125 9.375 17.8125C10.1209 17.8125 10.8363 18.1088 11.3637 18.6363C11.8912 19.1637 12.1875 19.8791 12.1875 20.625V24.375C12.1875 25.1209 11.8912 25.8363 11.3637 26.3637C10.8363 26.8912 10.1209 27.1875 9.375 27.1875C8.62908 27.1875 7.91371 26.8912 7.38626 26.3637C6.85882 25.8363 6.5625 25.1209 6.5625 24.375V20.625Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M9.375 33.75C9.89277 33.75 10.3125 33.3303 10.3125 32.8125C10.3125 32.2947 9.89277 31.875 9.375 31.875C8.85723 31.875 8.4375 32.2947 8.4375 32.8125C8.4375 33.3303 8.85723 33.75 9.375 33.75Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M9.375 37.5C9.89277 37.5 10.3125 37.0803 10.3125 36.5625C10.3125 36.0447 9.89277 35.625 9.375 35.625C8.85723 35.625 8.4375 36.0447 8.4375 36.5625C8.4375 37.0803 8.85723 37.5 9.375 37.5Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M27.9464 20.7598L26.7443 25.817C26.7051 25.9814 26.7111 26.1535 26.7618 26.3148C26.8125 26.4761 26.906 26.6207 27.0323 26.7332L29.376 28.8242C29.5477 28.9775 29.7698 29.0623 29.9999 29.0623C30.2301 29.0623 30.4522 28.9775 30.6239 28.8242L32.9676 26.7332C33.0939 26.6207 33.1874 26.4761 33.2381 26.3148C33.2888 26.1535 33.2948 25.9814 33.2556 25.817L32.0535 20.7598C31.4556 20.9562 30.8324 21.0652 30.2033 21.0832L31.3023 25.7064L29.9999 26.8684L28.6976 25.7064L29.7965 21.0832C29.1674 21.0652 28.5443 20.9562 27.9464 20.7598Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M35.1567 18.5767C34.6583 19.2099 34.0482 19.7465 33.3566 20.16C34.4536 20.1723 35.5021 20.6143 36.2768 21.3912C37.0515 22.168 37.4907 23.2177 37.5 24.3148V38.3786C37.4988 38.5196 37.4417 38.6542 37.3413 38.7531C37.2409 38.852 37.1053 38.9071 36.9644 38.9062H35.625V30.9375C35.625 30.6888 35.5262 30.4504 35.3504 30.2745C35.1746 30.0987 34.9361 30 34.6875 30C34.4389 30 34.2004 30.0987 34.0246 30.2745C33.8488 30.4504 33.75 30.6888 33.75 30.9375V38.9062H26.25V30.9375C26.25 30.6888 26.1512 30.4504 25.9754 30.2745C25.7996 30.0987 25.5611 30 25.3125 30C25.0639 30 24.8254 30.0987 24.6496 30.2745C24.4738 30.4504 24.375 30.6888 24.375 30.9375V38.9062H23.0356C22.8947 38.9071 22.7591 38.852 22.6587 38.7531C22.5583 38.6542 22.5012 38.5196 22.5 38.3786V24.3148C22.5093 23.2177 22.9485 22.168 23.7232 21.3912C24.4979 20.6143 25.5464 20.1723 26.6434 20.16C25.9518 19.7465 25.3417 19.2099 24.8433 18.5767C23.6236 18.9639 22.5581 19.728 21.8001 20.7591C21.0421 21.7901 20.6307 23.0351 20.625 24.3148V38.3786C20.6268 39.0167 20.8816 39.628 21.3335 40.0784C21.7854 40.5288 22.3975 40.7816 23.0356 40.7812H24.375V57.1875C24.3758 57.9331 24.6724 58.648 25.1997 59.1753C25.7269 59.7026 26.4418 59.9991 27.1875 60H28.125C28.8178 59.9997 29.486 59.7424 30 59.2779C30.514 59.7424 31.1822 59.9997 31.875 60H32.8125C33.5582 59.9991 34.2731 59.7026 34.8003 59.1753C35.3276 58.648 35.6242 57.9331 35.625 57.1875V40.7812H36.9644C37.6025 40.7816 38.2146 40.5288 38.6665 40.0784C39.1184 39.628 39.3732 39.0167 39.375 38.3786V24.3148C39.3693 23.0351 38.9579 21.7901 38.1999 20.7591C37.4419 19.728 36.3764 18.9639 35.1567 18.5767ZM29.0625 40.8169V57.1875C29.0622 57.436 28.9634 57.6743 28.7876 57.85C28.6118 58.0258 28.3736 58.1247 28.125 58.125H27.1875C26.9389 58.1247 26.7007 58.0258 26.5249 57.85C26.3491 57.6743 26.2503 57.436 26.25 57.1875V40.7812H29.0661C29.0656 40.7933 29.0625 40.8047 29.0625 40.8169ZM33.75 57.1875C33.7497 57.436 33.6509 57.6743 33.4751 57.85C33.2993 58.0258 33.0611 58.1247 32.8125 58.125H31.875C31.6264 58.1247 31.3882 58.0258 31.2124 57.85C31.0366 57.6743 30.9378 57.436 30.9375 57.1875V40.8169C30.9375 40.8047 30.9344 40.7933 30.9339 40.7812H33.75V57.1875Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M34.6875 14.5312V10.7812C34.6875 9.53805 34.1936 8.34576 33.3146 7.46669C32.4355 6.58761 31.2432 6.09375 30 6.09375C28.7568 6.09375 27.5645 6.58761 26.6854 7.46669C25.8064 8.34576 25.3125 9.53805 25.3125 10.7812V14.5312C25.3125 15.7745 25.8064 16.9667 26.6854 17.8458C27.5645 18.7249 28.7568 19.2188 30 19.2188C31.2432 19.2188 32.4355 18.7249 33.3146 17.8458C34.1936 16.9667 34.6875 15.7745 34.6875 14.5312ZM32.8125 14.5312C32.8125 15.2772 32.5162 15.9925 31.9887 16.52C31.4613 17.0474 30.7459 17.3438 30 17.3438C29.2541 17.3438 28.5387 17.0474 28.0113 16.52C27.4838 15.9925 27.1875 15.2772 27.1875 14.5312V10.7812C27.1875 10.0353 27.4838 9.31996 28.0113 8.79251C28.5387 8.26507 29.2541 7.96875 30 7.96875C30.7459 7.96875 31.4613 8.26507 31.9887 8.79251C32.5162 9.31996 32.8125 10.0353 32.8125 10.7812V14.5312Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M55.4576 12.8618C54.7898 13.5926 53.9657 14.1632 53.0467 14.5311H53.1454C52.9293 15.0193 52.5761 15.4342 52.1286 15.7255C51.6812 16.0167 51.1589 16.1717 50.625 16.1717C50.0911 16.1717 49.5688 16.0167 49.1214 15.7255C48.6739 15.4342 48.3207 15.0193 48.1046 14.5311H48.2033C47.2843 14.1632 46.4602 13.5926 45.7924 12.8618C44.4978 13.1949 43.3499 13.9473 42.5281 15.0017C41.7063 16.0561 41.2569 17.3529 41.25 18.6897V35.5661C41.2518 36.2041 41.5066 36.8154 41.9585 37.2658C42.4104 37.7162 43.0225 37.969 43.6606 37.9686H45V57.1874C45.0008 57.9331 45.2974 58.648 45.8247 59.1752C46.3519 59.7025 47.0668 59.9991 47.8125 59.9999H48.75C49.4428 59.9997 50.111 59.7424 50.625 59.2778C51.139 59.7424 51.8072 59.9997 52.5 59.9999H53.4375C54.1832 59.9991 54.8981 59.7025 55.4253 59.1752C55.9526 58.648 56.2492 57.9331 56.25 57.1874V37.9686H57.5894C57.7698 37.9673 57.9495 37.9457 58.125 37.9042V59.0624C58.125 59.311 58.2238 59.5495 58.3996 59.7253C58.5754 59.9011 58.8139 59.9999 59.0625 59.9999C59.3111 59.9999 59.5496 59.9011 59.7254 59.7253C59.9012 59.5495 60 59.311 60 59.0624V18.6897C59.9931 17.3529 59.5437 16.0561 58.7219 15.0017C57.9001 13.9473 56.7522 13.1949 55.4576 12.8618ZM49.6875 38.0043V57.1874C49.6872 57.4359 49.5884 57.6742 49.4126 57.85C49.2368 58.0257 48.9986 58.1246 48.75 58.1249H47.8125C47.5639 58.1246 47.3257 58.0257 47.1499 57.85C46.9741 57.6742 46.8753 57.4359 46.875 57.1874V37.9686H49.6875V38.0043ZM54.375 57.1874C54.3747 57.4359 54.2759 57.6742 54.1001 57.85C53.9243 58.0257 53.6861 58.1246 53.4375 58.1249H52.5C52.2514 58.1246 52.0132 58.0257 51.8374 57.85C51.6616 57.6742 51.5628 57.4359 51.5625 57.1874V37.9686H54.375V57.1874ZM58.125 35.5661C58.1238 35.707 58.0667 35.8417 57.9663 35.9406C57.8659 36.0395 57.7303 36.0945 57.5894 36.0936H56.25V26.2499C56.25 26.0012 56.1512 25.7628 55.9754 25.587C55.7996 25.4112 55.5611 25.3124 55.3125 25.3124C55.0639 25.3124 54.8254 25.4112 54.6496 25.587C54.4738 25.7628 54.375 26.0012 54.375 26.2499V36.0936H46.875V26.2499C46.875 26.0012 46.7762 25.7628 46.6004 25.587C46.4246 25.4112 46.1861 25.3124 45.9375 25.3124C45.6889 25.3124 45.4504 25.4112 45.2746 25.587C45.0988 25.7628 45 26.0012 45 26.2499V36.0936H43.6606C43.5197 36.0945 43.3841 36.0395 43.2837 35.9406C43.1833 35.8417 43.1262 35.707 43.125 35.5661V18.6897C43.1308 17.7783 43.4349 16.8938 43.9908 16.1715C44.5466 15.4492 45.3237 14.9288 46.2032 14.6898C46.4073 15.5117 46.8448 16.2571 47.4631 16.8359C48.0813 17.4146 48.8539 17.8021 49.6875 17.9516V22.539C49.6875 22.7877 49.7863 23.0261 49.9621 23.2019C50.1379 23.3778 50.3764 23.4765 50.625 23.4765C50.8736 23.4765 51.1121 23.3778 51.2879 23.2019C51.4637 23.0261 51.5625 22.7877 51.5625 22.539V17.9516C52.3961 17.8021 53.1687 17.4146 53.7869 16.8359C54.4052 16.2571 54.8427 15.5117 55.0468 14.6898C55.9263 14.9288 56.7034 15.4492 57.2592 16.1715C57.8151 16.8938 58.1192 17.7783 58.125 18.6897V35.5661Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M50.625 0C49.3822 0.00142177 48.1908 0.495739 47.312 1.37451C46.4332 2.25328 45.9389 3.44473 45.9375 4.6875V8.4375C45.9375 9.6807 46.4314 10.873 47.3104 11.7521C48.1895 12.6311 49.3818 13.125 50.625 13.125C51.8682 13.125 53.0605 12.6311 53.9396 11.7521C54.8186 10.873 55.3125 9.6807 55.3125 8.4375V4.6875C55.3111 3.44473 54.8168 2.25328 53.938 1.37451C53.0592 0.495739 51.8678 0.00142177 50.625 0ZM53.4375 8.4375C53.4375 9.18342 53.1412 9.89879 52.6137 10.4262C52.0863 10.9537 51.3709 11.25 50.625 11.25C49.8791 11.25 49.1637 10.9537 48.6363 10.4262C48.1088 9.89879 47.8125 9.18342 47.8125 8.4375V4.6875C47.8125 3.94158 48.1088 3.22621 48.6363 2.69876C49.1637 2.17132 49.8791 1.875 50.625 1.875C51.3709 1.875 52.0863 2.17132 52.6137 2.69876C53.1412 3.22621 53.4375 3.94158 53.4375 4.6875V8.4375Z"
                          fill="#0874DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1391_469">
                          <rect width="60" height="60" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div>
                      <div className="text-center font-semibold text-[20px]">
                        Average Age
                      </div>
                      <div className="text-[18px] text-[#808080]">39.9</div>
                    </div>
                  </Card>
                  <Card className="flex flex-row gap-[30px] items-center justify-center p-4">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 67 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M61.4853 48.2401H60.5353V20.8301C60.5353 19.4601 59.4253 18.3501 58.0553 18.3501H52.5153C51.1553 18.3501 50.0353 19.4601 50.0353 20.8301V48.2401H48.0953V29.5001C48.0953 28.1301 46.9853 27.0201 45.6153 27.0201H40.0753C38.7153 27.0201 37.5953 28.1301 37.5953 29.5001V48.2501H35.6553V33.2101C35.6553 31.8401 34.5453 30.7301 33.1753 30.7301H27.6353C26.2753 30.7301 25.1553 31.8401 25.1553 33.2101V35.7301C22.8053 34.0401 19.9753 33.1101 17.0453 33.1101C9.40531 33.1101 3.19531 39.3301 3.19531 46.9701C3.19531 54.6101 9.40531 60.8201 17.0453 60.8201C20.9753 60.8201 24.6653 59.1501 27.2853 56.2701H61.4853C62.9353 56.2701 64.1053 55.0901 64.1053 53.6501V50.8801C64.1253 49.4201 62.9353 48.2401 61.4853 48.2401ZM52.5153 20.8301H58.0553V48.2401H52.5153V20.8301ZM40.0753 29.5001H45.6153V48.2501H40.0753V29.5001ZM33.1853 33.2101V48.2501H30.8553C30.8953 47.8301 30.9253 47.4101 30.9253 46.9801C30.9253 43.6901 29.7553 40.5401 27.6453 38.0501V33.2201H33.1853V33.2101ZM17.0553 58.3401C10.7853 58.3401 5.68531 53.2401 5.68531 46.9701C5.68531 40.6901 10.7853 35.5801 17.0553 35.5801C20.2453 35.5801 23.3253 36.9401 25.4853 39.3101C27.3953 41.4001 28.5253 44.1201 28.4453 46.9701C28.3153 51.7701 26.2753 53.6901 25.8053 54.2401C23.6353 56.8501 20.4453 58.3401 17.0553 58.3401ZM61.6453 53.6401C61.6453 53.7201 61.5753 53.7901 61.4953 53.7901H29.1253C29.1253 53.7801 29.1353 53.7701 29.1453 53.7601C29.6953 52.7901 30.1153 51.7601 30.4053 50.7201H61.4953C61.5853 50.7201 61.6553 50.7801 61.6553 50.8701V53.6401H61.6453Z"
                        fill="#0874DE"
                      />
                      <path
                        d="M17.0553 41.9901C18.0953 41.9901 18.9353 42.8301 18.9353 43.8701C18.9353 44.5501 19.4853 45.1101 20.1753 45.1101C20.8553 45.1101 21.4153 44.5601 21.4153 43.8701C21.4153 41.9001 20.0953 40.2501 18.2953 39.7101V39.3601C18.2953 38.6801 17.7453 38.1201 17.0553 38.1201C16.3753 38.1201 15.8153 38.6701 15.8153 39.3601V39.7101C14.0153 40.2501 12.6953 41.9001 12.6953 43.8701C12.6953 46.2701 14.6453 48.2301 17.0553 48.2301C18.0953 48.2301 18.9353 49.0701 18.9353 50.1101C18.9353 51.1501 18.0953 51.9901 17.0553 51.9901C16.0153 51.9901 15.1753 51.1501 15.1753 50.1101C15.1753 49.4301 14.6253 48.8701 13.9353 48.8701C13.2553 48.8701 12.6953 49.4201 12.6953 50.1101C12.6953 52.0801 14.0153 53.7301 15.8153 54.2701V54.6201C15.8153 55.3001 16.3653 55.8601 17.0553 55.8601C17.7353 55.8601 18.2953 55.3101 18.2953 54.6201V54.2701C20.0953 53.7301 21.4153 52.0801 21.4153 50.1101C21.4153 47.7101 19.4653 45.7501 17.0553 45.7501C16.0153 45.7501 15.1753 44.9101 15.1753 43.8701C15.1753 42.8401 16.0153 41.9901 17.0553 41.9901Z"
                        fill="#0874DE"
                      />
                      <path
                        d="M13.535 23.7502C13.715 23.7602 14.545 23.8102 15.875 23.8102C22.315 23.8102 40.455 22.6102 53.415 10.1702L52.815 13.8702C52.705 14.5402 53.165 15.1802 53.835 15.2902C53.905 15.3002 53.965 15.3102 54.035 15.3102C54.635 15.3102 55.155 14.8802 55.255 14.2702L56.495 6.63017C56.555 6.24017 56.425 5.84017 56.145 5.56017C55.865 5.28017 55.475 5.15017 55.075 5.21017L47.435 6.45017C46.765 6.56017 46.305 7.20017 46.415 7.87017C46.525 8.54017 47.145 9.00017 47.835 8.89017L51.845 8.24017C36.935 22.6402 13.945 21.3002 13.705 21.2902C13.055 21.2502 12.435 21.7602 12.385 22.4402C12.345 23.1102 12.855 23.7002 13.535 23.7502Z"
                        fill="#0874DE"
                      />
                    </svg>

                    <div>
                      <div className="text-center font-semibold text-[20px]">
                        Average Income
                      </div>
                      <div className="text-[18px] text-[#808080]">$71,972</div>
                    </div>
                  </Card>
                  <Card className="flex flex-row gap-[30px] items-center justify-center p-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 61 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1391_493)">
                        <path
                          d="M59.8803 28.0016L48.8098 18.5478C48.8228 18.4831 48.8357 18.4184 48.8486 18.3408V5.9771C48.8357 5.23993 48.2537 4.64503 47.5166 4.61916H41.3347C40.6234 4.61916 40.0414 5.25287 40.0414 5.9771V11.0985L31.1824 3.54574C30.7039 3.13189 29.9926 3.13189 29.5012 3.54574L0.803316 27.9887C0.247206 28.4414 0.182542 29.2561 0.63519 29.8122C1.08784 30.3683 1.9026 30.433 2.45871 29.9804C2.47165 29.9674 2.47165 29.9674 2.48458 29.9545L30.3418 6.23576L40.313 14.7326L46.275 19.8023L58.212 29.9674C58.7551 30.433 59.5699 30.3683 60.0355 29.8252C60.4881 29.282 60.4235 28.4672 59.8803 28.0016ZM46.2491 16.3621L42.628 13.31V7.21865H46.2491V16.3621Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M54.1783 30.6145L50.5442 27.5106L31.1838 10.9696C30.7053 10.5557 29.994 10.5557 29.5026 10.9696L10.1422 27.5106L6.50807 30.6145C5.9649 31.0801 5.90023 31.8948 6.36581 32.438C6.81846 32.9812 7.62029 33.0458 8.15054 32.5932L8.16347 32.5803L9.78007 31.1835V55.4325C9.793 56.1567 10.3879 56.7516 11.1121 56.7646H49.5613C50.2856 56.7516 50.8805 56.1697 50.8934 55.4325V31.1835L52.51 32.5803C52.7428 32.7743 53.0273 32.8906 53.3377 32.8906C53.7128 32.8906 54.0749 32.7225 54.3206 32.438C54.7991 31.8819 54.7215 31.0671 54.1783 30.6145ZM35.5163 54.1651H25.1701V40.1977H35.5163V54.1651ZM38.1029 54.1651V38.9432C38.1029 38.2319 37.5726 37.6111 36.8613 37.6111H23.8251C23.1138 37.6111 22.5835 38.2319 22.5835 38.9432V54.1651H12.3666V28.972L30.3432 13.6596L48.3198 28.972V54.1651H38.1029Z"
                          fill="#0874DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1391_493">
                          <rect
                            width="60"
                            height="60"
                            fill="white"
                            transform="translate(0.335938)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div>
                      <div className="text-center font-semibold text-[20px]">
                        Household Size
                      </div>
                      <div className="text-[18px] text-[#808080]">2.66</div>
                    </div>
                  </Card>
                  <Card className="flex flex-row gap-[30px] items-center justify-center p-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1391_505)">
                        <path
                          d="M14.5519 14.667L13.1413 22.1241C13.114 22.2688 13.1211 22.4178 13.162 22.5592C13.203 22.7006 13.2766 22.8304 13.3771 22.938L16.1896 25.952C16.2782 26.0444 16.3847 26.1179 16.5025 26.1681C16.6203 26.2183 16.747 26.2442 16.8751 26.2442C17.0031 26.2442 17.1299 26.2183 17.2477 26.1681C17.3655 26.1179 17.4719 26.0444 17.5606 25.952L20.3731 22.938C20.4735 22.8304 20.5472 22.7006 20.5881 22.5592C20.6291 22.4178 20.6362 22.2688 20.6088 22.1241L19.1983 14.6673C18.5951 14.839 17.9745 14.9426 17.3483 14.976L18.6782 22.006L16.8751 23.9382L15.0719 22.006L16.4018 14.9759C15.7756 14.9424 15.1551 14.8388 14.5519 14.667Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M16.875 13.125C18.173 13.125 19.4418 12.7401 20.521 12.019C21.6001 11.2979 22.4413 10.273 22.938 9.07384C23.4347 7.8747 23.5646 6.5552 23.3114 5.28221C23.0582 4.00921 22.4332 2.83988 21.5154 1.9221C20.5976 1.00433 19.4283 0.379311 18.1553 0.126097C16.8823 -0.127116 15.5628 0.00284532 14.3636 0.499546C13.1645 0.996247 12.1396 1.83738 11.4185 2.91658C10.6974 3.99577 10.3125 5.26456 10.3125 6.5625C10.3145 8.30239 11.0065 9.97046 12.2368 11.2007C13.4671 12.431 15.1351 13.1231 16.875 13.125ZM16.875 1.875C17.8021 1.875 18.7084 2.14992 19.4793 2.66499C20.2501 3.18006 20.8509 3.91215 21.2057 4.76867C21.5605 5.6252 21.6533 6.5677 21.4725 7.47699C21.2916 8.38628 20.8451 9.22151 20.1896 9.87707C19.534 10.5326 18.6988 10.9791 17.7895 11.1599C16.8802 11.3408 15.9377 11.248 15.0812 10.8932C14.2247 10.5384 13.4926 9.93759 12.9775 9.16674C12.4624 8.39588 12.1875 7.4896 12.1875 6.5625C12.189 5.31974 12.6833 4.12828 13.562 3.24951C14.4408 2.37074 15.6323 1.87643 16.875 1.875Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M43.125 17.8125C43.6428 17.8125 44.0625 17.3928 44.0625 16.875C44.0625 16.3572 43.6428 15.9375 43.125 15.9375C42.6072 15.9375 42.1875 16.3572 42.1875 16.875C42.1875 17.3928 42.6072 17.8125 43.125 17.8125Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M43.125 20.625C43.6428 20.625 44.0625 20.2053 44.0625 19.6875C44.0625 19.1697 43.6428 18.75 43.125 18.75C42.6072 18.75 42.1875 19.1697 42.1875 19.6875C42.1875 20.2053 42.6072 20.625 43.125 20.625Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M43.125 13.125C44.423 13.125 45.6918 12.7401 46.7709 12.019C47.8501 11.2979 48.6913 10.273 49.188 9.07384C49.6847 7.8747 49.8146 6.5552 49.5614 5.28221C49.3082 4.00921 48.6832 2.83988 47.7654 1.9221C46.8476 1.00433 45.6783 0.379311 44.4053 0.126097C43.1323 -0.127116 41.8128 0.00284532 40.6136 0.499546C39.4145 0.996247 38.3896 1.83738 37.6685 2.91658C36.9474 3.99577 36.5625 5.26456 36.5625 6.5625C36.5645 8.30239 37.2565 9.97046 38.4868 11.2007C39.7171 12.431 41.3851 13.1231 43.125 13.125ZM43.125 1.875C44.0521 1.875 44.9584 2.14992 45.7293 2.66499C46.5001 3.18006 47.1009 3.91215 47.4557 4.76867C47.8105 5.6252 47.9033 6.5677 47.7225 7.47699C47.5416 8.38628 47.0951 9.22151 46.4396 9.87707C45.784 10.5326 44.9488 10.9791 44.0395 11.1599C43.1302 11.3408 42.1877 11.248 41.3312 10.8932C40.4747 10.5384 39.7426 9.93759 39.2275 9.16674C38.7124 8.39588 38.4375 7.4896 38.4375 6.5625C38.439 5.31974 38.9333 4.12828 39.812 3.24951C40.6908 2.37074 41.8823 1.87643 43.125 1.875Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M55.1943 36.9479C55.1156 36.6737 55.0293 36.4096 54.9398 36.1354C54.4884 34.7557 53.9265 33.0382 53.9064 27.6562V19.2187C53.9064 15.9425 51.9557 13.3271 49.1302 12.48C48.4994 13.1184 47.7712 13.6525 46.9729 14.0625H47.1171C49.9186 14.0625 52.0314 16.279 52.0314 19.2187V27.6599C52.0354 28.7219 52.0601 29.6504 52.1008 30.4687H36.701C36.2818 30.4396 35.8891 30.2524 35.6024 29.9451C35.3158 29.6377 35.1563 29.2331 35.1563 28.8128C35.1563 28.3925 35.3158 27.9878 35.6024 27.6805C35.8891 27.3731 36.2818 27.186 36.701 27.1568H45.9376C46.1862 27.1568 46.4247 27.058 46.6005 26.8822C46.7763 26.7064 46.8751 26.4679 46.8751 26.2193V22.9687C46.8751 22.7201 46.7763 22.4816 46.6005 22.3058C46.4247 22.13 46.1862 22.0312 45.9376 22.0312C45.689 22.0312 45.4505 22.13 45.2747 22.3058C45.0989 22.4816 45.0001 22.7201 45.0001 22.9687V25.2818H36.701C35.7841 25.3111 34.9146 25.696 34.2763 26.355C33.6381 27.014 33.2813 27.8954 33.2812 28.8128C33.2813 29.7302 33.6381 30.6116 34.2763 31.2705C34.9146 31.9295 35.7841 32.3144 36.701 32.3437H52.2394C52.364 33.8343 52.6724 35.3037 53.1577 36.7186C53.2401 36.9708 53.3198 37.2139 53.3926 37.4661C53.4489 37.6298 53.4619 37.8052 53.4305 37.9754C53.399 38.1456 53.3242 38.3047 53.2131 38.4375L41.2501 38.4394V40.3125H42.6563V54.8716C42.2229 54.6226 41.744 54.463 41.2479 54.4023C40.7518 54.3415 40.2485 54.3808 39.7678 54.5178C39.2871 54.6549 38.8388 54.8868 38.4493 55.2001C38.0598 55.5133 37.737 55.9015 37.5001 56.3416V57.6919C37.4915 58.5145 37.2431 59.3166 36.7853 60H48.2814C49.0271 59.9992 49.742 59.7026 50.2692 59.1753C50.7965 58.648 51.0931 57.9332 51.0939 57.1875V40.3125H53.2131C53.5184 40.3068 53.8181 40.2297 54.0883 40.0875C54.3585 39.9452 54.5916 39.7416 54.7691 39.4931C55.0284 39.1289 55.2014 38.7105 55.2751 38.2695C55.3488 37.8286 55.3211 37.3766 55.1943 36.9479ZM40.7983 56.2495C41.2652 56.2509 41.7147 56.4269 42.0585 56.7429C42.4023 57.0588 42.6155 57.4919 42.6563 57.957V58.125H38.9232L38.9233 58.1245C38.9238 57.6274 39.1215 57.1508 39.473 56.7993C39.8245 56.4478 40.3012 56.25 40.7983 56.2495ZM44.5482 58.125L44.5483 58.1245C44.5489 57.6277 44.7466 57.1515 45.098 56.8004C45.4495 56.4493 45.9259 56.252 46.4226 56.2518C46.9194 56.2517 47.3959 56.4487 47.7476 56.7995C48.0992 57.1504 48.2973 57.6265 48.2982 58.1233C48.2925 58.1234 48.2871 58.125 48.2814 58.125L44.5482 58.125ZM49.2189 55.6338C48.6455 54.9847 47.8639 54.5556 47.0084 54.4203C46.153 54.285 45.2771 54.4518 44.5314 54.8922V40.3125H49.2189V55.6338Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M30 24.8438C31.0198 24.8437 32.0167 24.5413 32.8647 23.9748C33.7126 23.4082 34.3735 22.6029 34.7638 21.6607C35.154 20.7185 35.2561 19.6818 35.0572 18.6816C34.8582 17.6813 34.3671 16.7626 33.646 16.0415C32.9249 15.3204 32.0061 14.8293 31.0059 14.6303C30.0057 14.4314 28.969 14.5335 28.0268 14.9238C27.0846 15.314 26.2793 15.9749 25.7127 16.8228C25.1462 17.6708 24.8438 18.6677 24.8438 19.6875C24.8453 21.0546 25.389 22.3652 26.3557 23.3318C27.3224 24.2985 28.633 24.8422 30 24.8438ZM30 16.4063C30.649 16.4063 31.2834 16.5987 31.823 16.9592C32.3626 17.3198 32.7832 17.8323 33.0315 18.4318C33.2799 19.0314 33.3448 19.6911 33.2182 20.3276C33.0916 20.9641 32.7791 21.5488 32.3202 22.0077C31.8613 22.4666 31.2767 22.7791 30.6402 22.9057C30.0037 23.0323 29.3439 22.9673 28.7443 22.719C28.1448 22.4706 27.6323 22.0501 27.2718 21.5105C26.9112 20.9709 26.7188 20.3365 26.7188 19.6875C26.7198 18.8176 27.0658 17.9836 27.681 17.3684C28.2961 16.7533 29.1301 16.4073 30 16.4063Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M30 29.0625C30.5178 29.0625 30.9375 28.6428 30.9375 28.125C30.9375 27.6072 30.5178 27.1875 30 27.1875C29.4822 27.1875 29.0625 27.6072 29.0625 28.125C29.0625 28.6428 29.4822 29.0625 30 29.0625Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M30 32.8149C30.5178 32.8149 30.9375 32.3952 30.9375 31.8774C30.9375 31.3597 30.5178 30.9399 30 30.9399C29.4822 30.9399 29.0625 31.3597 29.0625 31.8774C29.0625 32.3952 29.4822 32.8149 30 32.8149Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M22.6101 58.6096C22.5208 58.1411 22.4839 57.6642 22.5001 57.1875V55.6525C21.9303 54.999 21.1505 54.5646 20.295 54.424C19.4394 54.2833 18.5616 54.4453 17.8126 54.882V40.7813H18.7501V38.9063H11.25V34.6875C11.25 34.4389 11.1513 34.2004 10.9754 34.0246C10.7996 33.8488 10.5612 33.75 10.3125 33.75C10.0639 33.75 9.82544 33.8488 9.64962 34.0246C9.4738 34.2004 9.37503 34.4389 9.37503 34.6875V38.9063H7.51649C7.26357 38.906 7.0211 38.8054 6.84225 38.6265C6.66341 38.4477 6.56281 38.2052 6.5625 37.9523V19.2678C6.56399 18.012 7.06352 16.8081 7.95151 15.9201C8.83951 15.0322 10.0434 14.5327 11.2992 14.5313H14.1273C12.9861 14.1362 11.943 13.5008 11.0685 12.668C9.35753 12.7284 7.73667 13.4499 6.54667 14.6807C5.35667 15.9115 4.69024 17.5558 4.6875 19.2678V37.9523C4.68834 38.7024 4.98666 39.4214 5.51702 39.9518C6.04737 40.4821 6.76645 40.7805 7.51649 40.7813H9.375V57.1875C9.37582 57.9332 9.67239 58.6481 10.1997 59.1754C10.7269 59.7027 11.4418 59.9992 12.1875 60H21.5626C22.062 59.9998 22.5522 59.8656 22.9821 59.6115C22.8401 59.2845 22.7159 58.95 22.6101 58.6096ZM15.9376 40.7813V54.882C15.1885 54.4453 14.3107 54.2833 13.4552 54.424C12.5996 54.5646 11.8199 54.999 11.2501 55.6525V40.7813H15.9376ZM12.1875 58.125L12.1876 58.1246C12.1876 57.6273 12.3851 57.1504 12.7367 56.7988C13.0884 56.4471 13.5653 56.2496 14.0626 56.2496C14.5598 56.2496 15.0368 56.4471 15.3884 56.7988C15.74 57.1504 15.9376 57.6273 15.9376 58.1246L12.1875 58.125ZM17.8126 58.125C17.8126 57.6278 18.0101 57.1504 18.3618 56.7988C18.7134 56.4471 19.1903 56.2496 19.6876 56.2496C20.1849 56.2496 20.6618 56.4471 21.0134 56.7988C21.365 57.1504 21.5626 57.6273 21.5626 58.1246L21.5626 58.125H17.8126Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M19.625 14.5315H21.979C22.8888 14.5316 23.7825 14.7718 24.5698 15.2278C24.9825 14.728 25.4618 14.2871 25.9942 13.9175C25.0057 13.23 23.8572 12.8076 22.6588 12.6909C21.7894 13.5126 20.7553 14.1399 19.625 14.5315Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M35.4426 15.2442C36.2701 14.487 37.3503 14.0656 38.4721 14.0624H39.2761C38.4317 13.6269 37.6666 13.0525 37.0127 12.3633C35.9079 12.6288 34.8929 13.1816 34.0703 13.9655C34.5824 14.3291 35.0439 14.7591 35.4426 15.2442Z"
                          fill="#0874DE"
                        />
                        <path
                          d="M37.5 45.4686C37.9981 45.4671 38.4752 45.268 38.8267 44.9152C39.1782 44.5623 39.3754 44.0844 39.375 43.5863V34.2186H37.5V43.5936L35.625 43.5927V41.2499C35.625 41.0013 35.5263 40.7628 35.3505 40.587C35.1746 40.4112 34.9362 40.3124 34.6875 40.3124C34.4389 40.3124 34.2004 40.4112 34.0246 40.587C33.8488 40.7628 33.75 41.0013 33.75 41.2499V43.5918L26.25 43.5882V41.2499C26.25 41.0013 26.1512 40.7628 25.9754 40.587C25.7996 40.4112 25.5611 40.3124 25.3125 40.3124C25.0639 40.3124 24.8254 40.4112 24.6496 40.587C24.4738 40.7628 24.375 41.0013 24.375 41.2499V43.5872L22.5 43.5863V30.5625C22.4976 29.4136 22.91 28.3025 23.6613 27.4333C24.4126 26.564 25.4523 25.9952 26.5894 25.8312C25.9125 25.4519 25.3027 24.9637 24.7844 24.3862C23.555 24.8846 22.5023 25.7387 21.7613 26.8391C21.0203 27.9394 20.6246 29.2359 20.625 30.5625V43.5863C20.6246 44.0844 20.8218 44.5623 21.1733 44.9152C21.5248 45.268 22.0019 45.4671 22.5 45.4687H24.375V57.6919C24.3896 58.3173 24.6516 58.9114 25.1035 59.344C25.5554 59.7767 26.1603 60.0125 26.7858 59.9999H33.2142C33.8397 60.0125 34.4446 59.7767 34.8965 59.344C35.3484 58.9114 35.6104 58.3173 35.625 57.6919V45.4686H37.5ZM29.0625 45.4686V54.9821C28.6342 54.7375 28.1495 54.6088 27.6562 54.6088C27.163 54.6088 26.6783 54.7375 26.25 54.9821V45.4686H29.0625ZM26.4844 57.8901C26.4529 57.7183 26.4595 57.5416 26.5039 57.3727C26.5482 57.2038 26.6292 57.0466 26.741 56.9125C26.8528 56.7783 26.9927 56.6703 27.1509 56.5963C27.3091 56.5222 27.4816 56.4838 27.6562 56.4838C27.8309 56.4838 28.0034 56.5222 28.1616 56.5963C28.3198 56.6703 28.4597 56.7783 28.5715 56.9125C28.6833 57.0466 28.7643 57.2038 28.8086 57.3727C28.853 57.5416 28.8596 57.7183 28.8281 57.8901C28.8291 57.9694 28.8403 58.0484 28.8614 58.1249H26.7858C26.715 58.1319 26.6443 58.1114 26.5882 58.0677C26.5321 58.024 26.4949 57.9604 26.4844 57.8901ZM31.1386 58.1249C31.1597 58.0484 31.1709 57.9694 31.1719 57.8901C31.1404 57.7183 31.147 57.5416 31.1914 57.3727C31.2357 57.2038 31.3167 57.0466 31.4285 56.9125C31.5403 56.7783 31.6802 56.6703 31.8384 56.5963C31.9966 56.5222 32.1691 56.4838 32.3437 56.4838C32.5184 56.4838 32.6909 56.5222 32.8491 56.5963C33.0073 56.6703 33.1472 56.7783 33.259 56.9125C33.3708 57.0466 33.4518 57.2038 33.4961 57.3727C33.5405 57.5416 33.5471 57.7183 33.5156 57.8901C33.5156 57.938 33.5238 58.1194 33.2142 58.1249H31.1386ZM33.75 54.9821C33.3217 54.7375 32.837 54.6088 32.3438 54.6088C31.8505 54.6088 31.3658 54.7375 30.9375 54.9821V45.4686H33.75V54.9821Z"
                          fill="#0874DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1391_505">
                          <rect width="60" height="60" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div>
                      <div className="text-center font-semibold text-[20px]">
                        Children Family
                      </div>
                      <div className="text-[18px] text-[#808080]">20.0%</div>
                    </div>
                  </Card>
                  <Card className="flex flex-row gap-[30px] items-center justify-center p-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 61 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.2891 13.125H41.9141V11.25C41.9141 8.14875 39.3903 5.625 36.2891 5.625H25.0391C21.9378 5.625 19.4141 8.14875 19.4141 11.25V13.125H10.0391C6.93781 13.125 4.41406 15.6488 4.41406 18.75V48.75C4.41406 51.8512 6.93781 54.375 10.0391 54.375H51.2891C54.3903 54.375 56.9141 51.8512 56.9141 48.75V18.75C56.9141 15.6488 54.3903 13.125 51.2891 13.125ZM23.1641 11.25C23.1641 10.2169 24.0059 9.375 25.0391 9.375H36.2891C37.3222 9.375 38.1641 10.2169 38.1641 11.25V13.125H23.1641V11.25ZM21.2891 16.875H50.9103L45.2178 25.4156C44.8691 25.9388 44.2859 26.25 43.6578 26.25H37.8191C37.0428 24.0731 34.9803 22.5 32.5391 22.5H28.7891C26.3478 22.5 24.2853 24.0731 23.5091 26.25H17.6703C17.0422 26.25 16.4591 25.9369 16.1103 25.4156L10.4178 16.875H21.2891ZM34.4141 28.125C34.4141 29.1581 33.5722 30 32.5391 30H28.7891C27.7559 30 26.9141 29.1581 26.9141 28.125C26.9141 27.0919 27.7559 26.25 28.7891 26.25H32.5391C33.5722 26.25 34.4141 27.0919 34.4141 28.125ZM53.1641 48.75C53.1641 49.7831 52.3222 50.625 51.2891 50.625H10.0391C9.00594 50.625 8.16406 49.7831 8.16406 48.75V20.2556L12.9903 27.495C14.0366 29.0625 15.7859 30 17.6703 30H23.5091C24.2853 32.1769 26.3478 33.75 28.7891 33.75H32.5391C34.9803 33.75 37.0428 32.1769 37.8191 30H43.6578C45.5422 30 47.2916 29.0625 48.3378 27.495L53.1641 20.2556V48.75Z"
                        fill="#0874DE"
                      />
                    </svg>

                    <div>
                      <div className="text-center font-semibold text-[20px]">
                        Employment Rate
                      </div>
                      <div className="text-[18px] text-[#808080]">63.3</div>
                    </div>
                  </Card>
                  <Card className="flex flex-row gap-[30px] items-center justify-center p-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 61 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1391_529)">
                        <path
                          d="M57.8841 19.046L32.7741 8.42101C32.0025 8.09641 31.1738 7.9292 30.3366 7.9292C29.4995 7.9292 28.6708 8.09641 27.8991 8.42101L2.78914 19.046C2.11044 19.3331 1.53136 19.8138 1.12424 20.428C0.717121 21.0423 0.5 21.7628 0.5 22.4998C0.5 23.2367 0.717121 23.9573 1.12424 24.5715C1.53136 25.1858 2.11044 25.6664 2.78914 25.9535L11.5891 29.6748V41.641C11.5824 42.7155 11.8554 43.7732 12.3814 44.7102C12.9074 45.6471 13.6683 46.431 14.5891 46.9848C19.3678 49.7787 24.8037 51.2511 30.3391 51.2511C35.8746 51.2511 41.3105 49.7787 46.0891 46.9848C47.01 46.431 47.7708 45.6471 48.2968 44.7102C48.8228 43.7732 49.0959 42.7155 49.0891 41.641V29.6748L52.8391 28.0873V34.0148C52.337 34.2322 51.9011 34.5782 51.5754 35.0179C51.2498 35.4577 51.0459 35.9755 50.9844 36.5193C50.9229 37.063 51.0059 37.6133 51.2252 38.1147C51.4444 38.616 51.792 39.0507 52.2329 39.3748C51.8407 39.6633 51.5216 40.0397 51.3012 40.4739C51.0809 40.9081 50.9654 41.3879 50.9641 41.8748V44.9998C50.9641 45.3313 51.0958 45.6492 51.3303 45.8836C51.5647 46.1181 51.8826 46.2498 52.2141 46.2498H55.9641C56.2957 46.2498 56.6136 46.1181 56.848 45.8836C57.0824 45.6492 57.2141 45.3313 57.2141 44.9998V41.8748C57.2128 41.3879 57.0974 40.9081 56.877 40.4739C56.6567 40.0397 56.3376 39.6633 55.9454 39.3748C56.3863 39.0507 56.7339 38.616 56.9531 38.1147C57.1723 37.6133 57.2554 37.063 57.1939 36.5193C57.1324 35.9755 56.9285 35.4577 56.6029 35.0179C56.2772 34.5782 55.8413 34.2322 55.3391 34.0148V27.0298L57.8841 25.9535C58.5628 25.6664 59.1419 25.1858 59.549 24.5715C59.9562 23.9573 60.1733 23.2367 60.1733 22.4998C60.1733 21.7628 59.9562 21.0423 59.549 20.428C59.1419 19.8138 58.5628 19.3331 57.8841 19.046ZM54.7141 36.8748C54.7141 36.9984 54.6775 37.1192 54.6088 37.222C54.5401 37.3248 54.4425 37.4049 54.3283 37.4522C54.2141 37.4995 54.0884 37.5119 53.9672 37.4878C53.846 37.4636 53.7346 37.4041 53.6472 37.3167C53.5598 37.2293 53.5003 37.1179 53.4762 36.9967C53.452 36.8755 53.4644 36.7498 53.5117 36.6356C53.559 36.5214 53.6391 36.4238 53.7419 36.3551C53.8447 36.2864 53.9655 36.2498 54.0891 36.2498C54.2549 36.2498 54.4139 36.3156 54.5311 36.4328C54.6483 36.55 54.7141 36.709 54.7141 36.8748ZM54.7141 43.7498H53.4641V41.8748C53.4641 41.709 53.53 41.55 53.6472 41.4328C53.7644 41.3156 53.9234 41.2498 54.0891 41.2498C54.2549 41.2498 54.4139 41.3156 54.5311 41.4328C54.6483 41.55 54.7141 41.709 54.7141 41.8748V43.7498ZM46.5891 41.641C46.5964 42.2803 46.4371 42.9105 46.127 43.4696C45.8169 44.0287 45.3666 44.4974 44.8204 44.8298C40.4261 47.3969 35.4283 48.7497 30.3391 48.7497C25.2499 48.7497 20.2522 47.3969 15.8579 44.8298C15.3117 44.4974 14.8614 44.0287 14.5513 43.4696C14.2412 42.9105 14.0819 42.2803 14.0891 41.641V30.7323L27.9041 36.5773C28.6757 36.9022 29.5044 37.0696 30.3416 37.0696C31.1788 37.0696 32.0076 36.9022 32.7791 36.5773L46.5891 30.7323V41.641ZM56.9104 23.651L31.8004 34.276C31.3377 34.4703 30.841 34.5704 30.3391 34.5704C29.8373 34.5704 29.3406 34.4703 28.8779 34.276L3.76789 23.651C3.54166 23.5553 3.34863 23.3951 3.21292 23.1903C3.07722 22.9856 3.00484 22.7454 3.00484 22.4998C3.00484 22.2541 3.07722 22.0139 3.21292 21.8092C3.34863 21.6044 3.54166 21.4442 3.76789 21.3485L28.8779 10.7235C29.3405 10.5288 29.8373 10.4285 30.3391 10.4285C30.841 10.4285 31.3378 10.5288 31.8004 10.7235L56.9104 21.3485C57.1366 21.4442 57.3296 21.6044 57.4654 21.8092C57.6011 22.0139 57.6734 22.2541 57.6734 22.4998C57.6734 22.7454 57.6011 22.9856 57.4654 23.1903C57.3296 23.3951 57.1366 23.5553 56.9104 23.651Z"
                          fill="#0874DE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1391_529">
                          <rect
                            width="60"
                            height="60"
                            fill="white"
                            transform="translate(0.335938)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div>
                      <div className="text-center font-semibold text-[20px]">
                        Graduated College
                      </div>
                      <div className="text-[18px] text-[#808080]">46.6</div>
                    </div>
                  </Card>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Schools</h2>
                    <div className="flex flex-col md:flex-row gap-[30px]">
                      <div className="flex-[0.5] space-y-6 h-full">
                        <div className="border rounded-[18px]">
                          <div className="flex justify-between border-b py-[10px] px-[20px]">
                            <div className="flex gap-[8px]">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.1016 5.52067C16.2474 5.52067 17.1849 4.58317 17.1849 3.43734C17.1849 2.2915 16.2474 1.354 15.1016 1.354C13.9557 1.354 13.0182 2.2915 13.0182 3.43734C13.0182 4.58317 13.9557 5.52067 15.1016 5.52067ZM11.7682 18.0207L12.3932 15.4165L14.5807 17.4998V22.7082C14.5807 23.229 14.9974 23.7498 15.6224 23.7498C16.2474 23.7498 16.6641 23.229 16.6641 22.7082V16.8748C16.6641 16.2498 16.4557 15.729 16.0391 15.4165L14.4766 13.9582L15.1016 10.8332C16.2474 12.0832 17.8099 13.0207 19.6849 13.3332C20.3099 13.4373 20.8307 12.9165 20.8307 12.2915C20.8307 11.7707 20.4141 11.354 19.8932 11.2498C18.3307 10.9373 16.9766 10.104 16.3516 8.854L15.3099 7.18734C14.8932 6.56234 14.2682 6.14567 13.5391 6.14567C13.2266 6.14567 13.0182 6.24984 12.7057 6.24984L8.53906 8.02067C7.70573 8.229 7.28906 8.95817 7.28906 9.7915V12.2915C7.28906 12.9165 7.70573 13.3332 8.33073 13.3332C8.95573 13.3332 9.3724 12.9165 9.3724 12.2915V9.7915L11.2474 9.06234L9.58073 17.4998L5.41406 16.6665C4.89323 16.5623 4.26823 16.8748 4.16406 17.4998C4.16406 18.0207 4.47656 18.5415 4.9974 18.7498L9.3724 19.5832C10.4141 19.7915 11.5599 19.0623 11.7682 18.0207Z"
                                  fill="#0874DE"
                                />
                              </svg>
                              <span className="text-[#808080]">0.97 miles</span>
                            </div>
                            <p className="text-[#808080]">Assigned School</p>
                          </div>
                          <div className="flex items-center px-[6px] py-[20px] rounded-lg">
                            <div className="flex-1 mx-4">
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center justify-center w-10 h-10 bg-[#00875D] text-white rounded-full">
                                  <span className="font-semibold text-[20px]">4</span>/10
                                </div>
                                  <p className="text-[20px] text-[#808080] font-medium">
                                    GreatSchools Summary Rating
                                  </p>
                                  <InfoIcon className="w-5 h-5 text-gray-400" />
                              </div>
                              <a
                                href="#"
                                className="block mt-2 text-[#0874de] font-semibold text-[20px]"
                              >
                                H. Ashton Marsh Elementary School
                              </a>
                              <p className=" text-[18px]">800 IRELAN AVENUE</p>
                              <div className="flex justify-between">
                              <p className="text-[15px] text-gray-500">
                                PK,KG,1,2,3,4,UG
                              </p>
                              <div className="flex items-center space-x-2 mt-[-5px]">
                              <CompassIcon className="w-5 h-5 text-gray-400" />
                              <GlobeIcon className="w-5 h-5 text-gray-400" />
                            </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border rounded-[18px]">
                          <div className="flex justify-between border-b py-[10px] px-[20px]">
                            <div className="flex gap-[8px]">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.1016 5.52067C16.2474 5.52067 17.1849 4.58317 17.1849 3.43734C17.1849 2.2915 16.2474 1.354 15.1016 1.354C13.9557 1.354 13.0182 2.2915 13.0182 3.43734C13.0182 4.58317 13.9557 5.52067 15.1016 5.52067ZM11.7682 18.0207L12.3932 15.4165L14.5807 17.4998V22.7082C14.5807 23.229 14.9974 23.7498 15.6224 23.7498C16.2474 23.7498 16.6641 23.229 16.6641 22.7082V16.8748C16.6641 16.2498 16.4557 15.729 16.0391 15.4165L14.4766 13.9582L15.1016 10.8332C16.2474 12.0832 17.8099 13.0207 19.6849 13.3332C20.3099 13.4373 20.8307 12.9165 20.8307 12.2915C20.8307 11.7707 20.4141 11.354 19.8932 11.2498C18.3307 10.9373 16.9766 10.104 16.3516 8.854L15.3099 7.18734C14.8932 6.56234 14.2682 6.14567 13.5391 6.14567C13.2266 6.14567 13.0182 6.24984 12.7057 6.24984L8.53906 8.02067C7.70573 8.229 7.28906 8.95817 7.28906 9.7915V12.2915C7.28906 12.9165 7.70573 13.3332 8.33073 13.3332C8.95573 13.3332 9.3724 12.9165 9.3724 12.2915V9.7915L11.2474 9.06234L9.58073 17.4998L5.41406 16.6665C4.89323 16.5623 4.26823 16.8748 4.16406 17.4998C4.16406 18.0207 4.47656 18.5415 4.9974 18.7498L9.3724 19.5832C10.4141 19.7915 11.5599 19.0623 11.7682 18.0207Z"
                                  fill="#0874DE"
                                />
                              </svg>
                              <span className="text-[#808080]">0.97 miles</span>
                            </div>
                            <p className="text-[#808080]">Assigned School</p>
                          </div>
                          <div className="flex items-center px-[6px] py-[20px] rounded-lg">
                            <div className="flex-1 mx-4">
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center justify-center w-10 h-10 bg-[#00875D] text-white rounded-full">
                                  <span className="font-semibold text-[20px]">4</span>/10
                                </div>
                                  <p className="text-[20px] text-[#808080] font-medium">
                                    GreatSchools Summary Rating
                                  </p>
                                  <InfoIcon className="w-5 h-5 text-gray-400" />
                              </div>
                              <a
                                href="#"
                                className="block mt-2 text-[#0874de] font-semibold text-[20px]"
                              >
                                H. Ashton Marsh Elementary School
                              </a>
                              <p className=" text-[18px]">800 IRELAN AVENUE</p>
                              <div className="flex justify-between">
                              <p className="text-[15px] text-gray-500">
                                PK,KG,1,2,3,4,UG
                              </p>
                              <div className="flex items-center space-x-2 mt-[-5px]">
                              <CompassIcon className="w-5 h-5 text-gray-400" />
                              <GlobeIcon className="w-5 h-5 text-gray-400" />
                            </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-[0.5]">
                        <img
                          src="/images/map-placeholder.png"
                          alt="Map"
                          className="rounded-lg w-[653px] min-h-[455px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

       <div className=" mx-auto  overflow-scroll">
      <h1 className="text-2xl font-bold mb-6">Transit Scores</h1>
      <div className="flex md:justify-evenly md:gap-20 mb-8">
        <div className="flex flex-col items-center justify-center">
        <CircularProgress
          classNames={{
            svg: "w-[200px] h-[200px] drop-shadow-md",
            indicator: "stroke-[#0874de]",
            track: "stroke-[#d9d9d919]",
            value: "text-[48px] font-bold text-black",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
          <p className="mt-2 font-semibold text-[24px]">Walk Score</p>
        </div>
        <div className="flex flex-col items-center">
        <CircularProgress
          classNames={{
            svg: "w-[200px] h-[200px] drop-shadow-md",
            indicator: "stroke-[#009E3D]",
            track: "stroke-[#d9d9d919]",
            value: "text-[48px] font-bold text-black",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
          <p className="mt-2 font-semibold text-[24px]">Transit Score</p>
        </div>
        <div className="flex flex-col items-center">
        <CircularProgress
          classNames={{
            svg: "w-[200px] h-[200px] drop-shadow-md",
            indicator: "stroke-[#E78E00]",
            track: "stroke-[#d9d9d919]",
            value: "text-[48px] font-bold text-black",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
          <p className="mt-2 font-semibold text-[24px]">Bike Score</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[200px] md:gap-4">
        <div className="border rounded-2xl overflow-visible md:overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#0874de] text-white">
              <tr>
                <th className="p-4 w-[115px] text-[16px]">Walk Score</th>
                <th className="p-4 text-[16px]">Description</th>
              </tr>
            </thead>
            <tbody className="h-full">
              <tr className="border-b">
                <td className="px-2 py-3 text-[18px] flex justify-center">90-100</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold ">Walker&apos;s Paradise</span>
                  <br />
                  <p className="text-[16px]">Daily errands do not require a car.</p>
                </td>
              </tr>
              <tr className="border-b bg-[#00000015]">
                <td className="px-2 py-3 text-[18px] flex justify-center">70-89</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Very Walkable</span>
                  <br />
                  <p className="text-[16px] w-full">Most errands can be done on foot.</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-3 text-[18px] flex justify-center">50-69</td>
                <td className="p-2">
                  <span className="text-[20px] font-semibold">Somewhat Walkable</span>
                  <br />
                  <p className="text-[16px]">Some errands can be done on foot.</p>
                  
                </td>
              </tr>
              <tr className="border-b bg-[#00000015]">
                <td className="px-2 py-3 text-[18px] flex justify-center">25-49</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Car Dependent</span>
                  <br />
                  <p className="text-[16px]">Most errands require a car.</p>
                  
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-3 text-[18px] flex justify-center">0-24</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Train Dependent</span>
                  <br />
                  <p className="text-[16px]">Most errands require a train.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border rounded-2xl overflow-visible md:overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#009E3D] text-white">
              <tr>
                <th className="p-4 w-[130px]">Transit Score</th>
                <th className="p-4">Description</th>
              </tr>
            </thead>
            <tbody className="h-full">
              <tr className="border-b">
                <td className="px-2 py-3 text-[18px] flex justify-center">90-100</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold ">Walker&apos;s Paradise</span>
                  <br />
                  <p className="text-[16px]">Daily errands do not require a car.</p>
                </td>
              </tr>
              <tr className="border-b bg-[#00000015]">
                <td className="px-2 py-3 text-[18px] flex justify-center">70-89</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Very Walkable</span>
                  <br />
                  <p className="text-[16px] w-full">Most errands can be done on foot.</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-3 text-[18px] flex justify-center">50-69</td>
                <td className="p-2">
                  <span className="text-[20px] font-semibold">Somewhat Walkable</span>
                  <br />
                  <p className="text-[16px]">Some errands can be done on foot.</p>
                  
                </td>
              </tr>
              <tr className="border-b bg-[#00000015]">
                <td className="px-2 py-3 text-[18px] flex justify-center">25-49</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Car Dependent</span>
                  <br />
                  <p className="text-[16px]">Most errands require a car.</p>
                  
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-3 text-[18px] flex justify-center">0-24</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Train Dependent</span>
                  <br />
                  <p className="text-[16px]">Most errands require a train.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border rounded-2xl overflow-visible md:overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#E78E00] text-white">
              <tr>
                <th className="p-4 w-[115px]">Bike Score</th>
                <th className="p-4">Description</th>
              </tr>
            </thead>
            <tbody className="h-full">
              <tr className="border-b">
                <td className="px-2 py-3 text-[18px] flex justify-center">90-100</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold ">Walker&apos;s Paradise</span>
                  <br />
                  <p className="text-[16px]">Daily errands do not require a car.</p>
                </td>
              </tr>
              <tr className="border-b bg-[#00000015]">
                <td className="px-2 py-3 text-[18px] flex justify-center">70-89</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Very Walkable</span>
                  <br />
                  <p className="text-[16px] w-full">Most errands can be done on foot.</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-3 text-[18px] flex justify-center">50-69</td>
                <td className="p-2">
                  <span className="text-[20px] font-semibold">Somewhat Walkable</span>
                  <br />
                  <p className="text-[16px]">Some errands can be done on foot.</p>
                  
                </td>
              </tr>
              <tr className="border-b bg-[#00000015]">
                <td className="px-2 py-3 text-[18px] flex justify-center">25-49</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Car Dependent</span>
                  <br />
                  <p className="text-[16px]">Most errands require a car.</p>
                  
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-3 text-[18px] flex justify-center">0-24</td>
                <td className="p-2">
                  <span className="text-[18px] font-semibold">Train Dependent</span>
                  <br />
                  <p className="text-[16px]">Most errands require a train.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
              </div>

              <div className=" mx-auto">
      <h2 className="text-2xl font-bold mb-4">Nearby Properties</h2>
      <div className="w-full h-64 bg-gray-200 rounded-lg mb-6">
        <img
          src="/images/map-placeholder.png"
          alt="Map"
          className="w-full h-full object-cover rounded-lg"
          width="1024"
          height="256"
          style={{ aspectRatio: "1024/256", objectFit: "cover" }}
        />
      </div>
      <div className="overflow-x-scroll border p-4 rounded-xl">
        <table className="min-w-full bg-white text-[16px]">
          <thead className="bg-[#00000010]">
            <tr className="border-b">
              <th className="px-4 py-4 text-left">
                Address <ArrowDownIcon className="inline-block w-4 h-4 text-[#0874de]" />
              </th>
              <th className="px-4 py-4 text-left">
                Sale Price <ArrowDownIcon className="inline-block w-4 h-4 text-[#0874de]" />
              </th>
              <th className="px-4 py-4 text-left">
                Sales Date <ArrowDownIcon className="inline-block w-4 h-4 text-[#0874de]" />
              </th>
              <th className="px-4 py-4 text-left">
                Sq.ft <ArrowDownIcon className="inline-block w-4 h-4 text-[#0874de]" />
              </th>
              <th className="px-4 py-4 text-left">
                Price per Sq. Ft. <ArrowDownIcon className="inline-block w-4 h-4 text-[#0874de]" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-4 flex items-center">
                <MapPinIcon className="w-6 h-6 mr-2 fill-[#469D62] text-[white]" />
                366 Upland Ave
              </td>
              <td className="px-4 py-4">-</td>
              <td className="px-4 py-4">01/01/2000</td>
              <td className="px-4 py-4">2,236</td>
              <td className="px-4 py-4">-</td>
            </tr>
            <tr className="border-b bg-[#00000010]">
              <td className="px-4 py-4 flex items-center">
                <MapPinIcon className="w-6 h-6 mr-2 fill-[#469D62] text-[white]" />
                Upland Ave
              </td>
              <td className="px-4 py-4">$57,600</td>
              <td className="px-4 py-4">03/31/1984</td>
              <td className="px-4 py-4">0</td>
              <td className="px-4 py-4">-</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-4 flex items-center">
                <MapPinIcon className="w-6 h-6 mr-2 fill-[#469D62] text-[white]" />
                135 Tenth Ave
              </td>
              <td className="px-4 py-4">$335,000</td>
              <td className="px-4 py-4">12/28/2022</td>
              <td className="px-4 py-4">2,060</td>
              <td className="px-4 py-4">$162.62</td>
            </tr>
            <tr className="bg-[#00000010]">
              <td className="px-4 py-4 flex items-center">
                <MapPinIcon className="w-6 h-6 mr-2 fill-[#469D62] text-[white]" />
                134 Tenth Ave
              </td>
              <td className="px-4 py-4">$309,000</td>
              <td className="px-4 py-4">08/15/2005</td>
              <td className="px-4 py-4">1,736</td>
              <td className="px-4 py-4">$178.28</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ArrowDownIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}


function MapPinIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}