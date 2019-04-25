<template>
    <div>
        Editando Atendimento
       
            <input type="data" v-model="fields.data_atendimento">
            
            <div class="btn" @click="UpdateData()">atualizar</div>
       
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        name:"EditAtendimento",
           data() {
        return {
            id: this.$route.params.id,       
            request: {},
            fields:{}  
        }
    },
        methods:{
            ...mapActions([
            'UpdateAtendimento',
        ]),
        UpdateData(){
             this.UpdateAtendimento(this.request)
        }
        },
        beforeMount(){
            this.request.id = this.id
            this.request.fields = this.fields
           
        }
        }
</script>
