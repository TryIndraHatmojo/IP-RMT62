"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "UserId is required" },
          isInt: { msg: "UserId must be an integer" },
        },
      },
      LimitPackageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "LimitPackageId is required" },
          isInt: { msg: "LimitPackageId must be an integer" },
        },
      },
      LimitPurchased: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "LimitPurchased is required" },
          isInt: { msg: "LimitPurchased must be an integer" },
        },
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Amount is required" },
          isInt: { msg: "Amount must be an integer" },
        },
      },
      paymentRef: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Payment reference is required" },
          notEmpty: { msg: "Payment reference is required" },
        },
      },
      paymentType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Payment type is required" },
          notEmpty: { msg: "Payment type is required" },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Status is required" },
          notEmpty: { msg: "Status is required" },
        },
      },
      paidAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
