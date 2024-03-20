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
        <span className=" pb-6 text-textblue text-center">OUR POPULAR SERVICES</span>
        <span className=" text-center pb-6 font-font1 text-4xl font-bold text-textwhite leading-10">
          We take care of your business
        </span>
        <span className="pb-6 text-center leading-7 text-textgrey">
          There are many variations of passages of Lorem Ipsum{" "}
          <br className=" hidden md:block" />
          available but the majority.
        </span>
      </div>
      {/* sec2 */}
      <div className="flex justify-center flex-col items-center">
        {/* row1 */}
        <div className=" flex justify-evenly flex-col md:flex-row items-center">
          <div className="cursor-pointer hover:bg-blue2 hover:-translate-y-0.5 transition-all duration-300 ease-in-out group w-11/12 mb-6 md:w-2/5 p-12 flex bg-black3 rounded-md">
            {/* icon  */}
            <div>
              <GiShoppingBag  className="group-hover:text-textwhite mr-6 text-5xl text-textblue" />
            </div>
            {/* desc  */}
            <div className="flex flex-col">
              <span className="text-xl font-medium pb-4 text-textwhite">Business Stratagy</span>
              <span className="leading-7 group-hover:text-textwhite text-textgrey">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </span>
            </div>
          </div>
          <div className="cursor-pointer hover:bg-blue2 hover:-translate-y-0.5 transition-all duration-300 ease-in-out  w-11/12 mb-6  md:w-2/5  p-12 flex group bg-black3 rounded-md">
            {/* icon  */}
            <div>
              <BiSolidCameraMovie className="mr-6 text-5xl group-hover:text-textwhite text-textblue" />
            </div>
            {/* desc  */}
            <div className="flex flex-col">
              <span className="text-xl font-medium pb-4 text-textwhite">Website Development</span>
              <span className="leading-7 group-hover:text-textwhite text-textgrey">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </span>
            </div>
          </div>
        </div>
        {/* row2 */}
        <div className="flex justify-evenly flex-col md:flex-row items-center">
          <div className="cursor-pointer hover:bg-blue2 hover:-translate-y-0.5 transition-all duration-300 ease-in-out  w-11/12 mb-6  md:w-2/5  p-12 flex group bg-black3 rounded-md">
            {/* icon  */}
            <div>
              <FaUser className="mr-6 text-5xl group-hover:text-textwhite text-textblue" />
            </div>
            {/* desc  */}
            <div className="flex flex-col">
              <span className="text-xl font-medium pb-4 text-textwhite">Marketing & Reporting</span>
              <span className="leading-7 group-hover:text-textwhite text-textgrey">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </span>
            </div>
          </div>
          <div className="cursor-pointer hover:bg-blue2 hover:-translate-y-0.5 transition-all duration-300 ease-in-out  w-11/12 mb-6  md:w-2/5  p-12 flex group bg-black3 rounded-md">
            {/* icon  */}
            <div>
              <LuListTodo className="mr-6 text-5xl group-hover:text-textwhite text-textblue" />
            </div>
            {/* desc  */}
            <div className="flex flex-col">
              <span className="text-xl font-medium pb-4 text-textwhite">Mobile Development</span>
              <span className="leading-7 group-hover:text-textwhite text-textgrey">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
