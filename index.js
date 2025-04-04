let express = require('express');
let app = express();

const mongoose = require('mongoose');
const body_parser = require('body-parser');

const recipe = require('./Recipes/recipe_route');
const header = require('./Headers/header_route');
const homePageData = require('./static/homePage_route');
const aboutPageData = require('./static/aboutPage_route');
const blogPageData = require('./static/blogPage_route');
const contactUs = require('./Contact Us/ContactUs_route');
const user = require('./User/User_route');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
  });

app.use("/recipes", recipe);
app.use("/headers", header);
app.use("/home",homePageData);
app.use("/about",aboutPageData);
app.use("/blog",blogPageData);
app.use("/contact", contactUs);
app.use('/user',user);

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Food_Store', (err, db) => {
    if(!err) {
        console.log('Connected to database');
    }
    else {
        console.log('Error in connecting to database');
    }
})

app.listen(3002);