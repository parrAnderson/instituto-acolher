<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'imagem'
], function () {
    Route::post('/', 'imageController@upload');


});


Route::group([
    'middleware' => 'api',
    'prefix' => 'obreiros'
], function () {
    Route::post('acoes/store', 'Obreiros\AcoesObreirosController@store');
    Route::get('index', 'Obreiros\AcoesObreirosController@index');
    Route::get('/', 'Obreiros\ObreirosController@index'); 

    Route::get('datasdesativadas/{id}', 'Obreiros\ObreirosDatasDesativadoController@index');
    Route::post('datasdesativadas', 'Obreiros\ObreirosDatasDesativadoController@store');
    Route::delete('datasdesativadas/excluir/{id}', 'Obreiros\ObreirosDatasDesativadoController@destroy');
   
    
    
    Route::post('termo', 'Obreiros\TermoObreirosConfirmadosController@store');
    Route::get('termo/{id}', 'Obreiros\TermoObreirosConfirmadosController@show');

   
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'qrcode'
], function () {
    Route::get('/{id}', 'Qrcode\QrcodeController@index');

});

Route::group([
    'middleware' => 'api',
    'prefix' => 'calendarioapometria'
], function () {
    Route::post('datascanceladas/store', 'Calendario\DatasCanceladasCalendarioApometriaController@store');
    Route::get('datascanceladas', 'Calendario\DatasCanceladasCalendarioApometriaController@index');
    Route::delete('datascanceladas/{id}', 'Calendario\DatasCanceladasCalendarioApometriaController@destroy');

});

Route::group([
    'middleware' => 'api',
    'prefix' => 'frequentador'
], function () {
    Route::get('index', 'Frequentador\FrequentadorController@index');  
    Route::get('edit/{id}', 'Frequentador\FrequentadorController@edit');  
    Route::put('/{id}', 'Frequentador\FrequentadorController@update');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'atendimentos'
], function () {
    Route::post('store', 'Atendimentos\AtendimentosController@store');

    Route::put('/{id}', 'Atendimentos\AtendimentosController@update');
    Route::post('atualizarstatus', 'Atendimentos\AtendimentosController@atualizarStatus');
    Route::get('index', 'Atendimentos\AtendimentosController@index');
    Route::get('/edit/{id}', 'Atendimentos\AtendimentosController@edit');
    Route::get('tipo/{tipo}', 'Atendimentos\AtendimentosController@getAtendimentosTipo');
   
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'atendimentosapometria'
], function () {
    // Route::post('store', 'Atendimentos\AtendimentosController@store');
    Route::get('index/{status}', 'Atendimentos\AtendimentosApometriaController@index');
    Route::get('relacaodeatendidos/{data}', 'Atendimentos\AtendimentosApometriaController@relacaoDeAtendidos');
    Route::get('confirmacao', 'Atendimentos\AtendimentosApometriaController@confirmacao');
    Route::post('store', 'Atendimentos\AtendimentosApometriaController@store');
    Route::post('gerarlistaparaatendimento', 'Atendimentos\AtendimentosApometriaController@gerarListaParaAtendimento');
    Route::put('/{id}', 'Atendimentos\AtendimentosApometriaController@update');
    Route::get('macasrodadas/{data}', 'Atendimentos\AtendimentosApometriaController@macasRodadas');
    Route::get('atendimentocomdatastatus/{data}/{status}', 'Atendimentos\AtendimentosApometriaController@getAtendimentosApometriaComDataStatus');
    Route::get('atendimentocomdatastatusmaca/{data}/{status}/{maca}/{tipostatus}', 'Atendimentos\AtendimentosApometriaController@getAtendimentosApometriaComDataStatusMaca');
});


Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'Auth\AuthController@login');
    Route::post('signup', 'Auth\AuthController@signup');
  
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'Auth\AuthController@logout');
        Route::get('user', 'Auth\AuthController@user');
    });
});




Route::get('/apiteste', function () {
    return 'Hello World';
});

Route::group(['middleware' => 'cors'], function () {
    
    Route::get('/v1/apiteste', 'ApiTesteController@index');

    
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'email'
], function ($router) {
    Route::post('/cadastrar', 'Emails\emailCadastroController@cadastro');
    Route::post('/obreiro', 'Emails\emailCadastroObreiroController@obreiroCadastro');
    Route::post('/dataatendimento', 'Emails\emailDataAtendimentoController@AtendimentoCadastrado');
    Route::post('/solicitacaoatendimentoapometria', 'Emails\emailSolicitacaoAtendimentoController@apometria');
});