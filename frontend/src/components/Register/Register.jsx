import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

const Register = () => {
  //   //for darkmode context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;

  // setting state
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  // helps in navigating from one route to another
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // This will prevent the page from beign reloaded
    e.preventDefault();

    // Here we are using destructuring
    const { name, email, password } = credentials;

    // API Call, instead of doing this create a config file and add the urls there and import from the config file or create an environment variable
    // NOTE;-> ALWAYS TRY NOT TO HARDCODE THE URLS LIKE THIS (store it in config.env file)
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/login");
      // props.showAlert("\tAccount Created Successfully", "success");
      // alert("Account Created Successfully");
    } else {
      // props.showAlert("\tInvalid Details", "danger");
      alert("Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // const [credentials, setCredentials] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   cpassword: "",
  // });

  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // This will prevent the page from beign reloaded

  //   const { name, email, password } = credentials; // Here we are using destructuring

  //   // API Call, instead of doing this create a config file and add the urls there and import from the config file or create an environment variable
  //   // NOTE;-> ALWAYS TRY NOT TO HARDCODE THE URLS LIKE THIS
  //   const response = await fetch("http://localhost:5000/api/auth/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, password }),
  //   });

  //   const json = await response.json();
  //   console.log(json);
  //   if (json.success) {
  //     // Save the auth token and redirect
  //     localStorage.setItem("token", json.authtoken);
  //     navigate("/");
  //     // props.showAlert("\tAccount Created Successfully", "success");
  //   } else {
  //     // props.showAlert("\tInvalid Details", "danger");
  //     alert("Invalid Credentials");
  //   }
  // };

  // const onChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };

  return (
    <div className="register">
      <div className="re-left">
        {/* <div className="re-head"> */}
        <span
        // style={{ color: darkMode ? "white" : "" }}
        >
          New User..??
        </span>
        <span>Register Here</span>

        <div
          className="blur re-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
        {/* </div> */}
      </div>

      <div className="re-right">
        {/* NOTE:-> onSubmit method is always added in the form tag not on the button bcz form is submitted not the button  */}
        <form onSubmit={handleSubmit}>
          <input
            onChange={onChange}
            type="text"
            name="name"
            className="register_user"
            placeholder="Enter your name"
            required
          />
          <input
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            className="register_user"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            onChange={onChange}
            id="password"
            name="password"
            className="register_user"
            placeholder="Create your password"
            minLength={5}
            required
          />

          {/* <input type="submit" value="Register" className="button" /> */}
          <button className="button re-button">Register</button>

          <div
            className="blur re-blur2"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Register;
