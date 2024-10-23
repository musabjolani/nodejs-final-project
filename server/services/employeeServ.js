const employeeRep = require("../repositories/employeeRep");

const getAllEmployees = () => {
  return employeeRep.getEmployeeById();
};

const getEmployeeById = (id) => {
  return employeeRep.getEmployeeById(id);
};

const getEmployeesInDepartment = (empId) => {
  return employeeRep.getEmployeesInDepartment(empId);
};

const addEmployee = async (emp) => {
  return employeeRep.addEmployee(emp);
};

const updateShiftsToEmployee = (id, shifts) => {
  const emp = getEmployeeById(id);
  emp.shifts = shifts;
  return employeeRep.updateEmployee(id, emp);
};

const updateEmployee = async (id, emp) => {
  return employeeRep.updateEmployee(id, emp);
};
const deleteEmployee = async (id) => {
  return employeeRep.deleteEmployee(id);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeesInDepartment,
  addEmployee,
  updateEmployee,
  updateShiftsToEmployee,
  deleteEmployee,
};
