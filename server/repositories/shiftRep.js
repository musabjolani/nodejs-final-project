const Shift = require("../models/ShiftModel");

const getAllShifts = () => {
  return Shift.find();
};

const getShiftById = (id) => {
  return Shift.findById(id);
};

const getShiftsByIds = (shiftIds) => {
  return Shift.find({ _id: { $in: shiftIds } });
};

const deleteOldShiftsFromEmployee = async (empId, oldShiftsToRemove) => {
  await Shift.updateMany(
    { _id: { $in: oldShiftsToRemove } },
    { $pull: { employees: empId } }
  );
  return "Removed The old Shifts From Employee";
};

const addShift = async (shift) => {
  const newShift = new Shift(shift);
  await newShift.save();
  return "Shift Added ";
};

const updateShift = async (id, shift) => {
  await Shift.findByIdAndUpdate(id, shift);
  return "Shift Updated ";
};

module.exports = {
  getAllShifts,
  getShiftById,
  getShiftsByIds,
  addShift,
  updateShift,
  deleteOldShiftsFromEmployee,
};
