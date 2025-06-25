const midtransClient = require("midtrans-client");
const { User, LimitPackage } = require("../models");

class TransactionController {
  static async generateMidtransToken(req, res, next) {
    try {
      const { LimitPackageId } = req.params;
      const limitPackage = await LimitPackage.findByPk(LimitPackageId);
      if (!limitPackage) {
        throw {
          status: 404,
          name: "ErrorDataNotFound",
          message: "Limit Package not found",
        };
      }
      const user = req.user;
      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
      });

      let parameter = {
        transaction_details: {
          order_id: "MODALNEKAD_" + new Date().getTime(),
          gross_amount: limitPackage.price,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: user.name,
          last_name: "",
          email: user.email,
          phone: "",
        },
      };

      const transaction = await snap.createTransaction(parameter);
      res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  }
  static async updateLimitPackage(req, res, next) {
    try {
      const user = req.user;
      if (!req.body) {
        throw {
          status: 400,
          name: "ValidationError",
          message: "LimitPackageId is required",
        };
      }
      const { LimitPackageId } = req.body;

      const limitPackage = await LimitPackage.findByPk(LimitPackageId);
      if (!limitPackage) {
        throw {
          status: 404,
          name: "ErrorDataNotFound",
          message: "Limit Package not found",
        };
      }

      user.limitUsage += limitPackage.limit;
      await User.update(
        {
          limitUsage: user.limitUsage,
        },
        {
          where: { id: user.id },
        }
      );

      res.status(200).json({
        message: "Limit updated successfully",
        user,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TransactionController;
