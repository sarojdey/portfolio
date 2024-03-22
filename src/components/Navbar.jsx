import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
function Navbar() {
  const [cross, setCross] = useState(false);

  return (
    <header className="flex items-center justify-between ">
      <h1 className=" ml-4 mt-3 cursor-pointer font-font1 text-5xl font-bold md:ml-10 md:mt-6   ">
        SRJ.
      </h1>

      <nav className="relative mr-4 mt-3 font-font2 font-medium md:mr-10 md:mt-6 ">
        <ul className="flex list-none items-center ">
          <li className="mx-6 hidden cursor-pointer transition-all duration-300 ease-in-out hover:text-blue2 md:block">
            <Link to="about" smooth duration={300}>
              About
            </Link>
          </li>

          <li className=" mx-6 hidden cursor-pointer transition-all duration-300 ease-in-out hover:text-blue2 md:block">
            <Link to="projects" smooth duration={300}>
              Projects
            </Link>
          </li>
          <a
            href=""
            className="mx-6 hidden cursor-pointer transition-all  duration-300 ease-in-out hover:text-blue2 md:block"
          >
            Blogs
          </a>
          <a
            href="mailto: sarojkumardey.mail@gmail.com?subject=Let's collaborate."
            target="_blank"
            rel="noopener noreferrer"
            className="mx-6  flex cursor-pointer items-center justify-center rounded-md border-2 border-solid border-white bg-black bg-opacity-10 px-5 py-2 transition-all  duration-300 ease-in-out hover:-translate-y-0.5 hover:border-blue2 hover:bg-blue2 "
          >
            LET'S TALK
          </a>
          <li className="mx-2  cursor-pointer text-4xl md:hidden">
            {cross ? (
              <RxCross2 onClick={() => setCross(false)} />
            ) : (
              <IoMenu onClick={() => setCross(true)} />
            )}
          </li>
        </ul>
        {cross ? (
          <div className=" absolute -bottom-40 right-2 flex cursor-pointer  flex-col justify-center rounded-md border-2 border-solid border-white bg-black bg-opacity-10 px-5 py-2 transition-transform md:hidden ">
            <span className="pb-2 hover:text-textblue">
              <Link to="about" smooth duration={300}>
                About
              </Link>
            </span>
            <span className="pb-2 hover:text-textblue">
              <Link to="projects" smooth duration={300}>
                Projects
              </Link>
            </span>
            <span className="pb-2 hover:text-textblue">
              <Link to="about" smooth duration={300}>
                About
              </Link>
            </span>
            <span className="pb-2 hover:text-textblue">Blogs</span>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

export default Navbar;
