const knex = require("knex");
const databaseConfig = require("../database/knexfile");

const databaseConnection = knex(databaseConfig);

module.exports = { databaseConnection };
