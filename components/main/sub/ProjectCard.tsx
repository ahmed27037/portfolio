"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
  github: string;
}

const ProjectCard = ({ src, title, description, href, github }: Props) => {


  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#ffae51] flex flex-col justify-between">
        <Image
          src={src}
          alt={title}
          width={800}
          height={1000}
          className="w-full object-contain"
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
          
        </div>
        <div>
        <a  href={href} target="_blank" rel="noopener noreferrer"><p className="text-white text-center bg-blue-500 hover:bg-blue-900">Website</p></a>
    <a href={github}><p className="text-white text-center bg-green-500 hover:bg-green-900">Github</p></a>
    </div>
    </div>
  );
};

export default ProjectCard;
