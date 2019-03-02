import Vue from 'vue'
import Vuex from 'vuex'

import Login from './components/auth/VuexLogin'
import Obreiro from './components/obreiro/VuexObreiro'
import Atendimento from './components/formularios/VuexAtendimento'
import Cartao  from './components/carteirinhas/VuexCartao'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Login,
        Obreiro,
        Atendimento,
        Cartao
    }
})