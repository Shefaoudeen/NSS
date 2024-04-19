import React from "react";
import { Group_photo, Ptu } from "../assets";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="absolute max-h-[100vh] max-w-full overflow-clip">
        <img src={Ptu} />
      </div>
      <div className="w-full h-screen flex justify-center items-center z-10">
        <div className="z-10 border border-gray-500 px-5 py-5 rounded-3xl w-[60%] flex flex-col items-center justify-center drop-shadow-xl bg-gray-800 bg-opacity-50">
          <h1 className="text-8xl text-white font-semibold">
            We Are NSS <span className="text-[#fd7e14]">PTU</span>
          </h1>
          <p className="text-xl text-white font-semibold text-center py-5">
            We are a family of 150 dedicated volunteer work force who believe
            that welfare of an individual is ultimately the welfare of entire
            nation. We are working hard to ensure that everyone in our society
            who is needy gets the every possible help to lead a dignified life.
          </p>
          <h1 className="text-[#fd7e14] text-xl font-bold">
            "NOT ME BUT YOU!"
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
