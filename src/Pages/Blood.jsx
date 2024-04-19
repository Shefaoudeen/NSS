import React from "react";
import { Group_photo } from "../assets";

const Blood = () => {
  return (
    <div className="min-h-[100vh]">
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${Group_photo})`,
          backgroundRepeat: `no-repeat`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div className="z-10 border border-gray-500 px-5 py-5 rounded-3xl w-[80%] flex flex-col  justify-center drop-shadow-xl bg-black bg-opacity-40">
          <h1 className="text-5xl text-white font-semibold">
            BLOOD <span className="text-[#bb0a1e]">DONATION</span>
          </h1>
          <p className="text-xl text-white font-semibold text-center py-10 max-md:text-lg">
            Life of some patients is resting on a fraction of hope in quest of
            your gift of love.
          </p>
        </div>
      </div>
      <div className="flex w-full ">
        <div className="flex items-center max-md:flex-col-reverse">
          <div className="text-6xl font-bold leading-[100px] text-center w-2/5 flex justify-center my-5">
            <div className="w-min bg-rose-200 px-5 py-1 rounded-3xl">
              <h1>
                <span className="text-[#bb0a1e] font-extrabold">B</span>e a{" "}
                <span className="text-[#bb0a1e] font-extrabold">L</span>ife
              </h1>
              <h1>saver for</h1>
              <h1>
                s<span className="text-[#bb0a1e] font-extrabold">O</span>me
                <span className="text-[#bb0a1e] font-extrabold">O</span>ne
              </h1>
              <h1>
                <span className="text-[#bb0a1e] font-extrabold">D</span>onate
              </h1>
            </div>
          </div>
          <div className="w-3/5 px-5 border-l-2 border-[#bb0a1e] pl-5 flex flex-col gap-10 max-md:w-[90%] max-md:my-4">
            <div className="text-xl ">
              <h1 className="text-2xl font-bold text-[#bb0a1e] py-3 max-md:text-xl">
                Who can donate blood ?
              </h1>
              <p className="max-md:text-sm max-md:text-justify">
                The age of the donor must be above <strong>18 years</strong> and
                below <strong>65 years</strong>
                of age. He/she must have a hemoglobin count that is not less
                than <strong>12.5 g/dl</strong>. The Weight should not less than{" "}
                <strong>50kgs</strong>. One should have a normal body
                temperature at the time of donation.{" "}
              </p>
            </div>
            <div className="text-xl">
              <h1 className="text-2xl font-bold text-[#bb0a1e] py-3 max-md:text-xl">
                How often you can donate?
              </h1>
              <p className="max-md:text-sm max-md:text-justify">
                The minimum time advised between two donations is{" "}
                <strong>3 months</strong>. This gap helps blood regain the
                normal hemoglobin count.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-10 max-md:px-5">
        <div className="flex items-center max-md:flex-col">
          <div className="w-3/5 px-5 border-l-2 border-[#bb0a1e] pl-5 flex flex-col gap-10 max-md:w-[100%]">
            <div className="text-xl max-md:text-sm">
              <h1 className="text-2xl font-bold text-[#bb0a1e] py-3 max-md:text-xl">
                What to do before donation?
              </h1>
              <p>
                You should always drink lots of water before the donation. Also,
                keep in mind that you should take a well-balanced meal prior
                (avoid fatty foods like fries or ice cream) to and after
                donating blood. This will keep you healthy and fit.
              </p>
            </div>
            <div className="text-xl max-md:text-sm">
              <h1 className="text-2xl font-bold text-[#bb0a1e] py-3 max-md:text-xl">
                What to do during donation?
              </h1>
              <p>
                Relax, listen to music, talk to other donors or read while you
                donate. Don't get stressed. If you start feeling unwell during
                the donation process, let the staff know immediately. They're
                there to help.
              </p>
            </div>
          </div>
          <div className="text-6xl font-bold leading-[100px] text-center w-2/5 flex justify-center my-5">
            <div className="w-min bg-rose-200 px-5 py-1 rounded-3xl">
              <h1>
                <span className="text-[#bb0a1e] font-extrabold">B</span>e a{" "}
                <span className="text-[#bb0a1e] font-extrabold">L</span>ife
              </h1>
              <h1>saver for</h1>
              <h1>
                s<span className="text-[#bb0a1e] font-extrabold">O</span>me
                <span className="text-[#bb0a1e] font-extrabold">O</span>ne
              </h1>
              <h1>
                <span className="text-[#bb0a1e] font-extrabold">D</span>onate
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20 py-10 max-md:px-5">
        <h1 className="font-bold text-3xl text-[#bb0a1e] underline pb-5 max-md:text-xl">
          What to do after donation?
        </h1>
        <ul className="flex flex-col gap-2 w-full justify-around list-disc text-xl px-20 max-md:px-10 max-md:text-sm">
          <li>
            Keep the strip bandage on for the next several hours; to avoid a
            skin rash, clean the area around the bandage with soap and water.
          </li>
          <li>
            Don’t do any heavy lifting or vigorous exercise for the rest of the
            day.
          </li>
          <li>
            If the needle site starts to bleed, apply pressure and raise your
            arm straight up for 5-10 minutes or until bleeding stops.
          </li>
          <li>
            If you experience dizziness or lightheadedness, stop what you’re
            doing and sit down or lie down until you feel better; avoid
            performing any activity where fainting may lead to injury for at
            least 24 hours.
          </li>
          <li>Keep eating iron-rich foods.</li>
          <li>
            If you donate frequently, be sure to take multivitamins with iron to
            ensure you continue to replenish your iron stores before your next
            donation.
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center pb-5">
        <button className="bg-[#bb0a1e] text-white px-5 py-2 text-xl font-bold rounded-md hover:bg-gray-600 ease-linear delay-100">
          Register Now
        </button>
      </div>
      <div className="flex flex-col px-20 py-10">
        <h1 className="font-bold text-3xl text-[#bb0a1e] underline pb-5">
          Our Previous Camps:
        </h1>
        <div className="w-full flex justify-center overflow-x-auto">
          <div className="flex gap-10">
            <img
              src={Group_photo}
              alt=""
              className="w-[400px] h-[400px] object-cover"
            />
            <img
              src={Group_photo}
              alt=""
              className="w-[400px] h-[400px] object-cover"
            />
            <img
              src={Group_photo}
              alt=""
              className="w-[400px] h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blood;
