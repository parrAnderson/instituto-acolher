<template>
<div>

    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="card-header text-center font-bold">
                    <h5>ORIENTAÇÔES</h5>
                </div>
                <div class="card-body">

                    <div class="row">
                        <div class="col-6">
                        <div class="form-group row">
                            <!-- <input type="number" v-model="atendimento.recomendacao_curativos" class="col-sm-6 form-control">    -->
                            <select v-model="atendimento.recomendacao_curativos" class="form-control col-sm-6">
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
                            <!-- <input type="text" v-model="atendimento.recomendacao_retorno" class="form-control col-sm-6"> -->
                            <select v-model="atendimento.recomendacao_retorno" class="form-control col-sm-6">
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
                            <!-- <input type="text" v-model="atendimento.recomendacao_dias_dieta" class="form-control col-sm-4"> -->
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
                        <input type="checkbox" v-model="atendimento.recomendacao_agua" class="form-check-input">
                        <label class="form-check-label">Beber água energizada</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.recomendacao_repousar" class="form-check-input">
                        Repousar por <select class="">
                                                
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>

                                            </select> dias
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.recomendacao_peso" class="form-check-input">
                        Não carregar peso, não fazer esforço e não subir escadas por 
                        <select class="">
                                                
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>

                                            </select> dias
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.recomendacao_litros" class="form-check-input">
                        <label class="form-check-label">Beber 2 litros d'agua por dia (de mandeira fracionada em pequenos intervalos)</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.recomendacao_carne" class="form-check-input">
                        Não ingerir carne vermelha por <input type="number" v-model="atendimento.recomendacoes_carne"> dias
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.recomendacao_especializado" class="form-check-input">
                        <label class="form-check-label">Procurar tratamento especializado</label>
                    </div>

                </div>

                <div class="col-4">
                    <div class="form-group">
                        <input type="checkbox" checked="checked" v-model="atendimento.recomendacao_adotar" class="form-check-input">
                        <label class="form-check-label">Adotar o lema "Orai e Vigiai"</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" checked="checked" v-model="atendimento.recomendacao_perdao" class="form-check-input">
                        <label class="form-check-label">Fazer a Oração do Perdão</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.recomendacao_ler" class="form-check-input">
                        <label class="form-check-label">Ler livros e/ou textos edificantes</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.recomendacao_familia" class="form-check-input">
                        <label class="form-check-label">Orações em família</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.recomendacao_caridade" class="form-check-input">
                        <label class="form-check-label">Praticar caridade ao próximo</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" class="form-check-input">
                        <input type="text" v-model="atendimento.recomendacoes_observacoes">
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
                        <input type="checkbox" v-model="atendimento.encaminhamento_evangelho" class="form-check-input">
                        <label class="form-check-label">Estudo do Evangelho (Reunião Espírita - 5as feiras)</label>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-group">
                        <input type="checkbox" v-model="atendimento.encaminhamento_obreiros" class="form-check-input">
                        <label class="form-check-label">Obreiros da luz (Entidades de Umbanda - Sábado)</label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-10 text-right">
            <div class="btn btn-sm btn-danger" data-toggle="modal" data-target="#listaDePresenca">
                <span class="text-bold">
                    CONCLUIR ATENDIMENTO
                </span>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "OrientacoesAtendimento",
    data() {
        return {
            atendimento: {},
            dieta:"",
            diasDieta:"",
        }
    },
    mounted(){
        // this.atendimento.recomendacao_dieta = 'Dieta 2'
        this.atendimento.recomendacao_adotar = true
        this.atendimento.recomendacao_dieta = this.dieta 
    },
    watch:{
        dieta(){
             this.atendimento.recomendacao_dieta = this.dieta 
            if(this.atendimento.recomendacao_dieta === 'Dieta 1' || this.atendimento.recomendacao_dieta === 'Dieta 2'){
                this.atendimento.recomendacoes_carne = this.atendimento.recomendacao_dias_dieta
            }
        },
        diasDieta(){
            this.atendimento.recomendacao_dias_dieta = this.diasDieta 
            if(this.atendimento.recomendacao_dieta === 'Dieta 1' || this.atendimento.recomendacao_dieta === 'Dieta 2'){
                this.atendimento.recomendacoes_carne = this.atendimento.recomendacao_dias_dieta
            }
        }
    }
}
</script>

<style>
    .card-header{
        padding: 0;
    }
    .form-group {
    margin-bottom: 3.5px;
}
</style>
