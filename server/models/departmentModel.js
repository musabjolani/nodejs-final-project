const mongoose = require("mongoose");
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const departmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    manager: { type: String, ref: "Employee" },
  },
  { versionKey: false }
);

const Departmen = mongoose.model("department", departmentSchema);

module.exports = Departmen;
