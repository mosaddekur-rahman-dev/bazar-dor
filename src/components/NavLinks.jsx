import Link from "next/link";

async function NavLinks() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();

  return (
    <div className="border-t border-b border-gray-100">
      <div className="container mx-auto py-2 flex gap-4">
        {data.map((dat) => (
          <Link
            className="hover:bg-gray-200 py-1 px-2 roudned-2xl font-semibold link:active:bg-[#05893E]"
            key={dat.id}
            href={`/category/${dat.slug}`}>
            {dat.icon}
            {dat.nameBn}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavLinks;
