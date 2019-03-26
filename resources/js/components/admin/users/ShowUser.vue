<template>
    <div>
        Show User mapstate
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "ShowUser",
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods:{
        ...mapActions([
            'GetUser',
        ]),
    },
    mounted(){
       this.GetUser(this.id)
    }
}
</script>

<style scoped>

</style>