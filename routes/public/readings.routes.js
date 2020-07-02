const express = require('express');
const router = express.Router();

const readingsController = require('../../controllers/readings/readings.controller');

module.exports = (auth) => {

    /* GET readings for a single kit page. */
    router.get('/:KitId',
        auth.optional,
        readingsController.getAllReadingsForKit);

    router.post('/:KitId',
        auth.required,
        readingsController.addReading);

    return router;
};
