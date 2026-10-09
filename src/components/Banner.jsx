import Image from "next/image";
import Link from "next/link";

function Banner() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="container mx-auto bg-white p-5 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-70 mb-10">
      <div>
        <h3 className="text-[#05893E] bg-base-300 inline py-1 px-3 rounded-2xl">
          {date}
        </h3>
        <h1 className="mt-5 text-4xl font-bold mb-10">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="text-justify mb-15">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link href={"#all"}>
          <button className="btn btn-success bg-[#05893E] text-white rounded-xl">
            সব পণ্য দেখুন
          </button>
        </Link>
      </div>
      <div>
        <Image
          src="/bazar-hero.png"
          alt="Banner Image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default Banner;
