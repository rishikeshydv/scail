"use client";
import Image from "next/image";
import { Navbar } from "@/components/navigation";
import HomeCenterHeroImage from "@/assets/images/home-center-hero-house.png";
import { Button, Input, Rate } from "antd";
import {
  Delete,
  Headset,
  MoveRight,
  Search,
  Trash,
  UserRoundPlus,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HumanImage from "@/assets/images/jumping-man.jpeg";
import GirlSmilingImage from "@/assets/images/girl-smiling.png";
import GoogleMapReact from "google-map-react";

interface ReviewCardProps {
  image: any;
  name: string;
  contact: string;
  rating: number;
  totalReviews: number;
  agency: string;
  review: string;
}

interface PopularServiceCardProps {
  icon: any;
  title: string;
  description: string;
}

const HomeCenterPage = () => {
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
              <span>Find Home &nbsp;</span>
              <span className="font-bold flex flex-col">
                Centers Near Me.
                <span
                  style={{
                    borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                    marginTop: "-22px",
                  }}
                ></span>
              </span>
            </div>
            <div className="text-[#808080] text-[20px] font-normal">
              Homes provides accurate service data with customer reviews to help
              you find the right homes center.
            </div>
            <div className="flex gap-x-4 items-center">
              <input
                placeholder="Washington, DC"
                className="rounded-[50px] bg-[#262626] border-none outline-none w-3/4 px-[18px] py-[20px]"
              />
              <Button
                type="primary"
                shape="round"
                icon={<Search width={20} />}
                className="px-[18px] py-[20px] h-[60px] w-1/4 font-semibold text-[18px]"
              >
                FIND
              </Button>
            </div>
          </div>
          <div className="flex-[0.5] flex justify-center items-center">
            <Image
              src={HomeCenterHeroImage}
              alt="payment hero home image"
              className="h-[80%] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="px-20 py-14 bg-[#F5F5F5] flex items-center gap-x-5">
        <div className="flex flex-col w-full gap-y-10">
          <div className="text-[20px] font-semibold">Location</div>
          <Input
            placeholder="Find here"
            suffix={<Search size={20} className="mr-5" />}
            className="rounded-[50px] px-[10px] py-[18px] w-full text-[18px]"
          />
        </div>
        <div className="flex flex-col w-full gap-y-10">
          <div className="text-[20px] font-semibold">Service</div>
          <Select>
            <SelectTrigger className="w-full rounded-[50px] px-[20px] py-[30px]  outline-none text-[18px]">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent className="outline-none border-none">
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="electrician">Electrician</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-full gap-y-10">
          <div className="text-[20px] font-semibold">Search Radius</div>
          <Select>
            <SelectTrigger className="w-full rounded-[50px] px-[20px] py-[30px]  outline-none text-[18px]">
              <SelectValue placeholder="10 Mi" />
            </SelectTrigger>
            <SelectContent className="outline-none border-none">
              <SelectItem value="10">10 Mi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <section className="h-[100vh] flex">
        <div className="flex-[0.6] px-20 flex flex-col h-[90vh] overflow-y-scroll">
          <div className="font-semibold text-[18px] border-b border-[#00000026] py-[15px]">
            Reviews In New York, Ny 10008
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-10">
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
            <ReviewCard
              name="Harold Lane"
              contact="(800) 299-9470"
              rating={5}
              totalReviews={10}
              agency="Appliance Connection"
              review="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less"
              image={HumanImage}
            />
          </div>
        </div>
        <div className="flex-[0.4] p-5">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          />
        </div>
      </section>

      <section className="min-h-[70vh] w-full bg-[#F5F5F5] py-20">
        <div className="w-full">
          <div className="text-[50px] font-normal flex justify-center">
            <span>Browse By &nbsp;</span>
            <span className="font-bold flex flex-col">
              Popular Services
              <span
                style={{
                  borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  marginTop: "-22px",
                }}
              ></span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 px-14 py-20">
          <PopularServiceCard
            title="Crawl Space Cleaning"
            description="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, libero incidunt culpa neque saepe eos voluptatum illo nemo voluptas tempora?"
            icon={<Delete size={55} color="#0874DE" />}
          />
          <PopularServiceCard
            title="Debris Removal"
            description="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, libero incidunt culpa neque saepe eos voluptatum illo nemo voluptas tempora?"
            icon={<Trash size={55} color="#0874DE" />}
          />
          <PopularServiceCard
            title="Emergency Response"
            description="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, libero incidunt culpa neque saepe eos voluptatum illo nemo voluptas tempora?"
            icon={<Headset size={55} color="#0874DE" />}
          />
          <PopularServiceCard
            title="Remediation Services"
            description="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, libero incidunt culpa neque saepe eos voluptatum illo nemo voluptas tempora?"
            icon={<UserRoundPlus size={55} color="#0874DE" />}
          />
        </div>
      </section>

      <section className="min-h-[50vh] py-36 px-28">
        <div className="bg-[#0874DE] rounded-[40px] flex text-white h-auto">
          <div className="flex-[0.5] flex flex-col mx-20">
            <div className="flex flex-col justify-center text-[40px] font-normal py-20">
              <span>Take Housee of Your Homes  with Homes Housee &nbsp;</span>
              <span className="font-bold flex flex-col">
                with Homes Housee
                <span
                  style={{
                    borderBottom: "6px solid rgba(255, 255, 255, 0.302)",
                    marginTop: "-18px",
                    width: "55%",
                  }}
                ></span>
              </span>
            </div>

            <div className="font-normal text-[20px] ">
              Visit a Homes Service Center and we&apos;ll automatically add the
              service records to your Homes account.
            </div>
            <Button type="default" shape="round" className="bg-black text-white border-none outline-none w-[300px] px-[10px] py-[20px] my-6">
            Create Free Account
            </Button>
          </div>
          <div className="flex-[0.5]">

            <Image src={GirlSmilingImage} alt="Girl smiling image." className="h-[121%] mt-[-100px]" />

          </div>
        </div>
      </section>
    </main>
  );
};

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div className="px-[15px] py-[30px] rounded-[30px] border border-[#D9D9D9] flex flex-col w-full max-w-[480px] gap-y-4">
      <div className="flex gap-x-8 ">
        <div className="">
          <Image
            src={props.image}
            alt="Avatar"
            className="rounded-[50%] h-[120px] w-[120px]"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="text-[18px] font-bold text-[#0874DE]">
            {props.name}
          </div>
          <div className="font-normal text-[16px]">{props.contact}</div>
          <div>
            <Rate value={props.rating} disabled />
          </div>
          <div className="font-semibold text-[14px]">
            {props.totalReviews} reviews
          </div>
          <div className="font-normal text-[18px] text-[#808080]">
            {props.agency}
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-y-4">
        <div className="font-bold text-[18px]">Client Reivews</div>
        <div className="text-[14px] font-normal text-[#808080]">
          {props.review}
        </div>
      </div>

      <Button shape="circle" type="primary" className="h-[50px] w-[50px]">
        <MoveRight width={15} />
      </Button>
    </div>
  );
};

const PopularServiceCard = (props: PopularServiceCardProps) => {
  return (
    <div className="rounded-[40px] w-full max-w-[435px] border border-[#0000001A] flex flex-col items-center gap-y-5 bg-white px-10 py-10">
      <div className="h-[110px] w-[110px] rounded-[50%] border border-[#00000026] flex items-center justify-center">
        {props.icon}
      </div>
      <div className="font-semibold text-[20px]">{props.title}</div>
      <div
        className="text-center text-[18px] font-normal text-[#808080]"
        style={{
          lineHeight: "30px",
        }}
      >
        {props.description}
      </div>
    </div>
  );
};

export default HomeCenterPage;
