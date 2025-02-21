"use client";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

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

  const handleClick = (item: string) => {
    window.open(item, "_blank");
  };
  return (
    <div className="max-w-[800px] bg-green-500 w-full flex flex-col mt-5 p-5 space-y-4 items-start justify-center">
      <div style={{ color: "#141c3a", fontWeight: "700" }}>My Recent Work</div>
      <div style={{ color: "#141c3a" }}>
        Here are a few past projects I&apos;ve worked on.
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => handleClick(item.link)}
          >
            <h3 className="card__title">{item.name}</h3>
            <p className="card__content" style={{ fontWeight: "800" }}>
              {item.skills}{" "}
            </p>
            <div style={{ fontSize: "40px", margin: "10px" }}>{item.url}</div>
            <div className="card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
