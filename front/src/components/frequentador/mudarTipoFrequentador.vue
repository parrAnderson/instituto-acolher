<template>
<div>

    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">EDITAR - {{editando_frequentador.id}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <select class="form-control" @change="change()" v-model="editando_frequentador.type">
                    <option value="0">FREQUENTADOR</option>
                    <option value="1">ADMIN</option>
                    <option value="2">OBREIRO - TODOS ATENDIMENTOS</option>
                    <option value="3">OBREIRO - APOMETRIA</option>
                    <option value="4">OBREIRO - LUZ</option>
                    <option value="5">OBREIRO - PASSES</option>
                </select>

            </div>
            <div class="form-group">
                <input type="number" v-model="editando_frequentador.obreiro" class="form-control" placeholder="Número Obreiro">

            </div>

            <div class="alert alert-warning alert-dismissible" v-if="error">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>                  
                  Preencha com o número do obreiro.
                </div>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">FECHAR</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="salvar()">SALVAR</button>
        </div>
    </div>

</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'
export default {
    name: "MudarTipoFrequentador",
    data(){
        return{
            error: ''
        }
    },
    methods: {
        change(){
            if(this.editando_frequentador.type == "0"){
                this.editando_frequentador.obreiro = ''
            }
        },
        salvar() {   
            if(this.editando_frequentador.type > "0" && this.editando_frequentador.obreiro == ''){
                 this.error = true
            }else{
                this.atualizarFrequentador(this.editando_frequentador)
                this.error = false
            }         
            
        },
        ...mapActions([
            'atualizarFrequentador',
        ]),
    },
    computed: {
        ...mapState({
            editando_frequentador: state => state.Frequentador.editando_frequentador,
        })
    },
     watch:{
        editando_frequentador: {
            handler: function (val, oldVal) {
                if(this.editando_frequentador.type == "0"){
                    this.editando_frequentador.obreiro = ''
                }
            },
            deep: true
        },
    }
}
</script>

<style scoped>

</style>
