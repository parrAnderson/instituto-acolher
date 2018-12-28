<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Auth::routes();

/* ##### ROTAS DE AUTH ###### */
  /* AUTH USER */  
  Route::auth();  
  /* AUTH ADMIN */
    Route::prefix('admin')->group(function() {    
      Route::get('/','Auth\AdminController@index')->name('admin.dashboard');
      Route::get('/login','Auth\AdminLoginController@login')->name('admin.login');
      Route::post('/login','Auth\AdminLoginController@Postlogin')->name('admin.login.submit');
      Route::get('/logout','Auth\AdminController@logout')->name('admin.logout');
      Route::get('/sair','Auth\AdminController@logout')->name('admin.sair');      
    });
/* ##### FIM ROTAS AUTH ###### */

Route::group(['as' => 'admin.','prefix' => 'admin'],function(){  
    Route::group(['middleware' => ['auth:admin']], function(){  

       
        Route::get('/', function () {
            return view('admin');
        });

    });
}); 
/* FIM ROTAS ADMINISTRADOR */

Route::group(['as' => 'usuario.','prefix' => 'usuario'],function(){  
    Route::group(['middleware' => ['auth:web']], function(){  

       
        Route::get('/', function () {
            return('usuario Logado');
        });

    });
}); 
/* FIM ROTAS ADMINISTRADOR */

