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
import {mapActions} from 'vuex'
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
             'mudarCheckIN',
         ]),
     },
     mounted(){
         this.dataSelectionada = this.calendarData.selectedDate
     },
      
      watch:{
          calendarData(){
              this.dataSelectionada = this.calendarData.selectedDate
              console.log(this.calendarData.selectedDate)
          }
      }
}
</script>
