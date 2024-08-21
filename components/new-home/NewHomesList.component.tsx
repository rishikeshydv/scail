import { Button, Input } from "antd";
import React from "react";
import { PropertyCard } from "../card";
import { Heart } from "lucide-react";

export const NewHomesList = () => {
  return (
    <section className="h-[100vh] w-full flex py-14">
      <div className="flex-[0.3] bg-white h-[70%] border-r border-[#00000026] flex flex-col items-center">

        <Input className="w-[90%] h-[60px] rounded-[50px] px-5" placeholder="Save Search" suffix={<Heart />} />
        
      </div>
      <div className="flex-[0.7] mx-5">
        <div className="flex w-full justify-between">
          <div className="font-semibold text-[40px] px-10">
            Find Homes Near Me
          </div>

          <div className="flex gap-x-4 items-center">
            <input
              placeholder="Enter zip code"
              className="h-[60px] w-[270px] outline-none border rounded-[50px] px-[18px] py-[20px]"
            />

            <Button
              type="primary"
              size="large"
              className="h-[60px] rounded-[50px] w-[180px] text-[18px]"
            >
              UPDATE
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-x-36 gap-y-10 py-20 overflow-y-scroll h-[90%]">
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
            isNew={false}
          />
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
            isNew={false}
          />
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
            isNew={false}
          />
          <PropertyCard
            image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Modern villa in Oregon"
            adddress="1261 Sampson street senver"
            price={800000}
            isNew={false}
          />
        </div>
      </div>
    </section>
  );
};
