import React, { useState } from "react";
import "./Testimonials.css";
// Importing images
import leftArrow from "../../img/leftArrow.png";
import rightArrow from "../../img/rightArrow.png";
import { TestimonialData } from "../../Data/TestimonialData";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = TestimonialData.length;

  return (
    <div className="testimonials">
      <div className="t-left">
        <div className="t-head">
          <span>testimonials</span>
          <span>what they</span>
          <span>Say about us</span>
        </div>
        <span
          className="review"
          style={{
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
          <span> --{TestimonialData[selected].status}</span>
        </span>
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
  );
};

export default Testimonials;
