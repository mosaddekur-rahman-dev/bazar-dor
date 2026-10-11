import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-linear-to-b from-green-50 to-white">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl shadow-lg border border-green-100 p-8 sm:p-12">
        <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-[#05893E] flex items-center justify-center text-5xl">
          <GiShoppingCart className="text-white text-5xl" />
        </div>

        <h1 className="text-7xl sm:text-8xl font-extrabold text-[#05893E] tracking-tight">
          ৪০৪
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mt-3 text-gray-500">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, নাম বদলানো
          হয়েছে, অথবা ঠিকানাটি ভুল।
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[#05893E] text-white font-semibold hover:bg-green-700 transition-colors">
            ← হোম পেজে ফিরে যান
          </Link>
          <Link
            href="/#all"
            className="px-6 py-3 rounded-xl border border-[#05893E] text-[#05893E] font-semibold hover:bg-green-50 transition-colors">
            পণ্য দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
