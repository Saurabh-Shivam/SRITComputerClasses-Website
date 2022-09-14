import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
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
        "service_46q1b2a",
        "template_psiznyr",
        form.current,
        "64fHUK7XxBlw4-xZW"
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
        <span>Get in touch</span>
        <span>Contact me</span>

        <div className="blur c-blur1" style={{ background: "#ABF1FF94" }}></div>
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
          <input type="submit" value="Send" className="button" />

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
