"use client";

import { authClient } from "@/lib/auth-client";
import {
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
      redirect("/");
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-base-300 pt-5 h-fit flex flex-col items-center justify-center">
      <div className="container flex gap-5 mx-auto justify-center items-center">
        <div className="text-center flex flex-col gap-2 mb-5">
          <h1 className="text-2xl font-semibold">অ্যাকাউন্ট তৈরি করুন</h1>
          <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
        </div>
      </div>
      <div className="container mx-autoflex flex-col  justify-center bg-white mb-5 p-10 w-150 rounded-2xl">
        <Form
          className="flex flex-col gap-4 justify-center"
          onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (value.trim().length < 2) {
                return "নাম কমপক্ষে ২ অক্ষরের হতে হবে";
              }

              return null;
            }}>
            <Label>নাম</Label>
            <Input placeholder="যেমন: রহিম উদ্দিন" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}>
            <Label>ইমেইল</Label>
            <Input placeholder="you@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}>
            <Label>পাসওয়ার্ড</Label>
            <Input placeholder="কমপক্ষে ৮ অক্ষর" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="confirmPassword"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}>
            <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
            <Input placeholder="আবার লিখুন" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex justify-center items-center ">
            <button
              className="btn btn-success w-full bg-[#05893E] text-white"
              type="submit">
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </div>
          <div className="flex justify-between gap-2 items-center">
            <span className="border border-gray-400 h-0.5 w-full"></span>
            <span>অথবা</span>
            <span className="border border-gray-400 h-0.5 w-full"></span>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="py-2 btn flex items-center cursor-pointer">
              <Image
                src={"/google-logo.webp"}
                width={50}
                height={20}
                alt="Google Logo"
              />{" "}
              <span>Google দিয়ে চালিয়ে যান</span>
            </button>
            <button
              type="button"
              className="py-2 btn flex items-center gap-2 cursor-pointer">
              <Image
                src={"/images.png"}
                width={30}
                height={20}
                alt="Google Logo"
              />{" "}
              <span>GitHub দিয়ে চালিয়ে যান</span>
            </button>
          </div>
          <div>
            <p className="text-center">
              অ্যাকাউন্ট নেই?
              <Link href={"/sign-in"}>
                <span className=" text-[#05893E]"> সাইন আপ করুন</span>
              </Link>
            </p>
          </div>
        </Form>
      </div>
      <div className="text-center mb-5">
        <Link href={"/"}>
          <p>← হোম পেজে ফিরে যান</p>
        </Link>
      </div>
    </div>
  );
}
