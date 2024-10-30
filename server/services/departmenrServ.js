const departmentRep = require("../repositories/departmentRep");
const employeeRep = require("../repositories/employeeRep");

const getAllDepartments = async () => {
  try {
    return await departmentRep.getAllDepartments();
  } catch (error) {
    return error.message;
  }
};

const getDepartmentById = async ({ id }) => {
  try {
    return await departmentRep.getDepartmentById(id);
  } catch (error) {
    return error.message;
  }
};

const addDepartment = async ({ dept }) => {
  try {
    return await departmentRep.addDepartment(dept);
  } catch (error) {
    return error.message;
  }
};
const updateDepartment = async ({ id, dept }) => {
  try {
    return await departmentRep.updateDepartment(id, dept);
  } catch (error) {
    return error.message;
  }
};
const deleteDepartment = async ({ id }) => {
  try {
    //Get the Employees from deleted department
    const empsInDept = await employeeRep.getEmployeesInDepartment(id);

    //Remove all Employees from deleted department
    empsInDept.forEach(async (emp) => {
      emp.departmentId = "";
      await employeeRep.updateEmployee(emp._id, emp);
    });

    return await departmentRep.deleteDepartment(id);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
