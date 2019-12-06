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
    // 0 - FREQUENTADOR
    // 1 - ADMIN 
    // 2 - OBREIRO - TODOS ATENDIMENTOS  
    // 3 - OBREIRO - APOMETRIA
    // 4 - OBREIRO - LUZ
    // 5 - OBREIRO - PASSES
    // 6 - OBREIRO - EVANGELHO

      
    isUser: new AclRule('user').generate(), 
    isLogged: new AclRule('user').and('inside').generate(),

    isAdmin: new AclRule('1').generate(),
    isObreiroAll: new AclRule('2').or('1').generate(),
    isObreiroApometria: new AclRule('3').or('2').or('1').generate(),
    isObreiroLuz: new AclRule('4').or('2').or('1').generate(),
    isObreiroPasses: new AclRule('5').or('2').or('1').generate(),
    isObreiroEvangelho: new AclRule('6').or('2').or('1').generate(),

    isPublic: new AclRule('public').or('0')
    .or('1').or('2').or('3').or('4').or('5').or('6').generate(),
    isFrequentador: new AclRule('0')
    .or('1').or('2').or('3').or('4').or('5').or('6').generate(),    
    isObreiro: new AclRule('1').or('2').or('3').or('4').or('5').or('6').generate(),
    
  },
  middleware: async acl => {
    let getStore
    if(localStorage.getItem('type') > ''){
      getStore = localStorage.getItem('type');

    }else{
      getStore = 'public'
      console.log("SEM TOKEN")
    }    

    acl.change(getStore) 
   
  }
})