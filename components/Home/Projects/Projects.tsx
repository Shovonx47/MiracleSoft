import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import MagicButton from "@/components/reusable/MagicButton";

 

const Projects = () => {
  return (
    <>
      <div className="my-16 dark:bg-[radial-gradient(circle_at_center,#5a7885_0%,#243d48_50%,transparent_70%,transparent_90%,transparent_100%)]  lg:dark:bg-[radial-gradient(circle_at_center,#5a7885_0%,#243d48_30%,transparent_60%,transparent_90%,transparent_100%)]">
        <div className="flex justify-center">
          <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
        </div>
        <h1 className="text-4xl font-bold text-center py-4 text-primary">
          PROJECTS
        </h1>
        <div className="flex justify-center">
          <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
        </div>
      </div>
      <div className="lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 lg:gap-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <Link className="flex justify-center mt-10 px-[10px]" href="#">
        <MagicButton
          className="bg-[conic-gradient(from_90deg_at_50%_50%,#0E2732,#0F4A5A,#4A6B77,#2B5360)] hover:bg-[conic-gradient(from_-90deg_at_50%_50%,#2B5360,#4A6B77,#0F4A5A,#0E2732)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fd5602,#FF8D21,#FFB76B,#FFCD90)] dark:hover:bg-[conic-gradient(from_-90deg_at_50%_50%,#FFCD90,#FFB76B,#FF8D21,#fd5602)] text-white dark:text-primary transition duration-700 ease-in-out"
          icon={<FaLocationArrow />}
          otherClass="w-full h-14 md:w-56"
          position="right"
          title="All projects"
        />
      </Link>
    </>
  );
};

export default Projects;
