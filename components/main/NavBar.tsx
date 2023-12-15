"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { UserCircleIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-fit fixed top-0 shadow-lg shadow-orange-800/50 bg-orange-900/50 z-50 px-10">
      <div className=" flex flex-col space-y-10 items-center justify-between ">
        {/* Bars icon and "use client" text for small screens */}
        <button
          className=" flex items-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars3Icon className="h-8 w-8 text-gray-300" />
        </button>

        {isMenuOpen && (
          <div>
            <a href="/" className="flex justify-center items-center">
              <UserCircleIcon
                width={60}
                height={60}
                className="cursor-pointer hover:animate-slowspin rounded-full hover:bg-slate-900 transition-colors"
              />
            </a>

            <span className="font-bold ml-[10px] md:block text-gray-300 flex justify-center text-center">
              Full Stack Development
            </span>

            <div className="w-[500px] h-full flex flex-row items-center justify-between">
              <div className="flex flex-col items-center justify-evenly gap-8 mt-2 w-full h-auto border border-[#ff6a50] bg-[#060302]  px-[20px] py-[10px] rounded text-gray-200">
                <a href="#about-me" className="cursor-pointer hover:text-slate-900">
                  About me
                </a>
                <a href="#skills" className="cursor-pointer hover:text-slate-900">
                  Skills
                </a>
                <a href="#projects" className="cursor-pointer hover:text-slate-900">
                  Projects
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 gap-5">
              {Socials.map((social) => (
                <div key={social.name} className="flex flex-col items-center">
                  <a className="z-30" href={social.href}>
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={27}
                      height={26}
                      className="m-auto hover:opacity-10"
                    />
                  </a>
                  <p className="text-white mb-2">{social.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
