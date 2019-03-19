<template>
    <div>       

            <nav-header></nav-header>
                <div class="page"> 
                    <section class="dashboard-header section-padding">
                       <div class="container-fluid">
                            <router-view></router-view>
                       </div>
                    </section>             
                </div>
           
       
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

