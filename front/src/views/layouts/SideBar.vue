<template>
<div>

    <transition name="modal" v-if="showModal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="card">
                        <div class="card-header text-center">
                            <h5 v-if="idade < 18">Termo de Adesão ao Serviço Voluntário - Menor</h5>
                            <h5 v-else>Termo de Adesão ao Serviço Voluntário - Adulto</h5>
                        </div>
                     <div class="card-body">
                    <div class="modal-body">
                        <slot name="body modal-overflow">
                       <TermoObreiro/>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">                            
                            <button class="btn btn-primary btn-sm" @click="confirmarTermo()">
                                Declaro que li e aceito
                            </button>
                        </slot>
                    </div>
    </div>
</div>
                </div>
            </div>
        </div>
    </transition>

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
                    <li class="nav-header" v-if="$acl.check('isAdmin')">ADMIN</li>

                    <li class="nav-item" v-if="$acl.check('isAdmin')">
                        <router-link :to="{name:'gerenciarfrequentadores'}" class="nav-link">
                            <i class="nav-icon fas fa-users"></i>
                            <p>Gerenciar Frequentadores</p>
                        </router-link>
                    </li>

                    <li class="nav-item" v-if="$acl.check('isAdmin')">
                        <router-link :to="{name:'gerenciarobreiros'}" class="nav-link">
                            <i class="nav-icon fas fa-users"></i>
                            <p>Gerenciar Obreiros</p>
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="$acl.check('isAdmin')">
                        <router-link :to="{name:'datasdesativadascalendarioapometria'}" class="nav-link">
                            <i class="nav-icon fas fa-calendar-alt"></i>
                            <p>Desativar Datas Apometria</p>
                        </router-link>
                    </li>

                    <li class="nav-header" v-if="$acl.check('isObreiro')">OBREIRO</li>

                    <li class="nav-item" v-if="$acl.check('isObreiro')">
                        <router-link :to="{name:'carteirinhaobreiro'}" class="nav-link">
                            <i class="nav-icon far fa-id-card"></i>
                            <p>Carteirinha Obreiro</p>
                        </router-link>
                    </li>

                    <li class="nav-item has-treeview" v-if="$acl.check('isObreiroApometria')">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fa-clipboard"></i>
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
                                <router-link :to="{name:'relacaoatendidos'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Relação de atendidos</p>
                                </router-link>

                            </li>

                            <li class="nav-item">
                                <router-link :to="{name:'rodadasmacas'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Rodadas e Macas</p>
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

                    <li class="nav-item has-treeview" v-if="$acl.check('isObreiroPasses')">
                        <a href="#" class="nav-link">
                           <i class="nav-icon far fa-dot-circle"></i>
                            <p>
                                Fluxo Passes
                                <i class="fas fa-angle-left right"></i>
                                <span class="badge badge-info right">0</span>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link :to="{name:'atendimentospasses'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Atendimentos</p>
                                </router-link>
                            </li>                           
                        </ul>
                    </li>

                    <li class="nav-item has-treeview" v-if="$acl.check('isObreiroLuz')">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-sun"></i>
                            <p>
                                Fluxo Luz
                                <i class="fas fa-angle-left right"></i>
                                <span class="badge badge-info right">0</span>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link :to="{name:'atendimentosluz'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Atendimentos</p>
                                </router-link>
                            </li>                           
                        </ul>
                    </li>

                    <li class="nav-item has-treeview" v-if="$acl.check('isObreiroEvangelho')">
                        <a href="#" class="nav-link">
                           <i class="nav-icon fas fa-praying-hands"></i>
                            <p>
                                Fluxo Evangelho
                                <i class="fas fa-angle-left right"></i>
                                <span class="badge badge-info right">0</span>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link :to="{name:'atendimentosevangelho'}" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Atendimentos</p>
                                </router-link>
                            </li>                           
                        </ul>
                    </li>

                    <li class="nav-header" v-if="$acl.check('isFrequentador')">FREQUENTADOR</li>
                    <li class="nav-item" v-if="$acl.check('isFrequentador')">
                        <router-link :to="{name:'carteirinhafrequentador'}" class="nav-link">
                            <i class="nav-icon far fa-id-card"></i>
                            <p>Carteirinha Frequentador</p>
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="$acl.check('isFrequentador')">
                        <router-link :to="{name:'solicitaratendimento'}" class="nav-link">
                            <i class="nav-icon fas fa-chart-pie"></i>
                            <p>Solicitar Atendimento</p>
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="$acl.check('isFrequentador')">
                        <router-link :to="{name:'frequentador'}" class="nav-link">
                            <i class="nav-icon fas fa-user"></i>
                            <p>Meus Dados</p>
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
import TermoObreiro from '@/components/obreiros/TermoObreiro'
import {
    mapState,
    mapActions,
    mapGetters
} from "vuex"
export default {
    name: "SideBar",
    data() {
        return {
            userId: "",
            id: "",
            showModal: false,
        }
    },
    components:{
        TermoObreiro,
    },
    computed: {
        ...mapState({
            // userId: state => state.Auth.userId,
            user: state => state.Auth.user.data,
            idade: state => state.Auth.user.data.idade,
            verificacao_termo_obreiro: state => state.Obreiros.verificacao_termo_obreiro,
        }),
        ...mapGetters([
            'getUserId'
        ]),
    },
    props: {
        marginLeft: "",
    },
    methods: {
         confirmarTermo(){
            var data = {}
              data.id_user = this.user.id
              data.termo = 1
              this.confirmarTermoObreiro(data)
        },
        ...mapActions([
            'logout',
            'verificarTermoObreiro',
            'confirmarTermoObreiro',
        ]),
    },
    watch: {
       
        verificacao_termo_obreiro() {

            if (this.verificacao_termo_obreiro < 1) {
                this.showModal = true
            }else{
                this.showModal = false
            }
        },
        user: {

            handler: function (val, oldVal) {
                if (this.user.type > 0) {
                    this.verificarTermoObreiro(this.user.id)
                }

            },
            deep: true

        },
        userId() {
            this.userId = this.user.data.id

        },
        getUserId() {
            this.id = this.getUserId

        }
    },
    mounted() {
        this.id = this.getUserId

    }
}
</script>

<style scope>
.margin-btns-login {
    margin-top: 5px
}

.btn-100w {
    width: 100%;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 1000px! important;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  overflow-y: auto;
  max-height: 600px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
