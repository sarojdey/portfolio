import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default Home;
