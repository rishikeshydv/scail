"use client"
import React from "react";
import Image from "next/image";
import { Button, Input } from "antd";
import { LogIn, Phone } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";;
import {FaApple} from "react-icons/fa";
import GoogleSignUp from "@/firebase/auth/google_provider";
import AppleSignUp from "@/firebase/auth/apple_provider";
import Logo from "@/public/logo/propfax-logo.png";
const LoginPage = () => {
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center gap-y-4">
      <Link href={"/"} className="my-8">
        <Image src={Logo} alt="Logo" className="w-[244px]"/>
      </Link>

      <div className="text-[50px] font-normal flex mb-4">
        <span>Log in to&nbsp;</span>
        <span className="font-bold flex flex-col">
          your account
          <span
            style={{
              borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
              marginTop: "-18px",
            }}
          ></span>
        </span>
      </div>

      <div className="flex flex-col items-start w-[35%] gap-y-2">
        <div className="text-[18px] font-semibold">Email Address</div>
        <Input
          placeholder="Enter your email address"
          className="rounded-[50px] px-[18px] py-[10px] text-lg"
        />
      </div>
      <div className="flex flex-col items-start w-[35%] gap-y-2">
        <div className="text-[18px] font-semibold">Password</div>
        <Input
          placeholder="Enter your password"
          type="password"
          className="rounded-[50px] px-[18px] py-[10px] text-lg"
        />
      </div>

      <div className="font-medium text-[18px] w-[30%] text-center">
        By logging in, you confirm that you&apos;ve read and accepted our 
        <Link href={"/policies"}> <span className="text-[#0874DE] font-bold underline">Terms Of Use</span> </Link>
         and 
        <Link href={"/policies"}> <span className="text-[#0874DE] font-bold underline">Privacy Policy.</span></Link>
      
      </div>

      <Button
        className="w-[35%] py-[15px] text-xl tracking-wide"
        type="primary"
        shape="round"
        size="large"
        icon={<LogIn width={20} />}
        iconPosition="end"
      >
        Login
      </Button>
      <div className="font-medium text-[18px] w-[30%] text-center">
       Already have an account? 
        <Link href={"/auth/register"} className="text-[#0874DE] font-bold underline">
          Sign Up
        </Link>
      </div>
      <div className="flex flex-col gap-6 w-[35%] mb-10">
      <Button
        className="py-[28px] text-lg bg-white text-black border border-gray-300 hover:bg-slate-100"
        type="primary"
        shape="round"
        size="large"
        icon={<FcGoogle width={20} />}
        iconPosition="start"
        onClick={()=>{
          GoogleSignUp;
          
        }}
      >
        Continue with Google
      </Button>
      <Button
        className="py-[28px] text-lg bg-white text-black border border-gray-300 hover:bg-slate-100"
        type="primary"
        shape="round"
        size="large"
        icon={<FaApple width={20} className="text-gray-500 "/>}
        iconPosition="start"
        onClick={AppleSignUp}
      >
        Continue with Apple
      </Button>
      </div>
    </section>
  );
};

export default LoginPage;
