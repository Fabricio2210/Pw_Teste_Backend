const router = require("express").Router();
const Usuarios = require("../db/schemas/UserSchema");
const paginationInfo = require("../helpers/paginacao");
const objetousuario = require("../helpers/listaUsuarios");
const query = require("../helpers/query")
router.get("/usuarios/", async (req, res) => {
  let page = parseInt(req.query.pagina);
  let limit = parseInt(req.query.qtd);
  let { startIndex, totalResults } = paginationInfo(page, limit);

  const usuarios = await Usuarios.find(query(req)).limit(limit).skip(startIndex);
  totalResults = usuarios.length;
  let totalPages = Math.ceil(totalResults / limit);

  return res.status(200).json({
    pagina: page,
    items_exibidos: limit,
    total_items: totalResults,
    total_paginas: totalPages,
    data: await objetousuario(usuarios),
  });
});
module.exports = router;
