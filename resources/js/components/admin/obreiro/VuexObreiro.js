import axios from "axios"


export default {
    state: {
        data: {},        
    },
    mutations: {
        CADASTRAR(state, data){
            state.data = data
        }
        
    },
    actions: {
        CadastrarObreiro(context, data){
            // console.log(data)
            let url = '/acolher/public/api/users/atualizarobreiro';        
        axios
            .post(url, data)
              .then(response => {
                context.commit('CADASTRAR', response.data)               
                
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        }        
    }
}