<template>
<div>
    <Header>
        <template v-slot:mainpage>
            <div class="card">
                <div class="card-header">GERENCIAR OBREIROS</div>
                <div class="card-body">
                    <table class="table  table-hover table-striped table-sm">
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>TIPO</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Jorge Serrano Junior</td>
                            <td>
                                <select class="form-control">
                                    <option value="0">FREQUENTADOR</option>
                                    <option value="1">ADMIN</option>
                                    <option value="2">OBREIRO - TOTAL ATENDIMENTOS</option>
                                    <option value="3">OBREIRO - APOMETRIA</option>
                                    <option value="4">OBREIRO - LUZ</option>
                                    <option value="5">OBREIRO - PASSES</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Jorge Serrano Junior</td>
                            <td>
                                <select class="form-control">
                                    <option value="0">FREQUENTADOR</option>
                                    <option value="1">ADMIN</option>
                                    <option value="2">OBREIRO - TOTAL ATENDIMENTOS</option>
                                    <option value="3">OBREIRO - APOMETRIA</option>
                                    <option value="4">OBREIRO - LUZ</option>
                                    <option value="5">OBREIRO - PASSES</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </template>
    </Header>
</div>
</template>

<script>
import Header from '@/views/layouts/HeaderPublic.vue'
export default {
    name: "ListaDeFrequentadores",
    components: {
        Header,
    },
}
</script>

<style scoped>

</style>
