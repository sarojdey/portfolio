import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaHammer } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";

function Hero() {
  return (
    <>
      <div className="flex flex-col mx-4 font-font1 font-black text-5xl md:text-8xl md:mx-9 bg-gradient-to-r from-blue2 to-blue1  text-transparent bg-clip-text mt-32">
        <span>I MAKE</span>
        <span>WEBSITES.</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full mt-16">
        <div className="flex flex-col w-full md:w-1/3 py-5 pl-7 pr-4  md:pr-5 md:pl-10 md:py-10">
          <FaGraduationCap className="text-5xl mb-3 text-textblue" />
          <span className="text-2xl leading-10 mb-3  ">Education</span>
          <span className="text-md leading-7 text-textgrey">
            I hold a Bachelor's degree in Computer Science and Engineering,
            which significantly enriched my understanding of computer science
            fundamentals. This coursework spanned topics such as data
            structures, algorithms, operating systems, compiler design, and
            database management systems.
          </span>
        </div>
        <div className="flex flex-col w-full md:w-1/3 py-5 pl-7 pr-4 md:pr-5 md:pl-10 md:py-10">
          <FaHammer className="text-5xl mb-3 text-textblue" />
          <span className="text-2xl leading-10 mb-3">Skills</span>
          <span className="text-md leading-7 text-textgrey">
            In addition to my college curriculum, I have acquired proficiency in
            various web development technologies. I excel in Java, JavaScript,
            React.js, Node.js, Express.js, and other popular frameworks. My
            primary focus is on working with the MERN stack.
          </span>
        </div>
        <div className="flex flex-col w-full md:w-1/3 py-5 pl-7 pr-4  md:pr-5 md:pl-10 md:py-10">
          <IoRocketSharp className="text-5xl mb-3 text-textblue" />
          <span className="text-2xl leading-10 mb-3">Projects</span>
          <span className="text-md leading-7 text-textgrey">
            I have completed several projects to enhance my skills. These
            include developing an e-commerce website with modern features,
            creating a movie database that utilizes the TMDB API in the backend,
            and designing this portfolio website.
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
