import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Technologies from "../../components/Technologies";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
    </div>
  );
}

export default Home;
