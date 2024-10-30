const employeeRep = require("../repositories/employeeRep");
const shiftRep = require("../repositories/shiftRep");

const getAllEmployees = async ({}) => {
  try {
    return await employeeRep.getAllEmployees();
  } catch (error) {
    return error.message;
  }
};

const getEmployeeById = ({ id }) => {
  try {
    return employeeRep.getEmployeeById(id);
  } catch (error) {
    return error.message;
  }
};

const getEmployeesInDepartment = ({ deptId }) => {
  try {
    return employeeRep.getEmployeesInDepartment(deptId);
  } catch (error) {
    return error.message;
  }
};

const addEmployee = async ({ emp }) => {
  try {
    return await employeeRep.addEmployee(emp);
  } catch (error) {
    return error.message;
  }
};

const assignShiftsToEmployee = async ({ id, shiftsIds }) => {
  try {
    const emp = await employeeRep.getEmployeeById(id);
    const shifts = await shiftRep.getShiftsByIds(shiftsIds);

    const oldShiftsToRemove = emp.shifts.filter((id) => {
      !shiftsIds.includes(id);
    });

    // Update the employee's shifts
    emp.shifts = shiftsIds;
    await employeeRep.updateEmployee(id, emp);

    // Remove the employee from shifts that are no longer assigned
    await shiftRep.deleteOldShiftsFromEmployee(id, oldShiftsToRemove);

    // Add the employee to the new shifts if not already there
    shifts.forEach(async (shift) => {
      if (!shift.employees.includes(id)) {
        shift.employees.push(id);
        await shiftRep.updateShift(shift._id, shift);
      }
    });
    return "The Shifts is assigned to The Employee";
  } catch (error) {
    return error.message;
  }
};

const assignDepartmentToEmployee = async ({ id, deptId }) => {
  try {
    const emp = await employeeRep.getEmployeeById(id);
    emp.departmentId = deptId;
    return employeeRep.updateEmployee(id, emp);
  } catch (error) {
    return error.message;
  }
};

const updateEmployee = async ({ id, emp }) => {
  try {
    return await employeeRep.updateEmployee(id, emp);
  } catch (error) {
    return error.message;
  }
};
const deleteEmployee = async ({ id }) => {
  try {
    return await employeeRep.deleteEmployee(id);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeesInDepartment,
  addEmployee,
  updateEmployee,
  assignShiftsToEmployee,
  assignDepartmentToEmployee,
  deleteEmployee,
};
