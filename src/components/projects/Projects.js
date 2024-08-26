import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import links from "../../data/links";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="To Do Notes"
          des="A simple and efficient to-do Web App designed to help users manage their daily tasks. This app utilizes local storage to save and persist to-do items."
          src={projectOne}
          linkedin={links[0].linkedin}
          web={links[0].web}
        />
        <ProjectsCard
          title="Tomato"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          linkedin={links[1].linkedin}
          web={links[1].web}
        />
        <ProjectsCard
          title="News Monks"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
