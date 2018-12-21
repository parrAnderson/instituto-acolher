<template>
    <div>
        <nav-header></nav-header>
        <div class="container">
            <div class="row row-space">
                <div class="col-12">
                    <h4 class="text-center">Cadastro prévio para Atendimento a adulto - 1ª vez</h4>
                </div>
            </div>

            <div class="row row-space justify-content-center row-space-form">
                <div class="col-8 ">
                    <select name="atividade" class="form-control" id>
                        <option disable>Indique a atividade de qual pretende receber atendimento *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" class="form-control" placeholder="Nome Completo da Pessoa a ser Atendida *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" v-mask="'##/##/####'" placeholder="Data de Nascimento*">
                </div>
                <div class="col-4">
                    <select name="genero" class="form-control" id>
                        <option disable>Gênero *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" v-mask="'###.###.###.##'" placeholder="CPF *">
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" v-mask="'##.###.###.#'" placeholder="RG *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" v-mask="'(##)#####-####'" placeholder="Telefone Celular">
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" v-mask="'(##)####-####'" placeholder="Telefone Fixo">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" class="form-control" placeholder="Email *">
                </div>
            </div>

            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <select name="estadocivil" class="form-control" id>
                        <option disable>Estado Civil *</option>
                    </select>
                </div>
                <div class="col-4">
                    <select name="religiao" class="form-control" id>
                        <option disable>Religião *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" v-mask="'#####-###'" placeholder="CEP *">
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" placeholder="Bairro *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" class="form-control" placeholder="Logradouro">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" placeholder="Número *">
                </div>
                <div class="col-4">
                    <input type="text" class="form-control" placeholder="Complemento *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <input type="text" class="form-control" placeholder="Município *">
                </div>
                <div class="col-4">
                    <select name="estado" class="form-control" id>
                        <option disable>Estado *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <select name="fumante" class="form-control" id>
                        <option disable>É Fumante? *</option>
                    </select>
                </div>
                <div class="col-4">
                    <select name="bebida" class="form-control" id>
                        <option disable>Consome Bebida Alcólica? *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-4">
                    <textarea rows="3" class="form-control" placeholder="Caso possua outro vicio, indique aqui">
                    </textarea>
                </div>
                <div class="col-4">
                    <textarea rows="3" class="form-control" placeholder="Se está sob tratamento médico, indique aqui">
                            </textarea>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Já frequentou ou frequenta alguma casa Kardecista / Espírita? *</option>
                    </select>
                </div>
            </div>

            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Já frequentou ou frequenta alguma casa Apômetra? *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Já frequentou ou frequenta alguma casa Apômetra? *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Já frequentou ou frequenta alguma casa Umbandista? *</option>
                    </select>
                </div>
            </div>

            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Tem conhecimento da doutrina Kardecista / Espírita? *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Tem conhecimento da técnica de Apometria codificada pelo Dr. Lacerda? *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Tem conhecimento dos principios da Umbanda *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Já leu o Livro dos Espíritos *</option>
                    </select>
                </div>
            </div>

            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Já leu o Livro dos Médiuns *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Já leu o Livro o Evangelho Segundo o Espiritismo? *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Já leu Espirito e Matéria: Um Novo Horizonte para a Medicina? *</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" class="form-control" placeholder="Caso deseje, indique outros livros espiritualistas que já tenha lido.">
                </div>
            </div>

            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <input type="text" class="form-control" placeholder="Como soube do Acolher? *">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-8">
                    <select class="form-control" id>
                        <option disable>Caso tenha recebido uma indicação assinale abaixo:</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                    <div class="col-8">
                        <input type="text" class="form-control" placeholder="informe o nome da pessoa que lhe indicou o Acolher *">
                    </div>
                </div>
                <div class="row justify-content-center row-space-form">
                        <div class="col-8">
                            <textarea rows="3" class="form-control" placeholder="O que levou a recorrer ao Acolher? Aponte resumidamente os seus 3 principais problemas: *">
                            </textarea>
                        </div>
                        
                    </div>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavHeader from "./../layouts/NavHeader";
    import Footer from "./../layouts/Footer";

    import { mask } from 'vue-the-mask'

    export default {
        name: "AtendimentoAdulto",
        components: {
            NavHeader,
            Footer,
        },
        directives: { mask }
    };
</script>