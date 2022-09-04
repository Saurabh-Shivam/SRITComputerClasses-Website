import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// // for darkmode
// import { themeContext } from "../../context/DarkMode/Context";
// import { useContext } from "react";

const Login = () => {
  // setting state
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // helps in navigating from one route to another
  const navigate = useNavigate();

  //   //for darkmode context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;

  // for handling the login button
  const handleSubmit = async (e) => {
    // This will prevent the page from beign reloaded
    e.preventDefault();
    // API Call, instead of doing this create a config file and add the urls there and import from the config file or create an environment variable
    // NOTE:-> ALWAYS TRY NOT TO HARDCODE THE URLS LIKE THIS (store it in config.env file)
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/courses");
      // props.showAlert("\tLogged in Successfully", "success");
      // alert("Logged in successfully");
    } else {
      // props.showAlert("\tInvalid Credentials", "danger");
      alert("\tInvalid Credentials");
    }
  };

  // for the onChange function
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="l-left">
        {/* <div className="l-head"> */}
        <span
        // style={{ color: darkMode ? "white" : "" }}
        >
          Welcome back..!!
        </span>
        <span>Login Here</span>

        <div className="blur l-blur1" style={{ background: "#ABF1FF94" }}></div>
        {/* </div> */}
      </div>

      <div className="l-right">
        {/* NOTE:-> onSubmit method is always added in the form tag not on the button bcz form is submitted not the button  */}
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="email">Email address</label> */}
          <input
            className="user"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            className="user"
            type="password"
            value={credentials.password}
            onChange={onChange}
            id="password"
            name="password"
            placeholder="Password"
          />

          {/* <input type="submit" value="Login" className="button" /> */}

          <button className="button l-button">Login</button>

          <Link className="regLink" to="/register">
            New User..? Register Here
          </Link>
          <div
            className="blur l-blur2"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
