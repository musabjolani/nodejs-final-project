const { buildSchema } = require("graphql");

const departmenrServ = require("../services/departmenrServ");

const departmentSchema = buildSchema(`
    
    input DepartmentInput{
    name:String
    manager:String
    }
    
    type Department
    {
    _id:String
    name:String
    manager:String
    }


    type Query{
    
    getAllDepartments:[Department]
    getDepartmentById(id:String):Department
    }
    
    type Mutation {
    addDepartment(dept:DepartmentInput):String
    updateDepartment(id:String,dept:DepartmentInput):String
    deleteDepartment(id:String):String
    }

    `);

const root = {
  getAllDepartments: departmenrServ.getAllDepartments,
  getDepartmentById: departmenrServ.getDepartmentById,
  addDepartment: departmenrServ.addDepartment,
  updateDepartment: departmenrServ.updateDepartment,
  deleteDepartment: departmenrServ.deleteDepartment,
};

module.exports = { departmentSchema, root };
