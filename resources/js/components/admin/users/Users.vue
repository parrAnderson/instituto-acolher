<template>
    <div>
        
         
            <div class="row row-space">
                <div class="col-12">
                    <h2 class="text-center">Fichas</h2>
                </div>
            </div>
       


    
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <table class="table table-striped table-sm" v-if="users">
                    <thead>
                        <tr>
                            <td>
                                NOME
                            </td>
                            <td>
                                CPF
                            </td>
                            
                            <td>
                                EMAIL
                            </td>
                            <td>
                                TELEFONE
                            </td>
                            <td>
                                NASCIMENTO
                            </td>
                            
                             <td>
                                OBREIRO 
                            </td>
                            <td>
                                FUMA
                            </td>
                            <td>
                                BEBE 
                            </td>
                            <td>
                                DROGAS 
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="user in users" :key="users.id" @click="ShowUser(user.id)">
                            <td>
                                {{user.name}}        
                            </td>
                             <td>
                                {{user.cpf}}        
                            </td>
                            <td>
                                {{user.telefone}}        
                            </td>
                            <td>
                                {{user.email}}        
                            </td>
                            <td>
                                {{user.data_nascimento}}        
                            </td>
                           
                            <td>
                                {{user.obreiro}}        
                            </td>
                            <td>
                                {{user.fumante}}        
                            </td>
                            <td>
                                {{user.bebida}}        
                            </td>
                            <td>
                                {{user.drogas}}        
                            </td>
                        </tr>  
                    </tbody>
                </table>
                </div>
            </div>
        
       
    
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: "Users",
    computed: {
        ...mapState({
            users: state => state.Users.data
        })
    },
    methods: {
        ...mapActions([
            'AllUsers',
        ]),
        mostrarUsers() {
            console.log(this.users)
        },
        ShowUser(id){
        
        this.$router.push({ name: 'showuser', params: {id: id}});
    }
    },
    beforeMount() {
        this.AllUsers()
        console.log()
    },
    
}
</script>

<style scoped>

</style>