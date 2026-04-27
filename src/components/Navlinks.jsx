"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

const Navlinks = ({ href, children }) => {
  const pathname = usePathname();
  console.log(" pathname", pathname);

  const isActive = pathname === href;
  return (
    <Link href={href} className={isActive ? "border-b-red-500 border-b-2" : ""}>
      {children}
    </Link>
  );
};

export default Navlinks;
