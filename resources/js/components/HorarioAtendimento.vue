<template>
<div>
    <nav-header></nav-header>

    <div class="container">
        <div class="row row-space">
            <div class="col-12">
                <h2 class="text-center">HORARIO DE ATENDIMENTO</h2>
                <h3 class="text-center">veja abaixo as atividades e horários de atendimento:
</h3>
<div class="row">
    <div class="col-12">
        <img class="img-fluid" src="/../../acolher/public/img/horarioatendimento/atendimento1.png" alt="">
    </div>
</div>
<h4 class="text-center">veja abaixo as datas de atendimento do "obreiros da luz":</h4>

<div class="row  row-space justify-content-center">
    <div class="col-12 text-center">
        <img class="img-fluid" src="/../../acolher/public/img/horarioatendimento/calendario.png" alt="">
    </div>
</div>

<div class="row  row-space justify-content-center">
    <div class="col-12 text-center">
        <img class="img-fluid" src="/../../acolher/public/img/horarioatendimento/calendario2.png" alt="">
    </div>
</div>
              
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
    name: "HorarioAtendimento",
    components: {
        NavHeader,
        Footer,
    },
}
</script>
