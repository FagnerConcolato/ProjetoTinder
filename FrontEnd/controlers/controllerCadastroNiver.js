class controllerCadastroNiver {
  init() {
    let view = new cadastroNiverView().template();
    document.querySelector("#principal").innerHTML = view;
    this.bind();
  }

  bind() {
    document.querySelector("#finalizar").addEventListener("click", () => {
    
      new navegacao().irParaHome();
    });
  }

 
}
