const Employee = require("../models/employeeModel");

const getAllEmployees = () => {
  return Employee.find();
};

const getEmployeeById = (id) => {
  return Employee.findById(id);
};
const getEmployeesByIds = (empIds) => {
  return Employee.find({ _id: { $in: empIds } });
};

const getEmployeesInDepartment = async (deptId) => {
  return await Employee.find({ departmentId: deptId });
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
  return "Employee Deleted ";
};

const deleteOldEmployeesFromShift = (shiftId, oldEmployeesToRemove) => {
  Employee.updateMany(
    { _id: { $in: oldEmployeesToRemove } },
    { $pull: { shifts: shiftId } }
  );
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeesInDepartment,
  getEmployeesByIds,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  deleteOldEmployeesFromShift,
};
