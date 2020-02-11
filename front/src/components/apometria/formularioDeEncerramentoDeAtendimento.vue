<template>
    <div v-if="atendimento.apometria">
        <div class="card">
            <div class="card-header">
                ENTREVISTA DE ENCERRAMENTO
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        Sentiu-se acolhido no dia do atendimento?                
                    </div>
                    <div class="col">
                        <select class="form-control" v-model="atendimento.apometria[0].encerramento_acolhido">
                            <option>Sim</option>
                            <option>Um pouco</option>
                            <option>Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" v-model="atendimento.apometria[0].encerramento_acolhido_observacoes" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">                        
                        Sentiu-se bem durante o atendimento?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="atendimento.apometria[0].encerramento_bem_durante">
                            <option>Sim</option>
                            <option>Mais ou menos</option>
                            <option>Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" v-model="atendimento.apometria[0].encerramento_bem_durante_observacoes" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Sentiu-se bem após o atendimento?                        
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="atendimento.apometria[0].encerramento_bem_apos">
                            <option>Sim</option>
                            <option>Mais ou menos</option>
                            <option>Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" v-model="atendimento.apometria[0].encerramento_bem_apos_observacoes" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Repousou como recomendado?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="atendimento.apometria[0].encerramento_repouso">
                            <option>Sim</option>
                            <option>Mais ou menos</option>
                            <option>Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" v-model="atendimento.apometria[0].encerramento_repouso_observacoes" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Realizou os curativos como recomendado?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="atendimento.apometria[0].encerramento_curativos">
                            <option>Sim</option>
                            <option>Mais ou menos</option>
                            <option>Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" v-model="atendimento.apometria[0].encerramento_curativos_observacoes" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Realizou a dieta regularmente?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="atendimento.apometria[0].encerramento_dieta">
                            <option>Sim</option>
                            <option>Mais ou menos</option>
                            <option>Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" v-model="atendimento.apometria[0].encerramento_dieta_observacoes" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Mantém prática religiosa?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="atendimento.apometria[0].encerramento_religiosa">
                            <option>Sim</option>
                            <option>Mais ou menos</option>
                            <option>Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" v-model="atendimento.apometria[0].encerramento_religiosa_observacoes" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Mantém prática de oração regular?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="atendimento.apometria[0].encerramento_oracao">
                            <option>Sim</option>
                            <option>Mais ou menos</option>
                            <option>Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="atendimento.apometria[0].encerramento_tipo_oracao">
                            <option>Individual</option>
                            <option>Em Família</option>                            
                            <option>Regular (Dia e horário)</option>
                            <option>Irregular</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                RECOMENDAÇÕES ADICIONAIS
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="atendimento.apometria[0].encerramento_recomendacao_adicional_pensamento" class="form-check-input">
                            <label class="form-check-label">Refletir sobre formas pensamento</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="atendimento.apometria[0].encerramento_recomendacao_adicional_energias" class="form-check-input">
                            <label class="form-check-label">Conceito de atração e repulsa de energias</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="atendimento.apometria[0].encerramento_recomendacao_adicional_orai" class="form-check-input">
                            <label class="form-check-label">Reforço "ORAI E VIGIAI"</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="atendimento.apometria[0].encerramento_recomendacao_adicional_edificante" class="form-check-input">
                            <label class="form-check-label">Leituras edificantes</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                SUGESTÃO DE ENCAMINHAMENTO PARA OUTRA(S) ATIVIDADE(S) OFERECIDAS PELO ACOLHER
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="atendimento.apometria[0].encerramento_encaminhamento_adicional_evangelho" class="form-check-input">
                            <label class="form-check-label">Estudo do Evangelho (Reunião Espírita - 5as. Feiras)</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="atendimento.apometria[0].encerramento_encaminhamento_adicional_kardecismo" class="form-check-input">
                            <label class="form-check-label">Curso Kardecismo, Autoconhecimento e Reforma Íntima</label>
                        </div>
                    </div>
                    <!-- <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="atendimento.apometria[0].encerramento_encaminhamento_adicional_obreiros" class="form-check-input">
                            <label class="form-check-label">Conceito de atração e repulsa de energias</label>
                        </div>
                    </div> -->
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="atendimento.apometria[0].encerramento_encaminhamento_adicional_apometria" class="form-check-input">
                            <label class="form-check-label">Curso Básico Apometria</label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">OBSERVAÇÕES GERAIS</div>
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" v-model="atendimento.apometria[0].encerramento_observacao_geral">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col text-right">
                <div class="btn btn-sm btn-primary" data-dismiss="modal" @click="confirmar(atendimento.apometria[0].id, atendimento.user_id)">
                    FAZER ENCERRAMENTO
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import {
    mapState,
    mapActions,
    mapMutations,
} from 'vuex'
    export default {
        name: "formularioDeEncerramentoDeAtendimento",
        data(){
            return{
                inputs:{},
                atendimento: {},
            }
        },
        mounted(){
            this.inputs.encerramento_acolhido = "Sim"
            this.inputs.encerramento_bem = "Sim"
            this.inputs.encerramento_bem_apos = "Sim"
            this.inputs.encerramento_repouso = "Sim"
            this.inputs.encerramento_curativos = "Sim"
            this.inputs.encerramento_dieta = "Sim"
            this.inputs.encerramento_oracao = "Sim"
            this.inputs.encerramento_religiosa = "Sim"
        },
         props: {
        id_atendimento: {
            type: Number,
            required: false,
            defaut: 0,
        },
        statusAtual:{
            type: Number,
            required: false,
            defaut: 0,
        }
    },
    methods: {
        ...mapActions([
            'atualizarAtendimentoApometria',
            'getListaLeituraDasFichas',
           
        ]),

        getDadosAtendimento() {
            var dados = {}
            dados.status = 9
            dados.tipostatus = '='
            dados.maca = this.getMaca
            dados.data = this.getData

            this.getListaLeituraDasFichas(dados)

            
        },

        confirmar(id_atendimento_apometria, user_id) {
            this.dadosConfirmar = {}
            this.dadosConfirmar.id = id_atendimento_apometria

            this.dadosConfirmar = this.atendimento.apometria[0]
            
            this.dadosConfirmar.status = 10
                
            
                var acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Atendimento Encerrado",
                'id_atualizado': user_id
            }
            

            var dados = {}
            dados.acoes = acoes
            dados.data = this.dadosConfirmar

            this.atualizarAtendimentoApometria(dados)
            this.dadosConfirmar = {}

            this.getDadosAtendimento()
        }
    },   
    computed: {
        ...mapState({
            orientar: state => state.AtendimentoApometria.programacao,
        }),
    },
    watch: {
        atendimento: {
            handler: function (val, oldVal) {             

                for(let [key, value] of Object.entries(this.atendimento.apometria[0])){
                    if(value == 0){
                        this.atendimento.apometria[0][key] = false
                    }    
                }                              
            },
            deep: true
        },
        id_atendimento: {
            handler: function (val, oldVal) {
                this.atendimento = this.orientar.find(element => element.apometria[0].id == val);
            },
            deep: true
        },
    }
    }
</script>

<style>

</style>