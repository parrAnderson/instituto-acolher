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
          </select>
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
        atividade:()=>{
            this.inputs.atividade = this.atividade
        }
    },


    }
</script>

