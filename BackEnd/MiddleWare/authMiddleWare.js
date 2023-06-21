const jwt = require('jsonwebtoken')
const secret = "hsdhhdbbkhsjksjh56@%"; 
const User = require("../model/User");

const authMiddleWare = async (req, res, next) => {
    const token = req.headers.token;
    if(!token){
        return res.status(401).send({error: "Erro de acesso!"});
    } 
    try {
        const payloadDoToken = jwt.verify(token, secret);

        const userAchado = await User.findById(payloadDoToken.id); //aqui ele esta buscando o usuario logado no banco pela id
        if(!userAchado){
            return res.status(401).send({error: "Erro de acesso!"});
        }
        req.userLogado = userAchado;  // aqui estou criando um posição na requisição mandando todos os 
        next();                        // os dados do usuario que está logado
    } catch(e) {                       //next executa o que tiver depois do MiddleWare da rota
        return res.status(401).send({error: "Erro de acesso!"});
    }
}

module.exports = authMiddleWare;