const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/FactoryDB")
    .then(() => {
      console.log("Connected to DataBase.");
    })
    .catch((err) => console.log(err));
};

module.exports = connectDB;
