const express = require("express");
const contactUsRouter = express.Router();
const mongoose = require("mongoose");
const contact = require("./ContactUs_Scheme");

async function postContact(req, res) {
  console.log(req.body);
  const details = new contact(req.body);
  details
    .save()
    .then((item) => res.send("data saved"))
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
}
contactUsRouter.post("/", postContact);

module.exports = contactUsRouter;
