const express = require("express");
const router = express.Router();

const userServ = require("../services/userServ");

router.get("/db", async (req, res) => {
  try {
    res.json(await userServ.getAllUsersFromDB());
  } catch (error) {
    res.status(404).json(error.message);
  }
});
router.get("/WS", async (req, res) => {
  try {
    res.json(await userServ.getAllUsersFromWS());
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.get("/db/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await userServ.getUserByIdFromDB(id));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.post("/db", async (req, res) => {
  try {
    const user = req.body;
    res.json(await userServ.addUserToDB(user));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
