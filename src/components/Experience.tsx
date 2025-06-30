import React from "react";

const Experience = () => {
  return (
    <div className="flex mt-5 flex-col justify-center items-start max-w-[800px] p-4 sm:p-5 space-y-4 w-full">
      <h2 className="text-2xl font-bold text-main">Experience</h2>
      <div className="border p-4 rounded-md hover:border-main border-gray-500 w-full">
        <div className="">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h2 className="text-xl font-semibold text-[#1a73e8]">
              Morr Computing
            </h2>
            <p>July 2024 – Present</p>
          </div>
          <p>Frontend Developer</p>
          <p>Remote – Singapore</p>
          <ul className="mt-4 list-disc pl-5">
            <li>
              Solely responsible for the development and implementation of
              responsive web application using Next JS and Postgrest API
              incorporating a form builder, conversational forms and AI-powered
              chat interface.
            </li>
            <li>
              Designed and built a project management module enabling users to
              create projects, define phases, manage tasks, upload documents,
              and collaborate through a comment-based discussion system.
            </li>
            <li>
              Responsible for all the aspects of the project, from design and
              development to testing and deployment.
            </li>
            <li>
              Managing Postgres tables and implemented robust user
              authentication features, including email/mobile login, social
              login and signup with social login and email/mobile verification.
            </li>
          </ul>
          <p>
            <strong>Tech Stack:</strong> Next JS, Postgrest API, PostgreSQL,
            Remix
          </p>
        </div>
      </div>
      <div className="border rounded-md border-gray-500 hover:border-main p-4 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <h2 className="text-xl text-[#1a73e8] font-semibold">Position2</h2>
          <p>June 2023 – May 2024</p>
        </div>
        <p>UI Developer</p>
        <p>Bengaluru – Karnataka</p>
        <ul className="mt-4 list-disc pl-5">
          <li>
            Implemented user behavior tracking using Mix panel, enabling
            data-driven insights for application improvement and informed
            decision making.
          </li>
          <li>
            Developed and optimized Filters and Time Entry features, enhancing
            user productivity.
          </li>
          <li>
            Resolved critical bugs and prioritized issues, ensuring smooth and
            reliable application performance.
          </li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> React JS, JavaScript, Mixpanel
        </p>
      </div>
    </div>
  );
};

export default Experience;
