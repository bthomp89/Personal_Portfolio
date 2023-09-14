import React from "react";
import CTFS from "./experience/CTFS_ExpCard";
import WDS from "./experience/WDS_ExpCard";
import EWB from "./experience/EWB_ExpCard";
import CTFS2 from "./experience/CTFS_ExpCard copy";
import IBM from "./experience/IBM_ExpCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-32 mb-60">
      <h3 className="relative -top-24 uppercase tracking-[20px] text-gray-500 text-2xl pt-52 pb-24">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory overflow-y-hidden">
        <CTFS2 />
        <IBM />
        <WDS />
        <CTFS />
        <EWB />
      </div>
    </div>
  );
}
