<template>
    <div v-if="atendimentos">
        
         
            <div class="row row-space">
                <div class="col-12">
                    <h2 class="text-center">Atendimentos</h2>
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
                        <tr v-for="(atendimento, index) in atendimentos" :key="index">
                            <td>
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
import { mapState, mapActions } from 'vuex';
export default {
    name: "IndexAtendimento",
    computed: {
        ...mapState({
            atendimentos: state => state.Atendimento.data
        })
    },
    methods: {
        ...mapActions([
            'AllAtendimento',
        ]),
    },

    beforeMount() {
        this.AllAtendimento()
        console.log("pegou")
    },
    
}

</script>

