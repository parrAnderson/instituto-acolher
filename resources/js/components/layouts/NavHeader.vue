<template>
  <div class="container">
    <div class="row nav-top">
      <div class="col-md-2">
        <img class="img-fluid align-center" src="/../../acolher/public/img/logo.png" alt>
      </div>
      <div class="col-md-10">           
          <div class="row row-login">
            <div class="col-12 text-right">              
             <button class="btn btn-success btn-sm">Login</button>                                     
            <button class="btn btn-primary btn-sm">Acesso Restrito</button>                      
         
            </div>
          </div>
          <div class="row text-right"> 
            <div class="col-12">
              
            </div>
          </div>
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"  
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav mx-auto">
              <li class="nav-item active"> 
                <router-link to="/">
                  <a class="nav-link" href="#">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/institucional">
                  <a class="nav-link" href="#">Institucional</a>
                </router-link>
              </li>
              <li class="nav-item">
                 <router-link to="/sederecursos">
                  <a class="nav-link" href="#">Sede e Recursos</a>
                </router-link>                
              </li>
              <li class="nav-item">
                                 <router-link to="/direcao">
                  <a class="nav-link" href="#">Direção</a>
                </router-link>  
    
              </li>
              <li class="nav-item">
                <li class="nav-item">
                  <router-link to="/publicacoes">
                  <a class="nav-link" href="#">Publicação</a>
                </router-link>   
              </li>
              <li class="nav-item">
                 <router-link to="/contato">
                  <a class="nav-link" href="#">Contato</a>
                </router-link>   
              </li>
                <router-link to="/horariodeatendimento">
                  <a class="nav-link" href="#">Horarios</a>
                </router-link>  
              <li class="nav-item">
                <router-link to="/semear">
                 <a class="nav-link" href="#">Semear</a>
                </router-link>  
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Formulários</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
  mounted() {
    console.log("Component mounted.");
  }
};
</script> 
