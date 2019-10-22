


import Dashboard from './components/admin/Dashboard'
import Users from './components/admin/users/Users'
import ShowUser from './components/admin/users/ShowUser'

// import IndexAtendimento from './components/admin/atendimento/IndexAtendimento'

// import IndexAtendimentoTipo from './components/admin/atendimento/IndexAtendimento'

// import EditAtendimento from './components/admin/atendimento/EditAtendimento'

// import FichaAtendimento from './components/admin/atendimento/FichaAtendimento'

import Obreiro from './components/admin/obreiro/Obreiro'


const routes = [
    {path:'/', name:'home', component: Dashboard},
    {path:'/users', name:'users',  component: Users},
    {path:'/showuser/:id', name:'showuser',  component: ShowUser},
    
    // {path:'/atendimentos', name:'atendimentos',  component: IndexAtendimento},
    // {path:'/atendimento/:id', name:'editatendimento',  component: EditAtendimento},
    // {path:'/fichaatendimento/:id', name:'fichaatendimento',  component: FichaAtendimento},
    {path:'/obreiro/:id', name:'obreiro',  component: Obreiro},
    {path:'/atendimentos/:tipoatendimento', name:'tipoatendimento',  component: IndexAtendimento},

    
]



export default routes