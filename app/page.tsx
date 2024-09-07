import Image from "next/image";
import { FilterBar } from "@/components/filters";
import { Navbar } from "@/components/navigation";
import { Button } from "antd";
import { Check, MoveRight, FileText, MapPinHouse, Info, AlignRight } from "lucide-react";
import { HistoryReportCard, PropertyCard } from "@/components/card";
import HeroProject100Image from "@/assets/images/hero-100-project.png";
import HeroHomeImage from "@/assets/images/hero-house.png";

export default function Home() {
  return (
    <main>
      <section className="h-[110vh] w-[100vw] overflow-hidden bg-black-grid">
        <Navbar />
        <div className="text-white mx-20 flex pt-14">
          <div className="flex-[0.5] flex flex-col">
            <div className="font-semibold text-[140px] mt-[-50px] flex justify-end">
              <span className="text-[#0874DE]">+</span>
              <span>&nbsp;Property</span>
            </div>
            <div className="font-semibold text-[140px] mt-[-70px] flex justify-end">
              <span>Reports</span>
            </div>
            <div className="font-normal text-[32px] text-[#808080]">
              Discover homes for sale in your city and get detailed property
              reports
            </div>
            <div className="flex gap-x-4 py-10">
              <Button
                type="primary"
                shape="round"
                size="large"
                icon={<FileText width={20} />}
                iconPosition="end"
                className="p-6 text-lg"
              >
                Home Report
              </Button>
              <Button
                shape="round"
                size="large"
                icon={<MapPinHouse width={20} />}
                iconPosition="end"
                className="bg-[#262626] border-none text-white p-6 text-lg"
              >
                Buy a Home
              </Button>
            </div>
          </div>

        <div className="flex-[0.5]">
            <Image
              src={HeroHomeImage}
              alt="Hero home image"
              className="h-[90%] object-contain"
            />
          </div>
        </div>
      </section>
      <FilterBar className="mx-20 mt-[-100px]" />
      <section className="min-h-[100vh] w-[100vw] overflow-hidden pt-28 pb-32">
        <div className="flex justify-between mx-20 items-center">
          <div className="text-[50px] font-normal flex">
            <span>Properties for &nbsp;</span>
            <span className="font-bold flex flex-col">
              Sell & Rent
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-22px",
                }}
              ></span>
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
        <div className="flex gap-x-4 pt-24 mx-5">
          <PropertyCard
            image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Modern villa in Oregon"
            adddress="1261 Sampson street senver"
            price={800000}
            isNew={false}
          />
          <PropertyCard
            image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Modern villa in Oregon"
            adddress="1261 Sampson street senver"
            price={800000}
            isNew={true}
          />
          <PropertyCard
            image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Modern villa in Oregon"
            adddress="1261 Sampson street senver"
            price={800000}
            isNew={true}
          />
          <PropertyCard
            image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Modern villa in Oregon"
            adddress="1261 Sampson street senver"
            price={800000}
            isNew={true}
          />
        </div>
      </section>
      <section className="min-h-[80vh] w-[100vw] overflow-hidden pt-28 pb-32 bg-[#F5F5F5] flex px-52 gap-x-14">
        <div className="flex-[0.5]">
          <Image src={HeroProject100Image} alt="hero image" height={700} />
        </div>

        <div className="flex-[0.5] px-4">
          <div className="text-[#0874DE] font-medium text-[30px]">
            Online Property Marketplace
          </div>
          <div className="text-[70px]">
            <span className="font-normal">We help you find </span>
            <span className="font-bold flex flex-col mt-[-30px]">
              your new home.
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-27px",
                }}
              ></span>
            </span>
          </div>

          <div className="font-normal text-[25px] text-[#808080] py-10">
            Online property marketplace to buy, sell, and rent residential and
            commercial properties.
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <div className="h-[50px] w-[50px] rounded-[50%] bg-[#E7E5E5] flex items-center justify-center font-medium">
                <Check size={24} color="#0874DE" />
              </div>
              <div className="text-[25px]">Detailed property reports</div>
            </div>
            <div className="flex items-center gap-x-3 py-4">
              <div className="h-[50px] w-[50px] rounded-[50%] bg-[#E7E5E5] flex items-center justify-center font-medium">
                <Check size={24} color="#0874DE" />
              </div>
              <div className="text-[25px]">
                Discover the best deals in your city
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
            >
              About Us
            </Button>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh] w-[100vw] overflow-hidden pt-28 pb-32">
        <div className="flex justify-between mx-20 items-center">
          <div className="text-[50px] font-normal flex">
            <span>Insightful &nbsp;</span>
            <span className="font-bold flex flex-col">
             Property Reports
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-22px",
                }}
              ></span>
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

        <div className="grid grid-cols-2 w-full gap-5 py-28 px-20">
          <HistoryReportCard
            position={1}
            title="Find the perfect place."
            description="Browse through a wide range of 
properties to find your match"
          />
          <HistoryReportCard
            position={2}
            title="Enter the address"
            description="Enter the address in the Reports page"
          />
          <HistoryReportCard
            position={3}
            title="Make your payment"
            description="Select payment method and complete your payment"
          />
          <HistoryReportCard
            position={4}
            title="Your Prop Fax Report!"
            description="Get access to your detailed Prop fax report"
          />
        </div>
      </section>
    </main>
  );
}
