import axios from "axios"

export default {
    state: {
        frequentador: {},
        frequentador_atualizado: {},
        frequentadores: {},
        editando_frequentador:{},
        niveis_de_acesso:{},
    }, 
    
       mutations: {  
        EDITANDO_FREQUENTADOR(state, data){
            state.editando_frequentador = data      
        },
        NIVEIS_DE_ACESSO(state, data){
            state.niveis_de_acesso = data      
        },
        FREQUENTADORES(state, data){
            state.frequentadores = data
        },
           FREQUENTADOR(state, data){
               state.frequentador = data
           },
           FREQUENTADOR_ATUALIZADO(state, data){
            state.frequentador_atualizado = data
        },
    },
    actions: {
        getNiveisDeAcesso(context){
   
  
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL            
            
            axios({
                method: 'get',
                url: urlApi + 'niveisdeacesso',                
            })
            .then((response) => {     
                
                        context.commit('NIVEIS_DE_ACESSO', response.data.data)                              
            }).catch(function (error) {
                console.log(error.response);
              
        }) 
        },
        editandoFrequentador(context, data){
            context.commit('EDITANDO_FREQUENTADOR', data)
        },
        getAllFrequentador(context){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL            
            
            axios({
                method: 'get',
                url: urlApi + 'frequentador/index',                
            })
            .then((response) => {     
                
                        context.commit('FREQUENTADORES', response.data.data)                              
            }).catch(function (error) {
                console.log(error.response);
              
        })  
        },
        atualizarFrequentador(context, data){
        let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'frequentador/' + data.id;                        
        axios
        .put(
            urlApi, 
            data
            )
            
        .then(response => {
            context.commit('FREQUENTADOR_ATUALIZADO', response.data)     
            context.dispatch('getAllFrequentador')
            context.dispatch('getAllObreiros')
            
            
        })                           
        .catch(function (error) {
            console.log(error.response);
        });  
        },      
        getFrequentador(context, data){
            
            
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL            
            
            axios({
                method: 'get',
                url: urlApi + 'frequentador/edit/' + data,                
            })
            .then((response) => {     
                        context.commit('FREQUENTADOR', response.data.data[0])                              
            }).catch(function (error) {
                console.log(error.response);
              
        })  
    }           
    }
}