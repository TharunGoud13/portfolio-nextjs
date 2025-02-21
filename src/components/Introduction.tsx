import Image from "next/image";
import React from "react";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className="mt-20 max-w-[800px] w-full flex flex-col items-start justify-center space-y-4 p-5">
      <div className="flex flex-col md:flex-row justify-center gap-2.5 items-center">
        <Image
          className="rounded-lg"
          alt="Tharun-Goud"
          width={100}
          height={100}
          src="https://res.cloudinary.com/did0unuxu/image/upload/v1715277061/IMG_20220817_132725_c854ie.jpg"
        />
        <div className="flex items-start w-full space-y-2 justify-center flex-col">
          <h1 className="text-4xl font-bold text-center mt-6">Tharun Goud</h1>
          <h2 className="text-2xl text-center text-gray-700">
            Software Engineer & Frontend Developer
          </h2>
          <span className="flex items-center gap-2.5">
            <LiaGlobeAmericasSolid />
            Hyderabad, Telangana
          </span>
          <h1>amaravaitharun13@gmail.com</h1>
          <div className="flex items-center gap-4">
            <FaWhatsapp />
            <FaGithub />
            <FaLinkedin />
          </div>
          <div className="text-center cursor-pointer mt-12">
            Download Resume
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
