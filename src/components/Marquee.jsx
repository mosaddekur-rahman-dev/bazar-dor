import { toBanglaNumber } from "@/app/numberConvert";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

async function Marquee() {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const allData = await res.json();

  const data = allData.slice(0, 15);

  return (
    <div className="py-2">
      <MarqueeText direction="right" duration={10}>
        {data.map((dat) => (
          <Link key={dat.id} href={`/product/${dat.id}`}>
            <button
              className="inline-flex items-center gap-5 mx-5 text-md
              hover:bg-base-200 hover:underline">
              <span>
                <span> {dat.categoryIcon} </span>
                <span className="mr-1">{dat.nameBn} </span>
                <span className="mr-2">
                  {toBanglaNumber(dat.today)} টাকা/কেজি
                </span>
                <span
                  className={`${dat.change.dir === "up" ? "text-red-600" : "text-green-700"}`}>
                  {dat.change.dir === "up" ? "▲" : "▼"}{" "}
                </span>
                <span
                  className={`${dat.change.dir === "up" ? "text-red-700" : "text-green-700"}`}>
                  {toBanglaNumber(dat.change.pct)}%
                </span>
              </span>
            </button>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
}

export default Marquee;
