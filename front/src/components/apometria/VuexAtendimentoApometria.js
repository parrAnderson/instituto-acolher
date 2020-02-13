import axios from "axios"
export default {
    state: {
        dataAgendada:{},
        programacao:{},
        listaAtendimentosAgendados:{},
        showModalDataPicker: false,
        listaGerada:{},
        cancelado:{},
        rodadas_macas_disponiveis:{},
        
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
        },
        ENDERECOS_REPETIDOS(state, data) {
            state.enderecos_repetidos = data
        } ,
        RODADAS_MACAS_DISPONIVEIS(state, data){
            state.rodadas_macas_disponiveis = data
        },
        REMOVER_RODADAS_MACAS(state, data){
            state.rodadas_macas_disponiveis = data
        },
        ADICIONAR_RODADAS_MACAS(state, data){
            state.rodadas_macas_disponiveis = data
        }
            
        
        
    },
    actions: {
        
        getListaLeituraDasFichas({commit}, dados){   
            var data = dados.data  
            var status = dados.status
            var maca = dados.maca
            var tipostatus = dados.tipostatus

            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            
            axios({
                method: 'get',
                url: urlApi + 'atendimentosapometria/atendimentocomdatastatusmaca/' + data + '/' + status + '/' + maca + '/' + tipostatus,               
            })
            .then(response => {
                commit('ALL_ATENDIMENTO_APOMETRIA', response.data.data)     
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        },

        getListaDeAtendimentoRodadasMacas({commit}, data){            
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            
            axios({
                method: 'get',
                url: urlApi + 'atendimentosapometria/atendimentocomdatastatus/' + data + '/' + 4,               
            })
            .then(response => {
                commit('ALL_ATENDIMENTO_APOMETRIA', response.data.data)     
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        },
        allAtendimentoApometria({commit}, status){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            
            axios({
                method: 'get',
                url: urlApi + 'atendimentosapometria/index/' + status,               
            })
            .then(response => {
                commit('ALL_ATENDIMENTO_APOMETRIA', response.data.data)     
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        },

        adicionar_rodadas_macas(context, dados){
            var rodadasMacas = context.state.rodadas_macas_disponiveis
            
            rodadasMacas[dados.rodada][dados.maca] = dados.maca

            context.commit('ADICIONAR_RODADAS_MACAS', rodadasMacas)
        },
        remover_rodadas_macas(context, dados){
            var rodadasMacas = context.state.rodadas_macas_disponiveis

            rodadasMacas[dados.rodada][dados.maca] = ""

            context.commit('REMOVER_RODADAS_MACAS', rodadasMacas)
        },
        getMacasDisponiveis({commit}, data){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            
            axios({
                method: 'get',
                url: urlApi + 'atendimentosapometria/macasrodadas/' + data,               
            })
            .then(response => {
                commit('RODADAS_MACAS_DISPONIVEIS', response.data.data)     
                      
            })                           
            .catch(function (error) {
                console.log(error.response);
            }); 
        },
        setEnderecosRepetidos({commit}, data){
            commit('ENDERECOS_REPETIDOS', data)
        }  ,
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
        
    }
}