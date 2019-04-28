<template>
    <div>
        

       
        <!-- Side Navbar -->
        <nav class="side-navbar">
            <div class="side-navbar-wrapper">
                <!-- Sidebar Header    -->
                <div class="sidenav-header d-flex align-items-center justify-content-center">
                    <!-- User Info-->
                    <div class="sidenav-header-inner text-center"><img src="/../../acolher/public/img/admin/avatar-7.jpg" alt="person" class="img-fluid rounded-circle">
                        <h2 class="h5">Administradores</h2><span>Acolher</span>
                    </div>
                    <!-- Small Brand information, appears on minimized sidebar-->
                    <div class="sidenav-header-logo"><a href="index.html" class="brand-small text-center"> <strong>A</strong><strong class="text-primary">C</strong></a></div>
                </div>
                <!-- Sidebar Navigation Menus-->
                <div class="main-menu">
                    <h5 class="sidenav-heading">Menu</h5>
                    <ul id="side-main-menu" class="side-menu list-unstyled">
                        <li>
                            <router-link to="/">
                                <a href="#"> <i class="fas fa-home"></i>Home</a>
                            </router-link>
                        </li>
    
                        <li>
                            <router-link to="/users">
                                <a href="#"> <i class="fas fa-clipboard-list"></i>Fichas</a>
                            </router-link>
                        </li>
    
                        <li>
                            <router-link to="/atendimentos">
                                <a href="#"> <i class="far fa-calendar-alt"></i>Atendimentos</a>
                            </router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    
    
    </div>
</template>

<script>
export default {
    name: "NavHeader"
}
</script>

<style scoped>

</style>