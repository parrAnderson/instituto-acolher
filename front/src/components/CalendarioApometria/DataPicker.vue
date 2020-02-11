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
                disabledDayNames: ['Seg', 'Ter', 'Qui', 'Sex', 'Sab', 'Dom'],
                disabledDates: [],
                monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                shortMonthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                dayNames: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            },
            dataSelectionada: "",
            // DatasCanceladas: [],
        }
    },
    methods: {
        adicionarDataArray(val){
            val = new Date(val)
            console.log(val)
            var valAno = val.getFullYear(val)
            var valMes = val.getMonth() + 1
            var valDia = val.getDate() + 1

           


            var dataCompleta = valAno + '-' + valMes + '-' + valDia
            this.calendarConfigs.disabledDates.push(dataCompleta);
            
        },
        ...mapActions([
            'dataAgendada',
            'changeShowModalDataPicker',
            'getDataCanceladaCalendarioApometria',
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
        this.getDataCanceladaCalendarioApometria()

    },
    computed: {        
        ...mapState({
            showModalDataPicker : state => state.AtendimentoApometria.showModalDataPicker,
            datas_canceladas_apometria: state => state.CalendarioApometria.datas_canceladas_apometria

        }),

    },
    props: {
        atendimento: Object
    },
    watch: {
        datas_canceladas_apometria:{
            handler: function (val, oldVal) {                
                 val.forEach((index) => {
                    //  console.log(index.cancelada)
                    this.adicionarDataArray(index.data_cancelada)
                 })

            // for(let [key, value] of Object.entries(this.datas_canceladas_apometria)){
            //         if(value == 0){
            //             console.log(value)
            //         }    
            //     }
                },
            deep: true 
        },
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
