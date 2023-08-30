import React from "react";
import CTFS from "./experience/CTFS_ExpCard";
import WDS from "./experience/WDS_ExpCard";
import EWB from "./experience/EWB_ExpCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-left max-w-full px-10 justify-evenly mx-auto items-center mt-32 mb-60">
      <h3 className="relative -top-24 uppercase tracking-[20px] text-gray-500 text-2xl pt-52 pb-24">
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
