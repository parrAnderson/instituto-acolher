<template>
<div>
    <nav-header></nav-header>
    <hr/>
    <div class="container">
        <div v-if="atendimentos">
            <div class="row row-space with-print justify-content-center">
                <div class="col-12">
                    <h5 class="text-center text-success" v-if="parametros.tipo_atendimento == 'todos'">Todos os atendimento</h5>
                    <h5 class="text-center text-success" v-else>{{parametros.tipo_atendimento}}</h5>
                </div>
            </div>
            <div class="row row-space no-print">
                <div class="col-4 no-print">
                    <div class="row">
                        <div class="col-12 text-center">
                            <label>BUSCAR DATA DO ATENDIMENTO</label>
                            <input type="text" placeholder="BUSCAR DATA DO ATENDIMENTO" v-model="DataAtendimentoBuscar" v-on:keyup="buscarDataAtendimento()" v-mask="'##/##/####'" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="col-4 text-center no-print">
                    <div class="row">
                        <div class="col-12">
                            <h5> Tipo de atendimento</h5>
                            <h5 class="card-title text-success" v-if="parametros.tipo_atendimento == 'todos'">Todos</h5>
                            <h5 class="card-title text-success" v-else>{{parametros.tipo_atendimento}}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-4 no-print">
                    <div class="row">
                        <div class="col-12">
                            <a href="#" @click="imprimir()">
                                <div class="btn btn-primary btn-sm">
                                    Imprimir lista de atendimento <i class="fa fa-print" aria-hidden="true"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Data de Atendimento</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <edit-atendimento></edit-atendimento>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center row-space">
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <td>
                                        ID
                                    </td>
                                    <td>
                                        TIPO
                                    </td>
                                    <td>
                                        NOME
                                    </td>
                                    <td class="no-print">
                                        EMAIL
                                    </td>
                                    <td>
                                        CELULAR
                                    </td>

                                    <td class="no-print">
                                        SOLICITADA
                                    </td>
                                    <td class-="text-primary">
                                        AGENDADO
                                    </td>

                                    <td>
                                        IDADE
                                    </td>
                                    <td class="no-print">
                                        Motivo e razão
                                    </td>

                                    <td class="no-print">
                                        DROGAS
                                    </td>
                                    <td v-if="parametros.tipo_atendimento == 'Apometria (2as. feiras)'" class="no-print">
                                        Ficha de atendimento
                                    </td>
                                    <td v-if="parametros.tipo_atendimento == 'Apometria (2as. feiras)'">
                                        Maca
                                    </td>
                                    <td v-if="parametros.tipo_atendimento == 'Apometria (2as. feiras)'">
                                        Rodada
                                    </td>
                                    <td class="with-print">
                                        ASSINATURA
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="atendimento in atendimentos" :key="atendimento.id">

                                    <td v-if="atendimento.obreiro">
                                        {{atendimento.obreiro}}
                                    </td>
                                    <td v-else>
                                        {{atendimento.user_id}}
                                    </td>                                  
                                    <td v-if="atendimento.obreiro">
                                        Obreiro
                                    </td>
                                    <td v-else>
                                        Frequentador
                                    </td>                                   
                                    <td>
                                        {{atendimento.nome}}
                                    </td>
                                    <td class="no-print">
                                        {{atendimento.email}}
                                    </td>
                                    <td>
                                        {{atendimento.celular}}
                                    </td>
                                    <td class="no-print">
                                        {{atendimento.created_at | date}}
                                    </td>
                                    <td data-toggle="modal" data-target="#exampleModal" class="pointer" @click="showAtendimento(atendimento.id, atendimento.email, atendimento.nome, atendimento.data_atendimento, atendimento.hora_atendimento)">
                                        <span v-if="atendimento.data_atendimento" class-="text-primary">{{ atendimento.data_atendimento | date}}</span>
                                        <span v-else>
                                            <div class="btn btn-primary btn-sm no-print">Agendar</div>
                                        </span>
                                    </td>
                                    <td>
                                        {{atendimento.idade | idade}}
                                    </td>
                                    <td class="no-print">
                                        {{atendimento.recorrer}}
                                    </td>
                                    <td class="no-print">
                                        {{atendimento.drogas}}
                                    </td>
                                    <td v-if="parametros.tipo_atendimento == 'Apometria (2as. feiras)'" class="no-print">
                                        <router-link :to="{name: 'fichaatendimento', params: {id: atendimento.id}}">
                                            <div class="btn btn-sm btn-warning">FICHA</div>
                                        </router-link>
                                    </td>
                                    <td v-if="parametros.tipo_atendimento == 'Apometria (2as. feiras)'">
                                        {{atendimento.maca}}
                                    </td>
                                    <td v-if="parametros.tipo_atendimento == 'Apometria (2as. feiras)'">
                                        {{atendimento.rodada}}
                                    </td>
                                    <td class="with-print">
                                        ______________________________________________________
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import moment from 'moment'
import EditAtendimento from './EditAtendimento'
import {
    mapState,
    mapActions
} from 'vuex';
import {
    mask
} from "vue-the-mask";
import NavHeader from "./../layouts/NavHeader";
import Footer from "./../layouts/Footer";

export default {
    name: "IndexAtendimento",
    data() {
        return {
            require: {},
            DataAtendimentoBuscar: "",
            parametros: {},
        }
    },
    computed: {
        ...mapState({
            atendimentos: state => state.FazerAtendimento.data
        }),

    },
    components: {
        EditAtendimento,
        NavHeader,
        Footer,
    },
    watch: {
        $route() {
            this.parametros.tipo_atendimento = this.$route.params.tipoatendimento
            this.AllAtendimento(this.parametros)
            console.log(this.parametros)
        },

    },
    filters: {
        date: function (value) {
            moment.locale("pt-br");
            if (!value) return "";
            let data = moment(value).format('L');
            return data
        },
        idade: function (value) {
            if (!value) return "";
            let data = moment(value).fromNow('LLL');
            data = parseInt(data)
            return data
        }
    },
    methods: {
        ...mapActions([
            'AllAtendimento',
            'EditAtendimento'
        ]),
        imprimir() {
            window.print();
        },
        showAtendimento(id, email, nome, data_atendimento, hora_atendimento) {

            this.require.id = id;
            this.require.data_atendimento = data_atendimento
            this.require.hora_atendimento = hora_atendimento
            this.require.email = email
            this.require.nome = nome

            this.EditAtendimento(this.require)
        },
        buscarDataAtendimento() {
            if (this.DataAtendimentoBuscar.length == 10) {

                this.parametros.DataAtendimentoBuscar = this.DataAtendimentoBuscar

                this.AllAtendimento(this.parametros)

            } else if (this.DataAtendimentoBuscar.length == 0) {
                this.parametros.DataAtendimentoBuscar = ""
                this.AllAtendimento(this.parametros)
            }
        },
        tellTime(time) {
            console.log(this.$moment(time).format(' mm:ss'))
        }
    },
    mounted() {
        this.parametros.tipo_atendimento = this.$route.params.tipoatendimento

        this.parametros.DataAtendimentoBuscar = ''

        this.AllAtendimento(this.parametros)

    },
    directives: {
        mask
    }

}
</script>

<style>
@media print {

    .no-print,
    .no-print * {
        display: none !important;
    }

    .nav-top {
    margin-top: 0px;
}

    .with-print {
        display: block !important;
    }
}

.with-print {
    display: none;
}

.row-space {
    margin-top: 15px;
}
</style>
