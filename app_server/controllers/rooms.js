const fs = require('fs');
const room = JSON.parse(fs.readFileSync('./data/rooms.json','utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    const package = require("../../package.json");
    pageTitle = package.description + ' - Rooms';
    res.render('rooms', {title: pageTitle, room});
};

module.exports = {
    rooms,
};