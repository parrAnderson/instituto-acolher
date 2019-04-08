<template>
    <div>       

            <nav-header></nav-header>
                <div class="page"> 

 <header class="header">
            <nav class="navbar">
                <div class="container-fluid">
                    <div class="navbar-holder d-flex align-items-center justify-content-between">
                        <div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn"><i class="icon-bars"> </i></a>
                            <a href="index.html" class="navbar-brand">
                                <div class="brand-text d-none d-md-inline-block"><span>Menu - Acolher</span></div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </header>
    


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

