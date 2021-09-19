const dataBase = require("../database/databaseKenex");
const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/comedia", async (req, res) => {
  // response é a resposta do axios mas eu tiro o data de dentro do response

  try {
    const { data } = await axios(
      "https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=40c392d5af8e33387efa8ecda09e6d7f"
    );
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/originais-movie", async (req, res) => {
  try {
    const { data } = await axios(
      "https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR&api_key=40c392d5af8e33387efa8ecda09e6d7f"
    );
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/usuarios", async (req, res) => {
  res.send(await dataBase.mostrarUsuarios());
});

app.get("/usuario/:id", async (req, res) => {
  res.send(await dataBase.mostrarUsuario(req.params.id));
});

app.put("/usuarios/:id", async (req, res) => {
  const usuario = await dataBase.atualizarUsuario(req.params.id, {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
  });
  res.send(usuario);
});

app.post("/usuarios", async (req, res) => {
  const usuario = await dataBase.salvarUsuarios({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
  });
  res.send(usuario);
});

app.listen("3008");
