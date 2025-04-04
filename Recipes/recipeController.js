const mongoose = require('mongoose');
const Recipe = require('./recipeScheme');

async function fetchRecipes(req,res) {
    const {page, recordPerPage} = req.body;
    let Recipes = await Recipe.find().skip((page * recordPerPage) -  recordPerPage).limit(recordPerPage);
    if(!Recipes) {
        res.status(401).send({errorMsg: "Recipes not found"});
    }
    else {
        const count = await Recipe.count();
        const pageData = {
            totalRecords: count,
            totalPages: Math.ceil(count/recordPerPage),
            page,
            recordPerPage
        }
        res.status(200).send({Recipes, pageData});
    }
}

module.exports = {fetchRecipes};