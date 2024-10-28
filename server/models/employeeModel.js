const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const employeeSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    startWorkYear: Number,
    departmentId: {
      type: String,
      ref: "Departmen",
    },
    shifts: [{ type: String, ref: "Shift" }],
  },
  { versionKey: false }
);
const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
