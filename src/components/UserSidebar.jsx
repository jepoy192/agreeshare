
import React from "react";
import Link from "next/link";
import SearchBar from "../SearchBar";
const img = '/final-logo-1.svg';
import { FiHeart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const UserNavbar = () => {
  return (
    <nav className="flex justify-around p-2  mt-10 w-[1920px]  shadow-xl">
      <div>
        <img src={img} alt="Logo" width={100} height={29}/>
        </div>

        {/* Search Bar */}
       <div className="flex gap-11 text-align:">
          <SearchBar />
        {/* Agrineeds */}
        <Link href="">
        <FiHeart className="size-25px"/>
        </Link>
        {/* Notification Bell */}
        <Link href="">
        <FaRegBell />
        </Link>
        {/* Profile */}
        <Link href="">
        <CgProfile />
        </Link>
      
      </div>
    </nav>



  );
};

export default UserNavbar;