import Vue from 'vue';
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import routes from '../js/routes-admin'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import store from './vuex/store'
import store from './components/admin/store'

 
import App from './components/admin/App-admin' 

const router = new VueRouter({
    routes
})
 
  
Vue.use(VueRouter, VueMoment)
new Vue({
    store,
    router,
    components:{
        App, 
    }
}).$mount('#appvue')   