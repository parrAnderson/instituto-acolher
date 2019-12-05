<template>
<div>
    <Header>
        <template v-slot:mainpage>
            <div class="container" v-if="cartao">
                <div class="row justify-content-center row-carteirinha">
                    <div class="col-sm-4">
                       <div class="card card-widget  bg-info" > 
                         <img class="card-img-top text-center" :src="imgAvatar" alt="User Avatar">   
                       <div class="card-body">
                            
                     <h3 class="widget-user-username text-center">{{cartao.name}}</h3>
                                <h5 class="widget-user-desc text-center">Frequentador</h5>

                       </div>
                            <div class="card-footer bg-light">
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
             imgAvatar: require("@/assets/img/carteirinhafrequentadores/avatar.png")
        }
    },
    beforeMount(){
        this.getFrequentador(this.idFrequentador)
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
        },
        image:{
            handler: function (val, oldVal) {                
                if(this.image){
                    let urlStorage = process.env.VUE_APP_LARAVEL_STORAGE_URL 
                    this.imgAvatar = urlStorage + '/' +this.image
                    console.log(this.imgAvatar)
                }            
            },
            deep: true
        }
    },
    computed: {
        ...mapState({
            cartao: state => state.Frequentador.frequentador,
            idFrequentador: state => state.Auth.userId,
            image:  state => state.Frequentador.frequentador.image
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
