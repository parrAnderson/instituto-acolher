<template>
<div>

    <div class="wrapper" >
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" @click="mostrarSideBar()" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
                
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link to="/" class="nav-link">
                        <a href="#" class="nav-link">Home</a>
                    </router-link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link :to="{name:'institucional'}" class="nav-link">
                        <a href="#" class="nav-link">Institucional</a>
                    </router-link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link :to="{name:'sederecursos'}" class="nav-link">
                        <a href="#" class="nav-link">Sede e Recursos</a>
                    </router-link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link :to="{name:'direcao'}" class="nav-link">
                        <a href="#" class="nav-link">Direção</a>
                    </router-link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link :to="{name:'publicacoes'}" class="nav-link">
                        <a href="#" class="nav-link">Publicações</a>
                    </router-link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link :to="{name:'contato'}" class="nav-link">
                        <a href="#" class="nav-link">Contato</a>
                    </router-link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link :to="{name:'horariosatendimento'}" class="nav-link">
                        <a href="#" class="nav-link">Horarios de Atendimento</a>
                    </router-link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link :to="{name:'conteudocursos'}" class="nav-link">
                        <a href="#" class="nav-link">Conteúdo dos Cursos</a>
                    </router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-comments"></i>
                        <span class="badge badge-danger navbar-badge">0</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer">Ver todas as mensagens</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-bell"></i>
                        <span class="badge badge-warning navbar-badge">0</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    </div>
                </li>
                <li class="nav-item">
                </li>
            </ul>
        </nav>

        <SideBar v-bind:marginLeft="marginLeftPx"></SideBar>
        <!-- <SideBar></SideBar> -->
        <div class="content-wrapper"  @click="ocultarSideBar()">
            <div class="content-header">
                <div class="container-fluid">

                    
                </div>
            </div>
            <section class="content">
             <div class="container-fluid">
                 <div class="row mb-2">
                        <div class="col-12">
                            <slot name="mainpage"></slot>
                        </div>
                    </div>
             </div>
            </section>
        </div>

        <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>

    </div>
    <!-- </body> -->
</div>
</template>

<script>
import SideBar from './SideBar'
import VueScript2 from 'vue-script2'
import {
    mapState,
    mapActions
} from "vuex"
export default {
    name: "Header",
    components: {
        SideBar,
    },
    data() {
        return {
            marginLeftPx: ""
        }
    },
    methods:{
        mostrarSideBar(){
            let tamanhoTela = window.innerWidth     
            if(tamanhoTela < 992)    {       
                this.marginLeftPx = '-0px'  
         
               
            }
        },
        ocultarSideBar(){       
            let tamanhoTela = window.innerWidth     
            if(tamanhoTela < 992){
                this.marginLeftPx = '-250px'
          
              
            }          

        }
    },

    // computed: {
    //     ...mapState({
    //          auth: state => state.Auth,            
    //         error: state => state.Auth.error,
           
    //     })
    // },
    mounted() {
        //colocar a verficação de login em outro lugar 

        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/jQuery-Knob/1.2.13/jquery.knob.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.1.2/js/tempusdominus-bootstrap-4.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.min.js')
        VueScript2.load('https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/js/OverlayScrollbars.js')
        VueScript2.load('https://cdn.jsdelivr.net/npm/admin-lte@3.0.0/dist/js/adminlte.min.js')

    },

}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css';
@import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.1.2/css/tempusdominus-bootstrap-4.min.css';
@import 'https://cdn.jsdelivr.net/npm/admin-lte@3.0.0/dist/css/adminlte.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/jqvmap/1.5.1/jqvmap.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/css/OverlayScrollbars.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-daterangepicker/3.0.5/daterangepicker.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css';
@import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700';



.navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    padding: 0.2rem 0.5rem;
}


@media (min-width: 992px){
    .sidebar-mini.sidebar-collapse .main-header {
        margin-left: 5.5rem !important;
    } 
    .sidebar-mini.sidebar-collapse .main-sidebar{
     width: 5.5rem;
}
.sidebar-mini.sidebar-collapse .content-wrapper{
    margin-left: 5.5rem !important;
}
}


.row-space {
    margin-top: 15px;
}
.sidebar-open #sidebar-overlay {
    display: none! important;
}
.btn{
    cursor: pointer;
}

</style>
