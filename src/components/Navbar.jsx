import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-around p-4 mt-10 w-[1980px]">
      <div className="md:text-green-500">LOGO</div>

      <div className="flex gap-11">
        <div>Home</div>
        <Link href="/about">
          <div>About Us</div>
        </Link>
        <Link href="/News">
          <div>News</div>
        </Link>
        <Link href="/contact">
          <div>Contact Us</div>
        </Link>
      </div>
      <div className="flex gap-7">
        <Link href="/">
          <button className="rounded-[43px] bg-green-500 px-8 py-3">
            Sign In
          </button>
        </Link>
        <Link href="/contact">
          <button className="rounded-[43px] bg-green-500 px-8 py-3">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
