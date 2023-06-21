class cadastroNiverView{
  template(){
return `<div>
<div>

<a href="#">Skip</a>
</div>
<div>
  <h1>Detalhes Perfil</h1>
   <h2>Avatar</h2> 
</div>
<div>
  <form>
    <div class="mb-3">
    
      <input type="text" class="form-control" id="primeiroNome" placeholder="Seu nome">
     
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" id="sobreNome"placeholder="Seu ultimo nome">
      
    </div>
    <div class="mb-3">
      <input type="date" class="form-control" id="SeuAniversario" placeholder="seu aniversario">
      
    </div>
  </form>

 </div>

   <div>
    <button id = "finalizar">Finalizar</button>
   </div>
    
</div>
`


  }

}