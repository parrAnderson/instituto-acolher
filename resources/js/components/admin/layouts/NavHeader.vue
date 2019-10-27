<template>
<div>

    <!-- Side Navbar -->
    <nav class="side-navbar">
        <div class="side-navbar-wrapper">
            <!-- Sidebar Header    -->
            <div class="sidenav-header d-flex align-items-center justify-content-center">
                <!-- User Info-->
                <div class="sidenav-header-inner text-center"><img src="/../../acolher/public/img/admin/avatar-7.jpg" alt="person" class="img-fluid rounded-circle">
                    <h2 class="h5">Administrador</h2><span>Acolher</span>
                </div>
                <!-- Small Brand information, appears on minimized sidebar-->
                <div class="sidenav-header-logo"><a href="#" class="brand-small text-center"> <strong>A</strong><strong class="text-primary">C</strong></a></div>
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
                        <a href="#atendimentoDropdown" class="dropdown-toggle-menu" aria-expanded="false" data-toggle="collapse">
                            <i class="far fa-calendar-alt"></i>
                            Fichas <i class="fa-dropdown fas fa-caret-down"></i>
                        </a>
                        </router-link>
                        <ul id="atendimentoDropdown" class="collapse list-unstyled ">
                            <li>
                                <router-link to="/users">
                                    Todos
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'tipoficha', params: {tipoficha: 'atendidos'}}">
                                    Atendidos
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'tipoficha', params: {tipoficha: 'obreiro'}}">
                                    Obreiros
                                </router-link>
                            </li>
                        </ul>    

                    </li>

                    <!-- <li>
                        <a href="#atendimentoDropdown" class="dropdown-toggle-menu" aria-expanded="false" data-toggle="collapse">
                            <i class="far fa-calendar-alt"></i>
                            Atendimentos <i class="fa-dropdown fas fa-caret-down"></i>

                        </a>
                        <ul id="atendimentoDropdown" class="collapse list-unstyled ">
                            <li>
                                <router-link :to="{name: 'tipoatendimento', params: {tipoatendimento: 'todos'}}">
                                    Todos
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'tipoatendimento', params: {tipoatendimento: 'Prática do Evangelho (5as. feiras)'}}">
                                    Prática do Evangelho
                                </router-link>
                            </li>

                            <li>
                                <router-link :to="{name: 'tipoatendimento', params: {tipoatendimento: 'Apometria (2as. feiras)'}}">
                                    Apometria
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'tipoatendimento', params: {tipoatendimento: 'Obreiros da Luz - Entidades de Umbanda(1 Sábado por mês)'}}">
                                    Obreiros da Luz
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'tipoatendimento', params: {tipoatendimento: 'Passes (2as. feiras)'}}">
                                    Passes
                                </router-link>
                            </li>

                        </ul>
                    </li> -->

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

<style>
.dropdown-toggle-menu::after {
    display: none ! important
}

.dropdown-toggle-menu::before {
    display: none ! important
}

.fa-dropdown {
    float: right;
    margin-top: 4px;
}
</style>
