const { buildSchema } = require("graphql");

const shiftServ = require("../services/shiftServ");

const shiftSchema = buildSchema(`
    
    input ShiftInput{
         date: String
        startingHour: String
        endingHour: String
    }

    type Shift{
        _id:String
        date: String
        startingHour: String
        endingHour: String
        employees:[String]
    }
    
    type Query{
    getAllShifts:[Shift]
    getShiftById(id:String):Shift

    }

    type Mutation{
    addShift(shift:ShiftInput):String
    updateShift(id:String,shift:ShiftInput):String
    assignEmployeesToShift(id:String,employeesIds:[String]):String
    }
    `);

const root = {
  getAllShifts: shiftServ.getAllShifts,
  getShiftById: shiftServ.getShiftById,
  addShift: shiftServ.addShift,
  updateShift: shiftServ.updateShift,
  assignEmployeesToShift: shiftServ.assignEmployeesToShift,
};

module.exports = { root, shiftSchema };
