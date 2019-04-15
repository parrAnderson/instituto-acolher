import axios from "axios"

export default {
    state:{
        data:{}
    },
    mutations:{
        ALL_ATENDIMENTO(state, data){
            state.data = data
        },
    },
    actions:{
        AllAtendimento(context){     
                 
            let url = '/acolher/public/api/atendimento/';        
        axios
            .get(url)
              .then(response => {
                context.commit('ALL_ATENDIMENTO', response.data.data)
              }                
            )
            .catch(function (error) {
            console.log(error);
            });
        }, 
    }
}