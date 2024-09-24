"use client";
import Image from "next/image";
import { Navbar } from "@/components/navigation";
import PaymentHeroImage from "@/assets/images/3d-laptop.png";
import PieChartIcon from "@/assets/icons/pie-chart-line 1.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import HouseIcon from "@/assets/icons/house.svg";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { USDollar } from "@/lib/price";
import { CheckoutForm } from "@/components/payment";

interface ReportInfoCardProps {
  icon: any;
  title: string;
  description: string;
}

const PaymentPage = () => {
  return (
    <main>
      <section className="h-[70vh] w-[100vw] overflow-hidden bg-black-grid-with-gradient">
        <Navbar />

        <div className="text-white mx-14 lg:mx-32 flex flex-col md:flex-row">
          <div className="flex-[0.5] flex flex-col gap-y-6 mt-20  justify-center">
            <div className="text-2xl md:text-4xl lg:text-[50px]  font-normal flex items-center md:items-start flex-col gap-y-3">
              <span>Order&nbsp;</span>
              <span
                className="font-bold flex flex-col w-fit"
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                }}
              >
                Homes Reports !
              </span>
            </div>

            {/* <div className="w-full flex">
              <Image src={NewHomeBadge} alt="badge" />
            </div> */}

            <div className="flex flex-col text-center md:text-left">
              <span className="font-semibold text-xl md:text-3xl lg:text-[40px] text-[#0874DE]">
                A Homes history affects its value.
              </span>
              <span className="font-normal text-lg md:text-2xl lg:text-[24px]">
                What&apos;s a Homes worth? Find out with every report!
              </span>
            </div>
          </div>
          <div className="flex-[0.56] mt-8 items-center justify-center">
            <Image
              src={PaymentHeroImage}
              alt="payment hero home image"
              className="lg:ml-24  md:h-[430px]"
              width={600}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] flex flex-col lg:flex-row">
        <div className="lg:w-[50vh] min-h-[80vh] border-r border-[#00000026] flex flex-col px-10 mt-14 gap-y-4 pb-10">
          <ReportInfoCard
            icon={PieChartIcon}
            title="Fire Department"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        recusandae officiis fuga unde dolor quis minus porro iusto explicabo
        nisi."
          />
          <ReportInfoCard
            icon={ClockIcon}
            title="Property Records Database"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        recusandae officiis fuga unde dolor quis minus porro iusto explicabo
        nisi."
          />
          <ReportInfoCard
            icon={HouseIcon}
            title="Insurance Company"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        recusandae officiis fuga unde dolor quis minus porro iusto explicabo
        nisi."
          />
        </div>
        <div className="lg:w-[140vh] h-full pt-14">
          <div className="font-bold text-[24px] border-b border-[#00000026] px-3 pb-5">
            <span className="text-[#0874DE]">Step 1.</span> Select Your Package
          </div>

          <div className="font-bold text-[24px] border-b border-[#00000026] px-3 py-5">
            <ReportPlanList />
          </div>

          <div className="border-b border-[#00000026] px-3 py-5 flex items-center justify-between">
            <div className="font-bold text-[24px] ">
              <span className="text-[#0874DE]">Step 2.</span> Select Method Of
              Payment
            </div>
            <div className="font-medium text-[16px] text-[#E20000]">
              <sup>*</sup>Required Fields
            </div>
          </div>

          <div className=" px-3 py-5 w-full">
            <CheckoutForm />
          </div>
        </div>
      </section>
    </main>
  );
};

const ReportInfoCard = ({ icon, title, description }: ReportInfoCardProps) => {
  return (
    <div className="rounded-[40px] px-[30px] py-[20px] border border-[#0000000D] bg-[#F5F5F5] flex flex-col items-center gap-y-4">
      <div className="h-[80px] w-[80px] rounded-[50%] bg-white border border-[#00000026] flex items-center justify-center">
        <Image src={icon} alt="icon" height={40} width={40} />
      </div>

      <div className="font-semibold text-[26px] text-center">{title}</div>

      <div className="font-normal text-[18px] text-[#808080] text-center line-[21.6px]">
        {description}
      </div>
    </div>
  );
};

const ReportPlanList = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="flex flex-wrap">
      <Radio value={1} className="flex flex-col gap-y-4">
        <div className="h-[120px] w-[350px] rounded-[30px] bg-[#f5f5f5] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[20px] font-bold">1 Home Report</div>
          <div className="font-bold text-[28px] tracking-tight text-[#0874DE]">
            <div>{USDollar.format(2500000)}</div>
          </div>
          <div className="absolute w-[140px] h-[30px] bg-[#A80003] top-[15px] left-[-20px] text-xs flex items-center justify-center text-white rotate-[-33.5deg]">
            STANDARD
          </div>
        </div>
      </Radio>
      <Radio value={2} className="flex flex-col gap-y-4">
        <div className="h-[120px] w-[350px] rounded-[30px] bg-[#f5f5f5] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[20px] font-bold">2 Homes Report</div>
          <div className="font-bold text-[28px] tracking-tight text-[#0874DE]">
            <div>{USDollar.format(4800000)}</div>
          </div>
          <div className="absolute w-[140px] h-[30px] bg-[#0874DE] top-[15px] left-[-20px] text-xs flex items-center justify-center text-white rotate-[-33.5deg]">
            GOOD DEAL
          </div>
        </div>
      </Radio>
      <Radio value={3} className="flex flex-col gap-y-4">
        <div className="h-[120px] w-[350px] rounded-[30px] bg-[#f5f5f5] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[20px] font-bold">3 Homes Report</div>
          <div className="font-bold text-[28px] tracking-tight text-[#0874DE]">
            <div>{USDollar.format(6500000)}</div>
          </div>
          <div className="absolute w-[140px] h-[30px] bg-[#2E7D32] top-[15px] left-[-20px] text-xs flex items-center justify-center text-white rotate-[-33.5deg]">
            BEST DEAL
          </div>
        </div>
      </Radio>
    </Radio.Group>
  );
};

export default PaymentPage;
