import { GiShoppingCart } from "react-icons/gi";

export default function LoadingPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 bg-linear-to-b from-green-50 to-white">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-green-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#05893E] animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl">
          <GiShoppingCart className="text-white text-5xl" />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xl font-semibold text-[#05893E]">লোড হচ্ছে...</p>
        <p className="mt-1 text-sm text-gray-500">
          আজকের দাম নিয়ে আসা হচ্ছে, একটু অপেক্ষা করুন
        </p>
      </div>

      <div className="flex gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#05893E] animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#05893E] animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#05893E] animate-bounce"></span>
      </div>
    </div>
  );
}
