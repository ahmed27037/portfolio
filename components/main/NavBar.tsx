"use client";
import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  return (
  <div className="w-full h-fit fixed top-0 shadow-lg shadow-orange-800/50 bg-orange-900/50 backdrop-blur-md z-50 px-10">
    <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] flex-wrap">
      <a
        href="#about-me"
        className="h-auto w-auto flex flex-row items-center"
        >
          <a href='/'>
          <UserCircleIcon
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin rounded-full hover:bg-slate-900 transition-colors"
          />
          </a> 

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Full Stack Development
          </span>
      </a>
     <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
      <div className="flex items-center justify-between w-full h-auto border border-[#ff6a50] bg-[#060302] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
      <a href="#about-me" className="cursor-pointer">
          About me
        </a>
        <a href="#skills" className="cursor-pointer">
          Skills
        </a>
        <a href="#projects" className="cursor-pointer">
          Projects
        </a>
      </div>
    </div>

    <div className="flex flex-row gap-5">
  {Socials.map((social) => (
    <div key={social.name} className="flex flex-col items-center">
      <a className='z-30' href={social.href}>
        <Image
          src={social.src}
          alt={social.name}
          width={27}
          height={26}
          className='m-auto hover:opacity-10'
        />
      </a>
      <p className='text-white mb-2'>{social.name}</p>
    </div>
  ))}
</div>


  </div>
</div>
  )
}

export default NavBar