<template>
<div>
    <Header>
        <template v-slot:mainpage>
             <div class="row row-space">
        <div class="col-12">
            <h4 class="text-center">ATENDIMENTOS - EVANGELHO</h4>
        </div>
    </div>
        <atendimentos-lista :tipoatendimento="3"></atendimentos-lista>
     </template>
    </Header>
</div>
</template>

<script>
import AtendimentosLista from '@/components/atendimentos/AtendimentosLista'
import Header from '@/views/layouts/HeaderPublic'
    export default {
        name: "AtendimentosEvangelho",
        components:{
            AtendimentosLista,
            Header
        }
    }
</script>

<style scoped>

</style>