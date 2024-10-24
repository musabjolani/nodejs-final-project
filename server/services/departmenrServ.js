const departmentRep = require("../repositories/departmentRep");
const employeeRep = require("../repositories/employeeRep");

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
  //Get the Employees from deleted department
  const empsInDept = employeeRep.getEmployeesInDepartment(id);

  //Remove all Employees from deleted department
  empsInDept.forEach((emp) => {
    emp.depdepartmentId = null;
  });

  return departmentRep.deleteDepartment(id);
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
