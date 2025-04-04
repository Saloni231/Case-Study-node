const express = require('express');
const blogRouter = express.Router();
const mongoose = require('mongoose');
const blogData = require('./blogPage_Scheme');

async function fetchBlogData(req,res) {

    let blogPageData = await blogData.find();
    if(!blogPageData) {
        res.status(401).send({errorMsg: "Blog page Data not found"});
    }
    else {
        res.status(200).send(blogPageData);
    }
}

blogRouter.get("/", fetchBlogData);

module.exports = blogRouter;