import axios from "axios"

export default {
    state: {
        data: {},
        register:{},
        message:"",
        
    },
    mutations: {
        LOGON(state, logon) {
            state.data = logon.data.data[0]
            state.message = logon.data.message
        },
        REGISTER(state, register) {
            state.register = register
        },
        LOGOUT(state, exit) {
            state.data = exit
        },
        SET_LOCAL_STORAGE(state, id){
            state.data = {'id': id}
        }
    },
    actions: {
        SetLocalStorage(context){
            context.commit('SET_LOCAL_STORAGE', window.localStorage.getItem("user_id"))
        },
        Logon(context, data) {        
        let url = '/acolher/public/api/auth/login';        
        axios
            .post(url, data)
              .then(response => {

                context.commit('LOGON', response)

                console.log(response.data.data[0].id)

                window.localStorage.setItem("user_id", response.data.data[0].id);

                //   console.log(data)
                //   console.log("DATA DO VUEX")

                // console.log(response.data.data[0])
                // if(response.data.data[0] == undefined){
                //     context.commit('LOGON', response.data.message)
                //   console.log(response.data.message)
                // }else{
                //     context.commit('LOGON', response)
                    // console.log('logado')
                // }
                

                // console.log(response.data.data)
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        },

        Logout(context, data) {   
            window.localStorage.removeItem("user_id");    
            context.commit('LOGOUT', "")            
        },
        
        Register(context, data) {        
            let url = '/acolher/public/api/auth/register';        
            axios
                .post(url, data)
                .then(response => {
                    context.commit('REGISTER', response)      
                    this.dispatch('Logon',data);              
                })
                .catch(function (error) {
                    response => context.commit('REGISTER', response.customMessages)
                    console.log(response);
                });
        },

        EmailCadastroConcluido(){
            console.log("email, funcionando");
        }
    }
}