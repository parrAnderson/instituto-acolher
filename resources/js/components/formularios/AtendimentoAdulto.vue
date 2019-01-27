<template>
  <div>
    <nav-header></nav-header>
    <div class="container">
      <div class="row row-space">
        <div class="col-12">
          <h4 class="text-center">Cadastro</h4>
        </div>
      </div>

      <div class="row row-space justify-content-center row-space-form">
        <div class="col-8">
          <select name="atividade" class="form-control" id>
            <option disable>Indique a atividade de qual pretende receber atendimento *</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <input type="text" class="form-control" placeholder="Nome Completo da Pessoa a ser Atendida *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text" class="form-control" v-mask="'##/##/####'" placeholder="Data de Nascimento*">
        </div>
        <div class="col-4">
          <select name="genero" class="form-control" id>
            <option disable>Gênero *</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text" class="form-control" v-mask="'###.###.###.##'" placeholder="CPF *">
        </div>
        <div class="col-4">
          <input type="text" class="form-control" v-mask="'##.###.###.#'" placeholder="RG *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text" class="form-control" v-mask="'(##)#####-####'" placeholder="Telefone Celular">
        </div>
        <div class="col-4">
          <input type="text" class="form-control" v-mask="'(##)####-####'" placeholder="Telefone Fixo">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <input type="text" class="form-control" placeholder="Email *">
        </div>
      </div>

      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <select name="estadocivil" class="form-control" id>
            <option disable>Estado Civil *</option>
          </select>
        </div>
        <div class="col-4">
          <select name="religiao" class="form-control" id>
            <option disable>Religião *</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text" class="form-control" v-mask="'#####-###'" placeholder="CEP *">
        </div>
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Bairro *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <input type="text" class="form-control" placeholder="Logradouro">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Número *">
        </div>
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Complemento *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Município *">
        </div>
        <div class="col-4">
          <select name="estado" class="form-control" id>
            <option disable>Estado *</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <select name="fumante" class="form-control" id>
            <option disable>É Fumante? *</option>
          </select>
        </div>
        <div class="col-4">
          <select name="bebida" class="form-control" id>
            <option disable>Consome Bebida Alcólica? *</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <textarea rows="3" class="form-control" placeholder="Caso possua outro vicio, indique aqui"></textarea>
        </div>
        <div class="col-4">
          <textarea rows="3" class="form-control" placeholder="Se está sob tratamento médico, indique aqui"></textarea>
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
                    <input type="checkbox" class="form-check-input" name="kardecista" id="kardecista">
                    <label class="form-check-label" for="kardecista">Kardecista / Espírita?</label>
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
          <input type="text" class="form-control" placeholder="Caso deseje, indique outros livros espiritualistas que já tenha lido.">
        </div>
      </div>

      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <input type="text" class="form-control" placeholder="Como soube do Acolher? *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <select class="form-control" id>
            <option disable>Caso tenha recebido uma indicação assinale abaixo:</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <input type="text" class="form-control" placeholder="informe o nome da pessoa que lhe indicou o Acolher *">
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-8">
          <textarea rows="3" class="form-control" placeholder="O que levou a recorrer ao Acolher? Aponte resumidamente os seus 3 principais problemas: *"></textarea>
        </div>
      </div>
      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <select name="obreiro" class="form-control" id>
            <option value>Você é obreiro?</option>
            <option>Sim *</option>
            <option>Não *</option>
          </select>
        </div>
        <div class="col-4">
          <input type="number" class="form-control" placeholder="Possui algum numero de obreiro?">
        </div>
      </div>

      <div class="row justify-content-center row-space-form">
        <div class="col-4">
          <select name="droga" class="form-control" id>
            <option value>Possui dependencia em drogas?</option>
            <option>Sim *</option>
            <option>Não *</option>
          </select>
        </div>
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Se sim, qual droga?">
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
    directives: { mask }
  };
</script>