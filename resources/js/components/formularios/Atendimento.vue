<template>
    <div>
            <nav-header></nav-header>
         <div class="container">

           <div v-if="atendimento.data.data" class="row justify-content-center">
             <div class="col-8">
               <div class="alert alert-success text-center" role="alert">
                <h5>Atendimento registrado, aguarde nosso contato!</h5>
                </div>
               
             </div>
           </div>

      <div class="row row-space"> 
        <div class="col-12">
          <h4 class="text-center">Atendimento</h4>          
        </div>
      </div>
       <div class="row row-space justify-content-center row-space-form">
        <div class="col-8">
          <select name="atividade" v-model="inputs.tipo_atendimento"  class="form-control" id>
            <option disable value="" >Indique a atividade de qual pretende receber atendimento *</option>
            <option value="Apometria (2as. feiras)">Apometria (2as. feiras)</option>        
            <option value="Prática do Evangelho (5as. feiras)">Prática do Evangelho (5as. feiras)</option>
            <option value="Atendimento Fraterno (5as. feiras)">Atendimento Fraterno (5as. feiras)</option>
            <option value="Obreiros da Luz">Obreiros da Luz</option>
            <option value="Passes">Passes</option>
          </select>
        </div>
      </div>

      <input type="hidden" v-model="inputs.user_id">

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
import {mapState, mapActions} from "vuex"
import NavHeader from "./../layouts/NavHeader";
  import Footer from "./../layouts/Footer";
    export default {
        name:"Atendimento",
        components: {
      NavHeader,
      Footer
    },
    data(){
        return{
            inputs:{},
            
        }
    },
    computed: {
        ...mapState({
            login: state => state.Login.data,
            atendimento: state => state.Atendimento,
        })
    },
    watch:{
       
    },
    methods:{
      ...mapActions([
        'CadastrarAtendimento'
      ]),
      agendar(){
        this.CadastrarAtendimento(this.inputs)
      }
    },
    beforeMount(){
      this.inputs.user_id = this.login.id;

      this.inputs.tipo_atendimento = ""
    }


    }
</script>

