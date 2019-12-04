<template>
<div>
    <Header>
        <template v-slot:mainpage>

            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h5 class="modal-title text-center" id="exampleModalLabel">ATUALIZE AS INFORMAÇÔES</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div v-if="!atendimento_cadastrado">
                            <div class="row justify-content-center row-space-form">
                                <div class="col-4">
                                    <select name="fumante" v-model="inputs.fumante" class="form-control" id>
                                        <option disabled value="">É Fumante? *</option>
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
                                    <textarea rows="3" class="form-control" v-model="inputs.motivo" placeholder="O que levou a recorrer ao Acolher? Aponte resumidamente os seus 3 principais problemas: *"></textarea>
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
                            <div class="row justify-content-center">
                                <!-- maior -->
                                <div class="col-10" v-if="user.idade > 18">                                    
                                    Declaro ser de minha livre e espontânea vontade ser atendido(a) no Acolher - Instituto Kardecista de Estudos e Amparo, nesta oportunidade e sempre que aqui retornar, bem como atesto estar sendo orientado a não iniciar, alterar, suspender ou interromper qualquer  tratamento médico ou medicação, o que deve ocorrer única e exclusivamente sob orientação e prescrição médicas. Declaro ainda ser de minha inteira responsabilidade meus atos e deliberações acerca de qualquer tema referente a assuntos particulares e/ou profissionais e/ou concernentes às saúdes física, mental e/ou espiritual.
                                </div>
                                <div class="col-10" v-else>  
                                    Declaro ser de minha livre e espontânea vontade submeter o(a) menor sob minha responsabilidade ao atendimento no Acolher - Instituto Kardecista de Estudos e Amparo, nesta oportunidade e sempre que aqui retornar, bem como atesto estar sendo orientado a não iniciar, alterar, suspender ou interromper qualquer  tratamento médico ou medicação, o que deve ocorrer única e exclusivamente sob orientação e prescrição médicas. Declaro ainda ser de minha inteira responsabilidade atos e deliberações do menor em questão acerca de qualquer tema referente a assuntos particulares e/ou profissionais e/ou concernentes às saúdes física, mental e/ou espiritual.                                   
                                </div>
                            </div>
                            <br>
                            <div class="row justify-content-right row-space-form">
                                <div class="col-10 text-right">
                                    <button  type="submit" class="btn btn-primary btn-sm" v-if="btnAgendar" @click="agendar()">DECLARO QUE LI E ACEITO</button>
                                                                    <button  type="submit" class="btn btn-primary btn-sm btn-disable" v-else><i class="fas fa-spinner"></i> CARREGANDO </button>

                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-10 text-center">
                                    <p v-if="required === false">Campos obrigatórios (*)</p>
                                </div>
                            </div>
                            <br>

                        </div>

                        <div v-if="atendimento_cadastrado" class="row row-space justify-content-center">
                            <div class="col-8">
                                <div class="alert alert-success text-center" role="alert">
                                    <p>Mensagem enviada com sucesso! <br>
                                        Obrigado pelo contato. <br>
                                        Você receberá uma mensagem via Whatsapp indicando a data do seu atendimento. <br>
                                        Nossos votos de muita Paz! <br>
                                        Acolher - Instituto Kardecista de Estudos e Amparo</p>
                                </div>

                                <div class="btn btn-primary text-right" type="button" data-dismiss="modal" @click="closeModal()">
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
            
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Solicitação de Atendimento</h4>
                    </div>    
                <div class="card-body">
                    <div class="row row-space justify-content-center row-space-form">
                        <div class="col-12 col-md-8 col-lg-8">
                            <select name="atividade" v-model="inputs.tipo_atendimento" class="form-control" id>
                                <option disable value="">Indique a atividade de qual pretende receber atendimento *</option>
                                <option value="1">Apometria (2as. feiras)</option>
                                <option value="2">Passes (2as. feiras)</option>
                                <option value="3">Prática do evangelho - Reunião Espírita (5as. feiras)</option>
                                <option value="4">Obreiros da Luz - Entidades de Umbanda (1 Sábado por mês)</option>
                            </select>
                        </div>
                        
                    </div>
                    <input type="hidden" v-model="inputs.user_id">
                        <div class="row justify-content-center row-space-form">
                            <div class="col-12 col-md-8 col-lg-8 text-right">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" @click="limparAtendimentoCadastrado">CADASTRAR</button>

                                <!-- <button @click="pegarAtendimento()" type="submit" class="btn btn-primary">Pegar</button> -->
                            </div>
                        </div>
                </div>
            </div>           

            <div class="card">
                <div class="card-header">MINHAS SOLICITAÇÔES</div>
                <div class="card-body">
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
                                <tr v-for="solicitacao in atendimentos" :key="solicitacao.id">
                                    <td>
                                        {{solicitacao.tipo_atendimento}}
                                    </td>
                                    <td>
                                        {{solicitacao.created_at | date}}
                                    </td>
                                    <td>
                                        {{solicitacao.data_agendada | date}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
                </div>
            </div>
        </template>
    </Header>
</div>
</template>
<script>
import Header from '@/views/layouts/HeaderPublic'
import moment from 'moment'
import {
    mapState,
    mapActions
} from "vuex"
export default {
    name: "Atendimento",
    components: {
        Header,

    },
    data() {
        return {
            inputs: {},
            required: {},
            btnAgendar: true,
        }
    },
    computed: {
        ...mapState({
            userId:  state => state.Auth.userId,
            atendimentos: state => state.Atendimentos.solicitacoes_atendimento,
            atendimento_cadastrado: state => state.Atendimentos.atendimento_cadastrado,
            user: state => state.Auth.user.data,
        })
    },
    
    methods: {
        closeModal() {
            // this.LimparAtendimento()

            this.inputs.fumante = ''
            this.inputs.bebida = ''
            this.inputs.drogas = ''

            this.inputs.outro_vicio = ''
            this.inputs.qual_droga = ''
            this.inputs.tratamento = ''
            this.inputs.motivo = ''

            this.GetSolicitacoesAtendimentos(this.userId);

        },
        ...mapActions([
            'CadastrarAtendimento',
            'GetSolicitacoesAtendimentos',
            'limparAtendimentoCadastrado',
            // 'LimparAtendimento',
        ]),
        checkRequired() {
            this.btnAgendar = false
            if (this.inputs.fumante &&
                this.inputs.bebida &&
                this.inputs.drogas &&
                this.inputs.motivo &&
                this.inputs.tipo_atendimento
            ) {
                this.required = true
                console.log("preenchido")
            } else {
                this.required = false
                this.btnAgendar = true
            }
            
        },

        agendar() {
            
            console.log("AGENDANDO")
            this.checkRequired()

            if (this.required) {
                this.CadastrarAtendimento(this.inputs)
                this.GetSolicitacoesAtendimentos(this.userId);
            }

            // this.btnAgendar = true

        },        
    },
    filters: {
        date: function (value) {
            moment.locale("pt-br");
            if (!value) return "";
            let data = moment(value).format('L');
            return data
        }
    },
    mounted() {
        this.inputs.outro_vicio = ''
        this.inputs.qual_droga = ''
        this.inputs.status = 1
        this.inputs.user_id = this.userId;   
        
           
    },
    beforeMount() {   
         this.GetSolicitacoesAtendimentos(this.userId);
         

        this.inputs.tipo_atendimento = ""

       

        this.inputs.fumante = ''
        this.inputs.bebida = ''
        this.inputs.drogas = ''

        this.inputs.outro_vicio = ''
        this.inputs.qual_droga = ''

    },
    watch:{
        atendimento_cadastrado: {
            handler: function (val, oldVal) {
                if(this.atendimento_cadastrado == false){
                    this.btnAgendar = true
                }
               
                
            },

        },
        userId: {
            handler: function (val, oldVal) {
               this.GetSolicitacoesAtendimentos(this.userId);
               this.inputs.user_id = this.userId;  
                
            },

            deep: true
        },
    }

}
</script>
