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
            novo:"",
            data_atendimento:"",
            hora_atendimento:"",
            parametros:{},
        }
    },
    computed: {
        ...mapState({
            editId: state => state.Atendimento.editId,  
            editEmail: state => state.Atendimento.editEmail, 
            editNome: state => state.Atendimento.editNome,
            editDataAtendimento: state => state.Atendimento.editDataAtendimento,  
            editHoraAtendimento: state => state.Atendimento.editHoraAtendimento,       
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

            // parametros.tipo_atendimento
            // parametros.DataAtendimentoBuscar

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
         },
          editHoraAtendimento(){
            this.hora_atendimento = this.editHoraAtendimento            
         }
       
    }
}
</script>
