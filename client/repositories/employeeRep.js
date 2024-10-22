const Employee = require("../models/employeeModel");

const getAllEmployees = () => {
  return Employee.find();
};

const getEmployeeById = (id) => {
  return Employee.findById(id);
};

const getEmployeesInDepartment = (deptId) => {
  return Employee.find({ departmentId: deptId });
};

const addEmployee = async (emp) => {
  const newEmp = new Employee(emp);
  await newEmp.save();
  return "Employee Added ";
};

const updateEmployee = async (id, emp) => {
  await Employee.findByIdAndUpdate(id, emp);
  return "Employee Updated ";
};

const deleteEmployee = async (id) => {
  await Employee.findByIdAndDelete(id);
  return "Employee Updated ";
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeesInDepartment,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
