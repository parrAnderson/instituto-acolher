<template>
<div>
    <Header>
        <template v-slot:mainpage>
            <TabsApometria></TabsApometria>

            <!-- ORIENTACAO -->
            <div class="modal fade bd-example-modal-xl" id="orientacoesAtendimento" tabindex="-1" role="dialog" aria-labelledby="orientacoesAtendimentoLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Orientações da maca</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <OrientacoesAtendimento :id_atendimento="idPAraOrientacao"/>
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
                    <h4 class="text-center">CABECEIRA DA MACA</h4>
                </div>
            </div>
            <div class="row">
                <div class="row row-space">
                    <div class="col-12">
                        <span class="text-danger text-bold">
                            DATA: <input type="date" v-model="getData">
                        </span>
                    </div>
                </div>
                <div class="col text-right">
                    <select v-model="getMaca">
                        <option value="">Maca</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
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
                                            SELECIONE
                                        </th>
                                        <th>
                                            ID
                                        </th>
                                        <th>
                                            NOME
                                        </th>
                                        <th>
                                            GÊNERO
                                        </th>                                        
                                        <th>
                                            IDADE
                                        </th>
                                        <th>
                                            ESTADO CIVIL
                                        </th>
                                        <th>
                                            RELIGIÃO
                                        </th>
                                        <th>
                                            ENDEREÇO
                                        </th>
                                        <th>
                                            É FUMANTE?
                                        </th>
                                        <th>
                                            CONSOME BEBIDA ALCÓOLICA?
                                        </th>
                                        <th>
                                            DROGAS?
                                        </th>
                                        <th>
                                            TEM ALGUM OUTRO VICIO?
                                        </th>
                                        <th>
                                            ESTÁ SOB TRATAMENTO?
                                        </th>
                                        <th>
                                            MOTIVOS
                                        </th>
                                        <th>
                                            ATEND. ESPECIAL
                                        </th>
                                        <th>
                                            FICHA
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr>
                                         <td data-toggle="modal" data-target="#orientacoesAtendimento" class="btn-pointer">
                                            <div class="btn btn-primary btn-sm">
                                                <i class="far fa-check-square"></i>
                                            </div>
                                        </td>
                                        <td>
                                            OBR <br>
                                            154
                                        </td>
                                        <td>
                                            JOSE DA SILVA
                                        </td>
                                        <td>
                                            MASCULINO
                                        </td>                                      
                                        <td>
                                            15 anos
                                            e 7 meses
                                        </td>
                                        <td>
                                            CASADO
                                        </td>
                                        <td>
                                            KARDECISTA
                                        </td>
                                        <td>
                                            RUA DO LOGRADOURO, 27 – BLOCO 4 – AP. 24 – CENTRO – CIDADE / SP
                                        </td>
                                        <td>
                                            NÃO
                                        </td>
                                        <td>
                                            NÃO
                                        </td>
                                        <td>
                                            NÃO
                                        </td>                                        
                                        <td data-toggle="modal" data-target="#modalTratamento" class="btn-pointer">
                                            {{textTratamento | textLimitTd}}

                                        </td>
                                        <td data-toggle="modal" data-target="#modalMotivo" class="btn-pointer">
                                            {{textMotivo | textLimitTd}}

                                        <td>
                                            NÃO
                                        </td>                                        
                                        <td>
                                            <div class="btn btn-warning btn-sm">FICHA</div>
                                        </td>                                        
                                    </tr> -->

                                    <tr v-for="atendimento in programacao">
                                        <td data-toggle="modal" data-target="#orientacoesAtendimento" class="btn-pointer" @click="abrirOrientacao(atendimento.apometria[0].id)">
                                            <div class="btn btn-primary btn-sm">
                                                <i class="far fa-check-square"></i>
                                            </div> {{atendimento.apometria[0].id}}
                                        </td>
                                        <td v-if="atendimento.user[0].type == 'frequentador'">
                                            {{atendimento.user[0].type | limitType}} <br>
                                            {{atendimento.user[0].id}}

                                        </td>
                                        <td v-else>
                                            {{atendimento.user[0].type | limitType}} <br>
                                            {{atendimento.user[0].id}}
                                        </td>
                                        <td>
                                            {{atendimento.user[0].name}}
                                        </td>
                                        <td>
                                            {{atendimento.user[0].genero}}
                                        </td>

                                        <td>
                                            {{atendimento.user[0].data_nascimento | idadeComMeses}}

                                        </td>
                                        <td>
                                            {{atendimento.user[0].estado_civil}}
                                        </td>
                                        <td>
                                            {{atendimento.user[0].religiao}}
                                        </td>
                                        <td>
                                            {{atendimento.user[0].logradouro }}, {{atendimento.user[0].numero}} -
                                            {{atendimento.user[0].municipio}} - {{atendimento.user[0].estado}}
                                        </td>
                                        
                                        <td>
                                            {{atendimento.fumante}}
                                        </td>
                                        <td>
                                            {{atendimento.bebida}}
                                        </td>
                                        <td>
                                            {{atendimento.drogas}}
                                        </td>
                                        <td>
                                            {{atendimento.outro_vicio}}
                                        </td>
                                        <td @click="modalTratamento = atendimento.tratamento" data-toggle="modal" data-target="#modalTratamento" class="btn-pointer">
                                            {{atendimento.tratamento | textLimitTd}}

                                        </td>
                                        <td @click="modalMotivo = atendimento.motivo" data-toggle="modal" data-target="#modalMotivo" class="btn-pointer">
                                            {{atendimento.motivo | textLimitTd}}

                                        <td>
                                            <p v-if="atendimento.apometria[0].atendimento_especial == true">Especial</p>
                                            <p v-if="atendimento.apometria[0].atendimento_prioritario == true">Prioritário</p>

                                        </td>

                                        <td>
                                            <div class="btn btn-warning btn-sm">FICHA</div>
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
import Header from '@/views/layouts/HeaderPublic'
import TabsApometria from '@/views/layouts/TabsApometria'
import OrientacoesAtendimento from '@/components/apometria/OrientacoesAtendimento'

import moment from 'moment'
import {
    mapState,
    mapActions,
    mapMutations,
} from 'vuex'


export default {
    name: "CabeceiraDaMaca",
    data() {
                return {
            modalTratamento: "",
            modalMotivo: "",

            showModal: false,
            dadosCancelamento: {},
            dadosConfirmar: {},
            getData: "",
            getMaca: "",

            idPAraOrientacao: 0,
        }

    },
    components: {
        Header,
        TabsApometria,
        OrientacoesAtendimento,
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
        var data = new Date()
            var dia     = data.getDate();
            var mes     = data.getMonth() + 1 ;
            var ano    = data.getFullYear()

            this.getData = ano + '-' + mes + '-' + dia;
    this.getMaca = 1
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
        abrirOrientacao(id){
            this.idPAraOrientacao = id
        },
        getDadosAtendimento() {
            var dados = {}
            dados.status = 7
            dados.tipostatus = '='
            dados.maca = this.getMaca
            dados.data = this.getData
            
            this.getListaLeituraDasFichas(dados)
        },
        ...mapActions([
            'getListaLeituraDasFichas',
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
            this.dadosConfirmar.status = 3

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
        getMaca(){
            this.getDadosAtendimento()           
        },
        getData(){
            this.getDadosAtendimento()           
        },

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
