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
        <h4 className="text-4xl font-light">Vice President of Development</h4>
        <p className="font-bold text-2xl mt-1">Western Developers Society</p>
        <div className="flex space-x-2 my-2 opacity-70 text-gray-200">
          {/* Skills */}
          <p>React.js</p>
          <p>Github</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>Agile Methodologies</p>
          <p>Team Leadership</p>
        </div>
        <p className="uppercase py-5 text-gray-300">October 2022 - Present</p>
        <div className="invisible md:visible">
          <ul className="list-disc space-y-3 md:text-lg:">
            <li>
              Managed a team of 8+ software developers and utilized Agile scrum
              methodologies to successfully deliver a website to the client,
              meeting all project requirements and delivering on time.
            </li>
            <li>
              Coordinated a streamlined interview and hiring process for 2
              winter term projects, resulting in the successful onboarding of 30
              developers within 2 weeks.
            </li>
            <li>
              Re-designed the club website and managed its development using
              ReactJS and Figma.
            </li>
            <li>
              Worked with club executives to establish a long-term club roadmap
              spanning 2023-2024, outlining project cycles, restructuring roles,
              and organizing hackathons to increase member engagement and club
              prominence.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
