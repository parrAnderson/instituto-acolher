<template>
<div>     
    <DataPicker :atendimento="dadosAtendimento"></DataPicker>              
 

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
            <h4 class="text-center">PROGRAMAÇÃO DE ATENDIMENTO</h4>
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
                                <td @click="modalDataPicker(atendimento)" data-toggle="modal" data-target="#modalDataPicker" class="btn-pointer" >

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
                                    <div class="btn btn-outline-secondary btn-sm btn-100w" @click="removerItemlista(atendimento.id)">Reagendar</div>
                                    <div class="btn btn-outline-danger btn-sm btn-cancelar btn-100w" @click="statusCancelar(atendimento.id)">Cancelar</div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 justify-content-end text-right" >
            <div class="btn btn-info btn-sm" @click="gerarLista()">GERAR LISTA</div>
        </div>
        
    </div>
   

</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations,
} from 'vuex'
import DataPicker from '@/components/DataPicker'
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
            showModal: false,
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
            listaGerada: state => state.AtendimentoApometria.listaGerada,
            cancelado: state => state.AtendimentoApometria.cancelado,

        }),
    },
    methods: {
        ...mapActions([
            'allAtendimentoApometria',
            'changeListaAtendimentosAgendados',
            'changeShowModalDataPicker',
            'gerarListaDeAtendimentos',
            'cancelarAtendimento',
        ]),
        addItemLista(id, data) {

            this.lista[id] = data
            this.changeListaAtendimentosAgendados(this.lista)
            this.allAtendimentoApometria()
            
        },
        modalDataPicker(atendimento){
            this.dadosAtendimento = atendimento
            this.changeShowModalDataPicker()
        },
       gerarLista(){
           this.gerarListaDeAtendimentos(this.lista)           
       },
       removerItemlista(idLista){
           delete this.lista[idLista]
            this.allAtendimentoApometria()
       },
       statusCancelar(id){
           let confirmado = confirm("Deseja remover da lista?");
           if(confirmado){
               this.cancelarAtendimento(id)
           this.removerItemlista(id)
           console.log('atualizou a lista')
           this.allAtendimentoApometria()
           console.log('talvez a lista')
           }
       }

    },
    watch: {
        cancelado:{
            handler: function (val, oldVal) {
                this.allAtendimentoApometria()
                },
                
            
            deep: true
        },
        listaGerada:{
            handler: function (val, oldVal) {
                this.allAtendimentoApometria()
                },
                
            
            deep: true
        },
        dataAgendada: {
            handler: function (val, oldVal) {
                if(this.dataAgendada.dataAgendada){
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
