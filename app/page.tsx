"use client";

import Image from "next/image";
import { Navbar } from "@/components/navigation";
import { Button } from "antd";
import {
  Check,
  MoveRight,
  FileText,
  MapPinHouse,
  Info,
  AlignRight,
} from "lucide-react";
import { HistoryReportCard, PropertyCard } from "@/components/card";
import HeroProject100Image from "@/assets/images/hero-100-project.png";
import HeroHomeImage from "@/assets/images/hero-house.png";
import { useRouter } from "next/navigation";
import React from "react";
import MobilePhoneImage1 from "@/assets/images/mobile-phone1.png";
import MobilePhoneImage2 from "@/assets/images/mobile-phone2.png";
import MobilePhoneImage3 from "@/assets/images/mobile-phone3.png";
import MobilePhoneImage4 from "@/assets/images/mobile-phone4.png";
import { HomeFilterBar } from "@/components/filters/HomeFilterBar.component copy";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
export default function Home() {
  const router = useRouter();
  const [searched, setSearched] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [newHomes, setNewHomes] = React.useState(true);
  return (
    <main>
      <section className="h-[135vh] md:h-[85vh] min-w-[100vw] overflow-hidden bg-black-grid-with-gradient bg-no-repeat bg-cover">
        <Navbar />
        <div className="text-white mx-7 flex flex-col-reverse justify-center gap-y-8 xl:flex-row xl:gap-y-0">
          <div className="flex-[0.7] lg:flex-[0.40] flex flex-col items-center xl:items-start mt-4 md:mt-16">
            <div className="font-semibold text-6xl xl:text-[100px] flex justify-end">
              <span className="text-[#0874DE]">+</span>
              <span>&nbsp;Property</span>
            </div>
            <div className="font-semibold text-6xl xl:text-[100px]  flex justify-end">
              <span>Reports</span>
            </div>
            <div className="font-normal text-[24px] text-[#808080] mt-4">
              Discover homes for sale in your city and get detailed property
              reports
            </div>
            <div className="flex md:flex-row flex-col gap-y-5 md:gap-y-0 md:gap-x-4 py-6">
              <Button
                type="primary"
                shape="round"
                size="large"
                icon={<FileText width={20} />}
                iconPosition="end"
                className="p-6 text-lg"
                onClick={() => router.push("/reports")}
              >
                Home Report
              </Button>

              <Dropdown
                isOpen={isDropdownOpen}
                className="bg-[#262626] text-[#777777]"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <DropdownTrigger className="" onMouseEnter={() => setIsDropdownOpen(true)}>
                  <Button
                shape="round"
                size="large"
                icon={<MapPinHouse width={20} />}
                iconPosition="end"
                className="bg-[#262626] border-none text-white p-6 text-lg"
              >
                Buy a Home
              </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    key="pre-owned"
                    className="text-[16px]"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/pre-owned");
                    }}
                  >
                    Pre-Owned Homes
                  </DropdownItem>
                  <DropdownItem
                    key="new-homes"
                    className="text-[16px]"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      router.push("/new-homes");
                    }}
                  >
                    New Homes
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> 

            </div>
          </div>

          <div className="flex-[0.3] lg:flex-[0.52] xl:ml-[150px] flex items-center pt-10 md:pt-0">
            <Image
              src={HeroHomeImage}
              alt="Hero home image"
              className=" h-[300px] xl:h-[70%] object-contain overflow-hidden"
            />
          </div>
        </div>
      </section>
      <HomeFilterBar
        className="mx-8 md:mx-20 mt-[-100px]"
        newHomes={newHomes}
        setNewHomes={setNewHomes}
        searched={searched}
        setSearched={setSearched}
      />
      <section className="min-h-[100vh] min-w-[100vw] overflow-hidden pt-20 md:pt-28 pb-32">
        <div className="flex justify-between md:mx-20 items-center flex-col lg:flex-row gap-y-10 md:gap-y-5">
          <div className="text-[24px] md:text-[50px] font-normal flex">
            <span>Properties for &nbsp;</span>
            <span
              className="font-bold flex flex-col border-b-[4px] sm:border-b-[6px] border-[#0874DE80]"
            >
              Sell & Rent
            </span>
          </div>

          <div>
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<AlignRight width={15} />}
              iconPosition="end"
            >
              View Homes
            </Button>
          </div>
        </div>
        <div className="gap-x-4 pt-16 md:pt-24 mx-5 w-full inline-flex flex-nowrap overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll gap-6">
            <li>
              <PropertyCard
                image="/images/resource-1.png"
                name="Modern villa in Oregon"
                adddress="1261 Sampson street senver"
                price={800000}
                isNew={false}
                beds={4}
                baths={3}
                area={2500}
/>
            </li>
            <li>
              <PropertyCard
                image="/images/value.png"
                name="Luxury Apartment in New York"
                adddress="50 Park Avenue, Manhattan"
                price={1250000}
                isNew={true}
                beds={4}
                baths={3}
                area={2500}
              />
            </li>
            <li>
              <PropertyCard
                image="/images/new-prop-img.jpeg"
                name="Cozy Cottage in Vermont"
                adddress="78 Pine Ridge Road, Burlington"
                price={450000}
                isNew={true}
                beds={4}
                baths={3}
                area={2500}
              />
            </li>{" "}
            <li>
              <PropertyCard
                image="/images/house-carousal-1.png"
                name="Beachfront House in California"
                adddress="235 Ocean View Drive, Malibu"
                price={3200000}
                isNew={true}
                beds={4}
                baths={3}
                area={2500}
              />
            </li>
          </ul>

          <ul
            className="flex items-center justify-center md:justify-start animate-infinite-scroll gap-6"
            aria-hidden="true"
          >
            <li>
              <PropertyCard
                image="/images/house-carousal-2.png"
                name="Suburban Home in Texas"
                adddress="345 Elm Street, Austin"
                price={600000}
                isNew={false}
                beds={4}
                baths={3}
                area={2500}
              />
            </li>
            <li>
              <PropertyCard
                image="/images/house-carousal-3.png"
                name="Penthouse in Miami"
                adddress="101 Biscayne Blvd, Miami"
                price={2100000}
                isNew={true}
                beds={4}
                baths={3}
                area={2500}
              />
            </li>
            <li>
              <PropertyCard
                image="/images/house-carousal-4.png"
                name="Rustic Farmhouse in Colorado"
                adddress="897 River Bend Road, Aspen"
                price={900000}                
                isNew={true}
                beds={4}
                baths={3}
                area={2500}
              />
            </li>{" "}
            <li>
              <PropertyCard
                image="/images/house-carousal-5.png"
                name="Modern Condo in Seattle"
                adddress="789 Pine Street, Downtown Seattle"
                price={700000}
                isNew={true}
                beds={4}
                baths={3}
                area={2500}
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="min-h-[80vh] min-w-[100vw] overflow-hidden pt-28 pb-32 bg-[#F5F5F5] flex px-10 lg:px-20 lg:gap-x-14 lg:flex-row flex-col gap-y-5">
        <div className="w-full lg:flex-[0.6]">
          <Image src={HeroProject100Image} alt="hero image" className="md:h-[650px] md:w-[800px]"/>
        </div>

        <div className="lg:flex-[0.6] lg:px-4 text-left mt-6 md:mt-0">
          <div className="text-[#0874DE] font-medium text-[20px] md:text-[30px]">
            Online Property Marketplace
          </div>
          <div className="text-[2.5rem] md:text-[70px]">
            <span className="font-normal">We help you find </span>
            <span
              className="font-bold md:mt-[-20px] border-b-[4px] sm:border-b-[6px] border-[#0874DE80]"
            >
              your new home.
            </span>
          </div>

          <div className="font-normal text-[22px] md:text-[25px] text-[#808080] py-10">
            Online property marketplace to buy, sell, and rent residential and
            commercial properties.
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-[50%] bg-[#E7E5E5] flex items-center justify-center font-medium">
                <Check size={20} color="#0874DE" />
              </div>
              <div className="text-[22px] md:text-[25px]">Detailed property reports</div>
            </div>
            <div className="flex items-center gap-x-3 py-4">
              <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-[50%] bg-[#E7E5E5] flex items-center justify-center font-medium">
                <Check size={20} color="#0874DE" />
              </div>
              <div className="text-[22px] md:text-[25px]">
                Discover the best deals
              </div>
            </div>
          </div>

          <div className="pt-5">
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<Info width={20} />}
              iconPosition="end"
              onClick={() => router.push("/contact")}
            >
              About Us
            </Button>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh] min-w-[100vw] overflow-hidden pt-28 md:pb-32">
        <div className="flex justify-between mx-4 md:mx-20 items-center lg:flex-row flex-col gap-y-5">
          <div className="text-3xl md:text-[50px] font-normal flex">
            <span>Insightful &nbsp;</span>
            <span
              className="font-bold flex flex-col border-b-[6px] border-[#0874DE80]"
            >
              Property Reports
            </span>
          </div>

          <div>
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<MoveRight width={15} />}
              iconPosition="end"
            >
              View All Properties
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-5 py-16 px-8 lg:px-20">
          <HistoryReportCard
            position={1}
            title="Find the perfect place."
            description="Browse through a wide range of 
properties to find your match"
          image={MobilePhoneImage1}
          />
          <HistoryReportCard
            position={2}
            title="Enter the address"
            description="Enter the address in the Reports page"
            image={MobilePhoneImage2}
          />
          <HistoryReportCard
            position={3}
            title="Make your payment"
            description="Select payment method and complete your payment"
            image={MobilePhoneImage3}
          />
          <HistoryReportCard
            position={4}
            title="Your Prop Fax Report!"
            description="Get access to your detailed Prop fax report"
            image={MobilePhoneImage4}
          />
        </div>
      </section>
    </main>
  );
}
