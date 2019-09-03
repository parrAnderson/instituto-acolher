<template>
    <div>
        <!-- <nav-header></nav-header> -->
    
        <div class="container">
            <div class="row row-space">
                <div class="col-12">
                    <h2 class="text-center">Painel Administrativo</h2> <br>
                </div>
            </div>
    
            <div class="row row-space">
                <div class="col-4">
                    <router-link to="/users">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="/../../acolher/public/img/admin/dashboard/fichas.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title text-center">Fichas</h5>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link :to="{name: 'tipoatendimento', params: {tipoatendimento: 'todos'}}">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="/../../acolher/public/img/admin/dashboard/atendimento.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title text-center">Atendimentos</h5>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    
    
    
        <!-- <Footer></Footer> -->
    
    </div>
</template>

<script>
// import NavHeader from './layouts/NavHeader'
// // import Footer from './layouts/Footer'
import axios from 'axios'

export default {
    name: "Dashboard",
    components: {
        // NavHeader,
        // Footer,
    },
    //         mounted(){
    //             let url = '../public/api/user';
    //             axios
    //                 .get(url)
    //                  .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
    //         }
}
</script>