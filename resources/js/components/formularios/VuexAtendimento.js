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
        CadastrarAtendimento(context, data){
            let url = '/acolher/public/api/atendimento/cadastrar';     
            
        axios
            .post(url, data)
              .then(response => {
                context.commit('CADASTRAR', response.data)
                this.$router.push({ name: 'home' });
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        }        
    }
}