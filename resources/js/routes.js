


import Home from './components/Home'
import Institucional from  './components/Institucional'
import SedeRecursos from './components/SedeRecursos'
import Direcao from './components/Direcao'
import Publicacoes from './components/Publicacoes'
import Contato from './components/Contato'
import HorarioAtendimento from './components/HorarioAtendimento'
import Semear from './components/Semear'
// import AtendimentoAdulto from './components/formularios/AtendimentoAdulto'
import Atendimento from './components/formularios/Atendimento'
import Obreiro from './components/obreiro/Obreiro'

import Carteirinha from './components/carteirinhas/Carteirinha'


//login
import LoginCpf from './components/auth/LoginCpf'
import Register from './components/auth/Register'

// admin
// import Dashboard from './components/admin/Dashboard'

const routes = [
    {path:'/', name:'home', component: Home},
    {path:'/institucional', name:'institucional', component: Institucional},
    {path:'/sederecursos', name:'sederecursos', component: SedeRecursos},
    {path:'/direcao', name:'direcao', component: Direcao},
    {path:'/publicacoes', name:'publicacao', component: Publicacoes},
    {path:'/contato', name:'contato', component: Contato},
    {path:'/horariodeatendimento', name:'horariodeatendimento', component: HorarioAtendimento},
    {path:'/semear', name:'semear', component: Semear},
    {path:'/login', name:'login', component: LoginCpf},
    {path:'/register', name:'register',  name:'register', component: Register},
    {path:'/atendimento', name:'atendimento',  component: Atendimento},
    {path:'/obreiro', name:'obreiro',  component: Obreiro},
    {path:'/cartao/:id', name:'cartao',  component: Carteirinha},
    
    // admin
    // {path:'/', name:'home', component: Dashboard},
  
   


]



export default routes