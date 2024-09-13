"use client";
import Image from "next/image";
import { Navbar } from "@/components/navigation";
import ReportsHeroImage from "@/assets/images/reports-hero-image.png";
import { House, MoveRight } from "lucide-react";
import type { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { ReportTable } from "@/components/reports";
import { FaCaretRight } from "react-icons/fa";
import HomeImage from "@/public/images/history1.png";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "4",
    label: "This is panel header 1",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "5",
    label: "This is panel header 2",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "6",
    label: "This is panel header 3",
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const HomeCenterPage = () => {
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
      <section className="h-[80vh] w-[100vw] overflow-hidden bg-black-grid">
        <Navbar />
        <div className="text-white mx-24  flex gap-x-10">
          <div className="flex-[0.55] flex flex-col gap-y-6 justify-center">
            <div className="text-[50px] font-normal flex">
              <span>What&apos;s Your&nbsp;</span>
              <span className="font-bold flex flex-col">
              Home Worth?
                <span
                  style={{
                    borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                    marginTop: "-22px",
                  }}
                ></span>
              </span>
            </div>
            <p className="text-[#808080] text-[20px] font-normal text-center -20">
            Discover Your Home&apos;s History-Based Value and Uncover What It&apos;s Truly Worth. Make smarter decisions with a comprehensive report on past ownership, renovations, and neighborhood trends.
            </p>
            <div className="flex gap-x-4 items-center">
              <input
                placeholder="Find Value..."
                className="rounded-[50px] bg-[#262626] border-none outline-none w-[70%] px-[26px] py-[20px] text-lg"
              />
              <Button
                className="px-[18px] py-[20px] h-[60px] w-[30%] font-medium text-[18px] bg-[#0874DE] rounded-3xl">
                  GET VALUE&nbsp;
                <FaCaretRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
          <div className="flex-[0.68] flex justify-center items-center">
            <Image
              src={ReportsHeroImage}
              alt="reports hero home image"
              className="h-[95%] object-contain ml-10"
            />
          </div>
        </div>
      </section>

      <section className="min-h-[70vh] w-full bg-[#F5F5F5] py-20">
        <div className="w-full py-10">
          <div className="text-[50px] font-normal flex justify-center">
            <span>A House history&nbsp;</span>
            <span className="font-bold flex flex-col">
              affects its value.
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-20px",
                }}
              ></span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 px-40 pt-20">
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
        </div>
        <div className="flex justify-center items-center pt-16 pb-10">
      <div className="flex space-x-2 p-2 bg-gray-200 rounded-full">
        <div className="w-4 h-4 border-2 border-black rounded-full" />
        <div className="w-4 h-4 bg-[#0874DE] rounded-full" />
        <div className="w-4 h-4 bg-[#0874DE] rounded-full" />
        <div className="w-4 h-4 bg-[#0874DE] rounded-full" />
      </div>
    </div>
      </section>

      <section className="min-h-[70vh] w-full py-20">
        <div className="w-full">
          <div className="text-[50px] font-normal flex justify-center">
            <span>Let&apos;s &nbsp;</span>
            <span className="font-bold flex flex-col">
              Compare Properties!
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-18px",
                }}
              ></span>
            </span>
          </div>
        </div>

        <div className="px-28 py-10">
        <Table>
  <TableHeader className="bg-[#0874DE]">
    <TableRow className="">
      <TableHead className="w-[600px] text-white border text-center text-xl py-4" style={{ borderRadius: "20px 0 0 0"}}>Features</TableHead>
      <TableHead className="text-white border text-center text-xl">Home Value</TableHead>
      <TableHead className="text-white border text-center text-xl" style={{ borderRadius: "0 20px 0 0"}}>Book Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="text-xl bg-gray-100">
      <TableCell className="font-medium px-14 border">Feature 1</TableCell>
      <TableCell className="border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
      <TableCell className="border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
    </TableRow>
    <TableRow className="text-xl">
      <TableCell className="font-medium px-14 border">Feature 1</TableCell>
      <TableCell className="text-center border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
      <TableCell className="text-center border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
    </TableRow>
    <TableRow className="text-xl bg-gray-100">
      <TableCell className="font-medium px-14 border">Feature 1</TableCell>
      <TableCell className="border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
      <TableCell className="border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
    </TableRow>
    <TableRow className="text-xl">
      <TableCell className="font-medium px-14 border">Feature 1</TableCell>
      <TableCell className="text-center border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
      <TableCell className="text-center border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
    </TableRow>
    <TableRow className="text-xl bg-gray-100">
      <TableCell className="font-medium px-14 border">Feature 1</TableCell>
      <TableCell className="border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
      <TableCell className="border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
    </TableRow>
    <TableRow className="text-xl">
      <TableCell className="font-medium px-14 border" style={{ borderRadius: "0 0 20px 0"}}>Feature 1</TableCell>
      <TableCell className="text-center border"><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
      <TableCell className="text-center border" style={{ borderRadius: "0 0 0 20px"}}><IoShieldCheckmarkSharp fill="#0874DE" className="w-20 h-8"/></TableCell>
    </TableRow>
  </TableBody>
</Table>

        </div>
      </section>

      <section className="min-h-[70vh] w-full pt-32 pb-24 bg-[#F5F5F5]">
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
              className="border border-gray-200 bg-gray-200 px-6 py-2 rounded-2xl"
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
              className="border border-gray-200 bg-gray-200 px-6 py-2 rounded-2xl"
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
              className="border border-gray-200 bg-gray-200 px-6 py-2 rounded-2xl"
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
    </main>
  );
};

const PropertyCardBorderless = () => {
  return (
    <div className=" max-w-[800px] flex flex-col gap-y-4 bg-[#F5F5F5] p-5">
      <div className="flex flex-[0.6] ">
        <div className="bg-white rounded-[30px] h-[250px] w-full">
          <Image src={HomeImage} alt="image" className="h-[120%] mt-[-50px]" />
        </div>
      </div>

      <div className="flex-[0.4] flex flex-row items-center gap-x-2">
        <div className="font-semibold text-[24px] text-center">Discover the Insights Hidden in 
Your Property&apos;s History</div>
      </div>
    </div>
  );
};


export default HomeCenterPage;
