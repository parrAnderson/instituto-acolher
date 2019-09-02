<template>
    <div>
        <nav-header></nav-header>
    
        <div class="container">
    
            <div class="row justify-content-md-center">
                <div class="col-md-3">
                    <img class="img-fluid align-center img-logo-home" src="/../../acolher/public/img/logo.png" alt>
                </div>
            </div>
            <br>

    
    
    
            <div class="row row-space">
                <div class="col-12">
                    <h2 class="text-center">Atendimentos do Intituto <span class="font-weight-bold text-primary">Acolher</span></h2>
                    <!-- <h2 class="text-center">Atividades de Atendimento</h2> -->
                </div>
            </div>

                    <div class="row justify-content-md-center">
    <div class="col-12 col-md-8 col-lg-8">
        <img class="img-fluid" src="/../../acolher/public/img/home/horarios.png" alt="">
    </div>
</div>

    
            <!-- <div class="row row-space justify-content-center text-center">
                <div class="col-12">
                    * Apometria (2as. feiras)
                </div>   
                 <div class="col-12">
                    * Prática do Evangelho (5as. feiras)
                </div>   
                <div class="col-12">
                   * Obreiros da Luz - Entidades de Umbanda (1 Sábado por mês)
                </div>
                
            </div> -->
    
            <div class="row row-space text-center">
                <div class="col-12">
                    <p>
                        A solicitação de atendimento para atividades do Acolher deve ser feita através de cadastro:
                    </p>
                </div>
            </div>
            <div class="row text-center justify-content-center">
                <div class="col-12 col-lg-5 col-md-5 col-5" v-if="!login.data.id">
                    (Ainda não possuo cadastro)<br>
                    <router-link to="/register">
                        <button class="btn btn-primary btn-sm">Cadastrar</button>
                    </router-link>
                </div>
                <div class="col-12 col-lg-5 col-md-5 col-5" v-if="!login.data.id">
                    (Já possuo cadastro)<br>
                    <router-link to="/login">
                        <button class="btn btn-success btn-sm">Login</button>
                    </router-link>
                </div>

                <div class="col-12 col-lg-5 col-md-5 col-5" v-if="login.data.id">
                    <br>
                    <router-link to="/atendimento">
                        <button class="btn btn-primary btn-sm">Solicitar Atendimento</button>
                    </router-link>
                </div>
                
            </div>
    <br>
        </div>
        <Footer></Footer>
    
    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
import NavHeader from './layouts/NavHeader'
import Footer from './layouts/Footer'
export default {
    name: "Home",
    components: {
        NavHeader,
        Footer,
    },
    computed: {
        ...mapState({
            login: state => state.Login,
        }),
    },
    watch:{
        login(){
            this.login = this.login
            console.log("mudou") 
        }
    },
    methods: {
        ...mapActions([
            'Logout',  
            'SetLocalStorage',        
        ]),           
    }
}
</script>

<style>
    @media (max-width: 575.98px) { 
        .img-logo-home{
            display:none;
        }
     }
</style>