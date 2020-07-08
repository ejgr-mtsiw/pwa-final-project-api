'use strict';
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        description: DataTypes.STRING,
        details: DataTypes.TEXT,
        date: DataTypes.DATE
    }, {});
    Event.associate = function (models) {
        Event.belongsTo(models.Kit);
        Event.belongsTo(models.User);
    };
    return Event;
};