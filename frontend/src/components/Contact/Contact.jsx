import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

const Contact = () => {
  // //for darkmode context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // helps in navigating from one route to another
  const navigate = useNavigate();

  // Copied and pasted from emailjs website
  const form = useRef();

  // Declare a  state variable, which we'll call "done" -> when email is send successfully
  const [done, setDone] = useState(false);

  // Declare a new state variable, which we'll call "cData" -> data entered in the textfields
  // const [cData, setcData] = useState("");

  const sendEmail = (e) => {
    // This will prevent the page from reloading
    e.preventDefault();

    emailjs
      .sendForm(
        "service_usoh3nc",
        "template_0jbnyhi",
        form.current,
        "o7CFTm6D1kGBrmepN"
      )
      .then(
        (result) => {
          console.log(result.text);
          // if the message is send it will enable the span to display the text
          setDone(true);
          // let newText = "";
          // setcData(newText);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="c-left">
        {/* <div className="c-head"> */}
        <span
        // style={{ color: darkMode ? "white" : "" }}
        >
          Get in touch
        </span>
        <span>Contact me</span>

        <div className="blur c-blur1" style={{ background: "#ABF1FF94" }}></div>
        {/* </div> */}
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            // try to match the name field with the template id field if using emailjs
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="number"
            // try to match the name field with the template id field if using emailjs
            name="user_number"
            className="user"
            placeholder="Phone Number"
          />
          <input
            type="email"
            // try to match the name field with the template id field if using emailjs
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            // try to match the name field with the template id field if using emailjs
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="button"
            // onClick={handleclearClick}
          />

          {/* if done==true send to home page */}
          <span>{done && navigate("/")}</span>

          <div
            className="blur c-blur2"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
