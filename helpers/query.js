
const queryOpcoes = (req) =>{
    let query = {

    }
    if(req.query.nome){
        query.nome = req.query.nome
    }
    return query
}

module.exports = queryOpcoes