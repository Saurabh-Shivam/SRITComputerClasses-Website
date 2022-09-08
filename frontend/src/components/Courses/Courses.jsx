// import React, { useState, useEffect } from "react";
// import CourseCard from "../CourseCard/CourseCard";
// import axios from "axios";
import "./Courses.css";
import { LanguagesData } from "../../Data/LanguagesData";
import { DatabaseData } from "../../Data/DatabaseData";
import { ModularData } from "../../Data/ModularData";
import { WebDevData } from "../../Data/WebDevData";

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="c-header">
        <span>Ready to start</span>
        <span>your journey</span>
        <span>with us</span>
      </div>

      {/* Programming Languages Section */}
      <div className="c-type1">
        <span>Programming</span>
        <span>Languages</span>
      </div>

      {/* courses card */}
      <div className="courses">
        {LanguagesData.map((course, i) => (
          <div className="course" key={i}>
            <span>{course.title}</span>
            <span>{course.detail}</span>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>

      <div style={{ color: "var(--black)" }} className="c-line">
        -------------------------------------------------------------------------------------------------------------------
      </div>
      {/* Databases Section */}
      <div className="c-type2">
        <span>Databases</span>
      </div>

      {/* courses card */}
      <div className="courses">
        {DatabaseData.map((course, i) => (
          <div className="course" key={i}>
            <span>{course.title}</span>
            <span>{course.detail}</span>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>

      <div style={{ color: "var(--black)" }} className="c-line">
        -------------------------------------------------------------------------------------------------------------------
      </div>
      {/* Web Development Section */}
      <div className="c-type2">
        <span>Web Development</span>
      </div>

      {/* courses card */}
      <div className="courses">
        {WebDevData.map((course, i) => (
          <div className="course" key={i}>
            <span>{course.title}</span>
            <span>{course.detail}</span>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>

      <div style={{ color: "var(--black)" }} className="c-line">
        -------------------------------------------------------------------------------------------------------------------
      </div>
      {/* Modular Courses Section */}
      <div className="c-type2">
        <span>Modular Courses</span>
      </div>

      {/* courses card */}
      <div className="courses">
        {ModularData.map((course, i) => (
          <div className="course" key={i}>
            <span>{course.title}</span>
            <span>{course.detail}</span>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>
    </div>
    // <div className="courses">
    //   <CourseCard
    //     title={"lang1"}
    //     detail={
    //       "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    //     }
    //     review={"very Lorem Ipsum has been the industry's standard"}
    //   />

    //   <CourseCard
    //     title={"lang2"}
    //     detail={
    //       "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    //     }
    //     review={"very Lorem Ipsum has been the industry's standard"}
    //   />

    //   <CourseCard
    //     title={"lang3"}
    //     detail={
    //       "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    //     }
    //     review={"very Lorem Ipsum has been the industry's standard"}
    //   />

    //   <CourseCard
    //     title={"lang4"}
    //     detail={
    //       "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    //     }
    //     review={"very Lorem Ipsum has been the industry's standard"}
    //   />

    //   <CourseCard
    //     title={"lang5"}
    //     detail={
    //       "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    //     }
    //     review={"very Lorem Ipsum has been the industry's standard"}
    //   />

    //   <CourseCard
    //     title={"lang6"}
    //     detail={
    //       "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    //     }
    //     review={"very Lorem Ipsum has been the industry's standard"}
    //   />

    //   <CourseCard
    //     title={"tally"}
    //     detail={
    //       "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    //     }
    //     review={"very Lorem Ipsum has been the industry's standard"}
    //   />

    //   <CourseCard
    //     title={"fullstack"}
    //     detail={
    //       "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    //     }
    //     review={"very Lorem Ipsum has been the industry's standard"}
    //   />

    /* <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard /> */

    // </div>

    // <div className="coursecard">
    //   {courses.map((courses, key) => {
    //     const { id, title, detail, review } = courses;
    //     return (
    //       <div className="couCard" key={id}>
    //         <span>{title}</span>
    //         <span>{detail}</span>
    //         <span>{review}</span>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Courses;
