@if($genero == "Masculino") Prezado 
@elseif($genero == "Feminino") Prezada 
@else($genero == "Masculino") Prezadx @endif {{$nome}},
<br><br>

Com alegria e gratidão, confirmamos sua inscrição temporária como 
@if($genero == "Masculino") Obreiro 
@elseif($genero == "Feminino") Obreira 
@else($genero == "Masculino") Obreirx  @endif

do Instituto Acolher, sob o número: <span class="red bold">{{$obreiro}}</span>.
<br><br>
Tão logo o desenvolvimento do nosso sistema operacional esteja concluído, disponibilizaremos o Termo de Adesão a Serviço Voluntário, o qual será o documento oficial para registro dos Obreiros do nosso Instituto.
<br><br>
Que nossos Amigos do Alto continuem nos intuindo e amparando!
<br><br>
Muito 
@if($genero == "Masculino") bem-vindo! 
@elseif($genero == "Feminino") bem-vinda! 
@else($genero == "Masculino") bem-vindx! @endif


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