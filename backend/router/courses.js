const express = require("express");
const router = express.Router();
// Importing the userSchema
const Course = require("../model/courseSchema");

// PERFORMING CRUD OPERATIONS

// ROUTE 1: ADDING COURSE
// Add a new Course using: POST "/api/courses/addcourse".
// Bcz here it will take some time for creating a new Course in the database(as it is creating a new course) and then
// it will return us a response, so all of this process will take some time, that's why we have made this an async function
router.post("/addcourse", async (req, res) => {
  // req -> whatever we are sending to our server, eg, sending username,email,password,etc.
  // res -> giving the response like, user created successfully, account created,etc.

  // Destructuring, i.e getting the values from the req.bodys
  // const { title, description, review } = req.body;

  // Getting all the data entered, in json format from req.body and saving it in newCourse
  const newCourse = new Course(req.body);
  try {
    // Saving the data we stored in newCourse to the database
    const savedCourse = await newCourse.save();
    // Will return success(status code-> 200) and the added course as a response
    res.status(200).json(savedCourse);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("Internal Server Error");
  }
});

// ROUTE: 2 FETCHING/GETTING ALL COURSES
// Get all the Courses using: GET "/api/courses/fetchallcourses".
router.get("/fetchallcourses", async (req, res) => {
  try {
    // This will find the course by their id in database
    // The req. params property is an object containing properties mapped to the named route “parameters”.
    const courses = await Course.find();

    // Will return success(status code-> 200) and all the courses present in the database as a response
    res.status(200).json(courses);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("Internal Server Error");
  }
});

// ROUTE: 3 Getting COURSE
// Get a Course using: GET "/api/courses/getcourse".
router.get("/getcourse/:id", async (req, res) => {
  try {
    // This will find the course by their id in database
    // The req. params property is an object containing properties mapped to the named route “parameters”.
    const course = await Course.findById(req.params.id);

    // Will return success(status code-> 200) and the course present in the database with particular id we searched for as a response
    res.status(200).json(course);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("Internal Server Error");
  }
});

// ROUTE 4: UPDATING COURSE
// Update an existing Course using: PUT "/api/courses/updatecourse".
router.put("/updatecourse/:id", async (req, res) => {
  try {
    // Destructuring, i.e getting the values from the req.body
    const { title, description, review } = req.body;
    // Create a newCourse object
    const newCourse = {};
    if (title) {
      newCourse.title = title;
    }
    if (description) {
      newCourse.description = description;
    }
    if (review) {
      newCourse.review = review;
    }

    // Find the course to be updated and update it
    // Checking to avoid being hacked or doing invalid things
    // The req. params property is an object containing properties mapped to the named route “parameters”.
    let course = await Course.findById(req.params.id);
    if (!course) {
      return res.send(404).send("Not Found");
    }

    // Course will be updated
    // finding and updating the course by setting it's new values into the database
    course = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } // -> if any new user comes it will be created automatically
    );
    // Will return success(status code-> 200) and the updated course in the database as a response
    res.status(200).json(course);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("Internal Server Error");
  }
});

// ROUTE: 5 DELETING COURSE
// Delete an existing Course using: DELETE "/api/courses/deletecourse".
router.delete("/deletecourse/:id", async (req, res) => {
  try {
    // This will find the course by their id in database
    // The req. params property is an object containing properties mapped to the named route “parameters”.
    let course = await Course.findById(req.params.id);
    if (!course) {
      return res.send(404).send("Not Found");
    }

    // this will delte the Course from the database with the Course's id that we extracted with finyById method and stored in course vairable
    course = await course.delete();
    // Will return success(status code-> 200) and message that post has been deleted from the database as a response
    res.status(200).json("Course has been deleted..!!");
  } catch (error) {
    console.error(error.message);
    res.send(500).send("Internal Server Error");
  }
});

// Exporting the router(courses.js)
module.exports = router;
