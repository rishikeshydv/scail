"use client";
import React from "react";
import Image from "next/image";
import { Button, Input } from "antd";
import Link from "next/link";
import Logo from "@/public/logo/propfax-logo.png";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase/config";
import { collection, getDoc,doc } from "firebase/firestore";
import { MdLockReset } from "react-icons/md";
import { sendPasswordResetEmail } from "firebase/auth";
import SuccessMessage from "@/components/success/Success";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [errorMsg, setErrorMsg] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const onSubmit = async () => {
    try {
    
    if (!email) {
        setErrorMsg("Please enter your email.");
        return;
    } 

      const receiverRef = collection(db, "User_Info");
      const receiverDocRef =  doc(receiverRef, email);
      const receiverSnapshot = await getDoc(receiverDocRef);
  
      if(!receiverSnapshot.exists()){
        setErrorMsg("User does not exist. Please register.");
        return;
      }
  
      await sendPasswordResetEmail(auth, email).then(() => {
        setIsOpen(true);
        }
        ).catch((error) => {
            setErrorMsg("Invalid email.");
            }
        );
    }

    catch (error) {
      setErrorMsg("Invalid email or password.");
    }


  }
  return (
    <section className="py-20 flex flex-col items-center justify-center gap-y-4 mb-20">
      <Link href={"/"} className="my-8">
        <Image src={Logo} alt="Logo" className="w-[244px]" />
      </Link>

      <div className="text-2xl md:text-4xl lg:text-[50px] font-normal flex mb-4">
        <span>Reset&nbsp;</span>
        <span
          className="font-bold flex flex-col"
          style={{
            borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
          }}
        >
          Your Password
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


      <Button
        className="md:w-[35%] py-[15px] text-xl tracking-wide mt-4"
        type="primary"
        shape="round"
        size="large"
        icon={<MdLockReset width={20} />}
        iconPosition="end"
        onClick={onSubmit}
      >
        Reset Password
      </Button>

      {
        errorMsg && (
          <div className="text-center text-md tracking-tight font-semibold text-red-400 mt-[-10px]">
            {errorMsg}
          </div>
        )
      }
      <SuccessMessage message="Password reset link has been sent to your email." isOpen={isOpen} setIsOpen={setIsOpen}/>
    </section>
  );
};

export default LoginPage;
