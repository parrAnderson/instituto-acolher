<template>
    <div>
        <nav-header></nav-header>
    
        <div class="container">
    
            <div class="row justify-content-md-center">
                <div class="col-md-3">
                    <img class="img-fluid align-center" src="/../../acolher/public/img/logo.png" alt>
                </div>
            </div>
            <br>
    
    
            <div class="row row-space">
                <div class="col-12">
                    <h2 class="text-center">Atividades de Atendimento</h2>
                </div>
            </div>
    
            <div class="row row-space justify-content-center">
                <div class="col-4">
                    <ul>
                        <li>
                            Apometria
    
                        </li>
                        <li>
                            Estudo Obreiros da luz
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="row row-space text-center">
                <div class="col-12">
                    <p>
                        A solicitação de atendimento para as atividades acima devem ser feita atravez de cadastro:
                    </p>
                </div>
            </div>
            <div class="row text-center justify-content-center">
                <div class="col-5">
                    (Ainda não possuo cadastro)<br>
                    <router-link to="/register">
                        <button class="btn btn-primary btn-sm">Cadastrar</button>
                    </router-link>
                </div>
                <div class="col-5">
                    (Já possuo cadastro)<br>
                    <router-link to="/login">
                        <button class="btn btn-success btn-sm">Login</button>
                    </router-link>
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
    name: "Home",
    components: {
        NavHeader,
        Footer,
    },
}
</script>