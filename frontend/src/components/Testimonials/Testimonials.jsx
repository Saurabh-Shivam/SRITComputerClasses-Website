import React, { useState } from "react";
import "./Testimonials.css";
// Importing images
import leftArrow from "../../img/leftArrow.png";
import rightArrow from "../../img/rightArrow.png";
// // Imported Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// // Importing Pagination for the dots
// import { Pagination } from "swiper";
// import "swiper/css/pagination";
// import "swiper/css";
import { TestimonialData } from "../../Data/TestimonialData";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = TestimonialData.length;

  // //for darkmode context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="testimonials">
      <div className="t-left">
        <div className="t-head">
          {/* for darkmode */}
          <span
          //  style={{ color: darkMode ? "white" : "" }}
          >
            testimonials
          </span>
          <span>what they</span>
          <span
          // style={{ color: darkMode ? "white" : "" }}
          >
            Say about us
          </span>
        </div>
        {/* <span style={{ fontSize: "17px", letterSpacing: "2px" }}> */}
        <span
          className="review"
          style={{
            // for darkmode
            // color: darkMode ? "white" : "",
            fontSize: "17px",
            letterSpacing: "2px",
            color: "var(--gray)",
          }}
        >
          {TestimonialData[selected].review}
        </span>
        <span>
          <span style={{ color: "var(--orange", paddingTop: "0.5rem" }}>
            {TestimonialData[selected].name}
          </span>
          {/* for darkmode */}
          <span
          // style={{ color: darkMode ? "white" : "" }}
          >
            {" "}
            --{TestimonialData[selected].status}
          </span>
        </span>
        {/* This will enable the user to download the uploaded file */}
        {/* <a href={myServices} download>
          <button className="button s-button">Download</button>
        </a> */}

        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div>

      <div className="t-right">
        {/* For box-design behind the profile images */}
        <div></div>
        <div></div>
        <img src={TestimonialData[selected].img} alt="" />

        <div className="arrows">
          <img
            onClick={() => {
              // if we are on the first testimonial then
              selected === 0
                ? // this will return the last testimonial on clicking leftArrow button
                  setSelected(tLength - 1)
                : // if we are not on the first testimonial then it will take the previous value of the selected
                  // and will return (prev-1)th testimonial
                  setSelected((prev) => prev - 1);
            }}
            src={leftArrow} // This is always return the previous testimonial
            alt=""
          />
          <img
            onClick={() => {
              // if we are on the last testimonial then
              selected === tLength - 1
                ? // this will return the first testimonial on clicking righttArrow button
                  setSelected(0)
                : // if we are not on the last testimonial then it will take the previous value of the selected
                  // and will return (prev+1)th testimonial
                  setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>

    // <div className="t-wrapper">
    //   <div className="t-heading">
    //     <span>Students always learn and</span>
    //     <span>upskill themselve</span>
    //     <span>from here...</span>
    //     {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
    //     <div
    //       className="blur t-blur1"
    //       style={{ background: "var(--purple)" }}
    //     ></div>
    //     <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
    //   </div>

    //   {/* Slider */}

    //   <Swiper
    //     // For the dots
    //     modules={[Pagination]}
    //     slidesPerView={1}
    //     pagination={{ clickable: true }}
    //   >
    //     {students.map((student, index) => {
    //       return (
    //         <SwiperSlide key={index}>
    //           <div className="testimonial">
    //             <img src={student.img} alt="" />
    //             <span>{student.feedback}</span>
    //           </div>
    //         </SwiperSlide>
    //       );
    //     })}
    //   </Swiper>
    // </div>
  );
};

export default Testimonials;
