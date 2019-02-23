<template>
    <div>
        <nav-header></nav-header>
    
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8 border-div">
                    <div class="row">
                        <div class="col-2">
                            <img class="img-fluid align-center" src="/../../acolher/public/img/logo.png" alt>
                        </div> 
                        <div class="col-5 text-center">
                            Acolher - Instituto Kardecista<br> Frequentador Cadastrado
                        </div>
                        <div class="col-2 text-right">
                            <img class="img-fluid float-right" src="/../../acolher/public/img/avatar.png" alt>
                        </div>
                    </div>
                    <div class="row">    
                        <div class="col-3">
                            <div class="form-group">
                                <label for="">N° de registro</label>
                                <input type="number" value="13" class="form-control">
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="form-group">
                                <label for="">CPF</label>
                                <input type="text" value="421.496.718.67" class="form-control">
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="form-group">
                                <label for="">RG</label>
                                <input type="text" value="49.181.250-4" class="form-control">
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="form-group">
                                <label for="">DATA</label>
                                <input type="date" value="2019-02-02" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-center">
                            Declaração
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-center">
                            Declaro ser de minha livre e espontanea
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6 text-left">
                            __________________________ <br>
                            Assinatura do atendido
                        </div>

                        <div class="col-6 text-right">
                            __________________________ <br>
                            Acolher
                        </div>
                    </div>
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
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style scoped>
.border-div {
    border-style: dotted;
}
</style>