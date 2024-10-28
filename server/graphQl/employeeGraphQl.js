const { buildSchema } = require("graphql");
const employeeServ = require("../services/employeeServ");
const employeeSchema = buildSchema(`
 

    input EmployeeInput{
        firstName: String
        lastName: String
        startWorkYear:Int
        departmentId:Int
        shifts: [ShiftInput]
    }
   
    input ShiftInput{
         date: String
        startingHour: Int
        endingHour: Int
    }
    
    type Shift{
        _id:Int
        date: String
        startingHour: Int
        endingHour: Int
    }

    type Employee
    {
        _id:String,
        firstName: String
        lastName: String
        startWorkYear: Int
        departmentId:Int
        shifts: [Shift]
    }

    type Query {
        getAllEmployees:[Employee]
        getEmployeeById(id:String):Employee
        getEmployeesInDepartment(deptId:String):[Employee]
    }
    
    type Mutation {
        addEmployee(emp:EmployeeInput):String
        assignShiftsToEmployee(id:String,shiftsIds:[String]):String
        assignDepartmentToEmployee(id:String,deptId:String):String
        updateEmployee(id:String,emp:EmployeeInput):String
        deleteEmployee(id:String):String
    }
    `);

const root = {
  getAllEmployees: employeeServ.getAllEmployees,
  getEmployeeById: employeeServ.getEmployeeById,
  getEmployeesInDepartment: employeeServ.getEmployeesInDepartment,
  addEmployee: employeeServ.addEmployee,
  assignShiftsToEmployee: employeeServ.assignShiftsToEmployee,
  assignDepartmentToEmployee: employeeServ.assignDepartmentToEmployee,
  updateEmployee: employeeServ.updateEmployee,
  deleteEmployee: employeeServ.deleteEmployee,
};

module.exports = { employeeSchema, root };
