
const { body, param } = require('express-validator');

module.exports = {
    KitIdParam: param('KitId').notEmpty().isNumeric(),
    id: body('id').notEmpty().isNumeric(),
    KitId: body('KitId').notEmpty().isNumeric(),
    description: body('description').trim().notEmpty().escape(),
    details: body('details').trim().notEmpty().escape(),
    date: body('date').isISO8601().toDate()
};
