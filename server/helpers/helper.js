const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function hashPassword(password) {
  const salt = bcryptjs.genSaltSync(10);
  const hash = bcryptjs.hashSync(password, salt);
  return hash;
}

function compareHashPassword(password, hashPassword) {
  const isValid = bcryptjs.compareSync(password, hashPassword);
  return isValid;
}

function signJwtToken(payload) {
  return jwt.sign(payload, JWT_SECRET);
}

function verifyJwtToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

function formatRupiah(money) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(money);
}

module.exports = {
  hashPassword,
  compareHashPassword,
  signJwtToken,
  verifyJwtToken,
  formatRupiah,
};
