import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoReorderThree } from "react-icons/io5";

import Logo from "../assets/logo.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="px-[7%] py-8 w-full flex justify-between">
      <Link href="/" passHref>
        <a className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Afrigives logo"
            className="rounded-[4px] mr-3"
            width={24}
            height={24}
          />
          <h1 className="hidden font-bold md:block">Afrigives</h1>
        </a>
      </Link>

      <nav className="hidden md:flex gap-[48px] font-medium opacity-[0.48]">
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
