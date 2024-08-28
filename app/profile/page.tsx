import { Navbar } from "@/components/navigation";
import Image from "next/image";
import ProfileImage from "@/assets/images/profile.png";
import { Button, Input, Rate } from "antd";
import { Phone } from "lucide-react";

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
              <div className="text-[24px] font-bold">
                <div className="text-[#0874DE]">Harold Lane</div>
                <div>
                  {" "}
                  <Rate value={4.9} disabled />
                </div>
                <div className="pt-5">4.9 • 3 reviews</div>
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
                Plumber (26 years experience)
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
                type="primary"
                shape="round"
                className="w-full  py-[25px] font-semibold text-[18px]"
                icon={<Phone size={18} />}
              >
                CONTACT
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
        <div className="w-full px-20 py-10 text-[30px] font-normal">
          Harold Lane <span className="font-bold">reviews</span> (02)
        </div>

        {/* Reviews filter */}
        <div>
          
        </div>


      </section>
    </main>
  );
}
