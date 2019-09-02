<template>
<div class="container">
    <div class="row nav-top">
        <div class="col-md-2">
            <img class="img-fluid align-center" src="/../../acolher/public/img/logo.png" alt>
        </div>
            <div class="col-md-10">                
                <div class="row row-login justify-content-end">                    
                    <div class="col-lg-2 col-6 text-right btn-login-header" v-if="!login.data.id">                        
                        <router-link to="/login">
                            <button  class="btn btn-success btn-sm">Login</button>
                        </router-link>
                    </div>
                     <div class="col-lg-2 col-6 text-right btn-login-header" v-if="!login.data.id">  
                        <router-link to="/register">
                            <button class="btn btn-primary btn-sm">Cadastrar</button>
                        </router-link>                       
                    </div>

                     <div class="col-lg-2 col-6 text-right btn-login-header" v-if="login.data.id">  
                        <button @click="sair()" class=" btn btn-danger btn-sm">Sair</button>                     
                    </div>


                </div>
                <div class="row text-right">
                    <div class="col-12">

                    </div>
                </div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                    <a class="nav-link" href="#">Publicações</a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contato">
                                    <a class="nav-link" href="#">Contato</a>
                                </router-link>
                            </li>
                            <router-link to="/horariodeatendimento">
                                <a class="nav-link" href="#">Horários de Atendimento</a>
                            </router-link>
                            <li class="nav-item">
                                <router-link to="/semear">
                                    <a class="nav-link" href="#">Conteúdo dos Cursos</a>
                                </router-link>
                            </li>
                           
                        </ul>
                    </div>
                </nav>


    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav mx-auto">                            
                            <li class="nav-item dropdown" v-if="login.data.user">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-hover="dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Formulários
                                    </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <router-link to="/formularios/atendimentoadulto">
                                        <a class="dropdown-item" href="#">Cadastro Prévio para Atendimento a Adulto 1ª Vez</a>
                                    </router-link>

                                </div>
                            </li>
                            <!-- <li v-if="login.data.id" class="nav-item">
                                <router-link to="/obreiro">
                                    <a class="nav-link" href="#">Obreiro</a>
                                </router-link>
                            </li> -->

                             <li v-if="login.data.id" class="nav-item">
                                <router-link to="/atendimento">
                                    <a class="nav-link text-primary" href="#">Solicitação de Atendimento</a>
                                </router-link>
                            
                            </li>
                            
                                <li v-if="!exibirCardObreiro"  class="nav-item">
                                <router-link  v-if="login.data.id" :to="{name: 'cartaofrequentador', params: {id: login.data.id}}">
                                    <a class="nav-link text-primary" href="#">Carteirinha Frequentador</a>
                                </router-link>
                            </li>
                           
                            
                                 <li v-if="exibirCardObreiro"  class="nav-item">
                                 <router-link v-if="login.data.id"  :to="{name: 'cartao', params: {id: login.data.id}}">
                                    <a class="nav-link text-primary" href="#">Cartão do Obreiro</a>
                                </router-link>                              

                            </li> 
                            <li  v-if="exibirCardObreiro" class="nav-item">
                             <router-link  v-if="login.data.id"  :to="{name: 'cracha', params: {id: login.data.id}}">
                                    <a class="nav-link text-primary" href="#">Crachá do Obreiro</a>
                                </router-link>

                            </li> 
                           
                             

                        </ul>
                    </div>
                </nav>

                
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: "NavHeader",
    data(){
        return{
         exibirCardObreiro : false
        }
    },
    created() {
        this.linkObreiroFrequentador()
        console.log("ue")
    //     console.log("Component mounted.");

    //  console.log(this.login.data.id)
     
    },
    computed: {
        ...mapState({
            login: state => state.Login,
            // cartao: state => state.Cartao,
        }),
    },
    watch:{
        login(){
            this.login = this.login
            this.linkObreiroFrequentador()
        }
    },
    methods: {
        ...mapActions([
            'Logout',  
            'SetLocalStorage',     
            'SelecionarUserCartao',   
        ]),  
        linkObreiroFrequentador(){
          
                if((this.login.data.obreiro !== '') && (this.login.data.obreiro !== 'null') && (this.login.data.obreiro !== null) ){
                    this.exibirCardObreiro = true;
                    console.log(this.exibirCardObreiro)
                }
            
        },
        sair() {
            this.Logout("")
            this.$router.push({ name: 'home' });
            console.log('saiu')
        }    
    },
     
}
</script>

<style>
   @media (max-width: 575.98px) { 
    .btn-login-header{
        text-align: center !important;
        float: center ! important;
    }
   }
</style>