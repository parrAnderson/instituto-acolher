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
          <input type="text" class="form-control" v-model="inputs.nome" placeholder="Nome Completo da Pessoa a ser Atendida *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text" class="form-control" v-model="inputs.data_nascimento" v-mask="'##/##/####'" placeholder="Data de Nascimento*">
        </div>
        <div class="col-4">        
          <select name="genero" v-if="selected" v-model="genero" class="form-control">
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
          <input type="text" class="form-control" v-model="inputs.celular" v-mask="'(##)#####-####'" placeholder="Telefone Celular">
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
            <option disable>Estado Civil *</option>
             <option>Solteiro(a)</option>                    
            <option>Casado(a)</option>                      
            <option>União Estável</option>                      
            <option >Separado(a) / Divorciado(a)</option>                      
            <option>Viúvo</option>                      
            <option>Outros</option>
          </select>
        </div>
        <div class="col-4">
          <select name="religiao" v-model="inputs.religiao" class="form-control" id>
            <option disable>Religião *</option>
            <option>Kardecista / Espírita</option>          
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
          <input type="text"  v-model="inputs.logradouro" class="form-control" placeholder="Logradouro">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text"  v-model="inputs.numero" class="form-control" placeholder="Número *">
        </div>
        <div class="col-4">
          <input type="text"  v-model="inputs.complemento" class="form-control" placeholder="Complemento *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text"  v-model="inputs.municipio" class="form-control" placeholder="Município *">
        </div>
        <div class="col-4">
          <select name="estado"  v-model="inputs.estado"  class="form-control" id>
            <option disable>Estado *</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <select name="fumante"  v-model="inputs.fumante"  class="form-control" id>
            <option disable>É Fumante? *</option>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
        <div class="col-4">
          <select name="bebida"  v-model="inputs.bebida"  class="form-control" id>
            <option disable>Consome Bebida Alcólica? *</option>
            <option>Não</option>
            <option>Raramente</option>
            <option>Socialmente</option>
            <option>Mais que socialmente</option>
          </select>
        </div>
      </div>

   <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <select name="droga"  v-model="inputs.droga" class="form-control" id>
            <option value>Possui dependencia em drogas?</option>
            <option>Sim *</option>
            <option>Não *</option>
          </select>
        </div>
        <div class="col-4">
          <input type="text"  v-model="inputs.qual_droga" class="form-control" placeholder="Se sim, qual droga?">
        </div>
      </div>

      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <textarea rows="3"  v-model="inputs.outro_vicio"  class="form-control" placeholder="Caso possua outro vicio, indique aqui"></textarea>
        </div>
        <div class="col-4">
          <textarea rows="3"  v-model="inputs.tratamento"  class="form-control" placeholder="Se está sob tratamento médico, indique aqui"></textarea>
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
                    <input type="checkbox" v-model="inputs.kardecista"  class="form-check-input" name="kardecista" id="kardecista">
                    <label class="form-check-label"   for="kardecista">Kardecista / Espírita?</label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="casa_apometria" name="casa_apometria">
                    <label class="form-check-label" for="casa_apometria">Casa de Apômetra?</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row row-space-form">
                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="casa_umbandista" name="casa_umbandista">
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
                    <input type="checkbox" class="form-check-input" id="doutrina_kardecista" name="doutrina_kardecista">
                    <label class="form-check-label" for="doutrina_kardecista">Doutrina Kardecista / Espírita?</label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="principios_umbanda" name="principios_umbanda">
                    <label class="form-check-label" for="principios_umbanda">Principios da Umbanda?</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row row-space-form">
                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="apometria_codificada" name="apometria_codificada">
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
                    <input type="checkbox" class="form-check-input" id="livro_espiritos" name="livro_espiritos">
                    <label class="form-check-label" for="livro_espiritos">Livro dos Espíritos</label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="apometria" name="apometria">
                    <label class="form-check-label" for="apometria">Livro dos Médiuns</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row row-space-form">
                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="livro_evangelho" name="livro_evangelho">
                    <label class="form-check-label" for="livro_evangelho">Livro o Evangelho Segundo o Espiritismo?</label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="livro_medicina" name="livro_medicina">
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
          <input type="text"  v-model="inputs.outros_livros" class="form-control" placeholder="Caso deseje, indique outros livros espiritualistas que já tenha lido.">
        </div>
      </div>

        <div class="row row-space justify-content-center row-space-form">
        <div class="col-8">
          <select name="atividade"  v-model="inputs.atividade"  class="form-control" id>
            <option disable>Indique a atividade de qual pretende receber atendimento *</option>
          </select>
        </div>
      </div>


      <div class="row justify-content-center row-space-form">
        <div class="col-8">
            
<select  class="form-control"  v-model="inputs.como_soube" >
          <option disabled>Como soube do Acolher? *</option>        
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
          <select class="form-control"  v-model="inputs.indicacao" >
            <option disable>Caso tenha recebido uma indicação assinale abaixo:</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <input type="text"  v-model="inputs.nome_indicacao"  class="form-control" placeholder="informe o nome da pessoa que lhe indicou o Acolher *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <textarea rows="3" class="form-control"  v-model="inputs.recorrer" placeholder="O que levou a recorrer ao Acolher? Aponte resumidamente os seus 3 principais problemas: *"></textarea>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <select name="obreiro"  v-model="inputs.obreiro"  class="form-control" id>
            <option value>Você é obreiro?</option>
            <option>Sim *</option>
            <option>Não *</option>
          </select>
        </div>
        <div class="col-4">
          <input type="number"  v-model="inputs.numero_obreiro" class="form-control" placeholder="Possui algum numero de obreiro?">
        </div>
         
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <button @click="registrar()" type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
      </div>

     
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import NavHeader from "./../layouts/NavHeader";
  import Footer from "./../layouts/Footer";

  import { mask } from "vue-the-mask";

  export default {
    name: "AtendimentoAdulto",
    components: {
      NavHeader,
      Footer
    },
    data(){
      return{
        inputs:{},
         tipo_pagamento: "",
         genero:'',
         selected:false,
        
      }
    },
    methods:{
        registrar(){
          console.log(this.inputs)
        },
        selectInputs(){
          
          this.selected = true
        }
    },
    mounted(){
      this.selectInputs()
    },
    watch:{
      genero:function(){
        this.inputs.genero = this.genero
      },
    },
    directives: { mask }
  };
</script>