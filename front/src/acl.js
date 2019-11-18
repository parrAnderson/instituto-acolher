import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from './router'

Vue.use(AclInstaller)

export default new AclCreate({
  initial: 'public',
  notfound: {
    path: '/',
    forwardQueryParams: true,
  },
  router,
  acceptLocalRules: true,
  globalRules: {
    isAdmin: new AclRule('admin').generate(),   
    isUser: new AclRule('user').generate(), 
    isLogged: new AclRule('user').and('inside').generate(),


    isPublic: new AclRule('public').or('obreiro').or('frequentador').generate(),
    isFrequentador: new AclRule('frequentador').or('obreiro').generate(),
    isObreiro: new AclRule('obreiro').generate(),
  },
  middleware: async acl => {
    let getStore
    if(localStorage.getItem('type') > ''){
      getStore = localStorage.getItem('type');
      // console.log("TOKEN")
    }else{
      getStore = 'public'
      console.log("SEM TOKEN")
    }    
    // getStore = 'public'
    acl.change(getStore) 
   
  }
})