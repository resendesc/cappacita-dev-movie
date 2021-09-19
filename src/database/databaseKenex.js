const { databaseConnection } = require("../database/connection");

async function mostrarUsuarios() {
  const result = await databaseConnection("usuarios");

  return result;
}

async function mostrarUsuario(id) {
  const result = await databaseConnection("usuarios").where({ id });

  return result[0];
}

module.exports = {
  mostrarUsuarios,
  mostrarUsuario,
};
