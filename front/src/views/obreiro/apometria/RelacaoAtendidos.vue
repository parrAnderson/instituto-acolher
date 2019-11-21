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
                                        <td v-if="!horarioDeChegada">
                                            <div class="btn btn-primary" @click="chegou()">CHEGOU</div>
                                        </td>
                                        <td v-else>
                                            {{horarioDeChegada}}
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

export default {
    name: "RelacaoAtendidos",
    data() {
        return {
            textMotivo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales luctus tortor vel porta. Fusce vulputate, urna in placerat interdum, nibh risus scelerisque leo, sed accumsan velit est fermentum elit. Donec pharetra efficitur velit. Aenean et dolor ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin molestie laoreet enim quis mollis. Cras feugiat ligula congue cursus iaculis. Cras fermentum vitae ligula a pulvinar. Nam quam massa, convallis dapibus velit in, ornare eleifend orci. Morbi in egestas erat. Nunc lectus urna, dignissim et risus id, sagittis semper odio. Integer tincidunt, eros a finibus fermentum, dolor mi vulputate felis, in lacinia leo nisi ac leo. Fusce eu lorem pellentesque, pharetra mauris gravida, rhoncus diam. Pellentesque sit amet erat lectus. ",
            textTratamento: "QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. ",
        horarioDeChegada:""
        }
    },
    components: {
        Header,
        TabsApometria,
        listaDePresenca,
    },
    filters: {
        textLimitTd(value) {
            if (!value) return ''
            value = value.toString()
            return value.substring(0, 30) + " ...";
        }
    },
    methods:{
        chegou(){
            var data = new Date()
            var dia     = data.getDate();
            var mes     = data.getMonth();
            var ano4    = data.getFullYear();  
            var hora    = data.getHours();          
            var min     = data.getMinutes();      
            var seg     = data.getSeconds(); 
// dia + '/' + (mes+1) + '/' + ano4 + ' - ' + 
            this.horarioDeChegada = hora + ':' + min + ':' + seg;
            console.log(data)
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
