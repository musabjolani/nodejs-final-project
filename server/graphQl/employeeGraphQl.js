const { buildSchema } = require("graphql");
const employeeServ = require("../services/employeeServ");

const employeeSchema = buildSchema(`
    

type Shift{
_id:Int,
 date: Date,
    startingHour: Number,
    endingHour: Number,

}

    type Employee
    {
    _id:String,
    firstName: String,
    lastName: String,
    startWorkYear: Int,
    departmentId:Int,
    shifts: [{ type: S
    }
    type Query {}
    `);
