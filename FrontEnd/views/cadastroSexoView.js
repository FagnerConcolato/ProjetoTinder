class cadastroSexoView{

  template(){
    return ` <div class = "PaginaContainer">

                      <div class="cabecalhoCadastroSexo">
                      <button id="VoltarTelaInicial"><img src="./imagens/btn 'back'.svg" alt=""></button>
                            
                            <a href="#" id="Skip">Skip</a>
                      </div>

                        <div class="ConteudoCadastroSexo">
                      <h1>I am </h1>
                      <button class="SexoBotao" id="macho" value="macho">Macho</button>
                      <button  class="SexoBotao"  id="femea" value="femea">Femea</button>
                      <button  class="SexoBotao" id="outro" value="outro">Outro</button>

                      
                      
                        </div>

                        <div class= "rodapeCadastroSexo">
                          <button id="continue" class="botaoPrincipal">Continue</button>
                        </div>
        
       </div>
  
  `
}


}