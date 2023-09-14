import React from "react";
import Image from "next/image";
import IBM from "../../assets/IBM.png";

type Props = {};

export default function CTFS_ExpCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 md:space-y-5 flex-shrink-0 h-[450px] md:h-auto w-[300px] md:w-[600px] xl:w-[750px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
      <Image
        className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px]"
        src={IBM}
        alt="Picture of the author"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Pro Bono Consultant</h4>
        <p className="font-bold text-2xl mt-1">IBM</p>

        <div className="flex space-x-2 my-2 opacity-70 text-gray-200">
          {/* Skills */}
          <p>Problem Solving</p>
          <p>Leadership</p>
          <p>Communication</p>
          <p>Marketing</p>
          <p>Automation</p>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started September 2023 - Present
        </p>
        <div className="invisible md:visible">
          <ul className="list-disc space-y-3 text-lg">
            <li>
              1 of 50 students selected province-wide to participate in IBM
              Consulting’s Fall 2023 Pro-Bono Initiative.
            </li>
            <li>
              Working with a team of 5 students under the mentorship of two IBM
              consultants to analyze, strategize, and devise an effective
              solution for our charity partners' problem.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
