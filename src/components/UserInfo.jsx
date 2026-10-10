"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

function UserInfo() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Successfully signed out");
  };
  console.log(user);

  return (
    <div>
      {user ? (
        <>
          <div className="flex gap-2 justify-center items-center text-center">
            <div className="avatar">
              <div className="w-24">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                />
              </div>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 font-semibold">
                {user.name}
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <div className="border-b border-base-100 pb-2 mb-2">
                  <li className="font-semibold">{user?.name}</li>
                  <li className="font-semibold">{user?.email}</li>
                </div>
                <div className="flex flex-col gap-2 text-lg">
                  <Link className="hover:bg-base-200" href={"/"}>
                    👤 আমার প্রোফাইল
                  </Link>
                  <Link
                    className="hover:bg-base-200 text-red-700"
                    href={"/"}
                    onClick={handleSignOut}>
                    সাইন আউট
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
