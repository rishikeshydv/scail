"use client";
import React from "react";
import Image from "next/image";
import { FilterBar } from "@/components/filters";
import { Navbar } from "@/components/navigation";
import { MoveRight } from "lucide-react";
import PreOwnHeroImage from "@/public/images/4.png";
import Filters from "@/components/search/Filters";
import { FaAlignRight } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Points from "@/components/reports/Points";
import NewProp from "@/components/new-home/NewProp";
import { House} from "lucide-react";
import NewsCarousal from "@/components/news/NewsCarousal";
import { SearchResults } from "@/components/card/SearchResults";
const Buy = () => {
  const [searched, setSearched] = React.useState(false);
  return (
    <main className="">
      <section className="h-[90vh] xl:h-[85vh] min-w-[100vw] overflow-hidden bg-black-grid-with-gradient">
        <Navbar />
        <div className="text-white flex flex-col justify-evenly gap-y-10 xl:flex-row pt-10 lg:pt-14 relative">
  {/* Text Section */}
  <div className="flex flex-col gap-2 lg:pl-28 md:pt-14 w-full xl:w-1/2">
    {/* Breadcrumb */}
    <div className="font-light text-[16px] md:text-[20px] flex justify-center md:justify-start items-center gap-3">
      <span>Home</span>
      <span><MoveRight className="text-[#0874DE]" /></span>
      <span>New Homes</span>
    </div>

    {/* Heading */}
    <div className="flex flex-row justify-center md:justify-start text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px]">
      <span className="font-normal">New Homes for</span>&nbsp;
      <span className="flex flex-col font-bold w-fit border-b-[4px] sm:border-b-[6px] border-[#0874DE80]">
        Sale Near Me.
      </span>
    </div>

    {/* Subtext */}
    <div className="font-normal text-[#808080] text-[14px] sm:text-[16px] md:text-[20px] max-w-full md:max-w-[70%] pt-4 md:pt-5 px-4 md:px-0 text-center md:text-left">
      Everything you need to browse nearby Homes, all in one place. Used listings include a free homes report!
    </div>
  </div>

  {/* Image Section */}
  <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[68vh] w-full xl:w-1/2 flex justify-center items-center">
    <Image
      src={PreOwnHeroImage}
      alt="Hero home image"
      className="h-[90%] sm:h-[80%] md:h-[95%] object-contain z-10 mb-20 sm:mb-40 lg:mb-48"
    />
  </div>
</div>

      </section>

      {searched && (
        <div className="px-8 md:px-20 mt-[-80px] pb-20">
          <FilterBar searched={searched} setSearched={setSearched} />
        </div>
      )}
      {/* Search Section */}
      {searched && (
        <section className="bg-white min-h-[100vh] w-[100vw] overflow-clip  pb-16">
          <div className="flex flex-col md:flex-row px-4 md:px-10">
            {/* Left Filter */}
            <div className="flex-[0.3] ">
              <Filters />
            </div>
            {/* Right Results */}
            <div className="flex-[0.7]">
  {/* Top section: Texts and Sort Dropdown */}
  <div className="flex flex-col lg:flex-row justify-center items-center md:justify-between gap-4 px-6 lg:px-10 py-4 mt-6 md:mt-0">
    <p className="text-[16px] lg:text-[18px]">Showing 1 - 25 of 500 listings</p>
    
    {/* Sort by Dropdown */}
    <div className="flex items-center gap-2">
      <p className="text-[16px] lg:text-[18px]">Sort by:</p>
      <Select>
        <SelectTrigger className="w-[180px] lg:w-[280px] rounded-lg text-[14px] lg:text-[16px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          {/* North America */}
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          
          {/* Europe & Africa */}
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>

          {/* Asia */}
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">Indonesia Central Time (WITA)</SelectItem>
          </SelectGroup>

          {/* Australia & Pacific */}
          <SelectGroup>
            <SelectLabel>Australia & Pacific</SelectLabel>
            <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
            <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
            <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>

          {/* South America */}
          <SelectGroup>
            <SelectLabel>South America</SelectLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>

  {/* Listings grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4  gap-10 px-6 lg:px-10 pt-[25px] pb-[60px]">
    <SearchResults
      image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      name="Modern villa in Oregon"
      adddress="1261 Sampson street senver"
      price={800000}
      isNew={false}
    />
    <SearchResults
      image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      name="Modern villa in Oregon"
      adddress="1261 Sampson street senver"
      price={800000}
      isNew={false}
    />
    <SearchResults
      image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      name="Modern villa in Oregon"
      adddress="1261 Sampson street senver"
      price={800000}
      isNew={false}
    />
    <SearchResults
      image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      name="Modern villa in Oregon"
      adddress="1261 Sampson street senver"
      price={800000}
      isNew={false}
    />
    <SearchResults
      image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      name="Modern villa in Oregon"
      adddress="1261 Sampson street senver"
      price={800000}
      isNew={false}
    />
    <SearchResults
      image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      name="Modern villa in Oregon"
      adddress="1261 Sampson street senver"
      price={800000}
      isNew={false}
    />
  </div>
  <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center md:justify-evenly w-full max-w-4xl mx-auto p-4">
      <div className="text-[20px]">1 - 25 of 500 results</div>
      <div className="flex items-center space-x-[6px] md:space-x-4">
        <Button variant="outline" className="flex items-center space-x-1 rounded-[50px]">
          <ArrowLeftIcon className="w-4 h-4 text-[#0874de]" />
          <span>PREV</span>
        </Button>
        <Button className="bg-blue-500 text-white rounded-full w-10 h-10">01</Button>
        <Button variant="outline" className="rounded-full w-10 h-10">
          02
        </Button>
        <Button variant="outline" className="rounded-full w-10 h-10">
          03
        </Button>
        <span className="text-lg">...</span>
        <Button variant="outline" className="rounded-full w-10 h-10">
          25
        </Button>
        <Button className="bg-blue-500 text-white flex items-center space-x-1 rounded-[50px]">
          <span>NEXT</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
</div>

          </div>
        </section>
      )}

      <section className={`min-h-[100vh] w-[100vw]  bg-[#F5F5F5] ${searched ? "pt-20":"pt-52"} pb-28 border`}>
      {!searched && (
          <div className="mx-8 md:mx-20 mt-[-300px] pb-20">
            <FilterBar searched={searched} setSearched={setSearched} />
          </div>
        )}
        <div className="flex justify-between mx-20 items-center lg:flex-row flex-col gap-y-5">
          <div className="text-2xl sm:text-3xl md:text-[50px] font-normal flex">
            <span>Suggested&nbsp;</span>
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              Properties
            </span>
          </div>

          <div>
            <Button className="bg-[#0874DE] text-[16px] rounded-3xl">
              View More&nbsp;&nbsp;
              <FaAlignRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mx-10 justify-center mt-10 md:mt-20">
        <NewProp />
        <NewProp />
        <NewProp />
        </div>
      </section>

      <section
        className="min-h-[90vh] w-[100vw] pt-24"
        style={{ borderTop: "1px solid #00000026" }}
      >
        <div className="flex flex-col md:flex-row mx-20 justify-center items-center text-2xl sm:text-3xl lg:text-[50px] font-normal tracking-tight">
          <span>Why New Homes&nbsp;</span>
          <span
            className="font-bold flex flex-col w-fit border-b-[6px] border-[#0874DE80] mt-[2px]"
          >
            Over Pre-Homes?
          </span>
        </div>
        <div className="px-16 lg:px-28 py-10 grid grid-cols-1 g  md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Modern Design & Technology"
            content="New homes come with the latest designs, 
            energy-efficient features, and smart 
            technology integration."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Customization Options" 
            content="Enjoy the ability to customize your home 
            with personal finishes and designs that suit 
            your taste."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Lower Maintenance Costs"
            content="Newly constructed homes are built to the 
            latest standards and come with warranties,
            reducing the need for repairs and renovations."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Energy Efficiency"
            content="New homes are built with energy-saving 
            materials and appliances, resulting in lower 
            utility bills and environmental impact."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Healthier Living"
            content="Modern homes often come with better ventilation 
            systems and use safer, eco-friendly materials, 
            contributing to a healthier indoor environment."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="More Space & Functionality"
            content="New homes are designed to meet modern needs, 
            providing open floor plans, more storage, and
            multifunctional spaces."
          />
        </div>

      </section>

      <section className="bg-[#F5F5F5] pb-32 w-[100vw] overflow-clip">
        <div className="flex flex-col md:flex-row mx-20 justify-center text-2xl sm:text-3xl lg:text-[50px] font-normal py-16">
          <span>Latest Property&nbsp;</span>
          <span
            className="font-bold flex flex-col w-fit border-b-[6px] border-[#0874DE80]"
          >
           News & Updates
          </span>
        </div>
        <NewsCarousal />

      </section>

    </main>
  );
};

export default Buy;


function ArrowLeftIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}