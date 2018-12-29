import axios from "axios"

export default {
    state: {
        data: [],
        
    },
    mutations: {
        LOGON(state, logon) {
            state.data = logon
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
    }
}