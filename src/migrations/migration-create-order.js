'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            // userId: DataTypes.INTEGER,
            // fullname: DataTypes.STRING,
            // phonenumber: DataTypes.STRING,
            // address: DataTypes.STRING,
            // totalprice: DataTypes.INTEGER,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            fullname: {
                type: Sequelize.STRING,
            },
            phonenumber: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            totalprice: {
                type: Sequelize.INTEGER
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Orders');
    }
};