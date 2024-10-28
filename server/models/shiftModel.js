const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const shiftSchema = new mongoose.Schema(
  {
    date: Date,
    startingHour: String,
    endingHour: String,
    employees: [
      {
        type: String,
        ref: "Employee",
      },
    ],
  },
  { versionKey: false }
);

const Shift = mongoose.model("shift", shiftSchema);

module.exports = Shift;
