"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

function UserInfo() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user);

  return (
    <div>
      {user ? (
        <>
          <div className="flex gap-2 justify-center items-center text-center">
            <div className="avatar">
              <div className="w-24 rounded">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                />
              </div>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Click
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <div>
                  <li>{user?.name}</li>
                  <li>{user?.email}</li>
                </div>
                <li>
                  <a>👤 আমার প্রোফাইল</a>
                </li>
                <li className="text-red-700"> সাইন আউট</li>
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
