import React from "react";
import { PtuLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#343a40]">
      <div className="flex justify-around items-center py-5 max-md:flex-col">
        <div>
          <img src={PtuLogo} className="w-[200px]" />
        </div>
        <div className="text-white text-xl max-md:text-center max-md:py-5 max-md:text-lg">
          <h1 className="font-bold">NATIONAL SERVICE SCHEME</h1>
          <h1 className="font-light">PUDUCHERRY TECHNOLOGICAL UNIVERSITY</h1>
          <h1 className="font-light">
            East Coast Road, Pillaichavady, Puducherry - 605014.
          </h1>
          <a href="tel:0416-2655281">
            <h1 className="pt-5">
              <i className="fa fa-phone pr-2"></i> Phone No: 0416-2655281
            </h1>
          </a>
          <a href="mailto:nss@ptuniv.edu.in">
            <h1>
              <i className="fa fa-envelope pr-2"></i>
              Email id: <span>nss@ptuniv.edu.in</span>
            </h1>
          </a>
        </div>
        <div>
          <iframe
            height={300}
            width={700}
            className="shadow-xl  max-sm:w-[90%] max-sm:hidden"
            src="https://maps.google.com/maps?q=pondicherry%20engineering%20college&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
      <div className=" w-full text-center bg-gray-900 text-white font-medium text-xl py-2 max-md:text-lg">
        <h1>
          Developed by{" "}
          <a
            href="https://dc-website.netlify.app/"
            className="hover:underline"
            target="_blank"
          >
            PTU's Website Team
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
