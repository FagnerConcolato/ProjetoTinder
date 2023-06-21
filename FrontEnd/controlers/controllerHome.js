class controllerHome{
  init(){
   let view = new homeView().template()
    document.querySelector("#principal").innerHTML = view
     this.bind()
  }
 

  bind(){


  }

}