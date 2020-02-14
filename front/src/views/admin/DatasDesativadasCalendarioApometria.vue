<template>
<div>
    <Header>
        <template v-slot:mainpage>
            <div class="row justify-content-center">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-header">
                             <h5 class="text-center">Desativar data</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <input type="date" v-model="inputs.data_cancelada" class="form-control">    
                                        </div>                                
                                </div>
                            </div>
                            <div class="row">
                                <div class="col text-right">
                                    <div class="btn btn-sm btn-outline-primary" @click="cancelarData()">CANCELAR DATA</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="text-center">Datas Desativadas</h5>
                        </div>
                        <div class="card-body">
                        <table class="table table-sm">
                        <tr v-for="data_cancelada_apometria in datas_canceladas_apometria">
                            <td>
                                {{data_cancelada_apometria.data_cancelada | date}}
                            </td>
                            <td class="text-center">
                                <div class="btn btn-sm btn-outline-danger" @click="DeletarDataCalendarioApometria(data_cancelada_apometria.id)">X</div>
                            </td>
                        </tr>
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
import moment from 'moment'
import {
    mapState,
    mapActions
} from 'vuex'
import Header from '@/views/layouts/HeaderPublic'
export default {
    name: "DatasDesativadasCalendarioApometria",
    data(){
        return{
            inputs:{},
            update: null
        }
    },
    components: {
        Header,
    },
    methods: {
        ...mapActions([
            'getDataCanceladaCalendarioApometria',
            'CancelarDataCalendarioApometria',
            'DeletarDataCalendarioApometria'
        ]),
        cancelarData(){
              
            if(this.inputs.data_cancelada > '' && this.inputs.data_cancelada != null){
            
            this.CancelarDataCalendarioApometria(this.inputs)
            this.update = true
        }

            
        }
    },
    computed:{
        ...mapState({
            datas_canceladas_apometria: state => state.CalendarioApometria.datas_canceladas_apometria
        }),
    },
    filters: {
        date: function (value) {
            moment.locale("pt-br");
            if (!value) return "";
            let data = moment(value).format('L');
            return data
        },
    },
        beforeMount(){
            this.getDataCanceladaCalendarioApometria()
        },
        watch:{    
            update(){
                if(this.update = true){
                    this.getDataCanceladaCalendarioApometria()
                    this.update = false
                }
            },     
        },
        
}
</script>

<style scoped>

</style>
