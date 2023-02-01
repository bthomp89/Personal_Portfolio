import React from "react";
import Link from "next/link";
import NFL from "../assets/NFL_LOGO.png";
import Music from "../assets/music.png";
import Unity from "../assets/unity.jpeg";
import Pokedex from "../assets/pokedex.png";

import Image from "next/image";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="flex flex-col relative h-screen justify-center mx-auto items-center px-2 py-10 mt-64">
      <h3 className="absolute -top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-6 overflow-scroll scrollbar">
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#37373b] to-[#282a2c]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={Music}
            height={512}
            alt="/"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              Music App
            </h3>
            <p className=" pb-4 pt-2 text-white text-center">
              React.js Firebase Node.js Express.js HTML AWS
            </p>
            <Link href="https://github.com/bthomp89/Music-Player">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#37373b] to-[#282a2c]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={NFL}
            alt="/"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              BET 3309
            </h3>
            <p className=" pb-4 pt-2 text-white text-center">
              {" "}
              React.js mySQL Node.js Express.js HTML JWT
            </p>
            <Link href="https://github.com/bthomp89/BET-3309">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#37373b] to-[#282a2c]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={Unity}
            alt="/"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              Unity Lego Minigame
            </h3>
            <p className=" pb-4 pt-2 text-white text-center">C# Unity</p>
            <Link href="https://github.com/bthomp89/Unity-Lego-Minigame">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#37373b] to-[#282a2c]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={Pokedex}
            alt="/"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              Pokedex{" "}
            </h3>
            <p className=" pb-4 pt-2 text-white text-center">
              Javascript HTML CSS
            </p>
            <Link href="https://github.com/Western-Webtech/lab-1-bthomp89">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">
                More Info
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
