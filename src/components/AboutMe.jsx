import React from "react";
import img from "../assets/setup.jpg";

function AboutMe() {
  return (
    <div className="bg-black2 mt-32 flex justify-between  flex-col md:flex-row items-center relative p-10">
      <div className=" -top-20  h-h2 w-w2 md:h-h1 md:w-w1 overflow-hidden flex-shrink-0 rounded  absolute ">
        <img src={img} alt="image" className=" h-full w-full object-cover" />
      </div>
      <div className=" h-h2x w-w2 md:h-h1x md:w-w1 "></div>
      <div className="h-h2x md:h-h1x w-full md:w-1/2">
       <div className="flex flex-col">
       <span className="pb-6">About Us</span>
        <span className="pb-6">Save your time by using Trydo and present yours.</span>
        <span className="pb-6"> 
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form. have suffered
          alteration in some form majority.
        </span>
       </div>
        <div className="flex justify-between">
          <div
            className="flex
            flex-col"
          >
            <span>Awards</span>
            <span>800+</span>
          </div>
          <div
            className="flex
            flex-col"
          >
            <span>Happy Client</span>
            <span>1200+</span>
          </div>
          <div
            className="flex
            flex-col"
          >
            <span>YEARS OF EXPERIENCE</span>
            <span>12+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
