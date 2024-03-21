import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaHammer } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";

import resume from "../assets/sarojkumardey.pdf";

function Hero() {
  return (
    <>
      <div className="mx-4 mt-24 flex flex-col bg-gradient-to-r from-blue2 to-blue1 bg-clip-text font-font1 text-5xl font-black  text-transparent md:mx-9 md:text-8xl">
        <span>I MAKE</span>
        <span>WEBSITES.</span>
      </div>

      <div className="mt-16 flex w-full flex-col justify-between md:flex-row">
        <div className="flex w-full flex-col py-5 pl-7 pr-4 md:w-1/3  md:py-10 md:pl-10 md:pr-5">
          <FaGraduationCap className="mb-3 text-5xl text-textblue" />
          <span className="mb-3 text-2xl leading-10  ">Education</span>
          <span className="text-md leading-7 text-textgrey">
            I hold a Bachelor's degree in Computer Science and Engineering,
            which significantly enriched my understanding of computer science
            fundamentals. This coursework spanned topics such as data
            structures, algorithms, operating systems, compiler design, and
            database management systems.
          </span>
        </div>
        <div className="flex w-full flex-col py-5 pl-7 pr-4 md:w-1/3 md:py-10 md:pl-10 md:pr-5">
          <FaHammer className="mb-3 text-5xl text-textblue" />
          <span className="mb-3 text-2xl leading-10">Skills</span>
          <span className="text-md leading-7 text-textgrey">
            In addition to my college curriculum, I have acquired proficiency in
            various web development technologies. I excel in Java, JavaScript,
            React.js, Node.js, Express.js, and other popular frameworks. My
            primary focus is on working with the MERN stack.
          </span>
        </div>
        <div className="flex w-full flex-col py-5 pl-7 pr-4 md:w-1/3  md:py-10 md:pl-10 md:pr-5">
          <IoRocketSharp className="mb-3 text-5xl text-textblue" />
          <span className="mb-3 text-2xl leading-10">Projects</span>
          <span className="text-md leading-7 text-textgrey">
            I have completed several projects to enhance my skills. These
            include developing an e-commerce website with modern features,
            creating a movie database that utilizes the TMDB API in the backend,
            and designing this portfolio website.
          </span>
        </div>
      </div>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="  mx-4 mt-10 flex h-14 w-60 cursor-pointer items-center justify-center rounded-md border-2 border-solid border-white bg-black bg-opacity-10  px-5 py-2 transition-all duration-300  ease-in-out hover:-translate-y-0.5 hover:border-blue2 hover:bg-blue2 md:mx-10 "
      >
        <FaFilePdf className="mr-3 text-2xl " />
        <span>Download Resume</span>
      </a>
    </>
  );
}

export default Hero;
