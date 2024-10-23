const Department = require("../models/departmentModel");

const getAllDepartments = () => {
  return Department.find();
};

const getDepartmentById = (id) => {
  return Department.findById(id);
};

const addDepartment = async (dept) => {
  const newDept = new Department(dept);
  await newDept.save();
  return "Department Added ";
};
const updateDepartment = async (id, dept) => {
  await Department.findByIdAndUpdate(id, dept);
  return "Department Updated ";
};

const deleteDepartment = async (id) => {
  await Department.findByIdAndDelete(id);
  return "Department Updated ";
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
