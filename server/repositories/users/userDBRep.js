const User = require("../../models/userModel");

const getAllUsersFromDB = () => {
  return User.find();
};

const getUserByIdFromDB = (id) => {
  return User.findById(id);
};

const getUserAuthFromDB = (userName, email) => {
  return User.findOne({ userName: userName, email: email });
};
const addUserToDB = async (user) => {
  const newUser = new User(user);
  await newUser.save();
  return "User Added ";
};

module.exports = {
  getAllUsersFromDB,
  getUserByIdFromDB,
  addUserToDB,
  getUserAuthFromDB,
};
