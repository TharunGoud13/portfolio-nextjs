"use client";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import "./index.css";
import styled from "styled-components";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 8,
      name: "Shopping App",
      skills: "React JS,JavaScript",
      url: <FaReact style={{ color: "blueviolet" }} />,
      link: "https://tharun-shoppingapp.netlify.app/",
    },
    {
      id: 9,
      name: "Jobby App",
      skills: "React JS,JavaScript",
      url: <FaReact style={{ color: "blueviolet" }} />,
      link: "https://tharun-job-app.netlify.app/",
    },
    {
      id: 10,
      name: "Nxt Watch(Youtube clone)",
      skills: "React JS,JavaScript",
      url: <FaReact style={{ color: "blueviolet" }} />,
      link: "https://tharun-nxtwatch.netlify.app/",
    },
    {
      id: 1,
      name: "Restaurant Page",
      skills: "HTML,CSS,JS,Bootstrap",
      url: <FaHtml5 style={{ color: "orange" }} />,
      link: "https://restaurantmenu1.ccbp.tech/",
    },
    {
      id: 2,
      name: "Simple Github page",
      skills: "React,Tailwind CSS",
      url: <FaReact style={{ color: "blueviolet" }} />,
      link: "https://simple-github.netlify.app/",
    },
    {
      id: 3,
      name: "Total Projects",
      skills: "HTML,CSS",
      url: <FaHtml5 style={{ color: "orange" }} />,

      link: "https://totalprojects.ccbp.tech/",
    },
    {
      id: 4,
      name: "Chatbot",
      skills: "HTML,CSS,JS,Bootstrap",
      url: <FaHtml5 style={{ color: "orange" }} />,
      link: "https://chatbotsample1.ccbp.tech/",
    },
    {
      id: 5,
      name: "Wikipedia Search",
      skills: "React,HTML,CSS",
      url: <FaReact style={{ color: "blueviolet" }} />,
      link: "https://finalwikipedia.ccbp.tech/",
    },
    {
      id: 6,
      name: "Todo List",
      skills: "HTML,CSS,JS",
      url: (
        <SiJavascript
          style={{
            color: "yellow",
            backgroundColor: "black",
            borderRadius: "4px",
          }}
        />
      ),

      link: "https://tharun-todolist.netlify.app/",
    },
  ];

  return (
    <div className=" w-full flex flex-col mt-5 p-5 space-y-4 items-center justify-center">
      <div className=" text-2xl font-bold text-[#32a6ff]">My Recent Work</div>
      <div className="text-[#99999d] text-md">
        Here are a few past projects I&apos;ve worked on.
      </div>
      <div className="grid grid-cols-3 items-center mx-2 gap-x-10 gap-y-5">
        {projects.map((item) => (
          <StyledWrapper key={item.id}>
            <Link target="_blank" href={item.link} className="notification">
              <div className="notiglow" />
              <div className="notiborderglow" />
              <div className="notititle">{item.name}</div>
              <div className="notibody">{item.skills}</div>
            </Link>
          </StyledWrapper>
        ))}
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  gap: 1rem;
  .notification {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    isolation: isolate;
    position: relative;
    width: 18rem;
    height: 8rem;
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff;
  }

  .notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #18181b;
    z-index: 2;
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .notititle {
    color: var(--color);
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #99999d;
    padding: 0 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notibody {
    transform: translateX(0.25rem);
  }

  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle closest-side at center,
      white,
      transparent
    );
    opacity: 0;
    transition: opacity 300ms ease;
  }

  .notiglow {
    z-index: 3;
  }

  .notiborderglow {
    z-index: 1;
  }

  .notification:hover .notiglow {
    opacity: 0.1;
  }

  .notification:hover .notiborderglow {
    opacity: 0.1;
  }

  .note {
    color: var(--color);
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 0.9rem;
    width: 75%;
  }
`;

export default Projects;
