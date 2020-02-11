<template>
<div v-if="atendimento.apometria" id="">
       
    <div class="row justify-content-center" v-if="!atendimento.permissao">
        <div class="col-sm-6">
            <div class="alert alert-warning alert-dismissible text-center">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    Idade: {{atendimento.idade}} anos
                </div>
        </div>
    </div>

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
                                <select v-if="atendimento.permissao" v-model="atendimento.apometria[0].recomendacao_curativos" @change="ChangeDiasRetorno()" class="form-control col-sm-6">                       
                                    <option>4</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </select>
                                 <select v-else v-model="atendimento.apometria[0].recomendacao_curativos" class="form-control col-sm-6">                       
                                    <option selected>0</option>                                    
                                </select>
                                <label class="form-check-label col-sm-6"> Curativos</label>
                            </div>
                        </div>
                        <div class="col-6">
                           
                               Entrevista de Encerramento em  <span class="font-weight-bold text-primary">{{atendimento.apometria[0].data_retorno | date}} </span>

                                <!-- <select v-if="atendimento.permissao" v-model="atendimento.apometria[0].recomendacao_retorno"  class="form-control col-sm-6">
                                    <option value="13">13 dias</option>
                                    <option value="26">26 dias</option>
                                    <option value="34">34 dias</option>
                                    <option value="40">40 dias</option>
                                </select> -->

                                <!-- <select v-else @change="ChangeDiasRetorno()" v-model="atendimento.apometria[0].recomendacao_retorno"  class="form-control col-sm-6">
                                    <option value="13">13 dias</option>
                                    <option value="26">26 dias</option>
                                    <option value="34">34 dias</option>
                                    <option value="40">40 dias</option>
                                </select> -->
                            
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
                                <select v-if="atendimento.permissao" v-model="atendimento.apometria[0].recomendacao_dieta" class="form-control col-sm-6">
                                    <option>Dieta 1</option>
                                    <option>Dieta 2</option>
                                    <option>Dieta 3</option>
                                    <option>Dieta 4</option>
                                </select>
                                <select v-else v-model="atendimento.apometria[0].recomendacao_dieta" class="form-control col-sm-6">
                                    <option>Nenhuma</option>                                    
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group row">

                                <label class="form-check-label col-sm-8">Quantidade de dias </label>
                                <!-- <input type="text" v-model="atendimento.apometria[0].recomendacao_dias_dieta" class="form-control col-sm-4"> -->
                                <select v-model="atendimento.apometria[0].recomendacao_dias_dieta">

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
                        <div v-if="atendimento.apometria[0].recomendacao_repousar">
                            <input type="checkbox" checked disabled class="form-check-input">
                        </div>  
                        <div v-else>
                            <input type="checkbox"  disabled class="form-check-input">
                        </div>  

                        Repousar por <select v-model="atendimento.apometria[0].recomendacao_repousar">
                            <option></option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </select> dias
                    </div>
                    <div class="form-group">
                        <div v-if="atendimento.apometria[0].recomendacao_peso">
                            <input type="checkbox" checked disabled class="form-check-input">
                        </div>
                        <div v-else>
                            <input type="checkbox" disabled class="form-check-input">
                        </div>

                        Não carregar peso, não fazer esforço e não subir escadas por
                        <select v-model="atendimento.apometria[0].recomendacao_peso">
                            <option></option>
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

                        <div v-if="atendimento.apometria[0].recomendacao_carne">
                            <input type="checkbox" checked disabled class="form-check-input">
                        </div>
                        <div v-else>
                            <input type="checkbox" disabled class="form-check-input">
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
                        <div v-if="atendimento.apometria[0].recomendacao_observacoes">
                            <input type="checkbox" checked disabled class="form-check-input">
                        </div>
                        <div v-else>
                            <input type="checkbox" disabled class="form-check-input">
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


    <div class="card no-print">  
        <div class="card-body">

            <div class="row justify-content-center">
                <div class="col">
                    
                    <div class="row">                
                        <div class="col">
                            Retornar em:
                            <input type="date" v-model="atendimento.apometria[0].data_retorno"> 
                            para continuidade do tratamento
                        </div>
                    </div>
                </div>
        
            
            </div>
        </div>
    </div>

    <div class="row no-print">
         <div class="col text-right">
            <div class="btn btn-sm btn-primary"  @click="imprimir()" >
                <span class="text-bold">
                   <i class="fas fa-print"></i> IMPRIMIR
                </span>
            </div>            
        </div>
        <div class="col">
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
  
} from 'vuex'

export default {
    name: "OrientacoesAtendimento",
    filters: {
        date: function (value) {
            moment.locale("pt-br");
            if (!value) return "";
            let data = moment(value).format('L');
            return data
        },
    },
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
        },
        statusAtual:{
            type: Number,
            required: false,
            defaut: 0,
        }
    },
    methods: {
        imprimir() {
            window.print();
        },
        changeRetornoCurativo(){
            if(this.atendimento.permissao){
                 if(this.atendimento.apometria[0].recomendacao_curativos == 4){
                    this.atendimento.apometria[0].recomendacao_retorno = 12
                }else if(this.atendimento.apometria[0].recomendacao_curativos == 8){
                    this.atendimento.apometria[0].recomendacao_retorno = 26
                    }else if(this.atendimento.apometria[0].recomendacao_curativos == 10){
                    this.atendimento.apometria[0].recomendacao_retorno = 33
                }else if(this.atendimento.apometria[0].recomendacao_curativos == 12){
                    this.atendimento.apometria[0].recomendacao_retorno = 40
                }
            }
        },
        ChangeDiasRetorno(){
            
           this.changeRetornoCurativo()
            var DataAtual = moment()
            var DataParaRetorno  = moment()

            if(this.atendimento.apometria[0].recomendacao_retorno == null ){
                DataParaRetorno = moment(DataAtual).add(12, "days") 
            }else{
                DataParaRetorno = moment(DataAtual).add(this.atendimento.apometria[0].recomendacao_retorno, "days") 
                // DataParaRetorno = moment(DataAtual).add(22, "days") 
            }

        


            this.atendimento.apometria[0].data_retorno = moment(DataParaRetorno).format("YYYY-MM-DD");
            
            // this.atendimento.apometria[0].data_retorno = "1993-06-02"
           
        },
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
            
            this.dadosConfirmar.status = this.statusAtual + 1

            var acoes = ''
                
            if(this.statusAtual == 7){
               acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Confirmou em Cabeceira da maca",
                'id_atualizado': user_id
            }
            }else if(this.statusAtual == 8){
      
                acoes = {
                'id_obreiro': this.$store.state.Auth.userId,
                'acao_obreiro': "Confirmou em Pós Atendimento",
                'id_atualizado': user_id
                }
                
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
            handler: function () {

                

               this.changeRetornoCurativo()


                    if(!this.atendimento.apometria[0].data_retorno){
                        this.ChangeDiasRetorno()
                    }
                
              
                if (this.atendimento.apometria[0].recomendacao_dieta === 'Dieta 1' || this.atendimento.apometria[0].recomendacao_dieta === 'Dieta 2') {
                    this.atendimento.apometria[0].recomendacao_carne = this.atendimento.apometria[0].recomendacao_dias_dieta
                }

                for(let [key, value] of Object.entries(this.atendimento.apometria[0])){
                    if(value == 0){
                        this.atendimento.apometria[0][key] = false
                    }
                        
                }
                
                
            },

            deep: true
        },
        id_atendimento: {

            handler: function (val) {
                this.atendimento = this.orientar.find(element => element.apometria[0].id == val);

                this.atendimento.apometria[0].recomendacao_adotar = true
                this.atendimento.apometria[0].recomendacao_adotar = true
                this.atendimento.apometria[0].recomendacao_perdao = true

            },

            deep: true

        },
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



@media print {

    .no-print,
    .no-print * {
        display: none !important;
    }


    .form-group{
        color: black;
    }

 .modal-dialog{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    margin: 0;
    padding:0;
    display: block;
     overflow-x: hidden;
    overflow-y: auto;
     visibility: visible;
     opacity: 1;
  }

  .modal {
    z-index: 9999;
     visibility: visible;
     opacity: 1;
}

    .modal-content{
        opacity: 1;
        position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    }

    .modal-backdrop.show {
    opacity: 0;
}

 
    
}



</style>
