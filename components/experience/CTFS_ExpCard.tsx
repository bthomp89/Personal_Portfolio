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
          <p>Javascript</p>
          <p>MySQL</p>
          <p>Bitbucket</p>
          <p>HTML</p>
          <p>Selenium</p>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started May 2022 - Ended August 2022
        </p>
        <div className="invisible md:visible">
          <ul className="list-disc space-y-3 text-lg">
            <li>
              Designed and deployed customized testing simulators using
              Javascript and JSP for various banners (Sport Chek, Canadian Tire,
              Marks, etc.) to streamline dev/pre-prod testing processes
              resulting in a 60% reduction in bug reports.
            </li>
            <li>
              Developed an in-depth understanding of Atlassian Software and
              agile methodologies through hands-on experience using JIRA,
              Confluence, and Bitbucket in a variety of software development
              contexts.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
