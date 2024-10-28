const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("../server/config/db");
const employeeGraphQl = require("../server/graphQl/employeeGraphQl");
const departmentGraphQl = require("../server/graphQl/departmentGraphQl");
const shiftGraphQl = require("../server/graphQl/shiftGraphQl");

const PORT = 3300;
const app = express();

const { employeeSchema } = employeeGraphQl;
const { departmentSchema } = departmentGraphQl;
const { shiftSchema } = shiftGraphQl;

app.use(
  "/employee",
  graphqlHTTP({
    schema: employeeSchema,
    rootValue: employeeGraphQl.root,
  })
);
app.use(
  "/department",
  graphqlHTTP({
    schema: departmentSchema,
    rootValue: departmentGraphQl.root,
  })
);
app.use(
  "/shift",
  graphqlHTTP({
    schema: shiftSchema,
    rootValue: shiftGraphQl.root,
  })
);

connectDB();

app.use(cors());

app.use("/", express.json());

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
