import React from "react";
import { Group_photo, Ptu } from "../assets";

const styling = {};

const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover"
        style={{
          backgroundImage: `url(${Ptu})`,
          backgroundAttachment: `fixed`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className="w-full h-screen flex justify-center items-center z-10">
          <div className="z-10 border border-gray-500 px-5 py-5 rounded-3xl w-[60%] flex flex-col items-center max-md:w-[75%] justify-center drop-shadow-xl bg-black bg-opacity-50">
            <h1 className="text-8xl text-white font-semibold max-md:text-4xl">
              We Are NSS <span className="text-[#fd7e14]">PTU</span>
            </h1>
            <p className="text-xl text-white font-semibold text-center py-5 max-md:text-lg">
              We are a family of 150 dedicated volunteer work force who believe
              that welfare of an individual is ultimately the welfare of entire
              nation. We are working hard to ensure that everyone in our society
              who is needy gets the every possible help to lead a dignified
              life.
            </p>
            <h1 className="text-white text-xl font-semibold bg-[#fd7e14] px-2">
              "NOT ME BUT YOU!"
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex  items-center max-md:flex-col">
        <div className="md:w-[40%] flex justify-center">
          <img
            src={Group_photo}
            className="w-[500px] h-[500px] max-md:w-[400px] max-md:h-[400px] object-cover max-md:pt-10"
            alt=""
          />
        </div>
        <div className="w-[60%] max-md:w-[90%] max-md:py-10 flex  gap-10 flex-col max-md:px-10  px-20 ">
          <h1 className="text-[#fd7e14] text-3xl font-bold text-start">
            Message From VC
          </h1>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dignissimos beatae, natus nulla ex maxime aspernatur, distinctio
            ipsa, pariatur id quia! Assumenda deleniti, totam veritatis
            blanditiis suscipit nihil voluptatibus. Optio? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eveniet ex est iure sed. Magnam
            cupiditate libero placeat laudantium unde, itaque repellendus,
            quibusdam harum natus ad reprehenderit sunt deleniti aspernatur
            excepturi!
          </h1>
        </div>
      </div>
      <div className="w-full flex px-10 items-center py-10 max-md:flex-col max-md:px-5">
        <div className="md:w-1/2">
          <div className="border-l-2  border-[#fd7e14]">
            <h1 className="text-xl font-bold pl-10">Who we are?</h1>
            <p className="px-10 py-5 text-lg text-justify max-md:text-sm">
              NSS at Puducherry Technological University is aimed at providing
              each student with a significant context in which he/she can reach
              a deeper understanding of social reality in India today. NSS
              encourages the meaning of the life through service in today's
              changing world.The volunteers of this organisation have the motto
              “Not me, but you”. This is the showcase for the belief in
              selflessness and is reflected in their work to ensure everyone in
              need gets help making true the words that we rise by uplifting
              others. The activities taken up by the volunteers from PTU include
              Vidyadaan, Cloth Donation, Blood donation camps and orphanage
              visits.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={Group_photo} className="max-md:py-10" />
        </div>
      </div>
      <div className="w-full flex px-10 gap-10 items-center max-md:flex-col-reverse max-md:px-5">
        <div className="md:w-1/2">
          <img src={Group_photo} />
        </div>
        <div className="md:w-1/2 border-l-2 border-[#fd7e14] ">
          <h1 className="text-xl font-bold pl-10">What we do?</h1>
          <div className="px-10 py-5 text-lg text-justify max-md:text-sm">
            <p className=" py-5 text-lg text-justify max-md:text-sm">
              Spreading happiness through community service has been one of the
              primary objectives of NSS. With innovative activities across the
              departments catering to all classes of the campus residents, we
              try to create small, happy and memorable moments in their lives.
              We aim to bring about a positive change in the society with focus
              on education and development.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:h-screen flex justify-center items-center max-md:py-20">
        <div className="w-full flex justify-around px-10 gap-10 max-md:flex-col max-md:justify-center">
          <div className="w-1/2 max-md:w-full">
            <div className="">
              <div className="bg-[#343a40] py-2 text-white text-2xl text-center font-bold rounded-t-2xl">
                <h1>Latest News</h1>
              </div>
              <div className="border border-[#343a40] p-5 flex flex-col gap-5 h-[400px] overflow-y-auto rounded-b-2xl">
                <div className="border-b-2 border-[#343a40] pb-2.5">
                  <h1 className="font-bold text-3xl pb-1">Heading 1</h1>
                  <h1 className="text-xl py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolorem ex libero deserunt veritatis incidunt iure?
                    Aliquid, est, dicta repellat at facere laudantium
                    consectetur repudiandae dolor, assumenda a nulla vel?
                  </h1>
                  <button className="bg-[#fd7e14] px-5 py-2 text-lg text-white rounded-lg font-bold pb-3">
                    Know More
                  </button>
                </div>
                <div className="border-b-2 border-[#343a40] pb-2.5">
                  <h1 className="font-bold text-3xl pb-1">Heading 2</h1>
                  <h1 className="text-xl py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolorem ex libero deserunt veritatis incidunt iure?
                    Aliquid, est, dicta repellat at facere laudantium
                    consectetur repudiandae dolor, assumenda a nulla vel?
                  </h1>
                  <button className="bg-[#fd7e14] px-5 py-2 text-lg text-white rounded-lg font-bold pb-3">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 max-md:w-full">
            <div className="">
              <div className="bg-[#343a40] py-2 text-white text-2xl text-center font-bold rounded-t-2xl">
                <h1>Latest Events</h1>
              </div>
              <div className="border border-[#343a40] p-5 flex flex-col gap-5 h-[400px] overflow-y-auto rounded-b-2xl">
                <div className="border-b-2 border-[#343a40] pb-2.5">
                  <h1 className="font-bold text-3xl pb-1">Heading 1</h1>
                  <h1 className="text-xl py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolorem ex libero deserunt veritatis incidunt iure?
                    Aliquid, est, dicta repellat at facere laudantium
                    consectetur repudiandae dolor, assumenda a nulla vel?
                  </h1>
                  <button className="bg-[#fd7e14] px-5 py-2 text-lg text-white rounded-lg font-bold pb-3">
                    Know More
                  </button>
                </div>
                <div className="border-b-2 border-[#343a40] pb-2.5">
                  <h1 className="font-bold text-3xl pb-1">Heading 2</h1>
                  <h1 className="text-xl py-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum dolorem ex libero deserunt veritatis incidunt iure?
                    Aliquid, est, dicta repellat at facere laudantium
                    consectetur repudiandae dolor, assumenda a nulla vel?
                  </h1>
                  <button className="bg-[#fd7e14] px-5 py-2 text-lg text-white rounded-lg font-bold pb-3">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
