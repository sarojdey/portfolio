import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

function Projects() {
  return (
    // wrapper
    <div className="pt-10">
      {/* sec1 */}
      <div className="flex flex-col items-center p-5">
        <span className=" pb-6 text-center text-textblue">MY BEST WORKS</span>
        <span className=" pb-6 text-center font-font1 text-4xl font-bold leading-10 text-textwhite">
          Bringing Ideas to Life
        </span>
        <span className="pb-6 text-center leading-7 text-textgrey">
          These are some projects to showcase my grasp in{" "}
          <br className=" hidden md:block" />
          modern web technology.
        </span>
      </div>
      {/* sec2 */}
      <div className="flex flex-col items-center justify-center">
        {/* row1 */}
        <div className=" flex flex-col items-center justify-evenly md:flex-row">
          <div className="group mb-6 flex w-11/12 cursor-pointer rounded-md bg-black3 p-12 shadow-lg shadow-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-blue2 md:w-2/5">
            {/* icon  */}
            <div>
              <GiShoppingBag className="mr-6 text-5xl text-textblue group-hover:text-textwhite" />
            </div>
            {/* desc  */}
            <div className="flex flex-col">
              <span className="pb-4 text-xl font-medium text-textwhite">
                E-commerce Website
              </span>
              <span className="leading-7 text-textgrey group-hover:text-textwhite">
                I created this e-commerce website with React and Strapi CMS.
              </span>
            </div>
          </div>
          <div className=" group mb-6 flex w-11/12 cursor-pointer rounded-md bg-black3 p-12  shadow-lg shadow-slate-700  transition-all  duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-blue2 md:w-2/5">
            {/* icon  */}
            <div>
              <BiSolidCameraMovie className="mr-6 text-5xl text-textblue group-hover:text-textwhite" />
            </div>
            {/* desc  */}
            <div className="flex flex-col">
              <span className="pb-4 text-xl font-medium text-textwhite">
                Movie Database
              </span>
              <span className="leading-7 text-textgrey group-hover:text-textwhite">
                I created this movie database website using React and the TMDB
                API.
              </span>
            </div>
          </div>
        </div>
        {/* row2 */}
        <div className="flex flex-col items-center justify-evenly md:flex-row">
          <div className=" group mb-6 flex w-11/12 cursor-pointer rounded-md bg-black3 p-12  shadow-lg shadow-slate-700  transition-all  duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-blue2 md:w-2/5">
            {/* icon  */}
            <div>
              <FaUser className="mr-6 text-5xl text-textblue group-hover:text-textwhite" />
            </div>
            {/* desc  */}
            <div className="flex flex-col">
              <span className="pb-4 text-xl font-medium text-textwhite">
                Portfolio
              </span>
              <span className="leading-7 text-textgrey group-hover:text-textwhite">
                I have implemented the designs of this website using React.
              </span>
            </div>
          </div>
          <div className="group mb-6 flex w-11/12 cursor-pointer rounded-md bg-black3 p-12  shadow-lg shadow-slate-700  transition-all  duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-blue2 md:w-2/5">
            {/* icon  */}
            <div>
              <LuListTodo className="mr-6 text-5xl text-textblue group-hover:text-textwhite" />
            </div>
            {/* desc  */}
            <div className="flex flex-col">
              <span className="pb-4 text-xl font-medium text-textwhite">
                Todo App
              </span>
              <span className="leading-7 text-textgrey group-hover:text-textwhite">
                This is a straightforward todo app built with React.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
