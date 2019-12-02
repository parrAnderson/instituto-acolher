import axios from "axios"
export default {
    state: {
        acaoObreiro:{},
        obreiros:{},
        datas_desativadas:{},
        data_desativada_deletada:{},
        data_desativada_cadastrada:{},
        
    }, 
    mutations: {        
            ACAO_OBREIRO(state, data){
            state.acaoObreiro = data
        },
        OBREIROS(state, data){
            state.obreiros = data
        },   
        DATAS_DESATIVADAS(state, data){
            state.datas_desativadas = data
        },
        DATA_DESATIVADA_DELETADA(state, data){
            state.data_desativada_deletada = data
        },
        DATA_CADASTRADA(state, data){
            state.data_desativada_cadastrada = data
        }
            
        
        
    },
    actions: { 
        deleteDatasDesativados(context, data){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'obreiros/datasdesativadas/excluir/' + data.id;                        
            axios
            .delete(urlApi)
                            
            .then(response => {
                
                context.commit('DATA_DESATIVADA_DELETADA', response.data.data)  
                context.dispatch('getDatasDesativados', data.id_user)                  
            })                           
            .catch(function (error) {
                console.log(error.response);
            });  
        },
        addDatasDesativados(context, data){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'obreiros/datasdesativadas';                        
            axios
            .post(
                urlApi, 
                data
                )
                            
            .then(response => {
                
                context.commit('DATA_CADASTRADA', response.data.data)  
                context.dispatch('getDatasDesativados', data.id_user)                  
            })                           
            .catch(function (error) {
                console.log(error.response);
            });  
        },
        getDatasDesativados(context, id){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL;                        
            axios
            axios({
                method: 'get',
                url: urlApi + 'obreiros/datasdesativadas/' + id,               
            })             
            .then(response => {
               
                context.commit('DATAS_DESATIVADAS', response.data.data)                    
            })                           
            .catch(function (error) {
                console.log(error.response);
            });  
        },
        editandoObreiro(data){
            console.log(data)
        },
        getAllObreiros(context){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL;                        
            axios
            axios({
                method: 'get',
                url: urlApi + 'obreiros/index',               
            })             
            .then(response => {
              
                context.commit('OBREIROS', response.data.data)     
               
            })                           
            .catch(function (error) {
                console.log(error.response);
            });  
        },
        
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
    },
        
    }
