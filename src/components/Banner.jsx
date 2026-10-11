import Image from "next/image";
import Link from "next/link";

function Banner() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="mx-auto mb-10 grid w-full max-w-7xl grid-cols-1 items-center gap-6 rounded-3xl bg-white p-4 sm:p-6 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div>
        <h3 className="inline rounded-2xl bg-base-300 px-3 py-1 text-[#05893E]">
          {date}
        </h3>

        <h1 className="mb-6 mt-5 text-3xl font-bold sm:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="mb-8 text-justify leading-8">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <Link
          href="#all"
          className="btn rounded-xl border-0 bg-[#05893E] text-white hover:bg-[#047531]">
          সব পণ্য দেখুন
        </Link>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <Image
          src="/bazar-hero.png"
          alt="আজকের বাজারের পণ্যের চিত্র"
          width={400}
          height={400}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export default Banner;
