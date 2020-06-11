const express = require('express');
const router = express.Router();

const kitsController = require('../../controllers/kits/kits.controller');

module.exports = (auth) => {

    router.get('/',
        auth.optional,
        kitsController.getAllKits);

    return router;
};
