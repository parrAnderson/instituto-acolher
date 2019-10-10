<template>
    <div>

        <span class="no-print">        
            <nav-header></nav-header>
        </span>

        <div class="container">
            
            <div class="row justify-content-center row-space">
                <div class="col-12 col-lg-6 col-md-6">
                    
                                                  
                           <h5 class="card-title text-center">Crachá do Obreiro</h5> 
                
                    <div class="card text-center">                                      
                        <div class="card-body">
                               <p class="text-center">Acolher - Instituto Kardecista</p>
                        
                            <img class="card-img-top img-cartao" src="/../../acolher/public/img/avatar.png" alt="Imagem de capa do card">
                        
                        <span class="text-center">
                                <p class="text-primary text-center">{{cartao.name}}</p>
                            <p>N° de reg. obreiro: <span class="text-primary">{{cartao.obreiro}}</span><br>
                            CPF:  <span class="text-primary">{{cartao.cpf}}</span>
                                </p>
                                
                        </span>                       
                        </div>
                    </div>
                </div>                 
            </div>   
            <span class="no-print">
                <div class="row justify-content-center row-space">
                    <div class="col-12 col-lg-6 col-md-6">
                        <a href="#" class="btn btn-primary text-center" @click="imprimir()">Imprimir</a> 
                    </div>
                </div>
             </span>           
        </div>
        <span class="no-print">
            <Footer></Footer>
        </span>


    </div>
</template>

<script>
import NavHeader from "./../layouts/NavHeader";
import Footer from "./../layouts/Footer";
import {mapActions, mapState} from "vuex";
    export default {
        name: "CarteirinhaFrequentador",
        components: {
            NavHeader,
            Footer
        },
        created(){
            console.log("funcionando")
        },
        data() {
        return {
            id: this.$route.params.id,
            inputs:{}
        }
    },
    methods:{
            ...mapActions([
            'SelecionarUserCartao',
        ]),    
        imprimir(){
        window.print();
      }   
    },
    created(){       
        this.SelecionarUserCartao(this.id)      
    },
    computed:{
        ...mapState({
            cartao: state => state.Cartao.data
            // corrigir
        })
    },    
    watch:{
        cartao(){
            console.log(this.cartao.name);
        }
    },

    }
</script>

<style>
.img-cartao{
    width: 150px;
    border-radius: 50%
}
    @media print
{    
    .no-print, .no-print *
    {
        display: none !important;
    }
}
</style>