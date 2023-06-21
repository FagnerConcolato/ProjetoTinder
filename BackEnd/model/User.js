const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    primeiroNome: 'String',
    sobreNome:'String',
    email:'String',
    SeuAniversario:'String',
    GeneroSexual:'String',
    senha:'String',
    interesses: {type: ['String']}
    
})


const User = mongoose.model('User',UserSchema)

module.exports = User