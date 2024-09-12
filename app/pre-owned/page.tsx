"use client";
import React from "react";
import Image from "next/image";
import { FilterBar } from "@/components/filters";
import { Navbar } from "@/components/navigation";
import { HousePlus } from "lucide-react";
import { HistoryReportCard, PropertyCardBorderless } from "@/components/card";
import PreOwnHeroImage from "@/assets/images/pre-own-hero.png";
import FAQ from "@/components/buy/FAQ";
import Resource from "@/components/buy/Resource";
import Filters from "@/components/search/Filters";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Rent = () => {
  const [searched, setSearched] = React.useState(false);
  return (
    <main>
      <section className="h-[150vh] xl:h-[80vh] w-[100vw] bg-black-grid">
        <Navbar />
        <div className="text-white flex flex-col gap-y-10 xl:flex-row pt-14 relative">
          <div className="flex-[0.4] flex flex-col pl-36 justify-center xl:justify-start">
            <div className="font-light text-[20px]">Pre Homes for Sale</div>
            <div className="flex flex-col text-6xl xl:text-[80px]">
              <span className="font-normal">Buy with</span>
              <span
                className="flex flex-col font-bold mt-[-8px] w-fit"
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                }}
              >
                confidence.
               
              </span>
            </div>
            <div className="font-normal text-[#808080] text-[18px] w-[70%] pt-5">
              Everything you need to browse nearby Homes, all in one place. Used
              listings include a free homes report!
            </div>
          </div>
          <div className="flex-[0.8] h-[68vh] w-full z-10 mb-20 mx-5 xl:mx-0 flex justify-end items-end">
            <Image
              src={PreOwnHeroImage}
              alt="Hero home image"
              className="h-[100%] object-contain z-10"
            />
          </div>
          <div className="xl:absolute w-full bottom-5">
            <FilterBar
              className="mx-20 text-black relative"
              searched={searched}
              setSearched={setSearched}
            />
          </div>
        </div>
      </section>

      {/* Search Section */}
      {searched && (
        <section className="bg-white min-h-[100vh] w-[100vw] overflow-hidden pt-28 pb-16">
          <div>
            {/* Left Filter */}
            <div>
              <Filters />
            </div>
            {/* Right Results */}
            <div>
              {/* Top texts */}
              <div className="flex flex-row justify-between gap-2">
                <p>Showing 1 - 25 of 500 listings</p>
                <div className="flex gap-2">
                  <p className="mt-2">Sort by:</p>
                  <Select>
                    <SelectTrigger className="w-[280px] rounded-xl">
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">
                          Eastern Standard Time (EST)
                        </SelectItem>
                        <SelectItem value="cst">
                          Central Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="mst">
                          Mountain Standard Time (MST)
                        </SelectItem>
                        <SelectItem value="pst">
                          Pacific Standard Time (PST)
                        </SelectItem>
                        <SelectItem value="akst">
                          Alaska Standard Time (AKST)
                        </SelectItem>
                        <SelectItem value="hst">
                          Hawaii Standard Time (HST)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Europe & Africa</SelectLabel>
                        <SelectItem value="gmt">
                          Greenwich Mean Time (GMT)
                        </SelectItem>
                        <SelectItem value="cet">
                          Central European Time (CET)
                        </SelectItem>
                        <SelectItem value="eet">
                          Eastern European Time (EET)
                        </SelectItem>
                        <SelectItem value="west">
                          Western European Summer Time (WEST)
                        </SelectItem>
                        <SelectItem value="cat">
                          Central Africa Time (CAT)
                        </SelectItem>
                        <SelectItem value="eat">
                          East Africa Time (EAT)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Asia</SelectLabel>
                        <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                        <SelectItem value="ist">
                          India Standard Time (IST)
                        </SelectItem>
                        <SelectItem value="cst_china">
                          China Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="jst">
                          Japan Standard Time (JST)
                        </SelectItem>
                        <SelectItem value="kst">
                          Korea Standard Time (KST)
                        </SelectItem>
                        <SelectItem value="ist_indonesia">
                          Indonesia Central Standard Time (WITA)
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Australia & Pacific</SelectLabel>
                        <SelectItem value="awst">
                          Australian Western Standard Time (AWST)
                        </SelectItem>
                        <SelectItem value="acst">
                          Australian Central Standard Time (ACST)
                        </SelectItem>
                        <SelectItem value="aest">
                          Australian Eastern Standard Time (AEST)
                        </SelectItem>
                        <SelectItem value="nzst">
                          New Zealand Standard Time (NZST)
                        </SelectItem>
                        <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>South America</SelectLabel>
                        <SelectItem value="art">
                          Argentina Time (ART)
                        </SelectItem>
                        <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                        <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                        <SelectItem value="clt">
                          Chile Standard Time (CLT)
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="min-h-[100vh] w-[100vw] overflow-hidden pt-28 pb-16 bg-[#F5F5F5]">
        <div className="flex mx-20 justify-center text-[50px] font-normal py-20">
          <span>Recently Listed &nbsp;</span>
          <span className="font-bold flex flex-col">
            Properties
            <span
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                marginTop: "-19px",
              }}
            ></span>
          </span>
        </div>

        <div className="flex flex-wrap gap-5 mx-20 justify-center py-6">
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
        </div>
      </section>

      <section className="min-h-[70vh] w-[100vw] overflow-hidden pt-10">
        <div className="flex mx-20 justify-center text-[50px] font-normal tracking-tight">
          <span>Every Used Homes comes with a &nbsp;</span>
          <span className="font-bold flex flex-col">
            Free Home Report
            <span
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                marginTop: "-22px",
              }}
            ></span>
          </span>
        </div>
        <div className="grid grid-cols-2 w-full px-20 pt-10">
          <div className="ml-20">
            {/* This is for the image */}
            <Image
              src={"/images/lady_laptop.png"}
              alt="Hero home image"
              className="z-10 mt-6"
              height={600}
              width={500}
            />
          </div>
          <div className="flex flex-col gap-6 mt-14">
            {/* This is for the text */}
            <FAQ logo={<HousePlus className="text-[#0874DE] bg-white p-5 rounded-full" height={65} width={65}/>} header={"What is the advantage of shopping for a used House on Homes?"} content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "} />
            <FAQ logo={<HousePlus className="text-[#0874DE] bg-white p-5 rounded-full" height={65} width={65}/>} header={"What is the advantage of shopping for a used House on Homes?"} content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "} />
            <FAQ logo={<HousePlus className="text-[#0874DE] bg-white p-5 rounded-full" height={65} width={65}/>} header={"What is the advantage of shopping for a used House on Homes?"} content={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "} />
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pb-32">
        <div className="flex mx-20 justify-center text-[50px] font-normal py-16">
          <span>Helpful&nbsp;</span>
          <span className="font-bold flex flex-col">
            Resources
            <span
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                marginTop: "-22px",
              }}
            ></span>
          </span>
        </div>
        <div className="grid grid-cols-4 gap-5 px-20">
          <Resource
            image={"/images/resource-1.png"}
            header={"Home Inspection"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            image={"/images/resource-1.png"}
            header={"Home Inspection"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            image={"/images/resource-1.png"}
            header={"Home Inspection"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            image={"/images/resource-1.png"}
            header={"Home Inspection"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
        </div>
      </section>
    </main>
  );
};

export default Rent;
