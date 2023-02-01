import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { DiffieHellmanGroup } from "crypto";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        y: -500,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="sticky top-0 z-50 pl-5 pr-5 flex items-center justify-between max-w-7xl mx-auto"
    >
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://www.linkedin.com/in/brayden-thompson/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/bthomp89"
          fgColor="grey"
          bgColor="transparent"
        />
      </div>
      <Link href="#contact">
        <div>
          <p className="uppercase inline-flex font-semibold">Get In Touch</p>
        </div>
      </Link>
    </motion.header>
  );
}
