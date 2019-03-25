


import Dashboard from './components/admin/Dashboard'
import Users from './components/admin/users/Users'
import ShowUser from './components/admin/users/ShowUser'



const routes = [
    {path:'/', name:'home', component: Dashboard},
    {path:'/users', name:'users',  component: Users},
    {path:'/showuser', name:'showuser',  component: ShowUser},
]



export default routes