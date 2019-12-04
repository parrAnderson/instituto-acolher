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
                                    <FichaFrequentador :id_frequentador="idFichaFrequentador" :tipo_ficha="'editar'" :id_obreiro="$store.state.Auth.userId" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-space">
                <div class="col-12">
                    <h4 class="text-center">ENTREVISTA PRÉ ATENDIMENTO</h4>
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
                                        <th class="no-print">
                                            FICHA
                                        </th>                                  
                                        <th class-="text-primary">                                            
                                            ENCAMINHAR PARA ATENDIMENTO
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
                                    <div class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalFichaFrequentador" @click="idFichaFrequentador = atendimento.user[0].id">FICHA</div>
                                        </td>
                                        <td>
                                            <div class="btn btn-outline-primary btn-sm " @click="confirmar(atendimento.apometria[0].id, atendimento.user_id)">Confirmar</div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-12 justify-content-end text-right">
                    <div class="btn btn-info btn-sm">GERAR LISTA</div>
                </div>
            </div> -->

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
    name: "EntrevistaPreAtendimento",
    data() {
        return {
            showModal: false,
            dadosCancelamento: {},
            dadosConfirmar: {},
            idFichaFrequentador: null,
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
            this.allAtendimentoApometria(5)
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
        confirmar(id_atendimento_apometria, user_id) {
            this.dadosConfirmar = {}
            this.dadosConfirmar.id = id_atendimento_apometria
            this.dadosConfirmar.status = 7

            var acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Confirmou em Pré Atendimento",
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
</style>
