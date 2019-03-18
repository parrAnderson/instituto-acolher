<template>
    <div>
        <div class="row">
            <div class="col">
                Usuarios AQUI
            </div>
            <div @click="mostrarUsers()" class="btn">
                CLICK
            </div>
        </div>
        <div class="row">
            <div class="table" v-if="users">
                <div class="tr" v-for="user in users" :key="users.id">
                    <div class="td">{{user.name}}</div>
                </div>
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
        mostrarUsers(){
            console.log(this.users)
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