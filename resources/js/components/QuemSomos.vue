<template>
    <div>
        <nav-header></nav-header>
 
        <div class="container">
           
        </div>

        <!-- <div class="row justify-content-md-center">
            <div class="col-md-4 ">
                <img class="img-fluid align-center" src="/img/logo-footer.png" alt="">
            </div>
        </div> -->

        <Footer></Footer>

    </div>
</template>

<script>
    import NavHeader from './layouts/NavHeader'
    import Footer from './layouts/Footer'
    export default {
        name: "Home",
        components: {
            NavHeader,
            Footer,
        },
    }
</script>