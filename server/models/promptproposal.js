"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PromptProposal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PromptProposal.init(
    {
      businessInterestField: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Minat/Bidang Bisnis wajib diisi" },
          notEmpty: { msg: "Minat/Bidang Bisnis wajib diisi" },
        },
      },
      capital: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Modal wajib diisi" },
          isInt: { msg: "Modal harus berupa angka" },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Lokasi wajib diisi" },
          notEmpty: { msg: "Lokasi wajib diisi" },
        },
      },
      preference: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Preferensi wajib diisi" },
          notEmpty: { msg: "Preferensi wajib diisi" },
        },
      },
      businessGoal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Tujuan bisnis wajib diisi" },
          notEmpty: { msg: "Tujuan bisnis wajib diisi" },
        },
      },
      longTermVision: DataTypes.STRING,
      targetMarket: DataTypes.STRING,
      productUniqueness: DataTypes.STRING,
      mainCompetitors: DataTypes.STRING,
      marketingPlan: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "UserId wajib diisi" },
          isInt: { msg: "UserId harus berupa angka" },
        },
      },
    },
    {
      sequelize,
      modelName: "PromptProposal",
    }
  );
  return PromptProposal;
};
