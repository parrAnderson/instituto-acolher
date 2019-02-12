<template>
    <div>
    <nav-header></nav-header>

<div class="container">
<h1 class="form-heading">Login Acolher</h1>
<div class="login-form">
<div class="main-div">
    <div class="panel">
   <h2>Login Acolher</h2>



   <p>Por favor digite sua conta de email e senha</p>
   </div>
  
    <form id="Login">

        <div class="form-group">

            <input type="text" class="form-control" id="cpf" v-mask="'###.###.###.##'" placeholder="Digite seu CPF" v-model="inputs.cpf">
            <!-- <input type="email" required v-model="inputs.email" class="form-control" id="inputEmail" placeholder="E-mail"> -->

        </div>

        <!-- <div class="form-group">

            <input type="password" required autocomplete="off" v-model="inputs.password" class="form-control" id="inputPassword" placeholder="Senha">

        </div> -->
      
        <button @click.prevent.stop="logar()" type="submit" class="btn btn-primary">Login</button>

    </form>
    </div>
<p class="botto-text"> </p>
</div></div>

       <Footer></Footer>
    </div>
</template>

<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
    import NavHeader from './../layouts/NavHeader'
    import Footer from './../layouts/Footer'
    import {mapState, mapActions} from 'vuex'

 import { mask } from "vue-the-mask";

export default {
    name: "Login",
    data(){
      return{
        
      inputs:{},
    
      }
    },
     components: {
            NavHeader,
            Footer,
        },
         methods: {
        ...mapActions([
            'Logon',          
        ]),
        logar(){
          this.Logon(this.inputs)         
        }
         },
        computed: {
        ...mapState({
            login: state => state.Login,
        }),    
    },watch:{
      login: function(){
        console.log(this.login.data)
      }
    },
    directives: { mask }

}
</script>

<style scoped>

.form-heading { color:#fff; font-size:23px;}
.panel h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
.panel p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}
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
  margin-bottom:10px;
}
.login-form{ text-align:center;}
.forgot a {
  color: #777777;
  font-size: 14px;
  text-decoration: underline;
}
.login-form  .btn.btn-primary {
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
  text-align: left; margin-bottom:30px;
}
.botto-text {
  color: #ffffff;
  font-size: 14px;
  margin: auto;
}
.login-form .btn.btn-primary.reset {
  background: #ff9900 none repeat scroll 0 0;
}
.back { text-align: left; margin-top:10px;}
.back a {color: #444444; font-size: 13px;text-decoration: none;}

</style>