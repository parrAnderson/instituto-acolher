import axios from "axios"

export default {
    state: {
        data: {},     
    },
    mutations: {
        ALL_USERS(state, data){
            state.data = data
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
        }        
    }
}