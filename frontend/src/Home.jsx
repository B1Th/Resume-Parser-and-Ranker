import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Services />
      <Technologies />
      <Testimonials />
    </>
  );
};

export default Home;
