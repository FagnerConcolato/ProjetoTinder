class carrocelView{
   template(){
    return ` <div class="container">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active botaoCarrocel"  class="botaoCarrocel"  aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./imagens/girl1.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            
          </div>

          <div class="textoCarrocel">
            <h5>Algorithm</h5>
            <p>Users going through a vetting process to ensure you never match with bots.</p>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active botaoCarrocel"  class="botaoCarrocel"  aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="botaoCarrocel" ></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class="botaoCarrocel" ></button>
          </div>

        </div>
        <div class="carousel-item">
          <img src="./imagens/girl2.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            
          </div>
          <div class="textoCarrocel">
            <h5>Matches</h5>
            <p>We match you with people that have a
              large array of similar interests.</p> 
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 2" class="botaoCarrocel"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"   class="botaoCarrocel"  aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 2" class="botaoCarrocel" ></button>
               
          </div>
        </div>

        
        
        <div class="carousel-item">
          <img src="./imagens/girl3.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            
          </div>
          <div class="textoCarrocel">
            <h5>Premium</h5>
            <p>Sign up today and enjoy the first month
              of premium benefits on us.</p>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 2" class="botaoCarrocel"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"  class="botaoCarrocel"  aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 2" class="botaoCarrocel" ></button>
               
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
    <div class="carroselRodaPe">
      
      <button id="botaoPrincipalCarrocel" class="botaoPrincipalCarrocel">Create an account</button>

<p>Already have an account?  <a href="#" id ="SignInPagCarrocel"> Sign In</a></p>

    </div>
</div> `

   }


}