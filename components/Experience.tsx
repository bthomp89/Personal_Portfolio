import React from "react";
import CTFS from "./experience/CTFS_ExpCard";
import WDS from "./experience/WDS_ExpCard";
import EWB from "./experience/EWB_ExpCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-32 mb-60">
      <h3 className="absolute top-20 md:-top-24 lg::top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory overflow-y-hidden">
        <CTFS />
        <WDS />
        <EWB />
      </div>
    </div>
  );
}
