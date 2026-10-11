import { toBanglaNumber } from "@/app/numberConvert";
import SectionCard from "@/components/itemSection/SectionCard";
import Link from "next/link";
import { notFound } from "next/navigation";
async function CategoryItems({ params, searchParams }) {
  const { categoryId } = await params;
  const { sort } = await searchParams;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) notFound();

  if (!res.status) notFound();
  if (!res.ok) throw new Error("Failed to fetch product details");

  const products = [...data];
  if (sort === "asc") {
    products.sort((a, b) => Number(a.today) - Number(b.today));
  } else if (sort === "desc") {
    products.sort((a, b) => Number(b.today) - Number(a.today));
  }

  const sortLabel = sort === "asc" ? "দাম: কম থেকে বেশি" : "দাম: বেশি থেকে কম";

  return (
    <div className="bg-base-300 pt-10 pb-10 ">
      <div
        key={data.id}
        className="flex justify-start items-center bg-white mb-5 container mx-auto  rounded-2xl">
        <div className="flex justify-center items-center  ">
          <div className="flex gap-5 justify-center items-center p-4 ">
            <div className="bg-base-200 rounded-2xl w-15 h-15 ">
              <span className="text-4xl flex items-center justify-center p-2 ">
                {data[0]?.categoryIcon}
              </span>
            </div>
            <div className="flex flex-col mb-5 pt-5">
              <span className="text-xl font-semibold">
                {data[0]?.categoryNameBn}
              </span>
              <p>{toBanglaNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white container mx-auto mb-5  rounded-2xl p-2">
        <div className="flex justify-end items-center gap-2 ">
          <p>সাজান</p>
          <div className="dropdown dropdown-bottom dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              ডিফল্ট ↓
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <Link
                  href="?sort=asc"
                  className={sort === "asc" ? "menu-active" : ""}>
                  দাম: কম থেকে বেশি
                </Link>
              </li>
              <li>
                <Link
                  href="?sort=desc"
                  className={sort === "desc" ? "menu-active" : ""}>
                  দাম: বেশি থেকে কম
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container px-2 mx-auto">
        {products.map((dat) => (
          <div key={dat.id} className="w-full">
            <SectionCard price={dat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryItems;
