'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Readings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            KitId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Kits',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            temperature: {
                type: Sequelize.FLOAT
            },
            humidity: {
                type: Sequelize.FLOAT
            },
            soilHumidity: {
                type: Sequelize.FLOAT
            },
            date: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Readings');
    }
};
