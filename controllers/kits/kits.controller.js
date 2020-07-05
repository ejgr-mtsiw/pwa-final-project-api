const env = process.env.NODE_ENV || 'development';
const messages = require('../../config/messages/bd');
const uploadPath = require('../../config/config.json')[env]['uploads'] + '/kits/';

const models = require('../../models');
const { validationResult } = require('express-validator');
const validator = require('./kits.validator');
const { log } = require('debug');

var exports = module.exports = {};

/**
 * Get all kits (admin)
 */
exports.getAllKits = (req, res) => {

    models.Kit.findAll()
        .then((kits) => {
            if (!kits) {
                return res.status(messages.db.noRecords.status)
                    .send(messages.db.noRecords);
            }

            return res.send(kits);
        });
};

/**
 * Get a kit by id
 */
exports.getKitById = [

    validator.idParam,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Kit.findByPk(req.params.id)
            .then((kit) => {
                if (!kit) {
                    return res.status(messages.db.noRecords.status)
                        .send(messages.db.noRecords);
                }

                return res.send(kit);
            });
    }
];

/**
 * Get a kit photo
 */
exports.getKitPhotoById = [

    validator.idParam,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Kit.findByPk(req.params.id)
            .then((kit) => {
                if (!kit) {
                    return res.status(messages.db.noRecords.status)
                        .send(messages.db.noRecords);
                }

                return res.sendFile(uploadPath + kit.photo,
                    {
                        headers: { 'content-type': 'image/jpeg' }
                    });
            });
    }
];

/**
 * Create a new Kit
 */
exports.createNewKit = [

    validator.name,
    validator.location,
    validator.photo,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Kit.create({
            name: req.body.name,
            location: req.body.location,
            photo: req.body.photo
        }).then((kit) => {
            msg = messages.db.successInsert;
            msg.kit = kit;

            return res.status(messages.db.successInsert.status)
                .send(msg);
        }).catch((err) => {
            console.log(err);
            return res.status(messages.db.dbError.status)
                .send(messages.db.dbError);
        });
    }
];

/**
 * Updates a Kit
 */
exports.updateKit = [

    validator.id,
    validator.name,
    validator.location,
    validator.photo,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Kit.update({
            name: req.body.name,
            location: req.body.location,
            photo: req.body.photo
        }, {
            where: {
                id: req.body.id
            }
        }).then((kit) => {
            return res.status(messages.db.successUpdate.status)
                .send(messages.db.successUpdate);
        }).catch((err) => {
            console.log(err);
            return res.status(messages.db.dbError.status)
                .send(messages.db.dbError);
        });
    }
];

/**
 * Deletes a Kit
 */
exports.deleteKit = [

    validator.idParam,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Kit.destroy({
            where: {
                id: req.params.id
            }
        }).then((rowDeleted) => { // rowDeleted will return number of rows deleted
            if (rowDeleted === 1) {
                return res.status(messages.db.successDelete.status)
                    .send(messages.db.successDelete);
            } else {
                return res.status(messages.db.dbError.status)
                    .send(messages.db.dbError);
            }
        }).catch((err) => {
            return res.status(messages.db.dbError.status)
                .send(messages.db.dbError);
        });
    }
];

