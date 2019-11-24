import axios from "axios"
export default {
    state: {
        acaoObreiro:{}
        
    }, 
    mutations: {        
            ACAO_OBREIRO(state, data){
            state.acaoObreiro = data
        }   
            
        
        
    },
    actions: {  
        AcaoObreiro({commit}, data){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'obreiros/acoes/store';                        
            axios
            .post(
                urlApi, 
                data
                )
                
            .then(response => {
                commit('ACAO_OBREIRO', response.data)     
                console.log(response.data);
            })                           
            .catch(function (error) {
                console.log(error.response);
            });  
        },
        
        
    }
}