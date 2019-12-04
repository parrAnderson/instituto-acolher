<template>
    <div>
        1) INSTITUIÇÃO BENEFICIÁRIA DA VOLUNTARIEDADE: 
<br><br>
Acolher – Instituto Kardecista de Estudos e Amparo, inscrito no CNPJ/MF sob o n.º ..................................., sediada neste município de Guarulhos / SP, na Rua Antônio Cristóvam, n.º 134, bairro Bom Clima, neste ato representada por seu Presidente, Sr. Nilton de Almeida Junior.
<br><br>
2) VOLUNTÁRIO:
<br><br>
Nome: {{user.name}}<br>
Identidade: {{user.rg}} CPF: {{user.cpf}} Data de nascimento: {{user.data_nascimento}}<br>
Telefones:{{user.celular}} | {{user.telefone}}  | {{user.celular_responsavel}} Endereço: {{user.logradouro}} n º {{user.numero}}<br>
Complemento: {{user.complemento}} Bairro: {{user.bairro}}   CEP: {{user.cep}}<br>
E-mail:{{user.email}}<br><br>


3) Por este termo o voluntário acima qualificado, nos termos da Lei n.º 9.608, de 18 de fevereiro de 1998 e alterações, se compromete a prestar serviços voluntários em prol da instituição beneficiária acima qualificada, em suas dependências, conforme características, especialmente nos dias e horários discriminados no quadro abaixo:
<br><br>
Dia da semana:
Hora:
Local:
Características do serviço:


<br><br>
3.1) O Voluntário reconhece que alguns serviços poderão, por suas peculiaridades, ser executados fora das dependências da instituição. 
<br><br>
4) O Voluntário declara conhecer que a prestação dos serviços descritos acima não gera vínculo empregatício, nem obrigações de natureza trabalhista, previdenciária ou afim; que inexiste controle de frequência ou exigência de aviso prévio formal no caso de descontinuidade da relação objeto deste Termo.
<br><br>
5) O Voluntário declara que é detentor de todas as condições necessárias ao desempenho dos serviços a que se compromete e que tem ciência de que, no caso de acarretar danos a terceiros, sejam decorrentes de dolo ou culpa, poderá ficar sujeito a arcar com os consequentes prejuízos.
<br><br>
6) O Voluntário declara, espontaneamente, estar ciente e de acordo com os termos da Lei Federal nº 9. 608 de 18/02/98, que dispõe sobre o serviço voluntário, cujo texto está transcrito no verso deste termo.
<br><br>
7) Nos casos de eventuais viagens para a realização de atividade do interesse da instituição beneficiária, declara o Voluntário estar ciente de que as despesas com alimentação, deslocamento e estadia poderão ser suportadas pelo Instituto, de forma direta ou mediante ressarcimento das despesas efetuadas mediante comprovação de tais gastos, desde que a viagem e referidas despesas tenham sido prévia e expressamente autorizadas pelo seu presidente.
<br><br>

       8) O Voluntário AUTORIZA a instituição beneficiária, acima qualificada, a título gratuito e em caráter definitivo, irrevogável, irretratável e por prazo indeterminado, utilizar o seu nome e sua imagem e voz obtidas, captadas, gravadas e fotografadas nos trabalhos da instituição, bem como reproduzidas por qualquer forma de tecnologia para uso em atividades doutrinárias ou de divulgação, seja através de mídia virtual, impressa, televisiva, radiodifusão, palestras e seminários, dentre outros.
<br><br>
       9) O Voluntário NÃO AUTORIZA a instituição beneficiária, acima qualificada, a utilizar o seu nome, imagem e voz, obtidas, captadas, gravadas e fotografadas nos trabalhos da instituição, bem como reproduzidas por qualquer forma de tecnologia para uso em atividades doutrinárias ou de divulgação, seja através de mídia virtual, impressa, televisiva, radiodifusão, palestras e seminários, dentre outros.
<br><br>
10) O presente termo vigora pelo prazo de um ano, com início na data de sua assinatura, podendo qualquer das partes rescindi-lo quando lhe aprouver, sem qualquer ônus e independentemente de prévia comunicação. 
<br><br>
10.1) Na ausência de manifestação das partes, o presente termo será sucessiva e automaticamente renovado por iguais períodos.

<br><br>
Acolher – Instituto Kardecista de Estudos e Amparo 
<br><br>
(Lei nº 9. 608, de 18 de fevereiro de 1988) - Dispõe sobre o serviço voluntário e dá outras providências.
<br><br>
Art. 1o Considera-se serviço voluntário, para os fins desta Lei, a atividade não remunerada prestada por pessoa física a entidade pública de qualquer natureza ou a instituição privada de fins não lucrativos que tenha objetivos cívicos, culturais, educacionais, científicos, recreativos ou de assistência à pessoa. (Redação dada pela Lei nº 13.297, de 16 de junho de 2016)
Parágrafo único. O serviço voluntário não gera vínculo empregatício, nem obrigação de natureza trabalhista previdenciária ou afim.
<br>
Art. 2º O serviço voluntário será exercido mediante a celebração de termo de adesão entre a entidade, pública ou privada, e o prestador do serviço voluntário, dele devendo constar o objeto e as condições de seu exercício.
<br>
Art. 3º O prestador do serviço voluntário poderá ser ressarcido pelas despesas que comprovadamente realizar no desempenho das atividades voluntárias.
Parágrafo único. As despesas a serem ressarcidas deverão estar expressamente autorizadas pela entidade a que for prestado o serviço voluntário.
<br>
Art. 4º Esta Lei entra em vigor na data de sua publicação.
<br>
Art. 5º Revogam-se as disposições em contrário.
Brasília, 18 de fevereiro de 1998; 177º da Independência e 110º da República.
Presidência da República, Fernando Henrique Cardoso. Brasília,18/02/98 
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: "TermoObreiro",
        computed:{
            ...mapState({
                user: state => state.Auth.user.data
            })
        }
    }
</script>

<style scoped>

</style>