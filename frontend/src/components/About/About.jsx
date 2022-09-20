import React from "react";
import Owner from "../../img/owner.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="a-up">
        <img src={Owner} alt="" />
      </div>

      <div className="a-down">
        <div className="a-para">
          <span>
            S.R.I.T(Shubham Raj Info Tech) is a computer institute specially for
            coding classes with many modular courses like ADCA,TALLY,WEB
            DEVT,DATA SCIENCE.The director SHUBHAM RAJ has more than 12 years
            experince of teaching ,currenly lecturer is Patna university, Bihar.
            The student can learn coding from zero level to professional
            level.The institute has many examples of such student who started
            their course from zero and today they are at higher position in IT
            SECTOR. Come, join and make your IT career well. The non computer
            background student also may apply, we have better option for them.
            <br /> <br />
            At Present, we are providing coaching for Computer Science (CS) &
            Information and technology (IT), Online Services (incl. Online Test,
            Video Tutorial, and Online Materials), Industrial Training,
            Certification Courses, Workshop, Web Development, Project Training,
            Job Opportunities and much more. Proficient execution and Quality
            education, forms our core of performance which is backed by vast
            experience of the teachers.
            <br /> <br />
            Our education campus is equipped with WI-FI and Air condition. Our
            mode of teaching based on audio-visual aids in classrooms and labs
            which are equipped with latest computers, Projector, internet
            facility, WI-FI campus etc.
          </span>

          <span>About our Director</span>
          <span className="a-founder">
            Shubham Raj, the founder and director of this institute, teacher
            with more than 12 years of teaching experience in the Computer
            Field. He has completed his MCA from L N Mishra Patna, Bihar and
            during that time he had worked on multiple projects under "Beltron
            Bihar Government".
            <br /> <br />
            He has placed more than 100's of students to different companies
            like Google, ISRO, Amazon, Infosis, Wipro, TCS, etc. with his
            excellent and unqiue teaching style. Currently, he is also working
            as a "Lecturer in the Patna University of BCA + MCA department"
          </span>
        </div>
      </div>
      {/* Blur effect design */}
      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blur"
        style={{
          background: "#c1f5ff",
          top: "17rem",
          left: "-9rem",
          width: "21rem",
          height: "11rem",
        }}
      ></div>
    </div>
  );
};

export default About;
