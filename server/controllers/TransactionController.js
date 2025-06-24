const midtransClient = require("midtrans-client");
const { User, LimitPackage } = require("../models");

class TransactionController {
  static async generateMidtransToken(req, res, next) {
    try {
      const { LimitPackageId } = req.params;
      const limitPackage = await LimitPackage.findByPk(LimitPackageId);
      const user = req.user;
      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
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
}

module.exports = TransactionController;
