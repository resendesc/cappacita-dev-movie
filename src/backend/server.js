const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

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

app.listen("3008");
