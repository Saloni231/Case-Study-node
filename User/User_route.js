const express = require("express");
const userRouter = express.Router();
const mongoose = require("mongoose");
const User = require("./User_Scheme");

async function postUser(req, res) {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then((item) => res.status(200).send("data saved"))
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
}

async function loginUser(req, res) {
    const user = await User.findOne({email: req.body.email, password: req.body.password});
    console.log(user);

    if(user) {
        res.status(200).send('Success');
    } else {
        res.status(400).send('Failed');
    }
}

userRouter.post("/register", postUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
