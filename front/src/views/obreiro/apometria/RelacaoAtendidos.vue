<template>
<div>
    <Header>
        <template v-slot:mainpage>
            <TabsApometria></TabsApometria>

            <!-- LISTA DE PRESENÇA -->
            <div class="modal fade" id="listaDePresenca" tabindex="-1" role="dialog" aria-labelledby="listaDePresencaLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Data de Atendimento</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <listaDePresenca/>
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

            

            <div class="row row-space">
                <div class="col-12">
                    <h4 class="text-center">RELAÇÃO DE ATENDIDOS DO DIA</h4>
                </div>
            </div>
            <div class="row row-space">
                <div class="col-12">
                    <span class="text-danger text-bold">
                        DATA: 10/06/2019
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
                                            E-MAIL
                                        </th>
                                        <th>
                                            CELULAR
                                        </th>                                        
                                        <th class-="text-primary">                                            
                                            REGISTRO DO HORARIO DE CHEGADA
                                        </th>
                                        <th class="no-print">
                                            FICHA
                                        </th>                                        
                                    </tr>
                                </thead>
                                

                                <tbody>
                                    <tr v-for="atendimento in programacao">
                                        <td v-if="atendimento.user[0].type == 'frequentador'">
                                            {{atendimento.user[0].type | limitType}} -
                                            {{atendimento.user[0].id}}

                                        </td>
                                        <td v-else>
                                            {{atendimento.user[0].type | limitType}} -
                                            {{atendimento.user[0].id}}
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
                                        <td v-if="!atendimento.apometria[0].horario_de_chegada">
                                            <div class="btn btn-primary btn-sm" @click="chegou(atendimento.apometria[0].id, atendimento.user_id)">Chegou</div>
                                        </td>
                                        <td v-else>
                                            {{atendimento.apometria[0].horario_de_chegada}}
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
            <div class="row">
                <div class="col-12 text-right">
                    <div class="btn btn-sm btn-danger" data-toggle="modal" data-target="#listaDePresenca">
                        <span class="text-bold">
                        IMPRIMIR LISTA DE PRESENÇA PARA ASSINATURA
                    </span>
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
import listaDePresenca from '@/components/apometria/listaDePresenca'
import moment from 'moment'
import {
    mapState,
    mapActions,
    mapMutations,
} from 'vuex'
export default {
    name: "RelacaoAtendidos",
    data() {
        return {
            textMotivo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales luctus tortor vel porta. Fusce vulputate, urna in placerat interdum, nibh risus scelerisque leo, sed accumsan velit est fermentum elit. Donec pharetra efficitur velit. Aenean et dolor ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin molestie laoreet enim quis mollis. Cras feugiat ligula congue cursus iaculis. Cras fermentum vitae ligula a pulvinar. Nam quam massa, convallis dapibus velit in, ornare eleifend orci. Morbi in egestas erat. Nunc lectus urna, dignissim et risus id, sagittis semper odio. Integer tincidunt, eros a finibus fermentum, dolor mi vulputate felis, in lacinia leo nisi ac leo. Fusce eu lorem pellentesque, pharetra mauris gravida, rhoncus diam. Pellentesque sit amet erat lectus. ",
            textTratamento: "QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. ",
        horarioDeChegada:"",
        showModal: false,
            dadosCancelamento: {},
            dadosChegou: {},
        }
    },
    components: {
        Header,
        TabsApometria,
        listaDePresenca,
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
    methods:{
        
        getDadosAtendimento() {
            var data = '2019-11-25'
            this.getListaDeAtendimento(data)
        },
        ...mapActions([
            // 'allAtendimentoApometria',
            'changeListaAtendimentosAgendados',
            'changeShowModalDataPicker',
            'gerarListaDeAtendimentos',
            'atualizarAtendimentoApometria',
            'getListaDeAtendimento',
        ]),

        modalDataPicker(atendimento) {
            this.dadosAtendimento = atendimento
            this.changeShowModalDataPicker()
        },
        chegou(id_atendimento_apometria, user_id) {

            var data = new Date()
            var dia     = data.getDate();
            var mes     = data.getMonth();
            var ano4    = data.getFullYear();  
            var hora    = data.getHours();          
            var min     = data.getMinutes();      
            var seg     = data.getSeconds(); 
            this.horarioDeChegada = hora + ':' + min + ':' + seg;


            this.dadosChegou = {}
            this.dadosChegou.id = id_atendimento_apometria
            this.dadosChegou.status = '4'
            this.dadosChegou.horario_de_chegada = this.horarioDeChegada
            //colocar para puxar a relaçâo de atendidos do dia se for => 4

            var acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Confirmou a chegada",
                'id_atualizado': user_id
            }

            var dados = {}
            dados.acoes = acoes
            dados.data = this.dadosChegou

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
