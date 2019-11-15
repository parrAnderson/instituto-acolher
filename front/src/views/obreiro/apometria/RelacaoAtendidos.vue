<template>
<div>
    <Header>
        <template v-slot:mainpage>
            RelacaoAtendidos
            <TabsApometria></TabsApometria>
            <Programacao></Programacao>
        </template>
    </Header>
</div>
</template>

<script>
import Programacao from '@/components/apometria/ProgramacaoApometria'
import Header from '@/views/layouts/HeaderPublic'
import TabsApometria from '@/views/layouts/TabsApometria'
export default {
    name: "RelacaoAtendidos",
    components: {
        Programacao,
        Header,
        TabsApometria,
    }
}
</script>

<style>

</style>
