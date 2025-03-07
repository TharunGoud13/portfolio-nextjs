import React from "react";
import {
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
  FaBitbucket,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRemix,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
import { HoverEffect } from "./ui/card-hover-effect";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
    { name: "React JS", icon: <FaReact className="text-blue-600" /> },
    { name: "Next JS", icon: <SiNextdotjs className="text-black" /> },
    { name: "Remix", icon: <SiRemix className="text-purple-500" /> },
    { name: "Git", icon: <FaGit className="text-orange-600" /> },
    { name: "Github", icon: <FaGithub className="text-black" /> },
    { name: "Bitbucket", icon: <FaBitbucket className="text-blue-700" /> },
    { name: "Postgres", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
  ];

  return (
    <div className="mt-5 flex flex-col w-full p-5 space-y-2 items-start max-w-[800px] ">
      <h1 className="text-2xl font-semibold">Skills</h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
};

export default Skills;
