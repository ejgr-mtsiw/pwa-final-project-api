const models = require('../../models');
const messages = require('../../config/messages/bd');

const { validationResult } = require('express-validator');
const validator = require('./events.validator');

var exports = module.exports = {};

/**
 * Get all events for a kit
 */
exports.getAllEventsForKit = [

    validator.KitIdParam,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Event.findAll(
            {
                'where': {
                    KitId: req.params.KitId
                }
            }
        ).then((events) => {
            return res.send(events);
        });
    }
];

/**
 * Add an event for a kit
 */
exports.addEvent = [

    validator.KitId,
    validator.description,
    validator.details,
    validator.date,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Event.create({
            KitId: req.body.KitId,
            date: req.body.date,
            description: req.body.description,
            details: req.body.details
        }).then((event) => {
            let msg = messages.db.successInsert;
            msg.event = event;
            return res.status(messages.db.successInsert.status)
                .send(msg);
        }).catch((err) => {
            console.log(err);
            return res.status(messages.db.dbError.status)
                .send(messages.db.dbError);
        });
    }
];
