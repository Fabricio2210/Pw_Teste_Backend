const usuarioObjeto = require("./objetoUsuario")

const objetousuarios = async (usuarios) =>{
    let arrayUsuario = []
  await usuarios.forEach((dados) =>{
      const usuarioObj = usuarioObjeto(dados)
      arrayUsuario.push(usuarioObj)
     
   })
   return arrayUsuario
}

module.exports = objetousuarios