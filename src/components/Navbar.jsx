import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <header className="flex items-center justify-between ">
      <h1 className=" ml-4 mt-3 cursor-pointer font-font1 text-5xl font-bold md:ml-10 md:mt-6   ">
        SRJ.
      </h1>

      <nav className="mr-4 mt-3 font-font2 font-medium md:mr-10 md:mt-6 ">
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
            <IoMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
