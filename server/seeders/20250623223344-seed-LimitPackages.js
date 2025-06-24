"use strict";
const fs = require("fs").promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rawData = await fs.readFile("./data/limit-packages.json", "utf-8");
    const packages = JSON.parse(rawData).map((pkg) => {
      pkg.createdAt = pkg.updatedAt = new Date();
      return pkg;
    });
    await queryInterface.bulkInsert("LimitPackages", packages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("LimitPackages", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
