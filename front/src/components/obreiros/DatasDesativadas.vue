<template>
<div>
    <div class="modal-content">
        <div class="modal-header text-center">
            <!-- <h5 class="modal-title text-center" id="exampleModalLabel">DATAS DESATIVADO</h5> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="container-fluid">
            <div class="row row-space">
                <div class="col text-center">
                    Desativar obreiro na data: {{inputs.id_user}}
                </div>
            </div>
            <div class="row justify-content-center">                
                <div class="col-8">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label> Data início</label>
                                <input type="date" v-model="inputs.data_desativada_inicio" class="form-control">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label> Data fim</label>
                                <input type="date" v-model="inputs.data_desativada_fim" class="form-control">
                            </div>
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="col text-right">                           
                              <button type="button" class="btn btn-sm btn-primary" @click="AdicionarData()">ADICIONAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-space">
                <div class="col text-center">
                    Datas Desativadas
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                   <table class="table table-sm table-striped">
                       <tr>
                           <th>
                               Data Início
                           </th>
                           <th>
                               Data Fim
                           </th>
                           <th>
                               
                           </th>
                       </tr>
                       <tr v-for="data_desativada in datas_desativadas">
                           <td>
                               {{data_desativada.data_desativada_inicio | date}}
                           </td>
                           <td>
                               {{data_desativada.data_desativada_fim | date}}
                           </td>
                           <td class="text-right">
                               <div class="btn btn-danger btn-sm text-right" @click="ExcluirData(data_desativada.id, data_desativada.id_user)">EXCLUIR</div>
                           </td>
                       </tr>
                   </table>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">FECHAR</button>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
import {
    mapActions,
    mapState
} from 'vuex'
export default {
    name: "DatasDesativadas",
    data(){
        return{
            inputs: {},
        }
    },
    filters: {
        date: function (value) {
            moment.locale("pt-br");
            if (!value) return "";
            let data = moment(value).format('L');
            return data
        },
    },
    computed: {
        ...mapState({
            editando_frequentador: state => state.Frequentador.editando_frequentador,
            datas_desativadas : state => state.Obreiros.datas_desativadas,
        })
    },
     methods: {
         AdicionarData(){             
             this.addDatasDesativados(this.inputs)
         },
         ExcluirData(id, id_user){
             var data = {}
            data.id = id
            data.id_user = id_user

            this.deleteDatasDesativados(data)
         },
        ...mapActions([
            'getDatasDesativados',
            'deleteDatasDesativados',
            'addDatasDesativados',
        ]),
    },
    beforeMount(){
        this.getDatasDesativados(this.editando_frequentador.id)
    },
     watch:{
        editando_frequentador: {
            handler: function (val, oldVal) {
                this.getDatasDesativados(this.editando_frequentador.id)
                this.inputs.id_user = this.editando_frequentador.id
            },
            deep: true
        },
    }
}
</script>

<style scoped>

</style>
