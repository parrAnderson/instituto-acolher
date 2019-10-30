<template>
<div>
    <nav-header></nav-header>
    <hr />
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-12 col-lg-10">
                <div v-if="atendimentos">
                    
                    <div class="row row-space">
                        <div class="col-12">
                            <h4 class="text-center">Encerramentos Apometria</h4>
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
                                            <td class-="text-primary">
                                                DATA ENCERRAMENTO
                                            </td>

                                            <td>
                                                IDADE
                                            </td>
                                            <td class="no-print">
                                                MOTIVO / RAZÃO
                                            </td>

                                            <td class="no-print">
                                                DROGAS
                                            </td>
                                            <td v-if="parametros.tipo_atendimento == 'Apometria (2as. feiras)'" class="no-print">
                                                FAZER ENCERRAMENTO
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
                                            
                                            <td data-toggle="modal" data-target="#exampleModal" class="pointer" @click="showAtendimento(atendimento.id, atendimento.email, atendimento.nome, atendimento.data_atendimento, atendimento.hora_atendimento)">
                                                <span v-if="atendimento.data_encerramento" class-="text-primary">{{ atendimento.data_encerramento}}</span>
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
                                                <router-link :to="{name: 'fichaatendimentoretorno', params: {id: atendimento.id, retorno: 'true'}}">
                                                    <div class="btn btn-sm btn-warning">ENCERRAMENTO</div>
                                                </router-link>
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
        </div>
    </div>
<div class="row row-space justify-content-center no-print">
        <div class="col-12">
            <Footer></Footer>
        </div>
</div>
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
    beforeMount(){
        // parametros.tipo_atendimento = 
    },
    mounted() {
        this.parametros.tipo_atendimento = 'Apometria (2as. feiras)'

        this.parametros.DataAtendimentoBuscar = ''

        this.parametros.encerramento = true

       

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
