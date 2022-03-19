const fs = require('fs');
const foods = JSON.parse(fs.readFileSync('./data/foods.json','utf8'));

/* GET meals view */
const meals = (req, res) => {
    const package = require("../../package.json");
    pageTitle = package.description + ' - Meals';
    res.render('meals', {title: pageTitle, foods});
};

module.exports = {
    meals,
};