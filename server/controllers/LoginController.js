const { User } = require("../models");
const { signJwtToken } = require("../helpers/helper");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

class LoginController {
  static async googleLogin(req, res, next) {
    try {
      if (!req.body.token) {
        throw { name: "ValidationError", message: "Google token is required" };
      }
      const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: process.env.GOOGLE_OAUTH_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      const { email, name } = payload;
      let user = await User.findOne({ where: { email } });
      if (!user) {
        user = await User.create({
          email,
          name,
          password: Math.random().toString(36).slice(-8),
        });
      }
      const accessToken = signJwtToken({
        id: user.id,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
      });
      res.status(200).json({ access_token: accessToken });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;
