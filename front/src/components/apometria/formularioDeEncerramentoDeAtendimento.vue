<template>
    <div>
        <div class="card">
            <div class="card-header">
                ENTREVISTA DE ENCERRAMENTO
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        SENTIU-SE ACOLHIDO NO DIA DO ATENDIMENTO?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_acolhido">
                            <option value="Sim">Sim</option>
                            <option value="">Um pouco</option>
                            <option value="">Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        SENTIU-SE BEM DURANTE O ATENDIMENTO?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_bem">
                            <option value="Sim">Sim</option>
                            <option value="">Mais ou menos</option>
                            <option value="">Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        SENTIU-SE BEM APÓS O ATENDIMENTO?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_bem_apos">
                            <option value="Sim">Sim</option>
                            <option value="">Mais ou menos</option>
                            <option value="">Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        REPOUSOU COMO RECOMENDADO?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_repouso">
                            <option value="Sim">Sim</option>
                            <option value="">Mais ou menos</option>
                            <option value="">Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        REALIZOU OS CURATIVOS COMO RECOMENDADO?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_curativos">
                            <option value="Sim">Sim</option>
                            <option value="">Mais ou menos</option>
                            <option value="">Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        REALIZOU A DIETA REGULARMENTE?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_dieta">
                            <option value="Sim">Sim</option>
                            <option value="">Mais ou menos</option>
                            <option value="">Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        MANTÉM PRÁTICA RELIGIOSA?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_religiosa">
                            <option value="Sim">Sim</option>
                            <option value="">Mais ou menos</option>
                            <option value="">Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <input type="text" class="form-control" placeholder="OBSERVAÇÕES">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        MANTÉM PRÁTICA DE ORAÇÃO REGULAR?
                    </div>
                    <div class="col">
                        <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_oracao">
                            <option value="Sim">Sim</option>
                            <option value="">Mais ou menos</option>
                            <option value="">Não</option>
                        </select>
                    </div>
                    <div class="col">
                         <select name="encerramento_acolhido" id="encerramento_acolhido" class="form-control" v-model="inputs.encerramento_tipo_oracao">
                            <option value="">Individual</option>
                            <option value="Sim">Em Família</option>                            
                            <option value="">Regular (Dia e horário)</option>
                            <option value="">Irregular</option>
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
                            <input type="checkbox" v-model="inputs.encerramento_recomendacao_adicional_pensamento" class="form-check-input">
                            <label class="form-check-label">Refletir sobre formas pensamento</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="inputs.encerramento_recomendacao_adicional_energias" class="form-check-input">
                            <label class="form-check-label">Conceito de atração e repulsa de energias</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="inputs.encerramento_recomendacao_adicional_orai" class="form-check-input">
                            <label class="form-check-label">Reforço "ORAI E VIGIAI"</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="inputs.encerramento_recomendacao_adicional_edificante" class="form-check-input">
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
                            <input type="checkbox" v-model="inputs.encerramento_encaminhamento_adicional_evangelho" class="form-check-input">
                            <label class="form-check-label">Estudo do evangelho (REUINÃO ESPÍRITA - 5° FEIRAS)</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="inputs.encerramento_encaminhamento_adicional_obreiros" class="form-check-input">
                            <label class="form-check-label">Conceito de atração e repulsa de energias</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="inputs.encerramento_encaminhamento_adicional_apometria" class="form-check-input">
                            <label class="form-check-label">Curso básico apometria</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <input type="checkbox" v-model="inputs.encerramento_encaminhamento_adicional_kardecismo" class="form-check-input">
                            <label class="form-check-label">Curso kardecismo, autoconhecimento e reforma íntima</label>
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
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col text-right">
                <div class="btn btn-sm btn-primary">
                    FAZER ENCERRAMENTO
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "formularioDeEncerramentoDeAtendimento",
        data(){
            return{
                inputs:{}
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
        }
    }
</script>

<style>

</style>