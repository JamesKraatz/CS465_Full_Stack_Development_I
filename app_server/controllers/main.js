const req = require("express/lib/request");

/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways'});
};
module.exports = {
    index,
}