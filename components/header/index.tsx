import Link from "next/link";
import React from "react";
import { NavigationMenuDemo } from "./navbar/nav";
import CommandSearch from "./commandSearch";

const Header = () => {
  return (
    <header className="w-full py-8 shadow-sm bg-white dark:bg-gray-950 dark:text-gray-50">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link
            className="flex items-center space-x-2 text-2xl font-semibold tracking-wider sm:text-3xl"
            href="/"
          >
            <FishIcon className="w-6 h-6 rounded-lg aspect-square overflow-hidden" />
            <span className="hidden md:inline">Pokémon</span>
          </Link>
        </div>
        <NavigationMenuDemo />
        <div className="flex items-center space-x-4">
          <CommandSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;

function FishIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}
