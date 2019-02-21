<template>
    <div>
          <nav-header></nav-header>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6">
                     Carteirinha {{id}}
                </div>
            </div>
        </div>
       

          <Footer></Footer>
    </div>
</template>

<script>

import NavHeader from "./../layouts/NavHeader";
  import Footer from "./../layouts/Footer";
    export default {
        name: "Carteirinhas",
        components: {
        NavHeader,
        Footer
        },
        data(){
            return{
                id: this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>