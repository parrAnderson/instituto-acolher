<template>
<div>
    <Header>
        <template v-slot:mainpage>
            <TabsApometria></TabsApometria>

<!-- MODAL FICHA ATENDIMENTO -->
    <div class="modal fade bd-example-modal-xl" id="modalFichaFrequentador" tabindex="-1" role="dialog" aria-labelledby="modalFichaFrequentador" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h5 class="modal-title" id="exampleModalLabel">Cancelar Atendimento</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button> -->
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <FichaFrequentador :id_frequentador="idFichaFrequentador" :tipo_ficha="'visualizar'"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
            <div class="modal fade" id="modalCancelamento" tabindex="-1" role="dialog" aria-labelledby="modalCancelamento" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cancelar Atendimento</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Motivo do cancelamento" v-model="dadosCancelamento.status_motivo">
                                    </div>
                                </div>
                            </div>
                            <div class="row row-space">
                                <div class="col">
                                    <div class="btn btn-primary" data-dismiss="modal">VOLTAR</div>
                                </div>
                                <div class="col text-right">
                                    <div class="btn btn-danger" data-dismiss="modal" @click="cancelar()">FAZER CANCELAMENTO</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- MODAL MOTIVO  -->
            <div class="modal fade" id="modalMotivo" tabindex="-1" role="dialog" aria-labelledby="modalMotivo" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Motivos</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {{modalMotivo}}

                        </div>
                    </div>
                </div>
            </div>
            <!-- MODAL Tratamento  -->
            <div class="modal fade" id="modalTratamento" tabindex="-1" role="dialog" aria-labelledby="modalTratamento" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Tratamento</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {{modalTratamento}}

                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-space">
                <div class="col-12">
                    <h4 class="text-center">CONFIRMAÇÃO DE ATENDIMENTO</h4>
                </div>
            </div>
            <div class="row justify-content-center row-space">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body table-responsive p-0">

                            <table class="table table table-head-fixed table-striped table-sm table-bordered table table-condensed">
                                <thead>
                                    <tr>

                                        <th>
                                            ID
                                        </th>
                                        <th>
                                            NOME
                                        </th>
                                        <th class="no-print">
                                            E-MAIL
                                        </th>
                                        <th>
                                            CELULAR
                                        </th>
                                        <th>
                                            IDADE
                                        </th>
                                        <th class="no-print">
                                            VÍCIO
                                        </th>
                                        <th class="no-print">
                                            TRATAMENTO
                                        </th>
                                        <th class="no-print">
                                            MOTIVO
                                        </th>
                                        <th class="no-print">
                                            SOLICITADO
                                        </th>
                                        <th class-="text-primary">
                                            AGENDADO
                                        </th>
                                        <th class="no-print">
                                            FICHA
                                        </th>
                                        <th>
                                            ATUALIZAÇÃO
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="atendimento in programacao">
                                     <td v-if="atendimento.user[0].type == 0">
                                            FRE <br>
                                            {{atendimento.user[0].id}}

                                            </td>
                                            <td v-else>
                                                OBR <br>
                                                {{atendimento.user[0].obreiro}}
                                            </td>                                        
                                        <td>
                                            {{atendimento.user[0].name}}
                                        </td>
                                        <td>
                                            {{atendimento.user[0].email}}
                                        </td>
                                        <td>
                                            {{atendimento.user[0].celular}}
                                        </td>
                                        <td>
                                            {{atendimento.user[0].data_nascimento | idadeComMeses}}

                                        </td>
                                        <td>
                                            {{atendimento.drogas}}
                                        </td>
                                        <td @click="modalTratamento = atendimento.tratamento" data-toggle="modal" data-target="#modalTratamento" class="btn-pointer">
                                            {{atendimento.tratamento | textLimitTd}}

                                        </td>
                                        <td @click="modalMotivo = atendimento.motivo" data-toggle="modal" data-target="#modalMotivo" class="btn-pointer">
                                            {{atendimento.motivo | textLimitTd}}

                                        <td>
                                            {{atendimento.created_at | date}}
                                        </td>
                                        <td>
                                            {{atendimento.apometria[0].data_agendada | date}}

                                        </td>
                                        <td>
                                                                                <div class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalFichaFrequentador" @click="idFichaFrequentador = atendimento.user[0].id">FICHA</div>

                                        </td>
                                        <td>
                                            <div class="btn btn-outline-primary btn-sm btn-100w" v-if="!btnConfimar[atendimento.apometria[0].id]" @click="confirmar(
                                                atendimento.apometria[0].id, atendimento.user_id, 
                                                atendimento.apometria[0].data_agendada)">Confirmar</div>
                                            <div v-else class="btn btn-outline-primary btn-sm btn-100w">
                                                <i class="fas fa-spinner"></i> Confirmando
                                                </div>    
                                            <div class="btn btn-outline-danger btn-sm btn-cancelar btn-100w" data-toggle="modal" data-target="#modalCancelamento" @click="openModalCancelamento(atendimento.apometria[0].id, atendimento.user_id)">Cancelar</div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </template>
    </Header>
</div>
</template>

<script>
import FichaFrequentador from '@/components/frequentador/FichaFrequentador'
import Header from '@/views/layouts/HeaderPublic'
import TabsApometria from '@/views/layouts/TabsApometria'

import moment from 'moment'
import {
    mapState,
    mapActions,
    mapMutations,
} from 'vuex'

export default {
    name: "ConfirmacaoApometria",
    data() {
        return {
            modalTratamento: "",
            modalMotivo: "",

            showModal: false,
            dadosCancelamento: {},
            dadosConfirmar: {},
            idFichaFrequentador: null,
            btnConfimar: [],
        }
    },
    components: {
        Header,
        TabsApometria,
        FichaFrequentador,
    },
    filters: {
        idadeComMeses(value) {

            if (value) {

                let data = moment(new Date(value));

                var b = moment(data)
                var a = moment(new Date())

                var years = a.diff(b, 'year');
                b.add(years, 'years');

                var months = a.diff(b, 'months');
                b.add(months, 'months');

                var days = a.diff(b, 'days');
                var calc = years + ' anos e ' + months + ' meses'

                return calc

            }

        },
        filterDateCalendar(value) {
            console.log(value)
            var options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            };
            var today = new Date(value);
            var today = today.setDate(today.getDate() + 1);
            var date1 = new Date(today).toLocaleDateString("pt-BR", options)
            return date1
        },
        date: function (value) {
            moment.locale("pt-br");
            if (!value) return "";
            let data = moment(value).format('L');
            return data
        },
        textLimitTd(value) {
            if (!value) return ''
            value = value.toString()
            return value.substring(0, 30) + " ...";
        },

        limitType(value) {
            if (!value) return ''
            value = value.toString()
            value = value.toUpperCase();
            return value.substring(0, 3);
        },

    },
    beforeMount() {
        this.getDadosAtendimento()
    },
    computed: {
        ...mapState({
            dataCkeckIn: state => state.AtendimentoApometria,
            programacao: state => state.AtendimentoApometria.programacao,
            dataAgendada: state => state.AtendimentoApometria.dataAgendada,

            cancelado: state => state.AtendimentoApometria.cancelado,

        }),
    },
    methods: {
        getDadosAtendimento() {
            this.allAtendimentoApometria(2)
        },
        ...mapActions([
            'allAtendimentoApometria',
            'changeListaAtendimentosAgendados',
            'changeShowModalDataPicker',
            'gerarListaDeAtendimentos',
            'atualizarAtendimentoApometria',
        ]),

        modalDataPicker(atendimento) {
            this.dadosAtendimento = atendimento
            this.changeShowModalDataPicker()
        },
        confirmar(id_atendimento_apometria, user_id, data_agendada) {
            this.btnConfimar[id_atendimento_apometria] = true
            console.log(this.btnConfimar.id_atendimento_apometria)
            this.dadosConfirmar = {}
            this.dadosConfirmar.id = id_atendimento_apometria
            this.dadosConfirmar.status = 3
            this.dadosConfirmar.user_id = user_id
            this.dadosConfirmar.data_agendada = data_agendada

            var acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Confirmou o atendimento",
                'id_atualizado': user_id
            }

            var dados = {}
            dados.acoes = acoes
            dados.data = this.dadosConfirmar

            this.atualizarAtendimentoApometria(dados)
            this.dadosConfirmar = {}

            this.getDadosAtendimento()
        },

        openModalCancelamento(id_atendimento_apometria, user_id) {
            this.dadosCancelamento = {}
            this.dadosCancelamento.id = id_atendimento_apometria
            this.dadosCancelamento.status = '1'
            this.dadosCancelamento.id_user_acao = user_id
        },
        cancelar() {

            var acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Cancelou atendimento que estava confirmado",
                'id_atualizado': this.dadosCancelamento.id_user_acao
            }

            var dados = {}
            dados.acoes = acoes
            dados.data = this.dadosCancelamento

            this.atualizarAtendimentoApometria(dados)
            this.dadosCancelamento = {}

            this.getDadosAtendimento()

        }

    },
    watch: {
        cancelado: {
            handler: function (val, oldVal) {
                this.getDadosAtendimento()
            },

            deep: true
        },
        listaGerada: {
            handler: function (val, oldVal) {
                this.getDadosAtendimento()
            },

            deep: true
        },
        dataAgendada: {
            handler: function (val, oldVal) {
                if (this.dataAgendada.dataAgendada) {
                    this.addItemLista(this.dataAgendada.atendimento, {
                        id: this.dataAgendada.atendimento,
                        data_agendada: this.dataAgendada.dataAgendada
                    })
                    this.changeShowModalDataPicker()
                }

                // 
            },
            deep: true
        },

    }

}
</script>

<style>
.btn-cancelar {
    margin-top: 3px;
}

.btn-100w {
    width: 100%
}

.btn-pointer {
    cursor: pointer;
}

.btn-cancelar {
    margin-top: 3px;
}

.btn-100w {
    width: 100%
}

.btn-pointer {
    cursor: pointer;
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
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
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

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
