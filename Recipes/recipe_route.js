const express = require('express');
const recipeRouter = express.Router();

const { fetchRecipes } = require('./recipeController');

recipeRouter.get("/", fetchRecipes);

module.exports = recipeRouter;