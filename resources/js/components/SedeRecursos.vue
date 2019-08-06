<template>
<div>
    <nav-header></nav-header>

    <div class="container">
        <div class="row row-space">
            <div class="col-12">
                <h2 class="text-center">SEDE E RECURSOS</h2>
                <p>  
O Instituto <span class="font-weight-bold text-primary">Acolher</span> possui 
<span class="font-weight-bold">Sede Própria</span> (disponibilizada através de comodato sem custos) onde
ocorrem as <span class="font-weight-bold">atividades</span> dos 
<span class="font-weight-bold">diferentes grupos</span> que o constitui, 
bem como as iniciativas decorrentes
do próprio instituto.<br><br>

<span class="font-weight-bold">Todas</span> as atividades de <span class="font-weight-bold">assistência</span>
 e <span class="font-weight-bold">apoio</span> a <span class="font-weight-bold">necessitados</span>
 oferecidas nas dependências do
Instituto <span class="font-weight-bold text-primary">Acolher</span> são prestadas de maneira 
<span class="font-weight-bold">totalmente gratuita.</span> <br><br>

<span class="font-weight-bold">Em hipótese alguma pessoas em atendimento serão chamadas
     a contribuir financeiramente com o instituto.</span>
 Da mesma forma, são <span class="font-weight-bold">vetadas</span> as práticas de 
 <span class="font-weight-bold">venda</span> de <span class="font-weight-bold">rifas, ingressos </span>
 ou <span class="font-weight-bold">convites, durante </span><span class="font-weight-bold">sessões</span>
  de <span class="font-weight-bold">atendimento,</span> ocorridas nas dependências do 
 Instituto <span class="font-weight-bold text-primary">Acolher.</span> <br><br>

No caso de <span class="font-weight-bold">Cursos</span> e <span class="font-weight-bold">Palestras>,</span>
     poderão ser estabelecidas <span class="font-weight-bold">taxas de contribuição</span>
a serem <span class="font-weight-bold">pagas</span> pelos <span class="font-weight-bold">participantes,</span> 
    como forma de <span class="font-weight-bold">auxílio</span> nas 
    <span class="font-weight-bold">despesas gerais,</span>
 tais como: elaboração de <span class="font-weight-bold">materiais de estudo,</span>
  <span class="font-weight-bold">manutenção</span>, <span class="font-weight-bold">limpeza</span> etc. <br><br>

Os <span class="font-weight-bold">interessados</span> em 
<span class="font-weight-bold">contribuir financeiramente</span> com o Instituto 
<span class="font-weight-bold text-primary">Acolher</span> poderão fazê-lo
através das seguintes modalidades previstas em seu Estatuto: <br><br>

<ul>
    <li>
    <span class="font-weight-bold">Associados Contribuintes:</span>
    membros registrados na secretaria do Instituto
comprometidos em efetuar contribuição mensal no valor de <span class="font-weight-bold">R$ 60,00.</span>

    </li>
</ul>
<ul>
    <li>
<span class="font-weight-bold">Frequentadores:</span> membros registrados na secretaria do Instituto, 
participantes de cursos ou frequentadores das atividades de atendimento da casa, que, voluntariamente, 
queiram contribuir com o valor de <span class="font-weight-bold">R$ 60,00</span> ou outro montante acordado com o Instituto.

    </li>
</ul>

<ul>
    <li>
<span class="font-weight-bold">Simpatizantes: </span>  pessoas interessadas em contribuir pontualmente com o Instituto.
    </li>
</ul>

O <span class="font-weight-bold">registro</span> de <span class="font-weight-bold">doações</span> na secretaria do Instituto 
<span class="font-weight-bold text-primary">Acolher</span> é <span class="font-weight-bold">confidencial</span> e <span class="font-weight-bold">sigiloso,</span>
 sendo mantido <span class="font-weight-bold">exclusivamente</span>
 para o devido <span class="font-weight-bold">planejamento financeiro</span> da instituição e para <span class="font-weight-bold">prestação de contas</span>
  ao <span class="font-weight-bold">Conselho Fiscal.</span>


          </p>
            </div>
        </div>

    </div>

    <!-- <div class="row justify-content-md-center">
            <div class="col-md-4 ">
                <img class="img-fluid align-center" src="/img/logo-footer.png" alt="">
            </div>
        </div> -->

    <Footer></Footer>

</div>
</template>

<script>
import NavHeader from './layouts/NavHeader'
import Footer from './layouts/Footer'
export default {
    name: "SedeRecursos",
    components: {
        NavHeader,
        Footer,
    },
}
</script>
