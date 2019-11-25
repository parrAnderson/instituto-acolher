import axios from "axios"
export default {
    state: {
        cancelado:{},        
        
    }, 
    mutations: { 
    CANCELAR_ATENDIMENTO(state, data){
            state.cancelado = data
        }  
    },
actions: {  
    cancelarAtendimento(context, dados){
        var acoes = dados.acoes
        var data = dados.cancelamento
        let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'atendimentos/' + data.id;                        
        axios
        .put(
            urlApi, 
            data
            )
            
        .then(response => {
            context.commit('CANCELAR_ATENDIMENTO', response.data)     
            
            acoes.id_atualizado = response.data.user_id
            context.dispatch("AcaoObreiro",acoes)
        })                           
        .catch(function (error) {
            console.log(error.response);
        });  
    },
}
}