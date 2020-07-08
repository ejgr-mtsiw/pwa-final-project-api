var express = require('express');
var router = express.Router();

const userController = require('../controllers/users/users.controller');

module.exports = (auth) => {
    /* GET users listing. */
    router.get('/',
        auth.required,
        userController.getAllUsers);

    router.get('/profile',
        auth.required,
        userController.getUserProfile);

    // router.put('/:id/update',
    //     auth.required,
    //     userController.updateUser);

    router.put('/profile/update',
        auth.required,
        userController.updatePassword);

    return router;
};
