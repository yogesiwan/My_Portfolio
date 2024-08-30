import React from "react";
import Title from "../layouts/Title";
import {
  aiChatCover,
  newsMonkCover,
  projectThree,
  todoCover,
  tomatoCover,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import links from "../../data/links";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Tomato"
          des=" This project contains the front end of a food delivery app called Tomato, made with React and Vite showcasing a good food ordering experience."
          src={tomatoCover}
          linkedin={links[1].linkedin}
          web={links[1].web}
        />
        <ProjectsCard
          title="ai-chat-app"
          des=" An AI chat web application with a simple, user-friendly interface that takes user input and generates responses using the Google Gemini API."
          src={aiChatCover}
          linkedin={links[3].linkedin}
          web={links[3].web}
        />
        <ProjectsCard
          title="News Monks"
          des="A web app using News API to provide the latest global news, with category filters for personalized news reading."
          src={newsMonkCover}
          linkedin={links[2].linkedin}         
        />
        <ProjectsCard
          title="To Do Notes"
          des="A simple and efficient to-do Web App  made with React, Vite and Tailwind CSS. This app utilizes local storage to save and persist to-do items."
          src={todoCover}
          linkedin={links[0].linkedin}
          web={links[0].web}
        />
      </div>
    </section>
  );
};

export default Projects;
