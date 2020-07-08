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
        res.send(users);
    });
};

exports.getUserById = [
    validator.id,

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let msg = messages.db.requiredData;
            msg.errors = errors;
            return res.status(msg.status)
                .send(msg);
        }

        models.User.findByPk(req.body.id, {
            attributes: ['id', 'email', 'name', 'role', 'lastLogin']
        }).then((user) => {
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
            data.password = req.body.password;
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
