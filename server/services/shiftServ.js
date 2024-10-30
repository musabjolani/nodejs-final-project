const shiftRep = require("../repositories/shiftRep");
const employeeRep = require("../repositories/employeeRep");

const getAllShifts = async () => {
  try {
    return await shiftRep.getAllShifts();
  } catch (error) {
    return error.message;
  }
};

const getShiftById = async ({ id }) => {
  try {
    return await shiftRep.getShiftById(id);
  } catch (error) {
    return error.message;
  }
};

const addShift = async ({ shift }) => {
  try {
    return await shiftRep.addShift(shift);
  } catch (error) {
    return error.message;
  }
};

const updateShift = async ({ id, shift }) => {
  try {
    return await shiftRep.updateShift(id, shift);
  } catch (error) {
    return error.message;
  }
};

// const updateEmployeesToShift = async ({ id, emps }) => {
//   try {
//     const shift = await shiftRep.getShiftById(id);
//     shift.emps = emps;
//     return await shiftRep.updateShift(id, shift);
//   } catch (error) {
//     return error.message;
//   }
// };

const assignEmployeesToShift = async ({ id, employeesIds }) => {
  try {
    const shift = await shiftRep.getShiftById(id);
    const employees = await employeeRep.getEmployeesByIds(employeesIds);

    // Find and remove any employees not included in the emp
    const oldEmployeesToRemove = shift.employees.filter((id) => {
      !employeesIds.includes(id);
    });

    shift.employees = employeesIds;
    await shiftRep.updateShift(id, shift);

    // Remove the shift from employees that are no longer assigned to it
    await employeeRep.deleteOldEmployeesFromShift(id, oldEmployeesToRemove);

    // Add the shift to the  employees if not already there
    employees.forEach(async (emp) => {
      if (!emp.shifts.includes(id)) {
        emp.shifts.push(id);
        await employeeRep.updateEmployee(emp._id, emp);
      }
    });
    return "The Employees is assigned to The Shift";
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  assignEmployeesToShift,
  updateShift,
};
