const express = require('express');
const headerRouter = express.Router();
const mongoose = require('mongoose');
const Header = require('./headerScheme');


async function fetchHeader(req,res) {

    let Headers = await Header.find();
    if(!Headers) {
        res.status(401).send({errorMsg: "Header not found"});
    }
    else {
        res.status(200).send(Headers);
    }
}
headerRouter.get("/", fetchHeader);

module.exports = headerRouter;