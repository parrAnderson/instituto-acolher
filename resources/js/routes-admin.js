


import Dashboard from './components/admin/Dashboard'
import Users from './components/admin/users/Users'



const routes = [
    {path:'/', name:'home', component: Dashboard},
    {path:'/users', name:'users',  component: Users},
]



export default routes