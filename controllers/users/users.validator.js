
const { body, param } = require('express-validator');

module.exports = {
    idParam: param('id').notEmpty().isNumeric(),
    id: body('id').notEmpty().isNumeric(),
    email: body('email').trim().notEmpty().isEmail().normalizeEmail(),
    name: body('name').trim().notEmpty().escape(),
    role: body('role').trim().notEmpty().escape(),
    password: body('password').notEmpty().escape(),
    passwordOptional: body('password').optional({ checkFalsy: true }).escape()
};
