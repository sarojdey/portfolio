import React from "react";
import img from "../assets/setup.jpg";

function AboutMe() {
  return (
    <div className="relative mt-32  flex flex-col  items-center justify-between bg-black1 p-10 lg:flex-row">
      <div className=" absolute  -top-20 h-h2 w-w2 flex-shrink-0 overflow-hidden rounded md:h-h1  md:w-w1 ">
        <img src={img} alt="image" className=" h-full w-full object-cover" />
      </div>
      <div className=" h-h2x w-w2 md:h-h1x md:w-w1 "></div>
      <div className=" w-full md:h-h1x md:w-1/2">
        <div className="flex flex-col">
          <span className="pb-6 text-textblue " name="about">
            ABOUT ME
          </span>
          <span className="pb-6 font-font1 text-4xl font-bold leading-10 text-textwhite">
            Hey there! I'm Saroj, a passionate web developer.
          </span>
          <span className="pb-6 leading-7 text-textgrey">
            I have a grasp of various web frameworks like React, Node, Express,
            etc. I have created many projects using these technologies and
            adhere to best practices.
          </span>
        </div>
        <div className=" mb-5 mt-10">
          <div
            className="mb-3
            flex flex-col"
          >
            <span className="text-textwhite">Frontend</span>
            {/* <span className="text-textblue font-font1 text-3xl font-bold">
              5+
            </span> */}
            <div className=" my-3 flex h-12 w-80 justify-evenly ">
              <div className="aspect-square w-1/6 rounded-sm bg-textblue"></div>
              <div className="aspect-square w-1/6 rounded-sm bg-textblue"></div>
              <div className="aspect-square w-1/6 rounded-sm bg-textblue"></div>
              <div className="aspect-square w-1/6 rounded-sm bg-textblue"></div>
              <div className="aspect-square w-1/6  rounded-sm bg-textwhite"></div>
            </div>
          </div>
          <div
            className="mb-3
            flex flex-col"
          >
            <span className="text-textwhite">Backend</span>
            {/* <span className="text-textblue font-font1 text-3xl font-bold">
              10+
            </span> */}
            <div className=" my-3 flex h-10 w-64 justify-evenly ">
              <div className="aspect-square w-1/6 rounded-sm bg-pink-600"></div>
              <div className="aspect-square w-1/6 rounded-sm  bg-pink-600"></div>
              <div className="aspect-square w-1/6 rounded-sm  bg-pink-600"></div>
              <div className="aspect-square w-1/6 rounded-sm bg-textwhite"></div>
              <div className="aspect-square w-1/6 rounded-sm bg-textwhite"></div>
            </div>
          </div>
          <div
            className="mb3
            flex flex-col"
          >
            <span className="text-textwhite">Database</span>
            {/* <span className="text-textblue font-font1 text-3xl font-bold">
              1+
            </span> */}
            <div className=" my-3 flex h-8 w-52 justify-evenly ">
              <div className="aspect-square w-1/6 rounded-sm  bg-emerald-400"></div>
              <div className="aspect-square w-1/6 rounded-sm  bg-emerald-400"></div>
              <div className="aspect-square w-1/6 rounded-sm  bg-emerald-400"></div>
              <div className="aspect-square w-1/6 rounded-sm bg-textwhite"></div>
              <div className="aspect-square  w-1/6 rounded-sm bg-textwhite"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
