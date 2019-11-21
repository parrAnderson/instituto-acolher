<template>
<div>
    <div class="row">
        <div class="col">
            
           <FunctionalCalendar
      v-model="calendarData"
      :configs="calendarConfigs"
></FunctionalCalendar>
        </div>
    </div>
   
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { FunctionalCalendar } from 'vue-functional-calendar';

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
                dateFormat: 'dd/mm/yyyy',
                isDatePicker: true,
                // isDateRange: false
                disabledDayNames:['Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
                disabledDates:  	['18/11/2019','27/12/2019'],
                monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                shortMonthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                dayNames:['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            },
            dataSelectionada: "",
            }
        }
    ,
     methods: {
         ...mapActions([
             'dataAgendada',
         ]),
         MudarDataAgendamento(){
             let agendamento = {}
              this.dataSelectionada = this.calendarData.selectedDate              
              agendamento.dataAgendada = this.dataSelectionada
              agendamento.atendimento = this.atendimento.id
              this.dataAgendada(agendamento)
         }
     },
     beforeMount(){
         this.dataSelectionada = this.calendarData.selectedDate        
        
     },
     computed: {
        ...mapState({
                   
        }),
       
        },
      props:{
           atendimento: Object
      },
      watch:{
          calendarData:{
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