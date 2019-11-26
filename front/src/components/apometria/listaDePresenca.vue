<template>
<div>
    <div class="row justify-content-center">
        <div class="col-10">
            <div class="card">
                <div class="card-body">
                    <h5 class="text-center">LISTA DE PRESENÇA PARA ASSINATURA </h5>
                    <div v-for="atendimento in programacao">
                        <div class="row row-space">                            
                            <div class="col">
                                {{atendimento.user[0].name}}: <hr>
                            </div>
                        </div>
                        <div class="row" v-if="atendimento.idade < 18">                            
                            <div class="col">
                                <i class="fas fa-arrow-circle-right"></i> ASSINATURA DO RESPONSAVEL: <hr>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations,
} from 'vuex'
export default {
    name: "listaDePresenca",
    computed: {
        ...mapState({
            programacao: state => state.AtendimentoApometria.programacao,
        }),
    }
}
</script>

<style scoped>
hr{
  border-color:#000;
  box-sizing:border-box;
  width:100%;  
}

</style>
