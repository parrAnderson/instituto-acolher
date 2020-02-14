<template>
<div>
    <Header>
        <template v-slot:mainpage>

                    <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <mudarTipoFrequentador/>

                    </div>
            </div>

            <div class="card">
                <div class="card-header">GERENCIAR FREQUENTADORES</div>
                <div class="card-body">
                    <table class="table  table-hover table-striped table-sm">
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>TIPO</th>  
                                                
                            <th>EDITAR TIPO</th>
                        </tr>
                        <tr v-for="frequentador in frequentadores">
                            <td>{{frequentador.id}}</td>
                            <td>{{frequentador.name}}</td>
                            <td>
                                <p>
                                    {{frequentador.nivel_de_acesso[0].nome}}
                                </p>                                
                            </td>     
                                                   
                            <td>
                                <div class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" @click="openModal(frequentador.id, frequentador.type, frequentador.obreiro)">EDITAR</div>
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
import {
    mapActions,
    mapState
} from 'vuex'
import Header from '@/views/layouts/HeaderPublic.vue'
import mudarTipoFrequentador from '@/components/frequentador/mudarTipoFrequentador'
export default {
    name: "GerenciarFrequentadores",
    data() {
        return {
            inputs: {},
            dadosModal: {},
        }
    },
    components: {
        Header,
        mudarTipoFrequentador
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
            'getAllFrequentador',
            'editandoFrequentador',
        ]),
    },
    computed: {
        ...mapState({
            frequentadores: state => state.Frequentador.frequentadores,           
        })
    },
    beforeMount() {
        this.getAllFrequentador(); 
    },
   
}
</script>

<style>

</style>
