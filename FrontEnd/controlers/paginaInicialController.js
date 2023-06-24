class paginaInicialController{
  
    init(){
        let view = new paginaInicialView().template()
        document.querySelector("#principal").innerHTML = view
        this.bind()
    }

bind(){
     document.querySelector("#SingUp").addEventListener('click',()=>{
     
     new navegacao().irParaSelecioneSexo()
    })                             
     document.querySelector(".botaoPrincipal").addEventListener('click', ()=>{
     new navegacao().irParaLogin() // pq nao aceita o id do botao?
                
      })
       
   }

}


