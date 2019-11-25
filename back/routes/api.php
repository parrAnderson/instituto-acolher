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
    'prefix' => 'obreiros'
], function () {
    Route::post('acoes/store', 'Obreiros\AcoesObreirosController@store');

   
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'atendimentos'
], function () {
    Route::post('store', 'Atendimentos\AtendimentosController@store');

    Route::put('/{id}', 'Atendimentos\AtendimentosController@update');
    Route::post('atualizarstatus', 'Atendimentos\AtendimentosController@atualizarStatus');
    Route::get('index', 'Atendimentos\AtendimentosController@index');
   
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'atendimentosapometria'
], function () {
    // Route::post('store', 'Atendimentos\AtendimentosController@store');
    Route::get('index/{status}', 'Atendimentos\AtendimentosApometriaController@index');
    Route::get('confirmacao', 'Atendimentos\AtendimentosApometriaController@confirmacao');
    Route::post('store', 'Atendimentos\AtendimentosApometriaController@store');
    Route::post('gerarlistaparaatendimento', 'Atendimentos\AtendimentosApometriaController@gerarListaParaAtendimento');
    Route::put('/{id}', 'Atendimentos\AtendimentosApometriaController@update');
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
});