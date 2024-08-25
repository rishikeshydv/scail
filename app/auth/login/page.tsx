import React from "react";
import ProfaxLogo from "@/assets/logo/profax-logo.png";
import Image from "next/image";
import { Button, Input } from "antd";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center gap-y-10">
      <Image src={ProfaxLogo} alt="Logo" />

      <div className="text-[50px] font-normal flex">
        <span>Log in to&nbsp;</span>
        <span className="font-bold flex flex-col">
          your account
          <span
            style={{
              borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              marginTop: "-22px",
            }}
          ></span>
        </span>
      </div>

      <div className="flex flex-col items-start w-[35%] gap-y-2">
        <div className="text-[18px] font-semibold">Email Address</div>
        <Input
          placeholder="Enter your email address"
          className="rounded-[50px] px-[18px] py-[20px]"
        />
      </div>
      <div className="flex flex-col items-start w-[35%] gap-y-2">
        <div className="text-[18px] font-semibold">Password</div>
        <Input
          placeholder="Enter your password"
          type="password"
          className="rounded-[50px] px-[18px] py-[20px]"
        />
      </div>

      <div className="font-medium text-[18px] w-[30%] text-center">
        By signing up, you confirm that you've read and accepted our <span className="text-[#0874DE] font-bold">Terms Of Use</span> and <span className="text-[#0874DE] font-bold">Privacy Policy.</span>
      </div>

      <Button
        className="w-[35%] py-[15px]"
        type="primary"
        shape="round"
        size="large"
        icon={<MoveRight width={20} />}
        iconPosition="end"
      >
       Login
      </Button>
      <div className="font-medium text-[18px] w-[30%] text-center">
        Not a member? 
        <Link href={"/auth/register"} className="text-[#0874DE] font-bold">Register here</Link>
      </div>
    </section>
  );
};

export default LoginPage;
