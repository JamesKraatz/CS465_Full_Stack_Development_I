const travel = (req, res) => {
    const package = require("../../package.json");
    pageTitle = package.description + ' - Travel';
    res.render('travel', {title: pageTitle});
};

module.exports = {
    travel
};