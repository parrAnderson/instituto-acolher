<template>
<div>
    <Header>
        <template v-slot:mainpage>
             <div class="row row-space">
        <div class="col-12">
            <h4 class="text-center">ATENDIMENTOS - PASSES</h4>
        </div>
    </div>
        <atendimentos-lista :tipoatendimento="2"></atendimentos-lista>
     </template>
    </Header>
</div>
</template>

<script>
import AtendimentosLista from '@/components/atendimentos/AtendimentosLista'
import Header from '@/views/layouts/HeaderPublic'
    export default {
        name: "AtendimentosPasses",
        components:{
            AtendimentosLista,
            Header
        }
    }
</script>

<style scoped>

</style>