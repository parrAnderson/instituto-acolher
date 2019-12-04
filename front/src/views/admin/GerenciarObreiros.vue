<template>
<div>
    <Header>
        <template v-slot:mainpage>

                    <!-- Modal -->
            <div class="modal fade bd-example-modal-xl" id="modalDatas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <DatasDesativadas/>
                </div>
            </div>

                    <!-- Modal EDITAR TIPO -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <mudarTipoFrequentador/>

                    </div>
            </div>

            <div class="card">
                <div class="card-header">GERENCIAR OBREIROS</div>
                <div class="card-body">
                    <table class="table  table-hover table-striped table-sm">
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>TIPO</th>
                            <th>NÚMERO OBREIRO</th>
                            <th>EDITAR TIPO</th>
                            <th>EDITAR DATA</th>
                            <th>STATUS</th>
                        </tr>
                        <tr v-for="obreiro in obreiros">
                            <td>{{obreiro.id}}</td>
                            <td>{{obreiro.name}}</td>
                            <td>
                                <p v-if="obreiro.type == 0">
                                    FREQUENTADOR
                                </p>
                                <p v-else-if="obreiro.type == 1">
                                    ADMIN
                                </p>
                                <p v-else-if="obreiro.type == 2">
                                    OBREIRO - TODOS ATENDIMENTOS
                                </p>
                                <p v-else-if="obreiro.type == 3">
                                    OBREIRO - APOMETRIA
                                </p>
                                <p v-else-if="obreiro.type == 4">
                                    OBREIRO - LUZ
                                </p>
                                <p v-else-if="obreiro.type == 5">
                                    OBREIRO - PASSES
                                </p>
                            </td>
                            <td>
                                {{obreiro.obreiro}}
                            </td>
                            <td>
                                <div class="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal" @click="openModal(obreiro.id, obreiro.type, obreiro.obreiro)">EDITAR</div>
                            </td>
                            <td>
                                <div class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalDatas" @click="openModal(obreiro.id, obreiro.type, obreiro.obreiro)">DATAS DESATIVADAS</div>
                            </td>
                             <td>
                                {{obreiro.status_obreiro}}
                            </td>

                        </tr>
                    </table>
                </div>
            </div>
        </template>
    </Header>
</div>
</template>

<script>
import DatasDesativadas from '@/components/obreiros/DatasDesativadas'
import {
    mapActions,
    mapState
} from 'vuex'
import Header from '@/views/layouts/HeaderPublic.vue'
import mudarTipoFrequentador from '@/components/frequentador/mudarTipoFrequentador'
export default {
    name: "GerenciarObreiros",
    data() {
        return {
            inputs: {},
            dadosModal: {},
        }
    },
    components: {
        Header,
        mudarTipoFrequentador,
        DatasDesativadas,
    },
    methods: {
        openModal(id, type, obreiro) {
            var data = {}
            data.id = id
            data.type = type
            data.obreiro = obreiro         
            this.editandoFrequentador(data);
        },
        salvar() {
            // this.data = {}
        },
        ...mapActions([
            'getAllObreiros',
            'editandoFrequentador',
        ]),
    },
    computed: {
        ...mapState({
            obreiros: state => state.Obreiros.obreiros,           
        })
    },
    beforeMount() {
        this.getAllObreiros(); 
    },
   
}
</script>

<style>

</style>
