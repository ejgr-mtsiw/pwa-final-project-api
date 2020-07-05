const express = require('express');
const router = express.Router();

const kitsController = require('../controllers/kits/kits.controller');
const readingsController = require("../controllers/readings/readings.controller");

module.exports = (auth) => {

    router.get('/',
        auth.optional,
        kitsController.getAllKits);

    router.get('/:id',
        auth.optional,
        kitsController.getKitById);

    router.get('/:id/photo',
        auth.optional,
        kitsController.getKitPhotoById);

    /* GET readings for a single kit */
    router.get("/:KitId/readings",
        auth.optional,
        readingsController.getAllReadingsForKit);

    /* GET chart for a single kit */
    router.get("/:KitId/readings/chart",
        auth.optional,
        readingsController.renderChartLast10Readings);

    router.post('/create',
        auth.required,
        kitsController.createNewKit);

    router.put('/:id/update',
        auth.required,
        kitsController.updateKit);

    router.delete('/:id/delete',
        auth.required,
        kitsController.deleteKit);

    /* Add reading for a kit */
    router.post('/:KitId/readings/create',
        auth.required,
        readingsController.addReading);

    return router;
};
