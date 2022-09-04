const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
// Importing the course.js file(route)
const courseRoute = require("./router/courses");
// Importing and getting the auth route
const authRoute = require("./router/auth");
// Importing multer ->  primarily used for uploading files(in this project images to the database)
const multer = require("multer");
const cors = require("cors");

const app = express();

// Adding path of config.env file
dotenv.config({ path: "./config.env" });

// Getting the databasse connection file
require("./db/dbconn");

// Getting the PORT number from config.env file
const PORT = process.env.PORT;

// fixing cors error in express
app.use(cors());

// MULTER MIDDLEWARE USED FOR UPLOADING FILES TO THE DATABASE
// // These lines of code will take our file and will save it inside the images folder we created, and filename will be the
// // name which we are providing, i.e., "req.body.name"
// const storage = multer.diskStorage({
//   // cb-> callback, this take cares of our errors here
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     // cb(null, "hello.jpg");
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });
// // Uploading the file to our storage, i.e., images folder that we have created
// const upload = multer({ storage: storage }); // storage:ourStorage
// // bcz we will be uploading only one file at a time
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   // Will return success(status code-> 200) and message that file has been uploaded to the database as a response
//   res.status(200).json("File has been uploaded");
// });

// The data we are getting are in json format and our computer is not able to understand it and was giving undefined
// this line of code will convert the json file into an object
app.use(express.json());

// Getting the routes
app.use("/api/auth", authRoute);
// app.use("/api/courses", courseRoute); //NOTE:->"/api/course" this can be anything like /random/courses
app.use("/api/courses", require("./router/courses")); //NOTE:->"/api/course" this can be anything like /random/courses

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
