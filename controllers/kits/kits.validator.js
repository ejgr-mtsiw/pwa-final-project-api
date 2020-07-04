
const { body, param, files } = require('express-validator');

module.exports = {
    idParam: param('id').notEmpty().isNumeric(),
    id: body('id').notEmpty().isNumeric(),
    name: body('name').trim().notEmpty().escape(),
    location: body('location').trim().notEmpty().escape(),
    photo: body('photo').trim().notEmpty().escape()
};
