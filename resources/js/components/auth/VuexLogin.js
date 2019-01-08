import axios from "axios"

export default {
    state: {
        data: [],
        
    },
    mutations: {
        LOGON(state, logon) {
            state.data = logon
        },
        REGISTER(state, register) {
            state.data.register = register
        },
        LOGOUT(state, exit) {
            state.data = exit
        },
    },
    actions: {
        Logon(context, data) {        
        let url = 'http://localhost/acolher/public/api/auth/login';        
        axios
            .post(url, data)
              .then(response => context.commit('LOGON', response.data))
              .catch(function (error) {
                console.log(error);
              });
    },

    Logout(context, data) {        
       
         context.commit('LOGOUT', "")
         
    },
    
    Register(context, data) {        
        let url = 'http://localhost/acolher/public/api/auth/register';        
        axios
            .post(url, data)
              .then(response => context.commit('REGISTER', response.data))
              .catch(function (error) {
                console.log(error);
              });
    },
    }
}