<template>
    <div>       

            <nav-header></nav-header>
            <router-view></router-view>
       
    </div>
</template>

<script>
    import NavHeader from './layouts/NavHeader'
    // import Footer from './layouts/Footer'

    export default {
        name:"App",
        components: {
            NavHeader,
            // Footer,
        },
    }
</script>

