import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../src/components/auth/VuexAuth'
import AtendimentoApometria from '../src/components/apometria/VuexAtendimentoApometria'
import Atendimentos from '../src/components/atendimentos/VuexAtendimentos'
import Obreiros from '../src/components/obreiros/VuexObreiros'
import Frequentador from '../src/components/frequentador/VuexFrequentador'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Auth,
    AtendimentoApometria,
    Atendimentos,
    Obreiros,
    Frequentador,
  }
})
