"use client"
import ChatUI from "@/components/chat/ChatUI";
import { Navbar } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const { toast } = useToast()
  const router = useRouter()
  //state variables for the form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [concern, setConcern] = useState("");

  const handleClick = () => {

    if(firstName === "" || lastName === "" || email === "" || confirmEmail === "" || concern === ""){
      return toast({
        title: "Error!",
        description: "Please fill out all the required fields",
      })
    }
    toast({
      title: "Congratulations!",
      description: "Your request has been submitted successfully",
    })
  }

  return (
    <main className="relative">
      <section className="min-h-[20vh] min-w-[100vw] overflow-hidden bg-black-grid">
        <Navbar className=" bg-black-grid" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap md:flex-row text-2xl md:text-4xl lg:text-[60px] font-normal text-white pb-[6vh]">
            <span>Contact&nbsp;</span>
            <span
              className="font-bold flex flex-col "
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
          <div className="flex flex-col md:flex-row text-2xl md:text-4xl lg:text-[50px] font-normal">
            <span>Request Help From&nbsp;</span>
            <span
              className="font-bold flex flex-col border-b-[6px] border-[#0874DE80]"
            >
              Our Support Teams
            </span>
          </div>

          <div className="w-[85%] min-h-[35vh] rounded-[30px] border border-[#00000026] shadow-md px-[50px] pt-[40px]">
            <div className="font-bold text-[24px] text-center md:text-start">Your Information</div>

            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 py-10">
              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[18px]">
                  First Name<sup>*</sup>{" "}
                </div>
                <Input
                  placeholder="Enter your first name"
                  className="rounded-[50px] px-[18px] py-[20px] text-md required"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[18px]">
                  Last Name<sup>*</sup>{" "}
                </div>
                <Input
                  placeholder="Enter your last name"
                  className="rounded-[50px] px-[18px] py-[20px] text-md required"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[18px]">
                  Email Address<sup>*</sup>{" "}
                </div>
                <Input
                  placeholder="Enter your email address"
                  className="rounded-[50px] px-[18px] py-[20px] text-md required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="font-semibold text-[18px]">
                  Confirm Email Address<sup>*</sup>{" "}
                </div>
                <Input
                  placeholder="Confirm email address"
                  className="rounded-[50px] px-[18px] py-[20px] text-md required"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="font-semibold text-[18px]">
                Add a Concern<sup>*</sup>{" "}
              </div>
              <Input
                placeholder="Enter your concern"
                className="rounded-[50px] px-[18px] py-[20px] text-md required"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
              />
            </div>

            <div className="py-8 flex justify-center md:justify-start items-center">
              <Button className="px-[18px] py-[15px] w-[180px] h-[60px] text-lg rounded-3xl bg-[#0874DE]" 
                    onClick={handleClick}
              >
                SUBMIT
              </Button>
            </div>
          </div>

          <div className="w-[85%] rounded-[20px] bg-[#F5F5F5] min-h-[60vh] mt-10 flex flex-col">
            <div className="flex-[0.75] flex flex-col lg:flex-row gap-y-5 border-b border-[#00000033]  w-full">
              <div className="border-b lg:border-r border-[#00000033] flex-[0.5] flex flex-col items-center justify-center gap-y-5 p-10 md:p-5">
                <div className="font-semibold text-[30px]">
                  Think a report has an error?
                </div>
                <div className="font-normal text-[18px] text-[#808080]">
                  Let us know the details and we’ll look into it and get back to
                  you
                </div>
                <Button className="px-[18px] py-[15px] min-w-[180px] h-[60px] bg-[#0874DE] rounded-3xl text-md" onClick={()=>router.push("/project/on-progress")}>
                  REPORT A CONCERN
                </Button>
              </div>
              <div className="flex-[0.5] flex flex-col items-center justify-center gap-y-5  p-10 md:p-5">
                <div className="font-semibold text-[30px]">
                  Have a general question?
                </div>
                <div className="font-normal text-[18px] text-[#808080]">
                  Send us a message and read our response at your convenience
                </div>
                <Button className="px-[18px] py-[15px] min-w-[180px] h-[60px] bg-[#0874DE] rounded-3xl text-md" onClick={()=>router.push("/project/on-progress")}>
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

      <svg className="fixed bottom-5 right-[-4px] bg-[#0874de] p-3 rounded-tl-xl rounded-bl-xl hover:cursor-pointer" onClick={()=>setChatOpen(!chatOpen)} width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66406 11.9917C2.66406 7.57799 6.23278 4 10.6649 4H21.3298C25.7486 4 29.3307 7.59304 29.3307 11.9917V28H10.6649C6.24618 28 2.66406 24.4069 2.66406 20.0084V11.9917ZM26.6641 25.3333V11.9917C26.6641 9.06052 24.2706 6.66667 21.3298 6.66667H10.6649C7.71017 6.66667 5.33073 9.04611 5.33073 11.9917V20.0084C5.33073 22.9395 7.72422 25.3333 10.6649 25.3333H26.6641ZM18.6641 14.6667H21.3307V17.3333H18.6641V14.6667ZM10.6641 14.6667H13.3307V17.3333H10.6641V14.6667Z" fill="white"/>
      </svg>

{
  chatOpen && (
    <ChatUI className="fixed bottom-5 md:right-16" setChatOpen={setChatOpen}/>
  )
}

    </main>
  );
}
