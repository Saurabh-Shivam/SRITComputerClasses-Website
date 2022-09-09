import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Copyright from "./components/Copyright/Copyright";
// import ImageSlider from "./components/Gallery/ImageSlider";
// import { SliderData } from "./Data/SliderData";
import Gallery from "./components/Gallery/Gallery";
// import MyCourses from "./components/MyCourses/MyCourses";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="gallery" element={<ImageSlider slides={SliderData} />} /> */}
        <Route path="gallery" element={<Gallery />} />

        {/* <Route path="mycourses" element={<MyCourses />} /> */}
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
