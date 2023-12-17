import React from "react";
import Link from "next/link";
const img = '/final-logo-1.svg';

const Navbar = () => {


  return (
    <nav className="flex flex-row justify-around p-4 mt-10 w-[1980px] shadow-xl">
      <div>
        <img src={img} alt="Logo" width={74} height={29}/>
      </div>
      <div className="flex gap-11">
        <Link href="/home">
          <div>Home</div>
        </Link>
        <Link href="/About">
          <div>About Us</div>
        </Link>
        <Link href="/news">
          <div>News</div>
        </Link>
        <Link href="/contact">
          <div>Contact Us</div>
        </Link>
      </div>
      <div className="flex gap-7">
        <Link href="/Signin">
          <button className="rounded-[43px] bg-gradient-to-r from-green-500 to-yellow-500 hover:to-yellow-600 px-8 py-3">
            Sign In
          </button>
        </Link>
        <Link href="/Signup">
          <button className="rounded-[43px] bg-gradient-to-r from-green-500 to-yellow-500 hover:to-yellow-600 px-8 py-3">
            Sign Up
          </button>
        </Link>
        <Link href="/User">
          <button className="rounded-[43px] bg-gradient-to-r from-green-500 to-yellow-500 hover:to-yellow-600 px-8 py-3">
            User Side
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;