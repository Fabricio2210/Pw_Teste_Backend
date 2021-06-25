const router = require("express").Router();
const achaUsuario = require("../helpers/achaUsuario");

router.get("/usuario/:_id", (req, res) => {
  achaUsuario(req, res);
});
module.exports = router;
