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
import toast from "react-hot-toast";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Successfully Signed In");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="bg-base-300 pt-5 h-fit flex flex-col items-center justify-center">
      <div className="container flex gap-5 mx-auto justify-center items-center">
        <div className="text-center flex flex-col gap-2 mb-2">
          <h1 className="text-2xl font-semibold">সাইন ইন</h1>
          <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
        </div>
      </div>
      <div className="container mx-autoflex flex-col  justify-center bg-white mb-5 p-10 w-150 rounded-2xl">
        <Form
          className="flex flex-col gap-4 justify-center"
          onSubmit={onSubmit}>
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

          <div className="flex justify-center items-center ">
            <button
              className="btn btn-success w-full bg-[#05893E] text-white"
              type="submit">
              সাইন ইন
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
              onClick={handleGoogleSignIn}
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
              অ্যাকাউন্ট নেই ?
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
