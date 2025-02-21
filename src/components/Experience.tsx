import React from "react";

const Experience = () => {
  return (
    <div className="flex mt-5 flex-col bg-red-500 justify-center items-start max-w-[800px] p-5 space-y-4">
      <h2 className="text-2xl font-bold">Experience</h2>
      <div>
        <h3>Morr Computing</h3>
        <p>July 2024 – Present</p>
        <p>Frontend Developer</p>
        <p>Remote – Singapore</p>
        <ul>
          <li>
            Solely responsible for the development and implementation of
            responsive web application using Next JS and Postgrest API
            incorporating a form builder, conversational forms and AI-powered
            chat interface.
          </li>
          <li>
            Designed and built a project management module enabling users to
            create projects, define phases, manage tasks, upload documents, and
            collaborate through a comment-based discussion system.
          </li>
          <li>
            Responsible for all the aspects of the project, from design and
            development to testing and deployment.
          </li>
          <li>
            Managing Postgres tables and implemented robust user authentication
            features, including email/mobile login, social login and signup with
            social login and email/mobile verification.
          </li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> Next JS, Postgrest API, PostgreSQL
        </p>
      </div>
      <div>
        <h3>Position2</h3>
        <p>June 2023 – May 2024</p>
        <p>UI Developer</p>
        <p>Bengaluru – Karnataka</p>
        <ul>
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
          <strong>Tech Stack:</strong> Mixpanel
        </p>
      </div>
    </div>
  );
};

export default Experience;
