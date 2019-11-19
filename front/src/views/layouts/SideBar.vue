<template>
<div>
    <aside class="main-sidebar sidebar-light-info elevation-4" id="sidebarlateral" v-bind:style="{ marginLeft: marginLeft}">

        <div class="row justify-content-center">
            <div class="col-9">
                <img class="img-fluid align-center img-logo" :src="require('@/assets/logo.png')" alt>
            </div>
        </div>

        <div class="sidebar">

            <div class="row justify-content-center" v-show="getUserId">
                <div class="col-12  mt-3 mb-3">
                    <div class="info">
                        <a href="#" class="d-block text-center" v-if="user">{{user.name}} -
                            <a href="#" class="text-danger" @click="logout()">Sair</a>
                        </a>

                    </div>
                </div>
            </div>

            <div class="row justify-content-center margin-btns-login" v-show="!getUserId">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 text-center margin-btns-login">
                    <router-link to="/login">
                        <button class="btn btn-success btn-100w btn-sm">Login</button>
                    </router-link>
                </div>
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 text-center margin-btns-login">
                    <router-link to="/register">
                        <button class="btn btn-primary btn-100w btn-sm">Cadastrar</button>
                    </router-link>
                </div>
            </div>            

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li class="nav-header" v-if="$acl.check('isObreiro')">OBREIRO</li>

                    <li class="nav-item has-treeview" v-if="$acl.check('isObreiro')">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-copy"></i>
                            <p>
                                Fluxo Apometria
                                <i class="fas fa-angle-left right"></i>
                                <span class="badge badge-info right">0</span>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link :to="{name:'programacaoapometria'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Programação</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'confirmacaoapometria'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Confirmação</p>
                                    </router-link>
                                
                            </li>

                            <li class="nav-item">
                                <router-link :to="{name:'rodadasmacas'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Rodadas e Macas</p>
                                    </router-link>
                                
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'relacaoatendidos'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Relação de atendidos</p>
                                    </router-link>
                                
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'entrevistapreatendimento'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Entrevista pré-atendimento</p>
                                    </router-link>
                                
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'leituradasfichas'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Leituras das fichas</p>
                                    </router-link>
                                
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'cabeceiradamaca'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Cabeceira da maca</p>
                                    </router-link>
                                
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'posatendimento'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Pós atendimento</p>
                                    </router-link>
                                
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'entrevistadeencerramento'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Entrevista de encerramento</p>
                                </router-link>
                                
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header" v-if="$acl.check('isFrequentador')">FREQUENTADOR</li>
                    <li class="nav-item" v-if="$acl.check('isFrequentador')">
                        <router-link :to="{name:'solicitaratendimento'}" class="nav-link">
                            <i class="nav-icon fas fa-chart-pie"></i>
                            <p>Solicitar Atendimento</p>
                         </router-link>
                    </li>
                    <li class="nav-header">ACESSOS</li>
                    <li class="nav-item">

                        <a href="#" class="nav-link">
                            <router-link to="/">
                                <i class="nav-icon fas fa-home"></i>
                                <p>Home</p>
                            </router-link>
                        </a>

                    </li>
                    <li class="nav-item">

                        <router-link :to="{name:'institucional'}" class="nav-link">
                            <i class="nav-icon fas fa-dungeon"></i>
                            <p>Institucional</p>
                        </router-link>

                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'sederecursos'}" class="nav-link">
                            <i class="nav-icon fas fa-boxes"></i>
                            <p>Sede e Recursos</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'direcao'}" class="nav-link">
                            <i class="nav-icon fas fa-asterisk"></i>
                            <p>Direção</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'publicacoes'}" class="nav-link">
                            <i class="nav-icon far fa-file-alt"></i>
                            <p>Publicações</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'contato'}" class="nav-link">
                            <i class="nav-icon fas fa-map-marked-alt"></i>
                            <p>Contato</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'horariosatendimento'}" class="nav-link">
                            <i class="nav-icon far fa-clock"></i>
                            <p>Horarios de Atendimento</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'conteudocursos'}" class="nav-link">
                            <i class="nav-icon fab fa-leanpub"></i>
                            <p>Conteúdo dos Cursos</p>
                        </router-link>
                    </li>

                </ul>
            </nav>

        </div>

    </aside>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapGetters
} from "vuex"
export default {
    name: "SideBar",
    data(){
        return{
            userId:"",
            id:""
        }
    },
    computed: {
        ...mapState({                       
            // userId: state => state.Auth.userId,
            user: state => state.Auth.user.data
            
        }),
        ...mapGetters([
            'getUserId'
        ]),
    },
    props:{
        marginLeft: "",
    },
    methods: {
        ...mapActions([
            'logout'
        ]),       
    },
    watch:{
        userId(){
            this.userId = this.user.data.id
        },    
        getUserId(){
            this.id = this.getUserId
        }         
    },
    mounted(){
        this.id = this.getUserId
    }
}
</script>

<style>
.margin-btns-login {
    margin-top: 5px
}

.btn-100w {
    width: 100%;
}

</style>
