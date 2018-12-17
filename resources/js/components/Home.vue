<template>
    <div>
        <nav-header></nav-header>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">QUEM SOMOS</h2>
                    <p>
                        O Instituto Acolher resulta da associação de integrantes de
                        <span class="font-weight-bold">diferentes grupos cristãos </span> de trabalho,
                        tendo todos eles como objetivos: o <span class="font-weight-bold">aprimoramento espiritual</span>
                        através da incessante busca da <span class="font-weight-bold">verdadeira reforma íntima</span>;
                        e as <span class="font-weight-bold">práticas do amor</span> e de <span class="font-weight-bold">apoio
                            ao próximo</span>.

                        <br><br>
                        O Instituto tem como <span class="font-weight-bold">pilar de sustentação</span>
                        os <span class="font-weight-bold">fundamentos</span> codificados por Allan Kardec,
                        em sua <span class="font-weight-bold">tríplice concepção: Ciência, Filosofia e Religião</span>.
                        <br>
                        Seguindo as diretrizes divulgadas pelo nobre codificador, os integrantes do
                        <span class="text-primary font-weight-bold">Acolher</span> <span class="font-weight-bold">alicerçam</span>
                        seus trabalhos na <span class="font-weight-bold">fé raciocinada</span> e aprimorada através do
                        <span class="font-weight-bold">estudo constante</span> e cuidadoso, procurando afastarem-se de
                        “pré-conceitos” e
                        julgamentos, <span class="font-weight-bold">alimentando o conhecer</span> e sendo
                        sabedores que “possuímos em nós mesmos, pelo pensamento e a vontade, um poder de ação que
                        se estende muito além dos limites de nossa esfera corpórea”.

                        <br><br>
                        Conscientes da palavra do <span class="font-weight-bold">Nosso Mestre Jesus</span>,
                        segundo a qual, <span class="font-weight-bold">não há salvação fora da caridade</span>,
                        o <span class="font-weight-bold text-primary">Acolher</span> tem como propósito a
                        <span class="font-weight-bold">união de esforços</span> dos
                        <span class="font-weight-bold">diferentes grupos </span>que o constitui para
                        auxiliar no <span class="font-weight-bold">aprofundamento dos estudos e trabalhos preexistentes</span>
                        à sua criação, como também, objetiva
                        <span class="font-weight-bold">planejar e implementar novos projetos</span> voltados
                        <span class="font-weight-bold">à caridade</span>.


                        <br><br>
                        Fazendo jus ao seu nome, o Instituto tem como
                        <span class="font-weight-bold">regra precípua</span> a prática do
                        <span class="font-weight-bold">acolher: recebendo</span>
                        os irmãos, <span class="font-weight-bold">acolhendo-os</span> e
                        <span class="font-weight-bold">aceitando-os</span>, sempre com
                        <span class="font-weight-bold">sorriso verdadeiro e amável</span>, seguido de
                        <span class="font-weight-bold">abraço fraternal</span>, e assim,
                        <span class="font-weight-bold">envolvendo</span> a todos no sentimento do
                        <span class="font-weight-bold">Amor Puro</span> e na sintonia de
                        <span class="font-weight-bold">faixas vibratórias positivas e revigorantes</span>.

                        Os trabalhos do Instituto <span class="font-weight-bold text-primary">Acolher</span>
                        são regidos em nome de <span class="font-weight-bold">Deus</span> e de
                        <span class="font-weight-bold">Jesus Cristo</span>,
                        dirigidos por <span class="font-weight-bold">Guias e Mentores Espirituais</span>
                        das comunidades do Plano Maior <span class="font-weight-bold">“Colônia Espiritual Paz e Amor”</span>,
                        <span class="font-weight-bold">“Colônia Vera Cruz”</span> e
                        <span class="font-weight-bold">“Hospital Escola André Luiz”</span>.
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
        name: "Home",
        components: {
            NavHeader,
            Footer,
        },
    }
</script>