import React from "react";
import { Group_photo } from "../assets";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex gap-10">
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
