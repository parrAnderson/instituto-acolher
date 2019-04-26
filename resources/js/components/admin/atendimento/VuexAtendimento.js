import axios from "axios"

export default {
    state:{
        data:{},
        edit:""
    },
    mutations:{
        ALL_ATENDIMENTO(state, data){
            state.data = data
        },
        UPDATE_ATENDIMENTO(state, data){
            state.update = data
        },
        EDIT_ATENDIMENTO(state, data){
            state.edit = data
        },
    },
    actions:{
        AllAtendimento(context){     
                 
            let url = '/acolher/public/api/atendimento/';        
        axios
            .get(url)
              .then(response => {
                context.commit('ALL_ATENDIMENTO', response.data.data)
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        }, 
        EditAtendimento({commit}, id){
            commit('EDIT_ATENDIMENTO', id)
        },
        UpdateAtendimento({commit}, request){              
            
            let url = '/acolher/public/api/atendimento/' + request.id;   
            
            console.log(url)
            axios
            .put(url, request.fields)
            .then(response => {
                console.log('Data atualizada' + request.data_atendimento)
                commit('UPDATE_ATENDIMENTO', response.data)             
            })                           
            .catch(function (error) {
                console.log(error);
            })                
        }
    }
}