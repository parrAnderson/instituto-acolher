import axios from "axios"

export default {
    state: {
        data: {},
        solicitacoes:{},        
    },
    mutations: {
        CADASTRAR(state, data){
            state.data = data
        },
        GETATENDIMENTO(state, data){
            state.solicitacoes = data
        },
        LIMPAR(state, data){
            state.data = {}
        },
        
    },
    actions: {
        LimparAtendimento(context){
            context.commit('LIMPAR')
        },
        CadastrarAtendimento(context, data){
            let url = '/acolher/public/api/atendimento/cadastrar';     
            
        axios
            .post(url, data)
              .then(response => {
                context.commit('CADASTRAR', response.data)
                // this.$router.push({ name: 'home' });
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        },   
        
        GetAtendimento(context, data){
            let url = '/acolher/public/api/atendimento/create/' + data;     
            
        axios
            .get(url)
            .then(response => {
            context.commit('GETATENDIMENTO', response.data.data)            
            }                
        )
        .catch(function (error) {
        console.log(error);
        });
        }
    }
}