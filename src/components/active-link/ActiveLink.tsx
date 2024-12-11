"use client";

import Link from "next/link";
import { INavItem } from "@/components/navbar/Navbar";
import style from "@/components/active-link/ActiveLink.module.css";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ path, label }: INavItem) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      {label}
    </Link>
  );
};
