"use client";
import React, { useState } from "react";
import type { FormProps, RadioChangeEvent } from "antd";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { MoveRight } from "lucide-react";
import CreditCardsImage from "@/assets/images/credit-cards.png";
import PaypalImage from "@/assets/images/paypal.png";
import AmzonPayImage from "@/assets/images/amazon-pay.png";
import { USDollar } from "@/lib/price";
import Image from "next/image";

type FieldType = {
  name?: string;
  streetAddress?: string;
  zip?: string;
  email: string;
  month?: number;
  year?: number;
  security_code?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const CheckoutForm = () => {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col gap-y-14 px-12 w-full"
    >
      <div>
        <PaymentMethodsList />
      </div>

      <div>
        <Form.Item<FieldType>
          label="Housedholder Name"
          name="name"
          layout="vertical"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            placeholder="As it Appears on Housed"
            className="rounded-[50px] h-[60px] w-full"
          />
        </Form.Item>
      </div>

      <div className="flex gap-x-4">
        <div className="flex-[0.6]">
          <Form.Item<FieldType>
            label="Street Address"
            name="streetAddress"
            layout="vertical"
            rules={[
              { required: true, message: "Please input your street address!" },
            ]}
          >
            <Input
              placeholder="123 Main Street"
              className="rounded-[50px] h-[60px] w-full"
            />
          </Form.Item>
        </div>

        <div className="flex-[0.4]">
          <Form.Item<FieldType>
            label="Zip"
            name="zip"
            layout="vertical"
            rules={[{ required: true, message: "Please input your zip!" }]}
          >
            <Input
              placeholder="Zip"
              className="rounded-[50px] h-[60px] w-full"
            />
          </Form.Item>
        </div>
      </div>

      <div>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          layout="vertical"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="example@gmail.com"
            className="rounded-[50px] h-[60px] w-full"
          />
        </Form.Item>
      </div>

      <div className="flex gap-x-4">
        <div className="flex-[0.5] flex gap-x-3">
          <Form.Item<FieldType>
            label="Expiration Month"
            name="month"
            layout="vertical"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input
              placeholder="Month"
              className="rounded-[50px] h-[60px] w-full"
              type="number"
              max={12}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Expiration Year"
            name="year"
            layout="vertical"
            rules={[{ required: true, message: "Required!" }]}
          >
            <Input
              placeholder="Year"
              className="rounded-[50px] h-[60px] w-full"
              type="number"
            />
          </Form.Item>
        </div>

        <div className="flex-[0.5]">
          <Form.Item<FieldType>
            label="Security Code"
            name="security_code"
            layout="vertical"
            rules={[
              { required: true, message: "Please input your security code!" },
            ]}
          >
            <Input
              placeholder="Security code"
              className="rounded-[50px] h-[60px] w-full"
            />
          </Form.Item>
        </div>
      </div>

      <div className="">
        <Checkbox>
          I agree to the{" "}
          <span className="text-[#0874DE]">Customer Agreement</span>  and
          understand that HOUSEFAX may not have the complete history of every
          vehicle.
        </Checkbox>
      </div>

      <Form.Item className="mt-[-20px]">
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          size="large"
          icon={<MoveRight width={15} />}
          iconPosition="end"
        >
          BUY YOUR REPORTS
        </Button>
      </Form.Item>
    </Form>
  );
};

const PaymentMethodsList = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value} className="flex">
      <Radio value={1} className="flex  gap-x-4">
        <Image src={CreditCardsImage} alt="payment method" />
      </Radio>
      <Radio value={2} className="flex  gap-x-4">
        <Image src={PaypalImage} alt="payment method" />
      </Radio>
      <Radio value={3} className="flex  gap-x-4">
        <Image src={AmzonPayImage} alt="payment method" />
      </Radio>
    </Radio.Group>
  );
};
