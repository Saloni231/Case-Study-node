const express = require('express');
const aboutRouter = express.Router();
const mongoose = require('mongoose');
const aboutData = require('./aboutPage_Scheme');

async function fetchAboutData(req,res) {

    let aboutPageData = await aboutData.find();
    if(!aboutPageData) {
        res.status(401).send({errorMsg: "About page Data not found"});
    }
    else {
        res.status(200).send(aboutPageData);
    }
}

aboutRouter.get("/", fetchAboutData);

module.exports = aboutRouter;