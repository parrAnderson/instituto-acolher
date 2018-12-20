<template>
  <div>
    <nav-header></nav-header>
    <div class="container">
      <div class="row row-space">
        <div class="col-12">
          <h4 class="text-center">Cadastro prévio para Atendimento a adulto - 1ª vez</h4>
        </div>
      </div>

      <div class="row row-space justify-content-center">
        <div class="col-8">
          <select name="atividade" class="form-control"  id>
            <option disable>Indique a atividade de qual pretende receber atendimento *</option>
          </select>
          <input type="text" class="form-control" placeholder="Nome Completo da Pessoa a ser Atendida *">
          <input type="text" class="form-control" v-mask="'##/##/####'" placeholder="Data de Nascimento (DD/MM/AAAA)*">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavHeader from "./../layouts/NavHeader";
import Footer from "./../layouts/Footer";

import {mask} from 'vue-the-mask'

export default {
  name: "AtendimentoAdulto",
  components: {
    NavHeader,
    Footer,
  },
    directives: {mask}
};
</script>
