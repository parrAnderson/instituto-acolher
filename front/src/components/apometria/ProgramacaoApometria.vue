<template>
<div>
    <div v-if="mostrarListaAgendamento">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card">
            <div class="card-body">
                <table class="table">
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Data Agendada
                </th>
            </tr>
            <tr  v-for="listaAgendados in listaAtendimentosAgendados">
                <td>
                    {{listaAgendados.id}}
                </td>
                <td>
                    {{listaAgendados.data_agendada}}
                </td>
            </tr>
        </table>
        
            </div>
        </div>
            </div>
        </div>
    </div>

    

    <!-- DATA PICKER -->
    <div class="modal fade" id="modalDataPicker" tabindex="-1" role="dialog" aria-labelledby="modalDataPickerLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Data de Atendimento</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <DataPicker :atendimento="dadosAtendimento"></DataPicker>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL AGENDAMENTO -->
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
                    <!-- <edit-atendimento></!--> -->
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

    <div class="row row-space" v-if="!mostrarListaAgendamento">
        <div class="col-12">
            <h4 class="text-center">PROGRAMAÇÃO DE ATENDIMENTO</h4>
        </div>
    </div>
    <div class="row justify-content-center row-space" v-if="!mostrarListaAgendamento">
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
                                    {{atendimento.user[0].email}}
                                </td>
                                <td>
                                    {{atendimento.user[0].celular}}
                                </td>
                                <td>
                                    {{atendimento.user[0].idade}}
                                    15 anos
                                    e 7 meses
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
                                    {{atendimento.data_solicitacao}}
                                </td>
                                <td @click="dadosAtendimento = atendimento" data-toggle="modal" data-target="#modalDataPicker" class="btn-pointer">

                                    <div v-if="lista[atendimento.id]">
                                        <div v-for="item in lista">
                                            <div v-if="item.id == atendimento.id">
                                                {{item.data_agendada}}
                                            </div>
                                        </div>
                                    </div>

                                    <div v-else class="btn btn-outline-success btn-sm btn-100w">
                                        dd/mm/yyyy
                                    </div>

                                </td>
                                <td>
                                    <div class="btn btn-warning btn-sm">FICHA</div>
                                </td>
                                <td>
                                    <div class="btn btn-outline-secondary btn-sm btn-100w">Reagendar</div>
                                    <div class="btn btn-outline-danger btn-sm btn-cancelar btn-100w">Cancelar</div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 justify-content-end text-right"  v-if="!mostrarListaAgendamento">
            <div @click="mostrarListaAgendamento = true" class="btn btn-info btn-sm">GERAR LISTA</div>
        </div>
        
    </div>
    <div class="row justify-content-center">
        <div class="col-3  "  v-if="mostrarListaAgendamento">
            <div @click="mostrarListaAgendamento = false" class="btn btn-warning btn-sm">
                <i class="fas fa-arrow-left"></i> VOLTAR PARA PROGRAMAÇÃO
                </div>
        </div>
  <div class="col-3 text-right"  v-if="mostrarListaAgendamento">
          <div class="btn btn-info btn-sm"> CONFIRMAR ATENDIMENTOS</div>
          </div>
    </div>

</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
import DataPicker from '@/components/DataPicker'
import ListaDoAgendamento from '@/components/apometria/listaDoAgendamento'
export default {
    name: "ProgramacaoApometria",

    data() {
        return {
            textMotivo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales luctus tortor vel porta. Fusce vulputate, urna in placerat interdum, nibh risus scelerisque leo, sed accumsan velit est fermentum elit. Donec pharetra efficitur velit. Aenean et dolor ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin molestie laoreet enim quis mollis. Cras feugiat ligula congue cursus iaculis. Cras fermentum vitae ligula a pulvinar. Nam quam massa, convallis dapibus velit in, ornare eleifend orci. Morbi in egestas erat. Nunc lectus urna, dignissim et risus id, sagittis semper odio. Integer tincidunt, eros a finibus fermentum, dolor mi vulputate felis, in lacinia leo nisi ac leo. Fusce eu lorem pellentesque, pharetra mauris gravida, rhoncus diam. Pellentesque sit amet erat lectus. ",
            textTratamento: "QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. ",
            modalTratamento: "",
            modalMotivo: "",
            dadosAtendimento: {},
            lista: {},
            ValoresListaDoAgendamento: {},
            mostrarListaAgendamento: false,
        }
    },
    filters: {
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

    components: {
        DataPicker,
        ListaDoAgendamento,
    },
    beforeMount() {
        this.allAtendimentoApometria()
    },
    computed: {
        ...mapState({
            dataCkeckIn: state => state.AtendimentoApometria,
            programacao: state => state.AtendimentoApometria.programacao,
            dataAgendada: state => state.AtendimentoApometria.dataAgendada,
            listaAtendimentosAgendados: state => state.AtendimentoApometria.listaAtendimentosAgendados,

        }),
    },
    methods: {
        ...mapActions([
            'allAtendimentoApometria',
            'changeListaAtendimentosAgendados',
        ]),
        addItemLista(id, data) {

            this.lista[id] = data
            this.changeListaAtendimentosAgendados(this.lista)
            this.allAtendimentoApometria()
            // console.log(this.lista[1].data_agendada)
        },

    },
    watch: {
        dataAgendada: {
            handler: function (val, oldVal) {
                this.addItemLista(this.dataAgendada.atendimento, {
                    id: this.dataAgendada.atendimento,
                    data_agendada: this.dataAgendada.dataAgendada
                })
            },
            deep: true
        },
        lista: {
            handler: function (val, oldVal) {
                this.ValoresListaDoAgendamento = this.lista
            },
            deep: true

        }
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
