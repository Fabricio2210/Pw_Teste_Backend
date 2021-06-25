const router = require("express").Router();
const salvaUsuario = require("../helpers/salvaUsuario");
const bcrypt = require("bcrypt");

router.post("/usuario", (req, res) => {
  const { nome, sobrenome, email, senha, telefone } = req.body;
  const hash = bcrypt.hashSync(senha, 10);
   salvaUsuario(nome, sobrenome, email, hash, telefone, res)
});

module.exports = router;
