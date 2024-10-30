let axios = require("axios");
const URL = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = async () => {
  return await axios.get(URL);
};

module.exports = { getAllUsers };
