import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

import { FaArrowUp } from "react-icons/fa";

function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
      <Footer />
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className=" fixed bottom-6 right-6 z-30 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-white bg-black bg-opacity-10 px-5 py-2  backdrop-blur-md transition-all  duration-300 ease-in-out hover:-translate-y-0.5 hover:border-blue2 hover:bg-blue2"
      >
        <FaArrowUp />
      </div>
    </div>
  );
}

export default Home;
