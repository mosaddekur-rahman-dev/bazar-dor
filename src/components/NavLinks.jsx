import Link from "next/link";

async function NavLinks() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();

  return (
    <div className="flex gap-7">
      {data.map((dat) => (
        <Link
          className="hover:bg-gray-200 py-1 px-2 roudned-2xl font-semibold"
          key={dat.id}
          href={`/category/${dat.slug}`}>
          {dat.icon}
          {dat.nameBn}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
