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
                <h2 class="text-center">CONTATO</h2>
                <h4 class="text-center text-primary">acolher.instituto@hotmail.com</h4>
                <p>
                    O Acolher - Instituto Kardecista de Estudos e Amparo está localizado em Guarulhos / São Paulo:<br>
                    Veja a nossa localização no mapa.
                </p>
                <div class="row">
                    <div class="col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.3936132496056!2d-46.521121884966846!3d-23.44626236323707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef53380afd30d%3A0xb268a0091af97b8d!2sR.+Ant%C3%B4nio+Crist%C3%B3v%C3%A3o%2C+134+-+Jardim+Bom+Clima%2C+Guarulhos+-+SP%2C+07122-120!5e0!3m2!1spt-BR!2sbr!4v1545153504707" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe> </div>
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
        name:"Contato",
        components: {   
            Header,
  },
    }
</script>

<style>

</style>