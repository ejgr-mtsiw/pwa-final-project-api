const models = require('../../models');
const messages = require('../../config/messages/bd');

const { validationResult } = require('express-validator');
const validator = require('./users.validator');

const { generateHash } = require('../../config/passport/passport');

var exports = module.exports = {};

/**
 * Get all users (admin)
 */
exports.getAllUsers = (req, res) => {

    models.User.findAll({
        attributes: ['id', 'email', 'name', 'role', 'lastLogin']
    }).then((users) => {
        if (!users) {
            return res.status(messages.db.noRecords.status)
                .send(messages.db.noRecords);
        }

        return res.send(users);
    });
};

exports.getUserById = [
    validator.idParam,

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let msg = messages.db.requiredData;
            msg.errors = errors;
            return res.status(msg.status)
                .send(msg);
        }

        models.User.findByPk(req.params.id, {
            attributes: ['id', 'email', 'name', 'role', 'lastLogin']
        }).then((user) => {
            if (!user) {
                return res.status(messages.db.noRecords.status)
                    .send(messages.db.noRecords);
            }

            return res.send(user);
        });
    }
];

exports.getUserProfile = [
    (req, res) => {
        return res.send({
            id: req.user.id,
            email: req.user.email,
            name: req.user.name,
            lastLogin: req.user.lastLogin
        });
    }
];

exports.createNewUser = [

    validator.email,
    validator.password,
    validator.name,
    validator.role,

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let msg = messages.db.requiredData;
            msg.errors = errors;
            return res.status(msg.status)
                .send(msg);
        }

        models.User.create(
            {
                email: req.body.email,
                name: req.body.name,
                role: req.body.role,
                password: generateHash(req.body.password)
            }
        ).then((user) => {
            msg = messages.db.successInsert;
            msg.user = user;

            // Don't send password back!
            msg.user.password = '';

            return res.status(messages.db.successInsert.status)
                .send(msg);
        }).catch((err) => {
            console.log(err);
            return res.status(messages.db.dbError.status)
                .send(messages.db.dbError);
        });
    }
];

exports.updateUser = [

    validator.id,
    validator.email,
    validator.passwordOptional,
    validator.name,
    validator.role,

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let msg = messages.db.requiredData;
            msg.errors = errors;
            return res.status(msg.status)
                .send(msg);
        }

        let data = {
            email: req.body.email,
            name: req.body.name,
            role: req.body.role
        };

        if (req.body.password) {
            data.password = generateHash(req.body.password);
        }

        models.User.update(data, {
            where: {
                id: req.body.id
            }
        }).then((user) => {
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
 * Update password for the authenticated user (used in profile)
 */
exports.updatePassword = [

    validator.password,

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let msg = messages.db.requiredData;
            msg.errors = errors;
            return res.status(msg.status)
                .send(msg);
        }

        models.User.update({
            password: generateHash(req.body.password)
        }, {
            where: {
                id: req.user.id
            }
        }).then((user) => {
            return res.status(messages.db.successUpdate.status)
                .send(messages.db.successUpdate);
        }).catch((err) => {
            console.log(err);
            return res.status(messages.db.dbError.status)
                .send(messages.db.dbError);
        });
    }
];

exports.deleteUser = [

    validator.idParam,

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(messages.db.requiredData.status)
                .send(messages.db.requiredData);
        }

        models.User.destroy({
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