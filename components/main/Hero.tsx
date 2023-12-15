"use client";
import React from "react";
import HeroContent from "./sub/HeroContent";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 m-auto h-full z-[1] object-cover "
      >
        <source src="/blackholeNasa.mp4" type="video/webm" />
      </video>
      <HeroContent/>
    </div>
  );
};

export default Hero;