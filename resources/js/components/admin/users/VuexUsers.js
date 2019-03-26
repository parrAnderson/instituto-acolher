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
        }
    },

    actions: {
        AllUsers(context){
            // console.log('funcionando vuex admin');
            let url = '/acolher/public/api/users/';        
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
                context.commit('GET_USER', response.data.data[0])
               console.log(response.data.data[0])
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        }      
    }
}