


import Dashboard from './components/admin/Dashboard'
import Users from './components/admin/users/Users'
import ShowUser from './components/admin/users/ShowUser'

import IndexAtendimento from './components/admin/atendimento/IndexAtendimento'



const routes = [
    {path:'/', name:'home', component: Dashboard},
    {path:'/users', name:'users',  component: Users},
    {path:'/showuser/:id', name:'showuser',  component: ShowUser},

    {path:'/atendimentos', name:'atendimentos',  component: IndexAtendimento},
]



export default routes