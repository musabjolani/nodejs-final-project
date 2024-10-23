const shiftRep = require("../repositories/shiftRep");

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

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  updateShift,
  updateEmployeesToShift,
};
