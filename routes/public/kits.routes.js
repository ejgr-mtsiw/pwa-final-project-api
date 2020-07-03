const express = require('express');
const router = express.Router();

const kitsController = require('../../controllers/kits/kits.controller');
const readingsController = require("../../controllers/readings/readings.controller");

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
    
    return router;
};
