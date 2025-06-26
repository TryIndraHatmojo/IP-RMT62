"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PromptProposals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      businessInterestField: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      capital: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      preference: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      businessGoal: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      longTermVision: {
        type: Sequelize.STRING,
      },
      targetMarket: {
        type: Sequelize.STRING,
      },
      productUniqueness: {
        type: Sequelize.STRING,
      },
      mainCompetitors: {
        type: Sequelize.STRING,
      },
      marketingPlan: {
        type: Sequelize.STRING,
      },
      UserId: {
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PromptProposals");
  },
};
