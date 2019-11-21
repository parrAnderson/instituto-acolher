<template>
<div>
    <div class="row">
        <div class="col-4">
            
            <HotelDatePicker 
            
            format="DD/MM/YYYY"            
            :disabledDaysOfWeek="['Dom', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']"
            :disabledDates="['2019-11-21', '2019-12-10', '2019-11-23' ]"
            :enableCheckout="false"
            :i18n="ptBr"
            @check-in-changed="setCheckinDate"    
     >    
    </HotelDatePicker>
        </div>
    </div>
   
</div>
</template>

<script>
import {mapActions} from 'vuex'
// import HotelDatePicker from '@/assets/js/hotel/dist/vue-hotel-datepicker.min.js'
import HotelDatePicker from 'vue-hotel-datepicker'

export default {
    name: "DataPicker",
    components: {
        HotelDatePicker,
    },
    data() {
        return {
            CheckIn: {},
            ptBr: {
            night: 'Noite',
            nights: 'Noites',
            'day-names': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            'check-in': '__ /__ /____',
            'check-out': 'Partida',
            'month-names': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            }
        }
    },
     methods: {
         ...mapActions([
             'mudarCheckIN',
         ]),
       setCheckinDate(newDate) {
                this.CheckIn = newDate;
                // console.log(newDate);
                this.mudarCheckIN(newDate)
            },
     },
      beforeMount(){

     }
}
</script>

<style>
    .datepicker__input:last-of-type {
    
    display: none;
}

.datepicker__input:first-child {
    background: #f5f5dc29! important;
    /* width: 40%; */
    width: 100%! important;
}
.datepicker__dummy-wrapper {
width: 40%! important;

}
.datepicker__wrapper{
    height: 0px;
}
.datepicker__input{
    padding: 0px;
}
.datepicker__input:first-child {
    display: none;
}
.datepicker--closed{
    /* box-shadow: 0 15px 30px 10px
rgba(219, 219, 219, 0.08)! important;
max-height: 900px! important; */
}
.datepicker{
    top:0px! important;
    left: -100px! important;
}
@media screen and (max-width: 767px){
        .datepicker__inner {
    padding: 20px! important;
float: left! important;
}
.datepicker__months {
    width: 650px;
}
}


</style>
