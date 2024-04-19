import React from "react";
import { Logo } from "../assets";

const Navbar = () => {
  return (
    <div className="fixed z-50 top-0 w-full bg-[#343a40] py-1 flex justify-between px-5 ">
      <div className="flex justify-center items-center gap-3 cursor-pointer">
        <div>
          <img src={Logo} width={70} />
        </div>
        <div className="text-white">
          <h1 className="font-semibold">NATIONAL SERVICE SCHEME</h1>
          <h1>Puducherry Technological University</h1>
        </div>
      </div>
      <div className="flex items-center gap-5 text-white font-semibold">
        <button className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
          HOME
        </button>
        <button className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
          ABOUT
        </button>
        <button className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
          EVENT
        </button>
        <button className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
          TEAM
        </button>
        <button className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
          AWARDS
        </button>
        <button className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
          MORE
        </button>
      </div>
    </div>
  );
};

export default Navbar;
