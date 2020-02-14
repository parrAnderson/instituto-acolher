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
                   

                    <option v-for="nivel in niveis_de_acesso" :key="nivel.id" :value="nivel.id">{{nivel.nome}}</option>
                    <!-- <option value="1">ADMIN</option>
                    <option value="2">OBREIRO - Todos os atendimentos</option>
                    <option value="3">OBREIRO - Apometria - 2ªs Feiras - das 19:30 às 22:00 h. </option>
                    <option value="4">OBREIRO - Luz - 1 sábado por mês - das 17:30 às 22:00 h.</option>
                    <option value="5">OBREIRO - Passes</option>
                    <option value="6">OBREIRO - Estudo e Prática do Evangelho - 5ªs Feiras - das 19:30 às 22:00 h. </option>
                    <option value="7">OBREIRO - Atendimento através do Diálogo Fraterno - 4ªs Feiras - das 19:30 às 22:00 h. </option>

                    

                    <option value="8">SEMEAR - Apometria - 4ªs Feiras - das 19:30 às 22:00 h.</option>
                    <option value="9">SEMEAR -  Kardecismo Básico - 2 Sábados por Mês - das 08:30 às 13:30 h. </option>
                    <option value="10">SEMEAR - Kardecismo Avançado - 1 sábado a cada 2 meses - das 14:30 às 17:00 h</option>
                     -->
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
    beforeMount(){
        this.getNiveisDeAcesso()
        console.log("disparou")
    },
    methods: {
        change(){
            if(this.editando_frequentador.type == "1"){
                this.editando_frequentador.obreiro = ''
            }
        },
        salvar() {   
            if(this.editando_frequentador.type > "1" && this.editando_frequentador.obreiro == ''){
                 this.error = true
            }else{
                this.atualizarFrequentador(this.editando_frequentador)
                this.error = false
            }         
            
        },
        ...mapActions([
            'atualizarFrequentador',
            'getNiveisDeAcesso',
        ]),
    },
    computed: {
        ...mapState({
            editando_frequentador: state => state.Frequentador.editando_frequentador,
            niveis_de_acesso: state => state.Frequentador.niveis_de_acesso,
        })
    },
     watch:{
        editando_frequentador: {
            handler: function (val, oldVal) {
                if(this.editando_frequentador.type == "1"){
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
