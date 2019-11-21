import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../src/components/auth/VuexAuth'
import AtendimentoApometria from '../src/components/apometria/VuexAtendimentoApometria'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Auth,
    AtendimentoApometria,
  }
})
