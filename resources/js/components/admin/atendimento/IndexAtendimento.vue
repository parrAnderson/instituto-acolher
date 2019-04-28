<template>
    <div v-if="atendimentos">
        
         
            <div class="row row-space">
                <div class="col-12">
                    <h2 class="text-center">Atendimentos</h2>
                </div>
            </div>
       

            

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Data de Atendimento</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
                    </div>
                    <div class="modal-body">
                        
                        <edit-atendimento></edit-atendimento>
                    </div>
                </div>
            </div>
        </div>
                                    
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <td>
                                NOME
                            </td>                            
                            <td>
                                ATENDIMENTO
                            </td>
                            <td>
                               SOLICITADA
                            </td>
                            <td>
                                DATA AGENDADA
                            </td>
                            <td>
                                HORA
                            </td>
                            <td>
                                IDADE
                            </td>
                            <td>
                                OBREIRO 
                            </td>
                            <td>
                                FUMA
                            </td>
                            <td>
                                BEBE 
                            </td>
                            <td>
                                DROGAS 
                            </td>
                        </tr> 
                    </thead>    
                    <tbody>
                         
                        <tr class="pointer" data-toggle="modal" data-target="#exampleModal" v-for="atendimento in atendimentos" :key="atendimento.id" @click="showAtendimento(atendimento.id, atendimento.data_atendimento, atendimento.hora_atendimento)">
                            <td >
                                {{atendimento.nome}}
                            </td>
                           
                            <td> 
                                {{atendimento.tipo_atendimento}}    
                            </td>    
                            <td>
                                {{atendimento.created_at | date}}    
                            </td>  
                            <td>
                                <span>{{ atendimento.data_atendimento | date}}</span>                                 
                            </td>  
                            <td>
                                <span>{{ atendimento.hora_atendimento}}</span>                                 
                            </td> 
                            <td>
                                {{atendimento.idade}}    
                            </td> 
                            
                            <td>
                                {{atendimento.obreiro}}    
                            </td> 

                             <td >
                                {{atendimento.fumante}}
                            </td>
                            <td >
                                {{atendimento.bebida}}
                            </td>
                            <td >
                                {{atendimento.drogas}}
                            </td>
                        </tr>                          
                    </tbody>                
                </table>
                </div>
            </div>
     
    </div>
</template>

<script>


import moment from 'moment'
import EditAtendimento from './EditAtendimento'
import { mapState, mapActions } from 'vuex';
export default {
    name: "IndexAtendimento",   
    data(){
        return{
            require:{}
        }
    },
    computed: {
        ...mapState({
            atendimentos: state => state.Atendimento.data
        })
    },components:{
        EditAtendimento,
    },
    filters: {    
    date: function(value) {
        moment.locale("pt-br");
        if (!value) return "";
        let data = moment(value).format('L');      
        return data
    }
  },
    methods: {
        ...mapActions([
            'AllAtendimento',
            'EditAtendimento'
        ]),
        showAtendimento(id, data_atendimento, hora_atendimento){ 
            this.require.id = id;
            this.require.data_atendimento = data_atendimento
            this.require.hora_atendimento = hora_atendimento

           this.EditAtendimento(this.require)
        },
        tellTime(time) {
      console.log(this.$moment(time).format(' mm:ss'))
    }
    },

    beforeMount() {
        this.AllAtendimento()      
    },
   
}

</script>

