class controllerCadastroSexo{
init(){
    let view = new cadastroSexoView().template()
    document.querySelector("#principal").innerHTML = view
    this.bind()

}

// bind de gostos colocar aqui

bind(){
  document.querySelector('#continue').addEventListener('click', ()=>{
    this.CriarSexoUsuario()
     new navegacao().irParaCadastro()
    //new navegacao().irParaSelecionaGostos()
  })

      document.querySelectorAll('.SexoBotao').forEach((botao)=>{
          botao.addEventListener('click',()=>{
            this.removerSelecionado()
            botao.classList.add('selecionado')
          })
      })

      document.querySelector('#VoltarTelaInicial').addEventListener('click',()=>{
        new navegacao().irParaPaginaInicial()
      })
}

// criar uma função para pegar os dados do sexo 
async CriarSexoUsuario(){
 
let GeneroSexual= document.querySelector('.selecionado').value

sessionStorage.setItem('GeneroSexual', GeneroSexual)
// if(!GeneroSexual){

//   alert('coloque um genero Sexual')
//   return
// }

//   const bodyData = {
//      GeneroSexual,  
//   }

//   await fetch('http://localhost:3000/cadastro-sexo',{
//     method:'POST',
//     headers: {'Content-Type': 'application/json',
//   'token':sessionStorage.getItem('token')},
//     body:JSON.stringify(bodyData)
//   }).then(()=>{
//     new navegacao().irParaCadastro()
//     console.log('Cadastro do sexo feito com sucesso')
//   }).catch((err)=>{
//       console.log('ERRO AO CADASTRAR SEXO', err)
//   })
}

removerSelecionado(){
  document.querySelectorAll('.SexoBotao').forEach((botao)=>{
     if(botao.classList.contains('selecionado')){
      botao.classList.remove('selecionado')
     }
  })
}

}