import Vue from 'vue'
import Vuex from 'vuex'

import Users from './users/VuexUsers'
// import Atendimento from './atendimento/VuexAtendimento'

import Obreiro from './obreiro/VuexObreiro'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Users,
        // Atendimento,
        Obreiro,
    }
})