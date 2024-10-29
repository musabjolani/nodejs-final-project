const express = require("express");
const router = express.Router();
const actionServ = require("../services/actionServ");

router.get("/search", async (req, res) => {
  try {
    const { id, date } = req.query;
    res.json(await actionServ.getAllActionsByIdAndDate(id, date));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    res.json(await actionServ.getAllActions());
  } catch (error) {
    res.status(404).json([]);
  }
});

router.post("/", async (req, res) => {
  try {
    const action = req.body;
    res.json(await actionServ.addAction(action));
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.put("/update", async (req, res) => {
  try {
    const { id, date } = req.query;
    const action = req.body;
    res.json(await actionServ.updateAction(id, date, action));
  } catch (error) {
    res.status(404).json(error.message);
  }
});
module.exports = router;
