import React from "react";

import bg from "../assets/bg.jpg";
import { FiExternalLink } from "react-icons/fi";

function Footer() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-h2 w-full md:w-1/2">
          <div className="absolute z-10 flex h-h2 w-full flex-col items-center justify-center">
            <div className="flex h-2/3 w-2/3 flex-col">
              <span className="text-md pb-6 font-font2 font-medium tracking-widest">
                READY TO DO THIS
              </span>
              <span className="pb-8 font-font1 text-6xl font-extrabold md:text-7xl">
                Let's get
                <br />
                to work
              </span>
              <a
                className="0 flex h-16 w-56 cursor-pointer items-center justify-center rounded-md border-2 border-solid border-white  font-medium transition-all duration-300 ease-in-out hover:border-textwhite  hover:bg-textwhite hover:text-blue2"
                href="mailto:sarojkumardey.mail@gmail.com?subject=Let's collaborate."
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTACT ME
              </a>
            </div>
          </div>
          <div className="absolute h-h2 w-full overflow-hidden bg-blue2 md:-top-20 md:h-h1 md:rounded-r-xl">
            <img className="h-full w-full object-cover" src={bg} alt="bg" />
          </div>
        </div>
        <div className="flex h-72 w-full flex-col items-center justify-center text-textgrey md:h-h2 md:w-1/2">
          <div className="flex h-4/5">
            <div className="flex h-full w-full flex-col justify-center p-10">
              <div className="pb-4">
                <span className="text-lg font-bold">Quick Link</span>
              </div>
              <div className="pb-2">
                <a
                  href="#about"
                  className="cursor-pointer font-medium hover:text-textblue"
                >
                  About
                </a>
              </div>
              <div className="pb-2">
                <a
                  href="#projects"
                  className="cursor-pointer font-medium hover:text-textblue"
                >
                  Projects
                </a>
              </div>
              <div className="pb-2">
                <a className="cursor-pointer font-medium hover:text-textblue">
                  Blogs
                </a>
              </div>
            </div>
            <div className="flex h-full  w-1/2 flex-col justify-center p-10">
              <div className="pb-4">
                <span className="text-lg font-bold">Socials</span>
              </div>
              <div className="flex items-center justify-center pb-2 hover:text-textblue">
                <a href="" className="cursor-pointer pr-1 font-medium ">
                  LinkdIn
                </a>
                <FiExternalLink />
              </div>
              <div className="flex items-center justify-center pb-2 hover:text-textblue">
                <a href="" className="cursor-pointer pr-1 font-medium ">
                  Github
                </a>
                <FiExternalLink />
              </div>
              <div className="flex items-center justify-center pb-2 hover:text-textblue">
                <a href="" className="cursor-pointer pr-1 font-medium ">
                  X
                </a>
                <FiExternalLink />
              </div>
            </div>
          </div>
          <span className="fon- text-sm">
            © 2024. All rights reserved by Saroj Dey.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
