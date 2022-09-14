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
  );
};

export default Courses;
