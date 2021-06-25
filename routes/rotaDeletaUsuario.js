const router = require("express").Router();
const deletaUsuario = require("../helpers/deletaUsuario");

router.delete("/deletar/:_id", (req, res) => {
  deletaUsuario(req, res);
});

module.exports = router;
