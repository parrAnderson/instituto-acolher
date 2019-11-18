<template>

     
                <div>
                    
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
                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales luctus tortor vel porta. Fusce vulputate, urna in placerat interdum, nibh risus scelerisque leo, sed accumsan velit est fermentum elit. Donec pharetra efficitur velit. Aenean et dolor ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin molestie laoreet enim quis mollis. Cras feugiat ligula congue cursus iaculis. Cras fermentum vitae ligula a pulvinar. Nam quam massa, convallis dapibus velit in, ornare eleifend orci. Morbi in egestas erat. Nunc lectus urna, dignissim et risus id, sagittis semper odio. Integer tincidunt, eros a finibus fermentum, dolor mi vulputate felis, in lacinia leo nisi ac leo. Fusce eu lorem pellentesque, pharetra mauris gravida, rhoncus diam. Pellentesque sit amet erat lectus. 
                                                        
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
                                    QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. 
                                                        
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
                                                        <th  class="no-print">
                                                        FICHA
                                                    </th>
                                                    <th >
                                                        ATUALIZAÇÃO
                                                    </th>                                            
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        OBR <br>
                                                        154
                                                    </td>
                                                    <td>
                                                        JOSE DA SILVA
                                                    </td>
                                                    <td>
                                                        teste@gmail.com.br
                                                    </td>
                                                    <td>
                                                        11 949439589
                                                    </td>
                                                    <td>
                                                        15 anos
                                                        e 7 meses
                                                    </td>
                                                    <td>
                                                        SIM COCAINA
                                                    </td>
                                                    <td data-toggle="modal" data-target="#modalTratamento" class="btn-pointer">
                                                        {{textTratamento | textLimitTd}}
                                                        
                                                    </td>
                                                    <td data-toggle="modal" data-target="#modalMotivo" class="btn-pointer">                                                       
                                                        {{textMotivo | textLimitTd}}                                                    

                                                    <td>
                                                        11/10/2018
                                                    </td>
                                                    <td>
                                                        <div class="btn btn-success btn-sm">Agendar</div><br>
                                                    </td>
                                                    <td>
                                                        <div class="btn btn-warning btn-sm">FICHA</div>
                                                    </td>
                                                    <td>
                                                        <div class="btn btn-outline-secondary btn-sm btn-100w">Reagendar</div>
                                                        <div class="btn btn-outline-danger btn-sm btn-cancelar btn-100w">Cancelar</div>
                                                    </td>
                                                </tr>
                                                <!-- <tr v-for="atendimento in atendimentos" :key="atendimento.id">

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
                                                </tr> -->
                                            </tbody>
                                        </table>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 justify-content-end text-right">
                            <div class="btn btn-info btn-sm">GERAR LISTA</div>
                        </div>
                    </div>
                    
                </div>
           
    
    
</template>

<script>
    export default {
        name:"ProgramacaoApometria",
        data(){
            return{
                textMotivo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales luctus tortor vel porta. Fusce vulputate, urna in placerat interdum, nibh risus scelerisque leo, sed accumsan velit est fermentum elit. Donec pharetra efficitur velit. Aenean et dolor ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin molestie laoreet enim quis mollis. Cras feugiat ligula congue cursus iaculis. Cras fermentum vitae ligula a pulvinar. Nam quam massa, convallis dapibus velit in, ornare eleifend orci. Morbi in egestas erat. Nunc lectus urna, dignissim et risus id, sagittis semper odio. Integer tincidunt, eros a finibus fermentum, dolor mi vulputate felis, in lacinia leo nisi ac leo. Fusce eu lorem pellentesque, pharetra mauris gravida, rhoncus diam. Pellentesque sit amet erat lectus. ",
                textTratamento:"QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. ",
            }
        },
        filters:{
            textLimitTd(value){
                if (!value) return ''
                    value = value.toString()
                    return value.substring(0,30) + " ...";
                }
            }
        }
    
</script>

<style>
    .btn-cancelar{
        margin-top:3px;
    }
    .btn-100w{
        width: 100%
    }
    .btn-pointer{
        cursor: pointer;
    }
</style>