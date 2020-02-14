import axios from "axios"
export default {
    state: {
        acaoObreiro:{},
        obreiros:{},
        datas_desativadas:{},
        data_desativada_deletada:{},
        data_desativada_cadastrada:{},
        verificacao_termo_obreiro: null,
        obreiro_termo_confirmado:{}
        
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
        },
        VERIFICAO_TERMO_OBREIRO(state, data){
            state.verificacao_termo_obreiro = data
        },
        OBREIRO_TERMO_CONFIRMADO(state, data){
            state.obreiro_termo_confirmado = data
        },   
        
        
    },
    actions: { 
        confirmarTermoObreiro(context, data){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'obreiros/termo';                        
            axios
            .post(
                urlApi, 
                data
                )                            
            .then(response => {                
                context.commit('OBREIRO_TERMO_CONFIRMADO', response.data.data)   
                context.dispatch('verificarTermoObreiro', data.id_user)                           
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        },
        verificarTermoObreiro(context, id){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL;                        
            axios
            axios({
                method: 'get',
                url: urlApi + 'obreiros/termo/' + id,               
            })             
            .then(response => {
               
                context.commit('VERIFICAO_TERMO_OBREIRO', response.data.data)                    
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        },
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
                url: urlApi + 'obreiros',               
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
