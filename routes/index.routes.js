const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');

module.exports = (auth) => {

    /* GET home page. */
    router.get('/',
        auth.optional,
        homeController.showHomepage);

    return router;
};
