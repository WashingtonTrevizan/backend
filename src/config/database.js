const { Sequelize } = require("sequelize"); // Importa a classe Sequelize da biblioteca sequelize
require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env

// Cria uma instância do Sequelize com as credenciais e informações de conexão do banco de dados
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST, // Define o host do banco de dados
  dialect: "postgres", // Define o tipo de banco de dados (PostgreSQL)
  logging: false, // Desativa o log de SQL no console
});

// Exporta a instância do Sequelize para ser usada em outras partes da aplicação
module.exports = sequelize;