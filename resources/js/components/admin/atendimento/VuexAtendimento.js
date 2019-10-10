import axios from "axios"

export default {
    state:{
        data:{},
        show:{},
        editId:"",
        editNome:"",
        editEmail:"",
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
        GET_ATENDIMENTO(state, data){
            state.show = data
        },
        EDIT_ATENDIMENTO(state, data){   
                  
            state.editId = data.id
            state.editEmail = data.email
            state.editNome = data.nome
            state.editDataAtendimento = data.data_atendimento
            state.editHoraAtendimento = data.hora_atendimento
        },
    },
    actions:{
        GetAtendimento(context, id){
            let urlChange = '/acolher/public/api/atendimento/' + id; 
            
            axios
            .get(urlChange)
            .then(response => {
                context.commit('GET_ATENDIMENTO', response.data.data[0])     
                      
            })                           
            .catch(function (error) {
                console.log(error);
            });  
            
            
        },
        AllAtendimento(context, parametros){   

            let url = '/acolher/public/api/atendimento/?tipo_atendimento=' + parametros.tipo_atendimento + '&dataAtendimento=' + parametros.DataAtendimentoBuscar;        
        
            console.log(url)
        
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
        UpdateAllAtendimento({ dispatch, commit}, request){ 
            let urlChange = '/acolher/public/api/atendimento/' + request.id;  
            
            axios
            .put(urlChange, request)
            .then(response => {             
                commit('UPDATE_ATENDIMENTO', response.data)     
                console.log("Atualizou")
                      
            })                           
            .catch(function (error) {
                console.log(error)
                console.log(error.response)
                
            });

        },
        UpdateAtendimento({ dispatch, commit}, request){             
            
            
            
            let urlChange = '/acolher/public/api/atendimento/' + request.id;              
           
            axios
            .put(urlChange, request.fields)
            .then(response => {
                console.log('Data atualizada ' + request.fields.data_atendimento + ' - ' + request.fields.hora_atendimento)
                commit('UPDATE_ATENDIMENTO', response.data)     
                      
            })                           
            .catch(function (error) {
                console.log(error);
            });  
            
            
            // ENVIAR EMAIL

            let url = '/acolher/public/api/email/dataatendimento';        
            axios
                .post(url, request.fields)
                .then(response => {
                    console.log(response.data)         
                })
                .catch(function (error) {
                    console.log(error);
                });

                       
            

            // console.log(request)
        }
    }
}