const userRep = require("../repositories/userRep");

const getAllUsers = () => {
  return userRep.getAllUsers();
};

const getUserById = (id) => {
  return userRep.getUserById(id);
};

const addUser = async (user) => {
  return userRep.addUser(user);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
