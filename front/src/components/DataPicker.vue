<template>
<div>
    <div v-if="showModalDataPicker">
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-left">Data de Atendimento</h4>
                            <button type="button" class="close" @click="changeShowModalDataPicker()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <FunctionalCalendar v-model="calendarData" :configs="calendarConfigs"></FunctionalCalendar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    </div>

</div>
</template>

<script>
import {
    mapActions,
    mapState,
    mapMutations,
} from 'vuex'
import {
    FunctionalCalendar
} from 'vue-functional-calendar';

export default {
    name: "DataPicker",
    components: {
        FunctionalCalendar,
    },
    data() {
        return {
            calendarData: {},
            calendarConfigs: {
                // sundayStart: false,
                dateFormat: 'yyyy-mm-dd',
                isDatePicker: true,
                // isDateRange: false,                
                disabledDayNames: ['Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
                disabledDates: ['18/11/2019', '27/12/2019'],
                monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                shortMonthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                dayNames: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            },
            dataSelectionada: "",
        }
    },
    methods: {
    
        ...mapActions([
            'dataAgendada',
            'changeShowModalDataPicker'
        ]),
        MudarDataAgendamento() {
            let agendamento = {}
            this.dataSelectionada = this.calendarData.selectedDate
            agendamento.dataAgendada = this.dataSelectionada
            agendamento.atendimento = this.atendimento.id
            this.dataAgendada(agendamento)
        },        
    },
    beforeMount() {
        this.dataSelectionada = this.calendarData.selectedDate

    },
    computed: {        
        ...mapState({
            showModalDataPicker : state => state.AtendimentoApometria.showModalDataPicker
        }),

    },
    props: {
        atendimento: Object
    },
    watch: {
        calendarData: {
            handler: function (val, oldVal) {
                this.MudarDataAgendamento()
                this.dataSelectionada = this.calendarData.selectedDate
            },
            deep: true
        },

    }
}
</script>

<style>
.vfc-calendar {
    background-color: white;
}
</style>
