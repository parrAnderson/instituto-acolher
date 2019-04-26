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
                                DATA SOLICITADA
                            </td>
                            <td>
                                DATA AGENDADA
                            </td>
                            <td>
                                IDADE
                            </td>
                            <td>
                                OBREIRO 
                            </td>
                        </tr> 
                    </thead>    
                    <tbody>
                         
                        <tr data-toggle="modal" data-target="#exampleModal" v-for="atendimento in atendimentos" :key="atendimento.id" @click="showAtendimento(atendimento.id)">
                            <td >
                                {{atendimento.nome}}
                            </td>
                           
                            <td> 
                                {{atendimento.tipo_atendimento}}    
                            </td>    
                            <td>
                                {{atendimento.created_at}}    
                            </td>  
                            <td>
                                {{atendimento.data_atendimento}}    
                            </td>  
                            <td>
                                {{atendimento.idade}}    
                            </td> 
                            <td>
                                {{atendimento.obreiro}}    
                            </td> 
                        </tr>  

                        
                    </tbody>                
                </table>
                </div>
            </div>
        
       <div class="btn" @click="AllAtendimento()">CLICK</div>
    
    </div>
</template>

<script>
import EditAtendimento from './EditAtendimento'
import { mapState, mapActions } from 'vuex';
export default {
    name: "IndexAtendimento",   
    computed: {
        ...mapState({
            atendimentos: state => state.Atendimento.data
        })
    },components:{
        EditAtendimento,
    },
    methods: {
        ...mapActions([
            'AllAtendimento',
            'EditAtendimento'
        ]),
        showAtendimento(id){           
           this.EditAtendimento(id)
        },
    },

    beforeMount() {
        this.AllAtendimento()
        
    },
    
}

</script>

