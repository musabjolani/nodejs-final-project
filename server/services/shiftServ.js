const shiftRep = require("../repositories/shiftRep");
const employeeRep = require("../repositories/employeeRep");

const getAllShifts = () => {
  return shiftRep.getAllShifts();
};

const getShiftById = (id) => {
  return shiftRep.getShiftById(id);
};

const addShift = async (shift) => {
  return shiftRep.addShift(shift);
};
const updateShift = async (id, shift) => {
  return shiftRep.updateShift(id, shift);
};

const updateEmployeesToShift = (id, emps) => {
  const shift = getShiftById(id);
  shift.emps = emps;
  return shiftRep.updateShift(id, shift);
};

const assignEmployeesToShift = ({ shiftId, employeesIds }) => {
  const shift = shiftRep.getShiftById(shiftId);
  const employees = employeeRep.getEmployeesByIds(employeesIds);

  // Find and remove any employees not included in the emp
  const oldEmployeesToRemove = shift.employees.filter((id) => {
    !employeesIds.includes(id);
  });

  shift.employees = employeesIds;
  shiftRep.updateShift(shiftId, shift);

  // Remove the shift from employees that are no longer assigned to it
  employeeRep.deleteOldEmployeesFromShift(shiftId, oldEmployeesToRemove);

  // Add the shift to the new employees if not already there
  employees.forEach((emp) => {
    if (emp.shifts.includes(shiftId)) {
      emp.shifts.push(shiftId);
      employeeRep.updateEmployee(emp);
    }
  });
};

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  updateShift,
  updateEmployeesToShift,
};
