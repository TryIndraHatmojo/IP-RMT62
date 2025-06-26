"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Proposal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Proposal.belongsTo(models.User, { foreignKey: "UserId" });
      Proposal.belongsTo(models.PromptProposal, {
        foreignKey: "PromptProposalId",
      });
    }
  }
  Proposal.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "UserId is required" },
          isInt: { msg: "UserId must be an integer" },
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Title is required" },
          notEmpty: { msg: "Title is required" },
        },
      },
      aiOutput: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: "AI output is required" },
          notEmpty: { msg: "AI output is required" },
        },
      },
      PromptProposalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "PromptProposalId is required" },
          isInt: { msg: "PromptProposalId must be an integer" },
        },
      },
    },
    {
      sequelize,
      modelName: "Proposal",
    }
  );
  return Proposal;
};
