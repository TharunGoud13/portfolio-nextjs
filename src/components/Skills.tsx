import React from "react";

const Skills = () => {
  return (
    <div className="mt-5 flex flex-col w-full p-5 space-y-4 items-start max-w-[800px] bg-blue-500">
      <h1 className="text-2xl font-semibold">Skills</h1>
      <div className="grid grid-cols-5 mt-5 gap-5">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Tailwind CSS</span>
        <span>React JS</span>
        <span>Next JS</span>
        <span>Remix</span>
        <span>Git</span>
        <span>Github</span>
        <span>Bitbucket</span>
        <span>Postgres</span>
        <span>Vercel</span>
      </div>
    </div>
  );
};

export default Skills;
