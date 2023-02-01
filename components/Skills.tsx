import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function Technologies({}: Props) {
  return (
    <div className="flex flex-col relative h-screen justify-center mx-auto items-center mb-96">
      <h3 className="absolute -top-80 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <p className="font-bold text-2xl mt-5 mb-5">Proficient</p>
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-row flex-wrap items-center m:mb-10 xl:mb-20 justify-center px-2 py-2 gap-4 space-x-4"
      >
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />

        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />

        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </motion.div>
      <p className="flex flex-col font-bold text-2xl mt-5 mb-5">Familiar</p>
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-row flex-wrap items-center m:mb-10 xl:mb-20 justify-center px-2 py-2 gap-4 space-x-4"
      >
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <Image
          className=""
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </motion.div>
    </div>
  );
}
