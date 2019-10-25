<template>
    <div>
        <div class="row">
            <div class="col">    
                 <label for="data">  Data Atendimento </label>                          
                <input type="date" name="data" class="form-control" v-model="data_atendimento">               
            </div>
        </div> 

        <div class="row">
            <div class="col">                             
                <label for="data">  Hora Atendimento </label> 
                 <input type="time" class="form-control" v-model="hora_atendimento">             
            </div>
        </div> 

        
        <br>
    
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
            data_atendimento:"",
            hora_atendimento:"",
            parametros:{},
        }
    },
    computed: {
        ...mapState({
            editId: state => state.FazerAtendimento.editId,  
            editEmail: state => state.FazerAtendimento.editEmail, 
            editNome: state => state.FazerAtendimento.editNome,
            editDataAtendimento: state => state.FazerAtendimento.editDataAtendimento,  
            editHoraAtendimento: state => state.FazerAtendimento.editHoraAtendimento,       
        })
    },
    methods: {
        ...mapActions([
            'UpdateAtendimento',
            'AllAtendimento',
        ]),
        UpdateData() {          
            this.fields.hora_atendimento = this.hora_atendimento
            this.fields.data_atendimento = this.data_atendimento
            this.fields.nome = this.editNome
            this.fields.email = this.editEmail

            // console.log(this.request)
            this.UpdateAtendimento(this.request)   

    if(this.DataAtendimentoBuscar){
          this.parametros.DataAtendimentoBuscar = this.DataAtendimentoBuscar
    }
          
            this.AllAtendimento(this.parametros)         
        },
    },
    beforeMount() {
        this.request.fields = this.fields
        this.request.id = ""

        this.parametros.tipo_atendimento = this.$route.params.tipoatendimento
        this.parametros.DataAtendimentoBuscar = ''
    },
   
    watch: {       
        editId() {          
            this.request.id = this.editId                         
        },
         editDataAtendimento(){
            this.data_atendimento = this.editDataAtendimento  
            this.AllAtendimento(this.parametros)            
         },
          editHoraAtendimento(){
            this.hora_atendimento = this.editHoraAtendimento            
         }
       
    }
}
</script>
