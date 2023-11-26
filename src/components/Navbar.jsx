import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <nav className="flex flex-row justify-around p-4 mt-10 w-[1980px]">
      <div className="md:text-green-500">LOGO</div>

      <div className="flex gap-11">
        <Link href="/home">
        <div>Home</div>
        </Link>
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
      <button className="rounded-[43px] bg-green-500 px-8 py-3">
        <Link href="/Signin">
            Sign In
        </Link>
        </button>
        <Link href="/Signup">
          <button className="rounded-[43px] bg-green-500 px-8 py-3">
            Sign Ups
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
