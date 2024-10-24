const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    manager: { type: Schema.Types.ObjectId, ref: "Employee" },
  },
  { versionKey: false }
);

const Departmen = mongoose.model("department", departmentSchema);

module.exports = Departmen;
