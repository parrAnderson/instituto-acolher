<template>
    <div>
            <nav-header></nav-header>
         <div class="container">
      <div class="row row-space"> 
        <div class="col-12">
          <h4 class="text-center">Por favor digite o número de obreiro que deseja</h4>
          <p class="text-center">Quando todos os obreiros forem cadastrados será liberado a opção de gerar a partir do último</p>          
        </div>
      </div>
       <div class="row row-space justify-content-center row-space-form">
        <div class="col-4">
          <input type="number" v-model="inputs.obreiro" class="form-control" placeholder="Número de obreiro">
        </div>
      </div>

      <br>
      


       <div class="row justify-content-center row-space-form">
            <div class="col-2 text-left">
                <button  @click="NaoSou()"  type="submit" class="btn btn-danger">Voltar</button>
            </div>

        <div class="col-2 text-right">
            <button @click="Cadastrar()" type="submit" class="btn btn-primary">Cadastrar</button>
            </div> 
        </div>
         
         </div>
      
    </div>
</template>

<script>
import NavHeader from "./../layouts/NavHeader";
  import Footer from "./../layouts/Footer";
  import {mapState, mapActions} from 'vuex'
    export default {
        name:"Obreiro",
        components: {
        NavHeader,
        Footer
        },
        data(){
            return{
                inputs:{},            
            }
        },
        watch:{
            $route(){
                this.inputs.id = this.$route.params.id
                
            }
        },
        methods:{
         ...mapActions([
            'CadastrarObreiro',
        ]),
        NaoSou(){
            this.$router.push({ name: 'users' });
        },
        Cadastrar(){
            // console.log(this.inputs)
            this.CadastrarObreiro(this.inputs)
        }
        },
        computed: {
            ...mapState({
                // login: state => state.Login,
                obreiro: state => state.Obreiro.data
            })
        },
        beforeMount(){
            this.inputs.id = this.$route.params.id
            
            // if(!this.login.data.id){
            //     this.$router.push({ name: 'login' });
            // }
            // this.inputs.id = this.login.data.id      
            //  this.inputs.cpf = this.login.data.cpf        
        },
        watch:{
            obreiro(){
                 if(this.obreiro.data == "atualizado"){
                this.$router.push({ name: 'users' });

            }
            }
        }
        
    }
</script>

