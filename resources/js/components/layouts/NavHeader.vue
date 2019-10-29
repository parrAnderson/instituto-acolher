<template>
<div class="container-fluid container-top">
    <div class="row no-print justify-content-center nav-top">
        <div class="col-12 col-xs-12 col-sm-12 col-md-2 text-center">
            <router-link to="/">
                <img class="img-fluid align-center img-logo" src="/../../acolher/public/img/logo.png" alt>
            </router-link>
        </div>
        <div class="col-12 col-xs-12 col-sm-12 col-md-9"> 
            <nav class="navbar navbar-expand-lg navbar-light">
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

            
                 <div v-if="!login.data.id" class="text-center">
                    <router-link to="/login">
                        <button class="btn btn-success btn-sm">Login</button>
                    </router-link>
                    <router-link to="/register">
                        <button class="btn btn-primary btn-sm">Cadastrar</button>
                    </router-link>
                </div>
            

            <nav class="navbar navbar-expand-lg" v-if="login.data.id">
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

                            <li class="nav-item dropdown" v-if="exibirCardObreiro">
                                <a href="#atendimentoDropdown" v-if="login.data.id" class="nav-link dropdown-toggle text-primary" aria-expanded="false" data-toggle="collapse">
                                    Fluxo Operacional
                                </a>
                                <ul id="atendimentoDropdown" class="collapse list-unstyled ">
                                    <!-- <li>
                                        <router-link :to="{name: 'fazertipoatendimento', params: {tipoatendimento: 'todos'}}">
                                            Todos
                                        </router-link>
                                    </li> -->
                                    <li>
                                        <router-link :to="{name: 'fazertipoatendimento', params: {tipoatendimento: 'Apometria (2as. feiras)'}}">
                                            Apometria
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'fazertipoatendimento', params: {tipoatendimento: 'Obreiros da Luz - Entidades de Umbanda(1 Sábado por mês)'}}">
                                            Obreiros da Luz
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'fazertipoatendimento', params: {tipoatendimento: 'Passes (2as. feiras)'}}">
                                            Passes
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'fazertipoatendimento', params: {tipoatendimento: 'Prática do Evangelho (5as. feiras)'}}">
                                            Prática do Evangelho
                                        </router-link>
                                    </li>

                                </ul>
                            </li>
                            <li v-if="login.data.id" class="nav-item">
                                <router-link to="/atendimento">
                                    <a class="nav-link text-primary" href="#">Solicitação de Atendimento</a>
                                </router-link>

                            </li>
                            <li v-if="!exibirCardObreiro" class="nav-item">
                                <router-link v-if="login.data.id" :to="{name: 'cartaofrequentador', params: {id: login.data.id}}">
                                    <a class="nav-link text-primary" href="#">Carteirinha Frequentador</a>
                                </router-link>
                            </li>
                            <li v-if="exibirCardObreiro" class="nav-item">
                                <router-link v-if="login.data.id" :to="{name: 'cartao', params: {id: login.data.id}}">
                                    <a class="nav-link text-primary" href="#">Cartão do Obreiro</a>
                                </router-link>
                            </li>
                            <li v-if="exibirCardObreiro" class="nav-item">
                                <router-link v-if="login.data.id" :to="{name: 'cracha', params: {id: login.data.id}}">
                                    <a class="nav-link text-primary" href="#">Crachá do Obreiro</a>
                                </router-link>
                            </li>
                            <li>
                                <button @click="sair()" class=" btn btn-danger btn-sm">Sair</button>
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
    data() {
        return {
            exibirCardObreiro: false,
            obreiro: "",
        }
    },
    created() {
        this.linkObreiroFrequentador()
        console.log("ue")
        //     console.log("Component mounted.");

        //  console.log(this.login.data.id)

    },
    beforeMount() {
        this.obreiro = window.localStorage.getItem("user_obreiro")
        this.linkObreiroFrequentador()
    },
    computed: {
        ...mapState({
            login: state => state.Login,
            // obreiroNumero: state => state.Login.data.obreiro
            // cartao: state => state.Cartao,
        }),
    },
    watch: {
        login() {
            this.login = this.login
            this.linkObreiroFrequentador()
        },
        obreiro() {
            this.linkObreiroFrequentador()
        }
    },
    methods: {
        ...mapActions([
            'Logout',
            'SetLocalStorage',
            'SelecionarUserCartao',
        ]),
        linkObreiroFrequentador() {

            if ((this.obreiro != 'null') && (this.obreiro != '') && (this.obreiro != null)) {

                this.exibirCardObreiro = true;
                console.log(this.obreiro)
            } else {
                this.exibirCardObreiro = false;
            }

        },
        sair() {
            this.Logout("")
            this.$router.push({
                name: 'home'
            });
            console.log('saiu')
        }
    },

}
</script>

<style>
.navbar-toggler {
    width: 100%;
    float: none;
    margin: 0 auto;
    border-width:0;
    border-radius:0;
}
.container-top{
    padding-top: 17px;
    background-color:#ced9eabd;
    padding-bottom: 17px;
}
.font-acolher {
    font-family: 'Bradley Hand ITC Std';
}
.img-fluid.align-center.img-logo {
    max-width: 130px;
    display: block;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 575.98px) {
    .btn-login-header {
        text-align: center !important;
        float: center ! important;
    }
}
</style>
