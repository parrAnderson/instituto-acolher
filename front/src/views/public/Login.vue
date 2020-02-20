<template>
<div>

    <HeaderPublic>
        <template v-slot:mainpage>
            <div class="content">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-5">
                            <div class="card">
                                <div class="card-header border-0">
                                    <div class="d-flex justify-content-between">
                                        <h1 class="m-0 text-dark">LOGIN ACOLHER</h1>
                                    </div>
                                </div>
                                <div class="card-body" v-show="!userId">
                                    <p>Por favor digite sua conta de email e senha de acesso</p>
                                    <input type="text" class="form-control" v-model="inputs.email"> <br>
                                    <input type="password" class="form-control" v-model="inputs.password"><br>

                                    <div class="row">
                                        <div class="col-6">
                                            <a :href="resetLink">
                                                <p>Esqueceu a senha?</p>
                                            </a>
                                        </div>
                                        <div class="col-6 text-center">
                                            <button v-show="!userId && btnLogin" class="btn btn-block btn-primary btn-sm" @click="logar()">
                                                Login
                                            </button>
                                            
                                            <div v-show="!userId && !btnLogin" class="spinner-border text-info text-center" role="status">
                                                <span class="sr-only">Carregando ...</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="callout callout-warning" v-if="error.message">
                                        <p>{{error.message}}</p>
                                    </div>

                                </div>
                                <div v-if="userId" class="btn btn-block btn-danger btn-sm" @click="logout()">
                                    Sair
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </template>
    </HeaderPublic>

</div>
</template>

<script>

import {
    mapState,
    mapActions,
    mapGetters,
} from "vuex"
import HeaderPublic from '@/views/layouts/HeaderPublic.vue'
export default {
    name: "Login",
    components: {
        HeaderPublic,
   
    },
    data() {
        return {
            //  urlApi: process.env.LARAVEL_APP_API_URL,
            appTitle: process.env.VUE_APP_TITLE,
            resetLink: process.env.VUE_APP_LARAVEL_RESET_URL,
            inputs: {},
            status: "",
            btnLogin: true,
            

        }
    },

    beforeMount() {
        

    },
    computed: {
        ...mapState({
            auth: state => state.Auth,
            error: state => state.Auth.error,
            userId: state => state.Auth.userId,
            
        }),
       
    },
    methods: {
        ...mapActions([
            'login',
            'logout',
        ]),
        logar() {
            this.btnLogin = false
            this.login(this.inputs)
            
        },
        loginRedirect() {            
                this.$router.push({
                    name: 'home'
                })
            }
        },

   

    watch:{ 
        userId(){
            if (this.userId) {
                this.loginRedirect()
            }
        },error(){
            if(this.error){
                this.btnLogin = true
            }
        }
        
    },
}
</script>
