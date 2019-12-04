<template>
<div>
    <Header>
        <template v-slot:mainpage>
            <div class="container">
                <div class="row justify-content-center row-carteirinha">
                    <div class="col-sm-4">
                        <div class="card card-widget widget-user">
                            <!-- Add the bg color to the header using any of the bg-* classes -->
                            <div class="widget-user-header bg-info">
                                <h3 class="widget-user-username">{{cartao.name}}</h3>
                                <h5 class="widget-user-desc">Frequentador</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src="@/assets/img/carteirinhafrequentadores/avatar.png" alt="User Avatar">
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-6 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">{{cartao.numero}}</h5>
                                            <span class="description-text">ID OBREIRO</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 ">
                                        <div class="description-block">
                                            <h5 class="description-header">{{cartao.cpf}}</h5>
                                            <span class="description-text">CPF</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">{{cartao.rg}}</h5>
                                            <span class="description-text">RG</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 ">
                                        <div class="description-block">
                                            <h5 class="description-header">{{cartao.id}}</h5>
                                            <span class="description-text">ID FREQUENTADOR</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- /.row -->
                            </div>
                        </div>
                    </div>
                </div>
    <div class="row justify-content-center no-print">
        <div class="col-sm-4 text-right">
            <div class="btn btn-sm btn-outline-primary" @click="imprimir()">IMPRIMIR</div>
        </div>
    </div>
            </div>
        </template>
    </Header>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
import Header from '@/views/layouts/HeaderPublic'
export default {
    name: "CarteirinhaObreiro",
    data() {
        return {

        }
    },
    components: {
        Header,
    },
    methods: {
        ...mapActions([
            'getFrequentador',
        ]),
        imprimir(){
        window.print();
      }   
    },

    watch: {
        idFrequentador() {

            console.log(this.idFrequentador)

            if (this.idFrequentador > '') {
                this.getFrequentador(this.idFrequentador)
            }
        }
    },
    computed: {
        ...mapState({
            cartao: state => state.Frequentador.frequentador,
            idFrequentador: state => state.Auth.userId,
        })
    }
}
</script>

<style scoped>
.img-cartao {
    width: 150px;
    border-radius: 50%
}

@media print {

    .no-print,
    .no-print * {
        display: none !important;
    }

    .content-wrapper {
    background: #fff !important;
    }
    .row-carteirinha{
        justify-content: flex-start !important;
    }
    
}
</style>
