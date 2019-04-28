import axios from "axios"

export default {
    state:{
        data:{},
        editId:"",
        editDataAtendimento:"",
        editHoraAtendimento:"",
    },
    mutations:{
        ALL_ATENDIMENTO(state, data){
            state.data = data
        },
        UPDATE_ATENDIMENTO(state, data){
            state.update = data
        },
        EDIT_ATENDIMENTO(state, data){           
            state.editId = data.id
            state.editDataAtendimento = data.data_atendimento
            state.editHoraAtendimento = data.hora_atendimento
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
        EditAtendimento(context, require){
            
            context.commit('EDIT_ATENDIMENTO', require)
        },
        UpdateAtendimento({ dispatch, commit}, request){             
            
            
            let url = '/acolher/public/api/atendimento/' + request.id;   
            
            console.log(url)
            axios
            .put(url, request.fields)
            .then(response => {
                console.log('Data atualizada ' + request.fields.data_atendimento + ' - ' + request.fields.hora_atendimento)
                commit('UPDATE_ATENDIMENTO', response.data)      
                dispatch("AllAtendimento");       
            })                           
            .catch(function (error) {
                console.log(error);
            })                
        }
    }
}