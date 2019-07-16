<template>
    <div>       

            
            <router-view></router-view>
       
    </div>
</template>

<script>
    import NavHeader from './layouts/NavHeader'
    import Footer from './layouts/Footer'

    import { mapActions } from 'vuex'

    export default {
        name:"App",
        components: {
            NavHeader,
            Footer,
        },
        mounted(){
            if(window.localStorage.getItem("user_id")){
            this.SetLocalStorage()
        }
        },
        methods: {
        ...mapActions([
            'SetLocalStorage',        
        ]),  
        }
    }
</script>

