import React from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-8 py-2  bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center ">
        <Image src="/gharnexa-logo.png" width={210} height={70} alt="logo" />
      </div>

      <div className="flex items-center justify-between gap-8">
        {/* menu */}
        <ul className="hidden md:flex gap-10 font-medium text-black  ">
          {[
            "Home",
            "Construct",
            "Design",
            "Marketplace",
            "Projects",
            "Experts",
            "About Us",
          ].map((item) => (
            <li
              key={item}
              className="border-b-2 border-transparent pb-1 cursor-pointer hover:text-orange-500 hover:border-orange-500"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons  */}
        <div className=" hidden md:flex items-center gap-4 text-black">
          <button className="flex items-center gap-1 border px-3 py-2 rounded-full font-semibold">
            <CiLocationOn className="text-orange-500" />
            Pune
            <MdKeyboardArrowDown />
          </button>
          <div className="relative text-3xl">
            <IoCartOutline />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ">
              3
            </span>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold">
            Login / Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
