import axios from "axios"
export default {
    state: {
        dataAgendada:{},
        programacao:{},
        listaAtendimentosAgendados:{},
        showModalDataPicker: false,
        listaGerada:{},
        cancelado:{},
        
    }, 
    mutations: {        
        DATA_AGENDADA(state, data){
            state.dataAgendada = data            
        },    
        ALL_ATENDIMENTO_APOMETRIA(state, data){
            state.programacao = data
        },
        CHANGE_LISTA_ATENDIMENTOS_AGENDADOS(state, data){
            state.listaAtendimentosAgendados = data
        },
        SHOW_MODAL_DATA_PICKER(state){
            state.showModalDataPicker = !state.showModalDataPicker
        },
        GERAR_LISTA_DE_ATENDIMENTOS(state, data){
            state.listaGerada = data
        },
        ATENDIMENTO_ATUALIZADO(state, data){
            state.cancelado = data
        }   
            
        
        
    },
    actions: {  
        getListaDeAtendimento({commit}, data){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            
            axios({
                method: 'get',
                url: urlApi + 'atendimentosapometria/relacaodeatendidos/' + data,               
            })
            .then(response => {
                commit('ALL_ATENDIMENTO_APOMETRIA', response.data.data)     
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        },

        atualizarAtendimentoApometria(context, dados){
            var acoes = dados.acoes
            var data = dados.data
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'atendimentosapometria/' + data.id;                        
            axios
            .put(
                urlApi, 
                data
                )
                
            .then(response => {
                context.commit('ATENDIMENTO_ATUALIZADO', response.data)     
                           
            context.dispatch("AcaoObreiro",acoes)
            })                           
            .catch(function (error) {
                console.log(error.response);
            });  
        },
        gerarListaDeAtendimentos({commit}, data){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
          
            // fields = JSON.parse(fields)
            
            axios({
                method: 'post',
                url: urlApi + 'atendimentosapometria/gerarlistaparaatendimento',      
                data         
            })
            .then(response => {
                commit('GERAR_LISTA_DE_ATENDIMENTOS', response.data.data)     
                console.log(response.data)
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        },
        changeShowModalDataPicker({commit}){
            commit('SHOW_MODAL_DATA_PICKER') 
        },   
        changeListaAtendimentosAgendados({commit},data){
            commit('CHANGE_LISTA_ATENDIMENTOS_AGENDADOS', data) 
        }
        ,       
        dataAgendada({commit}, data){              
           
            commit('DATA_AGENDADA', data)           
                        
        },
        allAtendimentoApometria({commit}, id){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            
            axios({
                method: 'get',
                url: urlApi + 'atendimentosapometria/index/' + id,               
            })
            .then(response => {
                commit('ALL_ATENDIMENTO_APOMETRIA', response.data.data)     
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        }
    }
}