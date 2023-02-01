import React from "react";
import Image from "next/image";
import wds from "../../assets/wds.jpg";

type Props = {};

export default function CTFS_ExpCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 md:space-y-5 flex-shrink-0 h-[450px] md:h-auto w-[300px] md:w-[600px] xl:w-[750px] snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
      <Image
        className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px]"
        src={wds}
        alt="Picture of the author"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Development Team Lead</h4>
        <p className="font-bold text-2xl mt-1">Western Developers Society</p>
        <div className="flex space-x-2 my-2 opacity-70 text-gray-200">
          {/* Skills */}
          <p>React.js</p>
          <p>Github</p>
        </div>
        <p className="uppercase py-5 text-gray-300">Started October 2023</p>
        <div className="invisible md:visible">
          <ul className="list-disc space-y-3 md:text-lg:">
            <li>
              Leading a team of 8 software developers in the creation of a
              website for a Western University club, using agile scrum
              methodologies to plan and execute development work
            </li>
            <li>
              Mentoring team members in agile development practices and helping
              them improve their technical skills.
            </li>
            <li>
              Collaborating with cross-functional teams, including designers,
              technical leads, and club executives, to ensure the website meets
              their design and functional requirements.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
