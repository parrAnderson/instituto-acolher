import axios from "axios"

export default {
    state: {
        data: {},     
    },
    mutations: {
        CARTAO(state, data){
            state.data = data
        }
    },

    actions: {
        SelecionarUserCartao(context, id){
            let url = '/acolher/public/api/users/cartao/' + id;        
        axios
            .get(url)
              .then(response => {
                context.commit('CARTAO', response.data.data[0])
                // this.dispatch('Logon',data);
                // this.$router.push({ name: 'home' });
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        }        
    }
}