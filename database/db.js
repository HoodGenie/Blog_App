const mongoose = require("mongoose");

// function to connect to mongodb
function mongodbConnection() {
  // mongodb is connected to the app here
  mongoose.connect('mongodb://localhost:27017');
  // listens for a successfull connection and log the message to the console
  mongoose.connection.on("connected", () => {
    console.log("Connected to mongodb successfully");
  });
  // listens for error (while connecting to the database) and log the message to the console
  mongoose.connection.on("error", () => {
    console.log("Error connecting to mongodb");
  });
}
// export the function
module.exports = {
  mongodbConnection,
};