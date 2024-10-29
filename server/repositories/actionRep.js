const jsonfile = require("jsonfile");
const filePath = "../server/data/Actions.json";

const getAllActions = () => {
  return jsonfile.readFile(filePath);
};

const updateAction = (action) => {
  return jsonfile.writeFile(filePath, action);
};

module.exports = { getAllActions, updateAction };
