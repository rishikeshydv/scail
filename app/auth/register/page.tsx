"use client";
import React, { useState } from "react";
import ProfaxLogo from "@/assets/logo/profax-logo.png";
import Image from "next/image";
import { Button, Input } from "antd";
import { MoveRight, Eye, EyeOff, UserRoundPlus, Phone } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import AddUser from "@/queries/account/Signup";
import Confetti from "react-confetti";
import GoogleSignUp from "@/firebase/auth/google_provider";
import AppleSignUp from "@/firebase/auth/apple_provider";
import { set } from "firebase/database";
import { Label } from "@/components/ui/label";
import Logo from "@/public/logo/propfax-logo.png";
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  //input field entries
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //failure message after clicking signup button
  const [message, setMessage] = useState("");
  //success message after clicking signup button
  const [onSuccess, setOnSuccess] = useState(false);
  const [success, setSuccess] = useState("Already a member?");
  const [successColor, setSuccessColor] = useState("text-black");

  //on submit function
  const onSubmit = async () => {
    //check if the password and confirm password match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    //check if the email is valid
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Invalid email address.");
      return;
    }
    //check if the password is at least 6 characters long
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }
    const response = await AddUser(
      email,
      firstName,
      lastName,
      password,
      "client"
    );
    if (response === 1) {
      setMessage("User already exists. Try with another email/phone.");
    } else if (response === 2) {
      setSuccess("Account Successfully Created.");
      setSuccessColor("text-green-500");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setOnSuccess(true);
      setMessage("");
      //return (<Confetti width={width} height={height} />);
    }
  };

  //google signup function
  const GoogleRegister = async () => {
    const token = await GoogleSignUp();
    if (token === "Error") {
      setMessage("Error signing up with Google.");
    }
    setSuccess("Account Successfully Created.");
    setSuccessColor("text-green-500");
    setOnSuccess(true);
  };

  //apple signup function
  const AppleRegister = async () => {
    const token = await AppleSignUp();
    if (token === "Error") {
      setMessage("Error signing up with Apple.");
    }
    setSuccess("Account Successfully Created.");
    setSuccessColor("text-green-500");
    setOnSuccess(true);
  };
  return (
    <div>
      {
        //if the user successfully signs up, display confetti
        onSuccess && <Confetti width={1600} height={1000} />
      }
      <section className="min-h-[100vh] flex flex-col items-center justify-center gap-y-6">
        <Link href={"/"} className="mt-8">
          <Image src={Logo} alt="Logo" width={300} height={500} />
        </Link>

        <div className="text-2xl md:text-4xl lg:text-[50px] font-normal flex">
          <span>Create&nbsp;</span>
          <span
            className="font-bold flex flex-col"
            style={{
              borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
            }}
          >
            your account
          </span>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[18px] font-semibold">First Name</Label>
              <Input
                placeholder="Enter your first name"
                className="rounded-[50px] px-[18px] py-[10px] text-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[18px] font-semibold">Last Name</Label>
              <Input
                placeholder="Enter your last name"
                className="rounded-[50px] px-[18px] py-[10px] text-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[18px] font-semibold">Email Address</Label>
            <Input
              placeholder="Enter your email address"
              className="rounded-[50px] px-[18px] py-[10px] text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2 relative">
            <Label className="text-[18px] font-semibold">Password</Label>
            <Input
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              className="rounded-[50px] px-[18px] py-[10px] text-lg"
              suffix={
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </span>
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2 relative">
            <Label className="text-[18px] font-semibold">
              Confirm Password
            </Label>
            <div></div>
            <Input
              placeholder="Confirm your password"
              type={showConfirm ? "text" : "password"}
              className="rounded-[50px] px-[18px] py-[10px] text-lg"
              suffix={
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="cursor-pointer"
                >
                  {showConfirm ? <Eye /> : <EyeOff />}
                </span>
              }
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="font-medium text-[18px] w-[70%] md:w-[30%] text-center">
          By signing up, you confirm that you&apos;ve read and accepted our 
          <span className="text-[#0874DE] font-bold">Terms Of Use</span> and 
          <span className="text-[#0874DE] font-bold">Privacy Policy.</span>
        </div>

        <Button
          className="w-[35%] py-[28px] text-lg"
          type="primary"
          shape="round"
          size="large"
          icon={<UserRoundPlus width={20} />}
          iconPosition="end"
          onClick={onSubmit}
        >
          Sign Up
        </Button>
        <div
          className={`${successColor} font-medium text-[18px] w-[70%] md:w-[30%] text-center`}
        >
          <p className="text-center text-md tracking-tight font-semibold text-red-400">
            {message}
          </p>
          {success} 
          <Link href={"/auth/login"} className="text-[#0874DE] font-bold">
            Log in
          </Link>
        </div>

        <div className="flex flex-col gap-6 w-[80%] md:w-[35%] mb-10">
          <Button
            className="py-[28px] text-lg bg-white text-black border border-gray-300 hover:bg-slate-100"
            type="primary"
            shape="round"
            size="large"
            icon={<FcGoogle width={20} />}
            iconPosition="start"
            onClick={GoogleRegister}
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
            onClick={AppleRegister}
          >
            Continue with Apple
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
