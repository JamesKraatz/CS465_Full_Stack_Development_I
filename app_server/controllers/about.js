const fs = require('fs');
const aboutinfo = JSON.parse(fs.readFileSync('./data/about.json','utf8'));

/* GET traveler view */
const about = (req, res) => {
    const package = require("../../package.json");
    pageTitle = package.description + ' - About';
    res.render('about', {title: pageTitle, aboutinfo});
};

module.exports = {
    about,
};