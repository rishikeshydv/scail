"use client";
import Image from "next/image";
import { Navbar } from "@/components/navigation";
import PaymentHeroImage from "@/assets/images/payment-hero-house.png";
import NewHomeBadge from "@/assets/images/new-home-badge.png";
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
      <section className="h-[80vh] w-[100vw] overflow-hidden bg-black-grid">
        <Navbar />

        <div className="text-white mx-32  flex pt-20">
          <div className="flex-[0.5] flex flex-col gap-y-10">
            <div className="text-[50px] font-normal flex">
              <span>Order &nbsp;</span>
              <span className="font-bold flex flex-col">
                Homes Reports
                <span
                  style={{
                    borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                    marginTop: "-22px",
                  }}
                ></span>
              </span>
            </div>

            <div className="w-full flex">
              <Image src={NewHomeBadge} alt="badge" />
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-[40px] text-[#0874DE]">
                A Homes history affects its value.
              </span>
              <span className="font-normal text-[24px]">
                What's a Homes worth? Find out with every report!
              </span>
            </div>
          </div>
          <div className="flex-[0.5]">
            <Image src={PaymentHeroImage} alt="payment hero home image" />
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] flex">
        <div className="flex-[0.25] min-h-[100vh] border-r border-[#00000026] flex flex-col px-10 py-10 gap-y-5">
          <ReportInfoCard
            icon={PieChartIcon}
            title="Crime Data"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        recusandae officiis fuga unde dolor quis minus porro iusto explicabo
        nisi."
          />
          <ReportInfoCard
            icon={ClockIcon}
            title="Renovation History"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        recusandae officiis fuga unde dolor quis minus porro iusto explicabo
        nisi."
          />
          <ReportInfoCard
            icon={HouseIcon}
            title="Type Of Type"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        recusandae officiis fuga unde dolor quis minus porro iusto explicabo
        nisi."
          />
        </div>
        <div className="flex-[0.75] h-full py-5">
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
            <div className="font-medium text-[24px] text-[#E20000]">
              <sup>*</sup>Required Fields
            </div>
          </div>

          <div className="border-b border-[#00000026] px-3 py-5 w-full">
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
      <div className="h-[90px] w-[90px] rounded-[50%] bg-white border border-[#00000026] flex items-center justify-center">
        <Image src={icon} alt="icon" height={48} width={48} />
      </div>

      <div className="font-semibold text-[30px]">{title}</div>

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
    <Radio.Group onChange={onChange} value={value} className="flex">
      <Radio value={1} className="flex flex-col gap-y-4">
        <div className="h-[150px] w-[350px] rounded-[30px] bg-[#f5f5f5] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[24px] font-bold">1 Homes Report</div>
          <div className="font-bold text-[30px] text-[#0874DE]">
            <div>{USDollar.format(2500000)}</div>
          </div>
          <div className="absolute w-[140px] h-[30px] bg-[#A80003] top-[15px] left-[-20px] text-md flex items-center justify-center text-white rotate-[-33.5deg]">
            STANDARD
          </div>
        </div>
      </Radio>
      <Radio value={2} className="flex flex-col gap-y-4">
        <div className="h-[150px] w-[350px] rounded-[30px] bg-[#f5f5f5] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[24px] font-bold">2 Homes Report</div>
          <div className="font-bold text-[30px] text-[#0874DE]">
            <div>{USDollar.format(4800000)}</div>
          </div>
          <div className="absolute w-[140px] h-[30px] bg-[#0874DE] top-[15px] left-[-20px] text-md flex items-center justify-center text-white rotate-[-33.5deg]">
            GOOD DEAL
          </div>
        </div>
      </Radio>
      <Radio value={3} className="flex flex-col gap-y-4">
        <div className="h-[150px] w-[350px] rounded-[30px] bg-[#f5f5f5] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[24px] font-bold">3 Homes Report</div>
          <div className="font-bold text-[30px] text-[#0874DE]">
            <div>{USDollar.format(6500000)}</div>
          </div>
          <div className="absolute w-[140px] h-[30px] bg-[#2E7D32] top-[15px] left-[-20px] text-md flex items-center justify-center text-white rotate-[-33.5deg]">
            BEST DEAL
          </div>
        </div>
      </Radio>
    </Radio.Group>
  );
};

export default PaymentPage;
