'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ text, route }) => {
  const path = usePathname()
  
  return (
    <div className="navItem">
      <Link href={route} className={path == route ? "navItemHasFocus" : ""}>{text}</Link>
    </div>
  );
};

export default NavItem;
