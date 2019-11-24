import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../src/components/auth/VuexAuth'
import AtendimentoApometria from '../src/components/apometria/VuexAtendimentoApometria'
import Obreiros from '../src/components/obreiros/VuexObreiros'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Auth,
    AtendimentoApometria,
    Obreiros,
  }
})
