const mongoose = require("mongoose");

// Creating Schema or say our document's structure
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Compiling our Schema into model
const User = mongoose.model("User", userSchema);

// Exporting our User model
module.exports = User;
