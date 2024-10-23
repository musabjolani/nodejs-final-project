const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    startWorkYear: Number,
    firstName: String,
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Departmen",
    },
    shifts: [{ type: Schema.Types.ObjectId, ref: "Shift" }],
  },
  { versionKey: false }
);
const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
