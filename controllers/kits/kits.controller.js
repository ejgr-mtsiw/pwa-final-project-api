const models = require('../../models');

var exports = module.exports = {};

/**
 * Get all kits (admin)
 */
exports.getAllKits = (req, res) => {

    models.Kit.findAll()
        .then((kits) => {
            res.send(kits);
        });
};
