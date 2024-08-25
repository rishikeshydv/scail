"use client";
import Image from "next/image";
import { Navbar } from "@/components/navigation";
import ReportsHeroImage from "@/assets/images/reports-hero-image.png";
import { Button } from "antd";
import { House, MoveRight } from "lucide-react";
import type { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { ReportTable } from "@/components/reports";

import HomeImage from "@/assets/images/hero-house.png";

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

        <div className="text-white mx-32  flex gap-x-10">
          <div className="flex-[0.5] flex flex-col gap-y-10 justify-center">
            <div className="text-[50px] font-normal flex">
              <span>What's Your  &nbsp;</span>
              <span className="font-bold flex flex-col">
              Homes Worth?
                <span
                  style={{
                    borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                    marginTop: "-22px",
                  }}
                ></span>
              </span>
            </div>
            <div className="text-[#808080] text-[20px] font-normal">
            Get the Homes History-Based Value to find out what your homes 
            is really worth.
            </div>
            <div className="flex gap-x-4 items-center">
              <input
                placeholder="Find Value.."
                className="rounded-[50px] bg-[#262626] border-none outline-none w-[70%] px-[18px] py-[20px]"
              />
              <Button
                type="primary"
                shape="round"
                icon={<MoveRight width={20} />}
                className="px-[18px] py-[20px] h-[60px] w-[30%] font-semibold text-[18px]"
                iconPosition="end"
              >
                HOMES VALUE
              </Button>
            </div>
          </div>
          <div className="flex-[0.5] flex justify-center items-center">
            <Image
              src={ReportsHeroImage}
              alt="reports hero home image"
              className="h-[80%] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="min-h-[70vh] w-full bg-[#F5F5F5] py-20">
        <div className="w-full">
          <div className="text-[50px] font-normal flex justify-center">
            <span>A House history &nbsp;</span>
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

        <div className="grid grid-cols-3 gap-5 px-14 py-20">
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
        </div>
      </section>
      <section className="min-h-[70vh] w-full py-20">
        <div className="w-full">
          <div className="text-[50px] font-normal flex justify-center">
            <span>Let's &nbsp;</span>
            <span className="font-bold flex flex-col">
              Compare
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-22px",
                }}
              ></span>
            </span>
          </div>
        </div>

        <div className="px-28 py-10">
          <ReportTable />
        </div>
      </section>

      <section className="min-h-[70vh] w-full bg-[#F5F5F5] py-20">
        <div className="w-full">
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
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            items={getItems(panelStyle)}
            className="bg-none border border-red-500"
            expandIconPosition="end"
          />
        </div>
      </section>
    </main>
  );
};

export const PropertyCardBorderless = () => {
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


export default HomeCenterPage;
