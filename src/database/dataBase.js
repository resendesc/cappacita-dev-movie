function mostrarUsuarios() {
  return Object.values(usuarios);
}

function mostrarUsuario(id) {
  return usuario[id] || {};
}

module.exports = {
  mostrarUsuarios,
  mostrarUsuario,
};
