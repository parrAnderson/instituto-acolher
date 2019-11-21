export default {
    state: {
        checkIn:{},
        
    }, 
    mutations: {        
        MUDAR_CHECKIN(state, data){
            state.checkIn = data
            
        },    
        
    },
    actions: {            
        mudarCheckIN({commit}, data){               
            
            commit('MUDAR_CHECKIN', data)           
                        
        },
    }
}