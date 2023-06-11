import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";

import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex w-full justify-between px-[7%] py-8">
      <Link href="/" passHref>
        <a className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Afrigives logo"
            className="mr-3 rounded-[4px]"
            width={24}
            height={24}
          />
          <h1 className="hidden font-bold md:block">Afrigives</h1>
        </a>
      </Link>

      <nav className="hidden gap-[48px] font-medium opacity-[0.48] md:flex">
        <Link href="/">About</Link>
        <Link href="/">Product</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Download</Link>
      </nav>

      <div>
        <IoReorderThree size={24} color="#292D32" />
      </div>
    </div>
  );
};

export default Header;
