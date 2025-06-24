if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const LoginController = require("./controllers/LoginController");
const ProposalController = require("./controllers/ProposalController");
const errorHandler = require("./middlewares/errorHandler");
const authentication = require("./middlewares/authentication");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login/google", LoginController.googleLogin);

app.use(authentication);
app.post("/proposals", ProposalController.create);

app.use(errorHandler);

module.exports = app;
