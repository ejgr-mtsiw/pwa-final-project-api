
const { body, param } = require('express-validator');

module.exports = {
    KitIdParam: param('KitId').notEmpty().isNumeric(),
    id: body('id').notEmpty().isNumeric(),
    KitId: body('KitId').notEmpty().isNumeric(),
    temperature: body('temperature').notEmpty().isNumeric(),
    humidity: body('humidity').notEmpty().isNumeric(),
    soilHumidity: body('soilHumidity').notEmpty().isNumeric(),
    date: body('date').isISO8601().toDate()
};
