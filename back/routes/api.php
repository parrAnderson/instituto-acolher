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