const express = require("express");
const cors = require("cors");
const conectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();

app.use(cors());
conectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const salvaUsuario = require("./routes/rotaNovoUsuario");
const usuarios = require("./routes/rotaTodosUsuarios");
const usuario = require("./routes/rotaAchaUsuario")
const atualizaUsuario = require("./routes/rotaAtualizaUsuario");
const deletaUsuario = require("./routes/rotaDeletaUsuario");
app.use(usuarios);
app.use(salvaUsuario);
app.use(atualizaUsuario);
app.use(deletaUsuario);
app.use(usuario)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Conectado na porta ${port}`));
