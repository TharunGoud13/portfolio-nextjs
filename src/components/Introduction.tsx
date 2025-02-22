"use client";
import React from "react";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import { BiLogoGmail } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";
const Introduction = () => {
  return (
    <motion.div
      transition={{ duration: 2, ease: "easeOut" }}
      className="mt-20 max-w-[800px] w-full flex flex-col items-start justify-center space-y-4 p-5"
    >
      <div className="flex flex-col md:flex-row justify-center gap-2.5 items-center">
        <div className="flex items-start w-full space-y-2 justify-center flex-col">
          {/* <h1 className="text-2xl font-semibold">Tharun Goud</h1> */}
          <h1 className="text-3xl">
            <Typewriter
              words={["Tharun Goud"]}
              loop={1000}
              cursor
              cursorColor="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h2 className="text-lg text-center text-gray-700">
            Software Engineer & Frontend Developer
          </h2>
          <span className="flex items-center text-muted-foreground gap-2.5">
            <LiaGlobeAmericasSolid />
            Hyderabad, Telangana
          </span>
          <h1 className="flex gap-2.5 items-center">
            <BiLogoGmail className="text-red-500 h-5 w-5" />
            amaravaitharun13@gmail.com
          </h1>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="h-5 w-5 text-green-500 cursor-pointer hover:scale-125 delay-300" />
            <FaGithub className="h-5 w-5 cursor-pointer hover:scale-125 delay-300" />
            <FaLinkedin className="h-5 w-5 cursor-pointer hover:scale-125 delay-300" />
          </div>
          <div className="text-center cursor-pointer mt-12">
            Download Resume
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
