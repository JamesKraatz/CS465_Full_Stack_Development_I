const fs = require('fs');
const contactinfo = JSON.parse(fs.readFileSync('./data/contact.json','utf8'));

/* GET traveler view */
const contact = (req, res) => {
    const package = require("../../package.json");
    pageTitle = package.description + ' - Contact';
    res.render('contact', {title: pageTitle, contactinfo});
};

module.exports = {
    contact,
};