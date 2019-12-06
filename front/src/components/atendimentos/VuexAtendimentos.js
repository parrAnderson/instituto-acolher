import axios from "axios"
export default {
    state: {
        cancelado:{},   
        solicitacoes_atendimento: {}, 
        atendimento_cadastrado:{},  
        atendimentos:{},
        
    }, 
    mutations: { 
    CANCELAR_ATENDIMENTO(state, data){
            state.cancelado = data
        },  
    
    SOLICITACOES_ATENDIMENTO(state, data){
        state.solicitacoes_atendimento = data
    },
    ATENDIMENTO_CADASTRADO(state, data){
        state.atendimento_cadastrado = data
    },
    ALL_ATENDIMENTO_TIPO(state, data){
        state.atendimentos = data
    },
},
actions: {  
    getAtendimentosTipo({commit}, tipo){
        let urlApi = process.env.VUE_APP_LARAVEL_API_URL
        
        axios({
            method: 'get',
            url: urlApi + 'atendimentos/tipo/' + tipo,               
        })
        .then(response => {
            commit('ALL_ATENDIMENTO_TIPO', response.data.data) 
            console.log(response.data.data)    
                  
        })                           
        .catch(function (error) {
            console.log(error.response);
        }); 
    },


    limparAtendimentoCadastrado(context){
        context.commit('ATENDIMENTO_CADASTRADO', false)
    },
    CadastrarAtendimento(context, data){

        let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            axios({
                method: 'post',
                url: urlApi + 'atendimentos/store',      
                data         
            })
            .then(response => {
                context.commit('ATENDIMENTO_CADASTRADO', response.data.data)                  
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
    },
    
    GetSolicitacoesAtendimentos(context, data){
        
        let urlApi = process.env.VUE_APP_LARAVEL_API_URL            
            axios({
                method: 'get',
                url: urlApi + 'atendimentos/edit/' + data             
            })
            .then(response => {
                context.commit('SOLICITACOES_ATENDIMENTO', response.data.data)    
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 

            
    },
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