<template>
<div>

    <div class="container-fluid">
        <div class="row row-space">
            <div class="col-12">
                <h4 class="text-center">Frequentador - {{id_frequentador}} - {{tipo_ficha}}</h4>
            </div>
        </div>
        <div class="row  justify-content-center">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>Categoria / Nº</label> <br>
                <span class="text-left font-weight-bold" v-if="inputs.obreiro"> Obreiro - {{inputs.obreiro}}</span>
                <span class="text-left font-weight-bold" v-else> Frequentador - {{inputs.id}}</span>
            </div>
            
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="">Nome completo</label>
                    <input type="text" class="form-control" v-model="inputs.name" placeholder="Nome Completo da Pessoa a ser Atendida *">
                </div>
            </div>
        </div>
        

        <div class="row justify-content-center">
            <div class="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div class="form-group">
                    <label for="">Data de Nascimento</label>
                    <input type="text" class="form-control" @keyup="verificarIdade()" v-model="dataNascimentoFormatada" v-mask="'##/##/####'" placeholder="Data de Nascimento*">
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div class="form-group">
                    <label for="">Idade</label> <br>
                    <button type="button" class="btn btn-outline-secondary">{{inputs.data_nascimento  | idadeComMeses}}</button>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6" v-if="selectGenero !== 'Outros'">
                <label for="">Gênero</label>
                <select name="genero" v-if="selected" v-model="selectGenero" class="form-control">
                    <option :value="this.inputs.genero"> {{this.inputs.genero}}
                    </option>
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Prefiro não indicar</option>
                    <option>Outros</option>
                </select>
            </div>
            <div class="col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5" v-if="selectGenero == 'Outros'">
                <label for="">Gênero</label>
                <input type="text" class="form-control" v-model="textGenero" placeholder="Digite o Gênero">
            </div>
            <div class="col-2 col-lg-1" v-if="selectGenero == 'Outros'">
                <label for="">voltar</label>
                <div class="btn btn-primary" @click="voltarGenero()"><i class="fas fa-chevron-up"></i></div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">CPF</label>
                    <h5>{{inputs.cpf}}</h5>
                    <!-- <input type="text" class="form-control" v-model="inputs.cpf" v-mask="'###.###.###.##'" placeholder="CPF *"> -->
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">RG *</label>
                    <input type="text" class="form-control" v-model="inputs.rg" v-mask="'##.###.###-#'" placeholder="RG *">
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">Telefone Celular *</label>
                    <input type="text" class="form-control" v-model="inputs.celular" v-mask="'(##)#####-####'" placeholder="Telefone Celular *">
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">Telefone Fixo</label>
                    <input type="text" class="form-control" v-model="inputs.telefone" v-mask="'(##)####-####'" placeholder="Telefone Fixo">
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="">Email *</label>
                    <div class="row">
                        <div class="col-12">
                            <h5>{{inputs.email}}</h5>
                        </div>
                    </div>
                    <!-- <input type="text" v-model="inputs.email" class="form-control" placeholder="Email *"> -->
                </div>
            </div>
        </div>

        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">Estado Civil *</label>
                    <select name="estado_civil" v-model="inputs.estado_civil" class="form-control" id>
                        <option disabled value="">Estado Civil *</option>
                        <option value="Solteiro(a)">Solteiro(a)</option>
                        <option value="Casado(a)">Casado(a)</option>
                        <option>União Estável</option>
                        <option>Separado(a)</option>
                        <option>Divorciado(a)</option>
                        <option>Viúvo(a)</option>
                        <option>Outros</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6" v-if="selectReligiao !== 'Outro'">
                <label>Religião</label>
                <select name="religiao" v-model="selectReligiao" class="form-control" id>
                    <option :value="this.inputs.religiao"> {{this.inputs.religiao}}</option>
                    <option value="Kardecista / Espírita">Kardecista / Espírita</option>
                    <option>Umbandista</option>
                    <option>Católica</option>
                    <option>Evangélica</option>
                    <option>Budista</option>
                    <option>Judaica</option>
                    <option>Candomblé</option>
                    <option>Prefiro não indicar</option>
                    <option>Outro</option>
                </select>
            </div>
            <div class="col-8 col-xs-8 col-sm-8 col-md-8 col-lg-5" v-if="selectReligiao == 'Outro'">
                <label>Religião</label>
                <input type="text" class="form-control" v-model="textReligiao" placeholder="Digite sua religião *">
            </div>
            <div class="col-2 col-lg-1" v-if="selectReligiao == 'Outro'">
                <label>Voltar</label>
                <div class="btn btn-primary" @click="voltarReligiao()"><i class="fas fa-chevron-up"></i></div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">CEP *</label>
                    <input type="text" v-model="inputs.cep" class="form-control" v-mask="'#####-###'" placeholder="CEP *">
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">Bairro *</label>
                    <input type="text" v-model="inputs.bairro" class="form-control" placeholder="Bairro *">
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="">Logradouro *</label>
                    <input type="text" v-model="inputs.logradouro" class="form-control" placeholder="Logradouro *">
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">Número *</label>
                    <input type="text" v-model="inputs.numero" class="form-control" placeholder="Número *">
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">Complemento *</label>
                    <input type="text" v-model="inputs.complemento" class="form-control" placeholder="Complemento *">
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">Município *</label>
                    <input type="text" v-model="inputs.municipio" class="form-control" placeholder="Município *">
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="">Estado *</label>
                    <select name="estado" v-model="inputs.estado" class="form-control" id>
                        <option disabled value="">Estado *</option>
                        <option value="SP - São Paulo">SP - São Paulo</option>
                        <option value="AC - Acre">AC - Acre</option>
                        <option value="AL - Alagoas">AL - Alagoas</option>
                        <option value="AP - Amapá">AP - Amapá</option>
                        <option value="AM - Amazonas">AM - Amazonas</option>
                        <option value="BA - Bahia">BA - Bahia</option>
                        <option value="CE - Ceará">CE - Ceará</option>
                        <option value="DF - Distrito Federal">DF - Distrito Federal</option>
                        <option value="ES - Espírito Santo">ES - Espírito Santo</option>
                        <option value="GO - Goiás">GO - Goiás</option>
                        <option value="MA - Maranhão">MA - Maranhão</option>
                        <option value="MT - Mato Grosso">MT - Mato Grosso</option>
                        <option value="MS - Mato Grosso do Sul">MS - Mato Grosso do Sul</option>
                        <option value="MG - Minas Gerais">MG - Minas Gerais</option>
                        <option value="PA - Pará">PA - Pará</option>
                        <option value="PB - Paraíba">PB - Paraíba</option>
                        <option value="PR - Paraná">PR - Paraná</option>
                        <option value="PE - Pernambuco">PE - Pernambuco</option>
                        <option value="PI - Piauí">PI - Piauí</option>
                        <option value="RJ - Rio de Janeiro">RJ - Rio de Janeiro</option>
                        <option value="RG - Rio Grande do Norte">RG - Rio Grande do Norte</option>
                        <option value="RS - Rio Grande do Sul">RS - Rio Grande do Sul</option>
                        <option value="RO - Rondônia">RO - Rondônia</option>
                        <option value="RR - Roraima">RR - Roraima</option>
                        <option value="SC - Santa Catarina">SC - Santa Catarina</option>
                        <option value="SE - Sergipe">SE - Sergipe</option>
                        <option value="TO - Tocantins">TO - Tocantins</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row justify-content-center row-space-form">
            <div class="col-12 text-center ">
                <span class="text-primary">Selecione os lugares que frequenta/frequentou</span>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="kardecista">Casa Kardecista / Casa Espírita?</label>
                    <select v-model="inputs.kardecista" class="form-control">
                        <option value>Casa Kardecista / Casa Espírita?</option>
                        <option>Nunca</option>
                        <option>Apenas uma vez</option>
                        <option>Regularmente</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="casa_apometria">Apômetra?</label>
                    <select v-model="inputs.casa_apometria" class="form-control">
                        <option value>Apômetra?</option>
                        <option>Nunca</option>
                        <option>Apenas uma vez</option>
                        <option>Regularmente</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="casa_umbandista">Terreiro de Umbanda</label>
                    <select v-model="inputs.casa_umbandista" class="form-control">
                        <option value>Umbandista</option>
                        <option>Nunca</option>
                        <option>Apenas uma vez</option>
                        <option>Regularmente</option>
                    </select>
                </div>
            </div>

        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 text-center ">
                <div class="col-12 text-center text-primary">Possui conhecimentos sobre a Doutrina / Filosofia</div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="doutrina_kardecista">Kardecista / Espírita?</label>
                    <select v-model="inputs.doutrina_kardecista" class="form-control">
                        <option value>Kardecista / Espírita?</option>
                        <option>Sim, superficial</option>
                        <option>Sim, considerável</option>
                        <option>Sim, profundo</option>
                        <option>Não</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-group">
                    <label for="principios_umbanda">Umbandista</label>
                    <select v-model="inputs.principios_umbanda" class="form-control">
                        <option value>Umbandista</option>
                        <option>Sim, superficial</option>
                        <option>Sim, considerável</option>
                        <option>Sim, profundo</option>
                        <option>Não</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="apometria_codificada">Apômetra</label>
                    <select v-model="inputs.apometria_codificada" class="form-control">
                        <option value>Apômetra</option>
                        <option>Sim, superficial</option>
                        <option>Sim, considerável</option>
                        <option>Sim, profundo</option>
                        <option>Não</option>
                    </select>
                </div>
            </div>

        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center text-primary">Selecione os livros que já leu:</div>
        </div>

        <div class="row row-space-form justify-content-center">
            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-check">
                    <input type="checkbox" v-model="inputs.livro_espiritos" class="form-check-input" id="livro_espiritos" name="livro_espiritos">
                    <label class="form-check-label" for="livro_espiritos">Livro dos Espíritos</label>
                </div>
            </div>

            <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="form-check">
                    <input type="checkbox" v-model="inputs.livro_medius" class="form-check-input" id="livro_medius" name="livro_medius">
                    <label class="form-check-label" for="livro_medius">Livro dos Médiuns</label>
                </div>
            </div>
        </div>

      


                                    <div class="row row-space-form justify-content-center">
                                        <div class="col-12 col-lg-6">
                                            <div class="form-check">
                                                <input type="checkbox" v-model="inputs.livro_evangelho" class="form-check-input" id="livro_evangelho" name="livro_evangelho">
                                                <label class="form-check-label" for="livro_evangelho">Livro o Evangelho Segundo o Espiritismo?</label>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div class="form-check">
                                                <input type="checkbox" v-model="inputs.livro_medicina" class="form-check-input" id="livro_medicina" name="livro_medicina">
                                                <label class="form-check-label" for="livro_medicina">Espirito e Matéria: Um Novo Horizonte para a
                                                    Medicina?</label>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div class="row row-space-form justify-content-center">
                                        <div class="col-12 col-lg-6">
                                            <div class="form-check">
                                                <input type="checkbox" v-model="inputs.livro_oqueeespiritismo" class="form-check-input" id="livro_oqueeespiritismo" name="livro_oqueeespiritismo">
                                                <label class="form-check-label" for="livro_oqueeespiritismo">O que é o Espiritismo</label>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div class="form-check">
                                                <input type="checkbox" v-model="inputs.livro_ceueinferno" class="form-check-input" id="livro_ceueinferno" name="livro_ceueinferno">
                                                <label class="form-check-label" for="livro_ceueinferno">Céu e Inferno</label>
                                            </div>
                                        </div>
                                    </div>
                             
                                    <div class="row row-space-form justify-content-center">
                                        <div class="col-12 col-lg-6">
                                            <div class="form-check">
                                                <input type="checkbox" v-model="inputs.livro_genese" class="form-check-input" id="livro_genese" name="livro_genese">
                                                <label class="form-check-label" for="livro_genese">A Gênese</label>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div class="form-check">
                                                <input type="checkbox" v-model="inputs.livro_nossolar" class="form-check-input" id="livro_nossolar" name="livro_nossolar">
                                                <label class="form-check-label" for="livro_nossolar">Nosso Lar</label>
                                            </div>
                                        </div>
                                   
                                </div>

        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="">Caso deseje, indique outros livros espiritualistas que já tenha lido.</label>
                    <input type="text" v-model="inputs.outros_livros" class="form-control" placeholder="Caso deseje, indique outros livros espiritualistas que já tenha lido.">
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="">Como soube do Acolher? *</label>
                    <select class="form-control" v-model="inputs.como_soube">
                        <option disabled value="">Como soube do Acolher? *</option>
                        <option>Parente</option>
                        <option>Amigo</option>
                        <option>Conhecido</option>
                        <option>Site</option>
                        <option>Whatsapp</option>
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>Youtube</option>
                        <option>Outros</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="">Caso tenha sabido do Acolher por indicação de alguém, assinale abaixo:</label>
                    <select class="form-control" v-model="inputs.indicacao">
                        <option disabled value="">Caso tenha sabido do Acolher por indicação de alguém, assinale abaixo:</option>
                        <option value="Tratou-se de indicação de frequentador do Acolher">Tratou-se de indicação de frequentador do Acolher</option>
                        <option value="Tratou-se de indicação de Obreiro do Acolher">Tratou-se de indicação de Obreiro do Acolher</option>

                        <option value="Outros">Outros</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-space-form">
            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="">Informe o nome da pessoa que lhe indicou o Acolher</label>
                    <input type="text" v-model="inputs.nome_indicacao" class="form-control" placeholder="Informe o nome da pessoa que lhe indicou o Acolher">
                </div>
            </div>
        </div>
     

    </div>

    <div class="container-fluid container-space">
        <div v-if="menor">
            <h5 class="text-center"> Dados do responsável </h5>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="text" v-model="inputs.nome_responsavel" class="form-control" placeholder="Nome Completo do Responsável pelo(a) menor a ser atendido(a) *">
                </div>
            </div>

            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <input type="text" v-model="inputs.cpf_responsavel" v-mask="'###.###.###.##'" placeholder="CPF do Responsável pelo(a) menor a ser atendido(a)" class="form-control">
                </div>
                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <input type="text" v-model="inputs.rg_responsavel" v-mask="'##.###.###-#'" placeholder="RG do Responsável pelo(a) menor a ser atendido(a) *" class="form-control">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <input type="text" v-model="inputs.telefone_responsavel" v-mask="'(##) ####-####'" placeholder="Telefone Fixo do Responsável pelo(a) menor a ser atendido(a)" class="form-control">
                </div>
                <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <input type="text" v-model="inputs.celular_responsavel" v-mask="'(##) #####-####'" placeholder="Telefone Celular do Responsável pelo(a) menor a ser atendido(a) *" class="form-control">
                </div>
            </div>
            <div class="row justify-content-center row-space-form">
                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="text" v-model="inputs.email_responsavel" class="form-control" placeholder="E-mail do Responsável pelo(a) menor a ser atendido(a) *">
                </div>
            </div>
        </div>
    </div>
     <div class="container-fluid" v-if="tipo_ficha == 'editar'">
        <div class="row row-space">
            <div class="col-12">
                <div class="row justify-content-end row-space-btn">
                    <div class="col text-right" v-if="!retorno">
                        <button @click="salvarDadosFrequentador()" type="submit" class="btn btn-primary">
                            <i class="fas fa-print"></i>
                            SALVAR</button>
                    </div>                    
                </div>
                <div v-if="required !== 'vazio'" class="row justify-content-center row-space-form">
                    <div class="alert alert-danger" role="alert">
                        Por favor! Preencha todos os campos obrigatórios *
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</div>
</template>

<script>
import moment from 'moment'
import {
    mask
} from "vue-the-mask";
import {
    mapActions,
    mapState
} from 'vuex'
export default {
    name: "FichaAtendimento",
    components: {
      
    },
    props:{
        id_frequentador: {
            type: Number,
            required: false,
            defaut: null,
        },
        tipo_ficha:{
            type: String,
            required: false,
            defaut: 'visualizar',
        },
        id_obreiro:{          
            required: false,
            defaut: null,
        },
    },
    data() {
        return {
            dataNascimentoFormatada:"",
            idAtendimento: this.$route.params.id,
            inputs: {},
            selected: false,
            required: {},
            menor: false,
            idade: "",
            selectGenero: "",
            textGenero: "",
            selectReligiao: "",
            textReligiao: "",
            retorno: this.$route.params.retorno,
        }
    },
    
    methods: {
       
        //Register
        voltarReligiao() {
            if (this.selectReligiao === 'Outro') {
                this.selectReligiao = ''
                this.textReligiao = ''
                this.inputs.religiao = this.selectReligiao
            } else {
                this.inputs.religiao = this.textReligiao
            }
        },
        voltarGenero() {
            if (this.selectGenero === 'Outros') {
                this.selectGenero = ''
                this.textGenero = ''
                this.inputs.genero = this.selectGenero
            } else {
                this.inputs.genero = this.textGenero
            }
        },
        verificarIdade() {

            if (this.dataNascimentoFormatada) {
              
                if (this.dataNascimentoFormatada.length == 10) {
                    // var datanascimento = new Date(this.dataNascimentoFormatada)
                    var nascimento = this.dataNascimentoFormatada.split("/");
                    // var nascimento = this.dataNascimentoFormatada
                    var dataNascimento = new Date(parseInt(nascimento[2], 10),
                        parseInt(nascimento[1], 10) - 1,
                        parseInt(nascimento[0], 10));
                    var diferenca = Date.now() - dataNascimento.getTime();
                    var calIdade = new Date(diferenca);
                    var idade = Math.abs(calIdade.getUTCFullYear() - 1970);
                    this.idade = idade
                    console.log(nascimento)
                    if (idade < 18) {
                        this.menor = true
                    } else {
                        this.menor = false
                    }
                }
            }
        },
        AtualizarStatusEncerramento(){
            // console.log("data" + this.atendimento.data_encerramento.length)
            if(this.retorno){
                this.atendimento.status_encerramento = 'Atendimento Concluido'
            }else{
                if(this.atendimento.data_encerramento){
                    if(this.atendimento.data_encerramento.length == 10 && this.atendimento.status_encerramento != 'Atendimento Concluido'){
                        this.atendimento.status_encerramento = "Aguardando Retorno"
                    }                                 
                }
                if(this.atendimento.data_encerramento == '' || this.atendimento.data_encerramento == null){
                        this.atendimento.status_encerramento = ""
                    }   
            }                   
        },
        //fim Register
        salvarDadosFrequentador() {
            this.inputs.data_nascimento = moment(this.dataNascimentoFormatada).format("YYYY-MM-DD");

            if(this.id_obreiro){
                    var acao = {
                    'id_obreiro': this.id_obreiro,
                    'acao_obreiro' : "Atualizou dados do Frequentador",
                    'id_atualizado' : this.id_frequentador
                }     
                this.AcaoObreiro(acao) 
               
            }
                   
            this.atualizarFrequentador(this.inputs)

        },
        imprimir() {
            window.print();
        },
        selectInputs() {
            this.selected = true
        },
        ...mapActions([
            'getFrequentador',
            'GetAtendimento',
            'UpdateAllAtendimento',
            'atualizarFrequentador',
            'AcaoObreiro',
            // 'ChangeUpdateValue',
        ]),
        ChangeUpdateValue(){
         
        }
    },
    computed: {
        ...mapState({
            frequentador:state  => state.Frequentador.frequentador
            // show: state => state.Users.show,
            // atendimento: state => state.FazerAtendimento.show,
            // update: state => state.Users.update.data,
        })
    },
    
    watch: {     
        id_frequentador(){
            if(this.id_frequentador > ''){
                this.getFrequentador(this.id_frequentador)
            }
        }   ,
        frequentador:{
            handler: function (val, oldVal) {              
            
            this.inputs = this.frequentador
            
            this.selectGenero = this.inputs.genero
            this.selectReligiao = this.inputs.religiao
            this.dataNascimentoFormatada =  moment(this.inputs.data_nascimento).format("DD/MM/YYYY");
            if(this.dataNascimentoFormatada.length == 10){
                this.verificarIdade()
            }
                
            },

            deep: true

            
        },
        update() {
            if (this.update == "atualizado") {
                this.ChangeUpdateValue()
                if(this.retorno){
                this.$router.push({
                    name: 'encerramentos',                    
                });
                }else{
                    this.$router.push({
                    name: 'fazertipoatendimento',
                    params: {
                        tipoatendimento: this.atendimento.tipo_atendimento
                    }
                });
                }                
            }
        },
        atendimento() {
            // this.GetUser(this.atendimento.user_id)
        },
        textReligiao() {
            this.inputs.religiao = this.textReligiao
        },
        selectReligiao() {
            if (this.selectReligiao === 'Outro') {
                this.inputs.religiao = this.textReligiao
            } else {
                this.inputs.religiao = this.selectReligiao
            }
        },
        textGenero() {
            this.inputs.genero = this.textGenero
        },
        selectGenero() {
            if (this.selectGenero === 'Outros') {
                this.inputs.genero = this.textGenero
            } else {
                this.inputs.genero = this.selectGenero
            }
        },
    },
    filters: {
        idadeComMeses(value) {

            if (value) {

                let data = moment(new Date(value));

                var b = moment(data)
                var a = moment(new Date())

                var years = a.diff(b, 'year');
                b.add(years, 'years');

                var months = a.diff(b, 'months');
                b.add(months, 'months');

                var days = a.diff(b, 'days');
                var calc = years + ' anos e ' + months + ' meses'

                return calc

            }

        },
    },
    beforeMount() {
        // this.ChangeUpdateValue()
        this.atendimento = {}
        if(this.id_frequentador){
            this.getFrequentador(this.id_frequentador)
        }
        
        this.required = "vazio"

        this.selectInputs()
        this.inputs.estado_civil = ''
        this.inputs.fumante = ''
        this.inputs.bebida = ''
        this.inputs.drogas = ''
        this.inputs.como_soube = ''
        this.inputs.indicacao = ''
        this.inputs.estado = ''


         

    },
    directives: {
        mask
    }
}
</script>

<style scoped>
.row-space-btn {
    margin-top: 10px
}

.container-space {
    margin-top: 15px
}
</style>
