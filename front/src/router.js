import Vue from 'vue'
import Router from 'vue-router'

// ROTAS ADMIN
import GerenciarObreiros from './views/admin/GerenciarObreiros'

// ROTAS PUBLICAS
import Home from './views/public/Home.vue'
import Login from './views/public/Login'
import Register from './views/public/Register'
import Direcao from './views/public/Direcao'
import Institucional from './views/public/Institucional'
import SedeRecursos from './views/public/SedeRecursos'
import Publicacoes from './views/public/Publicacoes'
import Contato from './views/public/Contato'
import HorariosAtendimento from './views/public/HorariosAtendimento'
import ConteudoCursos from './views/public/ConteudoCursos'

// ROTAS FREQUENTADOR
import SolicitarAtendimento from './views/frequentador/SolicitarAtendimento'
import Frequentador from './views/frequentador/Frequentador'
import CarteirinhaFrequentador from './views/frequentador/CarteirinhaFrequentador'


// ROTAS OBREIRO
import ProgramacaoApometria from './views/obreiro/apometria/ProgramacaoApometria'
import ConfirmacaoApometria from './views/obreiro/apometria/ConfirmacaoApometria'
import RodadasMacas from './views/obreiro/apometria/RodadasMacas'
import RelacaoAtendidos from './views/obreiro/apometria/RelacaoAtendidos'
import EntrevistaPreAtendimento from './views/obreiro/apometria/EntrevistaPreAtendimento'
import LeituraDasFichas from './views/obreiro/apometria/LeituraDasFichas'
import CabeceiraDaMaca from './views/obreiro/apometria/CabeceiraDaMaca'
import PosAtendimento from './views/obreiro/apometria/PosAtendimento'
import EntrevistaDeEncerramento from './views/obreiro/apometria/EntrevistaDeEncerramento'

// TEMPORARIO
import DataPicker from './components/DataPicker'

// import { AclRule } from 'vue-acl'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [     
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/datapicker',
      name: 'datapicker',
      component: DataPicker,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/direcao',
      name: 'direcao',
      component: Direcao,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/institucional',
      name: 'institucional',
      component: Institucional,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/sederecursos',
      name: 'sederecursos',
      component: SedeRecursos,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/publicacoes',
      name: 'publicacoes',
      component: Publicacoes,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/horariosatendimento',
      name: 'horariosatendimento',
      component: HorariosAtendimento,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/conteudocursos',
      name: 'conteudocursos',
      component: ConteudoCursos,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/solicitaratendimento',
      name: 'solicitaratendimento',
      component: SolicitarAtendimento,
      meta: {
        rule: 'isFrequentador'
      }
    },
    {
      path: '/frequentador',
      name: 'frequentador',
      component: Frequentador,
      meta: {
        rule: 'isFrequentador'
      }
    },
    {
      path: '/carteirinhafrequentador',
      name: 'carteirinhafrequentador',
      component: CarteirinhaFrequentador,
      meta: {
        rule: 'isFrequentador'
      }
    },
    {
      path: '/login',
      name: 'login',      
      component: Login,
      meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/register',
      name: 'register',      
      component: Register,
      meta: {
        rule: 'isPublic'
      }
    },
    // ROTAS ADMIN
    {
      path: '/admin/dashboard',
      name: 'admin',
      component: Home,
      meta: {
        rule: 'isAdmin'
      }      
    },
    {
      path: '/admin/gerenciarobreiros',
      name: 'gerenciarobreiros',
      component: GerenciarObreiros,
      meta: {
        rule: 'isAdmin'
      }      
    },
    // FIM ROTAS ADMIN
    
    // ROTAS OBREIRO
    {
      path: '/obreiro',
      name: 'obreiro',
      component: Home,
      meta: {
        rule: 'isObreiro'
        }
        },
        {
        path: '/obreiro/apometria/programacao',
        name: 'programacaoapometria',
        component: ProgramacaoApometria,
        meta: {
          rule: 'isObreiro'
        }
        },
        {
        path: '/obreiro/apometria/confirmacaoapometria',
        name: 'confirmacaoapometria',
        component: ConfirmacaoApometria,
        meta: {
          rule: 'isObreiro'
        }
        },
        {
        path: '/obreiro/apometria/rodadasmacas',
        name: 'rodadasmacas',
        component: RodadasMacas,
        meta: {
          rule: 'isObreiro'
        }
        },
        {
        path: '/obreiro/apometria/relacaoatendidos',
        name: 'relacaoatendidos',
        component: RelacaoAtendidos,
        meta: {
          rule: 'isObreiro'
        }
        },    
        {
        path: '/obreiro/apometria/entrevistapreatendimento',
        name: 'entrevistapreatendimento',
        component: EntrevistaPreAtendimento,
        meta: {
          rule: 'isObreiro'
        }
        },
        {
        path: '/obreiro/apometria/leituradasfichas',
        name: 'leituradasfichas',
        component: LeituraDasFichas,
        meta: {
          rule: 'isObreiro'
        }
        },
        {
        path: '/obreiro/apometria/cabeceiradamaca',
        name: 'cabeceiradamaca',
        component: CabeceiraDaMaca,
        meta: {
          rule: 'isObreiro'
        }
        },
        {
        path: '/obreiro/apometria/posatendimento',
        name: 'posatendimento',
        component: PosAtendimento,
        meta: {
          rule: 'isObreiro'
        }
        },
        {
        path: '/obreiro/apometria/entrevistadeencerramento',
        name: 'entrevistadeencerramento',
        component: EntrevistaDeEncerramento,
        meta: {
          rule: 'isObreiro'
        }
        },
        
    //FIM ROTAS OBREIRO

  ]
})
