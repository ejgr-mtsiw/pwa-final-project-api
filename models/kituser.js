'use strict';
module.exports = (sequelize, DataTypes) => {
    const KitUser = sequelize.define('KitUser', {
        key: { type: DataTypes.STRING, allowNull: false },
        expires: { type: DataTypes.DATE, allowNull: false }
    }, {});
    KitUser.associate = function (models) {
        KitUser.belongsTo(models.User);
        KitUser.belongsTo(models.Kit);
    };
    return KitUser;
};