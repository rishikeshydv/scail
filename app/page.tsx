import Image from "next/image";
import HomeBackgroundGrid from "@/assets/images/home-bg-grid.svg";
import { FilterBar } from "@/components/filters";
import { Navbar } from "@/components/navigation";
import { Button } from "antd";
import { Check, MoveRight } from "lucide-react";
import { HistoryReportCard, PropertyCard } from "@/components/card";
import HeroProject60Image from "@/assets/images/hero-60-project.png";
import HeroHomeImage from "@/assets/images/hero-house.png";

export default function Home() {
  return (
    <main>
      <section className="h-[110vh] w-[100vw] overflow-hidden bg-black-grid">
        <Navbar />
        <div className="text-white mx-20 flex pt-14">
          <div className="flex-[0.5] flex flex-col">
            <div className="font-semibold text-[180px] mt-[-50px] flex justify-end">
              <span className="text-[#0874DE]">+</span>
              <span>Home</span>
            </div>
            <div className="font-semibold text-[180px] mt-[-130px] flex justify-end">
              <span>Upgrade</span>
            </div>
            <div className="font-normal text-[25px] text-[#808080]">
              Discover this charming 3-bedroom, 2-bathroom home located in the
              serene Willow Creek neighborhood. Features include a spacious open
              plan living area.
            </div>
            <div className="flex gap-x-4 py-10">
              <Button
                type="primary"
                shape="round"
                size="large"
                icon={<MoveRight width={15} />}
                iconPosition="end"
              >
                HOME REPORT
              </Button>
              <Button
                shape="round"
                size="large"
                icon={<MoveRight width={15} />}
                iconPosition="end"
                className="bg-[#262626] border-none text-white"
              >
                BUY A HOME
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
            <span>Property for &nbsp;</span>
            <span className="font-bold flex flex-col">
              Sell and Rent
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
              VIEW ALL PROPERTY
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
          <Image src={HeroProject60Image} alt="hero image" height={700} />
        </div>

        <div className="flex-[0.5] px-4">
          <div className="text-[#0874DE] font-medium text-[30px]">
            Online property marketplace
          </div>
          <div className="text-[80px]">
            <span className="font-normal">We help you find </span>
            <span className="font-bold flex flex-col mt-[-30px]">
              your new place.
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-36px",
                }}
              ></span>
            </span>
          </div>

          <div className="font-normal text-[25px] text-[#808080] py-10">
            Online property marketplace to buy, sell, and rent residential and
            commercial properties. Used by millions of renters to find property.
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <div className="h-[50px] w-[50px] rounded-[50%] bg-[#E7E5E5] flex items-center justify-center font-medium">
                <Check size={24} color="#0874DE" />
              </div>
              <div className="text-[25px]">
                More than 10 years of experience.
              </div>
            </div>
            <div className="flex items-center gap-x-3 py-4">
              <div className="h-[50px] w-[50px] rounded-[50%] bg-[#E7E5E5] flex items-center justify-center font-medium">
                <Check size={24} color="#0874DE" />
              </div>
              <div className="text-[25px]">
                10,000+ people trusting our agency.
              </div>
            </div>
          </div>

          <div className="pt-5">
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<MoveRight width={15} />}
              iconPosition="end"
            >
              ABOUT THE COMPANY
            </Button>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh] w-[100vw] overflow-hidden pt-28 pb-32">
        <div className="flex justify-between mx-20 items-center">
          <div className="text-[50px] font-normal flex">
            <span>A House &nbsp;</span>
            <span className="font-bold flex flex-col">
              History Reports
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
              VIEW ALL PROPERTY
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-5 py-28 px-20">
          <HistoryReportCard
            position={1}
            title="Find your perfect place."
            description="Browse through a wide range of 
properties to find your match"
          />
          <HistoryReportCard
            position={2}
            title="Schedule survey"
            description="Browse through a wide range of 
properties to find your match"
          />
          <HistoryReportCard
            position={3}
            title="Make an offer"
            description="Browse through a wide range of 
properties to find your match"
          />
          <HistoryReportCard
            position={4}
            title="Make your payment"
            description="Browse through a wide range of 
properties to find your match"
          />
        </div>
      </section>
    </main>
  );
}
