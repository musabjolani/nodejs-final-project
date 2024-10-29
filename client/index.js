const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("../server/config/db");
const employeeGraphQl = require("../server/graphQl/employeeGraphQl");
const departmentGraphQl = require("../server/graphQl/departmentGraphQl");
const shiftGraphQl = require("../server/graphQl/shiftGraphQl");
const userRouter = require("../server/controllers/userController");
const actionRouter = require("../server/controllers/actionController");
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

app.use("/", express.json());
app.use("/user", userRouter);
app.use("/action", actionRouter);

connectDB();

app.use(cors());

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
