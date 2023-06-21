class controllerLogin{
   init(){
      let view = new loginView().template()
      document.querySelector('#principal').innerHTML = view
         //document.querySelector('#principal').innerHTML = new loginView().template()
         this.bind()
   }

bind(){
//  document.querySelector('#CriarConta').addEventListener('click',(e)=>{

//    new navegacao().irParaCadastro()
   //})
   document.querySelector('.botaoLogin').addEventListener('click', ()=>{
      this.fazerLogin()
 
      
  })

}


async fazerLogin(){
   const email = document.querySelector('#Email').value
   const senha = document.querySelector('#senha').value

   const bodyData ={
     email:email,
     senha:senha
   } 
      // verificando se o email existe n0 banco de dados
  let respostaEmail = await fetch('http://localhost:3000/fazer-login',{
   method: 'POST',
     headers: {"Content-Type":'application/json'},
     body:JSON.stringify(bodyData)
  })
 
  // tratar a resposta
 
  let EmailConvertidoEmJson= await respostaEmail.json()
  
  if (EmailConvertidoEmJson){
   console.log('EmailConvertidoEmJson.token',EmailConvertidoEmJson.token)
   sessionStorage.setItem("token",EmailConvertidoEmJson.token)
   new navegacao().irParaHome()
  }else{
   alert('email ou senha incorretos')
   new navegacao().irParaLogin()
  }
 
  console.log(EmailConvertidoEmJson)
 
} 


}