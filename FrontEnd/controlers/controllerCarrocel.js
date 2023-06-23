class controllerCarrocel {
  init() {
    let view = new carrocelView().template();
    document.querySelector("#principal").innerHTML = view;
    this.bind();
  }

  bind() {
    document.querySelector("#SignInPagCarrocel").addEventListener("click", () => {
        new navegacao().irParaPaginaInicial();
      });
    document.querySelector("#botaoPrincipalCarrocel").addEventListener("click", () => {
        new navegacao().irParaPaginaInicial();
      });
  }
}
