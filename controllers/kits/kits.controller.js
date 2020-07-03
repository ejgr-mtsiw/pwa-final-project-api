const env = process.env.NODE_ENV || 'development';
const messages = require('../../config/messages/bd');
const uploadPath = require('../../config/config.json')[env]['uploads'] + '/kits/';

const models = require('../../models');
const { validationResult } = require('express-validator');
const validator = require('./kits.validator');

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

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        if (!req.files.photo) {
            return res.status(404)
                .send({ msg: "Missing photo!" });
        }

        let photoFile = req.files.photo;
        //Use the mv() method to place the file in upload directory (i.e. "uploads")
        let photo = photoFile.md5;
        photoFile.mv(uploadPath + photo);

        models.Kit.create({
            name: req.body.name,
            location: req.body.location,
            photo: photo
        }).then((kit) => {
            return res.status(messages.db.successInsert.status)
                .send(messages.db.successInsert);
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
    validator.oldPhoto,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        let photo = req.body.oldPhoto;

        if (req.files != null && req.files.photo != null) {
            // We're replacing the photo
            let photoFile = req.files.photo;
            // Use the mv() method to place the file in upload
            // directory(i.e. "uploads")
            photo = photoFile.md5;
            photoFile.mv(uploadPath + photo);
        }

        models.Kit.update({
            name: req.body.name,
            location: req.body.location,
            photo: photo
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

    validator.id,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.Kit.destroy({
            where: {
                id: req.body.id
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
