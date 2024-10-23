const User = require("../models/userModel");

const getAllUsers = () => {
  return User.find();
};

const getUserById = (id) => {
  return User.findById(id);
};

const addUser = async (user) => {
  const newUser = new User(user);
  await newUser.save();
  return "User Added ";
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
