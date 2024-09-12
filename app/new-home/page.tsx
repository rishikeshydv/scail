import { Navbar } from "@/components/navigation";
import { NewHomesList } from "@/components/new-home";
import { MoveRight } from "lucide-react";

const NewHome = () => {
  return (
    <main>
      <section className="h-[40vh] w-[100vw] bg-black-grid z-10">
        <Navbar />
        <div className="text-white flex pt-14 relative">
          <div className="flex flex-col gap-y-5 pl-36">
            <div className="font-normal text-[20px] flex items-center gap-x-5 ">
              Home <MoveRight color="#0874DE" /> New Homes{" "}
            </div>
            <div className="flex flex-row text-[50px] font-normal">
              <span>New Homes for&nbsp;</span>
               <span className="font-bold flex flex-col">
               Sale Near Me.
                <span
                  style={{
                    borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                    marginTop: "-22px",
                  }}
                ></span>
              </span>
            </div>
          </div>
        </div>
      </section>


      <NewHomesList />

    </main>
  );
};

export default NewHome;
