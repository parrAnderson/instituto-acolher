<template>
  <div>
  <Header>       
        <template v-slot:mainpage> 
            
            <div class="row row-space">
                <div class="col-12">
                    <h3 class="text-center">CURSOS DISPONÍVEIS NO SEMEAR - ACOLHER </h3>
                    
                     
                    <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="@/assets/img/conteudocursos/1.png" alt="">
                        </div>
                    </div>
                    <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="@/assets/img/conteudocursos/2.png" alt="">
                        </div>
                    </div>
                     <div class="row  row-space justify-content-center">
                        <div class="col-12 text-center">
                            <img class="img-fluid" src="@/assets/img/conteudocursos/3.png" alt="">
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
        name:"ConteudoCursos",
        components: {   
            Header,
  },
    }
</script>

<style>

</style>