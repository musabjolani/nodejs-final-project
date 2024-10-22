const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  numOfActions: { type: Number, default: 0 },
});

const User = mongoose.model("user", userSchema, "Users");

module.exports = User;
