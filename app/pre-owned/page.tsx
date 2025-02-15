"use client";
import React from "react";
import Image from "next/image";
import { FilterBar } from "@/components/filters";
import { Navbar } from "@/components/navigation";
import { HousePlus } from "lucide-react";
import { PropertyCardBorderless } from "@/components/card";
import PreOwnHeroImage from "@/public/images/new-home.png";
import FAQ from "@/components/buy/FAQ";
import Resource from "@/components/buy/Resource";
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
import LaptopImg from "@/public/images/lady_laptop.png";
import { SearchResults } from "@/components/card/SearchResults";
import HomeImage from "@/assets/images/hero-house.png";
import HomeImage1 from "@/public/images/new-home.png";
import HomeImage2 from "@/public/images/footer-2.png";
const Rent = () => {
  const [searched, setSearched] = React.useState(false);
  return (
    <main className="overflow-hidden">
      <section className="min-h-[80vh] xl:h-[85vh] 2xl:h-[65vh] min-w-[100vw] overflow-hidden bg-pre-owned-mobile md:bg-black-grid-with-gradient bg-no-repeat bg-cover">
        <Navbar />
        <div className="text-white flex flex-col gap-y-6 xl:gap-y-10  xl:flex-row md:pt-14">
          <div className="flex-[0.4] 2xl:flex-[0.4] flex flex-col md:items-center xl:justify-start xl:items-start px-10 lg:pl-36 2xl:pl-[270px] space-y-6 md:space-y-4 2xl:mt-20">
            <div className="font-light text-[20px] 2xl:text-[30px]">
              Pre Owned Homes for Sale
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 xl:gap-0 xl:flex-col text-6xl xl:text-[80px] 2xl:text-[100px]">
              <span className="font-normal">Buy with</span>
              <span
                className="flex flex-col font-bold mt-[-8px] md:mt-0 xl:mt-[-8px] w-fit"
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                }}
              >
                confidence.
              </span>
            </div>
            <div className="font-normal text-[#808080] text-[18px] 2xl:text-[25px] md:text-center xl:text-start md:w-[70%] pt-5">
              Everything you need to browse nearby Homes, all in one place. Used
              listings include a free homes report!
            </div>
          </div>
          <div className="flex-0.8 2xl:flex-[0.6] xl:h-[68vh] w-full z-10 mb-40 md:mb-20 2xl:mb-0 xl:mx-0 flex justify-center items-center px-6 md:px-10">
            <Image
              src={PreOwnHeroImage}
              alt="Hero home image"
              className="h-[40%] md:h-[400px] xl:h-[95%] 2xl:h-[70%] w-auto xl:object-contain z-10 xl:mb-48"
            />
          </div>
        </div>
      </section>

      {searched && (
        <div className="px-8 md:px-20 mt-[-80px] pb-20">
          <FilterBar searched={searched} setSearched={setSearched} className="2xl:px-[18%]"/>
        </div>
      )}

      {/* Search Section */}
      {searched && (
        <section className="bg-white min-h-[100vh] w-[100vw] overflow-clip pb-16">
                    <div className="flex flex-col md:flex-row px-4 md:px-10">
            {/* Left Filter */}
            <div className="flex-[0.3]  h-screen sticky top-0 overflow-y-auto">
              <Filters />
            </div>
            {/* Right Results */}
            <div className="flex-[0.7] overflow-y-auto h-screen">
              {/* Top section: Texts and Sort Dropdown */}
              <div className="flex flex-col lg:flex-row justify-center items-center md:justify-between gap-4 px-6 lg:px-10 py-4 mt-6 md:mt-0">
                <p className="text-[16px] lg:text-[18px]">
                  Showing 1 - 25 of 500 listings
                </p>

                {/* Sort by Dropdown */}
                <div className="flex items-center gap-2">
                  <p className="text-[16px] lg:text-[18px]">Sort by:</p>
                  <Select>
                    <SelectTrigger className="w-[180px] lg:w-[280px] rounded-lg text-[14px] lg:text-[16px]">
                      <SelectValue placeholder="Choose a filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Price</SelectLabel>
                        <SelectItem value="plh">Low to High</SelectItem>
                        <SelectItem value="phl">High to Low</SelectItem>
                      </SelectGroup>

                      <SelectGroup>
                        <SelectLabel>Bedrooms</SelectLabel>
                        <SelectItem value="bdlh">Low to High</SelectItem>
                        <SelectItem value="bdhl">High to Low</SelectItem>
                      </SelectGroup>

                      <SelectGroup>
                        <SelectLabel>Bathrooms</SelectLabel>
                        <SelectItem value="balh">Low to High</SelectItem>
                        <SelectItem value="bahl">High to Low</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Listings grid */}
              <div className="flex flex-wrap gap-6 px-4 md:px-8 py-6">
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center md:justify-evenly w-full max-w-4xl mx-auto p-4">
                <div className="text-[20px]">1 - 25 of 500 results</div>
                <div className="flex items-center space-x-[6px] md:space-x-4">
                  <Button
                    variant="outline"
                    className="flex items-center space-x-1 rounded-[50px]"
                  >
                    <ArrowLeftIcon className="w-4 h-4 text-[#0874de]" />
                    <span>PREV</span>
                  </Button>
                  <Button className="bg-blue-500 text-white rounded-full w-10 h-10">
                    01
                  </Button>
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

      <section
        className={`min-h-[100vh] w-[100vw]  bg-[#F5F5F5] ${
          searched ? "pt-20" : "pt-52"
        } pb-28 border`}
      >
        {!searched && (
          <div className="mx-8 md:mx-20 mt-[-300px] pb-20">
            <FilterBar searched={searched} setSearched={setSearched} className="2xl:px-[18%]"/>
          </div>
        )}
        {/* End of Search Section */}

        <div className="flex md:justify-between md:mx-20 items-center lg:flex-row flex-col gap-y-5">
          <div className="text-[25px] sm:text-3xl md:text-[50px] font-normal flex">
            <span>Recently Listed&nbsp;</span>
            <span className="font-bold flex flex-col border-b-[6px] border-[#0874DE80]">
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
        <div className="flex flex-wrap gap-16 md:gap-5 mx-20 justify-center mt-32">
          <PropertyCardBorderless
            image={HomeImage}
            address="50 Park Avenue, Manhattan, NY"
            beds={2}
            baths={2}
            price={400000}
            sqft={400}
          />
          <PropertyCardBorderless
            image={HomeImage1}
            address="78 Pine Ridge Road, Burlington, NJ"
            beds={2}
            baths={2}
            price={400000}
            sqft={400}
          />
          <PropertyCardBorderless
            image={HomeImage2}
            address="345 Elm Street, Austin, TX"
            beds={2}
            baths={2}
            price={400000}
            sqft={400}
          />
        </div>
      </section>

      <section className="bg-white pb-32 w-[100vw] overflow-clip">
        <div className="flex flex-col md:flex-row md:mx-20 justify-center items-center text-[25px] sm:text-3xl lg:text-[50px] font-normal py-10 md:py-24">
          <span>Find Homes That&nbsp;</span>
          <span className="font-bold flex flex-col w-fit  border-b-[6px] border-[#0874DE80]">
            Meet Your Needs
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 px-8 lg:px-20">
          <Resource
            variant="secondary"
            image={"/images/resource-1.png"}
            header={"352 High Falls Dr., Conway, SC 29526"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            variant="secondary"
            image={"/images/house-carousal-1.png"}
            header={"352 High Falls Dr., Conway, SC 29526"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            variant="secondary"
            image={"/images/house-carousal-2.png"}
            header={"352 High Falls Dr., Conway, SC 29526"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            variant="secondary"
            image={"/images/house-carousal-3.png"}
            header={"352 High Falls Dr., Conway, SC 29526"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
        </div>
      </section>

      <section
        className="md:max-h-[100vh] w-[100vw] pt-24"
        style={{ borderTop: "1px solid #00000026" }}
      >
        <div className="flex flex-col md:flex-row  justify-center items-center text-2xl md:text-3xl lg:text-4xl lg:pb-4  xl:text-[50px] font-normal tracking-tight">
          <span>Every Used Homes comes &nbsp;</span>
          <span
            className="font-bold flex flex-col w-fit"
            style={{
              borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
            }}
          >
            with a Free Home Report
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
          <div className="flex justify-center items-center">
            {/* This is for the image */}
            <Image src={LaptopImg} alt="Hero home image" width={700} />
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-6  mr-0 ml-10 xl:mr-10 xl:ml-0 pr-24 pb-10 xl:pb-0">
            {/* This is for the text */}
            <FAQ
              logo={
                <HousePlus
                  className="text-[#0874DE] bg-white p-4 rounded-full"
                  height={55}
                  width={55}
                />
              }
              header={
                "What is the advantage of shopping for a used House on Homes?"
              }
              content={
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
              }
            />
            <FAQ
              logo={
                <HousePlus
                  className="text-[#0874DE] bg-white p-4 rounded-full"
                  height={55}
                  width={55}
                />
              }
              header={
                "What is the advantage of shopping for a used House on Homes?"
              }
              content={
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
              }
            />
            <FAQ
              logo={
                <HousePlus
                  className="text-[#0874DE] bg-white p-4 rounded-full"
                  height={55}
                  width={55}
                />
              }
              header={
                "What is the advantage of shopping for a used House on Homes?"
              }
              content={
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
              }
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pb-32 w-[100vw] overflow-clip">
        <div className="flex mx-20 justify-center text-2xl sm:text-3xl lg:text-[50px] font-normal py-24">
          <span>Helpful&nbsp;</span>
          <span
            className="font-bold flex flex-col w-fit"
            style={{
              borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
            }}
          >
            Resources
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 px-8 lg:px-20">
          <Resource
            image={"/images/resource-1.png"}
            header={"Home Inspection"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            image={"/images/house-carousal-1.png"}
            header={"Home Inspection"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            image={"/images/house-carousal-3.png"}
            header={"Home Inspection"}
            content={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
          <Resource
            image={"/images/house-carousal-5.png"}
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

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}
