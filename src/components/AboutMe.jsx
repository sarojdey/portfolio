import React from "react";
import img from "../assets/setup.jpg";

function AboutMe() {
  return (
    <div className="bg-black2 mt-32 flex justify-between  flex-col lg:flex-row items-center relative p-10">
      <div className=" -top-20  h-h2 w-w2 md:h-h1 md:w-w1 overflow-hidden flex-shrink-0 rounded  absolute ">
        <img src={img} alt="image" className=" h-full w-full object-cover" />
      </div>
      <div className=" h-h2x w-w2 md:h-h1x md:w-w1 "></div>
      <div className="h-h2x md:h-h1x w-full md:w-1/2">
       <div className="flex flex-col">
       <span className="pb-6 text-textblue ">ABOUT ME</span>
        <span className="pb-6 font-font1 text-3xl font-bold text-textwhite leading-10">Save your time by using Trydo and present yours.</span>
        <span className="pb-6 leading-7 text-textgrey"> 
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form. have suffered
          alteration in some form majority.
        </span>
       </div>
        <div className="flex justify-between mt-10 ">
          <div
            className="flex
            flex-col "
          >
            <span className="text-textblue">Awards</span>
            <span className="text-textblue font-font1 text-3xl font-bold">800+</span>
          </div>
          <div
            className="flex
            flex-col"
          >
            <span className="text-textblue">Happy Client</span>
            <span className="text-textblue font-font1 text-3xl font-bold">1200+</span>
          </div>
          <div
            className="flex
            flex-col"
          >
            <span className="text-textblue">EXPERIENCE</span>
            <span className="text-textblue font-font1 text-3xl font-bold">12+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
