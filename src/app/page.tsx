import About from "@/components/About";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col  h-full items-center justify-center">
      <Introduction />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <h1 className="mt-[100px] mb-[100px]">Made by Tharun Goud</h1>
    </div>
  );
};

export default page;
