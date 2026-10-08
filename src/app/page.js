import Banner from "@/components/Banner";
import SectionCard from "@/components/itemSection/SectionCard";

import { toBanglaNumber } from "./numberConvert";

export default async function Home() {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();

  const priceUp = data
    .filter((dat) => dat.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const priceDown = data
    .filter((dat) => dat.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div>
      <div className="bg-base-300 pt-10 pb-10">
        <Banner />
        <div className="container mx-auto">
          <div className="mb-15">
            <h1 className="items-center mb-5">
              <span className="text-red-600">▲</span>{" "}
              <span className="text-xl font-semibold">আজ দাম বেড়েছে</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2">
              {priceUp.map((price) => (
                <SectionCard key={price.id} price={price} />
              ))}
            </div>
          </div>
          <div className="mb-15">
            <h1 className="items-center mb-5">
              <span className="text-[#1A9951]">▼</span>{" "}
              <span className="text-xl font-semibold">আজ দাম কমেছে</span>
            </h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-2">
              {priceDown.map((price) => (
                <SectionCard key={price.id} price={price} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="items-center mb-10">
              <span className="text-xl font-semibold">সব পণ্য</span>
              <p className="mt-3">
                মোট {toBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে
              </p>
            </h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-2">
              {data.map((price) => (
                <SectionCard key={price.id} price={price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
