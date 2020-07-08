'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.ENUM('admin', 'user'), allowNull: false },
        lastLogin: DataTypes.DATE
    }, {});
    User.associate = function (models) {
        User.hasMany(models.Event);
    };
    return User;
};