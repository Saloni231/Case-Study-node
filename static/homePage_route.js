const express = require('express');
const homeRouter = express.Router();
const mongoose = require('mongoose');
const homeData = require('./homePage_Scheme');

async function fetchHomeData(req,res) {

    let homePageData = await homeData.find();
    if(!homePageData) {
        res.status(401).send({errorMsg: "Home page Data not found"});
    }
    else {
        res.status(200).send(homePageData);
    }
}

homeRouter.get("/", fetchHomeData);

module.exports = homeRouter;