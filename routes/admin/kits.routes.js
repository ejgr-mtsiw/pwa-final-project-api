const express = require('express');
const router = express.Router();

const kitsController = require('../../controllers/kits/kits.controller');
const readingsController = require("../../controllers/readings/readings.controller");

module.exports = (auth) => {

    router.get('/',
        auth.required,
        kitsController.getAllKits);

    router.get('/:id',
        auth.required,
        kitsController.getKitById);

    router.get('/:id/photo',
        auth.required,
        kitsController.getKitPhotoById);

    router.post('/create',
        auth.required,
        kitsController.createNewKit);

    router.put('/:id/update',
        auth.required,
        kitsController.updateKit);

    router.post('/:id/delete',
        auth.required,
        kitsController.deleteKit);

    /* GET readings for a single kit */
    router.get("/:KitId/readings",
        auth.required,
        readingsController.getAllReadingsForKit);

    /* Add reading for a kit */
    router.post('/:KitId/readings/create',
        auth.required,
        readingsController.addReading);

    return router;
};
