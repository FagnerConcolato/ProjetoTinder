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

}

removerSelecionado(){
  document.querySelectorAll('.SexoBotao').forEach((botao)=>{
     if(botao.classList.contains('selecionado')){
      botao.classList.remove('selecionado')
     }
  })
}

}