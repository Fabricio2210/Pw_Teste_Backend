const Usuario = require("../db/schemas/UserSchema");

const usuarioObjeto = require("./objetoUsuario")
const achaUsuario = (req, res) => {
  Usuario.findOne({ _id: req.params._id }, (err, usuario) => {
    if (!usuario) {
      return res.status(404).json({
        msg: "Usuário não encontrado.",
      });
    } else {
      return res.status(200).json({
        data: usuarioObjeto(usuario)
      });
    }
  });
};

module.exports = achaUsuario;
