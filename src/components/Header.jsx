import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

async function Header() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data = await res.json();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <>
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
          <UserInfo />
        </div>
      </div>
      <NavLinks data={data} />
    </>
  );
}

export default Header;
