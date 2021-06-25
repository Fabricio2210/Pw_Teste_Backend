
const usuario = (dados) =>{
    const usuarioObj =  {
        id: dados._id,
        email: dados.email,
        primeiro_nome: dados.nome,
        ultimo_nome: dados.sobrenome,
        telefone: dados.telefone,
        avatar: dados.avatarUrl
    }
    return usuarioObj
} 

module.exports = usuario