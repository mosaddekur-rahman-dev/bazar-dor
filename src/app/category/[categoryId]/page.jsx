import { toBanglaNumber } from "@/app/numberConvert";
import SectionCard from "@/components/itemSection/SectionCard";
async function CategoryItems({ params }) {
  const { categoryId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();

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
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 container mx-auto">
        {data.map((dat) => (
          <div key={dat.id} className="w-full">
            <SectionCard price={dat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryItems;
