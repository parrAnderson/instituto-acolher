import axios from "axios"

export default {
    state: {
        // frequentador: {},
        datas_canceladas_apometria: {},
        data_cancelada: {},
    }, 
    
       mutations: {  
        DATA_CANCELADA(state, data){
               state.data_cancelada = data
           },
           DATAS_CANCELADAS_APOMETRIA(state, data){
            state.datas_canceladas_apometria = data
        },
    },
    actions: {
        DeletarDataCalendarioApometria(context, id){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'calendarioapometria/datascanceladas/' + id;                        
            axios
            .delete(urlApi)            
            .then(response => {
                // context.commit('DATA_CANCELADA', response.data) 
                context.dispatch('getDataCanceladaCalendarioApometria')
                // context.actions(getDataCanceladaCalendarioApometria())    
                
            })                           
            .catch(function (error) {
                console.log(error.response);
            });  
            },     
        CancelarDataCalendarioApometria(context, data){
        let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'calendarioapometria/datascanceladas/store';                        
        axios
        .post(urlApi, data)            
        .then(response => {
            context.commit('DATA_CANCELADA', response.data) 
            context.dispatch('getDataCanceladaCalendarioApometria')
            // context.actions(getDataCanceladaCalendarioApometria())    
            
        })                           
        .catch(function (error) {
            console.log(error.response);
        });  
        },  
        getDataCanceladaCalendarioApometria(context){           
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL            
            
            axios({
                method: 'get',
                url: urlApi + 'calendarioapometria/datascanceladas',                
            })
            .then((response) => {     
                        context.commit('DATAS_CANCELADAS_APOMETRIA', response.data.data)                              
            }).catch(function (error) {
                console.log(error.response);
              
        })  
    }           
    }
}