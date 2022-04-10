const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

/* Get trips */
router 
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);

module.exports = router;