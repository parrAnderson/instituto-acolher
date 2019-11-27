<template>
<div v-if="atendimento.apometria">

    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="card-header text-center font-bold">
                    <h5>ORIENTAÇÔES</h5>
                    <p></p>
                </div>
                <div class="card-body">

                    <div class="row">
                        <div class="col-6">
                            <div class="form-group row">
                                <!-- <input type="number" v-model="atendimento.apometria[0].recomendacao_curativos" class="col-sm-6 form-control">    -->
                                <select v-model="atendimento.apometria[0].recomendacao_curativos" class="form-control col-sm-6">
                                    <option>4</option>
                                    <option>8</option>
                                    <option>12</option>
                                </select>
                                <label class="form-check-label col-sm-6"> Curativos</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">

                                <label class="form-check-label col-sm-6">Retorno em </label>
                                <select v-model="atendimento.apometria[0].recomendacao_retorno" class="form-control col-sm-6">
                                    <option>45</option>
                                    <option>90</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card">
                <div class="card-header text-center font-bold">
                    <h5>DIETA</h5>
                </div>

                <div class="card-body">

                    <div class="row">
                        <div class="col">
                            <div class="form-group row">
                                <select v-model="dieta" class="form-control col-sm-6">
                                    <option>Dieta 1</option>
                                    <option>Dieta 2</option>
                                    <option>Dieta 3</option>
                                    <option>Dieta 4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group row">

                                <label class="form-check-label col-sm-8">Quantidade de dias </label>
                                <!-- <input type="text" v-model="atendimento.apometria[0].recomendacao_dias_dieta" class="form-control col-sm-4"> -->
                                <select v-model="diasDieta">

                                    <option>30</option>
                                    <option>45</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="card">
        <div class="card-header text-center font-bold">
            <h5>RECOMENDAÇÔES</h5>
        </div>
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-7">
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.apometria[0].recomendacao_agua" class="form-check-input">
                        <label class="form-check-label">Beber água energizada</label>
                    </div>
                    <div class="form-group">
                        <div v-if="atendimento.recomendacao_repousar">
                            <input type="checkbox" checked  class="form-check-input">
                        </div>
                        <div v-else>
                            <input type="checkbox" class="form-check-input">
                        </div>
                        
                        Repousar por <select v-model="atendimento.apometria[0].recomendacao_repousar">

                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </select> dias
                    </div>
                    <div class="form-group">
                        <div v-if="atendimento.recomendacao_peso">
                            <input type="checkbox" checked  class="form-check-input">
                        </div>
                        <div v-else>
                            <input type="checkbox" class="form-check-input">
                        </div>
                        
                        Não carregar peso, não fazer esforço e não subir escadas por
                        <select  v-model="atendimento.apometria[0].recomendacao_peso">

                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </select> dias
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.apometria[0].recomendacao_litros" class="form-check-input">
                        <label class="form-check-label">Beber 2 litros d'agua por dia (de mandeira fracionada em pequenos intervalos)</label>
                    </div>
                    <div class="form-group">
                        
                        
                        <div v-if="atendimento.recomendacao_carne">
                            <input type="checkbox" checked  class="form-check-input">
                        </div>
                        <div v-else>
                            <input type="checkbox" class="form-check-input">
                        </div>
                        
                        Não ingerir carne vermelha por <input type="number" v-model="atendimento.apometria[0].recomendacao_carne"> dias
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.apometria[0].recomendacao_especializado" class="form-check-input">
                        <label class="form-check-label">Procurar tratamento especializado</label>
                    </div>

                </div>

                <div class="col-4">
                    <div class="form-group">
                        <input type="checkbox" checked="checked" v-model="atendimento.apometria[0].recomendacao_adotar" class="form-check-input">
                        <label class="form-check-label">Adotar o lema "Orai e Vigiai"</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" checked="checked" v-model="atendimento.apometria[0].recomendacao_perdao" class="form-check-input">
                        <label class="form-check-label">Fazer a Oração do Perdão</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.apometria[0].recomendacao_ler" class="form-check-input">
                        <label class="form-check-label">Ler livros e/ou textos edificantes</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.apometria[0].recomendacao_familia" class="form-check-input">
                        <label class="form-check-label">Orações em família</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.apometria[0].recomendacao_caridade" class="form-check-input">
                        <label class="form-check-label">Praticar caridade ao próximo</label>
                    </div>
                    <div class="form-group">
                        <div v-if="atendimento.recomendacao_observacoes">
                            <input type="checkbox" checked  class="form-check-input">
                        </div>
                        <div v-else>
                            <input type="checkbox" class="form-check-input">
                        </div>
                        <input type="text" v-model="atendimento.apometria[0].recomendacao_observacoes">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header text-center font-bold">
            <h5>Sugestão de encaminhamento para outra atividade acolher</h5>
        </div>
        <div class="card-body">

            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.apometria[0].encaminhamento_evangelho" class="form-check-input">
                        <label class="form-check-label">Estudo do Evangelho (Reunião Espírita - 5as feiras)</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.apometria[0].encaminhamento_obreiros" class="form-check-input">
                        <label class="form-check-label">Obreiros da luz (Entidades de Umbanda - Sábado)</label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-10 text-right">
            <div class="btn btn-sm btn-danger" data-dismiss="modal" data-toggle="modal" data-target="#listaDePresenca" @click="confirmar(atendimento.apometria[0].id, atendimento.user_id)">
                <span class="text-bold">
                    CONCLUIR ATENDIMENTO
                </span>
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
    name: "OrientacoesAtendimento",
    data() {
        return {
            atendimento: {},
            dieta: "",
            diasDieta: "",
            atender: {},
            dadosConfirmar: {},
        }
    },
    props: {
        id_atendimento: {
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
            dados.status = 7
            dados.tipostatus = '='
            dados.maca = this.getMaca
            dados.data = this.getData
            
            this.getListaLeituraDasFichas(dados)
        },

        confirmar(id_atendimento_apometria, user_id) {
            this.dadosConfirmar = {}
            this.dadosConfirmar.id = id_atendimento_apometria

            this.dadosConfirmar = this.atendimento.apometria[0]
            this.dadosConfirmar.status = 8

            var acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Confirmou em Cabeceira da maca",
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
    mounted() {
        // this.atendimento.recomendacao_dieta = 'Dieta 2'
        this.atendimento.recomendacao_adotar = true
        this.atendimento.recomendacao_dieta = this.dieta
    },
    computed: {
        ...mapState({
            orientar: state => state.AtendimentoApometria.programacao,
        }),
    },
    watch: {
        id_atendimento: {

            handler: function (val, oldVal) {
                this.atendimento = this.orientar.find(element => element.apometria[0].id == val);

                console.log(this.atendimento.id)
            },

            deep: true

        },
        dieta() {
            this.atendimento.recomendacao_dieta = this.dieta
            if (this.atendimento.recomendacao_dieta === 'Dieta 1' || this.atendimento.recomendacao_dieta === 'Dieta 2') {
                this.atendimento.recomendacao_carne = this.atendimento.recomendacao_dias_dieta
            }
        },
        diasDieta() {
            this.atendimento.recomendacao_dias_dieta = this.diasDieta
            if (this.atendimento.recomendacao_dieta === 'Dieta 1' || this.atendimento.recomendacao_dieta === 'Dieta 2') {
                this.atendimento.recomendacao_carne = this.atendimento.recomendacao_dias_dieta
            }
        }
    }
}
</script>

<style>
.card-header {
    padding: 0;
}

.form-group {
    margin-bottom: 3.5px;
}
</style>
