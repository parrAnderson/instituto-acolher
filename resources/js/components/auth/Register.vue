<template>
<div>
    <nav-header></nav-header>

    <div class="container">
        <h1 class="form-heading">Login Acolher</h1>
        <div class="login-form">
            <div class="main-div">
                <div class="panel">
                    <h2>Cadastro Acolher</h2>
                    <p>Por favor digite sua conta de email e senha</p>
                </div>

                <form id="register" novalidate="true">

                    <div class="form-group">
                        <input type="text" required v-model="inputs.name" class="form-control" placeholder="Nome Completo">
        </div>

                        <div class="form-group">
                            <input type="email"  required v-model="inputs.email" class="form-control" placeholder="E-mail">
        </div>

                            <div class="form-group">
                                <input type="password" required autocomplete="off" v-model="inputs.password" class="form-control" id="inputPassword" placeholder="Senha">
        </div>

                                

                                <div class="form-group">
                                    <input type="password"  autocomplete="off" v-model="validatepassword" class="form-control" placeholder="Confirmar Senha">
        </div>
<span v-if="errors.password" class="text-danger">Senhas Diferentes</span>
                                    <div class="forgot">
                                    </div>
                                    <button @click.prevent.stop="registrar()" type="submit" class="btn btn-primary">Login</button>

                </form>
            </div>

        </div>
    </div>

    <Footer></Footer>
</div>
</template>

<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
import NavHeader from './../layouts/NavHeader'
import Footer from './../layouts/Footer'
import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: "Register",
    data() {
        return {
            validatepassword: "",
            inputs: {},
            errors: [],

        }
    },
    components: {
        NavHeader,
        Footer,
    },
    methods: {
        ...mapActions([
            'Register',
        ]),
       
        checkRequired() {             
            if(this.inputs.name && this.inputs.email){
                this.errors.required = true
                console.log("preenchido")
            }else{                
                this.errors.required = false
                console.log("Vazio")
            }                    
        },checkPass(){
             if (this.validatepassword === this.inputs.password) {
                this.errors.password = false
                console.log("validado")
            } else {
                this.errors.password = true
                console.log("Senha Diferente")
            }
        }
        ,
        registrar() {
            this.checkPass()
            this.checkRequired()
            if(!this.errors.password && this.errors.required){
                this.Register(this.inputs)
                this.inputs = []
                this.validatepassword = ""
                
                this.$router.push({ name: 'login' });
            }else{
                console.log("não registrado, com erros")
            }                     
        },

    },
    mounted() {
        // this.errors.password = false
        // console.log(this.errors.password)
    },
    watch: {
        validatepassword: function (){
            this.checkPass()
        },        
    }

}
</script>

<style scoped>
.form-heading {
    color: #fff;
    font-size: 23px;
}

.panel h2 {
    color: #444444;
    font-size: 18px;
    margin: 0 0 8px 0;
}

.panel p {
    color: #777777;
    font-size: 14px;
    margin-bottom: 30px;
    line-height: 24px;
}

.login-form .form-control {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
}

.main-div {
    background: #ffffff none repeat scroll 0 0;
    border-radius: 2px;
    margin: 10px auto 30px;
    max-width: 38%;
    /* padding: 50px 70px 70px 71px; */
}

.login-form .form-group {
    margin-bottom: 10px;
}

.login-form {
    text-align: center;
}

.forgot a {
    color: #777777;
    font-size: 14px;
    text-decoration: underline;
}

.login-form .btn.btn-primary {
    /* background: #f0ad4e none repeat scroll 0 0; */
    /* border-color: #f0ad4e; */
    /* color: #ffffff; */
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0;
}

.forgot {
    text-align: left;
    margin-bottom: 30px;
}

.botto-text {
    color: #ffffff;
    font-size: 14px;
    margin: auto;
}

.login-form .btn.btn-primary.reset {
    background: #ff9900 none repeat scroll 0 0;
}

.back {
    text-align: left;
    margin-top: 10px;
}

.back a {
    color: #444444;
    font-size: 13px;
    text-decoration: none;
}
</style>
