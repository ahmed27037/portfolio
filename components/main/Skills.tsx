"use client";
import {
  Backend_skill,
  Frontend_skill,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillText from "./sub/SkillText";
import SkillDataProvider from "./sub/SkillDataProvider";
import {motion} from 'framer-motion'
import { slideInFromLeft } from "@/utils/motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText/>
      
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[15px] text-center mb-[15px]'
        >
            Languages:
        </motion.div>
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[15px] text-center mb-[18px]'
        >
            Frontend Technologies:
        </motion.div>
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[15px] text-center mb-[18px]'
        >
            Backend Technologies:
        </motion.div>
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[15px] text-center mb-[18px]'
        >
            Other Technologies:
        </motion.div>
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="max-w-full min-h-full z-[-10] opacity-60 absolute flex items-center justify-center bg-cover">
        </div>
      </div>
    </section>
  );
};

export default Skills;