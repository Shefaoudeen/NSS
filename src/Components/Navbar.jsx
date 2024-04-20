import React from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, SetNavOpen] = useState(false);

  const handleClick = () => {
    SetNavOpen(!navOpen);
  };

  const content = (
    <div className="z-20">
      <div className="absolute w-screen left-0 text-center h-screen cursor-pointer flex flex-col items-center justify-center gap-10 bg-black text-white -z-20 bg-opacity-75 text-2xl">
        <Link to="/" onClick={handleClick}>
          <div className="-z-10 bg-[#343a40] px-10 py-2 rounded-xl min-w-[40%]">
            <button>HOME</button>
          </div>
        </Link>

        <Link to="/about" onClick={handleClick}>
          <div className="-z-10 bg-[#343a40] px-10 py-2 rounded-xl min-w-[40%]">
            <button>ABOUT</button>
          </div>
        </Link>

        <Link to="/events" onClick={handleClick}>
          <div className="-z-10 bg-[#343a40] px-10 py-2 rounded-xl min-w-[40%]">
            <button>EVNETS</button>
          </div>
        </Link>

        <Link to="/" onClick={handleClick}>
          <div className="-z-10 bg-[#343a40] px-10 py-2 rounded-xl min-w-[40%]">
            <button>TEAM</button>
          </div>
        </Link>

        <Link to="/" onClick={handleClick}>
          <div className="-z-10 bg-[#343a40] px-10 py-2 rounded-xl min-w-[40%]">
            <button>AWARDS</button>
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="fixed z-50 top-0 w-full bg-[#343a40] py-1 flex justify-between px-5">
      <div className="flex justify-center items-center gap-3 cursor-pointer relative z-50">
        <div>
          <img src={Logo} className="min-w-[70px] max-w-[70px] py-1" />
        </div>
        <div className="text-white ">
          <h1 className="font-semibold">NATIONAL SERVICE SCHEME</h1>
          <h1>Puducherry Technological University</h1>
        </div>
      </div>
      {/*
      <button className="flex items-center md:hidden select-none">
        <div className="flex flex-col gap-2.5 border border-white p-2 py-3 rounded-xl">
          <div className="min-w-[50px] min-h-[2px] rounded-xl bg-white"></div>
          <div className="min-w-[50px] min-h-[2px] rounded-xl bg-white"></div>
          <div className="min-w-[50px] min-h-[2px] rounded-xl bg-white"></div>
        </div>
      </button>
        */}
      <div className="flex items-center gap-5 text-white font-semibold max-md:hidden">
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
      <div className="md:hidden">{navOpen && content}</div>
      <button
        className="block sm:hidden transition z-50 text-white font-bold text-xl"
        onClick={handleClick}
      >
        {navOpen ? <FaTimes /> : <CiMenuFries />}
      </button>
    </div>
  );
};

export default Navbar;
