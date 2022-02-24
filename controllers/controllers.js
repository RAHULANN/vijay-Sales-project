const express = require("express");

const { Telivision,Clock } = require("../models/users.models")

const router = express.Router();

// post router telivisions 

router.post("/telvisions", async (req, res) => {
    try {
        const teilvision = await Telivision.create(req.body);
        res.send(teilvision)
    }
    catch(err) {
        res.send(err.message)
    }
})

// get request for telivisions 

router.get("/telvisions", async (req, res) => {
  try {
    const teilvision = await Telivision.find().lean().exec();
    res.send(teilvision);
  } catch (err) {
    res.send(err.message);
  }
});

// craete all such things for electronic as well

// post router clock 

router.post("/clock", async (req, res) => {
    try {
        const clock = await Clock.create(req.body);
        res.send(clock)
    }
    catch(err) {
        res.send(err.message)
    }
})

// get request for clock 

router.get("/clock", async (req, res) => {
  try {
    const clock = await Clock.find().lean().exec();
    res.send(clock);
  } catch (err) {
    res.send(err.message);
  }
});

// for deleting data base clock



module.exports = router;