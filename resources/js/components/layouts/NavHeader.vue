<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand text-primary" href="#">Acolher</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </router-link>
        
      </li>
      <li class="nav-item">
        <router-link to="/institucional">
        <a class="nav-link" href="#">Institucional</a>
        </router-link>
        
      </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Sede e Recursos</a>
      </li>      
      <li class="nav-item">
        <a class="nav-link" href="#">Direção</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Publicação</a> 
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contato</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Horario de Atendimento</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Semar</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Formulários</a>
      </li>      
    </ul>
   
  </div>
</nav>
<div class="row justify-content-md-center">
  <div class="col-md-4 ">
    <img class="img-fluid align-center" src="/img/logo.png" alt="">
  </div>
</div>

    </div>
</template>

<script>
    export default {
        name:"NavHeader",
        mounted() {
            console.log('Component mounted.')
        }
    }
</script> 
