import { toBanglaNumber } from "@/app/numberConvert";
import Link from "next/link";
function SectionCard({ price }) {
  return (
    <Link href={`/product/${price.id}`}>
      <div className=" bg-white py-5 px-5 mb-5 block rounded-2xl hover:border-[[#05893E]">
        <div className="flex gap-5 ">
          <div className="w-15 h-15 flex justify-start items-center">
            <div className="bg-base-200 rounded-2xl">
              <span className="text-4xl flex justify-center items-center p-2">
                {price.categoryIcon}
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-10">
            <span className="text-xl font-semibold">{price.nameBn}</span>
            <span>Per {price.unit}</span>
          </div>
        </div>
        <div className="mb-1">
          <p>আজকের দাম</p>
        </div>
        <div className="flex justify-between items-center gap-20">
          <h2>
            <span className="text-3xl font-semibold">
              {toBanglaNumber(price.today)}
            </span>{" "}
            টাকা
          </h2>
          <p className="items-center">
            <span
              className={`${price.change.dir === "up" ? "text-red-600" : "text-green-700"}`}>
              {price.change.dir === "up" ? "▲" : "▼"}{" "}
            </span>
            <span
              className={`${price.change.dir === "up" ? "text-red-700" : "text-green-700"}`}>
              {toBanglaNumber(price.change.pct)}%
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SectionCard;
