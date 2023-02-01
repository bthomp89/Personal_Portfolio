import React from "react";
import Image from "next/image";
import ewb from "../../assets/ewb.jpg";
import Link from "next/link";

type Props = {};

export default function CTFS_ExpCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 md:space-y-5 flex-shrink-0 h-[450px] md:h-auto w-[300px] md:w-[600px] xl:w-[750px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
      <Image
        className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px]"
        src={ewb}
        alt="Picture of the author"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front-End Developer</h4>
        <p className="font-bold text-2xl mt-1">
          Western Engineers without Boarders
        </p>
        <div className="flex space-x-2 my-2 opacity-70 text-gray-200">
          {/* Skills */}
          <p>Javascript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Github</p>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started September 2021 - Ended April 2022
        </p>
        <div className="invisible md:visible">
          <ul className="list-disc space-y-3 text-lg">
            <li>
              Developed a questionnaire using HTML and JavaScript to help young
              adults align their views on current events in society with
              Canadian political parties.
            </li>
            <li>
              Produced a website design plan using current UX & UI concept along
              with CSS.
            </li>
            <li>
              <Link href="https://ewb-western-party-alignment.web.app/">
                Click HERE to try the Questionnaire
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
