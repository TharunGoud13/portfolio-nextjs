import About from "@/components/About";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";
import "./globals.css";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TracingBeam } from "@/components/ui/tracing-beam";
// import { FollowerPointerCard } from "@/components/ui/following-pointer";
// import Image from "next/image";

// const TitleComponent = ({
//   title,
//   avatar,
// }: {
//   title: string;
//   avatar: string;
// }) => (
//   <div className="flex space-x-2 items-center">
//     <Image
//       src={avatar}
//       height="20"
//       width="25"
//       alt="thumbnail"
//       className="rounded-full border-2 border-white"
//     />
//     <p>{title}</p>
//   </div>
// );

const page = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      {/* <BackgroundBeamsWithCollision> */}
      {/* <FollowerPointerCard
        title={
          <TitleComponent
            title={"Hello! I'm Tharun"}
            avatar={
              "https://res.cloudinary.com/did0unuxu/image/upload/v1715277061/IMG_20220817_132725_c854ie.jpg"
            }
          />
        }
      > */}
      <TracingBeam className="px-6">
        <div className="flex flex-col h-full items-center justify-center">
          <Introduction />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <h1 className="mt-[100px] mb-[100px] text-xl text-main">
            Made by Tharun Goud
          </h1>
        </div>
      </TracingBeam>
      {/* </FollowerPointerCard> */}
      {/* </BackgroundBeamsWithCollision> */}
    </div>
  );
};

export default page;
