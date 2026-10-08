import { GiShoppingCart } from "react-icons/gi";
import NavLinks from "./NavLinks";
import Link from "next/link";

function Header() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="container mx-auto pt-5 flex flex-col gap-3 mb-5 ">
      <div className="flex justify-between">
        <Link href={"/"}>
          <div id="headerLogo" className="flex gap-2 items-center">
            <div>
              <GiShoppingCart className="w-12 h-12 p-1 bg-[#05893E] rounded-xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">বাজার দর</h1>
              <p>{date}</p>
            </div>
          </div>
        </Link>
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
      </div>
      <NavLinks />
    </div>
  );
}

export default Header;
