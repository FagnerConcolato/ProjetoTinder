class cadastroView{
  template(){
    return `
   
    <div class="container" >

    <div class="cabecalhoCadastros">
    <a href="#"><img src="./imagens/container.png" alt=""></a>
    <a href="#" id="Skip">Skip</a>
    </div>

        <div class="main">
        <h1 class="text-center mb-5">Profile details</h1>
        </div>
        
     
      <div class="main">
        <input type="text" class="form-control" id="primeiroNome" placeholder="Seu nome">
        <input type="text" class="form-control" id="sobreNome" placeholder="Sobrenme">
        <input type="email" class="form-control" id="email" placeholder="Seu email">
        <input type="password" class="form-control" id ="senha" placeholder="sua senha">
        <input type="date" class="form-control" id ="SeuAniversario" placeholder="seu aniversario">
       
      </div>
      <div class="main">
       
        <button type="submit" class="botaoPrincipal" id = "irParaSelecioneSexo">Continuar</button>
        <button type="submit" class="botaoPrincipal" id = "VoltarLogin">voltar para login</button>
        
      </div>
    
       <footer class="rodape">
          <a href="">Terms of use</a>
           <a href="">Privacy Policy</a>
       </footer>
  </div>`


  }


    
}