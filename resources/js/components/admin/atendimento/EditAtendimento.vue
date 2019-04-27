<template>
    <div>
        <div class="row">
            <div class="col">                
                <input type="date" class="form-control" v-model="data_atendimento">
            </div>
        </div> <br>
    
        <div class="row">
            <div class="col">
                
                <div class="btn btn-primary" data-dismiss="modal" @click="UpdateData()">atualizar</div>
            </div>
        </div>    
    
    
    </div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapState } from 'vuex'
export default {
    name: "EditAtendimento",
    data() {
        return {
            request: {},
            fields: {},
            novo:"",
            data_atendimento:"",
        }
    },
    computed: {
        ...mapState({
            editId: state => state.Atendimento.editId,  
            editDataAtendimento: state => state.Atendimento.editDataAtendimento,         
        })
    },
    methods: {
        ...mapActions([
            'UpdateAtendimento',
        ]),
        UpdateData() {
            this.fields.data_atendimento = this.data_atendimento
            this.UpdateAtendimento(this.request)            
        },
    },
    beforeMount() {
        this.request.fields = this.fields
        this.request.id = ""
    },
   
    watch: {       
        editId() {          
            this.request.id = this.editId                         
        },
         editDataAtendimento(){
            this.data_atendimento = this.editDataAtendimento            
         }
       
    }
}
</script>
