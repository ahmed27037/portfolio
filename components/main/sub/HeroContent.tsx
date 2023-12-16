"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import Link from 'next/link';

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
  >
       <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
       <motion.div
        variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-orange-800 opacity-[0.9]"
        >
         <AcademicCapIcon className="text-[#f7b04e] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Showcasing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900">
              {" "}
              amazing{" "}
            </span>
            projects
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Hey&apos;my name is Ahmed Osman and I am a full stack developer with experience in many different and
          diverse technologies in the frontend and backend
        </motion.p>
        <Link
          href="AhmedOsman4.pdf"
          className="py-2 text-center text-white cursor-pointer rounded-lg max-w-[200px] border-2 border-orange-800 bg-orange-900 hover:bg-orange-950 transition-colors"
        >
          Resume
        </Link>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
       <Image
        src="/mainIcons.svg"
        alt="work icons"
        height={650}
        width={650}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent