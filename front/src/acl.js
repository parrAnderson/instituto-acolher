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
    // 1 - FREQUENTADOR
    // 2 - ADMIN 
    // 3 - OBREIRO - TODOS ATENDIMENTOS  
    // 4 - OBREIRO - APOMETRIA
    // 5 - OBREIRO - LUZ
    // 6 - OBREIRO - PASSES
    // 7 - OBREIRO - EVANGELHO
    // 8 - OBREIRO - Diálogo Fraterno
    // 9 - SEMEAR -  Apometria
    // 10 - SEMEAR -  Kardecismo basico
    // 11 - SEMEAR - Kardecismo avançado


      
    isUser: new AclRule('user').generate(), 
    isLogged: new AclRule('user').and('inside').generate(),

    isAdmin: new AclRule('2').generate(),
    isObreiroAll: new AclRule('3').or('2').generate(),


    isObreiroApometria: new AclRule('4').or('3').or('2').generate(),
    isObreiroLuz: new AclRule('5').or('3').or('2').generate(),
    isObreiroPasses: new AclRule('6').or('3').or('2').generate(),
    isObreiroEvangelho: new AclRule('7').or('3').or('2').generate(),

    isObreiroDialogoFraterno: new AclRule('8').or('3').or('2').generate(),
    isSemarApometria: new AclRule('9').or('3').or('2').generate(),
    isSemearKardecismoBasico: new AclRule('10').or('3').or('2').generate(),
    isSemearKardecismoAvancado: new AclRule('11').or('3').or('2').generate(),

    isPublic: new AclRule('public').or('1')
    .or('2').or('3').or('4').or('5').or('6').or('7').or('8').or('9').or('10').or('11').generate(),
    isFrequentador: new AclRule('1')
    .or('2').or('3').or('4').or('5').or('6').or('7').or('8').or('9').or('10').or('11').generate(),  

    // tem que ter todos os tipos de obreiro aqui
    isObreiro: new AclRule('2').or('3').or('4').or('5').or('6').or('7').or('8').or('9').or('10').or('11').generate(),
    
  },
  middleware: async acl => {
    let getStore
    if(localStorage.getItem('type') > ''){
      getStore = localStorage.getItem('type');

    }else{
      getStore = 'public'
    }    

    acl.change(getStore) 
   
  }
})