<template>
  <div>
  <Header>       
        <template v-slot:mainpage> 
         

        <div class="row justify-content-md-center">
            <div class="col-md-3">
                <img class="img-fluid align-center img-logo-home" src="@/assets/logo.png" alt>
            </div>
        </div>

        <div class="row row-space">
            <div class="col-12">
                <h2 class="text-center">HORARIO DE ATENDIMENTO</h2>
                <h3 class="text-center">veja abaixo as atividades e horários de atendimento:
                </h3>
                <div class="row">
                    <div class="col-12">
                        <img class="img-fluid" src="@/assets/img/horariosatendimento/atendimento1.png" alt="">
                    </div>
                </div>
                <br><br><br>
                <h4 class="text-center">veja abaixo as datas de atendimento do "obreiros da luz":</h4>

                <div class="row  row-space justify-content-center">
                    <div class="col-12 text-center">
                        <img class="img-fluid" src="@/assets/img/horariosatendimento/calendario2.png" alt="">
                    </div>
                </div>

            </div>
        </div>

    
        </template>
  </Header>
  </div>
</template>

<script>
import Header from '@/views/layouts/HeaderPublic.vue'
    export default {
        name:"HorariosAtendimento",
        components: {   
            Header,
  },
    }
</script>

<style>

</style>