"use client";
import React from "react";
import Link from "next/link";
import "./project.css";
import { Image } from "@nextui-org/image";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  live_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,

  live_link,
}) => {
  return (
    <div className="p-[10px] lg:p-0">
      <div className="rounded-md w-full h-full relative z-0 overflow-hidden p-[3px] before:absolute before:z-[-5] before:left-[-50%] before:top-[-50%] before:w-[200%] before:h-[200%] before:bg-[conic-gradient(#fce694,#fce17e,#FFDF6A,#FCCA53,#fcb102),linear-gradient(#ee48d2,#d013b0),linear-gradient(#c600a5,#5c0081),linear-gradient(#d6feff,#d6feff)] before:bg-[size:50%_50%] before:bg-no-repeat before:bg-[position:0_0,100%_0,100%_100%,0_100%] before:animate-rotate after:absolute after:z-[-1] after:left-[4px] after:top-[4px] after:w-[calc(100%-8px)] after:h-[calc(100%-8px)] after:bg-white dark:after:bg-gradient-to-b after:from-[#173948] after:to-[#112829] after:rounded-[5px] after:animate-opacityChange">
        <div className="relative">
          <Link href={live_link}>
            <Image
              isBlurred
              isZoomed
              alt="project_image"
              className="w-screen h-[220px] object-cover rounded rounded-b-none"
              radius="none"
              src={image}
            />
          </Link>
        </div>

        <Link href={live_link}>
          <div className="p-2">
            <h3 className="text-primary font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-primary text-[14px]">{description}</p>
          </div>
        </Link>

        <div className="flex flex-wrap gap-2 p-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] text-primary ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
