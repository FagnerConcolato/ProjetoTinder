class controllerCarrocel{

    init(){
     let view = new carrocelView().template()
     document.querySelector("#principal").innerHTML = view
     this.bind()

    }

bind(){

}

}