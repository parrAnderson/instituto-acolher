<template>
    <div>
        <nav-header></nav-header>
        <div class="container">
    
            <div v-if="atendimento.data.data" class="row row-space justify-content-center">
                <div class="col-8">
                    <div class="alert alert-success text-center" role="alert">
                        <p>Mensagem enviada com sucesso! <br> 
                        Obrigado pelo contato. <br>
                            Você receberá uma mensagem via Whatsapp indicando a data do seu atendimento. <br>
                            Nossos votos de muita Paz! <br>
                            Acolher - Instituto Kardecista de Estudos e Amparo</p>
                    </div>
    
                </div>
            </div>
     
            <div class="row row-space">
                <div class="col-12">
                    <h4 class="text-center">Solicitação de Atendimento</h4>
                </div>
            </div>
            <div class="row row-space justify-content-center row-space-form">
                <div class="col-8">
                    <select name="atividade" v-model="inputs.tipo_atendimento" class="form-control" id>
                <option disable value="" >Indique a atividade de qual pretende receber atendimento *</option>

                <option value="Apometria (2as. feiras)">Apometria (2as. feiras)</option>        
                <option value="Prática do Evangelho (5as. feiras)">Prática do Evangelho (5as. feiras)</option>
                <!-- <option value="Atendimento Fraterno (5as. feiras)">Atendimento Fraterno (5as. feiras)</option> -->
                <option value="Obreiros da Luz - Entidades de Umbanda(1 Sábado por mês)">Obreiros da Luz - Entidades de Umbanda (1 Sábado por mês)</option>

              </select>
                </div>
            </div>
    
            <input type="hidden" v-model="inputs.user_id">
    
            <div class="row justify-content-center row-space-form">
                <div class="col-8 text-right">
                    <button @click="agendar()" type="submit" class="btn btn-primary">Cadastrar</button>
                    <!-- <button @click="pegarAtendimento()" type="submit" class="btn btn-primary">Pegar</button> -->
                </div>
            </div>

            <div class="row justify-content-center row-space">
              <div class="col-8">
                <table class="table table table-striped">
                <tr>
                  <td>
                    Tipo de atendimento
                  </td>
                  <td>
                    Data da solicitação
                  </td>
                  <td>
                    Data que será feito
                  </td>
                  <td>
                    Horario que será feito
                  </td>
                </tr>
                <tr v-for="solicitacao in atendimento.solicitacoes">
                  <td>
                      {{solicitacao.tipo_atendimento}}
                  </td>
                  <td>
                    {{solicitacao.created_at | date}}
                  </td>
                  <td>
                    {{solicitacao.data_atendimento | date}}
                  </td>
                  <td>
                    {{solicitacao.hora_atendimento}}
                  </td>
                </tr>
              </table>
              </div>
            </div>
    
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import moment from 'moment'
import { mapState, mapActions } from "vuex"
import NavHeader from "./../layouts/NavHeader";
import Footer from "./../layouts/Footer";
export default {
    name: "Atendimento",
    components: {
        NavHeader,
        Footer
    },
    data() {
        return {
            inputs: {},

        }
    },
    computed: {
        ...mapState({
            login: state => state.Login.data,
            atendimento: state => state.Atendimento,
        })
    },
    watch: {
        atendimento() {

            console.log("bai seu")
        },

    },
    methods: {
        ...mapActions([
            'CadastrarAtendimento',
            'GetAtendimento',
        ]),
        agendar() {
            this.CadastrarAtendimento(this.inputs)
        },
        pegarAtendimento() {

        },
    },filters: {    
    date: function(value) {
        moment.locale("pt-br");
        if (!value) return "";
        let data = moment(value).format('L');      
        return data
    }
  },
    beforeMount() {
        if (!this.login.id) {
            this.$router.push({ name: 'login' });
        }
        this.inputs.user_id = this.login.id;

        this.inputs.tipo_atendimento = ""

        if (this.login.id) {
            this.GetAtendimento(this.login.id);
        }



    }


}
</script>

