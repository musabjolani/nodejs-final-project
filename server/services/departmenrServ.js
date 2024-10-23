const departmentRep = require("../repositories/departmentRep");

const getAllDepartments = () => {
  return departmentRep.getAllDepartments();
};

const getDepartmentById = (id) => {
  return departmentRep.getDepartmentById(id);
};

const addDepartment = async (dept) => {
  return departmentRep.addDepartment(dept);
};
const updateDepartment = async (id, dept) => {
  return departmentRep.updateDepartment(id, dept);
};
const deleteDepartment = async (id) => {
  return departmentRep.deleteDepartment(id);
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
