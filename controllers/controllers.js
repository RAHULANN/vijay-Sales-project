const express = require("express");

const { Telivision,Clock,Laptop,Mobile } = require("../models/users.models")

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

// post router laptop
router.post("/laptop", async (req, res) => {
    try {
        const laptop = await Laptop.create(req.body);
        res.send(laptop);
    }
    catch(err) {
        res.send(err.message)
    }
})

// get request for laptop 
router.get("/laptop", async (req, res) => {
  try {
    const laptop = await Laptop.find().lean().exec();
    res.send(laptop);
  } catch (err) {
    res.send(err.message);
  }
});

// post router mobile
router.post("/mobile", async (req, res) => {
    try {
        const mobile = await Mobile.create(req.body);
        res.send(mobile);
    }
    catch(err) {
        res.send(err.message)
    }
})

// get request for mobile 
router.get("/mobile", async (req, res) => {
  try {
    const mobile = await Mobile.find().lean().exec();
    res.send(mobile);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;