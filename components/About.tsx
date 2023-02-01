import React from "react";
import Image from "next/image";
import Link from "next/link";
import mypic from "../assets/myimagetwo.jpg";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen sm:mt-36 text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-24">
      <h3 className="absolute -top-24 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-2 justify-evenly mx-auto items-center"
      >
        <Link
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          href="https://www.gojhl.ca/stats/player-stats/17/78?playertype=skater&position=skaters&rookie=no&sort=goals&statstype=standard&page=1&league=1"
        >
          <Image
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
            src={mypic}
            alt="Picture of the author"
          />
        </Link>

        <motion.div className="px-4 sm:mt-20 sm:mb-20">
          <h4 className="text-3xl xl:text-4xl uppercase font-semibold">
            Who is Brayden Thompson
          </h4>
          <p className="text-sm xl:text-base pt-5">
            Hello, my name is Brayden Thompson and I am currently a software
            engineering student at Western University. I have been coding since
            2020 and have developed a passion for it due to the various problem
            solving elements and the constant challenge it presents. I am always
            eager to learn new things and improve my skills as a software
            developer. Along with my passion for software engineering, I am also
            an athlete who plays Junior B Hockey along with various other
            intramural sports and activities. I enjoy the discipline and
            teamwork that comes with being a part of a hockey team and how it
            applies to my studies and work.
          </p>
          <br></br>
          <p className="text-sm xl:text-base pt-5">
            During my time at university, I have been fortunate enough to
            receive scholarships and have work experiences that have allowed me
            to further develop my skills and understanding of the software
            development industry. In addition to my academic and professional
            pursuits, I am also actively involved in extracurricular activities
            and side projects, which have allowed me to explore different
            aspects of software development and gain experience working on
            real-world projects. I am excited to continue growing as a software
            developer and can't wait to see what the future holds.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
