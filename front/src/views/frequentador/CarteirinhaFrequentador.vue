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
                                            <h5 class="description-header">{{cartao.id}}</h5>
                                            <span class="description-text">IDENTIFICAÇÃO</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 ">
                                        <div class="description-block">
                                            <h5 class="description-header">{{cartao.cpf}}</h5>
                                            <span class="description-text">CPF</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col text-center">
                                        <div class="card-body">
                                            <qrcode-vue :value="linkQrCode"></qrcode-vue>
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
import QrcodeVue from 'qrcode.vue'
import {
    mapState,
    mapActions
} from 'vuex'
import Header from '@/views/layouts/HeaderPublic'
export default {
    name: "CarteirinhaFrequentador",
    data() {
        return {
            imgAvatar: require("@/assets/img/carteirinhafrequentadores/avatar.png"),
            linkQrCode: 'http://acolher.alvitre.net/api',
            size: 300,
        }
    },
    components: {
        Header,
        QrcodeVue,
    },
    beforeMount(){
        this.getFrequentador(this.idFrequentador)
        this.linkQrCode = process.env.VUE_APP_LARAVEL_API_URL + 'qrcode/' + this.idFrequentador 

    },
    methods: {
        ...mapActions([
            'getFrequentador',
        ]),
        imprimir(){
        window.print();
      }   
    },
    computed: {
        ...mapState({
            cartao: state => state.Frequentador.frequentador,
            idFrequentador: state => state.Auth.userId,
            image:  state => state.Frequentador.frequentador.image
        })
    },

    watch: {
        idFrequentador() {
            console.log(this.idFrequentador)
            if (this.idFrequentador > '') {
                this.getFrequentador(this.idFrequentador)
                this.linkQrCode = process.env.VUE_APP_LARAVEL_API_URL + 'qrcode/' + this.idFrequentador 
            }
            
        },
        image:{
            handler: function (val, oldVal) {                
                if(this.image){
                    let urlStorage = process.env.VUE_APP_LARAVEL_STORAGE_URL 
                    this.imgAvatar = urlStorage + '/' + this.image
                    console.log(this.imgAvatar)
                }            
            },
            deep: true
        }
    }
}
</script>

<style scoped>
.img-cartao {
    width: 150px;
    border-radius: 50%
}
.card-img-top{
    width: 160px;
    height:160px;
    border-radius: 50%;
     margin-left: auto;
  margin-right: auto;
  margin-top:10px;
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
