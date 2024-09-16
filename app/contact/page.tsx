import { Navbar } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
export default function ContactPage() {
  return (
    <main>
      <section className="min-h-[20vh] min-w-[100vw] overflow-hidden bg-black-grid">
        <Navbar className=" bg-black-grid" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row text-2xl md:text-4xl lg:text-[60px] font-normal text-white pb-[6vh]">
            <span>Contact&nbsp;</span>
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              Now
            </span>
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] w-[100vw] overflow-hidden">
        <div className="h-full w-full flex flex-col items-center py-20 gap-y-12">
          <div className="flex flex-row text-2xl md:text-4xl lg:text-[50px] font-normal">
            <span>Request Help From&nbsp;</span>
            <span
              className="font-bold flex flex-col"
              style={{
                borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              }}
            >
              Our Support Teams
            </span>
          </div>

          <div className="w-[85%] min-h-[35vh] rounded-[30px] border border-[#00000026] shadow-md px-[50px] pt-[40px]">
            <div className="font-bold text-[24px]">Your Information</div>

            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 py-10">
              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[18px]">
                  First Name<sup>*</sup>{" "}
                </div>
                <Input
                  placeholder="Enter your first name"
                  className="rounded-[50px] px-[18px] py-[20px] text-md"
                />
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[18px]">
                  Last Name<sup>*</sup>{" "}
                </div>
                <Input
                  placeholder="Enter your last name"
                  className="rounded-[50px] px-[18px] py-[20px] text-md"
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[18px]">
                  Email Address<sup>*</sup>{" "}
                </div>
                <Input
                  placeholder="Enter your email address"
                  className="rounded-[50px] px-[18px] py-[20px] text-md"
                />
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[18px]">
                  Confirm Email Address<sup>*</sup>{" "}
                </div>
                <Input
                  placeholder="Confirm email address"
                  className="rounded-[50px] px-[18px] py-[20px] text-md"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="font-semibold text-[18px]">
                Choose a Concern<sup>*</sup>{" "}
              </div>
              <Input
                placeholder="Enter your concern"
                className="rounded-[50px] px-[18px] py-[20px] text-md"
              />
            </div>

            <div className="py-8">
              <Button className="px-[18px] py-[15px] w-[180px] h-[60px] text-lg rounded-3xl bg-[#0874DE]">
                SUBMIT
              </Button>
            </div>
          </div>

          <div className="w-[85%] rounded-[20px] bg-[#F5F5F5] min-h-[60vh] mt-10 flex flex-col">
            <div className="flex-[0.75] flex flex-col lg:flex-row gap-y-5 border-b border-[#00000033]  w-full">
              <div className="border-b lg:border-r border-[#00000033] flex-[0.5] flex flex-col items-center justify-center gap-y-5 py-5">
                <div className="font-semibold text-[30px]">
                  Think a report has an error?
                </div>
                <div className="font-normal text-[18px] text-[#808080]">
                  Let us know the details and we’ll look into it and get back to
                  you
                </div>
                <Button className="px-[18px] py-[15px] min-w-[180px] h-[60px] bg-[#0874DE] rounded-3xl text-md">
                  REPORT A CONCERN
                </Button>
              </div>
              <div className="flex-[0.5] flex flex-col items-center justify-center gap-y-5 py-5">
                <div className="font-semibold text-[30px]">
                  Have a general question?
                </div>
                <div className="font-normal text-[18px] text-[#808080]">
                  Send us a message and read our response at your convenience
                </div>
                <Button className="px-[18px] py-[15px] min-w-[180px] h-[60px] bg-[#0874DE] rounded-3xl text-md">
                  CONTACT US
                </Button>
              </div>
            </div>
            <div className="flex-[0.25] px-5 lg:px-48 py-11 text-center justify-center font-normal text-[18px] text-[#808080]">
              Note: We don’t offer phone support out of full dedication to our
              other help channels. Online support allows us to send and receive
              links and supporting documentation, which resolves your concerns
              more quickly.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
