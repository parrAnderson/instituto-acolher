<template>
    <div>
        <nav-header></nav-header>
        <div class="container">
            <div class="row row-space">
                <div class="col-12">
                    <h3 class="text-center">MÓDULOS DO SEMEAR - ACOLHER </h3>
                    <div class="row">
                        <div class="col-12">
                            <img class="img-fluid" src="/../../acolher/public/img/semear/acolher.png" alt="">
                        </div>
                    </div>
                    <h3 class="text-center">ATIVIDADES DISPONÍVEIS NO SEMEAR - <span class="text-primary">ACOLHER</span>
                    </h3>
                     
                    <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="/../../acolher/public/img/semear/curso.png" alt="">
                        </div>
                    </div>
                    <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="/../../acolher/public/img/semear/kardecismo.png" alt="">
                        </div>
                    </div>
                     <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="/../../acolher/public/img/semear/apometria.png" alt="">
                        </div>
                    </div>
                    <!-- <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="/../../acolher/public/img/semear/discussao.png" alt="">
                        </div>
                    </div>
                    <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="/../../acolher/public/img/semear/debate.png" alt="">
                        </div>
                    </div>
                    <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="/../../acolher/public/img/semear/perguntas.png" alt="">
                        </div>
                    </div>
                    <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="/../../acolher/public/img/semear/oficina.png" alt="">
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavHeader from './layouts/NavHeader'
    import Footer from './layouts/Footer'
    export default {
        name: "Semear",
        components: {
            NavHeader,
            Footer,
        },
    }
</script>