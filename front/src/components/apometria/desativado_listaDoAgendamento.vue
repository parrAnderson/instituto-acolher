<template>
<div>
    Lista do agendamento

    {{agendamentos}}
    {{this.listaAtendimentosAgendados }}
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: "listaDoAgendamento",
    data(){
        return{
            agendamentos:{}
        }
    },
    computed: {
        ...mapState({
            listaAtendimentosAgendados: state => state.AtendimentoApometria.listaAtendimentosAgendados,
        }),
    },
    beforeMount(){
        this.agendamentos = this.listaAtendimentosAgendados 
    },
    watch: {
        listaAtendimentosAgendados: {
            handler: function (val, oldVal) {
                this.agendamentos = this.listaAtendimentosAgendados
                console.log(val) 
            },
            deep: true
        },
    
    },
}
</script>

<style scoped>

</style>
