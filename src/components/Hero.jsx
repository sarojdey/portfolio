import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaHammer } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";

function Hero() {
  return (
    <>
      <div className="flex flex-col mx-4 font-font1 font-black text-5xl md:text-8xl md:mx-9 bg-gradient-to-r from-blue2 to-blue1 inline-block text-transparent bg-clip-text mt-24">
        <span>I MAKE</span>
        <span>WEBSITES.</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full mt-16">
        <div className="flex flex-col w-full md:w-1/3 py-5 pl-7 pr-4  md:pr-0 md:pl-10 md:py-10">
          <FaGraduationCap className="text-5xl mb-3 text-textblue" />
          <span className="text-2xl leading-10 mb-3  ">Lorem ipsum</span>
          <span className="text-md leading-7 text-textgrey">
            Lorem ipsum dolor sit amet consect adipisicing elit. Voluptate,
            nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, minima!
          </span>
        </div>
        <div className="flex flex-col w-full md:w-1/3 py-5 pl-7 pr-4 md:pr-0 md:pl-10 md:py-10">
          <FaHammer className="text-5xl mb-3 text-textblue" />
          <span className="text-2xl leading-10 mb-3">
            Lorem ipsum 
          </span>
          <span className="text-md leading-7 text-textgrey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas, aspernatur?
          </span>
        </div>
        <div className="flex flex-col w-full md:w-1/3 py-5 pl-7 pr-4  md:pr-0 md:pl-10 md:py-10">
          <IoRocketSharp className="text-5xl mb-3 text-textblue" />
          <span className="text-2xl leading-10 mb-3">
            Lorem ipsum 
          </span>
          <span className="text-md leading-7 text-textgrey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            nihil. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolores, id?
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
