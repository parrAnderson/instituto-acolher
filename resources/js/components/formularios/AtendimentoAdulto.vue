<template>
    <div>
        <nav-header></nav-header>
        <div class="container">
            <div class="row row-space">
                <div class="col-12">
                    <h4 class="text-center">Cadastro</h4>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" class="form-control" v-model="inputs.name" placeholder="Nome Completo da Pessoa a ser Atendida *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" v-model="inputs.data_nascimento" v-mask="'##/##/####'" placeholder="Data de Nascimento*">
                </div>
                <div class="col-4">
                    <select name="genero" v-if="selected" v-model="inputs.genero" class="form-control">
                    <option selected value="" > Gênero *</option>
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outros</option>
                  </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" v-model="inputs.cpf" v-mask="'###.###.###.##'" placeholder="CPF *">
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" v-model="inputs.rg" v-mask="'##.###.###-#'" placeholder="RG *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" v-model="inputs.celular" v-mask="'(##)#####-####'" placeholder="Telefone Celular *">
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" v-model="inputs.telefone" v-mask="'(##)####-####'" placeholder="Telefone Fixo">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" v-model="inputs.email" class="form-control" placeholder="Email *">
                </div>
            </div>
    
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <select name="estado_civil" v-model="inputs.estado_civil" class="form-control" id>
                    <option disabled value="">Estado Civil *</option>
                     <option value="Solteiro(a)">Solteiro(a)</option>                    
                    <option value="Casado(a)">Casado(a)</option>                      
                    <option>União Estável</option>                      
                    <option >Separado(a) / Divorciado(a)</option>                      
                    <option>Viúvo</option>                      
                    <option>Outros</option>
                  </select>
                </div>
                <div class="col-4">
                    <select name="religiao" v-model="inputs.religiao" class="form-control" id>
                    <option disabled value="">Religião *</option>
                    <option value="Kardecista / Espírita">Kardecista / Espírita</option>          
                    <option>Umbandista</option>
                    <option>Católica</option>            
                    <option>Evangélica</option>            
                    <option>Budista</option>            
                    <option>Judaica</option>            
                    <option>Candomblé</option>
                    <option>Outros</option>
                  </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" v-model="inputs.cep" class="form-control" v-mask="'#####-###'" placeholder="CEP *">
                </div>
                <div class="col-4">
                    <input type="text" v-model="inputs.bairro" class="form-control" placeholder="Bairro *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" v-model="inputs.logradouro" class="form-control" placeholder="Logradouro *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" v-model="inputs.numero" class="form-control" placeholder="Número *">
                </div>
                <div class="col-4">
                    <input type="text" v-model="inputs.complemento" class="form-control" placeholder="Complemento *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" v-model="inputs.municipio" class="form-control" placeholder="Município *">
                </div>
                <div class="col-4">
                    <select name="estado" v-model="inputs.estado" class="form-control" id>
                    <option disabled value="">Estado *</option>
                    <option value="SP - São Paulo">SP - São Paulo</option>          
                    <option value="AC - Acre">AC - Acre</option>          
                    <option value="AL - Alagoas">AL - Alagoas</option>          
                    <option value="AP - Amapá">AP - Amapá</option>          
                    <option value="AM - Amazonas">AM - Amazonas</option>          
                    <option value="BA - Bahia">BA - Bahia</option>          
                    <option value="CE - Ceará">CE - Ceará</option>          
                    <option value="DF - Distrito Federal">DF - Distrito Federal</option>          
                    <option value="ES - Espírito Santo">ES - Espírito Santo</option>                     
                    <option value="GO - Goiás">GO - Goiás</option>          
                    <option value="MA - Maranhão">MA - Maranhão</option>          
                    <option value="MT - Mato Grosso">MT - Mato Grosso</option>          
                    <option value="MS - Mato Grosso do Sul">MS - Mato Grosso do Sul</option>          
                    <option value="MG - Minas Gerais">MG - Minas Gerais</option>          
                    <option value="PA - Pará">PA - Pará</option>          
                    <option value="PB - Paraíba">PB - Paraíba</option>          
                    <option value="PR - Paraná">PR - Paraná</option>          
                    <option value="PE - Pernambuco">PE - Pernambuco</option>          
                    <option value="PI - Piauí">PI - Piauí</option>                      
                    <option value="RJ - Rio de Janeiro">RJ - Rio de Janeiro</option>          
                    <option value="RG - Rio Grande do Norte">RG - Rio Grande do Norte</option>          
                    <option value="RS - Rio Grande do Sul">RS - Rio Grande do Sul</option>          
                    <option value="RO - Rondônia">RO - Rondônia</option>          
                    <option value="RR - Roraima">RR - Roraima</option>          
                    <option value="SC - Santa Catarina">SC - Santa Catarina</option>       
                    <option value="SE - Sergipe">SE - Sergipe</option>         
                    <option value="TO - Tocantins">TO - Tocantins</option>
                  </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <select name="fumante" v-model="inputs.fumante" class="form-control" id>
                    <option disabled value="" >É Fumante? *</option>
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
                <div class="col-4">
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
                <div class="col-4">
                    <select name="droga" v-model="inputs.drogas" class="form-control" id>
                    <option value>Possui dependencia em drogas?</option>
                    <option>Sim *</option>
                    <option>Não *</option>
                  </select>
                </div>
                <div class="col-4">
                    <input type="text" v-model="inputs.qual_droga" class="form-control" placeholder="Se sim, qual droga?">
                </div>
            </div>    
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <textarea rows="3" v-model="inputs.outro_vicio" class="form-control" placeholder="Caso possua outro vicio, indique aqui"></textarea>
                </div>
                <div class="col-4">
                    <textarea rows="3" v-model="inputs.tratamento" class="form-control" placeholder="Se está sob tratamento médico, indique aqui"></textarea>
                </div>
            </div>           
            <div class="row justify-content-center row-space-form">
                <div class="col-8 text-center text-primary">Selecione os lugares que frequenta/frequentou</div>
                <div class="col-8">
                    <div class="card">
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.kardecista" class="form-check-input" name="kardecista" id="kardecista">
                                        <label class="form-check-label" for="kardecista">Kardecista / Espírita?</label>
                                    </div>
                                </div>    
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.casa_apometria" class="form-check-input" id="casa_apometria" name="casa_apometria">
                                        <label class="form-check-label" for="casa_apometria">Casa de Apômetra?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.casa_umbandista" class="form-check-input" id="casa_umbandista" name="casa_umbandista">
                                        <label class="form-check-label" for="casa_umbandista">Casa Umbandista?</label>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
            <div class="row justify-content-center row-space-form">
                <div class="col-8 text-center text-primary">Possui conhecimentos sobre:</div>
                <div class="col-8">
                    <div class="card">
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.doutrina_kardecista" class="form-check-input" id="doutrina_kardecista" name="doutrina_kardecista">
                                        <label class="form-check-label" for="doutrina_kardecista">Doutrina Kardecista / Espírita?</label>
                                    </div>
                                </div>    
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.principios_umbanda"  class="form-check-input" id="principios_umbanda" name="principios_umbanda">
                                        <label class="form-check-label" for="principios_umbanda">Principios da Umbanda?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.apometria_codificada" class="form-check-input" id="apometria_codificada" name="apometria_codificada">
                                        <label class="form-check-label" for="apometria_codificada">Apometria codificada pelo Dr. Lacerda?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
            <div class="row justify-content-center row-space-form">
                <div class="col-8 text-center text-primary">Selecione os livros que já leu:</div>
                <div class="col-8">
                    <div class="card">
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.livro_espiritos" class="form-check-input" id="livro_espiritos" name="livro_espiritos">
                                        <label class="form-check-label" for="livro_espiritos">Livro dos Espíritos</label>
                                    </div>
                                </div>
    
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="inputs.livro_medius" class="form-check-input" id="livro_medius" name="livro_medius">
                                        <label class="form-check-label" for="livro_medius">Livro dos Médiuns</label>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div class="container">
                            <div class="row row-space-form">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox"  v-model="inputs.livro_evangelho"  class="form-check-input" id="livro_evangelho" name="livro_evangelho">
                                        <label class="form-check-label" for="livro_evangelho">Livro o Evangelho Segundo o Espiritismo?</label>
                                    </div>
                                </div>    
                                <div class="col-6">
                                    <div class="form-check">
                                        <input type="checkbox"  v-model="inputs.livro_medicina" class="form-check-input" id="livro_medicina" name="livro_medicina">
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
                <div class="col-8">
                    <input type="text" v-model="inputs.outros_livros" class="form-control" placeholder="Caso deseje, indique outros livros espiritualistas que já tenha lido.">
                </div>
            </div>              
            <div class="row justify-content-center row-space-form">
                <div class="col-8">    
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
                <div class="col-8">
                    <select class="form-control" v-model="inputs.indicacao">
                    <option disabled value="">Caso tenha recebido uma indicação assinale abaixo:</option>
                    <option value="Tratou-se de indicação de frequentador do Acolher">Tratou-se de indicação de frequentador do Acolher</option>
                    <option value="Tratou-se de indicação de Obreiro do Acolher">Tratou-se de indicação de Obreiro do Acolher</option>
          
            
            <option value="Outros">Outros</option>
                  </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" v-model="inputs.nome_indicacao" class="form-control" placeholder="informe o nome da pessoa que lhe indicou o Acolher *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <textarea rows="3" class="form-control" v-model="inputs.recorrer" placeholder="O que levou a recorrer ao Acolher? 
                  Aponte resumidamente os seus 3 principais problemas: *"></textarea>
                </div>
            </div>
           
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <button @click="registrar()" type="submit" class="btn btn-primary">Cadastrar</button>
                </div>
            </div>    
            <div v-if="required !== 'vazio'" class="row justify-content-center row-space-form">
                <div class="alert alert-danger" role="alert">
                    Por favor! Preencha todos os campos obrigatórios *
                </div>
            </div>       
            <div v-if="register.data" class="row justify-content-center row-space-form">
                <div v-if="register.data"  class="alert alert-danger" role="alert">
                    <span v-if="register.data.cpf">{{register.data.cpf[0]}}</span> | 
                    <span v-if="register.data.email">{{register.data.email[0]}}</span>                  
                </div>
            </div>        
            </div>
        <Footer></Footer>
    </div>
</template>

<script>
import NavHeader from "./../layouts/NavHeader";
import Footer from "./../layouts/Footer";
import {
    mapState,
    mapActions,
} from 'vuex'

import { mask } from "vue-the-mask";
import { reject } from 'q';

export default {
    name: "AtendimentoAdulto",
    components: {
        NavHeader,
        Footer
    },
    data() {
        return {
            inputs: {},
            tipo_pagamento: "",
            selected: false,
            required: {},
        }
    },
    methods: {
        selectInputs() {
            this.selected = true
        },
        ...mapActions([
            'Register',
        ]),
        checkRequired() {
            if (this.inputs.name &&
                this.inputs.email &&
                this.inputs.cpf &&
                this.inputs.data_nascimento &&
                this.inputs.rg &&
                this.inputs.celular &&
                this.inputs.estado_civil &&
                this.inputs.religiao &&
                this.inputs.cpf &&
                this.inputs.cep &&
                this.inputs.bairro &&
                this.inputs.numero &&
                this.inputs.complemento &&
                this.inputs.municipio &&
                this.inputs.estado &&
                this.inputs.fumante &&
                this.inputs.bebida &&
                this.inputs.drogas &&
                this.inputs.como_soube &&
                this.inputs.recorrer
            ) {
                this.required = false
                console.log("preenchido")
            } else {
                this.required = true
                console.log("Vazio")
            }
        },
        registrar() {
            this.checkRequired()
            
            if (!this.required) {
                this.Register(this.inputs)
                // console.log(this.inputs)                          
                
            } else {
                console.log("não registrado, com erros")
            }
        }
    },
    computed: {
        ...mapState({
            register: state => state.Login.register,
        })
    },
        watch: {
            required: function(val) {               
            },
            register: function(val){

                console.log(this.register.data.cpf)
                if(!this.register.data.cpf && !this.register.data.email){
                    console.log('roteando')
                    this.$router.push({ name: 'agendamento' });
                }
              
            }

        },
        beforeMount() {
            this.required = "vazio"

            this.selectInputs()
            this.inputs.estado_civil = ''
            this.inputs.religiao = ''
            this.inputs.genero = ''
            this.inputs.fumante = ''
            this.inputs.bebida = ''
            this.inputs.drogas = ''
            this.inputs.como_soube = ''
            this.inputs.indicacao = ''            
            this.inputs.estado = ''

        },
        directives: { mask }
    };
</script>