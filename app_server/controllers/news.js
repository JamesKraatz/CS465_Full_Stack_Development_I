const fs = require('fs');
const latestnews = JSON.parse(fs.readFileSync('./data/latestnews.json','utf8'));
const vacationtips = JSON.parse(fs.readFileSync('./data/vacationtips.json','utf8'));
const newstory = JSON.parse(fs.readFileSync('./data/newstory.json','utf8'));

/* GET traveler view */
const news = (req, res) => {
    const package = require("../../package.json");
    pageTitle = package.description + ' - News';
    res.render('news', {title: pageTitle, newstory, latestnews, vacationtips});
};

module.exports = {
    news,
};