const Usuario = require("../db/schemas/UserSchema");

const salvaUsuario = (
  nome,
  sobrenome,
  email,
  senha,
  telefone,
  res
) => {
  const data = {
    nome,
    sobrenome,
    email,
    senha,
    telefone,
  };
  const usuario = new Usuario(data);
  usuario.save((err) =>{
    if(err){
      return res.status(500).json({
        msg:`${err}`
      })
    }else{
      return res.status(200).json({
        msg:"Usuário salvo com sucesso!"
      });
    }
  });
  
};

module.exports = salvaUsuario;
