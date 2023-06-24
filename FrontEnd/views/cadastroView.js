class cadastroView{
  template(){
    return `
   
    <div class="PaginaContainer" >

    <div class="cabecalhoCadastros">
          <button id="botaovoltarCadastro"><img src="./imagens/btn 'back'.svg" alt=""></button>
          <a href="#" id="Skip">Skip</a>
    </div>

       
        
     
      <div class="ConteudoCadastro">
         <h3>Profile details</h3>
        <input type="text" class="form-control" id="primeiroNome" placeholder="Seu nome">
        <input type="text" class="form-control" id="sobreNome" placeholder="Sobrenme">
        <input type="email" class="form-control" id="email" placeholder="Seu email">
        <input type="password" class="form-control" id ="senha" placeholder="sua senha">
        <input type="date" class="form-control" id ="SeuAniversario" placeholder="seu aniversario">
       
      </div>
      <div class="ConteudoCadastro">
       
        <button type="submit" class="botaoPrincipal" id = "irParaSelecioneSexo">Continuar</button>
        <button type="submit" class="botaoPrincipal" id = "VoltarLogin">voltar para login</button>
        
      </div>
    
       <footer class="rodapeCadastro">
          <a href="">Terms of use</a>
           <a href="">Privacy Policy</a>
       </footer>
  </div>`


  }


    
}