<template>
    <div>
        <nav-header></nav-header>
    
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 border-div">
                    <table class="table">
                        <tr>
                            <td>
                                <img class=" align-center img-quinze" src="/../../acolher/public/img/logo.png" alt>
                            </td>
                            <td colspan="2" class="text-center">
                                Acolher - Instituto Kardecista<br> 
                                Frequentador Cadastrado <br>
                                <div class="btn btn-primary">Validade 10/06/2020</div>
                            </td>
                            <td class="text-left float-right ">
                                <img class=" float-right img-quinze" src="/../../acolher/public/img/avatar.png" alt>
                            </td>
                        </tr>
                        <!-- <tr colspan="2">
                            <td>
                                Acolher - Instituto Kardecista<br> 
                            </td>                            
                        </tr>   
                        <tr>
                            <td>
                                Frequentador Cadastrado
                            </td>                            
                        </tr>
                        <tr>
                            <td>
                                 <div class="btn btn-primary">Validade 10/06/2020</div>
                            </td>
                        </tr> -->
                        <tr>
                            <td colspan="4">
                                Nome: <span class="text-center">Jorge Serrano Junior</span>
                            </td>
                        </tr>
                       
                        <tr class="text-left">
                            <td>N° de reg. <br> 1525</td>
                            <td> CPF <br> 421.496.718-67</td>
                            <td> RG <br> 49.181.250-4</td>
                            <td> DATA <br> 10/06/2019</td>
                        </tr>                        
                        <tr>
                            <td colspan="4" class="text-center">
                                Declaração<br>
Declaro ser de minha livre e espontanea
                            </td>
                        </tr>
                    </table>
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

.img-quinze {
    width: 100px;
}
</style>