const models = require('../../models');
const messages = require('../../config/messages/bd');

const { validationResult } = require('express-validator');
const validator = require('./readings.validator');


var exports = module.exports = {};

/**
 * Get all readings for a kit
 */
exports.getAllReadingsForKit = [

    validator.KitIdParam,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Reading.findAll(
            {
                'where': {
                    KitId: req.params.KitId
                }
            }
        ).then((readings) => {
            res.send(readings);
        });
    }
];
