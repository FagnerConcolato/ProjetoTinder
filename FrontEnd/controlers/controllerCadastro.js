class controllerCadastro{
  init(){
     let view = new cadastroView().template()
document.querySelector("#principal").innerHTML = view
     this.bind()

  }
bind(){
    document.querySelector('#VoltarLogin').addEventListener('click',()=>{
        new navegacao().irParaLogin()
    })

    document.querySelector('#irParaSelecioneSexo').addEventListener('click',()=>{
        this.CriarUsuario()
        new navegacao().irParaSelecionaGostos()
    })

    document.querySelector('#botaovoltarCadastro').addEventListener('click',()=>{
      new navegacao().irParaSelecioneSexo()
    })
}

async CriarUsuario() {
    let primeiroNome = document.querySelector("#primeiroNome").value;
    let sobreNome = document.querySelector("#sobreNome").value;
    let email = document.querySelector('#email').value
    let SeuAniversario = document.querySelector("#SeuAniversario").value;
    let senha = document.querySelector('#senha').value
    let GeneroSexual = sessionStorage.getItem('GeneroSexual')
    
    const bodyData = {
      primeiroNome,
      sobreNome,
      email,
      senha,
      SeuAniversario,
      GeneroSexual
    };

    let token = await fetch('http://localhost:3000/criar-usuario',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyData)                 //dados convertidos em sytring que serao passados 
                                                        // para o back end
    })


    let tokenCriadoEmJson = await token.json()
    console.log('usario criado em json',tokenCriadoEmJson)
    sessionStorage.setItem('token',tokenCriadoEmJson.token)
  }

}




