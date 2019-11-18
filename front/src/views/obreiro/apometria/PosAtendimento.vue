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
                            <h5 class="modal-title" id="exampleModalLabel">Recomendações</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <OrientacoesAtendimento/>
                            </div>
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
            <!-- MODALTratamento  -->
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
                    <h4 class="text-center">POS ATENDIMENTO</h4>
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
                                    <tr>
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
                                    </tr>
                                    
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

        </template>
    </Header>
</div>
</template>

<script>
import Header from '@/views/layouts/HeaderPublic'
import TabsApometria from '@/views/layouts/TabsApometria'
import OrientacoesAtendimento from '@/components/apometria/OrientacoesAtendimento'
export default {
    name: "PosAtendimento",
    data() {
        return {
            textMotivo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales luctus tortor vel porta. Fusce vulputate, urna in placerat interdum, nibh risus scelerisque leo, sed accumsan velit est fermentum elit. Donec pharetra efficitur velit. Aenean et dolor ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin molestie laoreet enim quis mollis. Cras feugiat ligula congue cursus iaculis. Cras fermentum vitae ligula a pulvinar. Nam quam massa, convallis dapibus velit in, ornare eleifend orci. Morbi in egestas erat. Nunc lectus urna, dignissim et risus id, sagittis semper odio. Integer tincidunt, eros a finibus fermentum, dolor mi vulputate felis, in lacinia leo nisi ac leo. Fusce eu lorem pellentesque, pharetra mauris gravida, rhoncus diam. Pellentesque sit amet erat lectus. ",
            textTratamento: "QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. QUALQUER COISA ITE, QUALQUER COISA ELTA E QUALQUER COISA ISMO. ",
        }
    },
    components: {
        Header,
        TabsApometria,
        OrientacoesAtendimento,
    },
    filters: {
        textLimitTd(value) {
            if (!value) return ''
            value = value.toString()
            return value.substring(0, 30) + " ...";
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
