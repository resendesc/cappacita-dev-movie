function mostrarUsuarios() {
  return Object.values(usuarios);
}

function mostrarUsuario(id) {
  return usuario[id] || {};
}

function atualizarUsuario(id, usuario) {
  usuarios[id] = usuario;
  return usuario;
}

function salvarUsuarios(usuario) {
  usuarios[usuario.id] = usuario;
  return usuario;
}

module.exports = {
  mostrarUsuarios,
  mostrarUsuario,
  atualizarUsuario,
  salvarUsuarios,
};
