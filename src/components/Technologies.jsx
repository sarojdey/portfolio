import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

function Technologies() {
  return (
    <div className="w-full bg-black1 py-20">
      <div className="flex flex-col items-center p-5">
        <span className=" pb-6 text-center text-textblue">MY STACKS</span>
        <span className=" pb-6 text-center font-font1 text-4xl font-bold leading-10 text-textwhite">
          Tools in My Arsenal
        </span>
        <span className="pb-6 text-center leading-7 text-textgrey">
          These are the technologies that I'm <br />
          familiar with.
        </span>
      </div>
      <div className=" mx-5 grid grid-cols-4 md:mx-20 md:grid-cols-6">
        <div className="flex justify-center">
          <IoLogoJavascript className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaHtml5 className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <IoLogoCss3 className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaReact className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <SiRedux className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <SiTailwindcss className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <IoLogoNodejs className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <SiExpress className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>

        <div className="flex justify-center">
          <SiMysql className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <SiMongodb className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaGithub className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaJava className="mb-14 transform text-7xl text-textgrey transition-all duration-300 ease-in-out hover:scale-105 hover:text-textwhite md:text-9xl" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
