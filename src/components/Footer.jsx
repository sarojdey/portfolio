import React from "react";
import bg from "../assets/bg.jpg";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-h2 w-full overflow-hidden md:w-1/2">
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
          <div className=" h-h2 w-full overflow-hidden bg-blue2  md:h-h1 ">
            <img className="h-full w-full object-cover" src={bg} alt="bg" />
          </div>
        </div>
        <div className="flex h-72 w-full flex-col items-center justify-center text-textgrey md:h-h2 md:w-1/2">
          <div className="flex h-4/5">
            <div className="flex h-full w-full flex-col justify-center p-10">
              <div className="pb-4">
                <span className="text-lg font-bold">Quick Links</span>
              </div>
              <div className="pb-2">
                <span className="cursor-pointer font-medium hover:text-textblue">
                  <Link to="about" smooth duration={300}>
                    About
                  </Link>
                </span>
              </div>
              <div className="pb-2">
                <span className="cursor-pointer font-medium hover:text-textblue">
                  <Link to="projects" smooth duration={300}>
                    Projects
                  </Link>
                </span>
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
              <div className="flex items-center  pb-2 hover:text-textblue">
                <a
                  href="https://www.linkedin.com/in/saroj-kumar-dey-bb2429265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer pr-1 font-medium "
                >
                  LinkdIn
                </a>
                <FiExternalLink />
              </div>
              <div className="flex items-center  pb-2 hover:text-textblue">
                <a
                  href="https://github.com/sarojdey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer pr-1 font-medium "
                >
                  Github
                </a>
                <FiExternalLink />
              </div>
              <div className="flex items-center  pb-2 hover:text-textblue">
                <a
                  href="https://x.com/SarojKumarDey?t=ROX_PKQGbb3lZTepZB5_nQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer pr-1 font-medium "
                >
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
