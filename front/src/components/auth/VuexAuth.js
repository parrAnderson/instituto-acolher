import axios from "axios"

export default {
    state: {
        // register:{},
        // message:"",
        user:{},
        error:{},  
        register:{},
        userId:"",
    }, 
    getters: {
        getUserId: state => {
          return state.userId
        }
      },
       mutations: {        
        USER(state, user){
            state.user = user
            state.userId = user.data.id
        },       
        
        GET_TOKEN(state,data){
            state.auth = data
        },
        ERROR(state, data){
            state.error = data            
        },
        SET_TOKEN(state, data){
            state.data = data            
        },
        LOGOUT(state){
            if(state.user){
                state.user = {}
                state.userId = ""
            }                       
        },
        REGISTER(state, register) {
            state.register = register
        },
    },
    actions: {
        Register(context, data) {     
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL   
            // let url = '/acolher/public/api/auth/register';        
            axios({
                method: 'post',
                url: urlApi + 'auth/signup',
                data
            })
                .then(response => {
                    context.commit('REGISTER', response)                      
                })
                .catch(function (error) {
                    console.log(error)                    
                    console.log(error.response)
                    
                });
        },
        logout({commit}){
            
            localStorage.setItem("token", '');    
            localStorage.setItem("expiration", '');   
            localStorage.setItem('type', ''); 
            localStorage.setItem('id', ''); 
            commit('LOGOUT')           
                        
        },
        
        login({commit, dispatch}, data){

            // localStorage.setItem("token", '');    
            // localStorage.setItem("expiration", '');   
            // localStorage.setItem('type', ''); 
            // localStorage.setItem('id', ''); 

            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            let auth = {}
            function storage(){             
                localStorage.setItem('token', auth.access_token);
                localStorage.setItem('expiration', auth.expires_at);                
            }
            axios({
                method: 'post',
                url: urlApi + 'auth/login',
                data
            })
            .then(function (response) {
               
                auth.access_token = response.data.access_token
                auth.expires_at = response.data.expires_at                
                storage()
              
                dispatch('user')
                  commit('ERROR', {}) 
                  
            }).catch(function (error) {
                
                console.log(error)
                console.log(error.response)
                commit('ERROR', error.response.data)                
            })    
            
        },
        confirmAuthenticated({dispatch, state }){
            if(localStorage.getItem('token') && !state.user.id){
                dispatch('user');
            }
        },
        user({commit}){
            localStorage.setItem('type', ''); 
            localStorage.setItem('id', ''); 

            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            let token = localStorage.getItem('token');
            
            axios({                        
                method: 'get',
                url: urlApi + 'auth/user',
                headers: { 
                    Authorization: "Bearer " + token,
                    'Content-Type': 'application/json' 
                },
            })
            .then((response) => {         
                // console.log(response)           
                    if(response.data.id){
                        
                        commit('USER', response)
                        localStorage.setItem('type', response.data.type); 
                    localStorage.setItem('id', response.data.id); 
                    }
                              
            }).catch(function (error) {
                console.log(error.response);
              
        })  
    }           
    }
}