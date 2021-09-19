const { databaseConnection } = require("../database/connection");

async function mostrarUsuarios() {
  const result = await databaseConnection("usuarios");

  return result;
}

async function mostrarUsuario(id) {
  const result = await databaseConnection("usuarios").where({ id });

  return result[0];
}

async function atualizarUsuario(id, usuario) {
  const atualizarUsuario = {
    username: usuario.username,
    name: usuario.name,
    email: usuario.email,
  };

  const result = await databaseConnection("usuarios")
    .where({ id })
    .update(atualizarUsuario);

  if (result) {
    return {
      ...usuario,
      id,
    };
  } else {
    console.error("Deu erro!");
    return {
      error: "Deu erro na inserção",
    };
  }
}

async function salvarUsuarios(usuario) {
  const insertUsuario = {
    username: usuario.username,
    name: usuario.name,
    email: usuario.email,
  };

  const result = await databaseConnection("usuarios").insert(insertUsuario);

  console.log(result);

  if (result) {
    return {
      ...usuario,
      id: result[0],
    };
  } else {
    console.error("Deu erro!");
    return {
      error: "Deu erro na inserção",
    };
  }
}

module.exports = {
  mostrarUsuarios,
  mostrarUsuario,
  atualizarUsuario,
  salvarUsuarios,
};
