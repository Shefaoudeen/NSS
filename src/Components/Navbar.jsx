import React from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <a className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
            HOME
          </a>
        </Link>
        <Link to="/about">
          <a className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
            ABOUT
          </a>
        </Link>
        <Link to="/events">
          <a className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
            EVENT
          </a>
        </Link>
        <a className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
          TEAM
        </a>
        <a className="hover:bg-gray-600 px-2 py-1 rounded-md delay-100 ease-linear cursor-pointer">
          AWARDS
        </a>
      </div>
    </div>
  );
};

export default Navbar;
