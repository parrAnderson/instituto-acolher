import axios from "axios"

export default {
    state: {
        data: {},    
        show: {}, 
    },
    mutations: {
        ALL_USERS(state, data){
            state.data = data
        },
        GET_USER(state, data){
            state.show = data
        },
        UPDATE_USER(state, data){
            state.update = data
        }
    },

    actions: {
        AllUsers(context, parametros){
            // console.log('funcionando vuex admin');
            let url = '/acolher/public/api/users/?tipo_ficha=' + parametros.tipo_ficha;        
            
        axios
            .get(url)
              .then(response => {
                context.commit('ALL_USERS', response.data.data)
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        },  
        
        GetUser(context, id){
           
            let url = '/acolher/public/api/users/' + id;        
        axios
            .get(url)
              .then(response => {
                context.commit('GET_USER', response.data[0])
            //    console.log(response.data.data[0])
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        },
        UpdateUser({ dispatch, commit}, request){ 
            // console.log(request)
            let url = '/acolher/public/api/users/atualizar';  
            
            axios
            .post(url, request)
            .then(response => {             
                commit('UPDATE_USER', response.data)     
                console.log("Atualizou o usuario")
                      
            })                           
            .catch(function (error) {
                console.log(error)
                console.log(error.response)
                
            });

        },      
    }
}