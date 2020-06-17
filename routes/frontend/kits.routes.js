const express = require('express');
const router = express.Router();

const kitsController = require('../../controllers/kits/kits.controller');

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

    router.post('/create',
        auth.optional,
        kitsController.createNewKit);

    return router;
};
