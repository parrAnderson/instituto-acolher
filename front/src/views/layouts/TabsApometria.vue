<template>
    <div>
<div class="card card-primary card-outline card-tabs">
                <div class="card-body">
                    <ul class="nav nav-tabs">
                        <li class="nav-item ">
                            <router-link :to="{name:'programacaoapometria'}">
                            <a class="nav-link btn btn-secondary" href="#">Programação</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'confirmacaoapometria'}">
                                <a class="nav-link btn btn-secondary" href="#">Confirmação</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'rodadasmacas'}">
                                <a class="nav-link btn btn-secondary" href="#">Rodadas e Macas</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'relacaoatendidos'}">
                                <a href="#" class="nav-link btn btn-secondary">
                                    Relação de atendidos
                                </a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'entrevistapreatendimento'}">
                                <a href="#" class="nav-link btn btn-secondary">
                                    Entrevista pré-atendimento
                                </a>
                             </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'leituradasfichas'}">
                                <a href="#" class="nav-link btn btn-secondary">
                                    Leituras das fichas
                                </a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'cabeceiradamaca'}">
                                <a href="#" class="nav-link btn btn-secondary">
                                    Cabeceira da maca
                                </a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'posatendimento'}">
                                <a href="#" class="nav-link btn btn-secondary">
                                    Pós atendimento
                                </a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'entrevistadeencerramento'}">
                                <a href="#" class="nav-link btn btn-secondary">
                                    Entrevista de encerramento
                                </a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name:"TabsApometria"
    }
</script>

<style>
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link {
    border-color:
        #e9ecef #e9ecef #dee2e6;
}
</style>