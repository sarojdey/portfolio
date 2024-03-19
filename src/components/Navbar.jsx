import { IoMenu } from "react-icons/io5";
function Navbar() {
  return (
    <header className="flex justify-between items-center ">
      <h1 className=" md:ml-10 md:mt-6 text-5xl font-bold ml-4 mt-3 font-font1 cursor-pointer   ">
        SRJ.
      </h1>

      <nav className="md:mr-10 md:mt-6 mr-4 mt-3 font-medium font-font2 ">
        <ul className="flex list-none items-center ">
          <li className="hidden md:block mx-6 cursor-pointer hover:text-blue2 transition-all duration-300 ease-in-out">
            Home
          </li>
          <li className=" hidden md:block mx-6 cursor-pointer hover:text-blue2 transition-all duration-300 ease-in-out">
            About
          </li>
          <li className="hidden md:block mx-6 cursor-pointer  hover:text-blue2 transition-all duration-300 ease-in-out">
            Blog
          </li>
          <li className="mx-6  cursor-pointer flex justify-center items-center border-white border-solid border-2 bg-black py-2 px-5 rounded-md bg-opacity-10 hover:bg-blue2  hover:border-blue2 hover:-translate-y-0.5 transition-all duration-300 ease-in-out md:">
            LET'S TALK
          </li>
          <li className="mx-2  text-4xl cursor-pointer md:hidden">
            <IoMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
