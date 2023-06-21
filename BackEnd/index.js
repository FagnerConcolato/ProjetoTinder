const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const sha256 = require('crypto-js/sha256')
const Base64 = require('crypto-js/enc-base64')
const secret = "hsdhhdbbkhsjksjh56@%";
const mongoose = require("mongoose");
const User = require("./model/User");
const app = express();
const authMiddleWare = require('./MiddleWare/authMiddleWare')

async function funcao() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/tinder", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conectado no MONGO");
    })
    .catch((err) => {
      console.log("Erro ao conecar no mongo", err);
    });
  app.use(express.json());
  app.use(express.static("."));
  app.use(cors());

  app.post("/criar-usuario", async (req, res) => {
    // async pq vamos mexer com o banco de dados precisa esperar a resposta
    //descontruir a requição
    let primeiroNome = req.body.primeiroNome;
    let sobreNome = req.body.sobreNome;
    let email = req.body.email;
    let SeuAniversario = req.body.SeuAniversario;
    let senhaAntesCrypto = req.body.senha;
    let GeneroSexual = req.body.GeneroSexual


    let senha = Base64.stringify(sha256(senhaAntesCrypto))

    new mongoose.model("User")({
      primeiroNome,
      sobreNome,
      email,
      SeuAniversario,
      senha,
      GeneroSexual
    })
      .save()
      .then((novoUsuario) => {
        const token = jwt.sign(
          {
            // aqui estou criando um token
            email: novoUsuario.email, //sign é um metodo do jwt que transforma o emil, id e secret em um hash/token
            id: novoUsuario._id,
          },
          secret
        );
        console.log("Usuario Criado");
        console.log("Token ", token);
        return res.send({ token: token });
      })
      .catch((err) => {
        console.log("Erro ao criar o usuario", err);
      });
  });

  app.get("/home", (req, res) => {
    res.send("home");
  });

  app.post('/fazer-login', async(req,res)=>{
    let email = req.body.email
    let senhaAntesDeConverter = req.body.senha
    let senha = Base64.stringify(sha256(senhaAntesDeConverter))

    await User.findOne({email,senha}).then((usuario)=>{ // esse usario contem todos os atrinutos o meu esquema
      let token = jwt.sign({
        id:usuario._id,
        email:usuario.email
      },secret)
      return res.send({token:token})

    }).catch((err)=>{
      console.log('erro', err)
      return res.send(false)
    })
    console.log('testendo a rota fazer login', email, senha)
      
  })

  app.post("/cadastro-sexo", authMiddleWare, async (req, res) => {
    //testando
   //let GeneroSexual= req.body.GeneroSexual
   let{GeneroSexual}= req.body    //desconstrução  //  esse req é o que vem do fatch do cadastro do sexo
   let userLogado = req.userLogado // neste instante aqui tenho todos os dados do meu usuario autenticado e enviado pelo MIdlaewr
   userLogado.GeneroSexual = GeneroSexual
   userLogado.save().then(()=>{
    console.log('Genero salvo com sucesso' )
    return res.send(true)
   }).catch((err)=>{
     console.log('erro ao salvar genero', err)
     return res.send(false)
   })

   
  });

  app.post("/buscar-conta", (req, res) => {
    console.log({ email: req.body.email });

    let email = req.body.email;
    return res.send({ email: req.body.email });
  });

 app.put('/atualizar-dados', authMiddleWare, async (req, res)=>{ //midlewew busca o usuario para liberar o acesso da rota
    let interessesQueVieramDoFront = req.body.vetorBotesInteresses
    console.log(' interesses que vieram do fronte',interessesQueVieramDoFront)
    req.userLogado.interesses  = interessesQueVieramDoFront //
    req.userLogado.interesses
    req.userLogado.save().then(()=>{
      console.log('interesses salvos')
      return res.send(true)
    }).catch((err)=>{
      console.log('erro no salvamento de intereses', err  )
      return res.send(false)
    })

 })    

  app.listen(3000, () => {
    console.log("Servidor rodando");
  });
}

funcao();
