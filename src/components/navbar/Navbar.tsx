import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "@/components/active-link/ActiveLink";

export interface INavItem {
  path: string;
  label: string;
}

const navItems: INavItem[] = [
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/pricing", label: "Pricing" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map(({ path, label }, index) => (
        <ActiveLink key={index} path={path} label={label} />
      ))}
    </nav>
  );
};
