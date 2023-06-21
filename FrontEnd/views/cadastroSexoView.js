class cadastroSexoView{

  template(){
    return `
    <div class="cabecalhoCadastros">
    <button><img src="./imagens/btn 'back'.png" alt=""></button>
    <a href="#"><img src="./imagens/container.png" alt=""></a>
    <a href="#" id="Skip">Skip</a>
    </div>

      <div class="main">
    <h1>I am </h1>
    <button class="SexoBotao" id="macho" value="macho">macho</button>
    <button  class="SexoBotao"  id="femea" value="femea">femea</button>
    <button  class="SexoBotao" id="outro" value="outro">outro</button>

    
    
       </div>

       <div class= "rodape">
        <button id="continue" class="botaoPrincipal">Continue</button>
       </div>
        
  
  `
}


}