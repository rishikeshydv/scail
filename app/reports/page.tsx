"use client";
import Image from "next/image";
import { Navbar } from "@/components/navigation";
import ReportsHeroImage from "@/public/images/reports.png";
import { Button } from "antd";
import { House, FileText, Phone } from "lucide-react";
import { theme } from "antd";
import HomeImage from "@/assets/images/hero-house.png";
import Value from "@/components/reports/Value";
import Points from "@/components/reports/Points";
import Review from "@/components/reports/Review";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Reports = () => {
  const { token } = theme.useToken();

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
      <section className="h-[125vh] xl:h-[80vh] w-[100vw] overflow-hidden bg-black-grid">
        <Navbar />

        <div className="text-white mx-32  flex flex-col xl:flex-row gap-x-10 ">
          <div className="flex-[0.5] flex flex-col gap-y-6 justify-center">
            <div className="text-6xl xl:text-[50px] font-normal flex xl:flex-row flex-col">
              <span>Get Your&nbsp;</span>
              <span className="flex flex-col font-bold mt-[-8px] w-fit"
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                }}>
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
                <Button
                  type="primary"
                  shape="round"
                  icon={<FileText width={20} />}
                  className="px-[18px] py-[20px] h-[60px] w-full xl:w-[30%] text-[18px]"
                  iconPosition="end"
                >
                  Get Reports
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-[0.5] flex justify-center items-center">
            <Image
              src={ReportsHeroImage}
              alt="reports hero home image"
              className="xl:ml-36 mt-24"
              style={{ width: "800px", height: "450px" }}
            />
          </div>
        </div>
      </section>

      <section className="min-h-[70vh] w-full bg-[#F5F5F5] pt-20 pb-10">
        <div className="w-full">
          <div className="text-[50px] font-normal flex justify-center">
            <span>A House History&nbsp;</span>
            <span className="font-bold flex flex-col">
              affects its value.
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-22px",
                }}
              ></span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 px-40 py-20">
          <Value
            img="/images/value.png"
            title="Discover the Insights Hidden in 
Your Property's History. Discover the Insights Hidden in 
Your Property's History"
          />
          <Value
            img="/images/value.png"
            title="Discover the Insights Hidden in 
Your Property's History. Discover the Insights Hidden in 
Your Property's History"
          />
          <Value
            img="/images/value.png"
            title="Discover the Insights Hidden in 
Your Property's History. Discover the Insights Hidden in 
Your Property's History"
          />
        </div>
      </section>

      <section className="min-h-[70vh] w-full py-20">
        <div className="w-full mt-6 mb-16">
          <div className="text-[50px] font-normal flex justify-center">
            <span className="font-bold flex flex-col">
              PropFax Insights
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-18px",
                }}
              ></span>
            </span>
          </div>
        </div>

        <div className="px-28 py-10 grid grid-cols-4 gap-6">
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
          <div className="text-[50px] font-normal flex justify-center">
            <span>Trusted by&nbsp;</span>
            <span className="font-bold flex flex-col">
              Thousands
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-18px",
                }}
              ></span>
            </span>
          </div>
        </div>

        <div className="">
          <ul className="flex items-center justify-center gap-10 mt-6">
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
        </div>
      </section>

      <section className="min-h-[70vh] w-full bg-[#F5F5F5] pt-32 pb-20">
        <div className="w-full">
          <div className="text-[50px] font-normal flex justify-center">
            <span>What customers&nbsp;</span>
            <span className="font-bold flex flex-col">
              are saying?
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-18px",
                }}
              ></span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 p-20">
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

      <section className="min-h-[70vh] w-full mt-40 mb-10">
        <div className="w-full mb-10">
          <div className="text-[50px] font-normal flex justify-center">
            <span>Frequently&nbsp;</span>
            <span className="font-bold flex flex-col">
              Asked Questions
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-22px",
                }}
              ></span>
            </span>
          </div>
        </div>
        <div className="px-44 py-10">
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            <AccordionItem
              value="item-1"
              className="border border-gray-200 bg-gray-100 px-6 py-2 rounded-2xl"
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
              className="border border-gray-200 bg-gray-100 px-6 py-2 rounded-2xl"
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
              className="border border-gray-200 bg-gray-100 px-6 py-2 rounded-2xl"
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

      <section className="h-[90vh] w-[100vw] overflow-hidden bg-blue-grid px-10">
        <div className="flex mt-40">
          <div className="">
            <Image
              src="/images/house1.png"
              alt="house"
              className=""
              height={400}
              width={900}
            />
          </div>
          <div className="mt-20 ml-10">
          <div className="w-full flex flex-col">
            <div className="text-[57px] font-normal flex justify-left text-white tracking-wide">
              <span>Selling a&nbsp;</span>
              <span className="font-bold flex flex-col">
                Used Property
                <span
                  style={{
                    borderBottom: "6px solid transparent",
                    borderImage: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)) 1",
                    marginTop: "-18px",
                  }}
                ></span>
              </span>
            </div>
            <p className="text-gray-100 text-left text-2xl mt-6 mb-12">
            Build trust with potential buyers by providing them with a Property History Report today.
            </p>
          </div>
          <Button className="bg-black text-white border border-black text-[18px] tracking-wide rounded-[20px] py-7 px-14"  size="large" iconPosition="end" icon={<Phone width={24} color="#0874DE" className="border-none ml-2"/> }>CONTACT US</Button>

          </div>

        </div>
      </section>
    </main>
  );
};

const PropertyCardBorderless = () => {
  return (
    <div className=" max-w-[400px] flex flex-col gap-y-4 bg-[#F5F5F5] p-5">
      <div className="flex flex-[0.6] ">
        <div className="bg-white rounded-[30px] h-[250px] w-full">
          <Image src={HomeImage} alt="image" className="h-[120%] mt-[-50px]" />
        </div>
      </div>

      <div className="flex-[0.4] flex flex-row items-center gap-x-2">
        <div className="h-[60px] w-[60px] bg-white border border-[#00000026] rounded-[50%] flex items-center justify-center">
          <House color="#0874DE" size={30} />
        </div>
        <div className="font-semibold text-[30px]">Homes First Owner</div>
      </div>
    </div>
  );
};

export default Reports;
