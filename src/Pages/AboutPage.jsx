import React from "react";
import { Group_photo } from "../assets";

const AboutPage = () => {
  return (
    <div className="">
      <div
        className="w-full h-screen bg-cover flex justify-center items-center"
        style={{
          backgroundImage: `url(${Group_photo})`,
          backgroundAttachment: `fixed`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className="z-10 border border-gray-500 px-5 py-5 rounded-3xl w-[80%] flex flex-col  justify-center drop-shadow-xl bg-black bg-opacity-40">
          <h1 className="text-5xl text-white font-semibold">
            NSS <span className="text-[#fd7e14]">PTU</span>
          </h1>
          <p className="text-xl text-white font-semibold text-center py-10">
            NSS Chapter at PTU is a family of over 250 volunteers who strive for
            a better society and developing a thought of service in young minds.
          </p>
        </div>
      </div>
      <div className="flex flex-col py-10">
        <div className="w-full flex px-10">
          <div className="w-1/2 border-l-2  border-[#fd7e14]">
            <h1 className="text-xl font-bold pl-10">
              About National Service Scheme (NSS)
            </h1>
            <p className="px-10 py-5 text-lg text-justify">
              The National Service Scheme (NSS) is a Central Sector Scheme of
              Government of India, Ministry of Youth Affairs & Sports. It
              provides opportunity to the student youth of 11th & 12th Class of
              schools at +2 Board level and student youth of Technical
              Institution, Graduate & Post Graduate at colleges and University
              level of India to take part in various Government led community
              service activities & programmes. The primary objective of
              developing the personality and character of the student youth
              through voluntary community service. ‘Education through Service’
              is the purpose of the NSS. NSS was launched in 1969 in 37
              Universities involving about 40,000 volunteers which has now
              spread over 657 Universities and 51 +2 Councils/Directorates,
              covering 20,669 Colleges/ Technical Institutions and 11,988 Senior
              Secondary School. Since inception , over 7.4 crore students have
              benefitted from NSS.
            </p>
          </div>
          <div></div>
        </div>
        <div className="w-full flex px-10">
          <div className="w-1/2"></div>
          <div className="w-1/2 border-l-2 border-[#fd7e14]">
            <h1 className="text-xl font-bold pl-10">
              The NSS Badge Proud to Serve the Nation:
            </h1>
            <div className="px-10 py-5 text-lg text-justify">
              <ul className="list-disc">
                <li className="">
                  All the youth volunteers who opt to serve the nation through
                  the NSS led community service wear the NSS badge with pride
                  and a sense of responsibility towards helping needy.
                </li>

                <li>
                  The Konark wheel in the NSS badge having 8 bars signifies the
                  24 hours of a the day, reminding the wearer to be ready for
                  the service of the nation round the clock i.e. for 24 hours.
                </li>

                <li>
                  Red colour in the badge signifies energy and spirit displayed
                  by the NSS volunteers.
                </li>

                <li>
                  The Blue colour signifies the cosmos of which the NSS is a
                  tiny part, ready to contribute its share for the welfare of
                  the mankind.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-center items-center py-10">
          <div className="w-[40%] border-l-2 border-b-2 border-[#fd7e14] pl-5 pb-2.5">
            <h1 className="text-2xl font-bold">Motto:</h1>
            <i className="text-2xl font-light">
              The motto of National Service Scheme is{" "}
              <spam className="font-bold text-[#fd7e14]">NOT ME BUT YOU</spam>
            </i>
          </div>
        </div>
        <div className="flex flex-col px-20 py-10">
          <h1 className="font-bold text-2xl">
            Benefits of Being a NSS Volunteer:
          </h1>
          <p className="py-2">
            A NSS volunteer who takes part in the community service programme
            would either be a college level or a senior secondary level student.
            Being an active member these student volunteers would have the
            exposure and experience to be the following:
          </p>
          <ul className="flex w-full justify-around  text-xl">
            <li className="border-b-2 border-[#fd7e14] pb-2.5">
              an accomplished{" "}
              <span className="font-bold text-[#fd7e14]">social leader</span>
            </li>
            <li className="border-b-2 border-[#fd7e14] pb-2.5">
              an efficient{" "}
              <span className="font-bold text-[#fd7e14]">administrator</span>{" "}
            </li>
            <li className="border-b-2 border-[#fd7e14] pb-2.5">
              a person who understands{" "}
              <span className="font-bold text-[#fd7e14]">human nature</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
