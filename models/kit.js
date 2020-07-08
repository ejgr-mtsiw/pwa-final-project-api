'use strict';
module.exports = (sequelize, DataTypes) => {
    const Kit = sequelize.define('Kit', {
        name: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        photo: { type: DataTypes.STRING, allowNull: false }
    }, {});
    Kit.associate = function (models) {
        Kit.hasMany(models.Reading);
        Kit.hasMany(models.Event);
    };
    return Kit;
};