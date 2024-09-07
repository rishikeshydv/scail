import Image from "next/image";
import { FilterBar } from "@/components/filters";
import { Navbar } from "@/components/navigation";

import {
  HistoryReportCard,
  PropertyCardBorderless,
} from "@/components/card";
import PreOwnHeroImage from "@/assets/images/pre-own-hero.png";

const PreOwn = () => {
  return (
    <main>
      <section className="h-[80vh] w-[100vw] bg-black-grid z-10">
        <Navbar />
        <div className="text-white flex pt-14 relative">
          <div className="flex-[0.4] flex flex-col gap-y-5 pl-36">
            <div className="font-normal text-[20px]">Pre Homes for Sale</div>
            <div className="flex flex-col text-[80px]">
              <span className="font-normal">Buy with</span>
              <span className="flex flex-col font-bold mt-[-30px]">
                confidence.
                <span
                  style={{
                    borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                    marginTop: "-35px",
                    width: "70%",
                  }}
                ></span>
              </span>
            </div>
            <div className="font-normal text-[#808080] text-[20px] w-[70%] pt-5">
              Everything you need to browse nearby Homes, all in one place. Used
              listings include a free Homes Report!
            </div>
          </div>
          <div className="flex-[0.6] h-[78vh] w-full z-10">
            <Image
              src={PreOwnHeroImage}
              alt="Hero home image"
              className="h-[100%] object-contain z-10"
            />
          </div>

          <div className="z-[99999] absolute w-full bottom-5">
            <FilterBar className="z-20 mx-20 text-black" />
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] w-[100vw] overflow-hidden pt-28 pb-32 bg-[#F5F5F5]">
        <div className="flex mx-20 justify-center text-[50px] font-normal py-20">
          <span>Discover &nbsp;</span>
          <span className="font-bold flex flex-col">
            by Home Type
            <span
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                marginTop: "-22px",
              }}
            ></span>
          </span>
        </div>

        <div className="flex flex-wrap gap-5 mx-20 justify-center py-10">
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
          <PropertyCardBorderless />
        </div>
      </section>

      <section className="min-h-[100vh] w-[100vw] overflow-hidden pt-20 pb-32">
        <div className="flex mx-20 justify-center text-[50px] font-normal py-20">
          <span>Every Used Homes comes &nbsp;</span>
          <span className="font-bold flex flex-col">
            with a Free Homes Report
            <span
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                marginTop: "-22px",
              }}
            ></span>
          </span>
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
};

export default PreOwn;
