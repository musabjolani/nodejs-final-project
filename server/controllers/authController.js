const express = require("express");
const jwt = require("jsonwebtoken");
const userServ = require("../services/userServ");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userName, email } = req.body;

  // if 'username' and 'password' are exist in the DB
  const user = await userServ.getUserAuthFromDB(userName, email);

  if (user) {
    const userId = "IIhjjkuiuijk";
    const SECRET_KEY = "1982738aksjldjasdl";
    const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else return res.json({ token: "" });
});

module.exports = router;
