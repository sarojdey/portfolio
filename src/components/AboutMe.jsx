import React from "react";
import img from "../assets/setup.jpg";

function AboutMe() {
  return (
    <div className="bg-black1 mt-32  flex justify-between  flex-col lg:flex-row items-center relative p-10">
      <div className=" -top-20  h-h2 w-w2 md:h-h1 md:w-w1 overflow-hidden flex-shrink-0 rounded  absolute ">
        <img src={img} alt="image" className=" h-full w-full object-cover" />
      </div>
      <div className=" h-h2x w-w2 md:h-h1x md:w-w1 "></div>
      <div className=" md:h-h1x w-full md:w-1/2">
        <div className="flex flex-col">
          <span className="pb-6 text-textblue ">ABOUT ME</span>
          <span className="pb-6 font-font1 text-4xl font-bold text-textwhite leading-10">
            Hey there! I'm Saroj, a passionate web developer.
          </span>
          <span className="pb-6 leading-7 text-textgrey">
            I have a grasp of various web frameworks like React, Node, Express,
            etc. I have created many projects using these technologies and
            adhere to best practices.
          </span>
        </div>
        <div className=" mt-10 mb-5">
          <div
            className="flex
            flex-col mb-3"
          >
            <span className="text-textwhite">Frontend</span>
            {/* <span className="text-textblue font-font1 text-3xl font-bold">
              5+
            </span> */}
            <div className=" flex justify-evenly w-80 h-12 my-3 ">
              <div className="aspect-square bg-green-500 rounded-sm"></div>
              <div className="aspect-square bg-green-500 rounded-sm"></div>
              <div className="aspect-square bg-green-500 rounded-sm"></div>
              <div className="aspect-square bg-green-500 rounded-sm"></div>
              <div className="aspect-square  bg-textwhite rounded-sm"></div>
            </div>
          </div>
          <div
            className="flex
            flex-col mb-3"
          >
            <span className="text-textwhite">Backend</span>
            {/* <span className="text-textblue font-font1 text-3xl font-bold">
              10+
            </span> */}
            <div className=" flex justify-evenly w-64 h-10 my-3 ">
              <div className="aspect-square bg-yellow-500 rounded-sm"></div>
              <div className="aspect-square bg-yellow-500 rounded-sm"></div>
              <div className="aspect-square bg-yellow-500 rounded-sm"></div>
              <div className="aspect-square bg-textwhite rounded-sm"></div>
              <div className="aspect-square bg-textwhite rounded-sm"></div>
            </div>
          </div>
          <div
            className="flex
            flex-col mb3"
          >
            <span className="text-textwhite">Database</span>
            {/* <span className="text-textblue font-font1 text-3xl font-bold">
              1+
            </span> */}
            <div className=" flex justify-evenly w-52 h-8 my-3 ">
              <div className="aspect-square bg-orange-500 rounded-sm"></div>
              <div className="aspect-square bg-orange-500 rounded-sm"></div>
              <div className="aspect-square bg-textwhite rounded-sm"></div>
              <div className="aspect-square bg-textwhite rounded-sm"></div>
              <div className="aspect-square bg-textwhite rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
