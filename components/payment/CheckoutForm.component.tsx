"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import type { FormProps, RadioChangeEvent } from "antd";
import { Checkbox, Radio } from "antd";
import CreditCardsImage from "@/assets/images/credit-cards.png";
import PaypalImage from "@/assets/images/paypal.png";
import AmzonPayImage from "@/assets/images/amazon-pay.png";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type FieldType = {
  name?: string;
  address?: string;
  zip?: string;
  email: string;
  month?: number;
  year?: number;
  security_code?: string;
};

//all the form fields are required using .min(1)
const formSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  zip: z.string().min(1),
  email: z.string().min(1),
  month: z.string().min(1), 
  year: z.string().min(1),
  security_code: z.string().min(1),
});

const urbanist = Urbanist({ subsets: ["latin"] });

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const CheckoutForm = () => {
  const router = useRouter();
  //define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  //function for submit handler
  function onSubmit(data: z.infer<typeof formSchema>) {
    router.push("/aggregation/uuidv4");
  }
  return (
    <div className="p-10">
      <Form {...form}>
      <div>
        <PaymentMethodsList />
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Cardholder Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Card Name..." {...field} className="rounded-2xl text-md w-full"/>
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap gap-x-32 gap-y-5">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg"> Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Address..." {...field} className="rounded-2xl text-md w-full md:w-[550px]"/>
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg"> Zip</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Zip Code..." {...field} className="rounded-2xl text-md w-full md:w-[350px]"/>
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg"> Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Email Address..." {...field} className="rounded-2xl text-md"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-x-96 gap-y-5 flex-wrap">
          <div className="flex gap-1">
            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg"> Month</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="MM"
                      className="rounded-2xl text-md w-[80px] text-center"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg"> Year</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="YYYY"
                      className="rounded-2xl text-md w-[100px] text-center"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="security_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg"> Security Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Security Code..." {...field} className="rounded-2xl text-md w-full md:w-[460px]"/>
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={`${urbanist.className} text-md tracking-wide`}>
          <Checkbox>
            I agree to the{" "}
            <span className="text-[#0874DE]">Customer Agreement</span>  and
            understand that HOUSEFAX may not have the complete history of every
            vehicle.
          </Checkbox>
        </div>
        <Button type="submit" className="text-[19px] px-8 bg-[#0874DE] rounded-2xl">BUY REPORT</Button>
        <div className={`${urbanist.className} text-md tracking-wide`}>
          <Checkbox>
            Send me special offers and other helpful information from Propfax. <span className="text-[#0874DE]">Privacy Statement</span>
          </Checkbox>
        </div>
      </form>
    </Form>
    </div>
    // <Form
    //   name="basic"
    //   initialValues={{ remember: true }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   autoComplete="off"
    //   className={`flex flex-col gap-y-14 px-12 w-full ${urbanist.className}`}
    //   style={{ fontSize: "26px", fontWeight: "semi-bold", fontFamily: "Urbanist" }}
    //   //change the font size and font weight
    // >
    //   <div>
    //     <PaymentMethodsList />
    //   </div>

    //   <div>
    //     <Form.Item<FieldType>
    //       label="Householder Name"
    //       name="name"
    //       layout="vertical"
    //       rules={[{ required: true, message: "Please input your name!" }]}
    //       style={{ fontSize: "26px", fontWeight: "semi-bold" }}
    //     >
    //       <Input
    //         placeholder="As it Appears on Housed"
    //         className="rounded-[50px] h-[60px] w-full"
    //       />
    //     </Form.Item>
    //   </div>

    //   <div className="flex gap-x-4">
    //     <div className="flex-[0.6]">
    //       <Form.Item<FieldType>
    //         label="Street Address"
    //         name="streetAddress"
    //         layout="vertical"
    //         rules={[
    //           { required: true, message: "Please input your street address!" },
    //         ]}
    //       >
    //         <Input
    //           placeholder="123 Main Street"
    //           className="rounded-[50px] h-[60px] w-full"
    //         />
    //       </Form.Item>
    //     </div>

    //     <div className="flex-[0.4]">
    //       <Form.Item<FieldType>
    //         label="Zip"
    //         name="zip"
    //         layout="vertical"
    //         rules={[{ required: true, message: "Please input your zip!" }]}
    //       >
    //         <Input
    //           placeholder="Zip"
    //           className="rounded-[50px] h-[60px] w-full"
    //         />
    //       </Form.Item>
    //     </div>
    //   </div>

    //   <div>
    //     <Form.Item<FieldType>
    //       label="Email"
    //       name="email"
    //       layout="vertical"
    //       rules={[{ required: true, message: "Please input your email!" }]}
    //     >
    //       <Input
    //         placeholder="example@gmail.com"
    //         className="rounded-[50px] h-[60px] w-full"
    //       />
    //     </Form.Item>
    //   </div>

    //   <div className="flex gap-x-4">
    //     <div className="flex-[0.5] flex gap-x-3">
    //       <Form.Item<FieldType>
    //         label="Expiration Month"
    //         name="month"
    //         layout="vertical"
    //         rules={[{ required: true, message: "Required!" }]}
    //       >
    //         <Input
    //           placeholder="Month"
    //           className="rounded-[50px] h-[60px] w-full"
    //           type="number"
    //           max={12}
    //         />
    //       </Form.Item>
    //       <Form.Item<FieldType>
    //         label="Expiration Year"
    //         name="year"
    //         layout="vertical"
    //         rules={[{ required: true, message: "Required!" }]}
    //       >
    //         <Input
    //           placeholder="Year"
    //           className="rounded-[50px] h-[60px] w-full"
    //           type="number"
    //         />
    //       </Form.Item>
    //     </div>

    //     <div className="flex-[0.5]">
    //       <Form.Item<FieldType>
    //         label="Security Code"
    //         name="security_code"
    //         layout="vertical"
    //         rules={[
    //           { required: true, message: "Please input your security code!" },
    //         ]}
    //       >
    //         <Input
    //           placeholder="Security code"
    //           className="rounded-[50px] h-[60px] w-full"
    //         />
    //       </Form.Item>
    //     </div>
    //   </div>

    //   <div className="">
    //     <Checkbox>
    //       I agree to the{" "}
    //       <span className="text-[#0874DE]">Customer Agreement</span>  and
    //       understand that HOUSEFAX may not have the complete history of every
    //       vehicle.
    //     </Checkbox>
    //   </div>

    //   <Form.Item className="mt-[-20px]">
    //     <Button
    //       type="primary"
    //       htmlType="submit"
    //       shape="round"
    //       size="large"
    //       icon={<MoveRight width={15} />}
    //       iconPosition="end"
    //     >
    //       BUY YOUR REPORTS
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
};

const PaymentMethodsList = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="flex flex-col lg:flex-row gap-y-4">
      <Radio value={1} className="flex  gap-x-4">
        <Image
          src={CreditCardsImage}
          alt="payment method"
          width={200}
          className="mt-3"
        />
      </Radio>
      <Radio value={2} className="flex  gap-x-4">
        <Image
          src={PaypalImage}
          alt="payment method"
          width={110}
          className="mt-4"
        />
      </Radio>
      <Radio value={3} className="flex  gap-x-4">
        <Image
          src={AmzonPayImage}
          alt="payment method"
          width={150}
          className="mt-4"
        />
      </Radio>
    </Radio.Group>
  );
};
