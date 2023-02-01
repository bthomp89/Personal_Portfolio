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
        <h4 className="text-4xl font-light">Programmer Analyst Student</h4>
        <p className="font-bold text-2xl mt-1">Canadian Tire Financial</p>

        <div className="flex space-x-2 my-2 opacity-70 text-gray-200">
          {/* Skills */}
          <p>Java</p>
          <p>Javascript</p>
          <p>MySQL</p>
          <p>Atlassian</p>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started May 2022 - Ended August 2022
        </p>
        <div className="invisible md:visible">
          <ul className="list-disc space-y-3 text-lg">
            <li>
              Created and updated 10 payment gateway simulators using Java,
              MySQL, REST Services, HTML, and Javascript, along with over 20
              test cases for each simulator using Selenium all of which are
              currently used for pre-production testing, resulting in testing
              being sped up by 85%.
            </li>
            <li>
              Developed an in-depth understanding of Atlassian Software and
              agile methodologies through hands-on experience using JIRA,
              Confluence, and Bitbucket in a variety of software development
              contexts.
            </li>
            <li>
              Leveraged my strong communication skills to effectively
              collaborate with team members in code reviews, sprint planning and
              development.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
