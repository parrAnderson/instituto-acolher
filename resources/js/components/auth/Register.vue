<template>
    <div>
        <nav-header></nav-header>
        <div class="container">
            <div class="row row-space">
                <div class="col-12">
                    <h4 class="text-center">Cadastro </h4>
                    <!-- <button @click="emailCadastro()">ENVIAR EMAIL</button> -->
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <input type="text" class="form-control" v-model="inputs.name" placeholder="Nome Completo da Pessoa a ser Atendida *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <input type="text" class="form-control" @keyup="verificarIdade()" v-model="inputs.data_nascimento" v-mask="'##/##/####'" placeholder="Data de Nascimento*">
                </div>
                <div class="col-12 col-lg-4" v-if="selectGenero !== 'Outros'">
                    <select name="genero" v-if="selected" v-model="selectGenero" class="form-control">
                            <option selected value="" > Gênero *</option>
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Prefiro não indicar</option>
                            <option>Outros</option>
                          </select> 
                </div>
                <div class="col-10 col-lg-3" v-if="selectGenero == 'Outros'">
                    <input type="text" class="form-control" v-model="textGenero" placeholder="Digite o Gênero">
                </div>
                <div class="col-2 col-lg-1" v-if="selectGenero == 'Outros'">
                    <div class="btn btn-primary" @click="voltarGenero()"><i class="fas fa-chevron-up"></i></div>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <input type="text" class="form-control" v-model="inputs.cpf" v-mask="'###.###.###.##'" placeholder="CPF *">
                </div>
                <div class="col-12 col-lg-4">
                    <input type="text" class="form-control" v-model="inputs.rg" v-mask="'##.###.###-#'" placeholder="RG">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <input type="text" class="form-control" v-model="inputs.celular" v-mask="'(##)#####-####'" placeholder="Telefone Celular *">
                </div>
                <div class="col-12 col-lg-4">
                    <input type="text" class="form-control" v-model="inputs.telefone" v-mask="'(##)####-####'" placeholder="Telefone Fixo">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <input type="text" v-model="inputs.email" class="form-control" placeholder="Email *">
                </div>
               
            </div>
    
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <select name="estado_civil" v-model="inputs.estado_civil" class="form-control" id>
                            <option disabled value="">Estado Civil *</option>
                             <option value="Solteiro(a)">Solteiro(a)</option>                    
                            <option value="Casado(a)">Casado(a)</option>                      
                            <option>União Estável</option>                      
                            <option >Separado(a)</option>  
                            <option>Divorciado(a)</option>                    
                            <option>Viúvo</option>                      
                            <option>Outros</option>
                          </select>
                </div>
                <div class="col-12 col-lg-4" v-if="selectReligiao !== 'Outro'">
                    <select name="religiao" v-model="selectReligiao" class="form-control" id>
                            <option disabled value="">Religião *</option>
                            <option value="Kardecista / Espírita">Kardecista / Espírita</option>          
                            <option>Umbandista</option>
                            <option>Católica</option>            
                            <option>Evangélica</option>            
                            <option>Budista</option>            
                            <option>Judaica</option>            
                            <option>Candomblé</option>
                            <option>Prefiro não indicar</option>
                            <option>Outro</option>
                          </select>
                </div>
                  <div class="col-10 col-lg-3" v-if="selectReligiao == 'Outro'">
                    <input type="text" class="form-control" v-model="textReligiao" placeholder="Digite sua religião *">
                </div>   

                <div class="col-2 col-lg-1" v-if="selectReligiao == 'Outro'">
                    <div class="btn btn-primary" @click="voltarReligiao()"><i class="fas fa-chevron-up"></i></div>
                </div>        

            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <input type="text" v-model="inputs.cep" v-on:keyup="buscar()" class="form-control" v-mask="'#####-###'" placeholder="CEP *">
                </div>
                <div class="col-12 col-lg-4">
                    <input type="text" v-model="endereco.bairro" class="form-control" placeholder="Bairro *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <input type="text" v-model="endereco.logradouro" class="form-control" placeholder="Logradouro *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <input type="text" v-model="inputs.numero" class="form-control" placeholder="Número *">
                </div>
                <div class="col-12 col-lg-4">
                    <input type="text" v-model="inputs.complemento" class="form-control" placeholder="Complemento">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <!-- municipio no banco de dados -->
                    <input type="text" v-model="endereco.localidade " class="form-control" placeholder="Município *">
                </div>
                <div class="col-12 col-lg-4">
                    <!-- estado no banco de dados -->
                    <input type="text" name="estado" v-model="endereco.uf" placeholder="Estado*" class="form-control">
    
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <!-- municipio no banco de dados -->
    
                    <select name="possui_filhos" v-model="inputs.possui_filhos" class="form-control">
                            <option disabled value="" >Possui Filhos? *</option>
                            <option>Sim</option>
                            <option>Não</option>
                          </select>
                </div>
                <div class="col-12 col-lg-4">
                    <!-- estado no banco de dados -->
                    <input type="number" name="quantos_filhos" v-model="inputs.quantos_filhos" placeholder="Se sim, quantos filhos?" class="form-control">
    
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <select name="fumante" v-model="inputs.fumante" class="form-control" id>
                            <option disabled value="" >É Fumante? *</option>
                            <option>Sim</option>
                            <option>Não</option>
                          </select>
                </div>
                <div class="col-12 col-lg-4">
                    <select name="bebida" v-model="inputs.bebida" class="form-control" id>
                            <option disabled value="">Consome Bebida Alcólica? *</option>
                            <option>Não</option>
                            <option>Raramente</option>
                            <option>Socialmente</option>
                            <option>Mais que socialmente</option>
                          </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <select name="droga" v-model="inputs.drogas" class="form-control" id>
                            <option value>Possui dependencia em drogas? *</option>
                            <option>Sim</option>
                            <option>Não</option>
                          </select>
                </div>
                <div class="col-12 col-lg-4">
                    <input type="text" v-model="inputs.qual_droga" class="form-control" placeholder="Se sim, qual droga?">
                </div>
            </div>
    
           
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <textarea rows="3" v-model="inputs.outro_vicio" class="form-control" placeholder="Caso possua outro vicio, indique aqui"></textarea>
                </div>
                <div class="col-12 col-lg-4">
                    <textarea rows="3" v-model="inputs.tratamento" class="form-control" placeholder="Se está sob tratamento médico, indique aqui"></textarea>
                </div>
            </div>

             <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <textarea rows="3" class="form-control" v-model="inputs.recorrer" placeholder="O que levou a recorrer ao Acolher? Aponte resumidamente os seus 3 principais problemas: *"></textarea>
                </div>
            </div>
    

            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8 text-center text-primary">Selecione os lugares que frequenta/frequentou</div>
                
                
                <div class="col-12 col-lg-8">
                    <div class="card">
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">
                                        
                                        <select v-model="inputs.kardecista" class="form-control">
                                            <option value>Kardecista / Espírita?</option>
                                            <option>Nunca</option>
                                            <option>Apenas uma vez</option>
                                            <option>Regularmente</option>
                                        </select>

                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">                                        
                                        <select v-model="inputs.casa_apometria" class="form-control">
                                            <option value>Casa Apômetra?</option>
                                            <option>Nunca</option>
                                            <option>Apenas uma vez</option>
                                            <option>Regularmente</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">
                                         <select v-model="inputs.casa_umbandista" class="form-control">
                                            <option value>Casa Umbandista?</option>
                                            <option>Nunca</option>
                                            <option>Apenas uma vez</option>
                                            <option>Regularmente</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8 text-center text-primary">Possui conhecimentos sobre:</div>
                <div class="col-12 col-lg-8">
                    <div class="card">
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">                                       
                                        <select v-model="inputs.doutrina_kardecista" class="form-control">
                                            <option value>Doutrina Kardecista / Espírita?</option>
                                            <option>Sim, superficial</option>
                                            <option>Sim, considerável</option>
                                            <option>Sim, profundo</option>
                                            <option>Não</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">                                       
                                        <select v-model="inputs.principios_umbanda" class="form-control">
                                            <option value>Principios da Umbanda?</option>
                                            <option>Sim, superficial</option>
                                            <option>Sim, considerável</option>
                                            <option>Sim, profundo</option>
                                            <option>Não</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">
                                        <select v-model="inputs.apometria_codificada" class="form-control">
                                            <option value>Apometria codificada pelo Dr. Lacerda?</option>
                                            <option>Sim, superficial</option>
                                            <option>Sim, considerável</option>
                                            <option>Sim, profundo</option>
                                            <option>Não</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8 text-center text-primary">Selecione os livros que já leu:</div>
                <div class="col-12 col-lg-8">
                    <div class="card">
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.livro_espiritos" class="form-check-input" id="livro_espiritos" name="livro_espiritos">
                                        <label class="form-check-label" for="livro_espiritos">Livro dos Espíritos</label>
                                    </div>
                                </div>
    
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.livro_medius" class="form-check-input" id="livro_medius" name="livro_medius">
                                        <label class="form-check-label" for="livro_medius">Livro dos Médiuns</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.livro_evangelho" class="form-check-input" id="livro_evangelho" name="livro_evangelho">
                                        <label class="form-check-label" for="livro_evangelho">Livro o Evangelho Segundo o Espiritismo?</label>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.livro_medicina" class="form-check-input" id="livro_medicina" name="livro_medicina">
                                        <label class="form-check-label" for="livro_medicina">Espirito e Matéria: Um Novo Horizonte para a
                                      Medicina?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <input type="text" v-model="inputs.outros_livros" class="form-control" placeholder="Caso deseje, indique outros livros espiritualistas que já tenha lido.">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <select class="form-control" v-model="inputs.como_soube">
                          <option disabled value="">Como soube do Acolher? *</option>        
                            <option>Parente</option>          
                            <option>Amigo</option>      
                            <option>Conhecido</option>            
                            <option>Site</option>            
                            <option>Whatsapp</option>            
                            <option>Instagram</option>            
                            <option>Facebook</option>            
                            <option>Youtube</option>            
                            <option>Outros</option>
                        </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <select class="form-control" v-model="inputs.indicacao">
                            <option disabled value="">Caso tenha recebido uma indicação assinale abaixo:</option>
                            <option value="Tratou-se de indicação de frequentador do Acolher">Tratou-se de indicação de frequentador do Acolher</option>
                            <option value="Tratou-se de indicação de Obreiro do Acolher">Tratou-se de indicação de Obreiro do Acolher</option>
                  
                    
                    <option value="Outros">Outros</option>
                          </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <input type="text" v-model="inputs.nome_indicacao" class="form-control" placeholder="informe o nome da pessoa que lhe indicou o Acolher">
                </div>
            </div>
    
            <div v-if="menor">
               <h5 class="text-center"> Dados do responsável </h5>
                <div class="row justify-content-center row-space-form">
                     
                    <div class="col-12 col-lg-8">
                        <input type="text" v-model="inputs.nome_responsavel" class="form-control" placeholder="Nome Completo do Responsável pelo(a) menor a ser atendido(a) *">            
                    </div>
                </div>

                <div class="row justify-content-center row-space-form">
                    <div class="col-12 col-lg-4">
                        <input type="text" v-model="inputs.cpf_responsavel" v-mask="'###.###.###.##'" placeholder="CPF do Responsável pelo(a) menor a ser atendido(a)" class="form-control">
                    </div>
                    <div class="col-12 col-lg-4">
                        <input type="text" v-model="inputs.rg_responsavel" v-mask="'##.###.###-#'" placeholder="RG do Responsável pelo(a) menor a ser atendido(a) *" class="form-control">
                    </div>
                </div>

                <div class="row justify-content-center row-space-form">
                    <div class="col-12 col-lg-4">
                        <input type="text" v-model="inputs.telefone_responsavel" v-mask="'(##) ####-####'" placeholder="Telefone Fixo do Responsável pelo(a) menor a ser atendido(a)" class="form-control">
                    </div>
                    <div class="col-12 col-lg-4">
                        <input type="text" v-model="inputs.celular_responsavel" v-mask="'(##) #####-####'" placeholder="Telefone Celular do Responsável pelo(a) menor a ser atendido(a) *" class="form-control">
                    </div>
                </div>

                 <div class="row justify-content-center row-space-form">
                     
                    <div class="col-12 col-lg-8">
                        <input type="text" v-model="inputs.email_responsavel" class="form-control" placeholder="E-mail do Responsável pelo(a) menor a ser atendido(a) *">            
                    </div>
                </div>
            </div>

            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8 text-center text-primary">Digite a senha para acesso ao site acolher</div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-4">
                    <input type="password" v-model="inputs.password" class="form-control" placeholder="Senha *">
                </div>

                <div class="col-12 col-lg-4">
                    <input type="password" v-model="confirmarPassword" class="form-control" placeholder="Confirme a senha *">
                </div>
            </div> 

            
    
    
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <h5 class="text-center">Declaração</h5>
                    <p>
    
                        Ao preencher e enviar o presente formulário, declaro ser de minha livre e espontânea vontade ser atendido(a) no Acolher - Instituto Kardecista de Estudos e Amparo, nesta oportunidade e sempre que aqui retornar, bem como atesto estar sendo orientado a
                        não inciar, alterar, suspender ou interromper qualquer tratamento médico ou medicação, o que deve ocorrer única e exclusivamente sob orientação e prescrição médicas. Declaro ainda ser de minha única responsabilidade meus atos e deliberações
                        acerca de qualquer tema referente a assuntos particulares e/ou profissionais, de saúde física, mental e espiritual.
                    </p>
                </div>
            </div>
    
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-lg-8">
                    <button @click="registrar()" type="submit" class="btn btn-primary">Cadastrar</button>
                </div>
            </div>
            <div v-if="!validarCpf" class="row justify-content-center row-space-form">
                <div class="alert alert-danger" role="alert">
                    CPF Incorreto
                </div>
            </div>

            <div class="row justify-content-center" v-if="!senhasIguais">
                 <div class="alert alert-danger" role="alert">
                    Você digitou senhas diferentes, por favor digite novamente.
                </div>                
            </div>


             <div class="row justify-content-center" v-if="this.menor && responsavelValidado === false">
                 <div class="alert alert-danger" role="alert">
                    Por favor preencha o cadastro com as informações do responsavel.
                </div>                
            </div>



            
            
            <!-- <div v-if="required == false" class="row justify-content-center row-space-form">
                <div class="alert alert-danger" role="alert">
                    Por favor, preencha todos os campos obrigatórios *
                </div>
            </div> -->
            <div v-if="erros" class="row justify-content-center row-space-form">
                <div class="alert alert-danger" role="alert">
                    <ul>
                        <li v-for="error in register.data.erros">
                            {{error[0].message}} 
                            </li>
                        </ul>
                     
                </div>
            </div>
        </div>
        <Footer>
    
        </Footer>
    </div>
</template>

<script>
import NavHeader from "./../layouts/NavHeader";
import Footer from "./../layouts/Footer";
import $ from "jquery";

import {
    mapState,
    mapActions,
} from 'vuex'

import { mask } from "vue-the-mask";
import { reject } from 'q';

import validarCpf from 'validar-cpf'

export default {
    name: "Register",
    components: {
        NavHeader,
        Footer
    },
    data() {
        return {
            inputs: {},
            tipo_pagamento: "",
            selected: false,
            required: true,
            endereco: {},
            validarCpf: true,
            menor: false,
            selectGenero: "",
            textGenero: "",
            selectReligiao: "",
            textReligiao: "",
            erros: false,
            confirmarPassword: "",
            senhasIguais: true,
            responsavelValidado: true,
        }
    },
    methods: {
        ValidarResponsavel(){
            console.log('validando o responsavel')
            if(this.menor){
                if(this.inputs.nome_responsavel && this.inputs.rg_responsavel && this.inputs.celular_responsavel && this.inputs.email_responsavel){
                    this.responsavelValidado = true
                }else{
                    this.responsavelValidado = false
                }
            }else{
                this.responsavelValidado = true
            }

            console.log(this.responsavelValidado)
        },
        validarSenha(){
             if((this.confirmarPassword > '') && (this.confirmarPassword !== this.inputs.password)){
                 this.senhasIguais = false
             }else if((this.confirmarPassword == '') && (this.confirmarPassword !== this.inputs.password)){
                 this.senhasIguais = false
             }
             else if((this.confirmarPassword > '') && (this.confirmarPassword === this.inputs.password)){
                  this.senhasIguais = true
             }
        },
        emailCadastro(){
            this.EmailCadastroConcluido()
        },
        selectInputs() {
            this.selected = true
        },
        ...mapActions([
            'Register',
            'EmailCadastroConcluido',
        ]),
        buscar: function() {

            var self = this;

            self.naoLocalizado = false;

            if (/^[0-9]{5}-[0-9]{3}$/.test(this.inputs.cep)) {
                $.getJSON("https://viacep.com.br/ws/" + this.inputs.cep + "/json/", function(endereco) {
                    if (endereco.erro) {
                        self.endereco = {};
                        $("#inputLogradouro").focus();
                        self.naoLocalizado = true;
                        return;
                    }

                    self.endereco = endereco;
                    self.inputs.logradouro = endereco.logradouro

                    self.inputs.bairro = endereco.bairro
                    self.inputs.estado = endereco.uf

                    self.inputs.municipio = endereco.localidade

                    // console.log(self.inputs);
                    $("#inputNumero").focus();
                });
            }

        },
        consoleReligiao(){
            console.log(this.inputs.religiao)
        },
        voltarReligiao(){
            if(this.selectReligiao === 'Outro'){
                this.selectReligiao = ''
                this.textReligiao = ''
                this.inputs.religiao = this.selectReligiao 
            }else{
                this.inputs.religiao  = this.textReligiao
            }
        },
        consoleGenero(){
            console.log(this.inputs.genero)
        },        
        voltarGenero(){
            if(this.selectGenero === 'Outros'){
                this.selectGenero = ''
                this.textGenero = ''
                this.inputs.genero = this.selectGenero 
            }else{
                this.inputs.genero  = this.textGenero
            }
        },
        checkRequired() {
            
            this.ValidarResponsavel()         


             this.validarSenha()
            if (this.inputs.cpf) {
                this.validarCpf = validarCpf(this.inputs.cpf);
            } else {
                this.validarCpf = validarCpf('000.000.000.00');
            }
            if (this.validarCpf) {
                this.required = true               
            } else { 
                this.required = false
                console.log("Vazio")
            }
        },
        registrar() {

            this.checkRequired()
               

            if (this.required && this.senhasIguais === true && this.responsavelValidado === true) {
                this.Register(this.inputs)
                // console.log(this.inputs)               
            } else {
                console.log("não registrado, com erros")
            }
        },
        verificarIdade(){
            

        if(this.inputs.data_nascimento){
            if(this.inputs.data_nascimento.length == 10){
       
             var nascimento = this.inputs.data_nascimento.split("/");
            var dataNascimento = new Date(parseInt(nascimento[2], 10),
                        parseInt(nascimento[1], 10) - 1,
                        parseInt(nascimento[0], 10));

            var diferenca = Date.now() -  dataNascimento.getTime();
            var calIdade = new Date(diferenca); 
            var idade = Math.abs(calIdade.getUTCFullYear() - 1970);

            if(idade < 18){
                this.menor = true               
            }else{
                this.menor = false
            }
            //  console.log(this.menor)

        }
        }
             


        }
    },
    computed: {
        ...mapState({
            register: state => state.Login.register,
        })
    },
    watch: {

        // FUNCIONAR O SELECT INPUT
         textReligiao(){
             this.inputs.religiao = this.textReligiao
        },
        selectReligiao(){
            if(this.selectReligiao === 'Outro'){
                this.inputs.religiao = this.textReligiao
            }else{
                this.inputs.religiao  = this.selectReligiao
            }
        },

        textGenero(){
             this.inputs.genero = this.textGenero
        },
        selectGenero(){
            if(this.selectGenero === 'Outros'){
                this.inputs.genero = this.textGenero
            }else{
                this.inputs.genero  = this.selectGenero
            }
        },
        required: function(val) {},
        register: function(val) {

            console.log(this.register.data.cpf)
            if (!this.register.data.cpf && !this.register.data.email) {
                

                 if(this.register.data.message == "Cadastrado" ){
                     console.log('roteando')
                    this.$router.push({ name: 'atendimento' });
                }
                // 
            }

             if(this.register.data.erros){
                    this.erros = true
                }

               

        }

    },
    created(){

    },
    beforeMount() {


        
        this.inputs.genero = this.selectGenero
        this.inputs.religiao = this.selectReligiao

        this.selectInputs()
        this.inputs.estado_civil = ''

        this.inputs.casa_umbandista = ''
        this.inputs.casa_apometria = ''
        this.inputs.doutrina_kardecista = ''
   
        this.inputs.apometria_codificada = ''
        this.inputs.principios_umbanda = ''
        this.inputs.kardecista = ''
        this.inputs.fumante = ''
        this.inputs.bebida = ''
        this.inputs.drogas = ''
        this.inputs.como_soube = ''
        this.inputs.indicacao = ''
        this.inputs.possui_filhos = ''


        // this.endereco.logradouro = this.inputs.logradouro
        // this.endereco.bairro = this.inputs.bairro
        // this.endereco.uf = this.inputs.estado

        // this.endereco.localidade = this.inputs.municipio


    },
    directives: { mask }
};
</script>