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
                            <td>NOME</td>
                            <td>CPF</td>                            
                            <td>EMAIL</td>
                            <td>TELEFONE</td>
                            <td>NASCIMENTO</td>                            
                            <td>OBREIRO</td>
                            <!-- <td>FUMA</td>
                            <td>BEBE </td>
                            <td>DROGAS</td> -->
                        </tr>
                    </thead>
                    <tbody>                        
                        <tr v-for="user in users" :key="users.id" >
                            <td @click="ShowUser(user.id)">{{user.name}}</td>
                            <td @click="ShowUser(user.id)">{{user.cpf}}</td>
                            <td @click="ShowUser(user.id)">{{user.telefone}}</td>
                            <td @click="ShowUser(user.id)">{{user.email}}</td>
                            <td @click="ShowUser(user.id)">{{user.data_nascimento}}</td>                           
                            <td @click="ShowUser(user.id)" v-if="user.obreiro">
                                {{user.obreiro}}
                            </td>
                            <td @click="ChangeObreiro(user.id)" v-else>
                                <span class="text-primary pointer">Mudar para obreiro</span>
                            </td>
                            <!-- <td @click="ShowUser(user.id)">{{user.fumante}}</td>
                            <td @click="ShowUser(user.id)">{{user.bebida}}</td>
                            <td @click="ShowUser(user.id)">{{user.drogas}}</td> -->
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
    data(){
        return{
            parametros:{},
        }
    },
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
        },
        ChangeObreiro(id){ 
            console.log(id)       
            this.$router.push({ name: 'obreiro', params: {id: id}});
        }
    },
    beforeMount() {
        this.AllUsers(this.parametros)
        console.log()
    },
    watch: {
        $route() {
            this.parametros.tipo_ficha = this.$route.params.tipoficha
            this.AllUsers(this.parametros)
            console.log(this.parametros)
        },

    }
    
}
</script>

<style>
    .pointer{
        cursor: pointer;
    }

</style>