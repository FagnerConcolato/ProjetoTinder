const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('Bem vindo ao tinder')
})

app.listen(5000,()=>{
    console.log('Servidor rodando')
})
