import axios from "axios"

export default {
    state: {
        frequentador: {},
        frequentador_atualizado: {},
    }, 
    
       mutations: {  
           FREQUENTADOR(state, data){
               state.frequentador = data
           },
           FREQUENTADOR_ATUALIZADO(state, data){
            state.frequentador_atualizado = data
        },
    },
    actions: {
        atualizarFrequentador(context, data){
        let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'frequentador/' + data.id;                        
        axios
        .put(
            urlApi, 
            data
            )
            
        .then(response => {
            context.commit('FREQUENTADOR_ATUALIZADO', response.data)     
            
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