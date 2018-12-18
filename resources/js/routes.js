


import Home from './components/Home'
import Institucional from  './components/Institucional'
import SedeRecursos from './components/SedeRecursos'
import Direcao from './components/Direcao'
import Publicacoes from './components/Publicacoes'
import Contato from './components/Contato'

const routes = [
    {path:'/', name:'home', component: Home},
    {path:'/institucional', name:'institucional', component: Institucional},
    {path:'/sederecursos', name:'sederecursos', component: SedeRecursos},
    {path:'/direcao', name:'direcao', component: Direcao},
    {path:'/publicacoes', name:'publicacao', component: Publicacoes},
    {path:'/contato', name:'contato', component: Contato},
]



export default routes