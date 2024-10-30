const userRep = require("../repositories/users/userDBRep");
const userRESTRep = require("../repositories/users/userWSRep");

const getAllUsersFromDB = () => {
  return userRep.getAllUsersFromDB();
};

const getUserByIdFromDB = (id) => {
  return userRep.getUserByIdFromDB(id);
};

const addUserToDB = async (user) => {
  return userRep.addUserToDB(user);
};

const getAllUsersFromWS = async () => {
  const { data } = await userRESTRep.getAllUsers();
  return data;
};

const getUserAuthFromDB = (userName, email) => {
  return userRep.getUserAuthFromDB(userName, email);
};

module.exports = {
  getAllUsersFromDB,
  getUserByIdFromDB,
  addUserToDB,
  getAllUsersFromWS,
  getUserAuthFromDB,
};
