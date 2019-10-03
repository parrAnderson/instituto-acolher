<template>
    <div>
        <nav-header></nav-header>
        <div class="container">

            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                        <h5 class="modal-title text-center" id="exampleModalLabel">ATUALIZE AS INFORMAÇÔES</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div v-if="!cadastrado">
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
                                        <option disabled value="">Possui dependencia em drogas? *</option>
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </select>
                            </div> 
                            <div class="col-4">
                                <input type="text" v-model="inputs.qual_droga" class="form-control" placeholder="Se sim, qual droga?">
                            </div>
                        </div>
                
                        <div class="row justify-content-center row-space-form">
                            <div class="col-8">
                                <textarea rows="3" class="form-control" v-model="inputs.recorrer" placeholder="O que levou a recorrer ao Acolher? Aponte resumidamente os seus 3 principais problemas: *"></textarea>
                            </div>
                        </div>
                
                        <div class="row justify-content-center row-space-form">
                            <div class="col-8">
                                <textarea rows="3" v-model="inputs.outro_vicio" class="form-control" placeholder="Caso possua outro vicio, indique aqui"></textarea>
                            </div>                
                        </div>
                        <div class="row justify-content-center row-space-form">
                            <div class="col-8">
                                <textarea rows="3" v-model="inputs.tratamento" class="form-control" placeholder="Se está sob tratamento médico, indique aqui."></textarea>
                            </div>                
                        </div>
                        <br>
                        <div class="row justify-content-right row-space-form">
                            <div class="col-10 text-right">
                                    <button @click="agendar()" type="submit" class="btn btn-primary">AGENDAR</button>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-10 text-center">
                                <p v-if="required === false">Campos obrigatórios (*)</p>
                            </div>
                        </div>
                        <br>

                    </div>

                    <div v-if="cadastrado" class="row row-space justify-content-center">
                        <div class="col-8">
                            <div class="alert alert-success text-center" role="alert">
                                <p>Mensagem enviada com sucesso! <br> 
                                Obrigado pelo contato. <br>
                                    Você receberá uma mensagem via Whatsapp indicando a data do seu atendimento. <br>
                                    Nossos votos de muita Paz! <br>
                                    Acolher - Instituto Kardecista de Estudos e Amparo</p>
                            </div>
                            
                            <div class="btn btn-primary text-right" type="button"  data-dismiss="modal" @click="closeModal()">
                                FECHAR
                            </div>
            
                        </div>
                </div>
                <div class="row row-space">
                    <!-- Espaçamento -->
                </div>
            </div>
        </div>
    </div>
     
            <div class="row row-space">
                <div class="col-12">
                    <h4 class="text-center">Solicitação de Atendimento</h4>
                </div>
            </div>
            <div class="row row-space justify-content-center row-space-form">
                <div class="col-12 col-md-8 col-lg-8">
                    <select name="atividade" v-model="inputs.tipo_atendimento" class="form-control" id>
                        <option disable value="" >Indique a atividade de qual pretende receber atendimento *</option>

                        <option value="Apometria (2as. feiras)">Apometria (2as. feiras)</option>        
                        <option value="Passes (2as. feiras)">Passes (2as. feiras)</option>  
                        <option value="Prática do evangelho - Reunião Espírita (5as. feiras)">Prática do evangelho - Reunião Espírita (5as. feiras)</option>
                        <!-- <option value="Atendimento Fraterno (5as. feiras)">Atendimento Fraterno (5as. feiras)</option> -->
                        <option value="Obreiros da Luz - Entidades de Umbanda(1 Sábado por mês)">Obreiros da Luz - Entidades de Umbanda (1 Sábado por mês)</option>

                     </select>
                </div>
            </div>
    
            <input type="hidden" v-model="inputs.user_id">    
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-md-8 col-lg-8 text-right">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">CADASTRAR</button>


                    <!-- <button @click="pegarAtendimento()" type="submit" class="btn btn-primary">Pegar</button> -->
                </div>
            </div>
            
            <div class="row row-space justify-content-center">
              <div class="col-12">
            <div class="table-responsive-sm">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th>
                            Tipo
                        </th>
                        <th>
                            Data de solicitação
                        </th>
                        <th>
                            Data que será feito
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="solicitacao in atendimento" :key="solicitacao.id">
                        <td>
                            {{solicitacao.tipo_atendimento}}
                        </td>
                        <td>
                            {{solicitacao.created_at | date}}
                        </td>
                        <td>
                            {{solicitacao.data_atendimento | date}}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
            required: {},
           

        }
    },
    computed: {
        ...mapState({
            login: state => state.Login.data,
            atendimento: state => state.Atendimento.solicitacoes,
            cadastrado: state => state.Atendimento.data.data,
        })
    },
    watch: {
        login(){
            this.GetAtendimento(this.login.id);
               this.inputs.user_id = this.login.id;
    }
   

    },
    methods: {
        closeModal(){
          this.LimparAtendimento()


          this.inputs.fumante = '' 
        this.inputs.bebida = ''
        this.inputs.drogas = ''

        this.inputs.outro_vicio = ''
        this.inputs.qual_droga = ''
        this.inputs.tratamento = ''
        this.inputs.recorrer = ''

         
        },
        ...mapActions([
            'CadastrarAtendimento',
            'GetAtendimento',
            'LimparAtendimento',
        ]),
        checkRequired(){
            if(this.inputs.fumante &&
                this.inputs.bebida &&
                this.inputs.drogas &&
                this.inputs.recorrer &&
                this.inputs.tipo_atendimento              
                ){
                    this.required =  true
                     console.log("preenchido")
                }else{
                    this.required = false
                    console.log("Vazio")
                }
        },

        agendar() {
            this.checkRequired()

            if(this.required){
                this.CadastrarAtendimento(this.inputs)
                this.GetAtendimento(this.login.id);
            }
            
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
  mounted(){
      this.inputs.outro_vicio = ''
        this.inputs.qual_droga = ''

           this.inputs.user_id = this.login.id;
  },
    beforeMount() {
        // if (!this.login.id) {
        //     this.$router.push({ name: 'login' });
        // }
     

        this.inputs.tipo_atendimento = ""

        if (this.login.id) {
            this.GetAtendimento(this.login.id);
        }

          this.inputs.fumante = ''
        this.inputs.bebida = ''
        this.inputs.drogas = ''

        this.inputs.outro_vicio = ''
        this.inputs.qual_droga = ''


    }


}
</script>

