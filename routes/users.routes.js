var express = require('express');
var router = express.Router();

const userController = require('../controllers/users/users.controller');

module.exports = (auth) => {
    /* GET users listing. */
    router.get('/',
        auth.required,
        userController.getAllUsers);

    router.put('/profile/update',
        auth.required,
        userController.updatePassword);

    router.get('/profile',
        auth.required,
        userController.getUserProfile);

    router.post('/create',
        auth.required,
        userController.createNewUser);

    router.put('/:id/update',
        auth.required,
        userController.updateUser);

    router.delete('/:id/delete',
        auth.required,
        userController.deleteUser);

    return router;
};
