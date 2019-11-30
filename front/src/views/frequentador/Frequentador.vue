<template>
<div>
    <Header>
        <template v-slot:mainpage>
        <div class="row justify-content-center">
            <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div class="card">
            <div class="card-body" v-if="userId">
                <FichaFrequentador :id_frequentador="$store.state.Auth.userId" :tipo_ficha="'editar'"/>
            </div>
        </div>
            </div>
        </div>
    </template>
    </Header>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '@/views/layouts/HeaderPublic'
    import FichaFrequentador from '@/components/frequentador/FichaFrequentador'
    export default {
        name: "Frequentador",
        data(){
            return{
                IdFrequentador: null
            }
        },
        components:{
            FichaFrequentador,
            Header,
        },
        computed:{
            ...mapState({
                userId: state => state.Auth.userId,
            })
        },
        watch:{
            userId(){
                // console.log(this.userId)
                    this.idFrequentador = this.userId
                
            }
        }
    }
</script>

<style scoped>

</style>