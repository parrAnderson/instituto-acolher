import Vue from 'vue'
import Vuex from 'vuex'

import Login from './components/auth/VuexLogin'
import Obreiro from './components/obreiro/VuexObreiro'
import Atendimento from './components/formularios/VuexAtendimento'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Login,
        Obreiro,
        Atendimento,
    }
})