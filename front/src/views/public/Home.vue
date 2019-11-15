<template>
  <div>
  <Header>       
      <template v-slot:mainpage>        
        <div class="row justify-content-center">
          <div class="col-5 col-xs-5 col-sm-5 col-md-4 col-lg-3">
              <img class="img-fluid align-center img-logo" :src="require('@/assets/logo.png')" alt>
          </div>
        </div>
                <div class="row row-space">
            <div class="col-12">
                <h2 class="text-center">Atendimentos do Instituto <span class="font-weight-bold text-primary font-acolher">Acolher</span></h2>              
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-6">
                <img class="img-fluid" src="@/assets/img/horarios.png" alt="">
            </div>
        </div>
        <div class="row row-space text-center">
            <div class="col-12">
                <p>
                    A solicitação de atendimento para atividades do Acolher deve ser feita através de cadastro:
                </p>
            </div>
        </div>
        <div class="row text-center justify-content-center">
            <div class="col-12 col-lg-2 col-md-2 col-2">
                (Ainda não possuo cadastro)<br>
                <router-link to="/register">
                    <button class="btn btn-primary btn-sm">Cadastrar</button>
                </router-link>
            </div>
            <div class="col-12 col-lg-2 col-md-2 col-2">
                (Já possuo cadastro)<br>
                <router-link to="/login">
                    <button class="btn btn-success btn-sm">Login</button>
                </router-link>
            </div>
            <div class="col-12">
                <br>
                <router-link to="/atendimento">
                    <button class="btn btn-primary btn-sm">Solicitar Atendimento</button>
                </router-link>
            </div>
        </div>
      </template>
  </Header>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import Header from '@/views/layouts/HeaderPublic.vue'
export default {
  components: {
    HelloWorld,
    Header,
  },
};
</script>
 