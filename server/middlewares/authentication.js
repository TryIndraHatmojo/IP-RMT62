const { User } = require("../models");
const { verifyJwtToken } = require("../helpers/helper");

async function authentication(req, res, next) {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      throw { name: "UnauthorizedError" };
    }
    let [type, token] = bearerToken.split(" ");
    const data = verifyJwtToken(token);

    const user = await User.findByPk(data.id);

    if (!user) {
      throw { name: "UnauthorizedError" };
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
