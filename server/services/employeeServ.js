const employeeRep = require("../repositories/employeeRep");
const shiftRep = require("../repositories/shiftRep");

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

const assignShiftsToEmployee = ({ empId, shiftsId }) => {
  const emp = employeeRep.getEmployeeById(empId);
  const shifts = shiftRep.getShiftsByIds(shiftsId);

  const oldShiftsToRemove = emp.shifts.filter((id) => {
    !shiftsId.includes(id);
  });

  // Update the employee's shifts
  emp.shifts = shiftsId;
  employeeRep.updateEmployee(id, emp);

  // Remove the employee from shifts that are no longer assigned
  shiftRep.deleteOldShiftsFromEmployee(empId, oldShiftsToRemove);

  // Add the employee to the new shifts if not already there

  shifts.forEach((shift) => {
    if (!shift.employees.includes(empId)) {
      shift.employees.push(empId);
      shiftRep.updateShift(shift.id, shift);
    }
  });
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
  assignShiftsToEmployee,
  deleteEmployee,
};
