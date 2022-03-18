const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* GET traveler view */
const travel = (req, res) => {
    const package = require("../../package.json");
    pageTitle = package.description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel,
};