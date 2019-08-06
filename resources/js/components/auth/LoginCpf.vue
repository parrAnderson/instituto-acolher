<template>
    <div>
    <nav-header></nav-header>

    <div class="container-fluid">

      <div class="row justify-content-center row-space-form">
        <div class="col-12 col-lg-6 col-md-6">
           <div class="panel text-center">
   <h2>Login Acolher</h2>
 </div>

      <p class="text-center">Por favor digite sua conta de email e senha de acesso</p>


       <div class="row justify-content-center row-space-form">
          <div class="col-12 col-lg-8 col-md-8">
                <input type="email" required v-model="inputs.email" class="form-control" id="inputEmail" placeholder="E-mail">
          </div>
          <div class="col-12 col-lg-8 col-md-8">
              <input type="password" required autocomplete="off" v-model="inputs.password" class="form-control" id="inputPassword" placeholder="Senha">



          </div>         
          
      </div>

<div class="row row-space-form justify-content-center">
  <div class="col-12 col-lg-8 col-md-8">
            <a href="/../acolher/public/password/reset">
      Esqueceu a senha
    </a>
            <button @click.prevent.stop="logar()" type="submit" class="btn btn-primary text-right float-right">Login</button>
           <h6 v-if="this.loginMessage" class="text-danger text-center">{{this.loginMessage}}</h6>
          </div>
</div>

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
          // console.log(this.inputs)
          this.Logon(this.inputs)         
        }
         },
        computed: {
        ...mapState({
            login: state => state.Login.data,
            loginMessage: state => state.Login.message,
      
            
        }),    
    },watch:{
      login: function(val){   
        // console.log(this.loginMessage)
        // console.log(this.login)
        if(this.login.id){
          this.$router.push({ name: 'home' });
        }else{

        }  
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