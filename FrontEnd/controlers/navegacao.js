class navegacao{
constructor(){
 
    this.rotas = {
         
        inicio:{
            controller: new paginaInicialController()
        },

        login:{
            controller: new controllerLogin()
        },
        cadastro: {
            controller: new controllerCadastro()
        },

        home:{
            controller: new controllerHome()
        },
         SelecionaSexo: {
            controller: new controllerCadastroSexo()
         },
         selecionaGostos: {
            controller: new controllerCadastroGostos()
         }, 
         niver: {
            controller: new controllerCadastroNiver()
         },
         carrocel:{
            controller: new controllerCarrocel()
         }
        

    }

}

irParaCarrocel(){
    this.irPara(this.rotas.carrocel)
}

irParaPaginaInicial(){
    this.irPara(this.rotas.inicio)
}
 
irParaLogin(){
  this.irPara(this.rotas.login)   

}
irParaCadastro(){
    this.irPara(this.rotas.cadastro)
}
irParaSelecioneSexo(){
    this.irPara(this.rotas.SelecionaSexo)
}

irParaSelecionaGostos(){
    this.irPara(this.rotas.selecionaGostos)
}

irParaSelecionaNiver(){
    this.irPara(this.rotas.niver)
}

irParaHome(){
  this.irPara(this.rotas.home)  
}
irPara(rota){
    rota.controller.init()
}

}