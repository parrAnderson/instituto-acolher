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