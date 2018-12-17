import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from '../js/routes'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import store from './vuex/store'
 

 
import App from './components/App' 

const router = new VueRouter({
    routes
})
 
  
Vue.use(VueRouter)
new Vue({
    router,
    components:{
        App, 
    }
}).$mount('#appvue')   