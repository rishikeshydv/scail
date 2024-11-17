"use client";
import Image from "next/image";
import { Navbar } from "@/components/navigation";
import ReportsHeroImage from "@/public/images/reports.png";
import { House, FileText, Phone } from "lucide-react";
import { theme } from "antd";
import Value from "@/components/reports/Value";
import Points from "@/components/reports/Points";
import Review from "@/components/reports/Review";
import FooterHero from "@/public/images/footer-2.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ValueImage from "@/public/images/value.png";
import React from "react";
import BrandsCarousal from "@/components/reports/BrandsCarousal";
import { useRouter } from "next/navigation";

const Reports = () => {
  const { token } = theme.useToken();
  const router = useRouter();
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: "white",
    borderRadius: token.borderRadiusLG,
    border: "#00000026",
  };

  // google map configs
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };


  return (
    <main>
      <section className="max-h-[145vh] xl:max-h-[75vh] w-[100vw] overflow-clip bg-reports-hero bg-no-repeat bg-cover sm:bg-black-grid-with-gradient">
        <Navbar />
        <div className="text-white mx-10 md:mx-32 flex flex-col xl:flex-row gap-x-10 py-0 md:py-20 xl:py-0">
          <div className="xl:flex-[0.5] flex flex-col gap-y-6 justify-center py-20 md:py-0">
            <div className="text-5xl xl:text-[50px] font-normal flex xl:flex-row flex-col">
              <span>Get Your&nbsp;</span>
              <span
                className="flex flex-col font-bold w-fit border-b-[6px] border-[#0874DE80]"
              >
                Home Reports
              </span>
            </div>
            <div className="text-[#808080] text-[20px] font-normal">
              Everything you need to browse nearby homes, all in one place. Used
              listings include a free homes report!
            </div>
            <div>
              <p className="mb-4">Search by Address</p>
              <div className="flex flex-col gap-y-5 md:flex-row gap-x-4 items-center">
                <input
                  placeholder="Enter Address"
                  className="rounded-[50px] bg-[#262626] border-none outline-none w-full xl:w-[70%] px-[18px] py-[20px]"
                />
                <Button className="px-[18px] py-[15px] h-[60px] w-[100%] md:w-[30%] text-[18px] rounded-[50px] bg-[#0874DE]" onClick={()=>router.push("/new-homes/details/123")}>
                  Get Reports&nbsp;
                  <FileText width={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-[0.5] hidden xl:flex justify-center items-center">
            <Image
              src='/images/reports.png'
              alt="reports hero home image"
              className="xl:ml-36 mt-14"
              height={600}
              width={600}
            />
          </div>
        </div>
      </section>

      {/* <section className="min-h-[70vh] w-[100vw] overflow-clip bg-[#F5F5F5] pt-20 pb-10">
        <div className="w-full">
          <div className="text-2xl md:text-4xl lg:text-[50px] font-normal flex justify-center">
            <span>A House History&nbsp;</span>
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              affects its value.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 lg:px-40 py-20">
          <Value
            img={ValueImage}
            title="Discover the Insights Hidden in 
Your Property's History. Discover the Insights Hidden in 
Your Property's History"
          />
          <Value
            img={ValueImage}
            title="Discover the Insights Hidden in 
Your Property's History. Discover the Insights Hidden in 
Your Property's History"
          />
          <Value
            img={ValueImage}
            title="Discover the Insights Hidden in 
Your Property's History. Discover the Insights Hidden in 
Your Property's History"
          />
        </div>
      </section> */}

      <section className="min-h-[70vh] w-[100vw] overflow-clip py-20">
        <div className="w-full mt-6 mb-16">
          <div className="text-2xl md:text-4xl lg:text-[50px] font-normal flex justify-center">
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              PropFax Insights
            </span>
          </div>
        </div>

        <div className="px-8 lg:px-28 py-10 grid grid-cols-1 g  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Home Reports"
            content="Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Home Reports"
            content="Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Home Reports"
            content="Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Home Reports"
            content="Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Home Reports"
            content="Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Home Reports"
            content="Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Home Reports"
            content="Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in."
          />
          <Points
            icon={
              <House
                size={80}
                className="bg-white text-[#0874DE] p-4 rounded-[44px]"
              />
            }
            title="Home Reports"
            content="Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in. Get a detailed report on the property you are interested in."
          />
        </div>

        <div className="w-full mt-10">
          <div className="text-2xl md:text-4xl lg:text-[50px] font-normal flex justify-center">
            <span>Trusted by&nbsp;</span>
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              Thousands
            </span>
          </div>
        </div>

        <div className="">
          <ul className="hidden md:flex flex-wrap items-center justify-evenly mt-6">
            <li className="">
              <Image
                src="/logo/zillow.svg"
                alt="image"
                className=""
                width={150}
                height={150}
              />
            </li>
            <li>
              <Image
                src="/logo/trulia.png"
                alt="image"
                className=""
                width={200}
                height={200}
              />
            </li>
            <li>
              <Image
                src="/logo/redfin.png"
                alt="image"
                className=""
                width={160}
                height={160}
              />
            </li>
            <li>
              <Image
                src="/logo/realtor.svg"
                alt="image"
                className=""
                width={210}
                height={210}
              />
            </li>
            <li>
              <Image
                src="/logo/apartments.png"
                alt="image"
                className=""
                width={275}
                height={275}
              />
            </li>
          </ul>
          <BrandsCarousal />
        </div>
      </section>

      <section className="min-h-[70vh] w-[100vw] overflow-clip bg-[#F5F5F5] pt-32 pb-20">
        <div className="w-full">
          <div className="text-2xl md:text-4xl lg:text-[50px] font-normal flex justify-center">
            <span>What customers&nbsp;</span>
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              are saying?
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-20">
          <Review
            img="/reviews/review2.jpg"
            content="I recently bought a house through and the experience  was fantastic. The property was exactly as described, and the agent was incredibly knowledgeable and responsive The neighborhood is perfect for my family."
            name="Genene Bell"
            profession="House Property Customer"
          />
          <Review
            img="/reviews/review1.png"
            content="I recently bought a house through and the experience  was fantastic. The property was exactly as described, and the agent was incredibly knowledgeable and responsive The neighborhood is perfect for my family."
            name="Genene Bell"
            profession="House Property Customer"
          />
          <Review
            img="/reviews/review3.png"
            content="I recently bought a house through and the experience  was fantastic. The property was exactly as described, and the agent was incredibly knowledgeable and responsive The neighborhood is perfect for my family."
            name="Genene Bell"
            profession="House Property Customer"
          />
        </div>
      </section>

      <section className="xl:min-h-[70vh] 2xl:min-h-[40vh] w-[100vw] overflow-clip mt-20 md:mt-40 mb-10">
        <div className="w-full mb-10">
          <div className="text-2xl md:text-4xl lg:text-[50px] font-normal flex justify-center">
            <span>Frequently&nbsp;</span>
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              Asked Questions
            </span>
          </div>
        </div>
        <div className="px-8 md:px-14 lg:px-44 py-10">
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            <AccordionItem
              value="item-1"
              className={`border border-gray-200 px-6 py-2 rounded-2xl data-[state=open]:bg-gray-100`}
            >
              <AccordionTrigger className="text-xl tracking-wide font-semibold p-4 rounded-2xl">
                Why should I get a home report?
              </AccordionTrigger>
              <AccordionContent className="p-4 tracking-wide text-gray-500 text-[16px]">
                A PropFax report provides detailed information about the
                property history, helping you make informed decisions before
                buying or selling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className={`border border-gray-200 px-6 py-2 rounded-2xl data-[state=open]:bg-gray-100`}
            >
              <AccordionTrigger className="text-xl tracking-wide font-semibold p-4 rounded-2xl">
                What data will I see?
              </AccordionTrigger>
              <AccordionContent className="p-4 tracking-wide text-gray-500 text-[16px]">
                PropFax reports include ownership history, sales history,
                maintence records, tax records, crime reports, damage reports
                and more!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className={`border border-gray-200  px-6 py-2 rounded-2xl data-[state=open]:bg-gray-100`}
            >
              <AccordionTrigger className="text-xl tracking-wide font-semibold p-4 rounded-2xl">
                Does this replace a home inspection?{" "}
              </AccordionTrigger>
              <AccordionContent className="p-4 tracking-wide text-gray-500 text-[16px]">
                PropFax complements a home inspection by offering property
                history, but a professional inspection is still essential for
                assessing current conditions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="w-[100vw] overflow-clip">
        <div className="flex items-center justify-center min-h-[75vh] bg-blue-grid bg-no-repeat bg-cover md:px-20 py-20">
          <div className="flex flex-col items-center gap-10 md:gap-20 xl:flex-row">
            <Image
              src={FooterHero}
              alt="Modern House"
              className="w-full ml-4 sm:ml-0 max-w-md md:max-w-xl 2xl:max-w-3xl"
            />
            <div className="flex flex-col justify-center items-center xl:items-start xl:mt-0 xl:ml-8 xl:text-left">
              <div className="text-2xl md:text-4xl lg:text-[48px] font-normal flex text-white">
                <span>Selling a&nbsp;</span>
                <span
                  className="font-bold flex flex-col"
                  style={{
                    borderBottom: "6px solid transparent",
                    borderImage:
                      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)) 1",
                  }}
                >
                  Used Property
                </span>
              </div>
              <p className="mt-4 text-gray-100 text-center xl:text-left xl:pr-24 px-4 xl:px-0 text-[20px]">
                Build trust with potential buyers by providing them with a
                Property History Report today.
              </p>
              <Button
                size={"lg"}
                className="mt-8 bg-black text-white px-10 py-4 rounded-full flex items-center"
                onClick={()=>router.push("/contact")}
              >
                CONTACT US&nbsp;
                <Phone
                  width={20}
                  color="#0874DE"
                  className="border-none ml-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};


export default Reports;
