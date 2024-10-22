const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = 3300;
const app = express();

connectDB();

app.use(cors());

app.use("/", express.json());

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
