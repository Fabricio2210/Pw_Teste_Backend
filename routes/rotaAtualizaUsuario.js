const router = require("express").Router();
const atualizaUsuario = require("../helpers/atualizaUsuario");

router.put("/atualizar/:_id", (req, res) => {
  atualizaUsuario(req, res);
});
module.exports = router;
