'use strict';

const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Reading = sequelize.define('Reading', {
        temperature: DataTypes.FLOAT,
        humidity: DataTypes.FLOAT,
        soilHumidity: DataTypes.FLOAT,
        date: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {});
    Reading.associate = function (models) {
        Reading.belongsTo(models.Kit);
    };
    return Reading;
};