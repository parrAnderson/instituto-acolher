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
    'prefix' => 'auth'
], function ($router) {
    // Route::post('login', 'Auth\AuthController@login');
    Route::post('logout', 'Auth\AuthController@logout');
    Route::post('refresh', 'Auth\AuthController@refresh');
    Route::post('me', 'Auth\AuthController@me');

    Route::post('register', 'Api\V1\Auth\RegisterController@register');
    Route::post('login', 'Api\V1\Auth\RegisterController@login'); 
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'users'
], function ($router) {
    Route::post('/atualizar', 'Api\V1\Users\UsersController@atualizar');
    Route::get('/{id}', 'Api\V1\Users\UsersController@showUser');
    Route::get('/cartao/{id}', 'Api\V1\Users\UsersController@showCard');
    Route::get('/', 'Api\V1\Users\UsersController@allUsers');
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'atendimento'
], function ($router) {
    Route::post('/cadastrar', 'Api\V1\Atendimentos\AtendimentosController@store');
});


