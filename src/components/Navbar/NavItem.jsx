"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ text, route }) => {
  const path = usePathname();

  return (
    <Link
      href={route}
      className={`${
        route == path ? "bg-slate-700" : ""
      } + hover:bg-slate-400 hover:text-slate-900 px-4 py-2  mx-1 rounded-4xl w-36 text-2xl`}
    >
      {text}
    </Link>
  );
};

export default NavItem;
