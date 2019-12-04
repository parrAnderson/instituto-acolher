@if($genero == "Masculino") Prezado 
@elseif($genero == "Feminino") Prezada 
@else($genero == "Masculino") Prezadx @endif {{$nome}},
<br><br>
Efetuamos o seu registro como 
@if($genero == "Masculino") frequentador
@elseif($genero == "Feminino") frequentadora 
@else($genero == "Masculino") frequentadorx @endif  do <span class="bold">Instituto</span> <span class="acolher bold">Acolher</span>, de maneira a facilitar sua identificação e acesso nas futuras visitas.
<br><br>
O <span class="bold">acesso</span> ao <span class="acolher bold">Acolher</span> é <span class="bold">permitido</span> mediante a apresentação do <span class="bold">Cartão de Identificação de Frequentador</span>, o qual lhe possibilita a <span class="bold">participação</span> em <span class="bold">todas as atividades assistenciais</span> do <span class="bold">Instituto</span>. 
<br><br>
O seu <span class="bold">número</span> de <span class="bold">registro de frequentador</span> é: <span class="bold red">{{$id}}</span>
<br><br>
Para emissão do <span class="bold">Cartão de Identificação de Frequentador</span> pedimos que nos seja encaminhada <span class="bold">uma foto sua 3x4</span>, digitalizada em extensão JPG, <span class="bold">ao e-mail abaixo:</span>
    <br><br>
semear.acolher@hotmail.com
<br><br>
Para facilitar a identificação, por favor, nomeie o arquivo da foto com o número do seu registro de frequentador.
<br><br>
Que nossos Amigos do Alto continuem nos intuindo e amparando!

<br><br>
Nossos votos de muita Paz!

<br><br>
<h2 class="acolher bold">Acolher</h2>
<p class="bold">Instituto Kardecista de Estudos e Amparo</p>
<style>
    .acolher{
        color: #1a3564;
        margin: 0px;
        
    }
    .bold{
        margin: 0px;
        font-weight: bold;
    }
    .red{
        color: red;
    }
</style>