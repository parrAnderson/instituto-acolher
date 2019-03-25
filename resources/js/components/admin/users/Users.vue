<template>
    <div>
        
         
            <div class="row row-space">
                <div class="col-12">
                    <h2 class="text-center">Fichas</h2>
                </div>
            </div>
       


    
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <table class="table table-striped" v-if="users">
                    <thead>
                        <tr>
                            <td>
                                NOME
                            </td>
                            <td>
                                CPF
                            </td>
                            <td>
                                TELEFONE
                            </td>
                            <td>
                                EMAIL
                            </td>
                            <td>
                                RELIGIÃO
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="user in users" :key="users.id" @click="ShowUser()">
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
                                {{user.religiao}}        
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
        ShowUser(){
        this.$router.push({ name: 'showuser'});
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