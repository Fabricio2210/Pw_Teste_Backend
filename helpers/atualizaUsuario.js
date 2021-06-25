const Usuario = require("../db/schemas/UserSchema");

const atualizaUsuario = async (req, res) => {
  const { nome, sobrenome, email, telefone } = req.body;
  const atualizacao = {
    nome,
    sobrenome,
    email,
    telefone,
  };

  const achaUsuarioAtualiza = await Usuario.findOneAndUpdate(
    { _id: req.params._id },
    atualizacao,
    { returnOriginal: false },
    (err, usuario) => {
      if (!usuario) {
        return res.status(404).json({
          msg: "Usuário não encontrado.",
        });
      } else {
        return res.status(200).json({
          msg: "Alterações feitas com sucesso!.",
        });
      }
    }
  );
  return achaUsuarioAtualiza;
};

module.exports = atualizaUsuario;
