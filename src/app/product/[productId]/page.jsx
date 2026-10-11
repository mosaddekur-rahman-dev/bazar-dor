import { toBanglaNumber } from "@/app/numberConvert";
import { notFound } from "next/navigation";
async function ProductDetailPage({ params }) {
  const { productId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
  );

  if (!res) {
    throw new Error("Failed to fetch product details");
  }

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to fetch product details");

  const data = await res.json();

  const market = Array.isArray(data.markets) ? data.markets : [];
  const minPriceArr = market.map((dat) => dat.min);
  const minPrice = Math.min(...minPriceArr);
  const maxPriceArr = market.map((dat) => dat.max);
  const maxPrice = Math.max(...maxPriceArr);
  const averagePrice = (minPrice + maxPrice) / 2;

  return (
    <div className="bg-base-200 px-2">
      <div className="container mx-auto">
        <div className="pt-10">
          হোম &gt; {data.categoryNameBn} &gt; {data.nameBn}{" "}
        </div>
        <div>
          <div className="flex gap-5 justify-between bg-white p-10 mt-10 mb-10 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div className="w-25 h-25 pb-2 text-6xl flex justify-center items-center bg-base-200 rounded-2xl">
                {data.categoryIcon}
              </div>
              <div>
                <div className="text-4xl font-semibold pb-2">{data.nameBn}</div>
                <div className="pb-4">প্রতি কেজি · {data.categoryNameBn}</div>
                <div>
                  গতকালের তুলনায় আজ দাম{" "}
                  {data?.change?.dir === "down" ? "কমেছে" : "বেড়েছে"} ·{" "}
                  {Math.abs(data?.change?.pct)} টাকা
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-center bg-base-200 p-5 px-8 rounded-2xl">
              <span>আজকের দাম</span>
              <span className="text-4xl font-semibold">
                {toBanglaNumber(data.today)}
              </span>
              <span>টাকা / {data.unit}</span>
              <span>
                <span
                  className={`${data?.change?.dir === "up" ? "text-red-600" : "text-green-700"}`}>
                  {data?.change?.dir === "up" ? "▲" : ""}{" "}
                  {data?.change?.dir === "down" ? "▼" : ""}{" "}
                </span>
                <span
                  className={`${data?.change?.dir === "up" ? "text-red-700" : "text-green-700"}`}>
                  {toBanglaNumber(data?.change?.pct)}%
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 mb-20">
          <h2 className="pb-5 text-2xl font-semibold">দামের সারসংক্ষেপ</h2>
          <div className="grid gap-10 md:grid-cols-3 mt-5 pl-10 mb-20 ">
            <div className="flex flex-col gap-2 border border-base-200 p-10 rounded-3xl">
              <span>সর্বনিম্ন দাম</span>
              <span className="text-[#1A9951]">
                <span className="text-4xl font-semibold">
                  {toBanglaNumber(minPrice)}{" "}
                </span>
                টাকা
              </span>
              <span>সবচেয়ে কম দামের বাজার</span>
            </div>
            <div className="flex flex-col gap-2 border border-base-200 p-10 rounded-3xl">
              <span>সর্বাধিক দাম</span>
              <span>
                <span className="text-[#D03739]">
                  <span className="text-4xl font-semibold ">
                    {toBanglaNumber(maxPrice)}{" "}
                  </span>
                  টাকা
                </span>
              </span>
              <span>সবচেয়ে বেশি দামের বাজার</span>
            </div>
            <div className="flex flex-col gap-2 border border-base-200 p-10 rounded-3xl">
              <span>গড় দাম</span>
              <span className="text-[#05893E]">
                <span className="text-4xl font-semibold ">
                  {toBanglaNumber(averagePrice)}{" "}
                </span>
                টাকা
              </span>
              <span>প্রতি কেজি-এর হিসাবে</span>
            </div>
          </div>
          <h2 className="mb-15 text-2xl font-semibold">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <div className="overflow-x-auto border border-base-300 rounded-3xl pt-2">
            <table className="table table-lg">
              <thead className="text-xl ">
                <tr>
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th>সর্বনিম্ন</th>
                  <th>সর্বাধিক</th>
                  <th>গড়</th>
                </tr>
              </thead>
              <tbody>
                {market.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center">
                      কোনো বাজারের তথ্য পাওয়া যায়নি
                    </td>
                  </tr>
                ) : (
                  market.map((m) => (
                    <tr key={m.market}>
                      <td>{m.market}</td>
                      <td>{m.division}</td>
                      <td>{toBanglaNumber(m.min)}</td>
                      <td>{toBanglaNumber(m.max)}</td>
                      <td>{toBanglaNumber(Math.round((m.min + m.max) / 2))}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
