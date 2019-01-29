


import Home from './components/Home'
import Institucional from  './components/Institucional'
import SedeRecursos from './components/SedeRecursos'
import Direcao from './components/Direcao'
import Publicacoes from './components/Publicacoes'
import Contato from './components/Contato'
import HorarioAtendimento from './components/HorarioAtendimento'
import Semear from './components/Semear'
import AtendimentoAdulto from './components/formularios/AtendimentoAdulto'

//login
import LoginCpf from './components/auth/LoginCpf'
import Register from './components/auth/Register'

const routes = [
    {path:'/', name:'home', component: Home},
    {path:'/institucional', name:'institucional', component: Institucional},
    {path:'/sederecursos', name:'sederecursos', component: SedeRecursos},
    {path:'/direcao', name:'direcao', component: Direcao},
    {path:'/publicacoes', name:'publicacao', component: Publicacoes},
    {path:'/contato', name:'contato', component: Contato},
    {path:'/horariodeatendimento', name:'horariodeatendimento', component: HorarioAtendimento},
    {path:'/semear', name:'semear', component: Semear},
    // {path:'/formularios/atendimentoadulto', name:'formularios/atendimentoadulto', component: AtendimentoAdulto},
    
    {path:'/login', name:'login', component: LoginCpf},
    {path:'/register', name:'register',  name:'register', component: AtendimentoAdulto},
  
   


]



export default routes