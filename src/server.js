require('dotenv').config();
const app = require("./app");
const { Sequelize } = require("sequelize");
const PORT = process.env.PORT || 5000;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // You might want to set this to true in production
    }
  }
});

module.exports = sequelize;