import React from "react";
// import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Reasons from "../Reasons/Reasons";
import Testimonials from "../Testimonials/Testimonials";
// import Footer from "../Footer/Footer";
// import Myvideos from "../MyVideos/Myvideos";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Intro />
      <Services />
      <Experience />
      <Reasons />
      {/* <Myvideos /> */}
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
