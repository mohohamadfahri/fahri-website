"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IMenu {
  href: string;
  label: string;
}

const menu: IMenu[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/mentorship",
    label: "Mentorship",
  },
  {
    href: "/portofolio",
    label: "Portofolio",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="py-[50px] pb-[45px] border-b border-[#4D4D4D] flex justify-between">
      <h1 className="font-bold tracking-[0.5px] text-2xl">Fahri Kurniawan</h1>

      <div className="flex gap-[64px]">
        {menu.map((menuItem, index) => (
          <Link
            key={index}
            href={menuItem.href}
            className={cn(
              "font-semibold tracking-[1px] text-[#D1D1D1]",
              pathname === menuItem.href && "text-white"
            )}
          >
            {menuItem.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
