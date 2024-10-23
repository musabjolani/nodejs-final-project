const Shift = require("../models/ShiftModel");

const getAllShifts = () => {
  return Shift.find();
};

const getShiftById = (id) => {
  return Shift.findById(id);
};

const addShift = async (shift) => {
  const newShift = new Shift(shift);
  await newShift.save();
  return "Shift Added ";
};

const updateShift = async (id, dept) => {
  await Shift.findByIdAndUpdate(id, dept);
  return "Shift Updated ";
};

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  updateShift,
};
