import React from "react";
import Link from "next/link";
import SearchBar from "../../components/SearchBar";
const img = '/final-logo-1.svg';

const Navbar = () => {
  return (
    <nav className="flex justify-around p-4 mt-10 w-[1920px]  shadow-xl">
      <div>
        <img src={img} alt="Logo" width={74} height={29}/>
      </div>
      <div className="flex gap-11">
     

          <SearchBar className="text-align-center"/>
        
        <Link href="/About">
          <div>Agrineeds</div>
        </Link>
        <Link href="/news">
          <div>Notification Bell</div>
        </Link>
        <Link href="/contact">
          <div>Profile</div>
        </Link>
      
      </div>
    </nav>
  );
};

export default Navbar;