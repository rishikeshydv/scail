import { Navbar } from "@/components/navigation";
import Image from "next/image";
import ProfileImage from "@/assets/images/profile.png";
import { Input, Rate, Select } from "antd";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <main>
      <section className="min-h-[100vh] w-[100vw] overflow-hidden bg-[#F5F5F5]">
        <Navbar className="bg-black" />
        <div className="border border-[#00000026] w-full px-20 py-8 font-semibold text-[18px] bg-white">
          New York - New York -{" "}
          <span className="text-[#0874DE]">Evelyn Benatar</span>
        </div>

        {/* Profile detail section */}

        <div className="min-h-[50vh] w-full px-20 py-8 flex">
          <div className="flex-[0.4] flex flex-col gap-y-5">
            <div className="flex items-center gap-x-8">
              <div className="h-[195px] w-[195px]">
                <Image
                  src={ProfileImage}
                  alt="profile image"
                  className="rounded-[50%] h-[195px] w-[195px]"
                />
              </div>
              <div className="">
                <div className="text-[24px] font-bold text-[#0874DE]">Harold Lane</div>
                <div>
                  {" "}
                  <Rate value={4.9} disabled />
                </div>
                <div className="pt-5 font-semibold text-[20px]">3+ reviews</div>
              </div>
            </div>
            <div className="flex flex-row text-[50px] font-normal">
              <span>About&nbsp;</span>
              <span className="font-bold flex flex-col">
                Me
                <span
                  style={{
                    borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                    marginTop: "-22px",
                  }}
                ></span>
              </span>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="font-semibold text-[24px] text-[#0874DE]">
                Plumber (26+ years experience)
              </div>
              <div className="font-medium text-[24px]">
                Specialties Plumbing
              </div>
              <div className="font-normal text-[18px] text-[#808080] w-3/4 text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt culpa ipsam quo ea quibusdam explicabo, perferendis
                expedita eius vero corporis vel deserunt. Nostrum eaque
                excepturi animi quia provident mollitia ullam voluptatum
                delectus voluptatibus inventore repellat, impedit maiores
                cupiditate minima itaque.
              </div>
            </div>
          </div>
          <div className="flex-[0.6] flex gap-x-3">
            <div className="flex-[0.5] rounded-[20px] bg-white p-[30px] flex flex-col gap-y-5">
              <div className="font-bold text-[30px]">
                Contact Evelyn Benatar
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[20px]">Name</div>
                <Input
                  placeholder="Enter your name"
                  className="rounded-[50px] px-[25px] py-[10px]"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[20px]">Email</div>
                <Input
                  placeholder="Enter your email"
                  className="rounded-[50px] px-[25px] py-[10px]"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[20px]">Message</div>
                <textarea className="rounded-[10px] px-[25px] h-[100px] border" />
              </div>
              <Button
                className="w-full  py-[25px] font-medium text-[18px] rounded-3xl tracking-wide"
              >
                CONTACT &nbsp;<Phone size={18} />
              </Button>
            </div>
            <div className="flex-[0.5] rounded-[20px] bg-white p-[30px] flex flex-col gap-y-5">
              <div className="font-bold text-[30px]">
                Professional Information
              </div>

              <div className="w-full h-full flex flex-col gap-y-3">
                <div className="flex w-full justify-between">
                  <div className="flex-[0.3] font-semibold text-[20px]">
                    Address
                  </div>
                  <div className="flex-[0.7] font-medium text-[18px] text-[#808080]">
                    New York Interior Design, Inc.Cedar DriveNew York, NY 10075
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="flex-[0.3] font-semibold text-[20px]">
                    Office
                  </div>
                  <div className="flex-[0.7] font-medium text-[18px] text-[#808080]">
                    (212) 717-6800
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="flex-[0.3] font-semibold text-[20px]">
                    Websites
                  </div>
                  <div className="flex-[0.7] font-medium text-[18px] text-[#0874DE]">
                    Website, Blog, Facebook, Twitter, LinkedIn
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="flex-[0.3] font-semibold text-[20px]">
                    Name
                  </div>
                  <div className="flex-[0.7] font-medium text-[18px] text-[#808080]">
                    Evelyn Benatar
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="flex-[0.3] font-semibold text-[20px]">
                    Member since
                  </div>
                  <div className="flex-[0.7] font-medium text-[18px] text-[#808080]">
                    02/15/2013
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User reviews section */}
        <div className="w-full px-20 py-10 text-[40px] font-normal">
        <span className="font-bold">Reviews</span>
        </div>

        {/* Reviews filter */}
        <div className="px-20">
          <ReviewFilter />
        </div>

        <div className="pt-20 px-28">
          <div className="flex">
          <NewReview />
          <NewReview />
          <NewReview />
          </div>

          <div className="flex justify-center items-center pt-16 pb-20">
      <div className="flex space-x-2 p-2 bg-gray-200 rounded-full">
        <div className="w-4 h-4 border-2 border-black rounded-full" />
        <div className="w-4 h-4 bg-[#0874DE] rounded-full" />
        <div className="w-4 h-4 bg-[#0874DE] rounded-full" />
        <div className="w-4 h-4 bg-[#0874DE] rounded-full" />
      </div>
    </div>

        </div>
      

      </section>
    </main>
  );
}

const ReviewFilter = () => {
  return (
    <div className="w-full flex gap-x-16">
      <div className="flex-[0.4] flex flex-col gap-y-3 pb-2">
        <div className="font-semibold text-[20px]">Filter by</div>
        <div className="custom-select-container">
          <Select placeholder="Select Filter  " className="w-full h-[40px]" />
        </div>
      </div>
      <div className="flex-[0.4]  flex flex-col gap-y-3 pb-2">
        <div className="font-semibold text-[20px]">Sort by</div>
        <div className="custom-select-container">
          <Select placeholder="Select price" className="w-full h-[40px]" />
        </div>
      </div>
      <div className="flex-[0.2]  flex flex-col gap-y-3 pb-2">
        <div className="font-semibold text-[20px]">&nbsp;</div>

        <div className="custom-select-container">
          <Button className="px-10 py-5 text-[16px] tracking-wide rounded-3xl">
            WRITE A REVIEW
          </Button>
        </div>
      </div>
    </div>
  );
};

const NewReview = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src="/reviews/review3.webp"
          alt="Customer"
          className="w-full h-48 object-cover"
          width="300"
          height="300"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white rounded-b-lg" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">ABC treks with Global Treks Guide</h2>
        <p className="text-md text-muted-foreground mt-2 tracking-wide">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem
          Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum
          Dolor Sit Amet.
        </p>
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <p className="font-bold text-[#0874DE] text-xl">Ray Robertson</p>
          </div>
          <div className="flex items-center">
            <StarIcon className="stroke-yellow-400 fill-yellow-300" />
            <StarIcon className="stroke-yellow-400 fill-yellow-300" />
            <StarIcon className="stroke-yellow-400 fill-yellow-300" />
            <StarIcon className="stroke-yellow-400 fill-yellow-300" />
            <StarIcon className="stroke-yellow-400 fill-yellow-300" />

          </div>
        </div>
      </div>
    </div>
  );
}


function StarIcon(props:any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}