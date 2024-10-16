"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import MobileNav from "./MobileNav";
import Cart from "./Cart";
import { RiAccountCircleLine } from "react-icons/ri";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import LineSvg from "@/lib/LineSvg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className="w-full p-3 md:px-5 xs:py-6 grid grid-cols-3 items-center 
      fixed z-[1111] bg-background/75 backdrop-blur-md
    "
    >
      <nav className="hidden lg:block">
        <ul className="flex gap-5 xl:gap-8 transition-all ">
          <li
            className="relative h-20 -mb-14"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              className="group hover:opacity-70"
              href={"/#"}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              Каталог
            </Link>
            <DropdownMenu isOpen={dropdownOpen} />
          </li>
          <li>
            <Link className="relative group hover:opacity-70" href={"/about"}>
              О нас
              <LineSvg className="-left-4 -right-4 -bottom-7" />
            </Link>
          </li>
          <li>
            <Link
              className="relative group hover:opacity-70"
              href={"/contacts"}
            >
              Контакты
              <LineSvg className="-left-2 -right-2 -bottom-8" />
            </Link>
          </li>
          <li>
            <Link className="relative group hover:opacity-70" href={"/reviews"}>
              Отзывы
              <LineSvg className="-left-2 -right-2 -bottom-7" />
            </Link>
          </li>
        </ul>
      </nav>
      <MobileNav />
      <Link
        href={"/"}
        className="text-2xl text-foreground font-serif
        text-center"
      >
        MiDori
      </Link>
      <div className="flex items-center gap-5 md:gap-8 transition-all *:hover:*:opacity-70 justify-end">
        <button className="hidden sm:block">
          <IoSearch className="size-5 transition-all duration-300" />
        </button>
        <button>
          <RiAccountCircleLine className="size-6 transition-all duration-300" />
        </button>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
