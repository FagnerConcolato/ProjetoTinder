
class controllerCadastroGostos {
  init() {
    let view = new cadastroGostosView().template();
    document.querySelector("#principal").innerHTML = view;
    this.bind();
  }
  bind() {
    document.querySelector("#continue").addEventListener("click", () => {
      
      this.salvarGostos()
      new navegacao().irParaHome();
    });

    document.querySelectorAll('.BotoesGostos').forEach((botao)=>{
        botao.addEventListener('click',()=>{
            botao.classList.toggle('selecionado') //toggle alternar
        }) 
     })

     document.querySelector('#botaovoltarGostos').addEventListener('click',()=>{
      new navegacao().irParaCadastro()
     })
  }

  async salvarGostos(){
         let vetorBotesInteresses=[]
            document.querySelectorAll('.selecionado').forEach((botao)=>{
                vetorBotesInteresses.push(botao.value)
            })
             console.log('Vetor de interesses',vetorBotesInteresses )
            

// CRIAR O BODY DATA 

const bodyData = {
    vetorBotesInteresses,
}

    await fetch('http://localhost:3000/atualizar-dados',{
        method:'PUT',
        headers:{'Content-Type': 'application/json','token':sessionStorage.getItem('token')},
        body: JSON.stringify(bodyData)

    })

  }

  
}
