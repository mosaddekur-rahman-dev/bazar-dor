"use client";

import { authClient } from "@/lib/auth-client";
import {
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Successfully signed out");
  };
  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData);

    await authClient.updateUser({
      ...newUserData,
    });
  };
  return (
    <div>
      <div className="container mx-auto w-150 text-start mt-15 mb-20 bg-base-200">
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-2xl font-semibold">আমার প্রোফাইল</h1>
          <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>
        <div className="flex justify-between bg-white items-center p-10 rounded-2xl mb-5">
          <div className="flex gap-5 items-center text-start rounded-2xl">
            <div className="avatar">
              <div className="w-40">
                <Image
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image}
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{user?.name}</h2>
              <p>{user?.email}</p>
            </div>
          </div>
          <div>
            <Link href={"/"}>
              <button
                onClick={handleSignOut}
                className="text-red-700 border border-red-600 p-2 rounded-xl">
                সাইন আউট
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white w-150 rounded-2xl">
          <h2 className="text-2xl font-semibold p-5">তথ্য</h2>
          <div className=" items-center flex flex-col gap-4 justify-center pl-20 pb-10 w-130">
            <Form
              className="flex flex-col gap-4 justify-center w-full"
              onSubmit={handleUpdate}>
              <TextField isRequired className="w-full" name="name" type="text">
                <Label>নাম</Label>
                <Input className="w-full" placeholder="যেমন: রহিম উদ্দিন" />
                <FieldError />
              </TextField>
              <button
                type="submit"
                className="btn btn-success bg-[#05893E] text-white w-full">
                আপডেট{" "}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
