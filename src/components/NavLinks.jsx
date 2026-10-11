"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks({ data }) {
  const pathname = usePathname();

  return (
    <div className="border-t border-b border-gray-100">
      <div className="container mx-auto py-2 flex gap-4">
        {data.map((dat) => {
          const href = `/category/${dat.slug}`;
          const isActive = pathname === href;
          return (
            <Link
              href={href}
              className={`py-1 px-2 rounded-2xl font-semibold transition-colors ${
                isActive ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              key={dat.id}>
              {dat.icon}
              {dat.nameBn}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavLinks;
