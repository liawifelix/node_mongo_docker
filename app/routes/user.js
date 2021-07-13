const route = require("express").Router();
const User = require("../models/User");

route.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send("Fail to fetch from DB");
  }
});

route.post("/", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      introduction: req.body.introduction,
    });
    const saved_user = await user.save();
    res.status(200).json(saved_user);
  } catch (err) {
    res.status(400).send("Fail to create user");
  }
});

module.exports = route;
