import React from "react";
import logo from "@/public/logo/propfax-logo.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

export default function Aggregation() {
  return (
    <main>
      <section className="bg-[#0f0f0f] h-[100px] relative w-full flex items-center">
        <Link href={"/"} className="absolute left-1/2 transform -translate-x-1/2 justify-center">
          <Image src={logo} alt="Logo" className="w-[146px] h[38px]" />
        </Link>
        <div className="absolute right-10 flex space-x-4">
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
      <section className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="p-[30px] min-w-[440px]">
            <div className="border-1">
                <div className="p-[60px] ">
                <div className="border-b-1">
                <p className="text-[18px]">This report is provided by:</p>
                <p className="text-[25px] font-semibold text-[#0874de]">ABC Realty</p>
                <p className="text-[22px]">4960E US Highway 377</p>
                <p className="text-[22px]">Granbury, TX 76049</p>
                <p className="text-[22px] font-semibold">817-579-1504</p>
            </div>
            <div>
            <p className="text-[18px] flex gap-2 text-[#808080]"><Star className="text-[#0874de]" fill="#0874de"/>3.8 <span className="text-[#0874de] font-semibold underline">46 Verified Reviews</span>
            <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z" fill="#0874DE"/>
            </svg>
            </p>
            <p className="text-[18px] flex gap-2 text-[#808080]"><Heart className="text-[#0874de]" fill="#0874de"/>538 <span className="text-[#0874de] font-semibold underline">Customer Favorites</span>
            </p>
            </div>
                </div>
            </div>
        </div>
        {/* Right Section */}
        <div className="w-full border-l-1">
            {/* Header */}
            <div className="h-[80px] bg-[#0874de] py-[20px] text-[30px] text-white font-semibold px-[30px]">
                Property History
            </div>
            {/* First Section */}
            <div className="flex md:flex-row flex-col border-b-1">
                {/* Left Section */}
                <div className="flex flex-[0.35] flex-col gap-[60px] p-[40px]">
                    <div className="text-[22px]">
                        <p className="font-semibold">1000 TESTING DR</p>
                        <p>Arlington, TX, 76016</p>
                    </div>
                    <div>
                        <p className="text-[18px]">This report is provided free of charge by:</p>
                        <p className="text-[25px] font-semibold text-[#0874de]">ABC Realty</p>
                        <p className="text-[18px] flex gap-2 text-[#808080]"><Star className="text-[#0874de]" fill="#0874de"/>3.8 <span className="text-[#0874de] font-semibold underline">46 Verified Reviews</span>
            <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z" fill="#0874DE"/>
            </svg>
            </p>
            <p className="text-[18px] flex gap-2 text-[#808080]"><Heart className="text-[#0874de]" fill="#0874de"/>538 <span className="text-[#0874de] font-semibold underline">Customer Favorites</span>
            </p>

                    </div>
                </div>
                {/* Right Section */}
                <div className="flex-[0.7] text-[22px] w-full">
                    <p className="flex gap-2 px-[30px] h-[70px] bg-gray-100 items-center border-1">
                    <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z" fill="#0874DE"/>
            </svg>
                        Built in <span className="font-semibold">1985</span></p>
                    <p className="flex gap-2 px-[30px] h-[70px] items-center border-1">
                    <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z" fill="#0874DE"/>
            </svg>
                        Property Type: Single Family Home</p>
                    <p className="flex gap-2 px-[30px] h-[70px] bg-gray-100 items-center border-1">
                    <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z" fill="#0874DE"/>
            </svg>
                        Number of Bedrooms: <span className="font-semibold">3</span> Bedroooms</p>
                    <p className="flex gap-2 px-[30px] h-[70px] items-center  border-1">
                    <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z" fill="#0874DE"/>
            </svg>
                        Number of Bathrooms: <span className="font-semibold">2</span> Bathrooms</p>
                    <p className="flex gap-2 px-[30px] h-[70px] bg-gray-100 items-center  border-1 ">
                    <svg width="30" height="30" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0.75L15.6627 2.11948C16.0059 2.19574 16.25 2.5001 16.25 2.85163V10.3417C16.25 11.8463 15.498 13.2513 14.2461 14.0859L9.5 17.25L4.75385 14.0859C3.50196 13.2513 2.75 11.8463 2.75 10.3417V2.85163C2.75 2.5001 2.99415 2.19574 3.3373 2.11948L9.5 0.75ZM12.8393 6.16637L9.12642 9.87818L7.00566 7.75732L5.94499 8.81805L9.12695 12L13.9 7.22703L12.8393 6.16637Z" fill="#0874DE"/>
            </svg>
                        Total Living Area of <span className="font-semibold">2,000</span> square feets</p>
                </div>
            </div>
            {/* Second Section */}
            {/* <div className="py-[30px] w-full border-1">
            <div className="bg-[#1769BA1A] px-[30px] flex ">
                <p className="flex-[0.6] text-[40px] font-semibold text-[#0874de] p-[20px]  border-1">Maintenance History</p>
                <div className="flex flex-[0.5] justify-between items-center space-x-[20px]">
                    <p className="flex gap-2 text-[25px] font-semibold border-1 w-full">
                        <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z" fill="#0874DE"/>
</svg>
Owner 1</p>
<p className="flex gap-2 text-[25px] font-semibold border-1 w-full">
                        <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z" fill="#0874DE"/>
</svg>
Owner 2</p>
<p className="flex gap-2 text-[25px] font-semibold border-1n w-full">
                        <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z" fill="#0874DE"/>
</svg>
Owner 3</p>
                </div>
            </div>
            </div> */}
                <div className="py-[30px] border-1">
      <div className="">
        <div className="flex items-center justify-between bg-blue-100 p-[24px]">
          <h2 className="text-[30px] font-bold text-blue-600">Maintenance History</h2>
          <div className="flex items-center space-x-4 text-[20px] font-semibold">
            <div className="flex items-center space-x-2">
            <svg width="20" height="20" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z" fill="#0874DE"/>
</svg>

              <span>Owner 1</span>
            </div>
            <div className="flex items-center space-x-2">
            <svg width="20" height="20" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z" fill="#0874DE"/>
</svg>
              <span>Owner 2</span>
            </div>
            <div className="flex items-center space-x-2">
            <svg width="20" height="20" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.835938 28C0.835938 22.1089 5.61156 17.3333 11.5026 17.3333C17.3937 17.3333 22.1693 22.1089 22.1693 28H0.835938ZM11.5026 16C7.0826 16 3.5026 12.42 3.5026 8C3.5026 3.58 7.0826 0 11.5026 0C15.9226 0 19.5026 3.58 19.5026 8C19.5026 12.42 15.9226 16 11.5026 16Z" fill="#0874DE"/>
</svg>
              <span>Owner 3</span>
            </div>
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead className="bg-blue-100">
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">
                <div className="flex items-center space-x-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9223 7.16005C17.9476 6.95338 17.8249 6.75605 17.6276 6.68938C17.4303 6.62271 17.2129 6.70405 17.1076 6.88405C15.3676 9.86671 12.0263 15.5947 10.8956 17.5334C10.8169 17.6694 10.8156 17.8374 10.8943 17.9734C10.9716 18.1094 11.1169 18.1934 11.2743 18.1934H14.8969C14.8969 18.1934 14.3916 22.244 14.0663 24.84C14.0409 25.0467 14.1636 25.244 14.3609 25.3107C14.5583 25.3774 14.7756 25.296 14.8809 25.116C16.6209 22.1334 19.9623 16.4054 21.0929 14.4667C21.1716 14.3307 21.1729 14.1627 21.0943 14.0267C21.0169 13.8907 20.8716 13.8067 20.7143 13.8067C19.4569 13.8067 17.0916 13.8067 17.0916 13.8067C17.0916 13.8067 17.5969 9.75605 17.9223 7.16005Z" fill="#0874DE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9974 1.66669C23.9081 1.66669 30.3307 8.08935 30.3307 16C30.3307 23.9107 23.9081 30.3334 15.9974 30.3334C8.08673 30.3334 1.66406 23.9107 1.66406 16C1.66406 8.08935 8.08673 1.66669 15.9974 1.66669ZM15.9974 3.66669C9.19073 3.66669 3.66406 9.19335 3.66406 16C3.66406 22.8067 9.19073 28.3334 15.9974 28.3334C22.8041 28.3334 28.3307 22.8067 28.3307 16C28.3307 9.19335 22.8041 3.66669 15.9974 3.66669Z" fill="#0874DE"/>
</svg>

                  <span>Electrical</span>
                  <InfoIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground">No issues reported to PROPFAX</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <WrenchIcon className="w-4 h-4 text-blue-600" />
                  <span>Plumbing</span>
                  <InfoIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground">No reported crimes associated with the property</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <HomeIcon className="w-4 h-4 text-blue-600" />
                  <span>Roofing</span>
                  <InfoIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground">No fire incidents reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <ThermometerIcon className="w-4 h-4 text-blue-600" />
                  <span>HVAC</span>
                  <InfoIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Property is located in a low-risk flood zone, with no flooding incidents recorded
                </p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-blue-100">
          <h2 className="text-2xl font-bold text-blue-600">Maintenance History</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4 text-blue-600" />
              <span>Owner 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4 text-blue-600" />
              <span>Owner 2</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4 text-blue-600" />
              <span>Owner 3</span>
            </div>
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead className="bg-blue-100">
            <tr>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <UsersIcon className="w-4 h-4 text-blue-600" />
                  <span>Owner Count</span>
                  <InfoIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground">2 previous owner</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <ShieldIcon className="w-4 h-4 text-blue-600" />
                  <span>Crime Reports</span>
                  <InfoIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground">No reported crimes associated with the property</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <FlameIcon className="w-4 h-4 text-blue-600" />
                  <span>Fire Records</span>
                  <InfoIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground">No fire incidents reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <DropletIcon className="w-4 h-4 text-blue-600" />
                  <span>Flood Records</span>
                  <InfoIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Property is located in a low-risk flood zone, with no flooding incidents recorded
                </p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
              <td className="p-4">
                <CircleCheckIcon className="w-6 h-6 text-green-600" />
                <p className="text-sm">No Issues Reported</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        </div>
      </section>
    </main>
  );
}


function BoltIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function CircleCheckIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function DropletIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}


function FlameIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function HomeIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InfoIcon(props:React.SVGProps<SVGSVGElement>) {
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
  )
}


function ShieldIcon(props:React.SVGProps<SVGSVGElement>) {
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
    </svg>
  )
}


function ThermometerIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}


function UserIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WrenchIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}