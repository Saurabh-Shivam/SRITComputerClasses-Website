import React from "react";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Reasons from "../Reasons/Reasons";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Intro />
      <Services />
      <Experience />
      <Reasons />
      <Testimonials />
    </div>
  );
};

export default Home;
