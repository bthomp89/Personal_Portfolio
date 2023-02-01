import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import mypic from "../assets/myimage.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function Me({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Brayden", "Welcome to My Portfolio"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.div className="border-solid border-2 border-white-600 rounded-full">
        <Image
          className="relative rounded-full mx-auto"
          src={mypic}
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </motion.div>

      <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
        Software Engineer
      </h2>
      <h1>
        <span className="text-3xl lg:text-4xl font-extrabold">{text}</span>
        <Cursor cursorColor="white" />
      </h1>

      <div>
        <Link href="#about">
          <button className="homeButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="homeButton">Experience</button>
        </Link>

        <Link href="#skills">
          <button className="homeButton">Skills</button>
        </Link>

        <Link href="#projects">
          <button className="homeButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
