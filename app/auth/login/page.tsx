"use client";
import React from "react";
import Image from "next/image";
import { Button, Input } from "antd";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import GoogleSignUp from "@/firebase/auth/google_provider";
import AppleSignUp from "@/firebase/auth/apple_provider";
import Logo from "@/public/logo/propfax-logo.png";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase/config";
import { collection, getDoc,doc } from "firebase/firestore";
import Login from "@/firebase/auth/login";
import { useAuthState } from "react-firebase-hooks/auth";
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
const LoginPage = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [errorMsg, setErrorMsg] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const onSubmit = async () => {
    try {

      if (email === "" || password === "") {
        setErrorMsg("Please fill in all fields.");
        return;
      }
  
      const receiverRef = collection(db, "User_Info");
      const receiverDocRef =  doc(receiverRef, email);
      const receiverSnapshot = await getDoc(receiverDocRef);
  
      if(!receiverSnapshot.exists()){
        setErrorMsg("User does not exist. Please register.");
        return;
      }
  
      await Login(email,password).then(() => {
        if (user) {
          router.push(`/`);
        }
        });

    }

    catch (error) {
      setErrorMsg("Invalid email or password.");
    }


  }
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center gap-y-4">
      <Link href={"/"} className="my-8">
        <Image src={Logo} alt="Logo" className="w-[244px]" />
      </Link>

      <div className="text-2xl md:text-4xl lg:text-[50px] font-normal flex mb-4">
        <span>Log in to&nbsp;</span>
        <span
          className="font-bold flex flex-col"
          style={{
            borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
          }}
        >
          your account
        </span>
      </div>

      <div className="flex flex-col items-start w-[80%] md:w-[35%] gap-y-2">
        <div className="text-[18px] font-semibold">Email Address</div>
        <Input
          placeholder="Enter your email address"
          className="rounded-[50px] px-[18px] py-[10px] text-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-start w-[80%] md:w-[35%] gap-y-2">
        <div className="text-[18px] font-semibold">Password</div>
        <Input
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          className="rounded-[50px] px-[18px] py-[10px] text-lg"
          suffix={showPassword ? <Eye className="hover:cursor-pointer" onClick={()=>setShowPassword(!showPassword)}/> : <EyeOff className="hover:cursor-pointer" onClick={()=>setShowPassword(!showPassword)}/>}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        className="md:w-[35%] py-[15px] text-xl tracking-wide mt-4"
        type="primary"
        shape="round"
        size="large"
        icon={<LogIn width={20} />}
        iconPosition="end"
        onClick={onSubmit}
      >
        Login
      </Button>
      <div className="font-medium text-[18px] w-[70%] md:w-[30%] text-center">
        Already have an account? 
        <Link
          href={"/auth/register"}
          className="text-[#0874DE] font-bold underline"
        >
          Sign Up
        </Link>
      </div>
      <div className="text-[18px] w-[70%] md:w-[30%] text-center underline hover:cursor-pointer" onClick={()=>router.push('/auth/password-reset')}>
        Forgot your password?
      </div>
      {
        errorMsg && (
          <div className="text-center text-md tracking-tight font-semibold text-red-400 mt-[-10px]">
            {errorMsg}
          </div>
        )
      }
      <div className="flex flex-col gap-6 w-[80%] md:w-[35%] mb-10">
        <Button
          className="py-[28px] text-lg bg-white text-black border border-gray-300 hover:bg-slate-100"
          type="primary"
          shape="round"
          size="large"
          icon={<FcGoogle width={20} />}
          iconPosition="start"
          onClick={() => {
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
          icon={<FaApple width={20} className="text-gray-500 " />}
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
