"use client";
import React from "react";
import Image from "next/image";
import { FilterBar } from "@/components/filters";
import { Navbar } from "@/components/navigation";
import { MoveRight } from "lucide-react";
import PreOwnHeroImage from "@/public/images/4.png";
import Filters from "@/components/search/Filters";
import { FaAlignRight } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Points from "@/components/reports/Points";
import NewProp from "@/components/new-home/NewProp";
import NewsCarousal from "@/components/news/NewsCarousal";
import { SearchResults } from "@/components/card/SearchResults";
const Buy = () => {
  const [searched, setSearched] = React.useState(false);
  return (
    <main className="">
<section className="h-[90vh] md:h-[85vh] lg:h-[75vh] xl:h-[85vh] 2xl:h-[73vh] w-full overflow-hidden  bg-black-grid-with-gradient bg-no-repeat bg-cover">
  <Navbar />
  <div className="text-white flex flex-col xl:flex-row justify-evenly gap-y-10 md:gap-y-20 xl:gap-y-10 pt-10 lg:pt-14 relative">
    {/* Text Section */}
    <div className="flex flex-col md:justify-center md:items-center xl:items-start xl:justify-start gap-2 xl:pl-28 w-full xl:w-1/2 2xl:w-full md:pt-14 2xl:pt-40 2xl:pl-[270px]">
      {/* Breadcrumb */}
      <div className="font-light text-[16px] md:text-[20px] 2xl:text-[30px] flex justify-center md:justify-start items-center gap-3">
        <span>Home</span>
        <span>
          <MoveRight className="text-[#0874DE]" />
        </span>
        <span>New Homes</span>
      </div>

      {/* Heading */}
      <div className="flex flex-row justify-center md:justify-start text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] 2xl:text-[65px]">
        <span className="font-normal">New Homes Near Me</span>&nbsp;
        {/* <span className="flex flex-col font-bold w-fit border-b-[4px] sm:border-b-[6px] border-[#0874DE80]">
          Sale Near Me.
        </span> */}
      </div>

      {/* Subtext */}
      <div className="font-normal text-[#808080] text-[14px] sm:text-[16px] md:text-[20px] 2xl:text-[25px] max-w-full md:max-w-[70%] pt-4 md:pt-5 px-4 md:px-0 text-center xl:text-left">
        Everything you need to browse nearby homes, all in one place. Listings include a free homes report!
      </div>
    </div>

    {/* Image Section */}
    <div className="h-[40vh] xl:h-[68vh] w-full xl:w-1/2  2xl:w-full flex justify-center items-center">
      <Image
        src={PreOwnHeroImage}
        alt="Hero home image"
        className="h-[90%] sm:h-[80%] md:h-[95%] 2xl:h-[80%] object-contain z-10 mb-20 sm:mb-40 lg:mb-48"
      />
    </div>
  </div>
</section>

      {searched && (
        <div className="px-8 md:px-20 mt-[-80px] pb-20">
          <FilterBar searched={searched} setSearched={setSearched} className="2xl:px-[18%]"/>
        </div>
      )}
      {/* Search Section */}
      {searched && (
        <section className="bg-white min-h-[100vh] w-[100vw] overflow-clip  pb-16">
          <div className="flex flex-col md:flex-row px-4 md:px-10">
            {/* Left Filter */}
            <div className="flex-[0.3]  h-screen sticky top-0 overflow-y-auto">
              <Filters />
            </div>
            {/* Right Results */}
            <div className="flex-[0.7] overflow-y-auto h-screen">
              {/* Top section: Texts and Sort Dropdown */}
              <div className="flex flex-col lg:flex-row justify-center items-center md:justify-between gap-4 px-6 lg:px-10 py-4 mt-6 md:mt-0">
                <p className="text-[16px] lg:text-[18px]">
                  Showing 1 - 25 of 500 listings
                </p>

                {/* Sort by Dropdown */}
                <div className="flex items-center gap-2">
                  <p className="text-[16px] lg:text-[18px]">Sort by:</p>
                  <Select>
                    <SelectTrigger className="w-[180px] lg:w-[280px] rounded-lg text-[14px] lg:text-[16px]">
                      <SelectValue placeholder="Choose a filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Price</SelectLabel>
                        <SelectItem value="plh">Low to High</SelectItem>
                        <SelectItem value="phl">High to Low</SelectItem>
                      </SelectGroup>

                      <SelectGroup>
                        <SelectLabel>Bedrooms</SelectLabel>
                        <SelectItem value="bdlh">Low to High</SelectItem>
                        <SelectItem value="bdhl">High to Low</SelectItem>
                      </SelectGroup>

                      <SelectGroup>
                        <SelectLabel>Bathrooms</SelectLabel>
                        <SelectItem value="balh">Low to High</SelectItem>
                        <SelectItem value="bahl">High to Low</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Listings grid */}
              <div className="flex flex-wrap gap-6 px-4 md:px-8 py-6">
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
                <SearchResults
                  image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="Modern villa in Oregon"
                  adddress="1261 Sampson street senver"
                  price={800000}
                  isNew={false}
                  beds={4}
                  baths={3}
                  area={2500}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center md:justify-evenly w-full max-w-4xl mx-auto p-4">
                <div className="text-[20px]">1 - 25 of 500 results</div>
                <div className="flex items-center space-x-[6px] md:space-x-4">
                  <Button
                    variant="outline"
                    className="flex items-center space-x-1 rounded-[50px]"
                  >
                    <ArrowLeftIcon className="w-4 h-4 text-[#0874de]" />
                    <span>PREV</span>
                  </Button>
                  <Button className="bg-blue-500 text-white rounded-full w-10 h-10">
                    01
                  </Button>
                  <Button variant="outline" className="rounded-full w-10 h-10">
                    02
                  </Button>
                  <Button variant="outline" className="rounded-full w-10 h-10">
                    03
                  </Button>
                  <span className="text-lg">...</span>
                  <Button variant="outline" className="rounded-full w-10 h-10">
                    25
                  </Button>
                  <Button className="bg-blue-500 text-white flex items-center space-x-1 rounded-[50px]">
                    <span>NEXT</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className={`min-h-[100vh] w-[100vw]  bg-[#F5F5F5] ${
          searched ? "pt-20" : "pt-52"
        } pb-28 border`}
      >
        {!searched && (
          <div className="mx-8 md:mx-20 mt-[-300px] pb-20">
            <FilterBar searched={searched} setSearched={setSearched} className=" 2xl:px-[18%]"/>
          </div>
        )}
        <div className="flex justify-between mx-20 items-center lg:flex-row flex-col gap-y-5">
          <div className="text-2xl sm:text-3xl md:text-[50px] font-normal flex">
            <span>Suggested&nbsp;</span>
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              Properties
            </span>
          </div>
          <div>
            <Button className="bg-[#0874DE] text-[16px] rounded-3xl">
              View More&nbsp;&nbsp;
              <FaAlignRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mx-10 justify-center mt-10 md:mt-20">
          <NewProp
            image="/images/house-carousal-1.png"
            title="Luxury villa in Texas"
            description="Houses recommended by our partners that have been curated to become....."
            price="8,50,000"
            beds={4}
            baths={2}
            area={1500}
            carports={2}
            floors={2}
          />
          <NewProp
            image="/images/house-carousal-2.png"
            title="Luxury villa in Texas"
            description="Houses recommended by our partners that have been curated to become....."
            price="8,50,000"
            beds={4}
            baths={2}
            area={1500}
            carports={2}
            floors={2}
          />
          <NewProp
            image="/images/house-carousal-3.png"
            title="Luxury villa in Texas"
            description="Houses recommended by our partners that have been curated to become....."
            price="8,50,000"
            beds={4}
            baths={2}
            area={1500}
            carports={2}
            floors={2}
          />
        </div>
      </section>

      <section
        className="min-h-[90vh] md:min-h-[90vh] lg:min-h-[82vh] xl:min-h-[90vh] w-[100vw] pt-24"
        style={{ borderTop: "1px solid #00000026" }}
      >
        <div className="flex flex-col md:flex-row mx-20 justify-center items-center text-2xl sm:text-3xl lg:text-[50px] font-normal tracking-tight">
          <span>Why New Homes&nbsp;</span>
          <span className="font-bold flex flex-col w-fit border-b-[6px] border-[#0874DE80] mt-[2px]">
            Over Pre-Homes?
          </span>
        </div>
        <div className="px-16 lg:px-28 py-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Points
            icon={
              <svg
                className="p-4 bg-white rounded-full"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.8629 27.0186C39.7064 25.9232 38.9624 24.463 38.756 22.8836L37.6816 14.6637L30.4 18.626C29.0008 19.3873 27.3821 19.6437 25.8162 19.3519L17.6666 17.8337L19.1848 25.9833C19.4766 27.5493 19.2202 29.168 18.4588 30.5669L14.4966 37.8485L22.7164 38.9229C24.2959 39.1296 25.7561 39.8736 26.8515 41.0299L32.5523 47.0485L36.1141 39.5629C36.7987 38.1245 37.9573 36.9659 39.3957 36.2813L46.8813 32.7195L40.8629 27.0186ZM40.9301 41.8544L35.0296 54.2549C34.6499 55.0528 33.6952 55.3917 32.8973 55.012C32.7195 54.9275 32.5587 54.8107 32.4232 54.6677L22.9794 44.6976C22.7266 44.4307 22.3897 44.2589 22.0252 44.2115L8.40842 42.4315C7.53221 42.3171 6.91477 41.5139 7.0293 40.6376C7.05482 40.4424 7.11624 40.2533 7.2104 40.0803L13.7742 28.0179C13.9499 27.6949 14.009 27.3213 13.9417 26.9601L11.4267 13.4598C11.2648 12.591 11.8379 11.7556 12.7066 11.5938C12.9003 11.5577 13.099 11.5577 13.2926 11.5938L26.793 14.1088C27.1544 14.1761 27.528 14.117 27.8507 13.9413L39.9131 7.37752C40.6893 6.95515 41.6611 7.242 42.0832 8.01816C42.1776 8.19123 42.2389 8.38019 42.2643 8.57555L44.0443 22.1923C44.092 22.5568 44.2637 22.8938 44.5304 23.1465L54.5005 32.5901C55.1421 33.1979 55.1696 34.2107 54.5619 34.8523C54.4264 34.9952 54.2656 35.112 54.0877 35.1965L41.6875 41.0973C41.3555 41.2552 41.088 41.5227 40.9301 41.8544ZM43.0549 46.9933L46.8261 43.2221L58.14 54.5357L54.3688 58.3069L43.0549 46.9933Z"
                  fill="#0874DE"
                />
              </svg>
            }
            title="Modern Design & Technology"
            content="New homes come with the latest designs, 
            energy-efficient features, and smart 
            technology integration."
          />
          <Points
            icon={
              <svg
                className="p-4 bg-white rounded-full"
                width="64"
                height="65"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.8861 6.61426L42.1147 10.3855L48.2291 16.4999H34.6672V21.8332H48.2291L42.1147 27.9476L45.8861 31.7188L58.4384 19.1665L45.8861 6.61426ZM25.3337 19.1665C25.3337 15.4846 22.349 12.4999 18.6671 12.4999C14.9852 12.4999 12.0004 15.4846 12.0004 19.1665C12.0004 22.8484 14.9852 25.8332 18.6671 25.8332C22.349 25.8332 25.3337 22.8484 25.3337 19.1665ZM30.6672 19.1665C30.6672 25.794 25.2945 31.1665 18.6671 31.1665C12.0396 31.1665 6.66706 25.794 6.66706 19.1665C6.66706 12.5391 12.0396 7.16652 18.6671 7.16652C25.2945 7.16652 30.6672 12.5391 30.6672 19.1665ZM15.7716 48.4998L21.886 54.6142L18.1148 58.3854L5.5625 45.8332L18.1148 33.2809L21.886 37.0521L15.7716 43.1665H29.3339V48.4998H15.7716ZM40.0005 51.1665H50.6672V40.4998H40.0005V51.1665ZM34.6672 37.8332C34.6672 36.3604 35.8611 35.1665 37.3339 35.1665H53.3339C54.8064 35.1665 56.0005 36.3604 56.0005 37.8332V53.8332C56.0005 55.306 54.8064 56.4998 53.3339 56.4998H37.3339C35.8611 56.4998 34.6672 55.306 34.6672 53.8332V37.8332Z"
                  fill="#0874DE"
                />
              </svg>
            }
            title="Customization Options"
            content="Enjoy the ability to customize your home 
            with personal finishes and designs that suit 
            your taste."
          />
          <Points
            icon={
              <svg
                className="p-4 bg-white rounded-full"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.6804 59.174C17.9528 59.174 6.01367 47.2351 6.01367 32.5074C6.01367 17.7799 17.9528 5.84082 32.6804 5.84082C47.4079 5.84082 59.3471 17.7799 59.3471 32.5074C59.3471 47.2351 47.4079 59.174 32.6804 59.174ZM32.6804 53.8407C44.4625 53.8407 54.0137 44.2895 54.0137 32.5074C54.0137 20.7254 44.4625 11.1742 32.6804 11.1742C20.8983 11.1742 11.347 20.7254 11.347 32.5074C11.347 44.2895 20.8983 53.8407 32.6804 53.8407ZM24.6803 35.174H22.0137V29.8407H24.6803V27.174C24.6803 22.0195 28.8591 17.8408 34.0137 17.8408C37.9316 17.8408 41.2857 20.2549 42.6697 23.6768L37.3724 25.0011C36.6596 23.9016 35.4217 23.1742 34.0137 23.1742C31.8047 23.1742 30.0137 24.965 30.0137 27.174V29.8407H38.0137V35.174H30.0137V40.5074H43.3471V45.8407H22.0137V40.5074H24.6803V35.174Z"
                  fill="#0874DE"
                />
              </svg>
            }
            title="Lower Maintenance Costs"
            content="Newly constructed homes are built to the 
            latest standards and come with warranties,
            reducing the need for repairs and renovations."
          />
          <Points
            icon={
              <svg
                className="p-4 bg-white rounded-full"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.9282 48.4997H29.6667V35.1663H35V48.4997H37.7384C38.0904 45.2954 39.7256 42.6503 42.3803 39.7599C42.6792 39.4346 44.5968 37.4501 44.8243 37.1666C47.0848 34.3479 48.3333 30.8597 48.3333 27.1663C48.3333 18.3298 41.1699 11.1663 32.3333 11.1663C23.4968 11.1663 16.3333 18.3298 16.3333 27.1663C16.3333 30.8578 17.5806 34.3442 19.839 37.1621C20.0668 37.4463 21.9888 39.4362 22.2841 39.7578C24.9404 42.6501 26.5761 45.2954 26.9282 48.4997ZM27 53.833V56.4997H37.6667V53.833H27ZM15.6772 40.4975C12.7505 36.8455 11 32.2103 11 27.1663C11 15.3843 20.5513 5.83301 32.3333 5.83301C44.1155 5.83301 53.6667 15.3843 53.6667 27.1663C53.6667 32.213 51.9141 36.8503 48.9848 40.5034C47.3307 42.5658 43 45.833 43 49.833V56.4997C43 59.4453 40.6123 61.833 37.6667 61.833H27C24.0545 61.833 21.6667 59.4453 21.6667 56.4997V49.833C21.6667 45.833 17.3322 42.5626 15.6772 40.4975Z"
                  fill="#0874DE"
                />
              </svg>
            }
            title="Energy Efficiency"
            content="New homes are built with energy-saving 
            materials and appliances, resulting in lower 
            utility bills and environmental impact."
          />
          <Points
            icon={
              <svg
                className="p-4 bg-white rounded-full"
                width="64"
                height="65"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.666 56.4997H13.3327C11.8599 56.4997 10.666 55.3058 10.666 53.833V29.833H2.66602L30.2055 4.79702C31.2225 3.87235 32.7761 3.87235 33.7932 4.79702L61.3327 29.833H53.3327V53.833C53.3327 55.3058 52.1388 56.4997 50.666 56.4997ZM15.9993 51.1664H47.9994V24.9195L31.9993 10.3741L15.9993 24.9195V51.1664ZM22.9091 37.3234C22.7443 36.6293 22.6571 35.905 22.6571 35.1605C22.6571 34.4159 22.7443 33.6919 22.9091 32.9978L20.266 31.4717L22.9314 26.8552L25.5763 28.3824C26.6241 27.3911 27.9015 26.6403 29.3204 26.218V23.1663H34.6514V26.218C36.0703 26.6403 37.3476 27.3911 38.3954 28.3821L41.0404 26.855L43.706 31.4714L41.0625 32.9975C41.2273 33.6917 41.3146 34.4159 41.3146 35.1605C41.3146 35.905 41.2273 36.629 41.0628 37.3232L43.706 38.849L41.0407 43.4655L38.3956 41.9386C37.3479 42.9296 36.0705 43.6805 34.6516 44.1029V47.1546H29.3207V44.1029C27.9017 43.6808 26.6243 42.9301 25.5765 41.9389L22.9315 43.4658L20.266 38.8493L22.9091 37.3234ZM31.986 39.1586C34.194 39.1586 35.9839 37.3685 35.9839 35.1605C35.9839 32.9525 34.194 31.1623 31.986 31.1623C29.7778 31.1623 27.9879 32.9525 27.9879 35.1605C27.9879 37.3685 29.7778 39.1586 31.986 39.1586Z"
                  fill="#0874DE"
                />
              </svg>
            }
            title="Healthier Living"
            content="Modern homes often come with better ventilation 
            systems and use safer, eco-friendly materials, 
            contributing to a healthier indoor environment."
          />
          <Points
            icon={
              <svg
                className="p-4 bg-white rounded-full"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.34766 48.6309C11.9484 32.6487 19.5353 18.176 30.0093 6.31221C30.296 5.98741 30.6586 5.58645 31.0973 5.10935C31.8949 4.24199 33.2445 4.18541 34.1117 4.9829C34.1557 5.02327 34.1978 5.06543 34.2381 5.10935C34.6821 5.59218 35.049 5.9977 35.3386 6.32586C45.8061 18.1871 53.3888 32.6549 56.988 48.6309C51.2776 49.8343 45.4138 50.6228 39.4304 50.9628L33.8605 62.1026C33.5312 62.7612 32.7301 63.0282 32.0714 62.6988C31.8136 62.5698 31.6042 62.3607 31.4752 62.1026L25.9053 50.9628C19.9218 50.6228 14.0582 49.8343 8.34766 48.6309ZM26.2079 45.638L29.2936 45.8132L32.6677 52.562L36.0421 45.8132L39.1277 45.638C42.9194 45.4226 46.6794 45.0175 50.3981 44.4263C46.8624 32.2845 40.8117 21.0472 32.6677 11.394C24.5238 21.0471 18.4732 32.2845 14.9376 44.4263C18.6563 45.0175 22.4163 45.4226 26.2079 45.638ZM32.6677 40.4876C28.2496 40.4876 24.6678 36.906 24.6678 32.4876C24.6678 28.0695 28.2496 24.4878 32.6677 24.4878C37.0861 24.4878 40.6677 28.0695 40.6677 32.4876C40.6677 36.906 37.0861 40.4876 32.6677 40.4876ZM32.6677 35.1543C34.1405 35.1543 35.3344 33.9604 35.3344 32.4876C35.3344 31.0151 34.1405 29.821 32.6677 29.821C31.1952 29.821 30.001 31.0151 30.001 32.4876C30.001 33.9604 31.1952 35.1543 32.6677 35.1543Z"
                  fill="#0874DE"
                />
              </svg>
            }
            title="More Space & Functionality"
            content="New homes are designed to meet modern needs, 
            providing open floor plans, more storage, and
            multifunctional spaces."
          />
        </div>
      </section>

      <section className="bg-[#F5F5F5] pb-32 w-[100vw] overflow-clip">
        <div className="flex flex-col md:flex-row mx-20 justify-center text-2xl sm:text-3xl lg:text-[50px] font-normal py-16">
          <span>Latest Property&nbsp;</span>
          <span className="font-bold flex flex-col w-fit border-b-[6px] border-[#0874DE80]">
            News & Updates
          </span>
        </div>
        <NewsCarousal />
      </section>
    </main>
  );
};

export default Buy;

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
