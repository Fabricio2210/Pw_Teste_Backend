const Usuario = require("../db/schemas/UserSchema");

const deletaUsuario = async (req, res) => {
    Usuario.findOneAndRemove({_id:req.params._id},(err,usuario)=>{
      if (!usuario) {
        return res.status(404).json({
          msg: "Usuário não encontrado.",
        });
      } else {
        return res.status(200).json({
          msg: "Usuário deletado com sucesso!",
        });
      }
    })
}

module.exports = deletaUsuario;
