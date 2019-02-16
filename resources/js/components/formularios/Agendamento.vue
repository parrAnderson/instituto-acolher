<template>
    <div>
            <nav-header></nav-header>
         <div class="container">
      <div class="row row-space"> 
        <div class="col-12">
          <h4 class="text-center">Agendamento</h4>          
        </div>
      </div>
       <div class="row row-space justify-content-center row-space-form">
        <div class="col-8">
          <select name="atividade" v-model="atividade"  class="form-control" id>
            <option disable value="" >Indique a atividade de qual pretende receber atendimento *</option>
            <option value="Apometria (2as. feiras)">Apometria (2as. feiras)</option>        
            <option value="Prática do Evangelho (5as. feiras)">Prática do Evangelho (5as. feiras)</option>
            <option value="Atendimento Fraterno (5as. feiras)">Atendimento Fraterno (5as. feiras)</option>
            <option value="Obreiros da Luz">Obreiros da Luz</option>
            <option value="Passes">Passes</option>
          </select>
        </div>
      </div>

       <div class="row justify-content-center row-space-form">
        <div class="col-8 text-right">
          <button @click="agendar()" type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
      </div>
         
         </div>
        <Footer></Footer>
    </div>
</template>

<script>
import NavHeader from "./../layouts/NavHeader";
  import Footer from "./../layouts/Footer";
    export default {
        name:"Agendamento",
        components: {
      NavHeader,
      Footer
    },
    data(){
        return{
            inputs:{},
            atividade:'',
        }
    },
    watch:{
        atividade:function(){
            this.inputs.atividade = this.atividade
        }
    },
    methods:{
      agendar(){
        console.log(this.inputs)
      }
    }


    }
</script>

