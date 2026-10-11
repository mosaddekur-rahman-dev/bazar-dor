"use client";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

function UserInfo() {
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

  console.log(user);

  return (
    <div>
      {user ? (
        <>
          <div className="flex gap-2 justify-center items-center text-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 font-semibold">
                {user?.name}
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <div className="border-b border-base-100 pb-2 mb-2">
                  <li className="font-semibold">{user?.name}</li>
                  <li className="font-semibold">{user?.email}</li>
                </div>
                <div className="flex flex-col gap-2 text-lg">
                  <Link className="hover:bg-base-200" href={"/profile"}>
                    👤 আমার প্রোফাইল
                  </Link>
                  <Link href={"/"} className="hover:bg-base-200">
                    <button
                      className=" text-red-700 cursor-pointer"
                      onClick={handleSignOut}>
                      সাইন আউট
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="flex gap-2 items-center">
          <Link href={"/sign-in"}>
            <button className="btn py-2 px-4 bg-white border-0">সাইন ইন</button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn btn-success py-2 px-4 bg-[#05893E] rounded-xl text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
