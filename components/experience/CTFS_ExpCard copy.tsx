import React from "react";
import Image from "next/image";
import ctfs from "../../assets/ctfs.jpg";

type Props = {};

export default function CTFS_ExpCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 md:space-y-5 flex-shrink-0 h-[450px] md:h-auto w-[300px] md:w-[600px] xl:w-[750px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
      <Image
        className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px]"
        src={ctfs}
        alt="Picture of the author"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Programmer Analyst Intern</h4>
        <p className="font-bold text-2xl mt-1">Canadian Tire Financial</p>

        <div className="flex space-x-2 my-2 opacity-70 text-gray-200">
          {/* Skills */}
          <p>Java</p>
          <p>REST APIs</p>
          <p>MySQL</p>
          <p>Bitbucket</p>
          <p>JavaServer Pages (JSP)</p>
          <p>Selenium</p>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started May 2023 - Ended August 2023
        </p>
        <div className="invisible md:visible">
          <ul className="list-disc space-y-3 text-lg">
            <li>
              Developed REST API endpoints with Java to seamlessly integrate 280
              Canadian Tire Gas+ stations with 1500+ Petro-Canada Stations, used
              by 15 M+ customers nationwide.
            </li>
            <li>
              Collaborated with product teams to implement card verification
              logic for Triangle Select subscription renewals, resulting in a
              70% decrease in failed payment transactions.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
