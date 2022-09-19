const mongoose = require("mongoose");

// Adding the mongoDB database URL from mongoDB cloud from where we created our cluster
// Getting the database URL from config.env file
const DB = process.env.DATABASE;

// Conecting my application with the database provided with DB as URL holder
mongoose
  .connect(DB, {
    // NOTE:-> From mongoDB 6 these MongoParse functions are by default set so no need to write this
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));
