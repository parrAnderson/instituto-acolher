<template>
<div>
    <Header>
        <template v-slot:mainpage>
            <TabsApometria></TabsApometria>

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
                    <h4 class="text-center">RODADAS E MACAS</h4>
                </div>
            </div>
            <div class="row row-space">
                <div class="col-12">
                    <span class="text-danger text-bold">
                        DATA: <input type="date" v-model="getData">
                    </span>
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
                                            ENDEREÇO
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
                                        <th class-="text-primary">
                                            AGENDADO
                                        </th>
                                        <th>
                                            RODADA
                                        </th>
                                        <th>
                                            MACA
                                        </th>
                                        <th class="no-print">
                                            FICHA
                                        </th>
                                        <th>
                                            ATUALIZACAO
                                        </th>
                                
                                        <th>
                                            CONCLUSÃO
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr  v-for="atendimento in programacao" v-bind:class="classCor[atendimento.user[0].logradouro + atendimento.user[0].numero]" v-if="atendimento.user">
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

                                        <td v-if="enderecosCor[atendimento.user[0].logradouro + atendimento.user[0].numero]">

                                            <p class="text-primary">
                                                {{atendimento.user[0].logradouro }}, {{atendimento.user[0].numero}} -
                                                {{atendimento.user[0].municipio}} - {{atendimento.user[0].estado}}

                                            </p>
                                        </td>
                                        <td v-else>

                                            {{atendimento.user[0].logradouro }}, {{atendimento.user[0].numero}} -
                                            {{atendimento.user[0].municipio}} - {{atendimento.user[0].estado}}

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

                                        </td>
                                        <td>
                                            {{atendimento.apometria[0].data_agendada | date}}

                                        </td>
                                        <td>
                                            <select v-model="rodadaSelect[atendimento.apometria[0].id]" @change="rodadaDeselecionada(rodadaSelect[atendimento.apometria[0].id], macaSelect[atendimento.apometria[0].id], atendimento.apometria[0].id)">
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
                                        </td>
                                        <td>
                                            <select v-model="macaSelect[atendimento.apometria[0].id]" @change="macaSelecionada(rodadaSelect[atendimento.apometria[0].id], macaSelect[atendimento.apometria[0].id], atendimento.apometria[0].id)">
                                                <option v-if="macaSelect[atendimento.apometria[0].id]">
                                                    {{macaSelect[atendimento.apometria[0].id]}}
                                                </option>
                                                <option v-for="maca in rodadas_macas_disponiveis[rodadaSelect[atendimento.apometria[0].id]]" v-if="maca">
                                                    {{maca}}
                                                </option>

                                            </select>
                                        </td>
                                        <td>
                                            <div class="btn btn-warning btn-sm">FICHA</div>
                                        </td>

                                        <td>
                                            <div for="checkCasa" class="btn btn-outline-secondary btn-checkbox text-center  btn-sm btn-100w">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input pointer" id="checkCasa" v-model="casaBtn[atendimento.apometria[0].id]">
                                                    <label class="form-check-label pointer" for="checkCasa">Casa</label>
                                                </div>
                                            </div>

                                            <div for="checkCasa" class="btn btn-outline-secondary btn-checkbox text-center  btn-sm btn-100w">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input pointer" id="checkCasa" v-model="atendimentoPrioritario[atendimento.apometria[0].id]">
                                                    <label class="form-check-label pointer" for="checkCasa">At. Prioritário</label>
                                                </div>
                                            </div>

                                            <div for="checkCasa" class="btn btn-outline-secondary btn-checkbox text-center  btn-sm btn-100w">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input pointer" id="checkCasa" v-model="atendimentoEspecial[atendimento.apometria[0].id]">
                                                    <label class="form-check-label pointer" for="checkCasa">At. Especial</label>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="btn btn-outline-primary btn-sm btn-100w pointer" @click="confirmar(atendimento.apometria[0].id, atendimento.user_id)">Confirmar</div>

                                            

                                            <div class="btn btn-outline-danger btn-sm btn-cancelar btn-100w pointer" data-toggle="modal" data-target="#modalCancelamento" @click="openModalCancelamento(atendimento.apometria[0].id, atendimento.user_id)">Cancelar</div>
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

import moment from 'moment'
import {
    mapState,
    mapActions,
    mapMutations,
} from 'vuex'

export default {
    name: "RodadasMacas",
    data() {
        return {
            modalTratamento: "",
            modalMotivo: "",

            showModal: false,
            dadosCancelamento: {},
            dadosConfirmar: {},
            listaDeEnderecos: {},
            listaEnderecosRepetidos: {},

            ArrayRodadasMacas: {},
            rodadaSelect: {},
            macaSelect: {},
            macaAnteriorSelecionada: {},
            rodadaSelectAnterior: {},
            classCor: {},
            casaBtn: {},
            atendimentoPrioritario: {},
            atendimentoEspecial: {},

            getData: "",
        }
    },
    components: {
        Header,
        TabsApometria,
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
            // console.log(value)
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

        this.listaDeEnderecos = {}
        this.listaEnderecosRepetidos = {}
        this.classCor = {}
        this.enderecosCor = {}

        this.getMacasDisponiveis(this.getData)

        this.getDadosAtendimento()

    },
    computed: {
        ...mapState({
            dataCkeckIn: state => state.AtendimentoApometria,
            programacao: state => state.AtendimentoApometria.programacao,
            dataAgendada: state => state.AtendimentoApometria.dataAgendada,

            cancelado: state => state.AtendimentoApometria.cancelado,
            enderecosRepetidos: state => state.AtendimentoApometria.enderecos_repetidos,
            rodadas_macas_disponiveis: state => state.AtendimentoApometria.rodadas_macas_disponiveis,

        }),
    },
    methods: {
        // removerCasa(id){
        //     this.casaBtn[id] = false
        //     this.classCasaBtn[id] = {
        //             active: true,
        //         'mostrar': true
        //     }
        // },
        // adicionarCasa(id){
        //     this.casaBtn[id] = true
        //     this.classCasaBtn[id] = {
        //             active: true,
        //         'ocultar': true
        //     }
        // },
        rodadaDeselecionada(rodada, maca, id) {

            if (maca && this.rodadaSelectAnterior[id]) {
                var dados = {}
                dados.rodada = this.rodadaSelectAnterior[id]
                dados.maca = this.macaSelect[id]
                this.adicionar_rodadas_macas(dados)

                this.macaSelect[id] = ''

            }
            this.rodadaSelectAnterior[id] = rodada

        },
        macaSelecionada(rodada, maca, id) {
            console.log()
            var dados = {}
            dados.rodada = rodada
            dados.maca = maca

            var adicionar = {}
            adicionar.rodada = rodada
            adicionar.maca = this.macaAnteriorSelecionada[id]
            if (this.macaAnteriorSelecionada[id] && rodada) {
                this.adicionar_rodadas_macas(adicionar)
            }
            this.remover_rodadas_macas(dados)
            this.macaAnteriorSelecionada[id] = maca

        },
        adicionarEnderecoArray(rua, numero, id) {

            var endereco = rua + numero
            var dados = {
                'endereco': rua + numero
            }

            if (this.listaDeEnderecos[endereco] === endereco) {
                this.classCor[endereco] = {
                    active: true,
                    'text-primary': true
                }
            } else {
                this.listaDeEnderecos[endereco] = endereco

            }

        },

        getDadosAtendimento() {
            this.listaEnderecosRepetidos = {}
            this.ListaDeEnderecos = {}
            this.classCor = {}

            
            this.getListaDeAtendimentoRodadasMacas(this.getData)
        },
        ...mapActions([
            'getListaDeAtendimentoRodadasMacas',
            'changeListaAtendimentosAgendados',
            'changeShowModalDataPicker',
            'gerarListaDeAtendimentos',
            'atualizarAtendimentoApometria',
            'setEnderecosRepetidos',
            'getMacasDisponiveis',
            'remover_rodadas_macas',
            'adicionar_rodadas_macas',
            // 'allAtendimentoApometria',
        ]),

        modalDataPicker(atendimento) {
            this.dadosAtendimento = atendimento
            this.changeShowModalDataPicker()
        },
        confirmar(id_atendimento_apometria, user_id) {
            this.dadosConfirmar = {}
            this.dadosConfirmar.maca = this.macaSelect[id_atendimento_apometria]
            this.dadosConfirmar.rodada = this.rodadaSelect[id_atendimento_apometria]
            this.dadosConfirmar.casa = this.casaBtn[id_atendimento_apometria]
            this.dadosConfirmar.atendimento_especial = this.atendimentoEspecial[id_atendimento_apometria]
            this.dadosConfirmar.atendimento_prioritario = this.atendimentoPrioritario[id_atendimento_apometria]

            this.dadosConfirmar.id = id_atendimento_apometria
            this.dadosConfirmar.status = 5

            var acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Confirmou a maca para o atendimento",
                'id_atualizado': user_id
            }

            var dados = {}
            dados.acoes = acoes
            dados.data = this.dadosConfirmar
            if (this.macaSelect[id_atendimento_apometria]) {
                this.atualizarAtendimentoApometria(dados)
                this.dadosConfirmar = {}
                this.getDadosAtendimento()
            }

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
                'acao_obreiro': "Cancelou atendimento em Rodadas e Macas de Apometria",
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
        getData(){
            this.getDadosAtendimento() 
            this.getMacasDisponiveis(this.getData)           
        },
        programacao: {
            handler: function (val, oldVal) {

                    this.listaDeEnderecos = {}
                    val.forEach((index) => {

                    this.adicionarEnderecoArray(index.user[0].logradouro, index.user[0].numero, index.id)
                });
                
              
            },

            deep: true
        },
        enderecosRepetidos: {
            handler: function (val, oldVal) {
                this.enderecosRepetidosWatch = this.enderecosRepetidos
            },

            deep: true
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

.ocultar {
    display: none
}

.mostrar {
    display: block
}
.pointer{
    cursor: pointer;
}
.btn-checkbox{
    
    cursor: default ! important;

}
</style>
