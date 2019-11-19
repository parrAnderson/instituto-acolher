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
                                   <option>FREQUENTADOR</option>
                                   <option>OBREIRO - APOMETRIA</option>
                                   <option>ADMIN</option>
                               </select>
                           </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Jorge Serrano Junior</td>
                           <td>
                               <select class="form-control">
                                   <option>FREQUENTADOR</option>
                                   <option>OBREIRO - APOMETRIA</option>
                                   <option>ADMIN</option>
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
    name: "GerenciarObreiros",
    components: {
        Header,
    },
}
</script>

<style>

</style>
