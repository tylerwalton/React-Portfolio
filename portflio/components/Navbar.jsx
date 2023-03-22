import React from "react";
import Image from "next/image";
import Link from 'next/link';
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="fixed w-full h-30 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 sxl:px-16">
        <Image src="/../public/assets/TW.png" alt="/" width="110" height="40" />
        <div>
          <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  <Link href="/">Home</Link>
                </li>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  <Link href="/#about">About</Link>
                </li>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  <Link href="/#skills">Skills</Link>
                </li>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  <Link href="/#projects">Projects</Link>
                </li>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  <Link href="/resume">Resume</Link>
                </li>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  <Link href="/#contact">Contact</Link>
                </li>
              </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
