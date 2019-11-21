import axios from "axios"
export default {
    state: {
        dataAgendada:{},
        programacao:{},
        listaAtendimentosAgendados:{},
        
    }, 
    mutations: {        
        DATA_AGENDADA(state, data){
            state.dataAgendada = data            
        },    
        ALL_ATENDIMENTO_APOMETRIA(state, data){
            state.programacao = data
        },
        CHANGE_LISTA_ATENDIMENTOS_AGENDADOS(state, data){
            state.listaAtendimentosAgendados = data
        }
        
    },
    actions: {     
        changeListaAtendimentosAgendados({commit},data){
            commit('CHANGE_LISTA_ATENDIMENTOS_AGENDADOS', data) 
        }
        ,       
        dataAgendada({commit}, data){              
           
            commit('DATA_AGENDADA', data)           
                        
        },
        allAtendimentoApometria({commit}){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            
            axios({
                method: 'get',
                url: urlApi + 'atendimentosapometria/index',               
            })
            .then(response => {
                commit('ALL_ATENDIMENTO_APOMETRIA', response.data.data)     
                      
            })                           
            .catch(function (error) {
                console.log(error);
            }); 
        }
    }
}