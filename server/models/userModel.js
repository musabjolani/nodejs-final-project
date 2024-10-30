const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    maxActions: { type: Number, default: 0 },
  },
  { versionKey: false }
);

const User = mongoose.model("user", userSchema, "Users");

module.exports = User;
