<template>
    <div>
        <span class="no-print">        
        <nav-header></nav-header>
        </span>
    
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 border-div cartao-tamanho">
                    <table class="table table-sm" v-if="cartao">
                        <tr>
                            <td rowspan="">
                                <img class=" align-center img-quinze" src="/../../acolher/public/img/logo.png" alt>
                            </td>
                             
                            <td colspan="2" class="text-center">
                                <p>Acolher - Instituto Kardecista</p>
                                Frequentador Cadastrado
                                <div class="btn btn-sm btn-primary">Validade 10/06/2020</div>
                            </td>
                            <td rowspan="2" class="shadow-sm text-left float-right ">
                                <img class=" float-right img-quinze" src="/../../acolher/public/img/avatar.png" alt>
                            </td>
                        </tr>
                        
                       
                        <tr>
                            <td colspan="4">
                                Nome: <span class="text-center">{{cartao.name}}</span>
                            </td>
                        </tr>
                       
                        <tr class="text-left">
                            <td>N° de reg. <br> {{cartao.id}}</td>
                            <td> CPF <br> {{cartao.cpf}}</td>
                            <td> RG <br> {{cartao.rg}}</td>
                            <td> DATA <br> 10/06/2019</td>
                        </tr>                        
                        <tr>
                            <td colspan="4" class="text-left text-declaracao">
                                Declaração<br>
                                Declaro ser de minha livre e espontanea vontade ser atendido(a) no Acolher - Instituto Kardecista de Estudos e Amparo,
                                nesta oportunidade e sempre aqui retornar, bem como atesto estar sendo orientado a não iniciar, alterar, suspender ou interromper
                                qualquer tratamento médico ou medicação, o deve occorer únicas exclusivamente sob orientação e prescrição médicas.
                                Declaro ainda ser de minha única responsabilidade acerca de assuntos particulares e/ou profissionais, de minha saúde fisíca, mental e espiritual,
                                conforme por mim assinado no "Cadastro para Atendimento a Adulto".
                            </td>
                        </tr>
                    </table>
                    <div class="row">
                        <div class="col-6 text-left"><br>
                            __________________________ <br>
                            Assinatura do atendido
                        </div>

                        <div class="col-6 text-right"><br>
                            __________________________ <br>
                            Acolher
                        </div>
                    </div>
                </div>
                 
            </div>

                        <br><br>
            <div class="row justify-content-center">
                <div class="col-6 border-div cartao-tamanho border-zero size-fixed-table">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <td rowspan="2">
                                MÊS
                            </td>
                            <td rowspan="2">
                                MENS
                            </td>
                            <td colspan="5">
                                CURSO
                            </td>  
                            <td rowspan="8">
                            DIA DE - PAGTO <br><br><br>
                            <input type="checkbox"> 10 <br><br><br>
                            <input type="checkbox"> 20 <br>
                            </td>                          
                        </tr>
                        <tr>
                            <td>
                                APO BA
                            </td>
                            <td>
                                APO AV
                            </td>
                            <td>
                                KARDEC
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                INSCR
                            </td>        
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>                   
                        </tr>
                        <tr>
                             <td>
                                JAN
                            </td> 
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>                           
                        </tr>
                        <tr>
                            <td>
                                FEV
                            </td>  
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>                          
                        </tr>
                        <tr>
                            <td>
                                MAR
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                ABR
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        </tr>
                        <tr>
                            <td>
                                MAI
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                JUN
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td rowspan="7">
                                CESTA BASICA
                                <br><br><br>
                            <input type="checkbox"> 1° <br><br><br>
                            <input type="checkbox"> 2° <br>
                                </td>
                            
                        </tr>
                        <tr>
                            <td>
                                JUL
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>AGO</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>SET</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>OUT</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>      
                        </tr>
                        <tr>
                            <td>NOV</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>DEZ</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                 
            </div>
           
        </div>
    
    <span class="no-print">
        <Footer></Footer>
    </span>
    </div>
</template>

<script>
import NavHeader from "./../layouts/NavHeader";
import Footer from "./../layouts/Footer";
import {mapActions, mapState} from "vuex";
import { async } from 'q';

export default {
    name: "Carteirinhas",
    components: {
        NavHeader,
        Footer
    },
    data() {
        return {
            id: this.$route.params.id,
            inputs:{}
        }
    },
    methods:{
            ...mapActions([
            'SelecionarUserCartao',
        ]),       
    },
    mounted(){       
        this.SelecionarUserCartao(this.id)      
    },
    computed:{
        ...mapState({
            cartao: state => state.Cartao.data
            // corrigir
        })
    },    
    watch:{
        cartao(){
            console.log(this.cartao.name);
        }
    },
}
</script>

<style scoped>

table {
    table-layout: fixed;
    word-wrap: break-word;
}
.border-div {
    border-style: dotted;
}

.text-declaracao{
    font-size:10px
}
.img-quinze {
    width: 100px;
}
.cartao-tamanho{
    height: 447px;
    width: 570px;
}
.border-zero{
    padding-right: 0px! important;
    padding-left: 0px! important;
}
.size-fixed-table table > tr > td{
    font-size: 13.5px! important;
}
@media print
{    
    .no-print, .no-print *
    {
        display: none !important;
    }
}
</style>