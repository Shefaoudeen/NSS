import React from "react";
import { Group_photo } from "../assets";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh] gap-10 py-[100px]">
      <div>
        <h1 className="text-3xl font-bold underline">Events</h1>
      </div>
      <div className="flex gap-10 max-md:flex-col max-md:px-10">
        <div className=" bg-[#343a40] rounded-3xl shadow-2xl text-white">
          <img src={Group_photo} alt="" width={500} className="rounded-t-3xl" />
          <h1 className="font-bold text-2xl text-center py-2">
            National Level NSS Camps
          </h1>
        </div>
        <Link to="/bloodDonation">
          <div className=" bg-[#343a40] rounded-3xl shadow-2xl text-white">
            <img
              src={Group_photo}
              alt=""
              width={500}
              className="rounded-t-3xl"
            />
            <h1 className="font-bold text-2xl text-center py-2">
              Blood Donation Camp
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Events;
